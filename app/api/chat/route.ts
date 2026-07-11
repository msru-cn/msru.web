import { createUIMessageStreamResponse } from "ai";

export const runtime = "edge";

const DIFY_BASE_URL = process.env.DIFY_BASE_URL || "https://api.dify.ai/v1";

const DIFY_API_KEY = process.env.DIFY_API_KEY;

export async function POST(req: Request) {
  const reqJson = await req.json();

  const messages = reqJson.messages || [];

  // 1. 提取用户的最新问题

  const lastMessage = messages[messages.length - 1];

  // 适配不同的消息体结构

  const query =
    typeof lastMessage?.content === "string"
      ? lastMessage.content
      : lastMessage?.parts?.find((p: { type: string; text?: string }) => p.type === "text")?.text || "";

  if (!query.trim()) {
    return new Response('0:"没有收到有效的问题"\n', {
      headers: { "Content-Type": "text/plain; charset=utf-8", "X-Vercel-AI-Data-Stream": "v1" },
    });
  }

  // 2. 发起请求到 Dify (使用原生 chat-messages 接口)

  const difyResponse = await fetch(`${DIFY_BASE_URL}/chat-messages`, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${DIFY_API_KEY}`,

      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      inputs: {},

      query: query,

      response_mode: "streaming",

      user: "msru-web-user", // 建议后续换成实际的用户ID以保持上下文记忆
    }),
  });

  if (!difyResponse.ok) {
    return new Response(`Error from Dify API: ${difyResponse.statusText}`, { status: difyResponse.status });
  }

  // 3. 核心：将 Dify 数据流转化为 Vercel AI SDK (Fumadocs) 的 Data Stream 协议

  const decoder = new TextDecoder();

  let buffer = "";

  const messageId = `msg_${Date.now()}`;

  const stream = new ReadableStream({
    async start(controller) {
      const reader = difyResponse.body?.getReader();

      if (!reader) {
        controller.close();

        return;
      }

      // Start text part

      controller.enqueue({ type: "text-start", id: messageId });

      try {
        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split("\n");

          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();

            if (!trimmed.startsWith("data:")) continue;

            const dataStr = trimmed.slice(5).trim();

            if (!dataStr || dataStr === "[DONE]" || dataStr === "ping") continue;

            try {
              const data = JSON.parse(dataStr);

              // 🌟 动作 A：输出对话文字分片

              if (data.event === "message" && data.answer) {
                controller.enqueue({
                  type: "text-delta",

                  id: messageId,

                  delta: data.answer,
                });
              }

              // 🌟 动作 B：工具调用

              if (data.event === "message_end" && data.metadata?.retriever_resources?.length > 0) {
                // biome-ignore lint/suspicious/noExplicitAny: complex dynamic object from API
                const links = data.metadata.retriever_resources.map((res: any, index: number) => ({
                  label: `${index + 1}`,

                  url: res.document_metadata?.url || `/docs/search?q=${encodeURIComponent(res.document_name)}`,

                  title: res.document_name || res.document_metadata?.title || "参考文档",

                  type: "documentation",

                  breadcrumbs: [res.dataset_name || "MSRU 知识库"],
                }));

                const toolCallId = `call_${Date.now()}`;

                controller.enqueue({
                  type: "tool-input-available",

                  toolCallId,

                  toolName: "provideLinks",

                  input: { links },
                });

                // Since it's a fake tool for UI, we marks it as executed immediately

                controller.enqueue({
                  type: "tool-output-available",

                  toolCallId,

                  output: { success: true },
                });
              }
            } catch (err) {
              console.error("JSON Parse Error:", err, dataStr);
            }
          }
        }
      } finally {
        controller.enqueue({ type: "text-end", id: messageId });

        controller.close();
      }
    },
  });

  return createUIMessageStreamResponse({ stream });
}

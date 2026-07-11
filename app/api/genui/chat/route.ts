import { convertToModelMessages, stepCountIs, streamText, type UIMessage } from "ai";
import { genuiTools } from "@/lib/ai/genui-tools";
import { genuiModel } from "@/lib/ai/provider";

export const maxDuration = 30;

const SYSTEM_PROMPT = `你是 MSRU 工业软件官网的智能助手。回答用户问题时：
- 涉及多个产品对比或介绍时，调用 provideProductComparison（传产品 slug）。
- 涉及价格/套餐时，调用 providePricing。
- 涉及行业方案推荐时，调用 provideSolution。
- 其余情况正常用文字回答。调用工具后用一句话总结。`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: genuiModel(),
    system: SYSTEM_PROMPT,
    messages: modelMessages,
    tools: genuiTools,
    stopWhen: stepCountIs(3),
  });

  return result.toUIMessageStreamResponse();
}

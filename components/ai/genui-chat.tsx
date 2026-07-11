"use client";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import { GENUI_TOOL_NAMES } from "@/lib/ai/genui-schema";
import { GenUiToolPart } from "./genui-cards";
import { Markdown } from "./markdown";

export function isToolPart(type: string): boolean {
  return GENUI_TOOL_NAMES.some((name) => type === `tool-${name}`);
}

export function GenUiChat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/genui/chat" }),
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        {messages.map((message) => (
          <div key={message.id}>
            <p className="mb-1 text-sm font-medium text-fd-muted-foreground">
              {message.role === "user" ? "你" : "MSRU 助手"}
            </p>
            {message.parts.map((part, i) => {
              if (part.type === "text") {
                return (
                  <div key={`${message.id}-t-${i}`} className="prose text-sm">
                    <Markdown text={part.text} />
                  </div>
                );
              }
              if (isToolPart(part.type) && "output" in part && part.output) {
                return <GenUiToolPart key={`${message.id}-c-${i}`} type={part.type} data={part.output} />;
              }
              return null;
            })}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.trim()) return;
          void sendMessage({ text: input });
          setInput("");
        }}
        className="flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="问问 MSRU（如：对比 MES 和 WMS）"
          disabled={status === "streaming"}
          className="flex-1 rounded-full border border-border px-4 py-2 text-sm"
        />
        <button
          type="submit"
          disabled={status === "streaming"}
          className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          发送
        </button>
      </form>
    </div>
  );
}

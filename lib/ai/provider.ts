import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

export function genuiModel() {
  const provider = createOpenAICompatible({
    name: "dashscope",
    apiKey: process.env.DASHSCOPE_API_KEY ?? "",
    baseURL: process.env.DASHSCOPE_BASE_URL ?? "https://dashscope.aliyuncs.com/compatible-mode/v1",
  });
  return provider(process.env.GENUI_MODEL ?? "qwen-plus");
}

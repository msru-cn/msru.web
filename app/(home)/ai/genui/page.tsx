import { GenUiChat } from "@/components/ai/genui-chat";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "MSRU 智能助手",
  description: "用自然语言探索 MSRU 产品、方案与定价。",
});

export default function GenUiPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-8">MSRU 智能助手</h1>
      <GenUiChat />
    </main>
  );
}

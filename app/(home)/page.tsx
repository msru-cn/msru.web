import { BlockRenderer } from "@/components/marketing";
import data from "@/content/marketing/pages/home.json";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "MSRU · AI-Native 工业数字化底座",
  description:
    "Core 是操作系统，业务是 App。MES、WMS、APS、QMS、IoT、AI 像应用一样安装在统一基座之上，按需开通、到期停服。一次声明，全生命周期自动投影。",
});

export default function HomePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden">
      <BlockRenderer blocks={data} />
    </main>
  );
}

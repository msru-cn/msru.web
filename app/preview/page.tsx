import { notFound } from "next/navigation";
import { renderBlock } from "@/components/marketing/block-renderer";
import homeData from "@/content/marketing/pages/home.json";
import { parsePage } from "@/lib/marketing/blocks-schema";
import { PreviewThemeReset } from "./theme-reset";

/**
 * dev-only 组件预览页 —— 直接读取真实主页 home.json，每个 block 在明暗双主题下
 * 并排渲染，便于逐块审美打磨。数据永远与线上主页一致，不会漂移。
 * 生产环境返回 404，不会进入正式站点。
 */
export const dynamic = "force-static";

const BLOCKS = parsePage(homeData);

function Pane({ label, mode, children }: { label: string; mode: "light" | "dark"; children: React.ReactNode }) {
  return (
    <div className={mode === "dark" ? "dark" : undefined}>
      <div className="relative text-foreground border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
        <div className="page-stage-local" aria-hidden="true" />
        <div className="relative z-10 flex items-center gap-2 px-4 py-2 text-[11px] font-mono uppercase tracking-wider text-zinc-500 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
          <span className="inline-block size-2 rounded-full bg-blue-500" />
          {label} · {mode}
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

export default function PreviewPage() {
  if (process.env.NODE_ENV === "production") notFound();
  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-950 py-10 px-4 md:px-8 space-y-16">
      <PreviewThemeReset />
      <header className="max-w-3xl mx-auto text-center space-y-2">
        <h1 className="text-2xl font-bold">Block 组件预览</h1>
        <p className="text-sm text-zinc-500">
          {BLOCKS.length} 个区块 · 数据源自主页 home.json · 明暗双主题并排 · 仅开发环境可见
        </p>
      </header>
      {BLOCKS.map((block, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: 预览页 block 列表顺序固定且含重复 type，index 是必要的 key 组成
        <section key={`${block.type}-${i}`} className="max-w-[1600px] mx-auto space-y-3">
          <h2 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 px-1">
            {String(i + 1).padStart(2, "0")} — {block.type}
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Pane label={block.type} mode="light">
              {renderBlock(block, i)}
            </Pane>
            <Pane label={block.type} mode="dark">
              {renderBlock(block, i)}
            </Pane>
          </div>
        </section>
      ))}
    </main>
  );
}

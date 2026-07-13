import Link from "next/link";
import { cn } from "@/lib/cn";

export interface ListItem {
  title: string;
  meta?: string;
  desc?: string;
  tag?: string;
  href?: string;
}
export interface ListBlockProps {
  variant?: "timeline" | "cards" | "rows" | "steps";
  items: ListItem[];
}

/**
 * 通用列表 —— timeline/cards/rows/steps 四态。glass-stage 背景 + 玻璃条目。
 * 明暗双主题自适应。
 */
export function ListBlock({ variant = "rows", items }: ListBlockProps) {
  const grid = variant === "cards" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4";
  return (
    <section className="glass-stage py-24 md:py-28">
      <div className="container mx-auto max-w-4xl px-6">
        <ol className={grid}>
          {items.map((it, i) => {
            const inner = (
              <>
                <div className="flex flex-wrap items-center gap-3">
                  {variant === "steps" && (
                    <span className="grid size-7 place-items-center rounded-full bg-linear-to-br from-blue-500 to-cyan-500 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                  )}
                  <h3 className="font-bold text-zinc-900 dark:text-white">{it.title}</h3>
                  {it.tag && (
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-500">
                      {it.tag}
                    </span>
                  )}
                  {it.meta && <span className="text-xs text-zinc-400">{it.meta}</span>}
                </div>
                {it.desc && <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{it.desc}</p>}
              </>
            );
            const cls = cn(
              "glass glass-hover rounded-2xl p-6",
              variant === "timeline" && "border-l-2 border-l-blue-500/50",
            );
            return (
              <li key={`${it.title}-${it.meta ?? i}`} className={cls}>
                {it.href ? (
                  <Link href={it.href} className="block">
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

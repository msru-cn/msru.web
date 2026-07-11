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

export function ListBlock({ variant = "rows", items }: ListBlockProps) {
  const grid = variant === "cards" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4";
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <ol className={grid}>
          {items.map((it, i) => {
            const inner = (
              <>
                <div className="flex items-center gap-3 flex-wrap">
                  {variant === "steps" && (
                    <span className="size-7 rounded-full bg-primary/10 text-primary text-sm font-bold grid place-items-center">
                      {i + 1}
                    </span>
                  )}
                  <h3 className="font-bold text-zinc-900 dark:text-white">{it.title}</h3>
                  {it.tag && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500">
                      {it.tag}
                    </span>
                  )}
                  {it.meta && <span className="text-xs text-zinc-400">{it.meta}</span>}
                </div>
                {it.desc && <p className="text-sm text-zinc-500 mt-2">{it.desc}</p>}
              </>
            );
            const cls = cn(
              "p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50",
              variant === "timeline" && "border-l-2 border-l-primary/40",
            );
            return (
              <li key={`${it.title}-${i}`} className={cls}>
                {it.href ? <Link href={it.href} className="block hover:opacity-80">{inner}</Link> : inner}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

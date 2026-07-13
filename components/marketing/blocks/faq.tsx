"use client";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}
export interface FaqProps {
  items: FaqItem[];
}

/**
 * FAQ 手风琴 —— glass-stage 背景 + 玻璃 details 条目。明暗双主题自适应。
 */
export function Faq({ items }: FaqProps) {
  return (
    <section className="glass-stage py-24 md:py-28">
      <div className="container mx-auto max-w-3xl space-y-4 px-6">
        {items.map((it) => (
          <details key={it.q} className="group glass glass-hover rounded-2xl p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-zinc-900 dark:text-white">
              {it.q}
              <ChevronDown
                className="size-5 text-zinc-400 transition-transform duration-[var(--dur-base)] ease-[var(--ease-glass)] group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-4 leading-relaxed text-zinc-500 dark:text-zinc-400">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

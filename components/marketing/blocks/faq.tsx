"use client";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}
export interface FaqProps {
  items: FaqItem[];
}

export function Faq({ items }: FaqProps) {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-3xl space-y-4">
        {items.map((it) => (
          <details
            key={it.q}
            className="group rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6"
          >
            <summary className="flex items-center justify-between cursor-pointer font-bold text-zinc-900 dark:text-white list-none">
              {it.q}
              <ChevronDown
                className="size-5 text-zinc-400 group-open:rotate-180 transition-transform"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-4 text-zinc-500 leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

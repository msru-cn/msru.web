import { cn } from "@/lib/cn";
import { type AccentColor, getAccent } from "./accent";

export interface Stat {
  value: string;
  unit: string;
  label: string;
}

export interface StatBlockProps {
  heading: string;
  accentColor?: AccentColor;
  stats: Stat[];
}

/**
 * 数据带 —— glass-stage 背景 + 玻璃统计卡。数字用强调色，明暗双主题自适应。
 */
export function StatBlock({ heading, accentColor = "blue", stats }: StatBlockProps) {
  const accent = getAccent(accentColor);
  return (
    <section className="glass-stage w-full py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-white">
          {heading}
        </h2>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass glass-hover flex flex-col items-center justify-center rounded-3xl px-6 py-10 text-center"
            >
              <span className={cn("mb-3 text-5xl font-bold tracking-tighter md:text-6xl", accent.text)}>
                {s.value}
                <span className="text-3xl md:text-4xl">{s.unit}</span>
              </span>
              <span className="text-base font-medium text-zinc-500 dark:text-zinc-400">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

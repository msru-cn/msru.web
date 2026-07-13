import { cn } from "@/lib/cn";
import { resolveIcon } from "@/lib/marketing/icon-registry";
import { type AccentColor, getAccent } from "../accent";

export interface FeatureCard {
  icon?: string;
  title: string;
  desc: string;
  /** 可选：图标徽章配色，默认蓝。用于保留子页原有的多彩图标层次。 */
  accentColor?: AccentColor;
}
export interface FeatureGridProps {
  columns?: 2 | 3;
  cards: FeatureCard[];
}

/**
 * 特性网格 —— glass-stage 背景 + 玻璃卡片，图标玻璃徽章。
 * 与 hero/bento 同一套玻璃语言，明暗双主题自适应。
 * 每张卡可配 accentColor(默认蓝)，保留多彩图标层次。
 */
export function FeatureGrid({ columns = 2, cards }: FeatureGridProps) {
  return (
    <section className="glass-stage py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className={cn("grid grid-cols-1 gap-6 md:gap-8", columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2")}>
          {cards.map((card) => {
            const Icon = resolveIcon(card.icon);
            const accent = getAccent(card.accentColor ?? "blue");
            return (
              <div key={card.title} className="glass glass-hover flex flex-col gap-4 rounded-3xl p-8">
                {Icon && (
                  <div className={cn("glass-subtle flex size-12 items-center justify-center rounded-2xl", accent.text)}>
                    <Icon className="size-6" />
                  </div>
                )}
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{card.title}</h3>
                <p className="leading-relaxed text-zinc-500 dark:text-zinc-400">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

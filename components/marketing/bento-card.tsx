import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { type AccentColor, getAccent } from "./accent";

export interface BentoCardProps {
  icon: LucideIcon;
  accentColor: AccentColor;
  title: string;
  tagline: string;
  description: string;
  span?: "normal" | "wide";
}

export type BentoItem = BentoCardProps;

export function BentoCard({ icon: Icon, accentColor, title, tagline, description, span = "normal" }: BentoCardProps) {
  const accent = getAccent(accentColor);
  return (
    <div
      className={cn(
        "group relative flex flex-col items-center text-center p-12 h-[420px] rounded-[2.5rem] overflow-hidden",
        "glass glass-hover",
        span === "wide" && "md:col-span-2 lg:col-span-3",
      )}
    >
      {/* accent 光团置于玻璃之下，被 backdrop-blur 染色，悬停时增强上移 */}
      <div
        className={cn(
          "absolute -bottom-24 left-1/2 -translate-x-1/2 w-[130%] h-[280px] bg-linear-to-t blur-[64px] opacity-60 group-hover:opacity-90 group-hover:-translate-y-4 transition-all duration-[var(--dur-slow)] ease-[var(--ease-glass)] pointer-events-none",
          accent.glow,
        )}
      />
      <div className="relative z-10 flex flex-col items-center">
        {/* 图标玻璃徽章 */}
        <div
          className={cn(
            "glass-subtle mb-6 flex size-16 items-center justify-center rounded-2xl transition-transform duration-[var(--dur-base)] ease-[var(--ease-glass)] group-hover:scale-110",
            accent.text,
          )}
        >
          <Icon className="size-8" />
        </div>
        <h3 className="text-3xl font-bold mb-2 tracking-tight text-zinc-900 dark:text-white">{title}</h3>
        <p className={cn("text-lg font-medium mb-4", accent.text)}>{tagline}</p>
        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[280px]">{description}</p>
      </div>
    </div>
  );
}

export function BentoGrid({ children }: { children: ReactNode }) {
  return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">{children}</div>;
}

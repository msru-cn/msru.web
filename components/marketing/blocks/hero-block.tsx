import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { resolveIcon } from "@/lib/marketing/icon-registry";
import { type AccentColor, getAccent } from "../accent";
import { HeroBackground } from "./hero-background";

export interface HeroCta {
  label: string;
  href: string;
}
export interface HeroBlockProps {
  badge?: { icon: string; text: string };
  title: string;
  titleAccent?: string;
  subtitle?: string;
  accentColor?: AccentColor;
  bgImage?: string;
  bgVideo?: string;
  isFirst?: boolean;
  ctas?: HeroCta[];
}

/**
 * Liquid Glass 着陆页 hero —— 光投层叠背景 + 玻璃徽章 + 玻璃 CTA。
 * 明暗双主题自适应。承载首屏最强视觉。
 */
export function HeroBlock({
  badge,
  title,
  titleAccent,
  subtitle,
  accentColor = "blue",
  bgImage,
  bgVideo,
  isFirst = true,
  ctas = [],
}: HeroBlockProps) {
  const accent = getAccent(accentColor);
  const BadgeIcon = badge ? resolveIcon(badge.icon) : undefined;
  const [primary, secondary] = ctas;

  return (
    <section
      className={cn(
        "relative flex flex-col items-center overflow-hidden bg-white px-6 pt-[22vh] pb-24 md:pt-[26vh] md:pb-32 text-center dark:bg-zinc-950",
        isFirst && "min-h-[88vh] lg:min-h-screen",
      )}
    >
      <HeroBackground bgImage={bgImage} bgVideo={bgVideo} />
      {/* 光投层叠背景：两团柔光 orb + 顶部渐隐 */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute -top-40 left-1/2 -translate-x-1/2 size-[720px] rounded-full blur-[120px] opacity-30 dark:opacity-25 bg-linear-to-br",
            accent.gradientFrom,
            "to-transparent",
          )}
        />
        <div className="absolute bottom-0 right-[10%] size-[420px] rounded-full blur-[110px] opacity-20 dark:opacity-20 bg-linear-to-tr from-cyan-400 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white dark:to-zinc-950" />
        {/* 细网格纹理，增加"技术感" */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      {/* 徽标：左上角，与导航栏 logo 对齐 */}
      {badge && (
        <div className="z-10 absolute top-20 md:top-24 inset-x-0 mx-auto w-full max-w-fd-container px-6">
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium backdrop-blur-md border border-white/40 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 shadow-sm",
              accent.text,
            )}
          >
            {BadgeIcon && <BadgeIcon className="size-4" />}
            {badge.text}
          </div>
        </div>
      )}

      <div className="z-10 relative flex flex-col items-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.12] whitespace-pre-wrap text-zinc-900 dark:text-white">
          {title}
          {titleAccent && <span className={cn("italic", accent.text)}> {titleAccent}</span>}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg md:text-2xl font-normal text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-14 text-balance whitespace-pre-wrap">
            {subtitle}
          </p>
        )}

        {ctas.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 w-full sm:w-auto">
            {primary && (
              <Link
                href={primary.href}
                className={cn(
                  "group w-full sm:w-auto h-14 px-9 inline-flex items-center justify-center gap-2 rounded-full text-base font-medium text-white transition-all duration-[var(--dur-base)] ease-[var(--ease-glass)] hover:scale-[1.03] bg-linear-to-r shadow-lg",
                  accent.gradientFrom,
                  "to-cyan-500 shadow-blue-500/25",
                )}
              >
                {primary.label}
                <ArrowRight className="size-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-1" />
              </Link>
            )}
            {secondary && (
              <Link
                href={secondary.href}
                className="glass glass-hover w-full sm:w-auto h-14 px-9 inline-flex items-center justify-center rounded-full text-base font-medium text-zinc-800 dark:text-zinc-100"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

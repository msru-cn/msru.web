import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { resolveIcon } from "@/lib/marketing/icon-registry";
import { type AccentColor, getAccent } from "../accent";

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
  ctas = [],
}: HeroBlockProps) {
  const accent = getAccent(accentColor);
  const BadgeIcon = badge ? resolveIcon(badge.icon) : undefined;
  const [primary, secondary] = ctas;

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[92vh] px-6 py-32 text-center overflow-hidden bg-white dark:bg-zinc-950">
      {/* 光投层叠背景：两团柔光 orb + 顶部渐隐 */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {bgImage && <Image src={bgImage} alt="" fill className="object-cover opacity-30" priority={false} />}
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

      <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto">
        {badge && (
          <div
            className={cn(
              "glass glass-hover inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-wide",
              accent.text,
            )}
          >
            {BadgeIcon && <BadgeIcon className="size-3.5" />}
            {badge.text}
          </div>
        )}

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.08] text-balance text-zinc-900 dark:text-white">
          {title}
          {titleAccent && <span className={cn("italic", accent.text)}> {titleAccent}</span>}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12 text-balance">
            {subtitle}
          </p>
        )}

        {ctas.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
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

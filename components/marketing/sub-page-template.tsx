import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { type AccentColor, getAccent } from "./accent";
import type { CtaLink } from "./hero";

export interface SubPageHeroProps {
  badge?: { icon: LucideIcon; text: string };
  title: ReactNode;
  subtitle?: string;
  accentColor?: AccentColor;
}

/**
 * 子页紧凑深色 hero —— 收编 24 个 trust/工具页共享的
 * `pt-32 pb-24 bg-zinc-950` + radial glow + 徽章 + 标题 + 副标 模板。
 */
export function SubPageHero({ badge, title, subtitle, accentColor = "blue" }: SubPageHeroProps) {
  const accent = getAccent(accentColor);
  const Badge = badge?.icon;
  return (
    <section className="relative pt-32 pb-24 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className={cn("absolute inset-0 opacity-30 dark:opacity-40 bg-linear-to-b", accent.glow)} aria-hidden="true" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {badge && Badge && (
            <div
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-current/10 border border-current/20 text-[10px] font-bold uppercase tracking-widest",
                accent.text,
              )}
            >
              <Badge className="size-3" /> {badge.text}
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white tracking-tighter">{title}</h1>
          {subtitle && (
            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}

/** 子页内容区容器（白/暗底），承载卡片网格、表格等。 */
export function SubPageSection({
  children,
  muted = false,
  className,
}: {
  children: ReactNode;
  muted?: boolean;
  className?: string;
}) {
  return (
    <section className={cn("py-24", muted ? "bg-zinc-50 dark:bg-zinc-900" : "bg-white dark:bg-zinc-950", className)}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
}

export interface SubPageCard {
  icon?: ReactNode;
  title: string;
  desc: string;
}

/** 子页卡片网格 —— 收编 trust/* 里 `rounded-[2rem]` 双列卡片。 */
export function SubPageCardGrid({ cards, columns = 2 }: { cards: SubPageCard[]; columns?: 2 | 3 }) {
  return (
    <div className={cn("grid grid-cols-1 gap-8", columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2")}>
      {cards.map((card) => (
        <div
          key={card.title}
          className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4"
        >
          {card.icon}
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{card.title}</h3>
          <p className="text-zinc-500 leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * 子页小尾 CTA —— 收编 trust/工具页 `py-24 bg-zinc-50` 居中小 CTA
 * （区别于产品页 py-40 的大 CTASection，保持原观感）。
 */
export function SubPageCta({
  title,
  description,
  cta,
}: {
  title: string;
  description?: string;
  cta: CtaLink;
}) {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
      <div className="container mx-auto px-6 space-y-6">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tighter">{title}</h2>
        {description && <p className="text-zinc-500">{description}</p>}
        <Link
          href={cta.href}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
        >
          {cta.label} <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

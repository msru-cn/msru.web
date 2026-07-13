import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { type AccentColor, getAccent } from "../accent";

export interface CtaCta {
  label: string;
  href: string;
}
export interface CtaBlockProps {
  variant?: "small" | "large";
  title: string;
  description?: string;
  cta: CtaCta;
  accentColor?: AccentColor;
}

/**
 * 收尾 CTA —— glass-stage 背景中央一块玻璃面板 + 强调色渐变按钮。
 * 与 hero 同一套玻璃语言，明暗双主题自适应。
 * （主页 block 专用，不复用 SubPageCta，避免影响子页观感。）
 */
export function CtaBlock({ variant = "small", title, description, cta, accentColor = "blue" }: CtaBlockProps) {
  const accent = getAccent(accentColor);
  const large = variant === "large";
  return (
    <section className={cn("glass-stage relative overflow-hidden", large ? "py-36 md:py-40" : "py-24 md:py-28")}>
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="glass glass-strong flex flex-col items-center gap-6 rounded-[2.5rem] px-8 py-14 text-center md:px-14">
          <h2
            className={cn(
              "text-balance font-bold tracking-tight text-zinc-900 dark:text-white",
              large ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl",
            )}
          >
            {title}
          </h2>
          {description && (
            <p className="max-w-xl text-balance leading-relaxed text-zinc-500 dark:text-zinc-400">{description}</p>
          )}
          <Link
            href={cta.href}
            className={cn(
              "group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-linear-to-r px-9 text-base font-medium text-white shadow-lg transition-all duration-[var(--dur-base)] ease-[var(--ease-glass)] hover:scale-[1.03]",
              accent.gradientFrom,
              "to-cyan-500 shadow-blue-500/25",
            )}
          >
            {cta.label}
            <ArrowRight className="size-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

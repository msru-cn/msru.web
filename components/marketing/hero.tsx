import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { type AccentColor, getAccent } from "./accent";

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroProps {
  badge?: { icon: LucideIcon; text: string };
  title: ReactNode;
  titleAccent?: string;
  accentColor?: AccentColor;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  mockup?: ReactNode;
}

export function Hero({ badge, title, titleAccent, accentColor = "blue", description, primaryCta, secondaryCta, mockup }: HeroProps) {
  const accent = getAccent(accentColor);
  const Badge = badge?.icon;
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden">
      <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto">
        {badge && Badge && (
          <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full bg-current/10 font-semibold text-sm mb-8 ring-1 ring-current/20 backdrop-blur-sm", accent.text)}>
            <Badge className="size-4" /> {badge.text}
          </div>
        )}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] text-balance">
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className={cn("text-transparent bg-clip-text bg-linear-to-r", accent.gradientFrom, "to-cyan-400")}>{titleAccent}</span>
            </>
          )}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-balance">{description}</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link href={primaryCta.href} className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-medium hover:scale-105 transition-transform shadow-2xl shadow-primary/20">
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-transparent border border-border text-foreground text-lg font-medium hover:bg-muted transition-colors">
              {secondaryCta.label} <ArrowRight className="ml-2 size-5" />
            </Link>
          )}
        </div>
        {mockup}
      </div>
    </section>
  );
}

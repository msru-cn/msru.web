import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { type AccentColor, getAccent } from "./accent";
import type { CtaLink } from "./hero";

export interface CTASectionProps {
  variant?: "minimal" | "vibrant";
  accentColor?: AccentColor;
  icon?: LucideIcon;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
}

export function CTASection({ variant = "minimal", accentColor = "blue", icon: Icon, title, description, primaryCta, secondaryCta }: CTASectionProps) {
  const accent = getAccent(accentColor);
  const vibrant = variant === "vibrant";
  return (
    <section className={cn("relative py-40 px-6 text-center overflow-hidden", vibrant ? "text-white" : "bg-background")}>
      {!vibrant && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-1/2 bg-blue-500/10 blur-[100px] pointer-events-none" />}
      {vibrant && Icon && <Icon className={cn("size-16 mx-auto mb-8 relative z-10", accent.text)} />}
      <h2 className="z-10 relative text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl mx-auto text-balance">{title}</h2>
      <p className="z-10 relative text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">{description}</p>
      <div className="z-10 relative flex flex-col sm:flex-row gap-4 justify-center">
        <Link href={primaryCta.href} className="inline-flex items-center justify-center h-16 px-12 text-xl font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-full transition-all shadow-xl shadow-primary/20 hover:scale-105 duration-300">
          {primaryCta.label}
        </Link>
        {secondaryCta && (
          <Link href={secondaryCta.href} className="inline-flex items-center justify-center h-16 px-12 text-xl font-medium border border-border rounded-full hover:bg-muted transition-colors">
            {secondaryCta.label}
          </Link>
        )}
      </div>
    </section>
  );
}

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
        "group relative flex flex-col items-center text-center p-12 h-[420px] bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] overflow-hidden border border-border/50 transition-colors duration-500",
        accent.border,
        span === "wide" && "md:col-span-2 lg:col-span-3",
      )}
    >
      <div className="z-10">
        <Icon className={cn("size-12 mx-auto mb-6", accent.text)} />
        <h3 className="text-3xl font-bold mb-3 tracking-tight">{title}</h3>
        <p className="text-xl font-medium text-muted-foreground mb-4">{tagline}</p>
        <p className="text-muted-foreground/80 leading-relaxed max-w-[280px]">{description}</p>
      </div>
      <div className={cn("absolute -bottom-32 w-[150%] h-[300px] bg-linear-to-t blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none", accent.glow)} />
    </div>
  );
}

export function BentoGrid({ children }: { children: ReactNode }) {
  return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">{children}</div>;
}

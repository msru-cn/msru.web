import { CheckCircle2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export interface FeatureItem {
  icon: LucideIcon;
  iconColor?: string;
  title: string;
  description: string;
}

export interface FeatureListProps {
  items: FeatureItem[];
  variant?: "boxed-icon" | "check";
}

export function FeatureList({ items, variant = "boxed-icon" }: FeatureListProps) {
  return (
    <ul className="space-y-6 pt-4">
      {items.map((item) => {
        const Icon = variant === "check" ? CheckCircle2 : item.icon;
        return (
          <li key={item.title} className="flex items-start gap-5">
            <div className={cn("shrink-0", variant === "boxed-icon" && "p-3 bg-zinc-900 rounded-xl border border-zinc-800")}>
              <Icon className={cn("size-6", item.iconColor ?? "text-blue-400")} />
            </div>
            <div className="space-y-1 mt-1">
              <span className="block text-xl font-semibold">{item.title}</span>
              <span className="block text-muted-foreground leading-relaxed">{item.description}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

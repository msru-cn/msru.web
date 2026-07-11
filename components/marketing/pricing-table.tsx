import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { CtaLink } from "./hero";

export interface PricingPlan {
  name: string;
  price: string;
  unit?: string;
  description: string;
  popular?: boolean;
  features: string[];
  cta: CtaLink;
}

/**
 * 定价表 —— 收编 pricing 页 3 档套餐卡 + "最受欢迎"徽章 + 特性勾选表。
 */
export function PricingTable({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative p-10 rounded-[2.5rem] border bg-white dark:bg-zinc-900/50 space-y-6",
              plan.popular
                ? "border-primary shadow-2xl shadow-primary/10 scale-105"
                : "border-zinc-200 dark:border-zinc-800",
            )}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full flex items-center gap-1">
                <Sparkles className="size-3" /> 最受欢迎
              </div>
            )}
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-zinc-500">{plan.description}</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-zinc-900 dark:text-white">{plan.price}</span>
              {plan.unit && <span className="text-sm text-zinc-400">{plan.unit}</span>}
            </div>
            <ul className="space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <Check className="size-4 text-emerald-500 shrink-0" aria-hidden="true" /> {f}
                </li>
              ))}
            </ul>
            <Link
              href={plan.cta.href}
              className={cn(
                "block text-center py-3 rounded-xl font-bold transition-colors",
                plan.popular
                  ? "bg-primary text-white hover:opacity-90"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700",
              )}
            >
              {plan.cta.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export interface PricingPlan {
  name: string;
  price: string;
  unit?: string;
  description: string;
  popular?: boolean;
  features: string[];
  cta: { label: string; href: string };
}
export interface PricingBlockProps {
  plans: PricingPlan[];
}

/**
 * 定价表(主页 block 专用) —— glass-stage 背景 + 玻璃套餐卡。
 * 热门档用强调色描边 + 微放大 + 渐变按钮。明暗双主题自适应。
 * （不复用共享 PricingTable，避免影响 pricing 子页观感。）
 */
export function PricingBlock({ plans }: PricingBlockProps) {
  return (
    <section className="glass-stage py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "glass glass-hover relative flex flex-col gap-6 rounded-[2.5rem] p-10",
                plan.popular && "ring-2 ring-blue-500/60 lg:scale-105",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-4 py-1 text-xs font-bold text-white shadow-md">
                  <Sparkles className="size-3" /> 最受欢迎
                </div>
              )}
              <div>
                <h3 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-white">{plan.name}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{plan.description}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-zinc-900 dark:text-white">{plan.price}</span>
                {plan.unit && <span className="text-sm text-zinc-400">{plan.unit}</span>}
              </div>
              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="size-4 shrink-0 text-emerald-500" aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.cta.href}
                className={cn(
                  "block rounded-full py-3 text-center font-medium transition-all duration-[var(--dur-base)] ease-[var(--ease-glass)]",
                  plan.popular
                    ? "bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:scale-[1.03]"
                    : "glass glass-hover text-zinc-800 dark:text-zinc-100",
                )}
              >
                {plan.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

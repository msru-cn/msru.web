import { Boxes, Cpu, type LucideIcon, Network, Package, Settings, ShieldCheck, Zap } from "lucide-react";
import type { AccentColor } from "@/components/marketing";
import { BentoCard, BentoGrid } from "@/components/marketing";
import type { PricingInput, ProductComparisonInput, SolutionInput } from "@/lib/ai/genui-schema";

function iconFor(slug: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    mes: Cpu,
    wms: Package,
    eam: Settings,
    qms: ShieldCheck,
    iot: Network,
    ai: Zap,
  };
  return map[slug] ?? Boxes;
}

export function GenUiToolPart({ type, data }: { type: string; data: unknown }) {
  if (type === "tool-provideProductComparison") {
    const { products } = data as ProductComparisonInput;
    return (
      <BentoGrid>
        {products.map((p) => (
          <BentoCard
            key={p.slug}
            icon={iconFor(p.slug)}
            accentColor={p.accentColor as AccentColor}
            title={p.title}
            tagline={p.tagline}
            description=""
          />
        ))}
      </BentoGrid>
    );
  }

  if (type === "tool-providePricing") {
    const { plans } = data as PricingInput;
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-2xl border border-border/50 p-6">
            <h4 className="text-lg font-bold">{plan.name}</h4>
            <p className="mt-1 text-3xl font-bold">
              {plan.price}
              <span className="text-base text-muted-foreground">{plan.unit}</span>
            </p>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (type === "tool-provideSolution") {
    const s = data as SolutionInput;
    return (
      <div className="rounded-2xl border border-border/50 p-6">
        <h4 className="text-xl font-bold">{s.title}</h4>
        <p className="mt-2 text-muted-foreground">{s.description}</p>
        <ul className="mt-4 space-y-1 text-sm">
          {s.bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

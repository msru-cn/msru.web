"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/cn";
import { Check, Info, Minus } from "lucide-react";
import { useState } from "react";

interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceDesc: string;
  description: string;
  ctaText: string;
  ctaVariant: "default" | "outline" | "secondary";
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    id: "hobby",
    name: "开源版 (Hobby)",
    price: "$0",
    priceDesc: "Free forever",
    description: "适用于个人开发者、学术科研及原型概念验证。",
    ctaText: "Start Deploying",
    ctaVariant: "outline",
  },
  {
    id: "pro",
    name: "专业版 (Pro)",
    price: "$20",
    priceDesc: "per user / month",
    description: "针对中小型离散智造工厂的标准云端 SaaS 套餐。",
    ctaText: "Start a free trial",
    ctaVariant: "default",
    popular: true,
  },
  {
    id: "enterprise",
    name: "旗舰版 (Enterprise)",
    price: "Custom",
    priceDesc: "Contact sales for pricing",
    description: "为大型集团级企业量身定制的私有化混合云方案。",
    ctaText: "Contact Sales",
    ctaVariant: "secondary",
  },
];

type FeatureValue = boolean | string;

interface FeatureRow {
  name: string;
  info?: string;
  values: {
    hobby: FeatureValue;
    pro: FeatureValue;
    enterprise: FeatureValue;
  };
}

interface FeatureSection {
  title: string;
  features: FeatureRow[];
}

const comparisonMatrix: FeatureSection[] = [
  {
    title: "核心工业流控制",
    features: [
      { name: "核心生产工单下发流", values: { hobby: true, pro: true, enterprise: true } },
      { name: "完整 PMC 生产排程", values: { hobby: false, pro: true, enterprise: true } },
      { name: "可视化实时工厂孪生报表", values: { hobby: false, pro: true, enterprise: true } },
      { name: "对接专有内部 ERP/WMS", values: { hobby: false, pro: false, enterprise: true } },
    ],
  },
  {
    title: "并发与规模",
    features: [
      { name: "设备并发数", values: { hobby: "5 台", pro: "500 台", enterprise: "无限连接" } },
      { name: "云端高可用架构集群", values: { hobby: false, pro: true, enterprise: true } },
      { name: "部署模式", values: { hobby: "单机", pro: "SaaS 公有云", enterprise: "私有化/混合云" } },
    ],
  },
  {
    title: "服务与支持",
    features: [
      { name: "社区基础技术栈支持", values: { hobby: true, pro: true, enterprise: true } },
      { name: "7x24 小时技术专属支持", values: { hobby: false, pro: true, enterprise: true } },
      { name: "SLA 保障", values: { hobby: false, pro: "99.9%", enterprise: "99.99%" } },
      { name: "微服务全量源码级交付", values: { hobby: false, pro: false, enterprise: true } },
      { name: "专属客户成功经理", values: { hobby: false, pro: false, enterprise: true } },
      { name: "独立环境、国密算法加密", values: { hobby: false, pro: false, enterprise: true } },
    ],
  },
];

function FeatureValueCell({ value }: { value: FeatureValue }) {
  if (typeof value === "boolean") {
    return value ? <Check className="size-5 text-foreground" /> : <Minus className="size-5 text-muted-foreground/30" />;
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

export function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full flex flex-col items-center py-16 px-4 md:px-8">
      {/* Hero Header */}
      <div className="flex flex-col items-center mb-16 space-y-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-center leading-tight">
          Find a plan to power your manufacturing apps
        </h2>
        <div className="flex items-center space-x-3 pt-4">
          <span
            className={cn(
              "text-sm transition-colors",
              !isAnnual ? "text-foreground font-medium" : "text-muted-foreground",
            )}
          >
            Monthly
          </span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-foreground" />
          <span
            className={cn(
              "text-sm transition-colors",
              isAnnual ? "text-foreground font-medium" : "text-muted-foreground",
            )}
          >
            Yearly
          </span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-24">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={cn(
              "relative flex flex-col p-8 md:p-10 rounded-xl border bg-card text-card-foreground transition-all duration-200",
              tier.popular
                ? "border-blue-500 shadow-md shadow-blue-500/10"
                : "border-border shadow-sm hover:border-foreground/20",
            )}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-sm tracking-wide">
                Popular
              </div>
            )}

            <div className="flex flex-col min-h-[140px]">
              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed grow">{tier.description}</p>
            </div>

            <div className="mb-8 flex flex-col">
              <div className="flex items-baseline mb-1">
                <span className="text-4xl font-bold tracking-tight break-all">{tier.price}</span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">{tier.priceDesc}</span>
            </div>

            <Button
              variant={tier.ctaVariant}
              className={cn(
                "w-full rounded-md font-medium h-11 text-[15px]",
                tier.popular ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm" : "",
              )}
            >
              {tier.ctaText}
            </Button>
          </div>
        ))}
      </div>

      {/* Feature Comparison Matrix */}
      <div className="w-full max-w-6xl mt-12 hidden md:block">
        <h3 className="text-3xl font-bold mb-12 tracking-tight">Compare plans</h3>

        <div className="w-full relative">
          {/* Sticky Header Row */}
          <div className="sticky top-[120px] z-20 flex bg-background/95 backdrop-blur py-4 border-b border-border shadow-sm mb-8">
            <div className="w-1/4 pr-6 shrink-0 flex items-center">
              <span className="font-semibold text-lg">Features</span>
            </div>
            {tiers.map((tier) => (
              <div key={`${tier.id}-header`} className="w-1/4 px-6 shrink-0 flex flex-col justify-end">
                <h4 className="font-semibold text-lg mb-4">{tier.name}</h4>
                <Button
                  variant={tier.ctaVariant}
                  className={cn(
                    "w-full rounded-md font-medium shadow-none h-10",
                    tier.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "",
                  )}
                >
                  {tier.ctaText}
                </Button>
              </div>
            ))}
          </div>

          {/* Matrix Content */}
          <div className="divide-y divide-border/60">
            {comparisonMatrix.map((section) => (
              <div key={section.title} className="py-6">
                <div className="w-full flex py-4">
                  <h4 className="text-lg font-semibold w-full">{section.title}</h4>
                </div>

                <div className="divide-y divide-border/40">
                  {section.features.map((feature) => (
                    <div key={feature.name} className="flex hover:bg-muted/30 transition-colors group">
                      <div className="w-1/4 pr-6 py-4 flex items-center shrink-0">
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors wrap-break-word pr-2">
                          {feature.name}
                        </span>
                        {feature.info && <Info className="size-4 text-muted-foreground/50 shrink-0 cursor-help" />}
                      </div>

                      {tiers.map((tier) => (
                        <div
                          key={`${feature.name}-${tier.id}`}
                          className="w-1/4 px-6 py-4 flex items-center shrink-0 border-l border-border/40"
                        >
                          <FeatureValueCell value={feature.values[tier.id as keyof typeof feature.values]} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Feature List Fallback */}
      <div className="w-full mt-12 md:hidden">
        <h3 className="text-2xl font-bold mb-8">Features Overview</h3>
        {comparisonMatrix.map((section) => (
          <div key={section.title} className="mb-8">
            <h4 className="text-lg font-semibold mb-4 px-2">{section.title}</h4>
            <div className="bg-card border rounded-lg overflow-hidden divide-y">
              {section.features.map((feature) => (
                <div key={feature.name} className="p-4 flex flex-col gap-3">
                  <div className="font-medium text-sm">{feature.name}</div>
                  <div className="grid grid-cols-3 gap-2">
                    {tiers.map((tier) => (
                      <div
                        key={`${feature.name}-${tier.id}-mobile`}
                        className="flex flex-col items-center p-2 bg-muted/30 rounded"
                      >
                        <span className="text-[11px] text-muted-foreground mb-1 uppercase tracking-wides text-center">
                          {tier.name.split(" ")[0]}
                        </span>
                        <FeatureValueCell value={feature.values[tier.id as keyof typeof feature.values]} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

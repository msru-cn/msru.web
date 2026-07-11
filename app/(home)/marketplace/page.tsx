import { Box, Puzzle, Star } from "lucide-react";
import { SubPageCta, SubPageHero } from "@/components/marketing";

const APPS = [
  { name: "Smart Energy Dashboard", vendor: "GreenTech Co.", category: "能源管理", rating: 4.8 },
  { name: "Predictive QA Toolkit", vendor: "QualityAI", category: "AI 质检", rating: 4.9 },
  { name: "Advanced Kanban Board", vendor: "LeanFlow", category: "精益生产", rating: 4.7 },
  { name: "MRO Inventory Optimizer", vendor: "SpareMax", category: "备件管理", rating: 4.6 },
  { name: "Supplier Portal Pro", vendor: "ChainSync", category: "供应链协同", rating: 4.5 },
];

export default function MarketplacePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: Box, text: "MSRU Marketplace" }}
        title="插件市场"
        subtitle="由全球 ISV 合作伙伴联合开发的低代码应用与扩展模块集，一键安装即刻增强平台能力。"
        accentColor="purple"
      />

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          {APPS.map((app) => (
            <div
              key={app.name}
              className="group p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-purple-500/50 transition-all flex items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                  <Puzzle className="size-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white group-hover:text-purple-500 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    {app.vendor} · {app.category}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                <Star className="size-4 fill-current" /> {app.rating}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SubPageCta title="想发布您的应用？" cta={{ label: "加入 ISV 计划", href: "/partners/isv" }} />
    </div>
  );
}

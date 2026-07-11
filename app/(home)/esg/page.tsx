import { ArrowRight, Download, Heart, Leaf, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ESG_STATS = [
  { label: "碳足迹减少", value: "35%", trend: "vs 2020", sub: "100% 工业级精准追踪" },
  { label: "可再生能源使用", value: "85%", trend: "Global", sub: "目标 2030 实现 100%" },
  { label: "水资源循环率", value: "92%", trend: "Efficient", sub: "领先的工业节水方案" },
  { label: "多样性员工占比", value: "42%", trend: "Inclusive", sub: "构建无边界的人才环境" },
];

export default function ESGPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* ESG Hero */}
      <section className="relative h-[65vh] flex items-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000"
            fill
            className="object-cover opacity-40 brightness-50"
            alt="Sustainability"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-950/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest mx-auto">
              Sustainability & Governance
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              绿色算法
              <br />
              筑就<span className="italic text-emerald-500">永续工业</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              我们不只在优化生产效率，更在通过数字化手段大幅削减全球工业排放。 MSRU
              的每一行代码都在为地球的未来贡献绿色动能。
            </p>
          </div>
        </div>
      </section>

      {/* ESG Metrics Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {ESG_STATS.map((stat) => (
              <div key={stat.label} className="space-y-3">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">{stat.label}</div>
                <div className="text-5xl font-black text-zinc-900 dark:text-white flex items-baseline gap-2">
                  {stat.value}
                  <span className="text-xs text-emerald-500 italic font-bold">{stat.trend}</span>
                </div>
                <p className="text-xs text-zinc-500">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Themes */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-6">
              <Leaf className="size-10 text-emerald-500" />
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">环境责任 (E)</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                我们通过工业大模型优化能源调度，在不牺牲产出的情况下帮助工厂削减了平均 25% 的碳足迹。 我们承诺到 2030
                年实现 MSRU 全球运营网点的零碳排。
              </p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-6">
              <Heart className="size-10 text-rose-500" />
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">社会包容 (S)</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                我们支持全球 20+ 个非营利技术社区，并为发展中国家的工业教育提供免费的数字化教学资产，
                让每个人都能触及最先进的制造文明。
              </p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-6">
              <ShieldCheck className="size-10 text-blue-500" />
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">治理标准 (G)</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                公开透明的治理流程。我们的年度报告通过国际严苛审计，确保任何关联交易与重大决策都受到充分的监督与披露。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Board */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tighter italic">ESG 报告板</h2>
            <p className="text-zinc-500">查阅并下载 MSRU 每一年度的可持续发展与治理报告。</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {[2023, 2022, 2021].map((year) => (
              <div
                key={year}
                className="group w-full max-w-xs p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-primary transition-all text-left space-y-4 cursor-pointer"
              >
                <div className="text-[10px] font-black text-primary uppercase">{year} 年度报告</div>
                <h4 className="font-bold text-zinc-900 dark:text-white">可持续发展综合报告</h4>
                <div className="flex items-center justify-between pt-4">
                  <Download className="size-4 text-zinc-400 group-hover:text-primary" />
                  <span className="text-[10px] font-bold text-zinc-400">PDF / 8.5MB</span>
                </div>
              </div>
            ))}
          </div>

          <div className="py-12 flex justify-center">
            <Link
              href="mailto:esg@msru.ai"
              className="px-8 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all flex items-center gap-2"
            >
              联系我们的 ESG 委员会 <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight, Database, Eye, Lock, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const PRINCIPLES = [
  {
    icon: <Database className="size-6 text-amber-500" />,
    title: "训练数据边界",
    desc: "客户生产数据永远不会被用于训练公共 AI 模型。所有模型训练仅使用经脱敏处理的合成数据集。",
  },
  {
    icon: <Lock className="size-6 text-blue-500" />,
    title: "数据脱敏策略",
    desc: "在任何分析或推理流程之前，自动执行 k-匿名化、差分隐私与字段级掩码处理。",
  },
  {
    icon: <Eye className="size-6 text-emerald-500" />,
    title: "可解释性承诺",
    desc: "所有 AI 决策输出附带置信度评分与归因分析，拒绝黑箱操作。",
  },
  {
    icon: <ShieldCheck className="size-6 text-rose-500" />,
    title: "人类监督回路",
    desc: "关键工业决策始终保留人在回路 (Human-in-the-loop) 的最终审批权。",
  },
];

export default function AIEthicsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1)_0,transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-400 uppercase tracking-widest">
              <Zap className="size-3" /> AI Ethics & Governance
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">AI 伦理与管辖</h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              我们坚信负责任的 AI 是工业智能化的基石。了解 MSRU 在大模型训练、数据脱敏与可解释性方面的坚定承诺。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4"
              >
                {p.icon}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{p.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">了解更多 AI 治理细节</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            联系 AI 治理团队 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight, Code, Handshake, Puzzle, Sparkles } from "lucide-react";
import Link from "next/link";

const BENEFITS = [
  {
    icon: <Puzzle className="size-6 text-purple-500" />,
    title: "联合解决方案开发",
    desc: "与 MSRU 核心团队协作，将您的垂直行业专长深度集成到统一平台中。",
  },
  {
    icon: <Code className="size-6 text-blue-500" />,
    title: "技术沙箱与 API",
    desc: "获取完整的开发者沙箱环境、技术文档与优先 API 支持通道。",
  },
  {
    icon: <Sparkles className="size-6 text-amber-500" />,
    title: "联合市场推广",
    desc: "共享全球客户资源池，参与联合品牌活动、案例包装与渠道分销。",
  },
  {
    icon: <Handshake className="size-6 text-emerald-500" />,
    title: "商业激励计划",
    desc: "基于营收共享的透明分成模式，以及年度最佳合作伙伴评选。",
  },
];

export default function ISVPartnerPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400 uppercase tracking-widest">
              <Handshake className="size-3" /> ISV Partner Program
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              ISV <span className="italic text-zinc-500">联合方案</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              携手独立软件供应商，共建工业数字化的联合解决方案生态。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4 hover:border-purple-500/50 transition-colors"
              >
                {b.icon}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{b.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-purple-600 text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-bold text-white tracking-tighter">成为 MSRU ISV 合作伙伴</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            申请加入 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

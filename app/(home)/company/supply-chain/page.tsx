import { ArrowRight, CheckCircle2, FileText, Globe, Handshake, ShieldCheck, Truck, Users } from "lucide-react";
import Link from "next/link";

const GUIDELINES = [
  {
    title: "透明采购流程",
    description: "所有供应商必须通过 MSRU 统一采购平台进行数字化准入，确保每一个订单流程可追溯、防篡改。",
    icon: Globe,
  },
  {
    title: "公平准入原则",
    description: "我们打破地域限制，为具备创新能力的初创企业与中小型供应商提供平等的竞争红利与接入机会。",
    icon: Users,
  },
  {
    title: "联合技术进化",
    description: "不仅是买卖关系，我们与供应商共享数字化基座模型，共同推进行业级高性能硬件与软件的协同演进。",
    icon: Handshake,
  },
];

export default function SupplyChainPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Supply Chain Hero */}
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000')] bg-cover opacity-30" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest mx-auto">
              Safe & Scalable Supply Chain
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              构建韧性、透明的
              <br />
              <span className="italic text-zinc-500 focus:text-white transition-colors">全球制造基座</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
              在 MSRU，供应链是实现工业进化的神经末梢。我们通过数字化协议与合规准则，
              与全球合作伙伴共同建设一个高效、廉洁且具备高度韧性的供应网络。
            </p>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {GUIDELINES.map((item) => (
              <div key={item.title} className="space-y-6 group">
                <div className="size-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                  <item.icon className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Viewer Mock */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="bg-white dark:bg-zinc-900 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 space-y-8 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800">
                <ShieldCheck className="size-12 text-emerald-500" />
                <h2 className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">供应商合规手册 2.0</h2>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  这份文档详细规定了 MSRU 合作伙伴在环境、人权、反腐败及信息安全等方面的核心准则。
                  我们要求所有一级供应商及其分支机构严格遵守。
                </p>
                <div className="pt-4 flex flex-col gap-4">
                  {["禁止强迫劳动与非法用工", "碳排放披露要求", "零容忍的反商业贿赂政策", "数据安全协议"].map(
                    (point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm font-bold text-zinc-700 dark:text-zinc-200"
                      >
                        <CheckCircle2 className="size-4 text-emerald-500" /> {point}
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="p-12 lg:p-20 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col justify-between space-y-12">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Reporting Channel</h4>
                  <p className="text-zinc-500 text-sm">
                    如果您发现任何违反供应链准则的行为，可通过此加密通道进行匿名举报。 我们严格保护举报人信息。
                  </p>
                </div>
                <div className="space-y-4">
                  <Link
                    href="mailto:compliance@msru.ai"
                    className="p-6 rounded-2xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-between group hover:bg-primary transition-all"
                  >
                    <span className="font-bold text-zinc-900 dark:text-white group-hover:text-white">举报中心</span>
                    <ArrowRight className="size-5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                  <button
                    type="button"
                    className="w-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-between group hover:border-primary transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="size-5 text-zinc-400" />
                      <span className="font-bold text-zinc-900 dark:text-white">下载 PDF 手册</span>
                    </div>
                    <span className="text-[10px] font-black italic text-zinc-400 uppercase tracking-tighter">
                      V2.4 / 15MB
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Callout */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] border border-primary rounded-full animate-ping" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
          <Truck className="size-16 text-primary mx-auto" />
          <h2 className="text-4xl font-bold text-white tracking-tighter">寻找卓越的物流伙伴</h2>
          <p className="text-zinc-400 max-w-xl mx-auto font-medium leading-relaxed">
            随着 MSRU 全球研发中心的补全，我们正在寻找具备高数字化程度、
            能提供端到端可视化追踪能力的区域性及全球性物流供应商。
          </p>
          <div className="pt-8">
            <button
              type="button"
              className="px-12 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform uppercase tracking-widest text-xs"
            >
              申请成为供应商
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

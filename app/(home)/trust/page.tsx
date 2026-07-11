import { ArrowRight, Eye, Globe, Lock, Network, Shield, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    href: "/trust/security",
    icon: <Shield className="size-8 text-indigo-500" />,
    title: "多租户安全架构",
    desc: "数据物理隔离、零信任网络与端到端加密",
  },
  {
    href: "/trust/compliance-matrix",
    icon: <Globe className="size-8 text-blue-500" />,
    title: "全球合规矩阵",
    desc: "ISO 27001 / SOC 2 / GDPR / 等保三级全覆盖",
  },
  {
    href: "/trust/data-residency",
    icon: <Network className="size-8 text-emerald-500" />,
    title: "数据驻留与跨境",
    desc: "策略化物理隔离与合规退网指南",
  },
  {
    href: "/trust/ai-ethics",
    icon: <Zap className="size-8 text-amber-500" />,
    title: "AI 伦理与管辖",
    desc: "大模型训练边界与数据脱敏策略",
  },
  {
    href: "/trust/accessibility",
    icon: <Eye className="size-8 text-rose-500" />,
    title: "数字包容性 (VPAT)",
    desc: "WCAG 2.1 AA 无障碍标准遵从",
  },
  {
    href: "/trust/bounty",
    icon: <Lock className="size-8 text-purple-500" />,
    title: "漏洞披露政策",
    desc: "负责任的安全研究者奖励计划",
  },
  {
    href: "/trust/sub-processors",
    icon: <ShieldCheck className="size-8 text-teal-500" />,
    title: "次级处理者列表",
    desc: "所有参与数据处理的第三方服务商披露",
  },
];

export default function TrustCenterPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.12)_0,transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
              <Shield className="size-3" /> Trust & Security Center
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
              信任，
              <br />
              <span className="italic text-zinc-500">是我们的底层架构</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              工业数据的敏感性不容妥协。探索 MSRU 如何通过硬核安全架构、全球合规矩阵与数据治理构筑不可穿透的防线。
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 hover:border-primary/50 hover:shadow-xl transition-all duration-500 space-y-4"
              >
                {p.icon}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all">
                  了解详情 <ArrowRight className="size-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-bold text-white tracking-tighter">需要安全合规白皮书？</h2>
          <p className="text-indigo-200 text-lg max-w-xl mx-auto">
            联系我们的合规团队获取针对您所在区域的定制化安全评估报告。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            联系安全团队 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

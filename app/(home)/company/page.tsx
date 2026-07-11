import { ArrowRight, Building2, FileText, Globe2, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const STATS = [
  { label: "全球员工", value: "8,500+", sub: "分布于 12 个国家" },
  { label: "研发占比", value: "65%", sub: "极客驱动的文化" },
  { label: "持有专利", value: "1,200+", sub: "核心底层技术积累" },
  { label: "灯塔工厂", value: "24", sub: "深度参与数字化转型" },
];

const CENTERS = [
  { city: "珠海", role: "全球总部 / 基础平台研发", color: "bg-blue-500" },
  { city: "新加坡", role: "国际业务 / 云原生安全中心", color: "bg-emerald-500" },
  { city: "慕尼黑", role: "工业物联网与自动化实验室", color: "bg-amber-500" },
  { city: "硅谷", role: "AI 算法与大模型研究", color: "bg-purple-500" },
];

export default function CompanyPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            fill
            priority
            className="object-cover opacity-30 grayscale"
            alt="MSRU Headquarter"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
              极客精神
              <br />
              驱动的<span className="text-zinc-500 italic">工业进化</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              MSRU (Matrix Smart Resource Union) 是全球领先的工业数字化基座提供商。
              我们通过统一的数据主线与自研核心引擎，重新定义人类高效制造的方式。
            </p>
            <div className="flex gap-4 justify-center">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2 text-white/80 text-sm font-medium">
                <Building2 className="size-4 text-blue-400" /> 创立于 2012
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2 text-white/80 text-sm font-medium">
                <Globe2 className="size-4 text-emerald-400" /> 全球化运营
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</span>
                <span className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">{stat.value}</span>
                <span className="text-xs text-zinc-500">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">全球研发与创新矩阵</h2>
              <div className="space-y-6">
                {CENTERS.map((center) => (
                  <div
                    key={center.city}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 group"
                  >
                    <div className={`mt-1 size-3 rounded-full ${center.color} animate-pulse`} />
                    <div>
                      <h3 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                        {center.city}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{center.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative aspect-square w-full max-w-lg bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center opacity-80 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-20 grayscale" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center p-12">
                <Globe2 className="size-16 text-primary/40 mb-4" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Collaborative Grid</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance Quick Links */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 italic uppercase tracking-tighter">
            Governance & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/investors"
              className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-primary transition-all group"
            >
              <TrendingUp className="size-8 mb-6 text-zinc-400 group-hover:text-primary transition-colors" />
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">投资者关系</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">查阅最新财报、董事会报告及治理架构。</p>
              <div className="text-xs font-bold text-primary flex items-center gap-2">
                查看详情 <ArrowRight className="size-3" />
              </div>
            </Link>
            <Link
              href="/esg"
              className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-primary transition-all group"
            >
              <ShieldCheck className="size-8 mb-6 text-zinc-400 group-hover:text-primary transition-colors" />
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">环境、社会与治理</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">我们对可持续供应链与碳中和路线的承诺。</p>
              <div className="text-xs font-bold text-primary flex items-center gap-2">
                报告下载 <ArrowRight className="size-3" />
              </div>
            </Link>
            <Link
              href="/company/supply-chain"
              className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-primary transition-all group lg:col-span-1 md:col-span-2"
            >
              <FileText className="size-8 mb-6 text-zinc-400 group-hover:text-primary transition-colors" />
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">供应链准则</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">建立透明、廉洁且高效的全球供应商伙伴关系。</p>
              <div className="text-xs font-bold text-primary flex items-center gap-2">
                了解合规 <ArrowRight className="size-3" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

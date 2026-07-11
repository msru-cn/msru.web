import {
  Activity,
  ArrowRight,
  Code,
  Database,
  FileCheck2,
  GitBranchPlus,
  Network,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { HeroMockup } from "@/components/hero-mockup";

export default function ServicesPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden border-b border-border/50">
        {/* 背景光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-linear-to-b from-primary/10 via-primary/5 to-transparent rounded-full blur-[100px] opacity-50 dark:opacity-30 pointer-events-none" />
        {/* 网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="z-10 max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-md">
            <ShieldCheck className="mr-2 h-4 w-4" />
            <span>MSRU 客户成功保障体系</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-zinc-400 drop-shadow-sm">
            端到端交付
            <br className="hidden md:block" />
            赋能全生命周期。
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            不只是提供坚实的软件底座。我们通过标准化的实施方法论、高响应的安全护航与深度的定制开发，伴随企业走完数字化转型的每一公里。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="group h-12 px-8 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-base font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary),0.5)]"
            >
              获取交付方案 <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/support"
              className="h-12 px-8 inline-flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-锌-100 text-base font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors border border-border"
            >
              了解技术支持
            </Link>
          </div>
        </div>

        {/* 使用 Mockup */}
        <HeroMockup theme="teal" className="mt-20 delay-500 animate-in fade-in slide-in-from-bottom-12 duration-1000" />
      </section>

      {/* 2. 服务矩阵 BENTO GRID */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-white">
                覆盖全链路的<span className="text-teal-500">服务矩阵</span>。
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                无论是首个灯塔工厂的标杆树立，还是跨国集团的全面铺开，我们皆有对应的标准服务组块。
              </p>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Card 1: 实施交付 (Large Vertical) */}
            <Link
              href="/services/delivery"
              className="md:col-span-5 relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-border/50 group flex flex-col p-8 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-linear-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="size-14 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6">
                  <Activity className="size-7" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">
                  实施交付与蓝图落地
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm">
                  从业务调研、蓝图设计到系统配置与最终上线，MSRU 敏捷交付法确保项目严格按期高质量兑现。
                </p>
              </div>
              <div className="mt-auto relative w-full h-40 bg-zinc-200/50 dark:bg-zinc-950/50 rounded-xl border border-border overflow-hidden group-hover:border-teal-500/30 transition-colors">
                {/* 简易甘特图 Mock */}
                <div className="absolute inset-x-0 top-4 space-y-3 px-4">
                  <div className="w-[80%] h-3 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                  <div className="w-[60%] h-3 bg-teal-500/70 rounded-full translate-x-[20%]" />
                  <div className="w-[40%] h-3 bg-teal-500/40 rounded-full translate-x-[50%]" />
                </div>
              </div>
            </Link>

            {/* Card 2: 技术支持 (Horizontal Top Right) */}
            <Link
              href="/services/support"
              className="md:col-span-7 relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-border/50 group flex flex-col md:flex-row p-8 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-linear-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 md:w-1/2 flex flex-col justify-center">
                <div className="size-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">技术支持 7x24</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  原厂 L3 级别直通支持。提供主动式健康巡检、紧急故障排查机动响应网络保障产线不停摆。
                </p>
              </div>
              <div className="relative md:w-1/2 h-40 md:h-full mt-8 md:mt-0 flex items-center justify-end">
                {/* 网络节点 Mock */}
                <div className="w-48 h-48 relative animate-[spin_20s_linear_infinite]">
                  <Network className="absolute top-0 left-1/2 -translate-x-1/2 text-blue-500/20 size-20" />
                  <Database className="absolute bottom-4 right-0 text-blue-500/40 size-16" />
                  <Server className="absolute bottom-4 left-0 text-blue-500/60 size-16 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>
              </div>
            </Link>

            {/* Card 3: 培训认证 (Bottom Middle) */}
            <Link
              href="/services/training"
              className="md:col-span-4 relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-border/50 group flex flex-col p-8 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-linear-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="size-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                  <Users className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">培训与认证</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  赋能企业内部团队。涵盖操作员、关键用户至系统架构师的官方权威认证体系与实训工场。
                </p>
              </div>
            </Link>

            {/* Card 4: 定制开发 (Bottom Right) */}
            <Link
              href="/services/custom"
              className="md:col-span-3 relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-border/50 group flex flex-col p-8 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-linear-to-tl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex-col flex h-full justify-between">
                <div>
                  <div className="size-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
                    <Code className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">定制研发</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    特定行业协议解析与非标场景的专属平台扩展开发。
                  </p>
                </div>
                <div className="flex gap-2 mt-4 text-purple-500">
                  <GitBranchPlus className="size-5" />
                  <FileCheck2 className="size-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

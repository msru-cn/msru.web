import {
  ArrowRight,
  BarChart,
  Calendar,
  Code2,
  Cpu,
  Layers,
  Network,
  Package,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "工业数字化引擎 - 引领智造未来",
  description: "深耕 工业数字化与人工智能领域。MSRU 为您打造突破性的数字化转型方案与精工细作的软件定制开发。",
});

export default function HomePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO SECTION - 视觉主视觉部分 */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden">
        {/* 动态背景大光晕，模仿苹果高饱和环境光 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[1000px] md:h-[600px] bg-blue-500/20 dark:bg-blue-600/20 rounded-[100%] blur-[120px] pointer-events-none" />

        <h1 className="z-10 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 max-w-5xl text-balance">
          未来数字化引擎， <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400 dark:from-blue-400 dark:to-cyan-300">
            现在启动。
          </span>
        </h1>
        <p className="z-10 text-lg md:text-2xl text-muted-foreground max-w-3xl text-balance mb-12 font-medium">
          深耕 工业数字化 与人工智能领域。为您打造突破性的数字化转型方案与精工细作的软件定制开发。实力，有目共睹。
        </p>
        <div className="z-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium text-primary-foreground bg-primary rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/25"
          >
            探索全系产品
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium border border-border bg-background/50 backdrop-blur-md rounded-full hover:bg-muted transition-colors duration-300 group"
          >
            咨询解决方案 <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* PROUDCTS SHOWCASE - APPLE BENTO GRID STYLE */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">七大核心基座。样样超能。</h2>
          <p className="text-muted-foreground text-xl">全栈工业管理控制系统，构建您的无人工厂与工业互联新生态。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* MES */}
          <div className="group relative flex flex-col items-center text-center p-12 h-[420px] bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-blue-500/50 transition-colors duration-500">
            <div className="z-10">
              <Cpu className="size-12 mx-auto mb-6 text-blue-500" />
              <h3 className="text-3xl font-bold mb-3 tracking-tight">MES 执行</h3>
              <p className="text-xl font-medium text-muted-foreground mb-4">生产的艺术。精益求精。</p>
              <p className="text-muted-foreground/80 leading-relaxed max-w-[280px]">
                全流程质量追溯与调度，让每一道工序精准无误。
              </p>
            </div>
            {/* 底部光效渐变，鼠标悬停互动 */}
            <div className="absolute -bottom-32 w-[150%] h-[300px] bg-linear-to-t from-blue-500/20 to-transparent blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          </div>

          {/* WMS */}
          <div className="group relative flex flex-col items-center text-center p-12 h-[420px] bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-emerald-500/50 transition-colors duration-500">
            <div className="z-10">
              <Package className="size-12 mx-auto mb-6 text-emerald-500" />
              <h3 className="text-3xl font-bold mb-3 tracking-tight">WMS 仓储</h3>
              <p className="text-xl font-medium text-muted-foreground mb-4">极智流转。尽在掌握。</p>
              <p className="text-muted-foreground/80 leading-relaxed max-w-[280px]">
                数字孪生与立库智能控制，打造黑灯级立体大仓储。
              </p>
            </div>
            <div className="absolute -bottom-32 w-[150%] h-[300px] bg-linear-to-t from-emerald-500/20 to-transparent blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          </div>

          {/* APS */}
          <div className="group relative flex flex-col items-center text-center p-12 h-[420px] bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-amber-500/50 transition-colors duration-500">
            <div className="z-10">
              <Calendar className="size-12 mx-auto mb-6 text-amber-500" />
              <h3 className="text-3xl font-bold mb-3 tracking-tight">APS 架构</h3>
              <p className="text-xl font-medium text-muted-foreground mb-4">全局视野。运筹帷幄。</p>
              <p className="text-muted-foreground/80 leading-relaxed max-w-[280px]">
                基于约束理论的高级动态排程，确保交期推演滴水不漏。
              </p>
            </div>
            <div className="absolute -bottom-32 w-[150%] h-[300px] bg-linear-to-t from-amber-500/20 to-transparent blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          </div>

          {/* QMS */}
          <div className="group relative flex flex-col items-center text-center p-12 h-[420px] bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-rose-500/50 transition-colors duration-500">
            <div className="z-10">
              <ShieldCheck className="size-12 mx-auto mb-6 text-rose-500" />
              <h3 className="text-3xl font-bold mb-3 tracking-tight">QMS 品控</h3>
              <p className="text-xl font-medium text-muted-foreground mb-4">绝不妥协。万无一失。</p>
              <p className="text-muted-foreground/80 leading-relaxed max-w-[280px]">
                贯穿产品全生命周期的控制标准与统计 SPC 防错闭环。
              </p>
            </div>
            <div className="absolute -bottom-32 w-[150%] h-[300px] bg-linear-to-t from-rose-500/20 to-transparent blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          </div>

          {/* EAM */}
          <div className="group relative flex flex-col items-center text-center p-12 h-[420px] bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-slate-500/50 transition-colors duration-500">
            <div className="z-10">
              <Settings className="size-12 mx-auto mb-6 text-slate-500" />
              <h3 className="text-3xl font-bold mb-3 tracking-tight">EAM 资产</h3>
              <p className="text-xl font-medium text-muted-foreground mb-4">预置维护。防患未然。</p>
              <p className="text-muted-foreground/80 leading-relaxed max-w-[280px]">
                基于工况大数据的预测性维护与备件台账全生命周期追踪。
              </p>
            </div>
            <div className="absolute -bottom-32 w-[150%] h-[300px] bg-linear-to-t from-slate-500/20 to-transparent blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          </div>

          {/* IoT */}
          <div className="group relative flex flex-col items-center text-center p-12 h-[420px] bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-purple-500/50 transition-colors duration-500">
            <div className="z-10">
              <Network className="size-12 mx-auto mb-6 text-purple-500" />
              <h3 className="text-3xl font-bold mb-3 tracking-tight">IoT 互联</h3>
              <p className="text-xl font-medium text-muted-foreground mb-4">万物归一。即插即接。</p>
              <p className="text-muted-foreground/80 leading-relaxed max-w-[280px]">
                千万级高并发接入能力，百万级异构设备数采秒级边缘计算。
              </p>
            </div>
            <div className="absolute -bottom-32 w-[150%] h-[300px] bg-linear-to-t from-purple-500/20 to-transparent blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          </div>

          {/* AI - The absolute dominant base */}
          <div className="group relative flex flex-col md:flex-row items-center md:items-start md:text-left text-center md:col-span-2 lg:col-span-3 p-12 h-auto md:h-[420px] bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-fuchsia-500/50 transition-colors duration-500">
            <div className="z-10 md:w-1/2 flex flex-col justify-center h-full">
              <Zap className="size-16 mx-auto md:mx-0 mb-6 text-fuchsia-500 drop-shadow-lg" />
              <h3 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">人工智能</h3>
              <p className="text-2xl font-medium text-foreground mb-4">超能觉醒。探知未来。</p>
              <p className="text-xl text-muted-foreground/90 leading-relaxed max-w-xl">
                基于深度预测模型的智能调度、高精度视觉质检与工艺时序剖析，让您的工厂拥有自主思考的智慧大脑以及无限成长的闭环底座。
              </p>
            </div>
            <div className="z-10 md:w-1/2 w-full mt-10 md:mt-0 flex items-center justify-center relative h-full">
              <div className="w-48 h-48 md:w-64 md:h-64 border-2 border-fuchsia-500/20 rounded-full flex items-center justify-center overflow-hidden mix-blend-screen opacity-60">
                <div className="w-[80%] h-[80%] border border-cyan-400/30 rounded-full animate-spin-slow" />
              </div>
            </div>
            <div className="absolute -bottom-64 -right-32 w-[150%] md:w-[80%] h-[500px] bg-linear-to-tl from-fuchsia-600/20 via-blue-500/10 to-transparent blur-[100px] group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - DARK APPLE PRO STYLE WITH HORIZONTAL CARD SCAPE */}
      <section className="py-32 bg-zinc-950 text-white w-full border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                每一行代码，
                <br />
                都为你量体裁衣。
              </h2>
              <p className="text-zinc-400 text-xl max-w-xl leading-relaxed">
                除了成熟的标准产品，我们更提供行业顶级的数字化咨询与软件定制开发服务。从企业架构蓝图规划到云原生代码落地，全程为核心业务增长保驾护航。
              </p>
              <ul className="space-y-6 pt-4">
                {/* 服务 1 */}
                <li className="flex items-start gap-5">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 shrink-0">
                    <BarChart className="size-6 text-blue-400" />
                  </div>
                  <div className="space-y-1 mt-1">
                    <span className="block text-xl font-semibold">数字化转型咨询</span>
                    <span className="block text-zinc-500 leading-relaxed">
                      深入业务痛点，调研市场竞争，出具切实可落地的整体转型战略蓝图。
                    </span>
                  </div>
                </li>
                {/* 服务 2 */}
                <li className="flex items-start gap-5">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 shrink-0">
                    <Code2 className="size-6 text-emerald-400" />
                  </div>
                  <div className="space-y-1 mt-1">
                    <span className="block text-xl font-semibold">企业级定制开发</span>
                    <span className="block text-zinc-500 leading-relaxed">
                      采用现代微服务与云原生技术栈，突破标准软件的极限，重构专属竞争力。
                    </span>
                  </div>
                </li>
                {/* 服务 3 */}
                <li className="flex items-start gap-5">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 shrink-0">
                    <Layers className="size-6 text-purple-400" />
                  </div>
                  <div className="space-y-1 mt-1">
                    <span className="block text-xl font-semibold">遗留系统演进</span>
                    <span className="block text-zinc-500 leading-relaxed">
                      保障数据安全的核心底线，逐步拆解重构史前单体巨兽，让老旧代码焕然一新。
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* 右侧毛玻璃悬浮卡片 */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative w-full aspect-4/5 bg-linear-to-tr from-zinc-900 via-zinc-800/20 to-zinc-900 border border-zinc-800/80 rounded-[3rem] overflow-hidden flex items-center justify-center p-8 shadow-2xl group">
                {/* 动态玻璃流光背景 */}
                <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative w-full h-[85%] bg-black/60 backdrop-blur-2xl rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center p-8 space-y-8 transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="space-y-3">
                    <h3 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-br from-white to-zinc-600">
                      100<span className="text-4xl">+</span>
                    </h3>
                    <p className="text-zinc-400 font-medium tracking-widest uppercase text-sm">成功交付项目</p>
                  </div>
                  <div className="w-16 h-px bg-zinc-800" />
                  <div className="space-y-3">
                    <h3 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-br from-emerald-400 to-emerald-900">
                      99<span className="text-4xl">.9%</span>
                    </h3>
                    <p className="text-zinc-400 font-medium tracking-widest uppercase text-sm">系统可用性保障</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA - 极简留白风格 */}
      <section className="relative py-40 px-6 text-center bg-background overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-1/2 bg-blue-500/10 blur-[100px] pointer-events-none" />
        <h2 className="z-10 relative text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl mx-auto text-balance">
          准备好驶入数字化快车道了吗？
        </h2>
        <p className="z-10 relative text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          不妨坐下来和我们的数字化专家聊聊。无论规模大小，挑战几何，我们随时准备为您排忧解难。
        </p>
        <Link
          href="/contact"
          className="z-10 relative inline-flex items-center justify-center h-16 w-full sm:w-auto px-12 text-xl font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-full transition-all shadow-xl shadow-primary/20 hover:scale-105 hover:shadow-primary/40 duration-300"
        >
          立即预约评估
        </Link>
      </section>
    </main>
  );
}

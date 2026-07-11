import {
  ArrowRight,
  CalendarDays,
  Clock,
  Database,
  GanttChartSquare,
  Package,
  Route,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { HeroMockup } from "../../../../components/hero-mockup";

export default function APSPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-orange-500/30">
      {/* 1. 极致震撼的 HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden border-b border-border/50">
        {/* 背景动态光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] md:w-[1200px] md:h-[700px] bg-orange-500/15 dark:bg-orange-600/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute -top-40 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero 内容 */}
        <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 font-semibold text-sm mb-8 ring-1 ring-orange-500/20 backdrop-blur-sm">
            <Sparkles className="size-4" /> MSRU APS 智能排程引擎
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-8 leading-[1.1] text-balance">
            让生产计划， <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400 dark:from-orange-400 dark:to-amber-300">
              精确到毫秒。
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-balance">
            打破传统黑盒式的经验排产。基于运筹学与 AI 启发式算法，全局统筹人员、机台、物料与模具边界约束。
            一键生成全局最优的最短交期与最低成本生产计划。
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-medium hover:scale-105 transition-transform shadow-2xl shadow-primary/20 hover:shadow-primary/40"
            >
              获取企业版报价
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-transparent border border-border text-foreground text-lg font-medium hover:bg-muted transition-colors"
            >
              阅读架构白皮书 <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>

        {/* 悬浮的Dashboard Mockup 视觉元素 */}
        <HeroMockup theme="amber" />
      </section>

      {/* 2. 核心指标统计 - Apple 风格大字 */}
      <section className="py-24 bg-zinc-950 text-white w-full border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 tracking-tight text-zinc-100">
            不是预估。是真实的运筹优化。
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-x-0 lg:divide-x divide-zinc-800">
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-orange-400 mb-4 tracking-tighter">
                98<span className="text-4xl md:text-5xl">%</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">按期交货履行率 (OTD)</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-orange-400 mb-4 tracking-tighter">
                40<span className="text-4xl md:text-5xl">%</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">生产换型时间缩短</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-orange-400 mb-4 tracking-tighter">
                85<span className="text-4xl md:text-5xl">%</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">排产人工成本降低</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-orange-400 mb-4 tracking-tighter">
                &lt;5<span className="text-4xl md:text-5xl">min</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">十万级工序重排响应</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 设计哲学宣言 */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          应对插单危机，
          <br />
          从未如此从容。
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          急单来了？物料迟到了？设备突然当机？传统计划体系往往需要推倒重来，耗费数天。APS
          动态重排引擎能在数分钟内评估影响涟漪效应，快速在数千种替代方案中计算出最优解，确保全局损失最小化。
        </p>
      </section>

      {/* 4. 八宫格超大 BENTO GRID */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          {/* Card 1: 复杂约束 (Large) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-orange-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Route className="size-12 text-orange-500 mb-8" />
            <h3 className="text-3xl font-bold mb-4">多维资源约束建模 (Finite Capacity)</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              不仅考虑设备产能，更将人员技能矩阵、辅助治具/模具数量、能源峰谷波动、甚至是同工序防污染隔离要求等硬软维约束全息建模，拒绝生成任何“纸上谈兵”的虚假计划。
            </p>
            {/* Visual element */}
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-2xl transform rotate-12 flex flex-col gap-3 p-4 opacity-50 group-hover:-translate-y-4 group-hover:rotate-6 transition-all duration-700">
              {/* Mocking a gantt chart visually */}
              <div className="flex gap-2">
                <div className="w-10 h-8 bg-transparent" />
                <div className="h-8 w-1/2 bg-orange-500/30 rounded-md" />
              </div>
              <div className="flex gap-2">
                <div className="w-20 h-8 bg-transparent" />
                <div className="h-8 w-1/3 bg-amber-500/30 rounded-md" />
              </div>
              <div className="flex gap-2">
                <div className="w-5 h-8 bg-transparent" />
                <div className="h-8 w-1/4 bg-red-500/30 rounded-md" />
              </div>
            </div>
          </div>

          {/* Card 2: MRP 物料齐套 (Medium) */}
          <div className="md:col-span-1 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-orange-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tr from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <Package className="size-10 text-orange-500" />
              <h3 className="text-2xl font-bold">精益物料需求演算 (JIT)</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              基于展开后的 BOM
              分阶级联计算，打通底层仓库/在途进耗存数据。自动推演齐套缺件瓶颈，精确指示采购入库节点，大幅削减呆滞库存。
            </p>
          </div>

          {/* Card 3: 瓶颈优化 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-orange-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-bl from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Zap className="size-10 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">TOC 瓶颈侦测</h3>
            <p className="text-muted-foreground text-sm">
              基于约束理论寻找并标识产线真实瓶颈工位。算法自动将非瓶颈工序缓冲对其看齐，使得整体产出最大化。
            </p>
          </div>

          {/* Card 4: 甘特图看板 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-orange-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <GanttChartSquare className="size-10 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">无限滚动甘特图</h3>
            <p className="text-muted-foreground text-sm">
              丝滑的 WebGL 驱动甘特图组件。支持百万级工单的缩放拖拽、合并拆批与直接锁定期限操作。
            </p>
          </div>

          {/* Card 5: 优化目标 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-orange-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <Target className="size-12 text-zinc-400 group-hover:text-orange-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">自定义优化权重</h3>
          </div>

          {/* Card 6: 即时交期 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-orange-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <Clock className="size-12 text-zinc-400 group-hover:text-orange-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">CTP 可承诺交期</h3>
          </div>

          {/* Card 7: 云原生架构 (Long) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-orange-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tl from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <Database className="size-10 text-orange-500" />
              <h3 className="text-2xl font-bold">分布式并行计算矩阵</h3>
            </div>
            <p className="text-muted-foreground">
              运筹优化是算力密集型任务。MSRU APS 提供云端按需伸缩的弹性的 GPU/CPU
              异构加速集群矩阵，让包含千万级变量的大型离散制造排产在单杯咖啡的时间内算出全局闭解。
            </p>
          </div>
        </div>
      </section>

      {/* 9. 巨型底部 CTA */}
      <section className="relative py-32 px-6 overflow-hidden bg-orange-600 dark:bg-orange-900 text-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-400/30 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <CalendarDays className="size-20 mx-auto mb-8 opacity-80" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            从混沌计划到
            <br />
            精确节拍。
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto">
            停止救火式的车间调度。我们将安排资深运筹学实施专家为您进行工厂逻辑建模咨询。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="h-16 px-10 inline-flex items-center justify-center rounded-full bg-white text-orange-600 text-xl font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              预约 APS 功能演示
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

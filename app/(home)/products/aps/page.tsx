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
import { CTASection, Hero, StatBlock } from "@/components/marketing";
import { apsCta, apsHero, apsStats } from "@/content/marketing/products/aps";
import { HeroMockup } from "../../../../components/hero-mockup";

export default function APSPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-orange-500/30">
      {/* 1. 极致震撼的 HERO SECTION */}
      <Hero {...apsHero} mockup={<HeroMockup theme="amber" />} />

      {/* 2. 核心指标统计 - Apple 风格大字 */}
      <StatBlock {...apsStats} />

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
      <CTASection {...apsCta} />
    </main>
  );
}

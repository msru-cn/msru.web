import {
  Activity,
  ArrowRight,
  ClipboardList,
  Database,
  PieChart,
  Settings,
  Sparkles,
  Toolbox,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { StatBlock } from "@/components/marketing";
import { HeroMockup } from "@/components/hero-mockup";

const EAM_STATS = [
  { value: "80", unit: "%", label: "意外停机事故削减" },
  { value: "25", unit: "%", label: "备件冗余资金释放" },
  { value: "15", unit: "%", label: "设备平均生命周期延长" },
  { value: "+30", unit: "%", label: "维修技师响应效率" },
];

export default function EAMPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-teal-500/30">
      {/* 1. 极致震撼的 HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden border-b border-border/50">
        {/* 背景动态光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] md:w-[1200px] md:h-[700px] bg-teal-500/15 dark:bg-teal-600/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute -top-40 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero 内容 */}
        <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 text-teal-500 font-semibold text-sm mb-8 ring-1 ring-teal-500/20 backdrop-blur-sm">
            <Sparkles className="size-4" /> MSRU EAM 资产管理引擎
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-8 leading-[1.1] text-balance">
            让设备停机， <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-emerald-400 dark:from-teal-400 dark:to-emerald-300">
              成为历史名词。
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-balance">
            资产不是折旧账本，而是创造价值的核心引擎。将传统救火式维修升级为 AI 驱动的“预测性维保”。
            深探设备微观工况，释放千万级固定资产隐形产能。
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
        <HeroMockup theme="teal" />
      </section>

      {/* 2. 核心指标统计 - Apple 风格大字 */}
      <StatBlock heading="不是折旧摊销。是生命周期续航。" accentColor="teal" stats={EAM_STATS} />

      {/* 3. 设计哲学宣言 */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          给机器挂上听诊器，
          <br />
          倾听金属的疲劳。
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          我们拒绝将资产管理单纯视作财务概念上的“台账”。结合最前沿的工业物联网高频振动与温度采样分析，我们的模型能够抓取轴承破裂前两周的轻微异响，在灾难发生前将维修单精准推送到技师的PDA上。
        </p>
      </section>

      {/* 4. 八宫格超大 BENTO GRID */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          {/* Card 1: 预防性维保 (Large) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-teal-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Activity className="size-12 text-teal-500 mb-8" />
            <h3 className="text-3xl font-bold mb-4">智能预防与预测性维保 (PdM)</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              突破被动式的设备故障报修。您可以基于稼动时长、循环次数建立灵活规则周期保养 (PM)，更可挂载 PHM
              预测模型对电流偏离及主轴温升实时在线诊断。
            </p>
            {/* Visual element */}
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-2xl transform rotate-12 flex flex-col gap-3 p-4 opacity-50 group-hover:-translate-y-4 group-hover:rotate-6 transition-all duration-700">
              <svg
                viewBox="0 0 100 50"
                className="w-full h-1/2 text-teal-500 fill-current opacity-30 mt-8"
                role="img"
                aria-label="Predictive maintenance path visualization"
              >
                <title>Predictive Maintenance Path</title>
                <path
                  d="M0,25 Q10,10 20,25 T40,25 T60,25 T80,25 T100,25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M50,25 L55,5 L65,45 L70,25" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </div>
          </div>

          {/* Card 2: 资产台账 (Medium) */}
          <div className="md:col-span-1 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-teal-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tr from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <ClipboardList className="size-10 text-teal-500" />
              <h3 className="text-2xl font-bold">全息设备档案与BOM</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              一键扫码开启设备的完整“简历”。结构树式管理设备本体、核心部件与备用配件（E-BOM）。绑定历史维修耗费、点检履历图纸说明书。
            </p>
          </div>

          {/* Card 3: 备件库存 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-teal-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-bl from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Settings className="size-10 text-teal-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">备品备件动态水位线</h3>
            <p className="text-muted-foreground text-sm">
              防积压也防缺料。依据历史消耗与未完成工单，自动发出安全库存补货预警机制。
            </p>
          </div>

          {/* Card 4: 维修工单 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-teal-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-t from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Wrench className="size-10 text-teal-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">抢单与派单混合流转</h3>
            <p className="text-muted-foreground text-sm">
              车间安灯报警后，手机APP即可抢单或基于维修技师专长矩阵定向指派，实时打卡记录响应时效参数。
            </p>
          </div>

          {/* Card 5: OEE 接口 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-teal-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <PieChart className="size-12 text-zinc-400 group-hover:text-teal-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">MTBF/MTTR 黄金分析</h3>
          </div>

          {/* Card 6: 点检计划 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-teal-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <Toolbox className="size-12 text-zinc-400 group-hover:text-teal-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">移动端防作弊巡检</h3>
          </div>

          {/* Card 7: PDM 集成体系 (Long) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-teal-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tl from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <Database className="size-10 text-teal-500" />
              <h3 className="text-2xl font-bold">底层 IoT 设备网关联动</h3>
            </div>
            <p className="text-muted-foreground">
              脱离隔离墙，本系统自然挂载平台底座的 MSRU IoT 基建设施。全息汇集高精度的数控中心状态日志、各类西门子三菱
              PLC 寄存器地址中的深度磨损信号数据。
            </p>
          </div>
        </div>
      </section>

      {/* 9. 巨型底部 CTA */}
      <section className="relative py-32 px-6 overflow-hidden bg-teal-600 dark:bg-teal-900 text-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-400/30 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Settings className="size-20 mx-auto mb-8 opacity-80" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            护航您的
            <br />
            核心印钞机。
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto">
            让设备始终保持出厂级的巅峰状态。立刻接入由 AI 与大数据驱动的新一代资管系统。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="h-16 px-10 inline-flex items-center justify-center rounded-full bg-white text-teal-600 text-xl font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              预约 EAM 功能演示
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

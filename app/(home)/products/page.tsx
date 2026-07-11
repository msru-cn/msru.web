import {
  ArrowRight,
  Building2,
  CalendarDays,
  CloudCog,
  Cpu,
  Database,
  Globe2,
  Link2,
  Network,
  Package,
  Settings,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsHubPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-brand/30">
      {/* 1. 震撼全景的 HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden border-b border-border/50">
        {/* 背景动态交织光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-linear-to-r from-blue-500/10 via-emerald-500/10 to-amber-500/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute -top-40 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero 内容 */}
        <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 text-foreground font-semibold text-sm mb-8 ring-1 ring-border backdrop-blur-sm">
            <Sparkles className="size-4 text-amber-500" /> MSRU DIGITAL MATRIX V5
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-8 leading-[1.1] text-balance">
            全面进化的七大引擎 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
              重塑智能制造
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-balance">
            告别七拼八凑的孤岛系统。我们耗时五年，基于统一微服务底座与单一数据主线打造了七大全域数字基座。
            从边缘物联设备的心跳，到大模型视觉质检的毫秒推演，真正实现跨越层级的无缝连接。
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-medium hover:scale-105 transition-transform shadow-2xl shadow-primary/20 hover:shadow-primary/40"
            >
              获取全架构解决方案
            </Link>
            <Link
              href="#products"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-transparent border border-border text-foreground text-lg font-medium hover:bg-muted transition-colors"
            >
              向下探索矩阵 <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>

        {/* 悬浮的 7 节点架构图 Mockup */}
        <div className="z-10  relative mt-24 w-full max-w-6xl mx-auto perspective-1000">
          <div className="relative aspect-video md:aspect-[2.5/1] rounded-2xl md:rounded-[2.5rem] bg-zinc-100/50 dark:bg-zinc-900/50 border border-border/50 shadow-2xl shadow-brand/5 overflow-hidden group flex flex-col pt-12 px-4 md:px-8 items-center justify-start backdrop-blur-xl">
            {/* Top Layer - Strategy */}
            <div className="flex justify-center mb-6 w-full z-20">
              <Link
                href="/products/aps"
                className="w-56 h-12 bg-orange-500/20 rounded-full border border-orange-500/30 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 shadow-[0_0_20px_theme('colors.orange.500/20')] hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="size-4" /> APS 高级引擎
                </span>
              </Link>
            </div>

            {/* Connecting lines from Strategy to Execution */}
            <div className="flex w-[60%] justify-between px-16 -mt-3 mb-3 z-10 opacity-50">
              <div className="w-px h-8 bg-linear-to-b from-orange-500/50 to-transparent -rotate-45 transform origin-top" />
              <div className="w-px h-8 bg-linear-to-b from-orange-500/50 to-transparent rotate-0" />
              <div className="w-px h-8 bg-linear-to-b from-orange-500/50 to-transparent rotate-45 transform origin-top" />
            </div>

            {/* Middle Layer - Execution (4 Nodes) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl z-20">
              <Link
                href="/products/mes"
                className="w-full h-12 bg-blue-500/20 rounded-full border border-blue-500/30 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 shadow-[0_0_20px_theme('colors.blue.500/20')] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                MES 协同制造
              </Link>
              <Link
                href="/products/wms"
                className="w-full h-12 bg-emerald-500/20 rounded-full border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-600 dark:text-emerald-400 shadow-[0_0_20px_theme('colors.emerald.500/20')] hover:scale-105 transition-all duration-300 delay-75 cursor-pointer"
              >
                WMS 智能立体库
              </Link>
              <Link
                href="/products/qms"
                className="w-full h-12 bg-rose-500/20 rounded-full border border-rose-500/30 flex items-center justify-center font-bold text-rose-600 dark:text-rose-400 shadow-[0_0_20px_theme('colors.rose.500/20')] hover:scale-105 transition-all duration-300 delay-100 cursor-pointer"
              >
                QMS 穿透质控
              </Link>
              <Link
                href="/products/eam"
                className="w-full h-12 bg-teal-500/20 rounded-full border border-teal-500/30 flex items-center justify-center font-bold text-teal-600 dark:text-teal-400 shadow-[0_0_20px_theme('colors.teal.500/20')] hover:scale-105 transition-all duration-300 delay-150 cursor-pointer"
              >
                EAM 预测维保
              </Link>
            </div>

            {/* Connecting lines from Execution to IoT */}
            <div className="w-full max-w-2xl h-8 border-b border-l border-r border-zinc-400/20 dark:border-zinc-700/50 rounded-b-3xl mt-4 mb-4 z-10" />
            <div className="w-px h-6 bg-linear-to-b from-zinc-400/50 to-transparent mb-4 z-10" />

            {/* Bottom/Base Layer - Data & AI */}
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center z-20">
              <Link
                href="/products/iot"
                className="flex-1 h-12 bg-purple-500/20 rounded-full border border-purple-500/30 flex items-center justify-center font-bold text-purple-600 dark:text-purple-400 shadow-[0_0_20px_theme('colors.purple.500/20')] hover:scale-105 group-hover:translate-y-2 transition-all duration-500 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Network className="size-4" /> IoT 边缘节点
                </span>
              </Link>
              <Link
                href="/products/ai"
                className="flex-1 h-12 bg-amber-500/10 rounded-full border border-amber-500/40 border-dashed flex items-center justify-center font-bold text-amber-600 dark:text-amber-400 shadow-[0_0_20px_theme('colors.amber.500/20')] hover:scale-105 group-hover:translate-y-2 transition-all duration-500 delay-100 animate-[pulse_3s_ease-in-out_infinite] cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Zap className="size-4" /> AI 底座大模型
                </span>
              </Link>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none z-30" />
          </div>
        </div>
      </section>

      {/* 2. 生态数据 - Apple 风格大字 */}
      <section className="py-24 bg-zinc-950 text-white w-full border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 tracking-tight text-zinc-100">
            正在掌管全球 500 万亿级产能。
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-x-0 lg:divide-x divide-zinc-800">
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-zinc-300 mb-4 tracking-tighter">
                150<span className="text-4xl md:text-5xl">+</span>
              </span>
              <span className="text-zinc-500 font-medium text-lg">世界 500 强企业的选择</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-zinc-300 mb-4 tracking-tighter">
                5<span className="text-4xl md:text-5xl">M</span>
              </span>
              <span className="text-zinc-500 font-medium text-lg">当前在线高精工业节点</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-zinc-300 mb-4 tracking-tighter">
                99<span className="text-4xl md:text-5xl">.99%</span>
              </span>
              <span className="text-zinc-500 font-medium text-lg">微服务集群云端高可用保障</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-zinc-300 mb-4 tracking-tighter">
                2<span className="text-4xl md:text-5xl">B</span>
              </span>
              <span className="text-zinc-500 font-medium text-lg">日均吞吐物联网消息规模</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 产品目录全景展示区 (Anchor: #products) */}
      <section id="products" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">全业务链，逐一击破。</h2>
          <p className="text-xl text-muted-foreground">点按任意产品模块，探索深不可测的企业级细节。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 auto-rows-[600px]">
          {/* MES 卡片 */}
          <Link
            href="/products/mes"
            className="group relative flex flex-col p-12 rounded-[3rem] overflow-hidden border border-border/50 hover:border-blue-500/50 transition-colors duration-500 cursor-pointer shadow-lg hover:shadow-blue-500/50"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="https://plus.unsplash.com/premium_photo-1681823030598-0e5e157c5f56?auto=format&fit=crop&q=80&w=1000"
                alt="MES Background"
                fill
                className="object-cover opacity-100 dark:opacity-80 [@media(hover:hover)]:opacity-50 [@media(hover:hover)]:dark:opacity-40 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:dark:group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-background/40 [@media(hover:hover)]:bg-background/90 [@media(hover:hover)]:group-hover:bg-background/40 transition-colors duration-700 pointer-events-none" />
            </div>
            <div className="z-10 flex flex-col h-full">
              <Cpu className="size-16 mb-8 text-blue-500 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                MES
                <br />
                <span className="text-2xl text-muted-foreground font-medium">制造执行引擎</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1 mt-4">
                承载最高密度的业务闭环。防呆防错、百万级工单 APS 高级排产调度、实时 OEE
                追踪与全面追溯。作为真正的全厂控制中枢，它连接了物理世界与数字化财务账本的最后一步。
              </p>
              <div className="flex items-center text-blue-500 font-bold text-lg mt-8 group-hover:underline">
                探索核心模块 <ArrowRight className="ml-2 size-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-linear-to-tl from-blue-500/20 to-transparent blur-3xl group-hover:scale-110 opacity-50 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            {/* 背景装饰图元 */}
            <div className="absolute top-12 right-12 size-40 border border-blue-500/10 rounded-full opacity-20 transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-1000" />
          </Link>

          {/* WMS 卡片 */}
          <Link
            href="/products/wms"
            className="group relative flex flex-col p-12 rounded-[3rem] overflow-hidden border border-border/50 hover:border-emerald-500/50 transition-colors duration-500 cursor-pointer shadow-lg hover:shadow-emerald-500/10"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682145126971-2d96b90811ac?auto=format&fit=crop&q=80&w=800"
                alt="WMS Background"
                fill
                className="object-cover opacity-100 dark:opacity-80 [@media(hover:hover)]:opacity-50 [@media(hover:hover)]:dark:opacity-40 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:dark:group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-background/40 [@media(hover:hover)]:bg-background/90 [@media(hover:hover)]:group-hover:bg-background/40 transition-colors duration-700 pointer-events-none" />
            </div>
            <div className="z-10 flex flex-col h-full">
              <Package className="size-16 mb-8 text-emerald-500 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                WMS
                <br />
                <span className="text-2xl text-muted-foreground font-medium">智能仓储物流</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1 mt-4">
                打破静态货架的束缚。支持 3D
                库位映射，运用智能波次合并算法，结合自动化设备（堆垛机、四向车、AGV）实现黑灯立体库。消除找货痛苦，将坪效与人效推向绝对极限。
              </p>
              <div className="flex items-center text-emerald-500 font-bold text-lg mt-8 group-hover:underline">
                探索流转体系 <ArrowRight className="ml-2 size-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-linear-to-tl from-emerald-500/20 to-transparent blur-3xl group-hover:scale-110 opacity-50 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            {/* 背景装饰图元 */}
            <div className="absolute top-12 right-12 size-40 border border-emerald-500/10 rounded-sm rotate-12 opacity-20 transform translate-x-10 -translate-y-10 group-hover:rotate-45 transition-transform duration-1000" />
          </Link>

          {/* APS 卡片 */}
          <Link
            href="/products/aps"
            className="group relative flex flex-col p-12 rounded-[3rem] overflow-hidden border border-border/50 hover:border-orange-500/50 transition-colors duration-500 cursor-pointer shadow-lg hover:shadow-orange-500/10"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661698096720-fa62a0e580c1?auto=format&fit=crop&q=80&w=800"
                alt="APS Background"
                fill
                className="object-cover opacity-100 dark:opacity-80 [@media(hover:hover)]:opacity-50 [@media(hover:hover)]:dark:opacity-40 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:dark:group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-background/40 [@media(hover:hover)]:bg-background/90 [@media(hover:hover)]:group-hover:bg-background/40 transition-colors duration-700 pointer-events-none" />
            </div>
            <div className="z-10 flex flex-col h-full">
              <CalendarDays className="size-16 mb-8 text-orange-500 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                APS
                <br />
                <span className="text-2xl text-muted-foreground font-medium">高级计划与排程</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1 mt-4">
                打破产能与交期的测算黑盒。毫秒级求解数万条约束规则，实现基于设备、物料、模具、人员的四维联合排产。从客户订单到车间工序，提供端到端的绝对掌控力。
              </p>
              <div className="flex items-center text-orange-500 font-bold text-lg mt-8 group-hover:underline">
                洞悉排程算法 <ArrowRight className="ml-2 size-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-linear-to-tl from-orange-500/20 to-transparent blur-3xl group-hover:scale-110 opacity-50 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            {/* 背景装饰图元 */}
            <div className="absolute top-12 right-12 size-40 border-2 border-orange-500/10 rounded-lg opacity-20 transform translate-x-10 -translate-y-10 group-hover:-rotate-12 transition-transform duration-1000" />
          </Link>

          {/* QMS 卡片 */}
          <Link
            href="/products/qms"
            className="group relative flex flex-col p-12 rounded-[3rem] overflow-hidden border border-border/50 hover:border-rose-500/50 transition-colors duration-500 cursor-pointer shadow-lg hover:shadow-rose-500/10"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="https://plus.unsplash.com/premium_photo-1720091339077-d0f56397a0c9?auto=format&fit=crop&q=80&w=800"
                alt="QMS Background"
                fill
                className="object-cover opacity-100 dark:opacity-80 [@media(hover:hover)]:opacity-50 [@media(hover:hover)]:dark:opacity-40 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:dark:group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-background/40 [@media(hover:hover)]:bg-background/90 [@media(hover:hover)]:group-hover:bg-background/40 transition-colors duration-700 pointer-events-none" />
            </div>
            <div className="z-10 flex flex-col h-full">
              <ShieldCheck className="size-16 mb-8 text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                QMS
                <br />
                <span className="text-2xl text-muted-foreground font-medium">全域质量管理</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1 mt-4">
                将品质管控提升至主动防御级别。从 IQC 来料到 OQC 出货，整合 SPC 实时监控与 FMEA
                失效分析。消除不良品流出风险，构建坚若磐石的企业质量信用体系。
              </p>
              <div className="flex items-center text-rose-500 font-bold text-lg mt-8 group-hover:underline">
                查看质控流 <ArrowRight className="ml-2 size-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-linear-to-tl from-rose-500/20 to-transparent blur-3xl group-hover:scale-110 opacity-50 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            {/* 背景装饰图元 */}
            <div className="absolute top-12 right-12 size-40 border-t-2 border-r-2 border-rose-500/10 rounded-tr-3xl opacity-20 transform translate-x-10 -translate-y-10 group-hover:scale-125 transition-transform duration-1000" />
          </Link>

          {/* EAM 卡片 */}
          <Link
            href="/products/eam"
            className="group relative flex flex-col p-12 rounded-[3rem] overflow-hidden border border-border/50 hover:border-teal-500/50 transition-colors duration-500 cursor-pointer shadow-lg hover:shadow-teal-500/10"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="https://plus.unsplash.com/premium_photo-1663047133000-8f9ae7fea6cd?auto=format&fit=crop&q=80&w=800"
                alt="EAM Background"
                fill
                className="object-cover opacity-100 dark:opacity-80 [@media(hover:hover)]:opacity-50 [@media(hover:hover)]:dark:opacity-40 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:dark:group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-background/40 [@media(hover:hover)]:bg-background/90 [@media(hover:hover)]:group-hover:bg-background/40 transition-colors duration-700 pointer-events-none" />
            </div>
            <div className="z-10 flex flex-col h-full">
              <Settings className="size-16 mb-8 text-teal-500 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                EAM
                <br />
                <span className="text-2xl text-muted-foreground font-medium">企业设备资产管理</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1 mt-4">
                从“坏了再修”向“预测性维护”的全面跨越。实时掌握高价值关键设备健康度，全生命周期追踪备品备件消耗。彻底杜绝非计划停机，将设备潜能发挥到极致。
              </p>
              <div className="flex items-center text-teal-500 font-bold text-lg mt-8 group-hover:underline">
                解锁设备潜能 <ArrowRight className="ml-2 size-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-linear-to-tl from-teal-500/20 to-transparent blur-3xl group-hover:scale-110 opacity-50 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            {/* 背景装饰图元 */}
            <div className="absolute top-12 right-12 size-40 border-8 border-double border-teal-500/10 rounded-full opacity-20 transform translate-x-10 -translate-y-10 group-hover:rotate-90 transition-transform duration-1000" />
          </Link>

          {/* IoT 卡片 */}
          <Link
            href="/products/iot"
            className="group relative flex flex-col p-12 rounded-[3rem] overflow-hidden border border-border/50 hover:border-purple-500/50 transition-colors duration-500 cursor-pointer shadow-lg hover:shadow-purple-500/10"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682148579164-dd60935de56a?auto=format&fit=crop&q=80&w=800"
                alt="IoT Background"
                fill
                className="object-cover opacity-100 dark:opacity-80 [@media(hover:hover)]:opacity-50 [@media(hover:hover)]:dark:opacity-40 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:dark:group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-background/40 [@media(hover:hover)]:bg-background/90 [@media(hover:hover)]:group-hover:bg-background/40 transition-colors duration-700 pointer-events-none" />
            </div>
            <div className="z-10 flex flex-col h-full">
              <Network className="size-16 mb-8 text-purple-500 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                IoT
                <br />
                <span className="text-2xl text-muted-foreground font-medium">边缘物联云基座</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1 mt-4">
                终结信息黑匣。万物互联的神经末梢底座，支持 300+
                工业协议免驱集成。内置断网续传、本地边缘规则计算与百万并发级 MQTT
                Broker，将僵死的冰冷机器变身为在线的发声者。
              </p>
              <div className="flex items-center text-purple-500 font-bold text-lg mt-8 group-hover:underline">
                研究底层架构 <ArrowRight className="ml-2 size-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-linear-to-tl from-purple-500/20 to-transparent blur-3xl group-hover:scale-110 opacity-50 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            {/* 背景装饰图元 */}
            <div className="absolute top-12 right-12 size-40 border-4 border-dashed border-purple-500/10 rounded-full opacity-20 transform translate-x-10 -translate-y-10 group-hover:animate-[spin_4s_linear_infinite]" />
          </Link>

          {/* AI 卡片 */}
          <Link
            href="/products/ai"
            className="group md:col-span-2 relative flex flex-col p-12 rounded-[3rem] overflow-hidden border border-border/50 hover:border-amber-500/50 transition-colors duration-500 cursor-pointer shadow-lg hover:shadow-amber-500/10"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="https://plus.unsplash.com/premium_photo-1762847960560-a5e39d1a1ccf?auto=format&fit=crop&q=80&w=1000"
                alt="AI Background"
                fill
                className="object-cover opacity-100 dark:opacity-80 mix-blend-normal [@media(hover:hover)]:opacity-50 [@media(hover:hover)]:dark:opacity-40 [@media(hover:hover)]:mix-blend-luminosity [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:dark:group-hover:opacity-80 [@media(hover:hover)]:group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-background/40 [@media(hover:hover)]:bg-background/90 [@media(hover:hover)]:group-hover:bg-background/40 transition-colors duration-700 pointer-events-none" />
            </div>
            <div className="z-10 flex flex-col h-full">
              <Zap className="size-16 mb-8 text-amber-500 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                AI
                <br />
                <span className="text-2xl text-muted-foreground font-medium">工业大模型视觉</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1 mt-4">
                未来五年的竞争壁垒。超越人类疲劳极限的 CV 缺陷识别集群，叠加百亿参数级的设备私域 RAG
                大语文维修助手。它不仅看图纸，更理解逻辑；它不是软件，而是一位数字首席技术官。
              </p>
              <div className="flex items-center text-amber-500 font-bold text-lg mt-8 group-hover:underline">
                启动硅基大脑 <ArrowRight className="ml-2 size-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-linear-to-tl from-amber-500/20 to-transparent blur-3xl group-hover:scale-110 opacity-50 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            {/* 背景装饰图元 */}
            <div className="absolute top-12 right-12 grid grid-cols-2 gap-2 opacity-20 transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-500">
              <div className="size-16 bg-amber-500/20 rounded-tl-full" />
              <div className="size-16 bg-amber-500/20 rounded-tr-full" />
              <div className="size-16 bg-amber-500/20 rounded-bl-full" />
              <div className="size-16 bg-amber-500/20 rounded-br-full" />
            </div>
          </Link>
        </div>
      </section>

      {/* 4. 协同作战：无缝连接的生态 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 p-12 bg-zinc-950 rounded-[3rem] text-white">
          <div className="flex-1 space-y-8 z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              拼图的价值，
              <br />
              在于完美咬合。
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-6">
              当单独采购时，它们在各自领域无可挑剔。但当这七大基座结合在同一个内网中时，产生了不可思议的生态化学反应：
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-zinc-800 rounded-lg">
                  <Link2 className="size-5 text-zinc-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">IoT 报修触发 MES 停机，WMS 调拨配件，AI 指导修复</h4>
                  <p className="text-zinc-500 text-sm">
                    一个完整的纵向击穿流，横跨了设备侧、计划侧、仓储侧与维护侧，而其中没有一个多余的人工传话动作。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-zinc-800 rounded-lg">
                  <Database className="size-5 text-zinc-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">单一全局对象模型库 (One Object Model)</h4>
                  <p className="text-zinc-500 text-sm">
                    无需在多个子系统间互相写冗杂的 API 同步物料主数据与人员架构，全产品级复用统一的基础设施服务栈。
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full lg:w-1/2 relative min-h-[400px]">
            {/* 抽象艺术连线图展示系统协同 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-[0.5px] border-zinc-800 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-48 h-48 border-[0.5px] border-zinc-700/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute w-80 h-80 border-[0.5px] border-zinc-900 rounded-full" />

              {/* 悬浮球 */}
              <div className="absolute top-10 right-10 flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full backdrop-blur z-20">
                <Cpu className="size-4" /> MES
              </div>
              <div className="absolute bottom-10 left-10 flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full backdrop-blur z-20">
                <Package className="size-4" /> WMS
              </div>
              <div className="absolute bottom-1/4 right-5 flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full backdrop-blur z-20">
                <Network className="size-4" /> IoT
              </div>
              <div className="absolute top-1/4 left-5 flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full backdrop-blur z-20">
                <Zap className="size-4" /> AI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 统一架构技术底座 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">生于大厂，强在边缘。</h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          MSRU 平台基于 Golang / GoZero 与 Spring Cloud 混合微服务构建，前端采用 Next.js 高阶 SSR 层。 既可以轻量级一键
          Helm Chart 部署在私有本地物理服务器，也能弹性扩展在 AWS / 阿里云的 K8s 容器海中。
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-border bg-zinc-50 dark:bg-zinc-900/40 rounded-3xl">
            <CloudCog className="size-12 text-zinc-400 mb-6 mx-auto" />
            <h4 className="text-xl font-bold mb-4">SaaS 共有云</h4>
            <p className="text-muted-foreground text-sm">
              免运维开箱即用。适合小批量试水的中小型工厂集群，按月订阅无需高昂初装费。
            </p>
          </div>
          <div className="p-8 border border-border bg-zinc-50 dark:bg-zinc-900/40 rounded-3xl">
            <Building2 className="size-12 text-zinc-400 mb-6 mx-auto" />
            <h4 className="text-xl font-bold mb-4">企业级私有化</h4>
            <p className="text-muted-foreground text-sm">
              将控制权 100% 握在手中。我们提供从数据库到应用容器的单机柜一体机镜像物理交付套件。
            </p>
          </div>
          <div className="p-8 border border-border bg-zinc-50 dark:bg-zinc-900/40 rounded-3xl">
            <Globe2 className="size-12 text-zinc-400 mb-6 mx-auto" />
            <h4 className="text-xl font-bold mb-4">云边局域网混合</h4>
            <p className="text-muted-foreground text-sm">
              中心汇总管理全局账务指标，车间层放置边缘计算节点提供超低延迟执行，即时外网断列依然不罢工。
            </p>
          </div>
        </div>
      </section>

      {/* 6. 通用架构级别 FAQ */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full border-t border-border">
        <h2 className="text-3xl font-bold mb-12 text-center">全局决策者经常问我们</h2>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border">
            <h4 className="text-lg font-bold mb-2">我是中型工厂，买不起四大全套产品怎么办？</h4>
            <p className="text-muted-foreground">
              平台底层是解耦的。您可以仅订阅 MES，甚至仅仅采购一套具备极高价值回报率的 WMS 或者单个 AI
              瑕疵检测视觉柜。所有的系统都可以像积木一样在日后单独拔插扩容。
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border">
            <h4 className="text-lg font-bold mb-2">是否有基于大厂的定制化交付实施？</h4>
            <p className="text-muted-foreground">
              是的，除了 SaaS
              层面的标准功能外，面对大型国有制造局和合资企业。我们的专属架构技术团队会进驻您的基地完成深度驻场代码级二次定制与旧平台割接。
            </p>
          </div>
        </div>
      </section>

      {/* 7. 最终全屏 CTA */}
      <section className="relative py-32 px-6 overflow-hidden bg-background border-t border-border text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl mx-auto">
          停止内耗。
          <br />
          启动智能纪元。
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          不再妥协于难用的丑陋界面与迟缓繁琐的人工报表中。
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="/contact"
            className="h-16 px-12 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold hover:scale-105 transition-all shadow-2xl"
          >
            预约战略演示
          </Link>
          <Link
            href="/docs"
            className="h-16 px-12 inline-flex items-center justify-center rounded-full border border-border text-foreground text-xl font-medium hover:bg-muted transition-colors"
          >
            阅读开发文档大全
          </Link>
        </div>
      </section>
    </main>
  );
}

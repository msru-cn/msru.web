import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpFromLine,
  BarChart3,
  Box,
  Combine,
  Compass,
  Container,
  Database,
  Eye,
  Forklift,
  MapPin,
  Network,
  PackageCheck,
  PackageSearch,
  ScanLine,
  Sparkles,
  Target,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { HeroMockup } from "@/components/hero-mockup";
import { StatBlock } from "@/components/marketing";

const WMS_STATS = [
  { value: "150", unit: "%", label: "拣货人效跃升" },
  { value: "0", unit: ".01%", label: "发货出错容忍率" },
  { value: "40", unit: "%", label: "储位空间节省" },
  { value: "24", unit: "h", label: "黑灯仓库无人转场" },
];

export default function WMSPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-emerald-500/30">
      {/* 1. 极致震撼的 HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden border-b border-border/50">
        {/* 背景动态光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] md:w-[1200px] md:h-[700px] bg-emerald-500/15 dark:bg-emerald-600/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero 内容 */}
        <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-8 ring-1 ring-emerald-500/20 backdrop-blur-sm">
            <Sparkles className="size-4" /> 下一代智能仓储大模型驱动
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-8 leading-[1.1] text-balance">
            让每一寸空间， <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300">
              极尽其用。
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-balance">
            告别找货慢、盘点难、错发漏发的纯人工仓库。从 3D 数字孪生库区规划，到驱动 AGV 机器人的最优路径调度， MSRU WMS
            赋予沉寂的货架以灵动的数字生命。
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white text-lg font-medium hover:scale-105 transition-transform shadow-2xl shadow-emerald-600/20 hover:shadow-emerald-600/40"
            >
              申请数字演示
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-transparent border border-border text-foreground text-lg font-medium hover:bg-muted transition-colors"
            >
              浏览波次策略白皮书 <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>

        {/* 悬浮的 3D Warehouse Mockup 视觉元素 */}
        <HeroMockup theme="emerald" />
      </section>

      {/* 2. 仓储奇迹 - Apple 风格大字 */}
      <StatBlock heading="彻底改写坪效与人效的极限。" accentColor="emerald" stats={WMS_STATS} />

      {/* 3. 设计哲学宣言 */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          不要再让您的工人，
          <br />
          在迷宫里寻找货物。
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          好的仓库管理不是事后记录，而是事前指引。传统的 "人找货" 模式正在拖垮您的物流吞吐。 MSRU WMS
          以动态波次算法与路径规划引擎为核心，结合智能立库设备，实现 "货找人"。让每一次入库与出库，都是最优解。
        </p>
      </section>

      {/* 4. 八宫格超大 BENTO GRID - WMS 核心能力 */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          {/* Card 1: 智能波次 (Large) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Combine className="size-12 text-emerald-500 mb-8" />
            <h3 className="text-3xl font-bold mb-4">波次算法与任务合并</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              引擎在后场静默分析成千上万个订单。按客户、承运商、线路或物料相似度自动合并创建波次（Wave
              Picking），通过计算重叠路径生成任务。让一趟叉车，完成过去五趟的活。
            </p>
            {/* Visual element */}
            <div className="absolute -bottom-6 -right-10 w-[400px] h-[300px] bg-zinc-200/50 dark:bg-zinc-800/50 rounded-2xl transform rotate-6 flex items-center justify-center p-4 opacity-50 group-hover:-translate-y-4 group-hover:-rotate-3 transition-all duration-700">
              <div className="flex gap-4">
                <div className="w-16 h-40 bg-emerald-500/30 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
                <div className="w-16 h-64 bg-emerald-500/60 rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
                <div className="w-16 h-24 bg-emerald-500/20 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>

          {/* Card 2: 3D 库区 (Medium) */}
          <div className="md:col-span-1 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <Box className="size-10 text-emerald-500" />
              <h3 className="text-2xl font-bold">3D 数字孪生热力图</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              全局上帝视角俯瞰仓库。实时高频更新商品动销率（ABC分类），以热力图形式呈现呆滞物料死角，并智能建议货位洗牌（Slotting
              Optimization）。
            </p>
          </div>

          {/* Card 3: 自动化集成 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-bl from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Forklift className="size-10 text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">WCS 设备控制塔</h3>
            <p className="text-muted-foreground text-sm">
              无缝衔接底层自动化，下发指令调度堆垛机、四向穿梭车、传送带集群，全硬件握手。
            </p>
          </div>

          {/* Card 4: 扫码防错 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <ScanLine className="size-10 text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">盲扫与校验防错</h3>
            <p className="text-muted-foreground text-sm">
              收货入库与打包出库支持强制扫码双重校验。一旦错误扫描，终端锁屏并在设备端发出声光报警。
            </p>
          </div>

          {/* Card 5: 入库规则 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-emerald-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <ArrowDownToLine className="size-12 text-zinc-400 group-hover:text-emerald-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">按容积自适应上架</h3>
          </div>

          {/* Card 6: 出库规则 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-emerald-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <ArrowUpFromLine className="size-12 text-zinc-400 group-hover:text-emerald-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">FIFO 严选约束</h3>
          </div>

          {/* Card 7: 批次与效期 (Long) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tl from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <PackageCheck className="size-10 text-emerald-500" />
              <h3 className="text-2xl font-bold">精细至批号与保质期</h3>
            </div>
            <p className="text-muted-foreground">
              为食品、化妆品及电子元器件等敏感行业打造。根据产品特性可设置
              FEFO（先到期先出）、LIFO（后进先出），且支持混放与多包装条码聚合解析。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 深度特写 A：前置仓与暗仓的路由黑科技 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium text-sm">
              <Compass className="size-4" /> 分布式调度
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">不仅仅是一个库。而是一张网。</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              如果您的企业拥有全国甚至全球级的多级分发网络（中心仓、CDC、RDC、前置门店仓），MSRU WMS
              将是最佳的神经中枢。
              它能依据客户收货地与各地库存余量，智能拆单、并单，将订单分派至成本或时效最优的物理节点。
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-teal-500/20 rounded-full">
                  <Target className="size-5 text-teal-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">跨仓调拨算法</h4>
                  <p className="text-muted-foreground">自动计算安全库存水位，在缺货发生前生成内调指令。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-teal-500/20 rounded-full">
                  <Target className="size-5 text-teal-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">多货主 (3PL) 计费</h4>
                  <p className="text-muted-foreground">
                    三方物流的绝对福音。按库位占用面积、作业频次自动生成按月账单。
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            <div className="aspect-4/3 rounded-[2rem] bg-teal-100 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-linear-to-tr from-teal-500/20 to-transparent" />
              <MapPin className="size-40 text-teal-500/40 relative z-10 hover:scale-110 transition-transform duration-700" />
              {/* 发散的涟漪波纹 */}
              <div className="absolute w-40 h-40 bg-teal-400/20 rounded-full animate-[ping_3s_ease-out_infinite] z-0" />
              <div className="absolute w-60 h-60 bg-teal-400/10 rounded-full animate-[ping_4s_ease-out_infinite] delay-1000 z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. 深度特写 B：视觉化大屏管理 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-medium text-sm">
              <BarChart3 className="size-4" /> 监控塔
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">每一秒的吞吐，尽收眼底。</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              为仓储经理配备了犹如机场控制塔般的指挥中心大屏。进港卡车排队状态、月台拥堵情况、AGV电量及位置、各波次拣货完成百分比……
              数据无需等待第二天出表，全部以秒级刷新呈现在您眼前。
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-border">
                <PackageSearch className="size-6 text-emerald-500 mb-2" />
                <h4 className="font-semibold">库区预警与塞车熔断</h4>
              </div>
              <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-border">
                <Truck className="size-6 text-emerald-500 mb-2" />
                <h4 className="font-semibold">月台进出场道闸联动</h4>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            <div className="aspect-4/3 rounded-[2rem] bg-emerald-100 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/20 to-transparent" />
              {/* 模拟柱状图上升 */}
              <div className="flex items-end gap-3 h-48 z-10">
                <div className="w-1/6 bg-emerald-500/40 rounded-t-lg group-hover:h-32 h-16 transition-all duration-1000" />
                <div className="w-1/6 bg-emerald-500/50 rounded-t-lg group-hover:h-40 h-20 transition-all duration-1000 delay-100" />
                <div className="w-1/6 bg-emerald-500/60 rounded-t-lg group-hover:h-24 h-12 transition-all duration-1000 delay-200" />
                <div className="w-1/6 bg-emerald-500/70 rounded-t-lg group-hover:h-48 h-32 transition-all duration-1000 delay-300" />
                <div className="w-1/6 bg-emerald-500/80 rounded-t-lg group-hover:h-36 h-10 transition-all duration-1000 delay-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ 常见问题 */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full border-t border-border">
        <h2 className="text-3xl font-bold mb-12 text-center">深入了解实施细节</h2>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border transition-colors hover:border-emerald-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Eye className="size-5 text-emerald-500" /> 我们目前只有人工叉车，能用这套高端系统吗？
            </h4>
            <p className="text-muted-foreground">
              不仅能用，而且最能体现人效提升。系统会将最佳路径发往工人的手持 PDA，人工只需循着 PDA
              指示行动。等您日后购买了 AGV，系统可无缝切换下发指令给机器人，无需二次采购软件。
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border transition-colors hover:border-emerald-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Database className="size-5 text-emerald-500" /> 我们的 ERP 系统已经有简单的库存管理，为什么还需要 WMS？
            </h4>
            <p className="text-muted-foreground">
              ERP 给的是账面库存，即 "有多少个"；而真正的 WMS 给的是实物动态控制，即 "货确切在哪个通道的第几层" 以及
              "哪辆车去搬最快"。对于中大型仓库，账务分离与动作级管控是必不可少的。
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border transition-colors hover:border-emerald-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Network className="size-5 text-emerald-500" /> 多久可以上线？新老数据可以平滑过渡吗？
            </h4>
            <p className="text-muted-foreground">
              标准版本的现场实施可控制在 4
              周内。我们提供完善的历史条码期初资产导入工具。在一个周末的停机盘点窗口内，即可将几十万条的历史期初库存平坦地迁移至新数字仓库。
            </p>
          </div>
        </div>
      </section>

      {/* 8. 巨型底部 CTA */}
      <section className="relative py-32 px-6 overflow-hidden bg-emerald-950 text-white border-t-4 border-teal-500">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-teal-500/40 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Container className="size-20 mx-auto mb-8 text-emerald-500 opacity-80" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            消除仓储死角。
            <br />
            就在今天。
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            停止用落后的方式管理最重要的资产。获取专属演示，看看我们将如何让您的库容运转如风。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="h-16 px-10 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white text-xl font-bold hover:scale-105 hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-600/20"
            >
              立即联系交付团队
            </Link>
            <Link
              href="/products/iot"
              className="h-16 px-10 inline-flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-white text-xl font-medium hover:bg-zinc-700 transition-colors"
            >
              探索下游 IoT 互联 <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

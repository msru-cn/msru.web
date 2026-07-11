import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Cpu,
  Database,
  Factory,
  FileSignature,
  LineChart,
  Link as LinkIcon,
  MonitorPlay,
  Network,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { CTASection, Hero, StatBlock } from "@/components/marketing";
import { mesCta, mesHero, mesStats } from "@/content/marketing/products/mes";
import { HeroMockup } from "@/components/hero-mockup";

export default function MESPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30">
      {/* 1. 极致震撼的 HERO SECTION */}
      <Hero {...mesHero} mockup={<HeroMockup theme="blue" />} />

      {/* 2. 核心指标统计 - Apple 风格大字 */}
      <StatBlock {...mesStats} />


      {/* 3. 设计哲学宣言 */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          它不仅记录你的过去，
          <br />
          更在主动调度你的未来。
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          传统 MES 仅仅是一个“打字机”，要求工人被动录入数据。而 MSRU MES 是一颗拥有极高自主意识的“大脑”。
          通过深度融合设备的底层 PLC 协议，它能够在你发现异常之前自动介入流转，并通过 APS
          引擎实时动态调整数万道工序的最佳排产。
        </p>
      </section>

      {/* 4. 八宫格超大 BENTO GRID */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          {/* Card 1: 生产排程 (Large) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <CalendarDays className="size-12 text-blue-500 mb-8" />
            <h3 className="text-3xl font-bold mb-4">敏捷高级排程 (APS)</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              告别 Excel
              计划表。内置多种运筹学启发式算法，根据交期、机台能力、模具寿命及人员技能矩阵，一键生成分钟级派工单。面对插单、机器故障时，毫秒级重排。
            </p>
            {/* Visual element */}
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-2xl transform rotate-12 flex flex-col gap-3 p-4 opacity-50 group-hover:-translate-y-4 group-hover:rotate-6 transition-all duration-700">
              <div className="h-8 w-3/4 bg-blue-500/20 rounded-md" />
              <div className="h-8 w-full bg-emerald-500/20 rounded-md" />
              <div className="h-8 w-5/6 bg-amber-500/20 rounded-md" />
              <div className="h-8 w-1/2 bg-purple-500/20 rounded-md" />
            </div>
          </div>

          {/* Card 2: 防错与追溯 (Medium) */}
          <div className="md:col-span-1 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="size-10 text-blue-500" />
              <h3 className="text-2xl font-bold">全生命周期追溯</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              正向追溯去向，反向追回源头。从一颗螺丝钉的供应商批次，到经过的每一道工序与操作员，扫描成品序列号，生成数万字防篡改数字履历卡（Device
              History Record）。
            </p>
          </div>

          {/* Card 3: 质量 SPC (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-bl from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <LineChart className="size-10 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">SPC 质量管控</h3>
            <p className="text-muted-foreground text-sm">
              自动采集实时质检数据，绘制 X-Bar R 控制图。在CPK越界前立刻发出预警，真正实现防范于未然。
            </p>
          </div>

          {/* Card 4: 看板与 OEE (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <MonitorPlay className="size-10 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">实时 OEE 引擎</h3>
            <p className="text-muted-foreground text-sm">
              时间稼动率、性能稼动率、良率。三大维度将设备黑匣子透明化，精准定位产线瓶颈。
            </p>
          </div>

          {/* Card 5: 工序流转 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-blue-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <Workflow className="size-12 text-zinc-400 group-hover:text-blue-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">柔性工序流转</h3>
          </div>

          {/* Card 6: 无纸化 SOP (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-blue-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <FileSignature className="size-12 text-zinc-400 group-hover:text-blue-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">E-SOP 无纸化</h3>
          </div>

          {/* Card 7: 云原生架构 (Long) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tl from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <Database className="size-10 text-blue-500" />
              <h3 className="text-2xl font-bold">混合云与微服务架构</h3>
            </div>
            <p className="text-muted-foreground">
              支持公有云 SaaS、私有化部署及边缘混合计算形态。底层采用 Docker 容器与 K8s
              集群调度，支持不停机灰度热更新，确保 99.99% 的核心产线高可用性。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 深度特写 A：车间数字孪生 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 font-medium text-sm">
              <Network className="size-4" /> 边缘物联闭环
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">消除所有等待时间的浪费。</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              MSRU MES 底层内置强悍的设备直连网关层。不再依靠工人走动报表。设备产出、刀具寿命、机台温度将通过 MQTT
              毫秒级上云。 当参数异常时，MES 可直接下发锁机指令，真正做到从监控到干预的超高速闭环。
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-indigo-500/20 rounded-full">
                  <CheckCircle2 className="size-5 text-indigo-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">反向控制</h4>
                  <p className="text-muted-foreground">设备无授权不启动，配方错误切断电源。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-indigo-500/20 rounded-full">
                  <CheckCircle2 className="size-5 text-indigo-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">自动报工</h4>
                  <p className="text-muted-foreground">依靠光电感应与 PLC 计数，剥离人员的主观数据偏差。</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            <div className="aspect-4/3 rounded-[2rem] bg-indigo-100 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-transparent" />
              {Array.from({ length: 20 }, (_, i) => i).map((id) => (
                <div
                  key={`signal-wave-${id}`}
                  className="absolute border border-blue-500/20 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"
                  style={{
                    width: `${(id + 1) * 30}%`,
                    height: `${(id + 1) * 30}%`,
                    animationDelay: `${id * 0.2}s`,
                  }}
                />
              ))}
              <Settings className="size-40 text-indigo-500/40 animate-[spin_10s_linear_infinite]" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. 深度特写 B：极简操作终端 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-medium text-sm">
              <Smartphone className="size-4" /> UI/UX 体验
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">比智能手机更易用的车间平板。</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              一线操作员的流失率居高不下，复杂的传统工业软件更是让他们抗拒。我们摒弃了工业软件丑陋笨重的表单，采用了模块化的触屏卡片流设计。
              超大按钮、颜色容错、PDA/平板自适应，新员工只需五分钟即可熟练开展报工操作。
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-border">
                <MonitorPlay className="size-6 text-zinc-500 mb-2" />
                <h4 className="font-semibold">安卓/iOS 原生级顺滑</h4>
              </div>
              <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-border">
                <Target className="size-6 text-zinc-500 mb-2" />
                <h4 className="font-semibold">防呆扫码枪深度适配</h4>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            <div className="aspect-4/3 rounded-[2rem] bg-blue-100 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-10 bg-linear-to-b from-blue-500/20 to-transparent pointer-events-none" />
              <Factory className="size-40 text-blue-500/40" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. 集成生态 */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto w-full text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">它是所有信息孤岛的终结者。</h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          MSRU MES 绝不画地为牢。提供数百个符合 OpenAPI 规范的 RESTful API 接口，并预埋主流商业套装软件的直连解析器。
        </p>

        <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
          {/* 左侧节点 */}
          <div className="flex flex-col gap-6 w-full md:w-auto z-10">
            <div className="px-8 py-4 bg-zinc-100 dark:bg-zinc-900 border border-border rounded-xl font-bold text-lg shadow-sm">
              SAP / Oracle ERP
            </div>
            <div className="px-8 py-4 bg-zinc-100 dark:bg-zinc-900 border border-border rounded-xl font-bold text-lg shadow-sm">
              Siemens PLM
            </div>
          </div>

          {/* 连接线特效 */}
          <div className="hidden md:flex flex-col items-center justify-center px-4">
            <LinkIcon className="size-8 text-blue-500/50" />
            <div className="h-0.5 w-16 bg-border mx-2" />
          </div>

          {/* 中心节点 */}
          <div className="z-10 relative group p-1">
            <div className="absolute inset-0 bg-blue-500/50 blur-xl group-hover:scale-125 transition-transform duration-500" />
            <div className="relative px-12 py-8 bg-blue-500 text-white rounded-3xl font-bold text-2xl shadow-xl flex items-center gap-3 border border-blue-400">
              <Cpu className="size-8" /> MSRU MES
            </div>
          </div>

          {/* 连接线特效 */}
          <div className="hidden md:flex flex-col items-center justify-center px-4">
            <div className="h-0.5 w-16 bg-border mx-2" />
            <LinkIcon className="size-8 text-blue-500/50" />
          </div>

          {/* 右侧节点 */}
          <div className="flex flex-col gap-6 w-full md:w-auto z-10">
            <div className="px-8 py-4 bg-zinc-100 dark:bg-zinc-900 border border-border rounded-xl font-bold text-lg shadow-sm">
              WMS 智能立体库
            </div>
            <div className="px-8 py-4 bg-zinc-100 dark:bg-zinc-900 border border-border rounded-xl font-bold text-lg shadow-sm">
              IoT SCADA 监控
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ 常见问题 */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full border-t border-border">
        <h2 className="text-3xl font-bold mb-12 text-center">架构师常见问答</h2>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border">
            <h4 className="text-lg font-bold mb-2">实施周期通常需要多久？</h4>
            <p className="text-muted-foreground">
              依托于我们微服务底座的低代码配置能力，标准功能的上线周期可压缩至 2 - 4
              周。对于涉及深度工艺定制化和老旧非标设备改造的大型集群，通常在 3 个月内完成验收运转。
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border">
            <h4 className="text-lg font-bold mb-2">是否支持集团级多工厂（Multi-site）管控？</h4>
            <p className="text-muted-foreground">
              完全支持。MSRU MES 建立在租户与组织隔离的架构矩阵上。集团总部可通过云盘汇总视角查看所有基地的 OEE
              及订单履约状态，而各分厂依然保持本地计算的低延迟执行。
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border">
            <h4 className="text-lg font-bold mb-2">我们的老设备没有网络接口，能接入 MES 吗？</h4>
            <p className="text-muted-foreground">
              可以。我们将通过加装 PLC 扩展模块或外部光电/温度传感器，配合 MSRU IoT
              智能网关，以非侵入的方式将哑设备转化为数字化资产。
            </p>
          </div>
        </div>
      </section>

      {/* 9. 巨型底部 CTA */}
      <CTASection {...mesCta} />
    </main>
  );
}

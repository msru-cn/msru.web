import { ArrowRight, Clock3, GitMerge, Lightbulb, Milestone, Rocket, ShieldCheck, Target, Users } from "lucide-react";
import Link from "next/link";

export default function DeliveryServicePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-teal-500/30">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pb-32 px-6 text-center overflow-hidden border-b border-border/50 bg-zinc-50 dark:bg-zinc-950">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-teal-500/50 to-transparent" />

        <div className="z-10 relative max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-600 dark:text-teal-400 backdrop-blur-md">
            <Milestone className="mr-2 h-4 w-4" />
            <span>MSRU 敏捷交付法 (M-ADM)</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white drop-shadow-sm">
            把蓝图，<span className="text-teal-500">毫秒不差</span>地落地。
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            告别传统工业软件动辄数年的漫长实施。我们遵循精益原则构建了标准实施路径，从业务调研到最终上线，实现 100%
            透明、可测与按期交付。
          </p>
        </div>
      </section>

      {/* 2. 核心优势 BENTO GRID */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              重新定义企业级交付
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-border/50 p-8 flex flex-col justify-between">
              <div className="size-12 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6">
                <Target className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">业务价值导向</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  拒绝“为了上系统而上系统”。每一次功能配置均与 KPI 相关联，直接解决产线堵点。
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-border/50 p-8 flex flex-col justify-between">
              <div className="size-12 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6">
                <Clock3 className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">积木式极速部署</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  依靠 MSRU 强大的元数据驱动引擎，将传统数月的二次开发缩短为数周的拖拽配置。
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-border/50 p-8 flex flex-col justify-between">
              <div className="size-12 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">零风险切线</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  基于数字孪生沙盘的全量压测验证，结合蓝绿发布策略，保障新系统上线工厂不停摆。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 动态时间轴 (Timeline) Mockup */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-b from-teal-900/20 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">标准化交付时间线</h2>
            <p className="text-zinc-400">以下是一套涵盖核心 MES/WMS 的标准 12 周实施落地图谱。</p>
          </div>

          <div className="relative border-l border-teal-500/30 ml-4 md:ml-0 space-y-12 pb-12">
            {[
              {
                phase: "Phase 1: 蓝图与需求",
                week: "Week 1-2",
                title: "业务痛点诊断与蓝图确认",
                icon: <Lightbulb className="size-5" />,
                desc: "资深顾问驻场，梳理 AS-IS 流程并设计 TO-BE 蓝图。产出《系统业务流程蓝图》。",
              },
              {
                phase: "Phase 2: 系统构建",
                week: "Week 3-7",
                title: "标准化配置与定制验证",
                icon: <GitMerge className="size-5" />,
                desc: "在沙箱环境中进行工厂建模、工艺路线配置及接口打通。阶段末完成系统功能原型确认 (UAT1)。",
              },
              {
                phase: "Phase 3: UAT 与培训",
                week: "Week 8-10",
                title: "关键用户培训与模拟演练",
                icon: <Users className="size-5" />,
                desc: "通过真实数据进行全链路压力测试，向用户交付操作手册并组织考核认证。",
              },
              {
                phase: "Phase 4: 上线与护航",
                week: "Week 11-12",
                title: "平滑切线与 7x24 护航",
                icon: <Rocket className="size-5" />,
                desc: "系统正式 Go-Live。原厂顾问双重驻场，保障新旧系统平滑切换，产线产能不跌波。",
              },
            ].map((step, idx) => (
              <div key={step.phase} className="relative pl-8 md:pl-16 group">
                {/* 节点指示器 */}
                <div className="absolute left-[-17px] top-1 size-8 rounded-full bg-zinc-900 border-2 border-teal-500 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-zinc-950 transition-colors shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                  {step.icon}
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  <span className="text-teal-400 font-mono text-sm px-2 py-0.5 bg-teal-500/10 rounded-md">
                    {step.phase} | {step.week}
                  </span>
                </div>
                <p className="text-zinc-400 leading-relaxed max-w-2xl">{step.desc}</p>

                {/* 装饰性连接线动画 */}
                {idx !== 3 && (
                  <div className="absolute -left-px top-10 bottom-[-48px] w-px bg-linear-to-b from-teal-500 via-teal-500/50 to-transparent hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-teal-500 px-8 text-base font-medium text-zinc-950 shadow-lg shadow-teal-500/20 hover:bg-teal-400 transition-colors"
            >
              预约顾问评估
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

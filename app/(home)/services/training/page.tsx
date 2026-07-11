import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  GraduationCap,
  Layers,
  Network,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function TrainingServicePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-emerald-500/30">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden border-b border-border/50 bg-zinc-50 dark:bg-zinc-950">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-linear-to-b from-emerald-500/10 to-transparent rounded-full blur-[80px] opacity-50 pointer-events-none" />

        <div className="z-10 relative max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur-md">
            <GraduationCap className="mr-2 h-4 w-4" />
            <span>MSRU 官方认证学院</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white drop-shadow-sm">
            为智能制造，<span className="text-emerald-500">培养火种</span>。
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            从初级开发者到企业级系统架构师。我们提供体系化的实战课程与高含金量的官方认证，构建企业自足的数字化团队。
          </p>
        </div>
      </section>

      {/* 2. 核心认证路径卡片 */}
      <section className="py-24 bg-white dark:bg-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              三大官方认证路径
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400">选择最适合您的职业进阶路线，获取行业认可的权威证书。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Developer Card */}
            <div className="relative group rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-border/50 p-8 hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:text-emerald-500 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
                <Code2 className="size-24" />
              </div>
              <div className="relative z-10 mb-8">
                <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-900 dark:text-white mb-4 shadow-sm">
                  MCD / MSRU Certified Developer
                </div>
                <h3 className="text-2xl font-bold mb-2">认证开发者</h3>
                <p className="text-zinc-500 text-sm h-16">
                  面向研发人员，掌握基于 MSRU 底层框架的二次开发、API 扩展与组件定制能力。
                </p>
              </div>
              <div className="relative z-10 space-y-3 mb-8 flex-1">
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <BookOpen className="size-4 text-emerald-500" /> 核心框架 API 深度解析
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Layers className="size-4 text-emerald-500" /> 前端组件与后端路由扩展
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Award className="size-4 text-emerald-500" /> 上机实操代码考核
                </div>
              </div>
              <Link
                href="#"
                className="relative z-10 text-emerald-600 dark:text-emerald-400 font-semibold text-sm flex items-center group/link mt-auto"
              >
                查看课程大纲 <ArrowRight className="ml-1 size-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Consultant Card */}
            <div className="relative group rounded-3xl bg-zinc-50 dark:bg-zinc-950 border-2 border-emerald-500/20 p-8 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/50 transition-all duration-300 flex flex-col">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:text-emerald-500 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
                <Briefcase className="size-24" />
              </div>
              <div className="relative z-10 mb-8">
                <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-4 shadow-sm">
                  MCC / MSRU Certified Consultant 核心推荐
                </div>
                <h3 className="text-2xl font-bold mb-2">认证实施顾问</h3>
                <p className="text-zinc-500 text-sm h-16">
                  面向业务与交付人员，精通标准系统模块配置、业务蓝图转化及工厂建模方法论。
                </p>
              </div>
              <div className="relative z-10 space-y-3 mb-8 flex-1">
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="size-4 text-emerald-500" /> MES/WMS 标准功能全景
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="size-4 text-emerald-500" /> 零代码工艺路线与表单配置
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="size-4 text-emerald-500" /> 敏捷项目实施沙盘演练
                </div>
              </div>
              <Link
                href="#"
                className="relative z-10 text-emerald-600 dark:text-emerald-400 font-semibold text-sm flex items-center group/link mt-auto"
              >
                查看课程大纲 <ArrowRight className="ml-1 size-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Architect Card */}
            <div className="relative group rounded-3xl bg-zinc-950 border border-zinc-800 p-8 shadow-2xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col text-white">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:text-emerald-500 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
                <Network className="size-24" />
              </div>
              <div className="relative z-10 mb-8">
                <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-300 mb-4 shadow-sm">
                  MCA / MSRU Certified Architect
                </div>
                <h3 className="text-2xl font-bold mb-2">认证架构师</h3>
                <p className="text-zinc-400 text-sm h-16">
                  面向卓越技术领袖，主导集团级多工厂分布式架构、高可用部署及微服务治理。
                </p>
              </div>
              <div className="relative z-10 space-y-3 mb-8 flex-1">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <Users className="size-4 text-emerald-500" /> 需拥有 MCD 且具备 5 年经验
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <Layers className="size-4 text-emerald-500" /> 异构系统集群集成方案
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <Award className="size-4 text-emerald-500" /> 数字孪生与 AI 底座架构设计
                </div>
              </div>
              <Link
                href="#"
                className="relative z-10 text-emerald-400 font-semibold text-sm flex items-center group/link mt-auto"
              >
                申请资质审核 <ArrowRight className="ml-1 size-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

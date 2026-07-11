import {
  AlertCircle,
  CheckCircle2,
  Headphones,
  LifeBuoy,
  MessageSquare,
  PhoneCall,
  ShieldAlert,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function SupportServicePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden border-b border-border/50 bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

        <div className="z-10 relative max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 backdrop-blur-md">
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>MSRU 全天候原厂响应中心</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
            永远在线的<span className="text-blue-500">技术后盾</span>。
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            产线一秒的停滞都是巨大的成本。我们提供 L1 到 L3 的全栈技术支持与 7x24 小时监控，防患未然，秒级响应。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/contact"
              className="group h-12 px-8 inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-base font-semibold transition-all hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              <PhoneCall className="mr-2 size-5" />
              获取支持方案
            </Link>
          </div>
        </div>

        {/* Mockup Screen: Server Status / Ticket Board */}
        <div className="mt-20 max-w-5xl mx-auto relative perspective-1000">
          <div className="w-full aspect-video md:aspect-21/9 bg-zinc-900 rounded-2xl md:rounded-[2rem] border border-zinc-700/50 shadow-2xl overflow-hidden flex flex-col relative">
            <div className="h-10 border-b border-zinc-800 flex items-center px-4 bg-zinc-950/50 gap-2">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-amber-500/80" />
              <div className="size-3 rounded-full bg-emerald-500/80" />
              <div className="ml-4 text-xs font-mono text-zinc-500 flex items-center gap-2">
                <Terminal className="size-3" />
                support-dashboard.msru.local
              </div>
            </div>
            <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="absolute inset-x-0 top-1/2 h-px bg-zinc-800/50" />

              {/* L1 Ticket Feed */}
              <div className="flex flex-col gap-4 relative z-10">
                <h4 className="text-xs font-bold text-zinc-500 flex items-center gap-2">
                  <MessageSquare className="size-3" /> ACTIVE TICKETS
                </h4>
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 animate-pulse">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] bg-red-500/20 text-red-400 px-1 rounded">P1 CRITICAL</span>
                    <span className="text-[10px] text-zinc-600">now</span>
                  </div>
                  <p className="text-xs text-zinc-300">Database connection timeout on Line-A.</p>
                </div>
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1 rounded">P2 HIGH</span>
                    <span className="text-[10px] text-zinc-600">2m ago</span>
                  </div>
                  <p className="text-xs text-zinc-300">Scanner latency spike detected.</p>
                </div>
              </div>

              {/* Center Node Health */}
              <div className="flex flex-col items-center justify-center relative z-10">
                <div className="size-32 rounded-full border border-blue-500/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-r-2 border-t-2 border-blue-500 animate-spin" />
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-blue-400">99.99%</span>
                    <span className="text-[10px] text-zinc-500">UPTIME SLA</span>
                  </div>
                </div>
              </div>

              {/* L3 Engineering Status */}
              <div className="flex flex-col gap-4 relative z-10">
                <h4 className="text-xs font-bold text-zinc-500 flex items-center gap-2">
                  <AlertCircle className="size-3" /> RESPONSE METRICS
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-zinc-400">Mean Time to Acknowledge</span>
                      <span className="text-blue-400 font-mono">{"< 5"} mins</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full">
                      <div className="h-full bg-blue-500 rounded-full w-[20%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-zinc-400">P1 Mean Time to Resolve</span>
                      <span className="text-blue-400 font-mono">1.2 hrs</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full">
                      <div className="h-full bg-blue-500 rounded-full w-[45%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 2. SLA 矩阵 */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              三级支持响应体系
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* L1 */}
            <div className="border border-border rounded-3xl p-8 hover:shadow-xl transition-shadow bg-zinc-50 dark:bg-zinc-950">
              <div className="size-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                <Headphones className="size-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">L1 客户支持</h3>
              <p className="text-zinc-500 mb-6 min-h-[48px]">7x24 原厂专属热线与工单系统接入。</p>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> 基础账号/权限疑难解答
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> 前端操作指导与文档提供
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> 工单分发与进度追踪
                </li>
              </ul>
            </div>

            {/* L2 */}
            <div className="border-2 border-blue-500 relative rounded-3xl p-8 shadow-lg shadow-blue-500/5 bg-zinc-50 dark:bg-zinc-950">
              <div className="absolute -top-3 left-8 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                CORE SLA
              </div>
              <div className="size-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 mt-2">
                <Zap className="size-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">L2 技术专家</h3>
              <p className="text-zinc-500 mb-6 min-h-[48px]">深入系统后端的远程故障排查与恢复。</p>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> 数据库/日志深度分析
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> BUG 重现与临时规避方案 (Workaround) 开发
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> 核心业务流程卡点紧急解除
                </li>
              </ul>
            </div>

            {/* L3 */}
            <div className="border border-border rounded-3xl p-8 hover:shadow-xl transition-shadow bg-zinc-50 dark:bg-zinc-950">
              <div className="size-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                <ShieldAlert className="size-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">L3 原厂研发</h3>
              <p className="text-zinc-500 mb-6 min-h-[48px]">源码级缺陷修复与底层架构兜底。</p>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> 紧急 Hotfix 补丁打包与推送
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> 操作系统/网络层高阶性能调优
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> 全栈崩溃级灾难恢复支持
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

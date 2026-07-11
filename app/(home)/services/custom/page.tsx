import {
  ArrowRight,
  Blocks,
  CodeSquare,
  Cpu,
  Fingerprint,
  GitPullRequest,
  MonitorSmartphone,
  Package,
  Puzzle,
  Settings2,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function CustomServicePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-purple-500/30">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden border-b border-border/50 bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-linear-to-bl from-purple-600/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="z-10 relative max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 backdrop-blur-md">
            <CodeSquare className="mr-2 h-4 w-4" />
            <span>MSRU 高阶定制研发</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
            超越标准，<span className="text-purple-500">重塑边界</span>。
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            应对最苛刻的非标业务场景。依托 MSRU
            平台强大的底座支撑与微服务架构，我们的研发团队为您打造独一无二的专属数字利器。
          </p>
        </div>

        {/* 抽象代码与微服务 Mockup Visual */}
        <div className="mt-20 max-w-5xl mx-auto relative perspective-1000 h-[300px] md:h-[400px]">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* 中心节点 */}
            <div className="size-24 rounded-2xl bg-zinc-900 border-2 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center justify-center relative z-20">
              <Cpu className="size-12 text-purple-400" />
              <div className="absolute inset-x-0 -bottom-8 text-center text-sm font-bold text-white tracking-widest">
                MSRU CORE
              </div>
            </div>

            {/* 连接线与周边节点 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full pointer-events-none">
              {/* Plugin 1 */}
              <div className="absolute top-[10%] left-[20%] group">
                <div className="absolute w-px h-32 bg-linear-to-b from-purple-500/50 to-transparent top-1/2 left-1/2 origin-top -rotate-60 -z-10" />
                <div className="size-16 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:border-purple-500">
                  <Settings2 className="size-6 text-zinc-400 group-hover:text-white" />
                </div>
                <div className="mt-2 text-xs font-mono text-zinc-500 text-center">Equipment API</div>
              </div>

              {/* Plugin 2 */}
              <div className="absolute bottom-[20%] left-[10%] group">
                <div className="absolute w-px h-40 bg-linear-to-t from-purple-500/50 to-transparent bottom-1/2 left-1/2 origin-bottom rotate-45 -z-10" />
                <div className="size-16 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:border-purple-500">
                  <Blocks className="size-6 text-zinc-400 group-hover:text-white" />
                </div>
                <div className="mt-2 text-xs font-mono text-zinc-500 text-center">ERP Bridge</div>
              </div>

              {/* Plugin 3 */}
              <div className="absolute top-[20%] right-[15%] group">
                <div className="absolute w-px h-36 bg-linear-to-b from-purple-500/50 to-transparent top-1/2 left-1/2 origin-top rotate-60 -z-10" />
                <div className="size-16 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:border-purple-500">
                  <MonitorSmartphone className="size-6 text-zinc-400 group-hover:text-white" />
                </div>
                <div className="mt-2 text-xs font-mono text-zinc-500 text-center">Custom PDA UI</div>
              </div>

              {/* Plugin 4 */}
              <div className="absolute bottom-[10%] right-[25%] group">
                <div className="absolute w-px h-24 bg-linear-to-t from-purple-500/50 to-transparent bottom-1/2 left-1/2 origin-bottom -rotate-30 -z-10" />
                <div className="size-16 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:border-purple-500">
                  <Fingerprint className="size-6 text-zinc-400 group-hover:text-white" />
                </div>
                <div className="mt-2 text-xs font-mono text-zinc-500 text-center">AI Vision App</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 定制服务范畴 */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              定制服务范畴
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              不破坏标准产品的升级兼容性。所有的定制开发均以微服务或插件的形式动态注入，保障骨干架构的极简与健壮。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 items-start">
              <div className="size-12 shrink-0 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <Puzzle className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">深度业务应用开发</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  针对细分行业的特殊要求（如半导体 Defect 追踪、医药类合规电子签名增强），开发完全融合于 MSRU UI
                  与权限体系内的新功能模块。
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="size-12 shrink-0 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <GitPullRequest className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">非标异构系统集成</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  面对企业内部陈旧的自研 ERP 或者难以开放 API 的历史系统，提供基于中间库、RPA
                  甚至软硬件结合的定制级集成通路。
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="size-12 shrink-0 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <MonitorSmartphone className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">专属工业终端适配</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  为特定的工厂硬件（超小屏手持 PDA、三防特种平板、车载叉车终端等）重新设计并编译极致精简的前端交互
                  UI，提升一线工效。
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="size-12 shrink-0 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <Settings2 className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">私有化设备协议解析</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  当标准 IoT
                  网关无法覆盖极其偏门的闭源机床协议时，原厂研发团队下钻至底层链路进行反向工程与专属驱动开发。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
            <Link
              href="/contact"
              className="group h-12 px-8 inline-flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-base font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/20"
            >
              提出定制需求 <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/services/custom/turnkey"
                className="group h-10 px-6 inline-flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-600 dark:text-zinc-400 text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
              >
                <Package className="mr-2 size-4" />
                购买交钥匙功能包
              </Link>
              <Link
                href="/services/custom/man-day"
                className="group h-10 px-6 inline-flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-600 dark:text-zinc-400 text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
              >
                <Users className="mr-2 size-4" />
                购买专家人天包
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

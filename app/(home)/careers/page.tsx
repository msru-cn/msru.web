import { ArrowRight, Cpu, DollarSign, Globe, MapPin, Sparkles, Users, Zap } from "lucide-react";
import Link from "next/link";

const JOBS = [
  {
    title: "高级分布式系统工程师 (Rust/Go)",
    department: "核心引擎组",
    location: "珠海/新加坡",
    salary: "40k - 75k + 期权",
    tags: ["高性能计算", "分布式协议", "内核开发"],
  },
  {
    title: "工业大脑 AI 算法专家",
    department: "AI 实验室",
    location: "慕尼黑/硅谷",
    salary: "50k - 90k + Equity",
    tags: ["强化学习", "运筹优化", "LLM"],
  },
  {
    title: "资深 3D 渲染引擎开发",
    department: "数字孪生组",
    location: "珠海",
    salary: "35k - 65k",
    tags: ["WebGPU", "Three.js", "图形学"],
  },
  {
    title: "资深 混子 没啥能耐",
    department: "混子组",
    location: "佛山",
    salary: "35 - 65",
    tags: ["混子", "摸鱼", "摆烂"],
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-zinc-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles className="size-4" /> 我们正在寻找改变工业的人才
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-tight">
              编写
              <br />
              <span className="bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">工业的未来</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
              在 MSRU，我们不只是在提供软件。我们是在用代码重构物理世界的每一台机器。
              加入我们，与全球顶尖的极客一起攻克工业领域的硬核难题。
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Cpu className="size-10 text-primary" />
              <h3 className="text-2xl font-bold dark:text-white">纯粹技术驱动</h3>
              <p className="text-zinc-500 leading-relaxed">
                我们崇尚卓越的技术选型，不为业务折中。从内核到前端，我们追求极致的性能与优雅。
              </p>
            </div>
            <div className="space-y-4">
              <Zap className="size-10 text-amber-500" />
              <h3 className="text-2xl font-bold dark:text-white">高频敏捷交付</h3>
              <p className="text-zinc-500 leading-relaxed">
                这里没有冗长的会议，只有高效的协作。我们通过极致的自动化流程保障代码的高频、安全发布。
              </p>
            </div>
            <div className="space-y-4">
              <Globe className="size-10 text-emerald-500" />
              <h3 className="text-2xl font-bold dark:text-white">全球数字游民</h3>
              <p className="text-zinc-500 leading-relaxed">
                我们支持灵活的办公模式。无论你身处何地，只要你有卓越的产出，地球就是你的办公室。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">开放职位</h2>
              <p className="text-zinc-500">寻找最适合你的挑战，与我们一同开启工业数字化新纪元。</p>
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                className="px-6 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                研发岗 (12)
              </button>
              <button
                type="button"
                className="px-6 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                产品岗 (4)
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {JOBS.map((job) => (
              <div
                key={job.title}
                className="group p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 bg-zinc-50/50 dark:bg-zinc-900/30"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-[10px] font-bold text-zinc-500 uppercase">
                        {job.department}
                      </span>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 font-medium">
                      <span className="flex items-center gap-2">
                        <MapPin className="size-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <DollarSign className="size-4" /> {job.salary}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-400 font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-xl flex items-center gap-2 group-hover:bg-primary group-hover:text-white transition-all"
                  >
                    立即申请 <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div className="text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">
                除了改变世界的成就感，
                <br />
                我们还提供：
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-bold opacity-90">
                <li className="flex items-center gap-2">✓ 顶配 MacBook Pro + 高刷显示器</li>
                <li className="flex items-center gap-2">✓ 灵活的工作制度（支持远程）</li>
                <li className="flex items-center gap-2">✓ 具有竞争力的底薪 + 厚实的股权</li>
                <li className="flex items-center gap-2">✓ 完善的年度体检与高端医疗险</li>
              </ul>
            </div>
            <div className="p-12 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 text-white space-y-6">
              <Users className="size-12" />
              <h4 className="text-2xl font-bold tracking-tight">还没准备好申请？</h4>
              <p className="opacity-80 leading-relaxed font-medium">
                即使你现在没有看到合适的职位，我们也随时欢迎天才的毛遂自荐。 将你的简历服务或 GitHub/Portfolio
                发送到简历库，我们会主动联系你。
              </p>
              <Link
                href="mailto:talent@msru.ai"
                className="text-xl font-bold underline hover:opacity-100 opacity-80 transition-opacity"
              >
                talent@msru.ai
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

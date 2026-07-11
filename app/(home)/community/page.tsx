import { ArrowRight, Github, Globe, Handshake, MessageSquare, Users } from "lucide-react";
import Link from "next/link";

const CHANNELS = [
  {
    icon: <Github className="size-8 text-zinc-900 dark:text-white" />,
    title: "GitHub 开源组织",
    desc: "参与核心工具库、CLI 与协议适配器的开源共建",
    link: "https://github.com/msru-oss",
  },
  {
    icon: <MessageSquare className="size-8 text-blue-500" />,
    title: "Discord 技术社区",
    desc: "与全球开发者实时交流、获取技术支持与分享最佳实践",
    link: "#",
  },
  {
    icon: <Globe className="size-8 text-emerald-500" />,
    title: "技术博客与演讲",
    desc: "来自核心架构团队的开源技术解析与行业峰会分享",
    link: "/blog/engineering",
  },
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
              <Handshake className="size-3" /> Open Source Community
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              开发者社区<span className="italic text-zinc-500">与开源矩阵</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              加入全球工业级开源工具生态的共建行列。代码、知识与经验——在这里自由流动。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CHANNELS.map((ch) => (
              <Link
                key={ch.title}
                href={ch.link}
                className="group p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-cyan-500/50 transition-all text-center space-y-4"
              >
                <div className="mx-auto">{ch.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  {ch.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{ch.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-6 space-y-6">
          <Users className="size-8 text-primary mx-auto" />
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">与 5,000+ 工业开发者同行</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition"
          >
            加入社区 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

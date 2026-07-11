import { ArrowRight, Award, GraduationCap } from "lucide-react";
import Link from "next/link";

const TRACKS = [
  {
    title: "MSRU 认证实施顾问",
    level: "Professional",
    duration: "5 天集训",
    desc: "掌握全产品线部署方法论与项目交付最佳实践",
  },
  {
    title: "MSRU 认证开发者",
    level: "Developer",
    duration: "3 天集训",
    desc: "深入 API 集成、自定义扩展与微服务架构开发",
  },
  {
    title: "MSRU 认证架构师",
    level: "Expert",
    duration: "10 天深造",
    desc: "企业级私有化部署、高可用架构设计与性能调优",
  },
];

export default function TrainingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              <GraduationCap className="size-3" /> MSRU Academy
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              官方学院<span className="italic text-zinc-500">与认证</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              系统化的开发者与实施人才赋能体系，从入门到专家的完整成长路径。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl space-y-8">
          {TRACKS.map((track) => (
            <div
              key={track.title}
              className="group p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-emerald-500/50 transition-all space-y-4"
            >
              <div className="flex items-center gap-3">
                <Award className="size-6 text-emerald-500" />
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase">
                  {track.level}
                </span>
                <span className="text-xs text-zinc-400">{track.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{track.title}</h3>
              <p className="text-zinc-500">{track.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">立即报名下一期培训</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition"
          >
            联系培训团队 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

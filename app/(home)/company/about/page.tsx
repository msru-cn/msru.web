import { ArrowDown, ArrowRight, Lightbulb, Quote, Rocket, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MILESTONES = [
  { year: "2012", event: "MSRU 项目在硅谷车库启动，致力于解决工业数据孤岛问题。" },
  { year: "2015", event: "首个自研 WMS 引擎在半导体头部厂商上线，实现像素级物料追踪。" },
  { year: "2018", event: "“Factory as a Product” 理念正式提出，定义统一工业底层模型。" },
  { year: "2021", event: "全球研发节点补全，正式发布全栈数字化基座 MSRU Platform 2.0。" },
  { year: "2024", event: "入选全球数字化转型影响力企业，主导 100+ 灯塔工厂建设。" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Narrative Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] uppercase tracking-widest font-bold text-zinc-500">
              Our Vision & Mission
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
              将工厂视作一个
              <br />
              <span className="italic font-serif text-primary">可进化的产品</span>
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
              在 MSRU，我们相信工厂不仅仅是生产线的堆砌，而是一个具有感知、响应与自我进化能力的“生命体”。
              我们的使命是为全球制造业提供不可或缺的数字神经系统。
            </p>
            <div className="pt-12 flex justify-center">
              <div className="animate-bounce">
                <ArrowDown className="text-zinc-300 dark:text-zinc-700 size-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-tr from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-[3rem] shadow-2xl overflow-hidden aspect-4/3 z-10 grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                  fill
                  className="object-cover"
                  alt="Lab concept"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 p-8 bg-white dark:bg-zinc-800 rounded-3xl shadow-xl z-20 max-w-xs border border-zinc-100 dark:border-zinc-700">
                <Quote className="size-8 text-primary/40 mb-4" />
                <p className="text-sm italic font-medium text-zinc-600 dark:text-zinc-300">
                  "我们不是在简单的数字化，而是在重写工业制造的底层逻辑。"
                </p>
                <div className="mt-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">— MSRU 创始团队</div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">核心理念：底层模型驱动</h2>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  传统的烟囱式系统开发已成为工业瓶颈。MSRU 提倡自底向上的核心架构， 通过统一的模型语法 (Unified Model
                  Schema) 描述工厂中的每一个原子动作。
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                  <Target className="size-6 text-blue-500 mb-4" />
                  <h4 className="font-bold mb-2 text-zinc-900 dark:text-white">高频进化</h4>
                  <p className="text-xs text-zinc-500">支持周级别的功能迭代，工厂无需停机即可升级数字化能力。</p>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                  <Lightbulb className="size-6 text-emerald-500 mb-4" />
                  <h4 className="font-bold mb-2 text-zinc-900 dark:text-white">数据主权</h4>
                  <p className="text-xs text-zinc-500">通过零信任架构，确保每一个字节的所有权永远归属于工厂主。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-20 italic">我们的征程</h2>
          <div className="max-w-3xl mx-auto space-y-16">
            {MILESTONES.map((item) => (
              <div key={item.year} className="flex gap-12 group">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-black text-zinc-200 dark:text-zinc-800 group-hover:text-primary transition-colors duration-500 tabular-nums">
                    {item.year}
                  </div>
                  <div className="w-px flex-1 bg-zinc-100 dark:bg-zinc-800 mt-4 group-last:hidden" />
                </div>
                <div className="pb-16 flex-1">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Call to action */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1)_0,transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
          <Rocket className="size-16 text-primary mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">下一站，通用工业 AI</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            我们正在研发支撑自主规划与执行的工业大模型。 如果你也相信代码可以重构物理世界，请加入我们的行列。
          </p>
          <div className="pt-8">
            <Link
              href="/careers"
              className="px-12 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 group"
            >
              加入我们 <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

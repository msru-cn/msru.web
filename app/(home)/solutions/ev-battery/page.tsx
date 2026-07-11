import { ArrowRight, Battery, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CAPABILITIES = [
  { title: "电芯全生命周期追溯", desc: "从浆料投料到成品下线，一码贯穿正反向追溯链" },
  { title: "高通量极片质检 (AI)", desc: "基于深度学习的涂布缺陷实时检测，毫秒级判定" },
  { title: "化成分容数据闭环", desc: "采集百万级充放电曲线，建模预测电芯循环寿命" },
  { title: "模组 PACK 防呆防错", desc: "视觉引导装配 + 力矩追踪，杜绝人为组装失误" },
];

export default function EVBatteryPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2000"
            fill
            className="object-cover opacity-40 brightness-50"
            alt="EV Battery Manufacturing"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-950/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-400 uppercase tracking-widest">
              <Battery className="size-3" /> EV & Battery
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              赋能新能源
              <br />
              <span className="italic text-amber-500">极速迭代</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              为动力电池与新能源企业打造从电芯化成到模组 PACK 的全链路数字化解决方案，驱动产能与良率的双重飞跃。
            </p>
          </div>
        </div>
      </section>

      {/* 核心能力 */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-16 text-center">
            新能源制造的核心数字能力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4 hover:border-amber-500/50 transition-colors"
              >
                <CheckCircle className="size-6 text-amber-500" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{cap.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-600 text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-bold text-white tracking-tighter">让每一颗电芯，都拥有数字身份证</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            预约电池产线演示 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

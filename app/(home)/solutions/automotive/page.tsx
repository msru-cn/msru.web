import { ArrowRight, Car, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CAPABILITIES = [
  { title: "JIT/JIS 准时制排产", desc: "精准匹配主机厂节拍，消除线边库积压" },
  { title: "IATF 16949 质量闭环", desc: "从 APQP 到 PPAP 全流程数字化管控" },
  { title: "供应链多级协同", desc: "Tier 1/2/3 实时产能可视与风险预警" },
  { title: "零缺陷追溯体系", desc: "从原材料批次到整车 VIN 正反向穿透" },
];

export default function AutomotivePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=2000"
            fill
            className="object-cover opacity-40 brightness-50"
            alt="Automotive Manufacturing"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-950/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] font-bold text-rose-400 uppercase tracking-widest">
              <Car className="size-3" /> Automotive & Equipment
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              驱动每一台
              <br />
              <span className="italic text-rose-500">精密装备</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              为汽车零部件与高端装备制造企业提供 JIT 精准排产、IATF 16949 全面质量管理与多级供应链协同的一体化数字方案。
            </p>
          </div>
        </div>
      </section>

      {/* 核心能力 */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-16 text-center">
            专为汽车工业锻造的核心能力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4 hover:border-rose-500/50 transition-colors"
              >
                <CheckCircle className="size-6 text-rose-500" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{cap.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-rose-600 text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-bold text-white tracking-tighter">让每一条产线，都精准如瑞士钟表</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-600 font-bold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            预约行业演示 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

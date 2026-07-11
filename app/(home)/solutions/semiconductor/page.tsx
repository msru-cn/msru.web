import { ArrowRight, CheckCircle, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CAPABILITIES = [
  { title: "SECS/GEM 设备集成", desc: "原生支持 SEMI E30/E37/E40 标准协议，实现设备自动化与主机通信的即插即用" },
  { title: "无尘车间管控", desc: "实时监控微粒计数、温湿度与压差，自动联动 FOUP/SMIF 调度系统" },
  { title: "良率追踪与分析", desc: "Wafer Map 全流程追溯，集成 SPC/FDC 实现工艺偏移的亚秒级预警" },
  { title: "配方与工艺管理", desc: "多层级 Recipe 版本受控分发，支持 Golden Run 对标与参数漂移检测" },
];

/**
 * 半导体行业解决方案页面
 * 面向晶圆制造与封测产线，提供 SECS/GEM 集成与良率追踪的一体化方案
 */
export default function SemiconductorPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000"
            fill
            className="object-cover opacity-40 brightness-50"
            alt="Semiconductor"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-950/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400 uppercase tracking-widest">
              <Cpu className="size-3" /> Semiconductor
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              半导体 <span className="italic text-purple-500">智造方案</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              为晶圆制造、封装测试产线提供 SECS/GEM 无缝集成与良率追踪的端到端数字化方案。
            </p>
          </div>
        </div>
      </section>

      {/* 核心能力 */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4 hover:border-purple-500/50 transition-colors"
              >
                <CheckCircle className="size-6 text-purple-500" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{cap.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-purple-600 text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-bold text-white tracking-tighter">用 MSRU 驱动每一片晶圆的良率跃迁</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            预约半导体方案演示 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

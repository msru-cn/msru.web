import { ArrowRight, CheckCircle, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CAPABILITIES = [
  { title: "SMT 贴片追溯", desc: "锡膏印刷、贴片精度与回流焊温度曲线的全流程数据采集与追溯" },
  { title: "组装防呆防错", desc: "基于视觉引导与条码校验的装配工序防错，杜绝漏装错装" },
  { title: "高速 AOI 集成", desc: "无缝对接主流 AOI 设备，缺陷图像自动归档与统计分析" },
  { title: "整机测试闭环", desc: "功能测试、老化测试与包装出货的一站式数字化管控" },
];

export default function ThreeCPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative h-[70vh] flex items-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=2000"
            fill
            className="object-cover opacity-40 brightness-50"
            alt="3C Electronics"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-950/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              <Smartphone className="size-3" /> 3C Electronics
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              3C 消费电子<span className="italic text-blue-500">组装</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              为手机、平板与智能硬件产线提供 SMT 全流程追溯、高速 AOI 集成与装配防呆的一体化方案。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4 hover:border-blue-500/50 transition-colors"
              >
                <CheckCircle className="size-6 text-blue-500" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{cap.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-bold text-white tracking-tighter">让每一台设备都有完整的数字档案</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            预约 3C 产线演示 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

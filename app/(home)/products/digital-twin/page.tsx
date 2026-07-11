import { ArrowRight, Box, Eye, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SubPageCardGrid } from "@/components/marketing";

const FEATURES = [
  {
    icon: <Layers className="size-8 text-cyan-500" />,
    title: "全厂 3D 建模",
    desc: "自动生成工厂布局的三维可视化场景，支持设备、产线、仓库的精准空间映射。",
  },
  {
    icon: <Eye className="size-8 text-blue-500" />,
    title: "实时数据联动",
    desc: "IoT 传感器数据驱动 3D 模型实时响应，设备状态、温度、振动一目了然。",
  },
  {
    icon: <Box className="size-8 text-purple-500" />,
    title: "仿真推演",
    desc: "在数字世界中预演产线改造、布局调整与异常场景，零成本验证方案可行性。",
  },
];

export default function DigitalTwinPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative h-[70vh] flex items-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
            fill
            className="object-cover opacity-40 brightness-50"
            alt="Digital Twin"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-950/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
              <Box className="size-3" /> 3D Digital Twin
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              3D 实时<span className="italic text-cyan-500">数字孪生</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              基于 WebGPU 的下一代实时 3D 渲染引擎，将您的物理工厂 1:1 映射为可交互、可推演的数字化镜像。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <SubPageCardGrid cards={FEATURES} columns={3} />
        </div>
      </section>

      <section className="py-24 bg-cyan-600 text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-bold text-white tracking-tighter">体验下一代工厂可视化</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            预约 3D 演示 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight, Box, Eye, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4">
              <Layers className="size-8 text-cyan-500" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">全厂 3D 建模</h3>
              <p className="text-zinc-500 text-sm">
                自动生成工厂布局的三维可视化场景，支持设备、产线、仓库的精准空间映射。
              </p>
            </div>
            <div className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4">
              <Eye className="size-8 text-blue-500" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">实时数据联动</h3>
              <p className="text-zinc-500 text-sm">
                IoT 传感器数据驱动 3D 模型实时响应，设备状态、温度、振动一目了然。
              </p>
            </div>
            <div className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4">
              <Box className="size-8 text-purple-500" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">仿真推演</h3>
              <p className="text-zinc-500 text-sm">
                在数字世界中预演产线改造、布局调整与异常场景，零成本验证方案可行性。
              </p>
            </div>
          </div>
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

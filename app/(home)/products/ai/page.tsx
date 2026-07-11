import {
  Aperture,
  ArrowRight,
  Bot,
  Brain,
  BrainCircuit,
  Camera,
  CheckCircle2,
  Database,
  Eye,
  FileSearch,
  Fingerprint,
  Lightbulb,
  LineChart,
  Microscope,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  Wand2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { HeroMockup } from "@/components/hero-mockup";

export default function AIPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-amber-500/30">
      {/* 1. 极致震撼的 HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden border-b border-border/50">
        {/* 背景动态光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] md:w-[1200px] md:h-[700px] bg-amber-500/15 dark:bg-amber-600/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute -top-40 left-10 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero 内容 */}
        <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-sm mb-8 ring-1 ring-amber-500/20 backdrop-blur-sm">
            <Bot className="size-4" /> 专为制造业训练的行业大模型与智能体
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-8 leading-[1.1] text-balance">
            超越肉眼的精密， <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-yellow-400 dark:from-amber-400 dark:to-yellow-300">
              与顶尖的数字智库。
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-balance">
            抛开实验室里的花哨概念，让 AI 真正下沉到嘈杂的车间。基于千万级图库预训练的机器视觉（CV），
            与注入了海量维修手册的私有化大语言模型（LLM），正在成为您工厂里最不知疲倦的专家。
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-amber-500 text-zinc-950 font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40"
            >
              获取企业级私有化方案
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-transparent border border-border text-foreground text-lg font-medium hover:bg-muted transition-colors"
            >
              了解 RAG 知识库 <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>

        {/* 悬浮的 AI 视觉分析 Mockup 视觉元素 */}
        <HeroMockup theme="purple" />
      </section>

      {/* 2. 量化 AI 的威力 - Apple 风格大字 */}
      <section className="py-24 bg-zinc-950 text-white w-full border-b border-b-zinc-900 border-t border-t-amber-900/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 tracking-tight text-zinc-100">当硅基智能介入生产。</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-x-0 lg:divide-x divide-zinc-800">
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-amber-500 mb-4 tracking-tighter">
                99<span className="text-4xl md:text-5xl">.9%</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">机器视觉漏检率小于万一</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-amber-500 mb-4 tracking-tighter">
                1<span className="text-4xl md:text-5xl">s</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">专家知识库检索推理延迟</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-amber-500 mb-4 tracking-tighter">
                24<span className="text-4xl md:text-5xl">/7</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">无情绪波动全天候当值</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-amber-500 mb-4 tracking-tighter">
                70<span className="text-4xl md:text-5xl">%</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">少样本冷启动降低标注成本</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 设计哲学宣言 */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          不是取代人类，
          <br />
          而是武装您的核心工程师。
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          MSRU AI 矩阵包括两条主线路线：用于高频海量检测的工业机器视觉（AOI），以及大语言模型驱动的装备智能体。
          让依靠经验的“老法师”变为制定标准的人，将枯燥疲惫的质检与熬夜翻阅设备原理图的工作交给
          AI。知识资产，从此永不流失。
        </p>
      </section>

      {/* 4. 八宫格超大 BENTO GRID - AI 核心能力 */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          {/* Card 1: 缺陷检测 (Large) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-amber-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Eye className="size-12 text-amber-500 mb-8" />
            <h3 className="text-3xl font-bold mb-4">机器视觉缺陷侦测 (AOI)</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              超越人眼的疲劳极限。搭载最新世代的深度卷积神经网络，支持划痕、色偏、毛刺、缺失等数十种复杂表面缺陷识别。
              配合边缘计算盒子，在产线末端实现 10ms 级别的拦截触发，直接将不良品剔除。
            </p>
            {/* Visual element */}
            <div className="absolute -bottom-10 -right-10 w-96 h-80 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-[2.5rem] transform rotate-12 flex items-center justify-center opacity-50 group-hover:-translate-y-4 group-hover:-rotate-3 transition-all duration-700">
              <div className="w-40 h-40 border-8 border-amber-500/30 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-amber-500/20 rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 2: 知识库 RAG (Medium) */}
          <div className="md:col-span-1 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-amber-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tr from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <BrainCircuit className="size-10 text-amber-500" />
              <h3 className="text-2xl font-bold">维修专家智能体 (RAG)</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              将几万页乱码的 PDF
              原理图、设备保养手册“喂”给私域大模型。当机台报警时，操作工只需用自然语言提问：“2号机床突然震动异响并报
              Err402，怎么解决？”，AI 将直接给出排查 SOP 甚至圈出图纸。
            </p>
          </div>

          {/* Card 3: 预测性维护 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-amber-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-bl from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <LineChart className="size-10 text-amber-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">PdM 预测性维护</h3>
            <p className="text-muted-foreground text-sm">
              监听伺服电机的功率频域与轴承振幅。通过无监督学习识别异常衰减曲线，在机台彻底宕机前 72 小时发出换件告警。
            </p>
          </div>

          {/* Card 4: 少样本训练 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-amber-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-t from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Wand2 className="size-10 text-amber-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">Few-Shot 极简冷启动</h3>
            <p className="text-muted-foreground text-sm">
              不再需要几万张不良图片。依托底层的基础大模型，只需提供几十张样本，即可完成微调（Fine-Tuning），极大降低标注负担。
            </p>
          </div>

          {/* Card 5: OCR 识别 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-amber-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <Aperture className="size-12 text-zinc-400 group-hover:text-amber-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">工业 OCR</h3>
          </div>

          {/* Card 6: 异常行为 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-amber-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <Radar className="size-12 text-zinc-400 group-hover:text-amber-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">人员安全合规越界分析</h3>
          </div>

          {/* Card 7: 云端与边缘 (Long) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-amber-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tl from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="size-10 text-amber-500" />
              <h3 className="text-2xl font-bold">云端训练，边缘推理架构</h3>
            </div>
            <p className="text-muted-foreground">
              核心的模型算法保存在云端或高算力的私有数据中心，而模型权重被编译下放至搭载了 GPU 或 NPU
              的边缘盒子中。这种闭环确保了车间本地的 0 网络延迟检测。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 深度特写 A：大模型私有化部署 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 font-medium text-sm">
              <ShieldCheck className="size-4" /> 私域数据堡垒
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">机密数据，决不出厂。</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              我们深知高精尖图纸与设备配方是企业的绝密资产。针对大语言模型（LLM），我们提供纯物理隔离的本地化私有部署方案。
              将开源底座大模型（如 Llama3 / Qwen）架设在您的内网机房中，模型既“聪明”又“保密”。
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-orange-500/20 rounded-full">
                  <Database className="size-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">向量数据库 (Vector DB)</h4>
                  <p className="text-muted-foreground">
                    您的内部 PDF 将被高精度切割并存储为本地向量流，拒绝向公有云透传。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-orange-500/20 rounded-full">
                  <CheckCircle2 className="size-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">角色鉴权问答</h4>
                  <p className="text-muted-foreground">
                    普工与厂长向 AI 提问会得到不同深度的回答与不同的图纸查看权限。
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            <div className="aspect-4/3 rounded-[2rem] bg-orange-100 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-tr from-orange-500/20 to-transparent" />
              <Fingerprint className="size-40 text-orange-500/50 relative z-10 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute w-[150%] h-1 bg-orange-500/30 rotate-45 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. 深度特写 B：视觉打样交互 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 font-medium text-sm">
              <Camera className="size-4" /> 柔性视界
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">换线不再是视觉工程师的噩梦。</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              传统的机器视觉写满了僵硬的 C++ 检测逻辑，一旦产品外形微调或者灯光变动，整条线就会瘫痪并充满误报。 而基于
              MSRU AI，通过直观的 Web
              拖拽画布，普通的质检员只需重新框选异常图片标记，即可发起模型的自动再训练并平滑热更新。
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-border">
                <Target className="size-6 text-amber-500 mb-2" />
                <h4 className="font-semibold">对抗恶劣环境光</h4>
              </div>
              <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-border">
                <Microscope className="size-6 text-amber-500 mb-2" />
                <h4 className="font-semibold">20 像素级微小裂纹追踪</h4>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            <div className="aspect-4/3 rounded-[2rem] bg-amber-100 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 p-6 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-bl from-amber-500/20 to-transparent" />

              {/* 模拟画板 */}
              <div className="h-10 w-full flex gap-3 border-b border-amber-900/10 dark:border-amber-200/10 pb-4 mb-4">
                <div className="size-4 bg-red-400 rounded-full" />
                <div className="size-4 bg-emerald-400 rounded-full" />
                <div className="size-4 bg-blue-400 rounded-full" />
              </div>
              <div className="flex-1 border-2 border-dashed border-amber-500/50 rounded-xl relative flex justify-center items-center overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
                  alt="Chip AI"
                  fill
                  className="object-cover opacity-20 grayscale"
                />
                <div className="z-10 bg-amber-500/80 text-black font-bold px-4 py-2 rounded">RETRAINING MODEL...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ 常见问题 */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full border-t border-border">
        <h2 className="text-3xl font-bold mb-12 text-center">探索 AI 的边界</h2>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border transition-colors hover:border-amber-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Lightbulb className="size-5 text-amber-500" /> 私有化 LLM 的硬件成本极为高昂吗？
            </h4>
            <p className="text-muted-foreground">
              针对普通的车间知识查询与报表问答，经过极端量化的 7B 或 14B 模型运行在消费级旗舰显卡（如 RTX 4090 或
              A5000）上便可获得非常流畅的体验。对于绝大多数中型整机厂来说，几万元的 GPU 服务器投资即可买断长期订阅费。
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border transition-colors hover:border-amber-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <FileSearch className="size-5 text-amber-500" /> 大模型会不会产生 "幻觉" 瞎编图纸？
            </h4>
            <p className="text-muted-foreground">
              传统的闲聊模型会。但我们采用严谨的 RAG 技术架构。意味着 AI
              回答的所有原理、排错方案都必须溯源到您提供的文档原文片段。当它找不到库内资料时，它会严谨地回答“文献库不存在此记录”，确保工业容错安全。
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border transition-colors hover:border-amber-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <CloudCog className="size-5 text-amber-500" /> 可以在现有的老设备工位上加装视觉检测吗？
            </h4>
            <p className="text-muted-foreground">
              完全可以。针对流水线末端或点焊机台，我们提供工控机+相机的一体化独立机柜方案。它独立完成抓拍、推理和气缸剔除指令，不需要对您老设备的上位机开肠破肚。
            </p>
          </div>
        </div>
      </section>

      {/* 8. 巨型底部 CTA */}
      <section className="relative py-32 px-6 overflow-hidden bg-amber-950 text-white border-t-4 border-yellow-500">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-yellow-500/30 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Brain className="size-20 mx-auto mb-8 text-yellow-400 opacity-80" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            欢迎来到有智慧的
            <br />
            数字工厂。
          </h2>
          <p className="text-xl md:text-2xl text-amber-200 mb-12 max-w-2xl mx-auto">
            让人类做决策，让机器做识别与推演。即刻解锁您的全流程高能架构。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="h-16 px-10 inline-flex items-center justify-center rounded-full bg-yellow-500 text-amber-950 text-xl font-bold hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20"
            >
              与模型专家沟通
            </Link>
            <Link
              href="/products"
              className="h-16 px-10 inline-flex items-center justify-center rounded-full bg-transparent border-2 border-yellow-500/50 text-white text-xl font-medium hover:bg-yellow-500/10 transition-colors"
            >
              返回全面产品矩阵 <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// 补一个本地组件图标（用于 FAQ 中没有对应的 Lucide ）
const CloudCog = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title>Cloud Cog</title>
    <circle cx="12" cy="17" r="3" />
    <path d="M11 14v.5" />
    <path d="M13 14v.5" />
    <path d="M14.5 15.5l.5-.5" />
    <path d="M9.5 15.5l-.5-.5" />
    <path d="M15 17h.5" />
    <path d="M9 17h-.5" />
    <path d="M14.5 18.5l.5.5" />
    <path d="M9.5 18.5l-.5.5" />
    <path d="M17.5 17a4.5 4.5 0 0 0-.25-8.98 6.5 6.5 0 0 0-12.02-1.92A4.5 4.5 0 0 0 5.5 15" />
  </svg>
);

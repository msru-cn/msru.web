"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Box,
  CheckCircle2,
  ChevronDown,
  Copy,
  Cpu,
  Database,
  Download,
  FileText,
  Gavel,
  Globe,
  HardDrive,
  Palette,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

/**
 * 颜色状态接口定义
 */
interface ColorState {
  name: string;
  variable: string;
  description: string;
}

/**
 * 职能模块接口定义
 */
interface Module {
  id: string;
  name: string;
  variable: string;
  icon: React.ReactNode;
  meaning: string;
  states: {
    primary: ColorState;
    background: ColorState;
    surface: ColorState;
    foreground: ColorState;
  };
}

/**
 * 品牌多态色调系统配置
 * 定义了 MSRU 宇宙中每个职能模块的视觉 DNA
 */
const COLOR_SYSTEM = [
  {
    category: "核心品牌标识 (Core Identity)",
    description: "MSRU 站点的全局基础视觉，是所有派生产品的引力中心。",
    modules: [
      {
        id: "framework",
        name: "Brand / Framework",
        variable: "--framework-color",
        icon: <Sparkles className="size-5" />,
        meaning:
          "代表 MSRU 的‘原始引力’。金色与暗黑的融合象征着从混乱的工业数据中提取出黄金般的智能。它是系统的骨架，也是所有交互的终点。",
        states: {
          primary: { name: "Core Gold", variable: "--framework-color", description: "全局高亮与核心操作色。" },
          background: { name: "Deep Background", variable: "--background", description: "深邃的非物质底色。" },
          surface: { name: "Glass Surface", variable: "--card", description: "高透玻璃材质表面。" },
          foreground: { name: "Contrast Text", variable: "--foreground", description: "极致清晰的前景文字。" },
        },
      },
    ],
  },
  {
    category: "生产执行职能 (Manufacturing Execution)",
    description: "聚焦于车间现场与物理流转的实时色调。",
    modules: [
      {
        id: "mes",
        name: "MES (Manufacturing)",
        variable: "--mes-color",
        icon: <Cpu className="size-5" />,
        meaning:
          "制造执行系统的‘流动紫色’。象征着电子流与实体物流在车间现场的精准汇聚。它代表了实时性、并发性与生产力的脉动。",
        states: {
          primary: { name: "Logic Purple", variable: "--mes-color", description: "业务流转的核心锚点。" },
          background: { name: "System Wash", variable: "--muted", description: "静默的系统背景色。" },
          surface: { name: "Action Surface", variable: "--secondary", description: "次级交互操作面。" },
          foreground: { name: "Primary FG", variable: "--foreground", description: "标准数据展示文字。" },
        },
      },
      {
        id: "wms",
        name: "WMS (Warehouse)",
        variable: "--wms-color",
        icon: <Truck className="size-5" />,
        meaning: "智能仓储的‘活力橙’。代表了货位的跃迁与物流的周转。它传递出高效、预警与快节奏的供应链律动。",
        states: {
          primary: { name: "Flow Orange", variable: "--wms-color", description: "周转预警与核心状态色。" },
          background: { name: "Static Deck", variable: "--background", description: "仓储看板的沉稳基色。" },
          surface: { name: "Bin Surface", variable: "--card", description: "货位化管理的 UI 容器背景。" },
          foreground: { name: "Alert Text", variable: "--foreground", description: "高对比度的库存信息展示。" },
        },
      },
      {
        id: "qms",
        name: "QMS (Quality)",
        variable: "--qms-color",
        icon: <CheckCircle2 className="size-5" />,
        meaning:
          "质量管理的‘严谨粉’。代表了工业标准、预警与闭环控制。它是对完美的偏执，确保每一批次产品都遵循严苛的质量契约。",
        states: {
          primary: { name: "Quality Magenta", variable: "--qms-color", description: "不合格预警与质量判定色。" },
          background: { name: "Guard Wash", variable: "--muted", description: "合规性审计的冷静背景。" },
          surface: { name: "Audit Surface", variable: "--secondary", description: "检验规程的交互操作面。" },
          foreground: { name: "Standard FG", variable: "--foreground", description: "质量标准展示文本。" },
        },
      },
      {
        id: "eam",
        name: "EAM (Equipment)",
        variable: "--eam-color",
        icon: <HardDrive className="size-5" />,
        meaning:
          "设备管理的‘传承金’。象征着工业资产的稳健运行与知识的沉淀。它代表了可预测的维护策略与设备全生命周期的守护。",
        states: {
          primary: { name: "Asset Amber", variable: "--eam-color", description: "设备健康度与核心指标色。" },
          background: { name: "Vault BG", variable: "--background", description: "资产档案的稳重背景。" },
          surface: { name: "Maint Surface", variable: "--card", description: "工单执行与设备点检区。" },
          foreground: { name: "Data Gold", variable: "--foreground", description: "关键设备参数文字。" },
        },
      },
      {
        id: "iot",
        name: "IoT (Connection)",
        variable: "--iot-color",
        icon: <Zap className="size-5" />,
        meaning:
          "物联网的‘洞察青’。代表着无处不在的数据连接与毫秒级的反馈回路。它通过数字化映射，将冰冷的机器转化为可对话的智能节点。",
        states: {
          primary: { name: "Stream Cyan", variable: "--iot-color", description: "实时数据流与连接状态色。" },
          background: { name: "Pulse Wash", variable: "--background", description: "时序数据的动态底纹。" },
          surface: { name: "Device Card", variable: "--card", description: "物模型与参数展示面板。" },
          foreground: { name: "Metric White", variable: "--foreground", description: "高亮实时读数文字。" },
        },
      },
    ],
  },
  {
    category: "决策与模型职能 (Decision & Intelligence)",
    description: "由算法驱动的高级计划与人工智能色调。",
    modules: [
      {
        id: "aps",
        name: "APS (Scheduling)",
        variable: "--aps-color",
        icon: <Database className="size-5" />,
        meaning:
          "高级计划排程的‘睿智丁香’。它代表了多约束求解时的深度逻辑与动态平衡。色调平和但充满张力，隐喻复杂的算法推理过程。",
        states: {
          primary: { name: "Solution Violet", variable: "--aps-color", description: "计算结果的确定性指示。" },
          background: { name: "Solver Shade", variable: "--background", description: "数学模型的沉静底纹。" },
          surface: { name: "Gantt Surface", variable: "--card", description: "甘特图与时序面板背景。" },
          foreground: { name: "Node Text", variable: "--foreground", description: "细粒度排程参数文字。" },
        },
      },
      {
        id: "ai",
        name: "Industrial AI",
        variable: "--framework-color",
        icon: <Sparkles className="size-5" />,
        meaning:
          "工业大模型的‘认知涌现’。AI 模块通过共享深邃的金色底蕴，象征着从底层数据向顶层智能的升华，代表了认知与预测的极致维度。",
        states: {
          primary: { name: "Neural Gold", variable: "--framework-color", description: "AI 推理时的能量中心色。" },
          background: { name: "Inference Wash", variable: "--background", description: "推理轨迹的动态底纹。" },
          surface: { name: "Cognitive Deck", variable: "--card", description: "智能回答与建议展示面。" },
          foreground: { name: "Logic FG", variable: "--foreground", description: "模型输出的高亮文本。" },
        },
      },
    ],
  },
  {
    category: "治理与合规体系 (Governance & Ecosystem)",
    description: "确保系统稳定运行与合规的非执行类色调。",
    modules: [
      {
        id: "platform",
        name: "Platform / Ecosystem",
        variable: "--platform-color",
        icon: <Globe className="size-5" />,
        meaning: "开发者生态的‘生命绿’。代表开放、共赢与持续生长的插件架构。它鼓励社区贡献，是系统生命力的源泉。",
        states: {
          primary: { name: "Growth Green", variable: "--platform-color", description: "开放接口与社区活力色。" },
          background: { name: "Eco Shade", variable: "--background", description: "应用市场的平稳背景。" },
          surface: { name: "Plugin Card", variable: "--card", description: "第三方插件的独立展示面。" },
          foreground: { name: "Vitality Text", variable: "--foreground", description: "极富活力的文档说明文字。" },
        },
      },
      {
        id: "legal",
        name: "Legal / Compliance",
        variable: "--legal-color",
        icon: <Gavel className="size-5" />,
        meaning:
          "合规与法务的‘正义蓝’。代表了工业生产中的契约精神与数据合规的尊严。色调稳健，传递出不容置疑的专业性与安全感。",
        states: {
          primary: { name: "Trust Blue", variable: "--legal-color", description: "安全证书与合规标识核心色。" },
          background: { name: "Guard Shade", variable: "--background", description: "审计日志的严肃展示背景。" },
          surface: { name: "Vault Surface", variable: "--card", description: "加密资产与敏感数据的 UI 容器。" },
          foreground: { name: "Secure Text", variable: "--foreground", description: "高可信度的条款文本。" },
        },
      },
      {
        id: "cms",
        name: "CMS (Content)",
        variable: "--cms-color",
        icon: <FileText className="size-5" />,
        meaning:
          "内容治理的‘品牌红’。代表了品牌声量与知识的传播。它负责将复杂的工业洞察转化为清晰、动人的 Product 叙事。",
        states: {
          primary: { name: "Voice Red", variable: "--cms-color", description: "品牌动态与新闻核心色。" },
          background: { name: "Stage Wash", variable: "--background", description: "内容编辑器的纯净底色。" },
          surface: { name: "Article Surface", variable: "--card", description: "博文与文档的呈现界面。" },
          foreground: { name: "Editorial Text", variable: "--foreground", description: "极致舒适的阅读前端色。" },
        },
      },
    ],
  },
];

/**
 * ColorModuleCard 组件
 * 实现“压缩即智能”的设计哲学：默认展示精炼概览，点击展开多态矩阵与深度寓意
 */
function ColorModuleCard({ module }: { module: Module }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`group relative flex flex-col rounded-[2.5rem] bg-white dark:bg-zinc-900/50 border border-border/50 transition-all duration-700 overflow-hidden ${
        isExpanded
          ? "shadow-2xl border-amber-500/40 ring-1 ring-amber-500/10 shadow-amber-500/5 translate-y-[-4px]"
          : "shadow-sm hover:shadow-xl hover:border-amber-500/20"
      }`}
    >
      {/* 压缩态按钮 - 触发开关 */}
      <button type="button" onClick={() => setIsExpanded(!isExpanded)} className="text-left w-full z-20 outline-none">
        <div className="p-10 flex items-center justify-between bg-linear-to-b from-transparent to-zinc-50/10 dark:to-zinc-950/20">
          <div className="flex items-center gap-6">
            <div
              className={`p-4 rounded-[1.25rem] bg-white dark:bg-zinc-950 border border-border shadow-inner transition-all duration-500 ${isExpanded ? "text-amber-500 scale-110 rotate-3 shadow-lg shadow-amber-500/10" : "text-zinc-400 group-hover:text-amber-500"}`}
            >
              {module.icon}
            </div>
            <div>
              <h4 className="font-bold text-2xl tracking-tighter">{module.name}</h4>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-1 opacity-60">
                {module.variable}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div
              className="size-5 rounded-full shadow-[0_0_20px_currentColor] animate-pulse"
              style={{ backgroundColor: `var(${module.variable})`, color: `var(${module.variable})` }}
            />
            <ChevronDown
              className={`size-6 text-zinc-300 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isExpanded ? "rotate-180 text-amber-500" : "group-hover:text-zinc-400"}`}
            />
          </div>
        </div>
      </button>

      {/* 展开态内容 - 深度视觉矩阵 */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-10 pb-10 pt-4 space-y-10 border-t border-border/30 bg-zinc-50/30 dark:bg-zinc-950/20">
              {/* 深度寓意 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-3 bg-amber-500 rounded-full" />
                  <span className="text-[10px] font-black tracking-[0.2em] text-amber-500 uppercase">
                    Design Philosophy
                  </span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed font-light italic pl-4 border-l border-zinc-200 dark:border-zinc-800">
                  {module.meaning}
                </p>
              </div>

              {/* 多态矩阵展示 */}
              <div className="space-y-6">
                <span className="text-[9px] font-black tracking-[0.2em] text-zinc-400 uppercase">
                  Multi-State Color Matrix
                </span>
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(module.states).map(([key, state]) => (
                    <div
                      key={key}
                      className="flex items-center gap-5 p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-border/40 group/item relative hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                    >
                      <div
                        className="size-14 rounded-2xl border border-black/5 shadow-inner shrink-0 relative overflow-hidden"
                        style={{ backgroundColor: `var(${state.variable})` }}
                      >
                        <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold tracking-tight">{state.name}</span>
                          <span className="text-[8px] font-mono text-zinc-400 uppercase bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                            {key}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-1">{state.description}</p>
                      </div>
                      <button
                        type="button"
                        className="opacity-0 group-hover/item:opacity-100 p-2 text-zinc-400 hover:text-amber-500 transition-all absolute right-4"
                      >
                        <Copy className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 开发者集成指令 */}
              <div className="bg-zinc-950 rounded-3xl p-6 border border-white/5 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full" />
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                    Developer Reference
                  </span>
                  <Copy className="size-4 text-white/20 hover:text-white/60 cursor-pointer transition-colors" />
                </div>
                <code className="text-xs font-mono text-amber-200/90 leading-loose block relative z-10 bg-black/40 p-4 rounded-xl border border-white/5">
                  {`@apply bg-[var(${module.variable})] text-[var(--foreground)];\n// Module ID: ${module.id}`}
                </code>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 背景动态装饰 */}
      <div
        className={`absolute -top-12 -right-12 size-48 border border-amber-500/5 rounded-full transition-transform duration-1000 ${isExpanded ? "scale-150 rotate-90" : "group-hover:scale-125"}`}
      />
    </div>
  );
}

export default function BrandPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-brand/30">
      {/* 1. 震撼视觉的 HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden border-b border-border/50">
        {/* 背景动态交织光晕 - 采用与 Products 相同的审美逻辑 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] bg-linear-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute -top-40 left-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* 感知网格 (Perspective Grid) - 增强工业精密感 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Hero 内容 */}
        <div className="z-10 relative flex flex-col items-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 text-foreground font-semibold text-sm mb-8 ring-1 ring-border backdrop-blur-sm shadow-xl">
            <Sparkles className="size-4 text-amber-500" /> BRAND IDENTITY & GUIDELINES
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter mb-8 leading-[1.05] text-balance">
            赋予工业数据 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-950 via-zinc-600 to-zinc-400 dark:from-white dark:via-zinc-300 dark:to-zinc-500">
              品牌之魂
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-balance font-medium">
            MSRU 坚信：工业软件不仅仅是工具，它是智慧的封装。我们的视觉识别系统旨在通过标准化的色彩与符号，传递
            <span className="text-foreground font-bold">“压缩即智能”</span>的核心哲学。
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto h-16 px-12 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold hover:scale-105 transition-all shadow-2xl shadow-primary/20 hover:shadow-primary/40"
            >
              获取品牌 Kit
            </button>
            <Link
              href="#philosophy"
              className="w-full sm:w-auto h-16 px-12 inline-flex items-center justify-center rounded-full bg-transparent border border-border text-foreground text-xl font-medium hover:bg-muted transition-colors"
            >
              探索视觉哲学 <ArrowRight className="ml-2 size-6" />
            </Link>
          </div>
        </div>

        {/* 装饰性元素 - 模拟工业精度的环形线框 */}
        <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-amber-500/5 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />
        <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-zinc-500/10 rounded-full border-dashed pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />
      </section>

      {/* 2. Brand Slogan & Philosophy - 对齐 Products 的“协同作战”设计 */}
      <section id="philosophy" className="py-32 px-6 max-w-7xl mx-auto w-full relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 p-12 md:p-20 bg-zinc-950 rounded-[3rem] text-white overflow-hidden relative group">
          {/* 动态旋绕背景 */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />

          <div className="flex-1 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 border border-amber-500/30 text-xs font-bold uppercase tracking-widest">
              The Philosophy
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              压缩即智能 <br />
              <span className="text-2xl md:text-3xl text-zinc-500 font-mono font-medium block mt-2 opacity-50 tracking-normal">
                Compression is Intelligence
              </span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
              无论是大模型的预测逻辑、APS 的约束求解，还是 MES
              的生产流转，其本质都是将海量的工业熵通过数字化手段“压缩”为可被执行的确定性智能。
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="text-zinc-500 italic text-sm">"在这种极致的简约中，隐藏着极客与工厂最完美的共振。"</p>
            </div>
          </div>

          <div className="flex-1 w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center">
            {/* 抽象艺术连线图 - 具象化“压缩”过程 */}
            <div className="relative w-80 h-80">
              {/* 外圈 */}
              <div className="absolute inset-0 border-[0.5px] border-zinc-800 rounded-full animate-[spin_25s_linear_infinite]" />
              <div className="absolute inset-4 border-[0.5px] border-zinc-700/50 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

              {/* 核心“压缩”节点 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-32 bg-amber-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="size-20 bg-amber-500 rounded-full shadow-[0_0_50px_rgba(245,158,11,0.5)] flex items-center justify-center relative overflow-hidden">
                  <span className="text-black font-black text-2xl z-10 selection:bg-black/20">M</span>
                  <div className="absolute inset-0 bg-linear-to-tr from-white/30 to-transparent" />
                </div>
              </div>

              {/* 漂浮的工业图标 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 p-3 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl backdrop-blur -translate-y-4">
                <Cpu className="size-5 text-amber-500" />
              </div>
              <div className="absolute bottom-10 -left-4 p-3 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl backdrop-blur">
                <ShieldCheck className="size-5 text-blue-500" />
              </div>
              <div className="absolute bottom-10 -right-4 p-3 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl backdrop-blur">
                <Box className="size-5 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Logo Systems - 采用玻璃拟态卡片设计 */}
      <section className="py-24 px-6 relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3 justify-center">
              <Box className="text-amber-500" /> 品牌标志规范
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              标准化的视觉符号是品牌一致性的基石。我们提供多种场景下的适配方案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Logo */}
            <div className="group relative p-1 rounded-[3rem] bg-linear-to-b from-zinc-200 to-transparent dark:from-zinc-800 dark:to-transparent shadow-2xl transition-transform hover:-translate-y-2 duration-500">
              <div className="bg-white dark:bg-zinc-950 rounded-[2.9rem] p-12 h-full flex flex-col">
                <div className="h-64 rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center relative overflow-hidden mb-8 border border-border/50">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Image
                    src="/uploads/msru.svg"
                    width={280}
                    height={100}
                    alt="MSRU Standard Logo"
                    className="dark:invert transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-2xl"
                  />
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <div className="space-y-2">
                    <h4 className="font-bold text-2xl tracking-tight">标准字标 (Global Standard)</h4>
                    <p className="text-muted-foreground text-sm max-w-[200px]">适用于浅色背景，传递纯粹与通透</p>
                  </div>
                  <button
                    type="button"
                    className="size-16 rounded-3xl bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-all shadow-xl shadow-primary/20"
                  >
                    <Download className="size-8" />
                  </button>
                </div>
              </div>
            </div>

            {/* Reverse Logo */}
            <div className="group relative p-1 rounded-[3rem] bg-linear-to-b from-zinc-800 to-transparent shadow-2xl transition-transform hover:-translate-y-2 duration-500">
              <div className="bg-zinc-900 rounded-[2.9rem] p-12 h-full flex flex-col border border-white/5">
                <div className="h-64 rounded-[2.5rem] bg-zinc-950 flex items-center justify-center relative overflow-hidden mb-8 border border-white/5">
                  <div className="absolute inset-0 bg-linear-to-tr from-amber-500/10 to-transparent opacity-50" />
                  <Image
                    src="/uploads/msru.svg"
                    width={280}
                    height={100}
                    alt="MSRU Reverse Logo"
                    className="invert transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  />
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <div className="space-y-2">
                    <h4 className="font-bold text-2xl text-white tracking-tight">反白字标 (Reverse Identity)</h4>
                    <p className="text-zinc-500 text-sm max-w-[200px]">用于深色背景或高对比度工业绘图</p>
                  </div>
                  <button
                    type="button"
                    className="size-16 rounded-3xl bg-white text-black flex items-center justify-center hover:scale-110 transition-all shadow-xl shadow-white/10"
                  >
                    <Download className="size-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Categorized Color Palette - 重构为 Bento Grid 风格 */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative">
        {/* 背景大装饰字 */}
        <div className="absolute top-40 -left-20 text-[20rem] font-black text-zinc-500/5 select-none pointer-events-none rotate-90">
          COLOR
        </div>

        <div className="relative z-10 text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 flex items-center gap-4 justify-center tracking-tighter">
            <Palette className="text-amber-500 size-12" /> 职能色调体系
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance font-medium leading-relaxed">
            MSRU 采用“主体色驱动”的视觉逻辑。各模块 UI 仅会在主体色上产生偏移，确保全局结构的一致性。
          </p>
        </div>

        <div className="space-y-32">
          {COLOR_SYSTEM.map((cat) => (
            <div key={cat.category} className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="w-16 h-px bg-amber-500/50 hidden md:block" />
                <h3 className="text-3xl font-bold tracking-tight">{cat.category}</h3>
                <p className="text-muted-foreground font-medium ml-4 hidden lg:block opacity-60">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                {cat.modules.map((module) => (
                  <ColorModuleCard key={module.id} module={module} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Typography & CSS Core - 极致极客风格重构 */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950 text-white rounded-[4rem] mx-6 mb-24 relative overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">字体与全局样式规范</h2>
              <div className="w-20 h-1.5 bg-amber-500 rounded-full" />
            </div>

            <p className="text-xl text-zinc-400 leading-relaxed font-light">
              MSRU 强制采用系统级无衬线字体（System Sans-serif），追求纯粹的信息传递。代码字体则严选{" "}
              <span className="text-white font-mono">JetBrains Mono</span>，致敬极致的生产力文化。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-[2rem] bg-zinc-900 border border-white/5 space-y-4 group hover:bg-zinc-800 transition-colors">
                <span className="text-xs font-black tracking-widest text-zinc-500 uppercase">Typography / Primary</span>
                <p className="text-4xl font-bold tracking-tighter">AaBbCc 123</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-zinc-900 border border-white/5 space-y-4 group hover:bg-zinc-800 transition-colors">
                <span className="text-xs font-black tracking-widest text-zinc-500 uppercase">Monospace / Code</span>
                <p className="font-mono text-amber-500 text-xl tracking-tight">const msru = true;</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-6 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all">
              <div className="p-4 bg-amber-500 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                <Palette className="size-8 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">自动继承 CSS 变量池</h4>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  所有色标实时同步自项目的 `global.css`。这种单一真值（SSoT）架构确保了设计与代码的绝对一致。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all">
              <div className="p-4 bg-blue-500 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <Copy className="size-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">多态组件设计哲学</h4>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  不同业务模块仅通过注入 Functional Color 即可完成主题切换，底层共用同一套高健壮性的 UI 基石。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Brand Showcases & Labs - 品牌延伸展示 */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative border-t border-border/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">品牌延伸与实验室</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            探索 MSRU 品牌的更多可能性，从算法生成的视觉艺术到实际的产品示例。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/company/brand/fractal"
            className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900/50 border border-border/50 hover:border-amber-500/30 transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors" />
            <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl w-fit mb-6 text-amber-500 shadow-inner group-hover:scale-110 transition-transform">
              <Sparkles className="size-6" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-amber-500 transition-colors">
              分型艺术实验室 (Fractal)
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
              通过多种数学算法（如漂移多边形、递归树、科赫雪花等）实时生成 MSRU 的动态视觉符号。
            </p>
            <div className="flex items-center text-sm font-bold text-primary gap-1 group-hover:gap-2 transition-all">
              进入实验室 <ArrowRight className="size-4" />
            </div>
          </Link>

          <Link
            href="/company/brand/norsky"
            className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900/50 border border-border/50 hover:border-blue-500/30 transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
            <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl w-fit mb-6 text-blue-500 shadow-inner group-hover:scale-110 transition-transform">
              <Globe className="size-6" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-blue-500 transition-colors">
              北空演示站点 (Norsky)
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
              结合 MSRU 设计规范构建的沉浸式风控与全球化工业云概念站点。
            </p>
            <div className="flex items-center text-sm font-bold text-blue-500 gap-1 group-hover:gap-2 transition-all">
              访问站点 <ArrowRight className="size-4" />
            </div>
          </Link>

          <Link
            href="/company/brand/vi"
            className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900/50 border border-border/50 hover:border-emerald-500/30 transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors" />
            <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl w-fit mb-6 text-emerald-500 shadow-inner group-hover:scale-110 transition-transform">
              <Palette className="size-6" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-emerald-500 transition-colors">
              视觉识别规范 (VI)
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
              涵盖了品牌标志、排版、色彩组合及 UI 物理原则的完整设计指南。
            </p>
            <div className="flex items-center text-sm font-bold text-emerald-500 gap-1 group-hover:gap-2 transition-all">
              查看规范 <ArrowRight className="size-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-16 border-t border-border/50 text-center relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="size-10 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center font-black text-xs">
            M
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed max-w-sm">
            &copy; {new Date().getFullYear()} MSRU Platform. All rights reserved. <br />
            品牌所有权归属于 MSRU 数字化委员会。基于 "Compression IS Intelligence" 设计方案及规范实现。
          </p>
        </div>
      </footer>
    </main>
  );
}

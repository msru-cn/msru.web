import { BarChart, Calendar, Code2, Cpu, Layers, Network, Package, Settings, ShieldCheck, Zap } from "lucide-react";
import type { AccentColor, BentoItem, FeatureItem } from "@/components/marketing";

export const products: BentoItem[] = [
  { icon: Cpu, accentColor: "blue", title: "MES 执行", tagline: "生产的艺术。精益求精。", description: "全流程质量追溯与调度，让每一道工序精准无误。" },
  { icon: Package, accentColor: "emerald", title: "WMS 仓储", tagline: "极智流转。尽在掌握。", description: "数字孪生与立库智能控制，打造黑灯级立体大仓储。" },
  { icon: Calendar, accentColor: "amber", title: "APS 架构", tagline: "全局视野。运筹帷幄。", description: "基于约束理论的高级动态排程，确保交期推演滴水不漏。" },
  { icon: ShieldCheck, accentColor: "rose", title: "QMS 品控", tagline: "绝不妥协。万无一失。", description: "贯穿产品全生命周期的控制标准与统计 SPC 防错闭环。" },
  { icon: Settings, accentColor: "slate", title: "EAM 资产", tagline: "预置维护。防患未然。", description: "基于工况大数据的预测性维护与备件台账全生命周期追踪。" },
  { icon: Network, accentColor: "purple", title: "IoT 互联", tagline: "万物归一。即插即接。", description: "千万级高并发接入能力，百万级异构设备数采秒级边缘计算。" },
  { icon: Zap, accentColor: "fuchsia", title: "人工智能", tagline: "超能觉醒。探知未来。", description: "基于深度预测模型的智能调度、高精度视觉质检与工艺时序剖析。", span: "wide" },
];

export const services: FeatureItem[] = [
  { icon: BarChart, iconColor: "text-blue-400", title: "数字化转型咨询", description: "深入业务痛点，调研市场竞争，出具切实可落地的整体转型战略蓝图。" },
  { icon: Code2, iconColor: "text-emerald-400", title: "企业级定制开发", description: "采用现代微服务与云原生技术栈，突破标准软件的极限，重构专属竞争力。" },
  { icon: Layers, iconColor: "text-purple-400", title: "遗留系统演进", description: "保障数据安全的核心底线，逐步拆解重构史前单体巨兽，让老旧代码焕然一新。" },
];

export const hero = {
  title: "未来数字化引擎，",
  titleAccent: "现在启动。",
  accentColor: "blue" as AccentColor,
  description: "深耕 工业数字化 与人工智能领域。为您打造突破性的数字化转型方案与精工细作的软件定制开发。实力，有目共睹。",
  primaryCta: { label: "探索全系产品", href: "/products" },
  secondaryCta: { label: "咨询解决方案", href: "/contact" },
};

export const bottomCta = {
  title: "准备好驶入数字化快车道了吗？",
  description: "不妨坐下来和我们的数字化专家聊聊。无论规模大小，挑战几何，我们随时准备为您排忧解难。",
  primaryCta: { label: "立即预约评估", href: "/contact" },
};

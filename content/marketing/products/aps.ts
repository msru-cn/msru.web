import { CalendarDays, Sparkles } from "lucide-react";
import type { AccentColor, Stat } from "@/components/marketing";

export const apsHero = {
  badge: { icon: Sparkles, text: "MSRU APS 智能排程引擎" },
  title: "让生产计划，",
  titleAccent: "精确到毫秒。",
  accentColor: "orange" as AccentColor,
  description:
    "打破传统黑盒式的经验排产。基于运筹学与 AI 启发式算法，全局统筹人员、机台、物料与模具边界约束。一键生成全局最优的最短交期与最低成本生产计划。",
  primaryCta: { label: "获取企业版报价", href: "/contact" },
  secondaryCta: { label: "阅读架构白皮书", href: "/docs" },
};

export const apsStats: { heading: string; accentColor: AccentColor; stats: Stat[] } = {
  heading: "不是预估。是真实的运筹优化。",
  accentColor: "orange",
  stats: [
    { value: "98", unit: "%", label: "按期交货履行率 (OTD)" },
    { value: "40", unit: "%", label: "生产换型时间缩短" },
    { value: "85", unit: "%", label: "排产人工成本降低" },
    { value: "<5", unit: "min", label: "十万级工序重排响应" },
  ],
};

export const apsCta = {
  variant: "vibrant" as const,
  accentColor: "orange" as AccentColor,
  icon: CalendarDays,
  title: "从混沌计划到精确节拍。",
  description: "停止救火式的车间调度。我们将安排资深运筹学实施专家为您进行工厂逻辑建模咨询。",
  primaryCta: { label: "预约 APS 功能演示", href: "/contact" },
};

import { Sparkles, Target } from "lucide-react";
import type { AccentColor, Stat } from "@/components/marketing";

export const mesHero = {
  badge: { icon: Sparkles, text: "MSRU MES 5.0 全新发布" },
  title: "让工厂心跳，",
  titleAccent: "精准到秒。",
  accentColor: "blue" as AccentColor,
  description:
    "颠覆传统的制造执行系统。基于云原生架构与微服务设计，彻底打通 IT 与 OT 的数据壁垒。从订单下达到成品出库，毫秒级数据洞察，重塑车间生产力。",
  primaryCta: { label: "获取企业版报价", href: "/contact" },
  secondaryCta: { label: "阅读架构白皮书", href: "/docs" },
};

export const mesStats: { heading: string; accentColor: AccentColor; stats: Stat[] } = {
  heading: "不是口号。是真实的工业增效。",
  accentColor: "blue",
  stats: [
    { value: "30", unit: "%", label: "产能利用率提升" },
    { value: "99", unit: ".9%", label: "全制程追溯准确率" },
    { value: "50", unit: "%", label: "在制品(WIP)库存降低" },
    { value: "<1", unit: "s", label: "设备状态响应延迟" },
  ],
};

export const mesCta = {
  variant: "vibrant" as const,
  accentColor: "blue" as AccentColor,
  icon: Target,
  title: "准备好跨越传统的制造边界了吗？",
  description: "不要让低效的流转继续吞噬您的利润率。让我们的资深架构师为您提供一次免费的产品线诊断。",
  primaryCta: { label: "预约专家现场调研", href: "/contact" },
  secondaryCta: { label: "查看完整产品矩阵", href: "/products" },
};

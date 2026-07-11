import { Database, Eye, Lock, ShieldCheck, Zap } from "lucide-react";
import { SubPageCardGrid, SubPageCta, SubPageHero, SubPageSection } from "@/components/marketing";

const PRINCIPLES = [
  {
    icon: <Database className="size-6 text-amber-500" aria-hidden="true" />,
    title: "训练数据边界",
    desc: "客户生产数据永远不会被用于训练公共 AI 模型。所有模型训练仅使用经脱敏处理的合成数据集。",
  },
  {
    icon: <Lock className="size-6 text-blue-500" aria-hidden="true" />,
    title: "数据脱敏策略",
    desc: "在任何分析或推理流程之前，自动执行 k-匿名化、差分隐私与字段级掩码处理。",
  },
  {
    icon: <Eye className="size-6 text-emerald-500" aria-hidden="true" />,
    title: "可解释性承诺",
    desc: "所有 AI 决策输出附带置信度评分与归因分析，拒绝黑箱操作。",
  },
  {
    icon: <ShieldCheck className="size-6 text-rose-500" aria-hidden="true" />,
    title: "人类监督回路",
    desc: "关键工业决策始终保留人在回路 (Human-in-the-loop) 的最终审批权。",
  },
];

export default function AIEthicsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: Zap, text: "AI Ethics & Governance" }}
        title="AI 伦理与管辖"
        subtitle="我们坚信负责任的 AI 是工业智能化的基石。了解 MSRU 在大模型训练、数据脱敏与可解释性方面的坚定承诺。"
        accentColor="amber"
      />
      <SubPageSection>
        <SubPageCardGrid cards={PRINCIPLES} columns={2} />
      </SubPageSection>
      <SubPageCta title="了解更多 AI 治理细节" cta={{ label: "联系 AI 治理团队", href: "/contact" }} />
    </div>
  );
}

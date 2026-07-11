import { ArrowRight, Code, Handshake, Puzzle, Sparkles } from "lucide-react";
import Link from "next/link";
import { SubPageCardGrid, SubPageHero, SubPageSection } from "@/components/marketing";

const BENEFITS = [
  {
    icon: <Puzzle className="size-6 text-purple-500" />,
    title: "联合解决方案开发",
    desc: "与 MSRU 核心团队协作，将您的垂直行业专长深度集成到统一平台中。",
  },
  {
    icon: <Code className="size-6 text-blue-500" />,
    title: "技术沙箱与 API",
    desc: "获取完整的开发者沙箱环境、技术文档与优先 API 支持通道。",
  },
  {
    icon: <Sparkles className="size-6 text-amber-500" />,
    title: "联合市场推广",
    desc: "共享全球客户资源池，参与联合品牌活动、案例包装与渠道分销。",
  },
  {
    icon: <Handshake className="size-6 text-emerald-500" />,
    title: "商业激励计划",
    desc: "基于营收共享的透明分成模式，以及年度最佳合作伙伴评选。",
  },
];

export default function ISVPartnerPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: Handshake, text: "ISV Partner Program" }}
        title={
          <>
            ISV <span className="italic text-zinc-500">联合方案</span>
          </>
        }
        subtitle="携手独立软件供应商，共建工业数字化的联合解决方案生态。"
        accentColor="purple"
      />

      <SubPageSection>
        <div className="max-w-5xl mx-auto">
          <SubPageCardGrid cards={BENEFITS} />
        </div>
      </SubPageSection>

      <section className="py-24 bg-purple-600 text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-bold text-white tracking-tighter">成为 MSRU ISV 合作伙伴</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            申请加入 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

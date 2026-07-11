import { Heart, Scale, ShieldCheck, Users } from "lucide-react";
import { SubPageCardGrid } from "@/components/marketing";

const PRINCIPLES = [
  {
    icon: <ShieldCheck className="size-6 text-blue-500" />,
    title: "诚信与透明",
    desc: "在所有商业活动中保持最高标准的诚信，拒绝任何形式的贿赂、腐败或利益冲突。",
  },
  {
    icon: <Scale className="size-6 text-emerald-500" />,
    title: "公平竞争",
    desc: "严格遵守各司法管辖区的反垄断与反不正当竞争法规，通过产品实力赢得市场。",
  },
  {
    icon: <Users className="size-6 text-amber-500" />,
    title: "多元包容",
    desc: "尊重每一位员工、合作伙伴与客户，构建零歧视、无骚扰的工作与合作环境。",
  },
  {
    icon: <Heart className="size-6 text-rose-500" />,
    title: "社会责任",
    desc: "积极回馈社区，支持工业教育与可持续发展事业，做负责任的企业公民。",
  },
];

export default function CodeOfConductPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-16 bg-zinc-950">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <Scale className="size-8 text-primary mx-auto" />
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">商业行为准则</h1>
            <p className="text-zinc-400">MSRU 全球员工、管理层与合作伙伴必须共同遵循的商业道德底线。</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-16">
            <SubPageCardGrid cards={PRINCIPLES} />
          </div>
          <div className="prose dark:prose-invert prose-zinc max-w-none prose-headings:tracking-tight">
            <h2>举报渠道</h2>
            <p>如您发现任何违反本准则的行为，可通过以下渠道匿名举报：</p>
            <ul>
              <li>
                匿名举报邮箱：<a href="mailto:ethics@msru.ai">ethics@msru.ai</a>
              </li>
              <li>公司内部举报热线：400-800-1904 转 9</li>
              <li>独立第三方举报平台（即将上线）</li>
            </ul>
            <p>MSRU 严禁对善意举报者进行任何形式的报复，违反者将受到严厉纪律处分直至解除劳动关系。</p>
          </div>
        </div>
      </section>
    </div>
  );
}

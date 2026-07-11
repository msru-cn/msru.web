import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    name: "Starter",
    price: "¥9,800",
    unit: "/月/站点",
    desc: "适合中小型单站工厂的快速起步",
    color: "zinc",
    features: ["MES 基础模块", "最多 50 用户", "标准技术支持 (5x8)", "社区知识库访问", "季度版本更新"],
  },
  {
    name: "Enterprise",
    price: "¥39,800",
    unit: "/月/站点",
    desc: "适合中大型多站协同的全面部署",
    color: "primary",
    popular: true,
    features: [
      "MES + WMS + QMS 全模块",
      "不限用户数",
      "7x24 NOC 响应",
      "季度面对面架构评审",
      "优先功能定制通道",
      "IoT 边缘节点 (5 个)",
    ],
  },
  {
    name: "Sovereign",
    price: "定制报价",
    unit: "",
    desc: "适合超大型跨国集团的私有化部署",
    color: "amber",
    features: [
      "全产品线 + AI 大模型",
      "物理私有化交付",
      "专属驻场架构师",
      "独立安全审计报告",
      "自定义 SLA (99.99%+)",
      "源码级交付 (可选)",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.08)_0,transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
              简单透明的
              <br />
              <span className="italic text-zinc-500">企业级定价</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">无隐藏费用，无阶梯陷阱。按站点订阅，开箱即用。</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-10 rounded-[2.5rem] border ${plan.popular ? "border-primary shadow-2xl shadow-primary/10 scale-105" : "border-zinc-200 dark:border-zinc-800"} bg-white dark:bg-zinc-900/50 space-y-6`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Sparkles className="size-3" /> 最受欢迎
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-500">{plan.desc}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-zinc-900 dark:text-white">{plan.price}</span>
                  <span className="text-sm text-zinc-400">{plan.unit}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                      <Check className="size-4 text-emerald-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-bold transition-colors ${plan.popular ? "bg-primary text-white hover:opacity-90" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700"}`}
                >
                  {plan.price === "定制报价" ? "联系销售" : "开始试用"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">需要定制化方案？</h2>
          <p className="text-zinc-500">我们的解决方案架构师将为您量身定制最优性价比的部署方案。</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            预约 1v1 咨询 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

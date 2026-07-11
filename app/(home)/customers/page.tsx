import { Building2 } from "lucide-react";
import Image from "next/image";
import { SubPageCta, SubPageHero } from "@/components/marketing";

const CASES = [
  {
    company: "某全球 Top 3 动力电池集团",
    industry: "新能源",
    result: "产线 OEE 提升 22%，不良品率下降 67%",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
    quote: "MSRU 的 AI 视觉质检系统在量产的第三个月就收回了全部投资。",
  },
  {
    company: "某头部汽车零部件 Tier 1",
    industry: "汽车",
    result: "排产效率提升 40%，交付准时率 99.2%",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
    quote: "JIT 排产模块让我们彻底告别了手工 Excel 排程的混乱时代。",
  },
  {
    company: "某 12 英寸晶圆 Fab",
    industry: "半导体",
    result: "良率追踪精度 99.97%，SECS/GEM 集成 300+ 设备",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800",
    quote: "无尘车间的全域数字化管控，MSRU 是我们评估过的唯一能做到的平台。",
  },
];

export default function CustomersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: Building2, text: "Customer Stories" }}
        title={
          <>
            全球标杆<span className="italic text-zinc-500">案例库</span>
          </>
        }
        subtitle="来自千亿级集团的真实数字化转型成果与 ROI 分析。"
      />

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-5xl space-y-12">
          {CASES.map((c) => (
            <div
              key={c.company}
              className="group flex flex-col lg:flex-row rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full lg:w-2/5 min-h-[280px]">
                <Image src={c.image} alt={c.company} fill className="object-cover" />
              </div>
              <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center bg-zinc-50 dark:bg-zinc-900/50 space-y-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{c.industry}</span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{c.company}</h3>
                <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{c.result}</p>
                <blockquote className="text-zinc-500 italic border-l-2 border-primary/30 pl-4">"{c.quote}"</blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SubPageCta title="想成为下一个标杆？" cta={{ label: "预约战略演示", href: "/contact" }} />
    </div>
  );
}

import { ArrowRight, Battery, Car, Cpu, Factory, Sparkles, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const INDUSTRIES = [
  {
    href: "/solutions/ev-battery",
    title: "新能源与电池",
    description: "从电芯化成到模组 PACK，覆盖高通量极片质检、电芯追溯与循环寿命建模的全链路数字化方案。",
    icon: <Battery className="size-6 text-amber-500" />,
    color: "amber",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    href: "/solutions/semiconductor",
    title: "半导体与泛半导体",
    description: "无尘车间全域管控、SECS/GEM 设备集成与晶圆级良率追踪，满足顶级 Fab 的极致要求。",
    icon: <Cpu className="size-6 text-teal-500" />,
    color: "teal",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800",
  },
  {
    href: "/solutions/automotive",
    title: "汽车与高端装备",
    description: "JIT/JIS 准时制排产、供应链协同与全流程 IATF 16949 质量管理体系深度集成。",
    icon: <Car className="size-6 text-rose-500" />,
    color: "rose",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
  },
  {
    href: "/solutions/agriculture",
    title: "智慧农业全栈底座",
    description:
      "融合 IoT 实时感控、AI 农业大脑与 3D 数字孪生，为现代农业产业升级与科研转化提供端到端闭环。由真实土壤孕育，由数字逻辑重构。",
    icon: <Sprout className="size-6 text-emerald-500" />,
    color: "emerald",
    image: "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.12)_0,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1)_0,transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
              <Factory className="size-3" /> Industry Solutions
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
              每个行业
              <br />
              <span className="italic text-zinc-500">都有专属蓝图</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              我们深耕高端制造的垂直沃土。不是泛用型工具的简单拼凑，而是为每一条产线量身锻造的数字化破局武器。
            </p>
          </div>
        </div>
      </section>

      {/* 行业方案矩阵 */}
      <section className="py-32 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {INDUSTRIES.map((industry, i) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group flex flex-col lg:flex-row items-stretch rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative w-full lg:w-2/5 min-h-[300px]">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center bg-zinc-50 dark:bg-zinc-900/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm">{industry.icon}</div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      Industry #{i + 1}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-xl">{industry.description}</p>
                  <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                    探索行业方案 <ArrowRight className="size-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950 text-center">
        <div className="container mx-auto px-6 space-y-8">
          <Sparkles className="size-8 text-amber-500 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">没有找到您的行业？</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            我们的底层微服务架构天生具备跨行业适配能力。联系我们的解决方案架构师，获取定制化蓝图。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 font-bold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            联系解决方案专家 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";

const TCO_ITEMS = [
  { category: "软件许可", traditional: "¥800,000/年", msru: "¥398,000/年", saving: "50%" },
  { category: "硬件基础设施", traditional: "¥500,000", msru: "¥200,000", saving: "60%" },
  { category: "实施与定制", traditional: "¥1,200,000", msru: "¥600,000", saving: "50%" },
  { category: "年度运维维护", traditional: "¥300,000/年", msru: "¥0 (含于订阅)", saving: "100%" },
  { category: "培训与赋能", traditional: "¥150,000", msru: "¥50,000", saving: "67%" },
];

export default function TCOPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              <Calculator className="size-3" /> Total Cost of Ownership
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">总体拥有成本</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              MSRU 统一平台 vs 传统多系统拼凑方案的 5 年 TCO 对比分析。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">成本项</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">传统方案</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">MSRU 平台</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">节省</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {TCO_ITEMS.map((item) => (
                  <tr key={item.category}>
                    <td className="p-4 font-bold text-zinc-900 dark:text-white">{item.category}</td>
                    <td className="p-4 text-zinc-500 line-through">{item.traditional}</td>
                    <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">{item.msru}</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold">
                        {item.saving}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 mt-4">
            * 以上数据基于 500 人规模中型制造企业的典型部署场景。实际成本因企业规模、定制需求与部署架构而异。
          </p>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">获取定制化 TCO 评估</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition"
          >
            联系方案架构师 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

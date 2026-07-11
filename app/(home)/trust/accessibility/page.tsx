import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

const STANDARDS = [
  { standard: "WCAG 2.1 Level AA", status: "全面遵从", scope: "所有 Web 界面" },
  { standard: "Section 508", status: "全面遵从", scope: "美国联邦采购" },
  { standard: "EN 301 549", status: "全面遵从", scope: "欧盟公共采购" },
  { standard: "VPAT 2.4", status: "已发布", scope: "采购证明文档" },
];

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] font-bold text-rose-400 uppercase tracking-widest">
              <Eye className="size-3" /> Digital Accessibility
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">数字包容性声明</h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              MSRU 致力于确保所有用户——无论能力如何——都能平等地访问和使用我们的产品。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">合规标准一览</h2>
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">标准</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">状态</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">适用范围</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {STANDARDS.map((s) => (
                  <tr key={s.standard}>
                    <td className="p-4 font-bold text-zinc-900 dark:text-white">{s.standard}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold">
                        {s.status}
                      </span>
                    </td>
                    <td className="p-4 text-zinc-500">{s.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">需要 VPAT 文档？</h2>
          <p className="text-zinc-500">联系我们获取最新的自愿产品无障碍模板 (VPAT) 采购证明。</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            索取 VPAT <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

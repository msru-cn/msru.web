import { BookOpen, Download } from "lucide-react";
import { SubPageHero } from "@/components/marketing";

const PAPERS = [
  { title: "智能制造 2025：从MES到全域数字孪生的演进路径", tag: "行业趋势", date: "2025-12", pages: 42 },
  { title: "工业大模型落地实践：从 POC 到量产的三大关键", tag: "AI 实践", date: "2025-10", pages: 36 },
  { title: "动力电池制造数字化转型 ROI 分析报告", tag: "新能源", date: "2025-08", pages: 28 },
  { title: "零信任架构在工业 OT 网络中的应用", tag: "安全", date: "2025-06", pages: 32 },
  { title: "Gartner MES 魔力象限解读与 MSRU 定位分析", tag: "市场分析", date: "2025-03", pages: 18 },
];

export default function WhitepapersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: BookOpen, text: "Whitepapers & Insights" }}
        title={
          <>
            工业洞察<span className="italic text-zinc-500">白皮书</span>
          </>
        }
        subtitle="来自 MSRU 研究院与行业分析师的深度报告，洞察智能制造前沿趋势。"
      />

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          {PAPERS.map((paper) => (
            <div
              key={paper.title}
              className="group p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-primary/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase">
                    {paper.tag}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {paper.date} · {paper.pages} 页
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>
              </div>
              <button
                type="button"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl font-bold text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition shrink-0"
              >
                <Download className="size-4" /> 下载 PDF
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { ArrowUpRight, BarChart3, Calendar, ChevronRight, Download, FileText, MessageSquare } from "lucide-react";
import Link from "next/link";

const FINANCIAL_KPIS = [
  { label: "年度总营收 (FY23)", value: "$1.42B", trend: "+28.5%", sub: "持续高速增长中" },
  { label: "订阅收入占比", value: "72%", trend: "+5.2%", sub: "SaaS 核心业务稳固" },
  { label: "国际业务占比", value: "38%", trend: "+12.1%", sub: "全球化扩张加速" },
  { label: "现金流充足度", value: "High", trend: "Grade A", sub: "具备极强抗风险能力" },
];

const REPORTS = [
  { type: "年度报告", title: "MSRU 2023 全球业务与可持续发展年度汇总", date: "2024-03-25", size: "12.4 MB" },
  { type: "季度快报", title: "MSRU 2024 第一季度经营情况说明", date: "2024-05-12", size: "4.8 MB" },
  { type: "路演简报", title: "2024 夏季投资者交流日产品演进蓝图", date: "2024-06-02", size: "8.2 MB" },
];

export default function InvestorsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Financial Hero */}
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2000')] bg-cover opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest mx-auto">
              Investor Relations
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              透明、稳健
              <br />与<span className="italic text-zinc-500">共赢</span>
            </h1>
            <p className="text-zinc-400 leading-relaxed text-lg max-w-2xl mx-auto">
              我们致力于通过技术透明度与财务稳健性为全球投资者创造长效价值。 在这里获取 MSRU
              最新的市场表现与商业决策信息。
            </p>
            <div className="flex gap-4 pt-4 justify-center">
              <button
                type="button"
                className="px-6 py-3 bg-white text-zinc-950 font-bold rounded-xl flex items-center gap-2 hover:bg-zinc-100 transition-all"
              >
                <Download className="size-4" /> 下载最新财报
              </button>
              <button
                type="button"
                className="px-6 py-3 bg-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-700 transition-all"
              >
                IR 联系人
              </button>
            </div>
          </div>
        </div>
        {/* 底部装饰线 */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />
      </section>

      {/* KPI Dashboard */}
      <section className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <BarChart3 className="size-6 text-primary" />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white uppercase tracking-tighter">
              Financial Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FINANCIAL_KPIS.map((kpi) => (
              <div
                key={kpi.label}
                className="p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{kpi.label}</span>
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center gap-1 text-[10px] font-black italic">
                    <ArrowUpRight className="size-3" /> {kpi.trend}
                  </div>
                </div>
                <div className="text-4xl font-black text-zinc-900 dark:text-white tabular-nums mb-2">{kpi.value}</div>
                <div className="text-xs text-zinc-500">{kpi.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports and Downloads */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">定期报告与公告</h3>
              <div className="space-y-4">
                {REPORTS.map((report) => (
                  <div
                    key={report.title}
                    className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 hover:border-primary transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-400 group-hover:text-primary transition-colors">
                        <FileText className="size-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase font-bold text-primary tracking-widest">
                            {report.type}
                          </span>
                          <span className="text-[10px] text-zinc-400">{report.date}</span>
                        </div>
                        <h4 className="font-bold text-zinc-900 dark:text-white group-hover:underline">
                          {report.title}
                        </h4>
                      </div>
                    </div>
                    <button type="button" className="p-2 text-zinc-400 hover:text-primary transition-colors">
                      <Download className="size-5" />
                    </button>
                  </div>
                ))}
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all uppercase tracking-widest"
              >
                查看历史存档 <ChevronRight className="size-4" />
              </Link>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-zinc-900 text-white space-y-6">
                <Calendar className="size-10 text-primary" />
                <h4 className="text-xl font-bold">IR 日历</h4>
                <div className="space-y-6 text-sm">
                  <div className="flex gap-4 border-l border-primary/20 pl-4 py-1">
                    <div className="text-zinc-500 shrink-0">8月15日</div>
                    <div>2024 中期财报分析说明会</div>
                  </div>
                  <div className="flex gap-4 border-l border-primary/20 pl-4 py-1">
                    <div className="text-zinc-500 shrink-0">9月02日</div>
                    <div>高盛全球工业互联网峰会路演</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full py-3 bg-zinc-800 rounded-xl text-xs font-bold hover:bg-zinc-700 transition-all"
                >
                  添加到日历
                </button>
              </div>

              <div className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-4">
                <MessageSquare className="size-10 text-emerald-500" />
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white">分析师专区</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  申请接入 MSRU 实时商业动态仪表盘，获取关于工业底层基座市场的深度研究数据。
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary italic underline uppercase tracking-tighter"
                >
                  Request Access <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stock Mock Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-800 overflow-hidden">
        <div className="flex items-center gap-12 animate-infinite-scroll whitespace-nowrap opacity-40">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex gap-12">
              <div className="flex items-end gap-3 text-white">
                <span className="text-xs font-bold uppercase text-zinc-500">MSRU (NASDAQ)</span>
                <span className="text-3xl font-black tabular-nums">142.85</span>
                <span className="text-xs text-emerald-500 font-bold mb-1">+2.45%</span>
              </div>
              <div className="flex items-end gap-3 text-white">
                <span className="text-xs font-bold uppercase text-zinc-500">Revenue (TTM)</span>
                <span className="text-3xl font-black tabular-nums">$1.58B</span>
                <span className="text-xs text-emerald-500 font-bold mb-1">+18%</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

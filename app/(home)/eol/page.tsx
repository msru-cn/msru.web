import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

const VERSIONS = [
  { version: "v5.4.x", status: "active", support: "全面支持", eol: "—", color: "emerald" },
  { version: "v5.3.x", status: "active", support: "安全补丁", eol: "2027-06-30", color: "emerald" },
  { version: "v5.2.x", status: "maintenance", support: "仅安全补丁", eol: "2026-12-31", color: "amber" },
  { version: "v5.1.x", status: "eol", support: "已终止", eol: "2026-03-31", color: "red" },
  { version: "v5.0.x", status: "eol", support: "已终止", eol: "2025-09-30", color: "red" },
  { version: "v4.x", status: "eol", support: "已终止", eol: "2025-03-31", color: "red" },
];

export default function EOLPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-16 bg-zinc-950">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <Clock className="size-8 text-primary mx-auto" />
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">版本生命周期表 (EOL)</h1>
            <p className="text-zinc-400">了解每个版本的支持状态、维护窗口与最终终止日期。</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">版本</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">支持状态</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">支持级别</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">EOL 日期</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {VERSIONS.map((v) => (
                  <tr key={v.version}>
                    <td className="p-4 font-bold text-zinc-900 dark:text-white">{v.version}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                          {
                            active: "bg-emerald-500/10 text-emerald-500",
                            maintenance: "bg-amber-500/10 text-amber-500",
                            eol: "bg-red-500/10 text-red-500",
                          }[v.status]
                        }`}
                      >
                        {v.status === "active" && <CheckCircle className="size-3" />}
                        {v.status === "maintenance" && <Clock className="size-3" />}
                        {v.status === "eol" && <AlertTriangle className="size-3" />}
                        {v.status === "active" ? "活跃" : v.status === "maintenance" ? "维护期" : "已终止"}
                      </span>
                    </td>
                    <td className="p-4 text-zinc-500 text-sm">{v.support}</td>
                    <td className="p-4 text-zinc-500 text-sm">{v.eol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 mt-6">
            * 已终止 (EOL) 的版本除应对极危 0-Day 漏洞的特批热补丁外，不再提供任何更新支持。建议尽快升级至最新版本。
          </p>
        </div>
      </section>
    </div>
  );
}

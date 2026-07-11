import { Globe } from "lucide-react";

const CERTIFICATIONS = [
  { cert: "ISO 27001:2022", scope: "全球", status: "✅ 已认证", auditor: "BSI" },
  { cert: "SOC 2 Type II", scope: "全球", status: "✅ 已认证", auditor: "Deloitte" },
  { cert: "ISO 9001:2015", scope: "全球", status: "✅ 已认证", auditor: "TÜV" },
  { cert: "GDPR", scope: "欧盟", status: "✅ 合规", auditor: "内部 DPO" },
  { cert: "CCPA", scope: "美国加州", status: "✅ 合规", auditor: "外部法顾" },
  { cert: "等保三级 (GB)", scope: "中国大陆", status: "✅ 已备案", auditor: "公安部" },
  { cert: "PIPL (个人信息保护法)", scope: "中国大陆", status: "✅ 合规", auditor: "内部 DPO" },
  { cert: "IEC 62443", scope: "工业安全", status: "✅ 已认证", auditor: "TÜV" },
  { cert: "CSA STAR", scope: "云安全", status: "✅ Level 2", auditor: "CSA" },
];

export default function ComplianceMatrixPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              <Globe className="size-3" /> Global Compliance Matrix
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">全球合规矩阵</h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              MSRU 持有业界领先的安全与合规认证组合，覆盖全球主要监管区域。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">认证/标准</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">区域</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">状态</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">审计方</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {CERTIFICATIONS.map((c) => (
                  <tr key={c.cert} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-zinc-900 dark:text-white">{c.cert}</td>
                    <td className="p-4 text-zinc-500">{c.scope}</td>
                    <td className="p-4">
                      <span className="text-sm font-bold">{c.status}</span>
                    </td>
                    <td className="p-4 text-zinc-500">{c.auditor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

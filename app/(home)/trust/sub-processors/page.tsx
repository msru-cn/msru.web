import { ShieldCheck } from "lucide-react";

const PROCESSORS = [
  { name: "Amazon Web Services (AWS)", purpose: "基础设施托管 (IaaS)", region: "全球多区", dpa: "✅" },
  { name: "阿里云 (Alibaba Cloud)", purpose: "中国区基础设施", region: "中国大陆", dpa: "✅" },
  { name: "Cloudflare", purpose: "CDN 与 DDoS 防御", region: "全球", dpa: "✅" },
  { name: "SendGrid (Twilio)", purpose: "事务邮件发送", region: "美国", dpa: "✅" },
  { name: "Sentry", purpose: "异常监控与追踪", region: "美国/欧盟", dpa: "✅" },
  { name: "Stripe", purpose: "在线支付处理", region: "全球", dpa: "✅" },
  { name: "Intercom", purpose: "客户在线沟通", region: "美国/欧盟", dpa: "✅" },
];

export default function SubProcessorsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-bold text-teal-400 uppercase tracking-widest">
              <ShieldCheck className="size-3" /> Sub-Processors
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">次级处理者列表</h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              以下第三方服务提供商参与处理 MSRU 客户数据。所有合作方均已签署数据处理协议 (DPA)。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm text-zinc-500 mb-8">
            最后更新：2026 年 1 月 15 日 · 变更通知将提前 30 天发送至数据保护联系人
          </p>
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">服务商</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">用途</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">数据区域</th>
                  <th className="p-4 text-xs font-bold text-zinc-500 uppercase">DPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {PROCESSORS.map((p) => (
                  <tr key={p.name} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-zinc-900 dark:text-white">{p.name}</td>
                    <td className="p-4 text-zinc-500">{p.purpose}</td>
                    <td className="p-4 text-zinc-500">{p.region}</td>
                    <td className="p-4">
                      <span className="text-emerald-500 font-bold">{p.dpa}</span>
                    </td>
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

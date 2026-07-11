import { ArrowRight, MapPin, Network } from "lucide-react";
import Link from "next/link";

const REGIONS = [
  { region: "中国大陆", provider: "阿里云", location: "上海 / 深圳", compliance: "等保三级 · PIPL" },
  { region: "亚太 (APAC)", provider: "AWS", location: "新加坡 / 东京", compliance: "PDPA · APPI" },
  { region: "欧盟 (EU)", provider: "AWS", location: "法兰克福", compliance: "GDPR · Schrems II" },
  { region: "北美 (NA)", provider: "AWS", location: "弗吉尼亚", compliance: "CCPA · SOC 2" },
];

export default function DataResidencyPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              <Network className="size-3" /> Data Residency
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">数据驻留与跨境声明</h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              MSRU 支持按企业需求将数据物理驻留在指定区域，满足各地数据主权法规的严格要求。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">全球数据中心区域</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REGIONS.map((r) => (
              <div
                key={r.region}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-emerald-500" />
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{r.region}</h3>
                </div>
                <div className="text-sm text-zinc-500 space-y-1">
                  <p>
                    <span className="font-bold text-zinc-700 dark:text-zinc-300">提供商：</span>
                    {r.provider}
                  </p>
                  <p>
                    <span className="font-bold text-zinc-700 dark:text-zinc-300">物理位置：</span>
                    {r.location}
                  </p>
                  <p>
                    <span className="font-bold text-zinc-700 dark:text-zinc-300">合规框架：</span>
                    {r.compliance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">需要定制化的数据驻留方案？</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            联系合规团队 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

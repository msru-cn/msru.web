import { CheckCircle, Clock } from "lucide-react";

const SERVICES = [
  { name: "MES 制造执行", status: "operational", uptime: "99.98%" },
  { name: "WMS 智能仓储", status: "operational", uptime: "99.97%" },
  { name: "APS 高级排程", status: "operational", uptime: "99.99%" },
  { name: "QMS 质量管理", status: "operational", uptime: "99.96%" },
  { name: "EAM 设备维保", status: "operational", uptime: "99.98%" },
  { name: "IoT 边缘节点", status: "operational", uptime: "99.95%" },
  { name: "AI 视觉服务", status: "operational", uptime: "99.93%" },
  { name: "GraphQL API", status: "operational", uptime: "99.99%" },
  { name: "身份认证服务", status: "operational", uptime: "99.99%" },
  { name: "CDN 全球加速", status: "operational", uptime: "100%" },
];

export default function StatusPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-16 bg-zinc-950">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-sm">
              <CheckCircle className="size-4" /> 所有系统正常运行
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">系统状态</h1>
            <p className="text-zinc-400">实时监控 MSRU 平台各服务组件的运行状态与历史可用性。</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-3">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50"
              >
                <div className="flex items-center gap-3">
                  <div className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-zinc-900 dark:text-white text-sm">{s.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-zinc-400">30 天可用性</span>
                  <span className="text-sm font-bold text-emerald-500">{s.uptime}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-400 mt-8 text-center">
            <Clock className="size-3 inline mr-1" />
            最后更新：{new Date().toISOString().slice(0, 16).replace("T", " ")} UTC · 数据每 60 秒自动刷新
          </p>
        </div>
      </section>
    </div>
  );
}

import { Code, Tag } from "lucide-react";
import { SubPageCta, SubPageHero } from "@/components/marketing";

const RELEASES = [
  {
    version: "v5.4.0",
    date: "2026-02-15",
    tag: "Latest",
    highlights: [
      "AI 视觉质检模型 v3.2 发布，精度提升 18%",
      "APS 排程引擎支持多约束并行求解",
      "WMS 新增 AGV 路径优化算法",
      "性能优化：GraphQL 响应时间降低 35%",
    ],
  },
  {
    version: "v5.3.2",
    date: "2026-01-20",
    tag: "Stable",
    highlights: [
      "修复多租户环境下的权限穿透漏洞",
      "IoT 边缘节点断网续传稳定性改进",
      "QMS SPC 控制图支持自定义规则",
      "安全补丁：升级 OpenSSL 至 3.2.1",
    ],
  },
  {
    version: "v5.3.0",
    date: "2025-12-01",
    tag: "Stable",
    highlights: [
      "全新数字孪生 3D 渲染引擎 (WebGPU)",
      "EAM 预测维护模型支持 LSTM 时序分析",
      "MES 工单流支持审批工作流可视化编排",
      "新增日语与韩语界面语言包",
    ],
  },
];

export default function ReleasesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: Code, text: "Release Notes" }}
        title={
          <>
            发行说明<span className="italic text-zinc-500">与路线图</span>
          </>
        }
        subtitle="追踪 MSRU 平台每一次重大迭代、安全补丁与功能演进。"
      />

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            {RELEASES.map((r) => (
              <div
                key={r.version}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white">{r.version}</h3>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${r.tag === "Latest" ? "bg-emerald-500/10 text-emerald-500" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"}`}
                  >
                    {r.tag}
                  </span>
                  <span className="text-xs text-zinc-400">{r.date}</span>
                </div>
                <ul className="space-y-2">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                      <Tag className="size-4 text-primary shrink-0 mt-0.5" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubPageCta title="查看版本生命周期" cta={{ label: "版本 EOL 时间表", href: "/eol" }} />
    </div>
  );
}

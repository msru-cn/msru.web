import { Bug } from "lucide-react";
import { SubPageCta, SubPageHero } from "@/components/marketing";

const SCOPE = [
  { label: "关键级 (Critical)", reward: "¥50,000 - ¥200,000", example: "远程代码执行、认证绕过、数据库注入" },
  { label: "高危级 (High)", reward: "¥15,000 - ¥50,000", example: "权限提升、敏感信息泄露、SSRF" },
  { label: "中危级 (Medium)", reward: "¥3,000 - ¥15,000", example: "存储型 XSS、CSRF、逻辑缺陷" },
  { label: "低危级 (Low)", reward: "¥500 - ¥3,000", example: "反射型 XSS、信息披露、配置缺陷" },
];

export default function BountyPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: Bug, text: "Bug Bounty Program" }}
        title="漏洞披露政策"
        subtitle="我们欢迎负责任的安全研究者帮助我们发现并修复潜在漏洞。提交有效报告将获得丰厚的现金奖励。"
        accentColor="purple"
      />

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">奖励等级</h2>
          <div className="space-y-4">
            {SCOPE.map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-1">{s.label}</h3>
                  <p className="text-sm text-zinc-500">{s.example}</p>
                </div>
                <div className="text-xl font-black text-primary whitespace-nowrap">{s.reward}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubPageCta
        title="准备提交报告？"
        description="请将漏洞详情发送至专用安全邮箱，我们承诺 24 小时内响应。"
        cta={{ label: "security@msru.ai", href: "mailto:security@msru.ai" }}
      />
    </div>
  );
}

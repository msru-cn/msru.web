import { Map as MapIcon } from "lucide-react";
import Link from "next/link";

const SITEMAP_SECTIONS = [
  {
    title: "产品与技术",
    links: [
      { label: "产品总览", href: "/products" },
      { label: "MES 制造执行", href: "/products/mes" },
      { label: "WMS 智能仓储", href: "/products/wms" },
      { label: "APS 高级排程", href: "/products/aps" },
      { label: "QMS 质量管理", href: "/products/qms" },
      { label: "EAM 设备维保", href: "/products/eam" },
      { label: "IoT 物联网", href: "/products/iot" },
      { label: "AI 视觉大模型", href: "/products/ai" },
      { label: "开发者文档", href: "/docs" },
      { label: "发行说明", href: "/releases" },
      { label: "版本 EOL", href: "/eol" },
      { label: "系统状态", href: "/status" },
    ],
  },
  {
    title: "行业解决方案",
    links: [
      { label: "解决方案总览", href: "/solutions" },
      { label: "新能源与电池", href: "/solutions/ev-battery" },
      { label: "半导体", href: "/solutions/semiconductor" },
      { label: "汽车与装备", href: "/solutions/automotive" },
      { label: "定价", href: "/pricing" },
      { label: "白皮书", href: "/whitepapers" },
      { label: "客户案例", href: "/customers" },
    ],
  },
  {
    title: "服务与生态",
    links: [
      { label: "服务总览", href: "/services" },
      { label: "技术支持", href: "/support" },
      { label: "培训认证", href: "/training" },
      { label: "ISV 合作伙伴", href: "/partners/isv" },
      { label: "联系我们", href: "/contact" },
    ],
  },
  {
    title: "信任与合规",
    links: [
      { label: "信任中心", href: "/trust" },
      { label: "安全架构", href: "/trust/security" },
      { label: "合规矩阵", href: "/trust/compliance-matrix" },
      { label: "数据驻留", href: "/trust/data-residency" },
      { label: "AI 伦理", href: "/trust/ai-ethics" },
      { label: "无障碍声明", href: "/trust/accessibility" },
      { label: "漏洞披露", href: "/trust/bounty" },
      { label: "次级处理者", href: "/trust/sub-processors" },
    ],
  },
  {
    title: "公司",
    links: [
      { label: "关于我们", href: "/company/about" },
      { label: "投资者关系", href: "/investors" },
      { label: "品牌中心", href: "/company/brand" },
      { label: "ESG 报告", href: "/esg" },
      { label: "加入我们", href: "/careers" },
    ],
  },
  {
    title: "法律",
    links: [
      { label: "隐私策略", href: "/legal/privacy" },
      { label: "服务条款", href: "/legal/terms" },
      { label: "SLA 与退款", href: "/legal/sla" },
      { label: "Cookie 政策", href: "/legal/cookies" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-16 bg-zinc-950">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <MapIcon className="size-8 text-primary mx-auto" />
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">站点地图</h1>
            <p className="text-zinc-400">MSRU 官网全部页面的结构化索引。</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SITEMAP_SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 hover:text-primary hover:underline transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

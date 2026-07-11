"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- 配置数据开始 ---

/**
 * 路径段到中文标签的映射表
 * 用于面包屑导航中将 URL slug 转换为可读的中文名称
 */
const pathLabels: Record<string, string> = {
  // 产品与技术
  products: "产品与技术",
  aps: "APS 高级排程",
  mes: "MES 制造执行",
  wms: "WMS 智能仓储",
  qms: "QMS 穿透质控",
  eam: "EAM 预测维保",
  iot: "IOT 工业物联网",
  ai: "AI 视觉与大模型",
  "digital-twin": "3D 实时数字孪生",
  // 行业解决方案
  solutions: "行业解决方案",
  "ev-battery": "新能源与动力电池",
  semiconductor: "半导体与泛半导体",
  automotive: "汽车零部件集成",
  "3c": "3C 消费电子组装",
  // 服务与生态
  services: "生态与服务",
  delivery: "敏捷实施与驻场",
  support: "7x24 NOC 响应",
  training: "官方学院与认证",
  custom: "定制开发",
  // 信任与合规
  trust: "信任与安全中心",
  security: "多租户安全架构",
  "compliance-matrix": "全球区域合规矩阵",
  compliance: "全球合规矩阵",
  "sub-processors": "次级处理者列表",
  bounty: "漏洞披露政策",
  "data-residency": "数据驻留与跨境声明",
  "data-portability": "数据可携权与导出",
  data: "数据驻留与可携权",
  "ai-ethics": "AI 伦理与训练策略",
  accessibility: "无障碍访问声明",
  // 公司
  company: "关于 MSRU",
  about: "愿景与高管团队",
  investors: "投资者关系",
  brand: "品牌与媒体中心",
  "code-of-conduct": "商业道德准则",
  "supply-chain": "全球供应链准则",
  trademarks: "商标与开源归属",
  // 文档
  docs: "文档中心",
  framework: "系统架构指南",
  platform: "Platform 美仁平台",
  cms: "CMS 内容管理",
  legal: "合规与信任中心",
  // 其他
  pricing: "版本定价",
  tco: "TCO 报告",
  whitepapers: "行业白皮书",
  customers: "灯塔工厂案例",
  partners: "伙伴生态",
  isv: "ISV 联合方案",
  hardware: "认证硬件目录",
  marketplace: "插件市场",
  community: "开发者社区",
  blog: "技术博客",
  engineering: "工程技术",
  careers: "加入我们",
  esg: "ESG 报告",
  releases: "发行说明",
  status: "系统状态",
  eol: "版本生命周期",
  kb: "知识库",
  sitemap: "官网拓扑",
  fractal: "Fractal",
};

/** 法务说明条款数据 */
const FOOTNOTES = [
  <>
    1. <strong>可用性与部署架构：</strong> MSRU 智能制造平台的最终吞吐量与系统可用性
    SLA，取决于客户所选的部署架构（单站点、异地多活灾备等）及底层算力资源池配置。为了完整激活实时数字孪生及边缘 AI
    质检模块，请务必参考并在硬件选型阶段对齐
    <Link
      href="/docs/legal/whitepapers/roi-analysis"
      className="underline hover:text-[#1d1d1f] dark:hover:text-zinc-200 transition-colors mx-1"
    >
      《MSRU 卓越架构最佳实践白皮书》
    </Link>
    中的基准运行要求。
  </>,
  <>
    2. <strong>合规审计与数据驻留：</strong> 本平台从底层设计上保障并遵循 IEC 62443
    工业信息安全标准及全球主要隐私保护条例 (如 GDPR,
    CCPA)。对于全球化运营的跨国型集团，混合云原生基座支持策略化的数据本地化物理隔离。跨域防火墙边界的核心业务工单和制程报表同步，须经由企业法务及当地监管机构的前置校验。
  </>,
  <>
    3. <strong>三方系统与接口治理：</strong> MSRU 开放式底座平台支持与各类主流商用 ERP、PDM 及 SCADA
    等进行业务流的实时互馈转换。针对涉及到核心关键路径的生产链条打通，强烈建议采纳工业级消息流中间件进行异步微服务解耦极致介入。
  </>,
  <>
    4. <strong>高阶服务体系与迭代路线：</strong> 部分处于高度预览形态 (Private Preview)
    的垂直领域大语言模型或高级别预见性维护模块，暂不涵盖于基础平台永久物理使用许可 (Perpetual License)
    特权范围之内。具体接口控制策略的变迁或年度商业定价演进，请以 MSRU 官方发布的季度白皮书为准。
  </>,
  <>
    5. <strong>老旧系统平滑迁移与生命周期 (EoL)：</strong> 当特定子系统或早期组件版本进入官方生命周期终点 (End of Life)
    宣告状态后，除了应对极危 0-Day 漏洞的特批热补丁，MSRU 将不再提供日常合规更新支持。
  </>,
];

/** 核心导航矩阵数据结构，包含分类及链接映射 */
const FOOTER_COLUMNS = [
  {
    sections: [
      {
        title: "平台与应用",
        links: [
          { label: "APS 高级排程系统", href: "/products/aps" },
          { label: "MES 制造执行系统", href: "/products/mes" },
          { label: "WMS 智能仓储系统", href: "/products/wms" },
          { label: "QMS 穿透质控系统", href: "/products/qms" },
          { label: "EAM 预测维保系统", href: "/products/eam" },
          { label: "IOT 工业物联网", href: "/products/iot" },
          { label: "AI 视觉与大模型", href: "/products/ai" },
          { label: "3D 实时数字孪生", href: "/products/digital-twin" },
        ],
      },
      {
        title: "开发者与架构",
        links: [
          { label: "微服务与 DDD 架构概览", href: "/docs/architecture" },
          { label: "API 与 Webhook 参考", href: "/docs/api" },
          { label: "发行说明与路线图", href: "/releases" },
          { label: "系统实时状态与 RCA", href: "/status" },
          { label: "版本生命周期表 (EOL)", href: "/eol" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "按行业探索",
        links: [
          { label: "新能源与动力电池", href: "/solutions/ev-battery" },
          { label: "半导体与泛半导体", href: "/solutions/semiconductor" },
          { label: "汽车零部件集成", href: "/solutions/automotive" },
          { label: "3C 消费电子组装", href: "/solutions/3c" },
        ],
      },
      {
        title: "商业与采购资源",
        links: [
          { label: "版本定价与许可指南", href: "/pricing" },
          { label: "总体拥有成本 (TCO) 报告", href: "/tco" },
          { label: "工业数字化行业白皮书", href: "/whitepapers" },
          { label: "全球灯塔工厂案例", href: "/customers" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "服务与支持",
        links: [
          { label: "7x24 NOC 响应中心", href: "/support" },
          { label: "敏捷实施与驻场支援", href: "/services/delivery" },
          { label: "公开技术知识库", href: "/kb" },
          { label: "官方学院与认证体系", href: "/training" },
        ],
      },
      {
        title: "伙伴生态网络",
        links: [
          { label: "ISV 联合解决方案", href: "/partners/isv" },
          { label: "认证工业硬件目录", href: "/partners/hardware" },
          { label: "第三方应用插件市场", href: "/marketplace" },
          { label: "开发者社区与开源矩阵", href: "/community" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "信任与安全中心",
        links: [
          { label: "多租户安全与隔离架构", href: "/trust/security" },
          { label: "全球区域合规矩阵", href: "/trust/compliance-matrix" },
          { label: "次级处理者列表", href: "/trust/sub-processors" },
          { label: "系统漏洞披露政策", href: "/trust/bounty" },
        ],
      },
      {
        title: "数据管辖与伦理",
        links: [
          { label: "数据驻留与跨境声明", href: "/trust/data-residency" },
          { label: "数据可携权与导出指南", href: "/trust/data-portability" },
          { label: "AI 伦理与训练策略", href: "/trust/ai-ethics" },
          { label: "无障碍访问声明 (VPAT)", href: "/trust/accessibility" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "关于 MSRU 集团",
        links: [
          { label: "愿景与高管团队", href: "/company/about" },
          { label: "投资者关系与财报", href: "/company/investors" },
          { label: "技术博客", href: "/blog/engineering" },
          { label: "加入我们 (热招)", href: "/careers" },
        ],
      },
      {
        title: "社会责任与治理",
        links: [
          { label: "年度 ESG 可持续报告", href: "/esg" },
          { label: "商业道德与行为准则", href: "/company/code-of-conduct" },
          { label: "全球供应链准则", href: "/company/supply-chain" },
          { label: "商标使用与开源归属", href: "/company/trademarks" },
        ],
      },
    ],
  },
];

/** 底部横幅基础法律及策略链接 */
const LEGAL_LINKS = [
  { label: "隐私策略", href: "/legal/privacy" },
  { label: "服务条款 (ToS)", href: "/legal/terms" },
  { label: "SLA 与退款", href: "/legal/sla" },
  { label: "Cookie 政策", href: "/legal/cookies" },
  { label: "官网拓扑", href: "/sitemap" },
];

// --- 配置数据结束 ---

export function AppleFooter() {
  const pathname = usePathname();

  /**
   * 根据当前路径生成面包屑层级数据
   * 每一项包含 label（显示文本）和 href（跳转链接）
   */
  const breadcrumbSegments = (() => {
    // 过滤路由组标记（如 (home)）和空段
    const segments = pathname.split("/").filter((seg) => seg && !seg.startsWith("("));
    return segments.map((seg, index) => ({
      label: pathLabels[seg] || decodeURIComponent(seg),
      href: `/${segments.slice(0, index + 1).join("/")}`,
    }));
  })();

  return (
    <footer className="w-full bg-[#f5f5f7] dark:bg-zinc-950 text-[12px] text-[#86868b] dark:text-zinc-400 font-sans border-t border-[#d2d2d7] dark:border-zinc-800 pb-6 pt-4">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6">
        {/* Top Footnotes Section (保留原有的高水准工业级法律/技术免责声明) */}
        <div className="border-b border-[#d2d2d7] dark:border-zinc-800 pb-4 mb-5 space-y-3 leading-relaxed">
          {FOOTNOTES.map((note) => (
            <p key={note.props.children[0]}>{note}</p>
          ))}
        </div>

        {/* Apple 风格面包屑导航：根据当前路由路径自动生成层级 */}
        <div className="border-b border-[#d2d2d7] dark:border-zinc-800 pb-3 mb-5">
          <Breadcrumb>
            <BreadcrumbList className="text-[12px] gap-1.5">
              {/* 首项：MSRU 品牌标识 */}
              <BreadcrumbItem>
                {breadcrumbSegments.length > 0 ? (
                  <BreadcrumbLink asChild>
                    <Link
                      href="/"
                      className="text-[#1d1d1f] dark:text-zinc-100 hover:text-[#0066cc] dark:hover:text-blue-400 transition-colors font-medium flex items-center gap-2"
                    >
                      <Image
                        src="/uploads/msru.svg"
                        alt="MSRU Logo"
                        width={24}
                        height={24}
                        className="h-3.5 w-auto dark:brightness-0 dark:invert"
                      />
                      MSRU
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-[#1d1d1f] dark:text-zinc-100 font-medium flex items-center gap-2">
                    <Image
                      src="/uploads/msru.svg"
                      alt="MSRU Logo"
                      width={24}
                      height={24}
                      className="h-3.5 w-auto dark:brightness-0 dark:invert"
                    />
                    MSRU
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>

              {/* 路径层级：每一段渲染为可点击链接，最后一段为当前页 */}
              {breadcrumbSegments.map((segment, index) => {
                const isLast = index === breadcrumbSegments.length - 1;
                return (
                  <span key={segment.href} className="contents">
                    <BreadcrumbSeparator className="[&>svg]:size-3 text-[#86868b] dark:text-zinc-500" />
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="text-[#1d1d1f] dark:text-zinc-100">{segment.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link
                            href={segment.href}
                            className="text-[#86868b] dark:text-zinc-400 hover:text-[#1d1d1f] dark:hover:text-zinc-100 transition-colors"
                          >
                            {segment.label}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </span>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* 核心导航矩阵 - 桌面端：基于跨国软件标准的 5 层 IA 架构重构 */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 mb-8 pb-4 border-b lg:border-none border-[#d2d2d7] dark:border-zinc-800">
          {FOOTER_COLUMNS.map((column) => (
            <div key={`col-${column.sections[0]?.title || Math.random()}`} className="flex flex-col gap-8">
              {column.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-[#1d1d1f] dark:text-zinc-100 mb-2.5">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="hover:underline">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* 核心导航矩阵 - 移动端：手风琴样式，仿 Apple */}
        <div className="md:hidden mb-8 border-b border-[#d2d2d7] dark:border-zinc-800">
          <Accordion type="multiple" className="w-full">
            {FOOTER_COLUMNS.flatMap((col) => col.sections).map((section) => (
              <AccordionItem
                value={`item-${section.title}`}
                key={section.title}
                className="border-b border-[#d2d2d7] dark:border-zinc-800 last:border-none"
              >
                <AccordionTrigger className="text-[#1d1d1f] dark:text-zinc-100 font-semibold py-3 hover:no-underline text-[13px]">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pb-3 pt-1">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[#86868b] dark:text-zinc-400 hover:text-[#1d1d1f] dark:hover:text-zinc-100 transition-colors truncate block text-[13px]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col gap-3">
          <div className="border-b border-[#d2d2d7] dark:border-zinc-800 pb-3 md:pb-4">
            获取更多保障：访问我们的
            <Link href="/trust" className="text-[#0066cc] dark:text-blue-400 hover:underline mx-1">
              信任与合规中心
            </Link>
            或联系全球专属客户成功经理 (CSM)。服务热线 400-800-1904。
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <span className="shrink-0">Copyright © {new Date().getFullYear()} MSRU Inc. 保留所有权利。</span>

              {/* 底部最核心的法律防线精简提炼 */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {LEGAL_LINKS.map((link, idx) => (
                  <span key={link.href} className="flex items-center gap-4">
                    <Link href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                    {idx !== LEGAL_LINKS.length - 1 && (
                      <div className="h-3 w-px bg-[#d2d2d7] dark:bg-zinc-700 hidden lg:block" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <Link href="#" className="hover:underline hidden lg:block shrink-0">
              中国 (简体中文)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

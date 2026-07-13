import type { Metadata } from "next";
import blogEngineering from "@/content/marketing/pages/blog/engineering.json";
import careers from "@/content/marketing/pages/careers.json";
import community from "@/content/marketing/pages/community.json";
import companyAbout from "@/content/marketing/pages/company/about.json";
import companyBrand from "@/content/marketing/pages/company/brand.json";
import companyCodeOfConduct from "@/content/marketing/pages/company/code-of-conduct.json";
import companyIndex from "@/content/marketing/pages/company/index.json";
import companySupplyChain from "@/content/marketing/pages/company/supply-chain.json";
import customers from "@/content/marketing/pages/customers.json";
import eol from "@/content/marketing/pages/eol.json";
import esg from "@/content/marketing/pages/esg.json";
import home from "@/content/marketing/pages/home.json";
import investors from "@/content/marketing/pages/investors.json";
import kb from "@/content/marketing/pages/kb.json";
import legalCookies from "@/content/marketing/pages/legal/cookies.json";
import legalPrivacy from "@/content/marketing/pages/legal/privacy.json";
import legalSla from "@/content/marketing/pages/legal/sla.json";
import legalTerms from "@/content/marketing/pages/legal/terms.json";
import marketplace from "@/content/marketing/pages/marketplace.json";
import partnersHardware from "@/content/marketing/pages/partners/hardware.json";
import partnersIsv from "@/content/marketing/pages/partners/isv.json";
import pricing from "@/content/marketing/pages/pricing.json";
import productsAi from "@/content/marketing/pages/products/ai.json";
import productsAps from "@/content/marketing/pages/products/aps.json";
import productsDigitalTwin from "@/content/marketing/pages/products/digital-twin.json";
import productsEam from "@/content/marketing/pages/products/eam.json";
import productsIndex from "@/content/marketing/pages/products/index.json";
import productsIot from "@/content/marketing/pages/products/iot.json";
import productsMes from "@/content/marketing/pages/products/mes.json";
import productsQms from "@/content/marketing/pages/products/qms.json";
import productsWms from "@/content/marketing/pages/products/wms.json";
import releases from "@/content/marketing/pages/releases.json";
import servicesCustomIndex from "@/content/marketing/pages/services/custom/index.json";
import servicesCustomManDay from "@/content/marketing/pages/services/custom/man-day.json";
import servicesCustomTurnkey from "@/content/marketing/pages/services/custom/turnkey.json";
import servicesDelivery from "@/content/marketing/pages/services/delivery.json";
import servicesIndex from "@/content/marketing/pages/services/index.json";
import servicesSupport from "@/content/marketing/pages/services/support.json";
import servicesTraining from "@/content/marketing/pages/services/training.json";
import solutions3c from "@/content/marketing/pages/solutions/3c.json";
import solutionsAgriculture from "@/content/marketing/pages/solutions/agriculture.json";
import solutionsAutomotive from "@/content/marketing/pages/solutions/automotive.json";
import solutionsEvBattery from "@/content/marketing/pages/solutions/ev-battery.json";
import solutionsIndex from "@/content/marketing/pages/solutions/index.json";
import solutionsSemiconductor from "@/content/marketing/pages/solutions/semiconductor.json";
import support from "@/content/marketing/pages/support.json";
import tco from "@/content/marketing/pages/tco.json";
import training from "@/content/marketing/pages/training.json";
import trustAccessibility from "@/content/marketing/pages/trust/accessibility.json";
import trustAiEthics from "@/content/marketing/pages/trust/ai-ethics.json";
import trustBounty from "@/content/marketing/pages/trust/bounty.json";
import trustComplianceMatrix from "@/content/marketing/pages/trust/compliance-matrix.json";
import trustDataPortability from "@/content/marketing/pages/trust/data-portability.json";
import trustDataResidency from "@/content/marketing/pages/trust/data-residency.json";
import trustIndex from "@/content/marketing/pages/trust/index.json";
import trustSecurity from "@/content/marketing/pages/trust/security.json";
import trustSubProcessors from "@/content/marketing/pages/trust/sub-processors.json";
import whitepapers from "@/content/marketing/pages/whitepapers.json";
import { createMetadata } from "@/lib/metadata";

interface MarketingPageEntry {
  blocks: unknown;
  meta?: { title?: string; description?: string; path?: string };
}

/**
 * 营销页注册表 —— route path → { 页面 block JSON, SEO meta }。
 * key 为去掉前导斜杠的路由路径；"" 表示首页 `/`。
 * catch-all 路由 (app/(home)/[[...slug]]) 据此渲染 + 生成 metadata，
 * 新增页面只需加一个 JSON(content/marketing/pages/**，目录镜像路由) + 一行登记，零改路由代码。
 * 代码(本文件)在 lib/，纯数据 JSON 在 content/，两者分离。
 * 数据源当前走前端仓库；后续可无缝换成后端/CMS 拉取（渲染器来源无关）。
 */
export const MARKETING_PAGES: Record<string, MarketingPageEntry> = {
  "": {
    blocks: home,
    meta: {
      title: "MSRU · AI-Native 工业数字化底座",
      description:
        "Core 是操作系统，业务是 App。MES、WMS、APS、QMS、IoT、AI 像应用一样安装在统一基座之上，按需开通、到期停服。一次声明，全生命周期自动投影。",
      path: "/",
    },
  },
  customers: { blocks: customers, meta: { title: "客户案例", path: "/customers" } },
  pricing: { blocks: pricing, meta: { title: "定价方案", path: "/pricing" } },
  support: { blocks: support, meta: { title: "支持中心", path: "/support" } },
  training: { blocks: training, meta: { title: "官方学院与认证", path: "/training" } },
  marketplace: { blocks: marketplace, meta: { title: "插件市场", path: "/marketplace" } },

  // 产品与技术
  products: { blocks: productsIndex, meta: { title: "产品总览", path: "/products" } },
  "products/mes": { blocks: productsMes, meta: { title: "MES 制造执行", path: "/products/mes" } },
  "products/wms": { blocks: productsWms, meta: { title: "WMS 智能仓储", path: "/products/wms" } },
  "products/aps": { blocks: productsAps, meta: { title: "APS 高级排程", path: "/products/aps" } },
  "products/qms": { blocks: productsQms, meta: { title: "QMS 质量管理", path: "/products/qms" } },
  "products/eam": { blocks: productsEam, meta: { title: "EAM 设备维保", path: "/products/eam" } },
  "products/iot": { blocks: productsIot, meta: { title: "工业物联网 IoT", path: "/products/iot" } },
  "products/ai": { blocks: productsAi, meta: { title: "AI 视觉大模型", path: "/products/ai" } },
  "products/digital-twin": {
    blocks: productsDigitalTwin,
    meta: { title: "3D 数字孪生", path: "/products/digital-twin" },
  },

  // 行业解决方案
  solutions: { blocks: solutionsIndex, meta: { title: "行业解决方案", path: "/solutions" } },
  "solutions/ev-battery": {
    blocks: solutionsEvBattery,
    meta: { title: "动力电池解决方案", path: "/solutions/ev-battery" },
  },
  "solutions/semiconductor": {
    blocks: solutionsSemiconductor,
    meta: { title: "半导体解决方案", path: "/solutions/semiconductor" },
  },
  "solutions/automotive": {
    blocks: solutionsAutomotive,
    meta: { title: "汽车与装备解决方案", path: "/solutions/automotive" },
  },
  "solutions/3c": { blocks: solutions3c, meta: { title: "3C 电子解决方案", path: "/solutions/3c" } },
  "solutions/agriculture": {
    blocks: solutionsAgriculture,
    meta: { title: "智慧农业解决方案", path: "/solutions/agriculture" },
  },

  // 生态与服务
  services: { blocks: servicesIndex, meta: { title: "服务总览", path: "/services" } },
  "services/delivery": {
    blocks: servicesDelivery,
    meta: { title: "交付与实施", path: "/services/delivery" },
  },
  "services/support": {
    blocks: servicesSupport,
    meta: { title: "7×24 支援服务", path: "/services/support" },
  },
  "services/training": {
    blocks: servicesTraining,
    meta: { title: "学院与认证", path: "/services/training" },
  },
  "services/custom": {
    blocks: servicesCustomIndex,
    meta: { title: "定制开发", path: "/services/custom" },
  },
  "services/custom/man-day": {
    blocks: servicesCustomManDay,
    meta: { title: "人天费率卡", path: "/services/custom/man-day" },
  },
  "services/custom/turnkey": {
    blocks: servicesCustomTurnkey,
    meta: { title: "交钥匙工程", path: "/services/custom/turnkey" },
  },
  "partners/hardware": {
    blocks: partnersHardware,
    meta: { title: "认证硬件生态", path: "/partners/hardware" },
  },
  "partners/isv": { blocks: partnersIsv, meta: { title: "ISV 联合方案", path: "/partners/isv" } },
  community: { blocks: community, meta: { title: "开发者社区", path: "/community" } },
  "blog/engineering": {
    blocks: blogEngineering,
    meta: { title: "工程技术博客", path: "/blog/engineering" },
  },

  // 信任与合规
  trust: { blocks: trustIndex, meta: { title: "信任中心", path: "/trust" } },
  "trust/security": { blocks: trustSecurity, meta: { title: "多租户安全架构", path: "/trust/security" } },
  "trust/compliance-matrix": {
    blocks: trustComplianceMatrix,
    meta: { title: "全球合规矩阵", path: "/trust/compliance-matrix" },
  },
  "trust/sub-processors": {
    blocks: trustSubProcessors,
    meta: { title: "次级处理者列表", path: "/trust/sub-processors" },
  },
  "trust/bounty": { blocks: trustBounty, meta: { title: "漏洞披露政策", path: "/trust/bounty" } },
  "trust/data-residency": {
    blocks: trustDataResidency,
    meta: { title: "数据驻留与跨境声明", path: "/trust/data-residency" },
  },
  "trust/data-portability": {
    blocks: trustDataPortability,
    meta: { title: "数据可携权与导出", path: "/trust/data-portability" },
  },
  "trust/ai-ethics": { blocks: trustAiEthics, meta: { title: "AI 伦理与管辖", path: "/trust/ai-ethics" } },
  "trust/accessibility": {
    blocks: trustAccessibility,
    meta: { title: "无障碍访问声明", path: "/trust/accessibility" },
  },

  // 公司与治理
  company: { blocks: companyIndex, meta: { title: "关于 MSRU", path: "/company" } },
  "company/about": { blocks: companyAbout, meta: { title: "愿景与团队", path: "/company/about" } },
  "company/brand": { blocks: companyBrand, meta: { title: "品牌与媒体", path: "/company/brand" } },
  "company/code-of-conduct": {
    blocks: companyCodeOfConduct,
    meta: { title: "商业行为准则", path: "/company/code-of-conduct" },
  },
  "company/supply-chain": {
    blocks: companySupplyChain,
    meta: { title: "供应链准则", path: "/company/supply-chain" },
  },
  careers: { blocks: careers, meta: { title: "加入我们", path: "/careers" } },
  investors: { blocks: investors, meta: { title: "投资者关系", path: "/investors" } },
  esg: { blocks: esg, meta: { title: "ESG 与可持续发展", path: "/esg" } },

  // 资源 / 工具 / 法务
  whitepapers: { blocks: whitepapers, meta: { title: "白皮书", path: "/whitepapers" } },
  releases: { blocks: releases, meta: { title: "发行说明", path: "/releases" } },
  kb: { blocks: kb, meta: { title: "知识库", path: "/kb" } },
  eol: { blocks: eol, meta: { title: "版本生命周期", path: "/eol" } },
  tco: { blocks: tco, meta: { title: "TCO 报告", path: "/tco" } },
  "legal/privacy": { blocks: legalPrivacy, meta: { title: "隐私策略", path: "/legal/privacy" } },
  "legal/terms": { blocks: legalTerms, meta: { title: "服务条款", path: "/legal/terms" } },
  "legal/sla": { blocks: legalSla, meta: { title: "SLA 与退款", path: "/legal/sla" } },
  "legal/cookies": { blocks: legalCookies, meta: { title: "Cookie 政策", path: "/legal/cookies" } },
};

function keyOf(slug: string[] | undefined): string {
  return (slug ?? []).join("/");
}

export function getMarketingPage(slug: string[] | undefined): unknown {
  return MARKETING_PAGES[keyOf(slug)]?.blocks;
}

export function getMarketingMetadata(slug: string[] | undefined): Metadata | undefined {
  const meta = MARKETING_PAGES[keyOf(slug)]?.meta;
  return meta ? createMetadata(meta) : undefined;
}

export function marketingPageParams(): { slug: string[] }[] {
  return Object.keys(MARKETING_PAGES).map((k) => ({ slug: k === "" ? [] : k.split("/") }));
}

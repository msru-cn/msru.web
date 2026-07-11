import { Eye } from "lucide-react";
import { DataTable, SubPageCta, SubPageHero, SubPageSection } from "@/components/marketing";

const STANDARDS = [
  { standard: "WCAG 2.1 Level AA", status: "全面遵从", scope: "所有 Web 界面" },
  { standard: "Section 508", status: "全面遵从", scope: "美国联邦采购" },
  { standard: "EN 301 549", status: "全面遵从", scope: "欧盟公共采购" },
  { standard: "VPAT 2.4", status: "已发布", scope: "采购证明文档" },
];

const COLUMNS = [
  { key: "standard", header: "标准" },
  { key: "status", header: "状态" },
  { key: "scope", header: "适用范围" },
];

const rows = STANDARDS.map((s) => ({
  standard: s.standard,
  status: (
    <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold">{s.status}</span>
  ),
  scope: s.scope,
}));

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: Eye, text: "Digital Accessibility" }}
        title="数字包容性声明"
        subtitle="MSRU 致力于确保所有用户——无论能力如何——都能平等地访问和使用我们的产品。"
        accentColor="rose"
      />
      <SubPageSection>
        <DataTable columns={COLUMNS} rows={rows} rowKey="standard" caption="无障碍合规标准一览" />
      </SubPageSection>
      <SubPageCta
        title="需要 VPAT 文档？"
        description="联系我们获取最新的自愿产品无障碍模板 (VPAT) 采购证明。"
        cta={{ label: "索取 VPAT", href: "/contact" }}
      />
    </div>
  );
}

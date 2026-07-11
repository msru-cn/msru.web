import { Globe } from "lucide-react";
import { DataTable, SubPageHero, SubPageSection } from "@/components/marketing";

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

const COLUMNS = [
  { key: "cert", header: "认证/标准" },
  { key: "scope", header: "区域" },
  { key: "status", header: "状态" },
  { key: "auditor", header: "审计方" },
];

export default function ComplianceMatrixPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: Globe, text: "Global Compliance Matrix" }}
        title="全球合规矩阵"
        subtitle="MSRU 持有业界领先的安全与合规认证组合，覆盖全球主要监管区域。"
      />
      <SubPageSection>
        <DataTable columns={COLUMNS} rows={CERTIFICATIONS} rowKey="cert" caption="全球合规认证矩阵" />
      </SubPageSection>
    </div>
  );
}

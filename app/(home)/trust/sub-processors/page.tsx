import { ShieldCheck } from "lucide-react";
import { DataTable, SubPageHero } from "@/components/marketing";

const PROCESSORS = [
  { name: "Amazon Web Services (AWS)", purpose: "基础设施托管 (IaaS)", region: "全球多区", dpa: "✅" },
  { name: "阿里云 (Alibaba Cloud)", purpose: "中国区基础设施", region: "中国大陆", dpa: "✅" },
  { name: "Cloudflare", purpose: "CDN 与 DDoS 防御", region: "全球", dpa: "✅" },
  { name: "SendGrid (Twilio)", purpose: "事务邮件发送", region: "美国", dpa: "✅" },
  { name: "Sentry", purpose: "异常监控与追踪", region: "美国/欧盟", dpa: "✅" },
  { name: "Stripe", purpose: "在线支付处理", region: "全球", dpa: "✅" },
  { name: "Intercom", purpose: "客户在线沟通", region: "美国/欧盟", dpa: "✅" },
];

const COLUMNS = [
  { key: "name", header: "服务商" },
  { key: "purpose", header: "用途" },
  { key: "region", header: "数据区域" },
  { key: "dpa", header: "DPA" },
];

export default function SubProcessorsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: ShieldCheck, text: "Sub-Processors" }}
        title="次级处理者列表"
        subtitle="以下第三方服务提供商参与处理 MSRU 客户数据。所有合作方均已签署数据处理协议 (DPA)。"
        accentColor="teal"
      />
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-5xl mb-8">
          <p className="text-sm text-zinc-500">
            最后更新：2026 年 1 月 15 日 · 变更通知将提前 30 天发送至数据保护联系人
          </p>
        </div>
        <DataTable columns={COLUMNS} rows={PROCESSORS} rowKey="name" caption="次级数据处理者列表" />
      </section>
    </div>
  );
}

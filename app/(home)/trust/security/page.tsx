import { Key, Lock, Network, Server, Shield } from "lucide-react";
import { SubPageCardGrid, SubPageCta, SubPageHero, SubPageSection } from "@/components/marketing";

const SECURITY_LAYERS = [
  {
    icon: <Server className="size-6 text-indigo-500" aria-hidden="true" />,
    title: "物理隔离多租户",
    desc: "每个企业租户的数据存储在独立的加密数据库实例中，从根源杜绝跨租户数据泄露。",
  },
  {
    icon: <Network className="size-6 text-blue-500" aria-hidden="true" />,
    title: "零信任网络架构",
    desc: "基于 mTLS 的服务间通信、微分段网络与持续身份验证，绝不隐式信任任何节点。",
  },
  {
    icon: <Lock className="size-6 text-emerald-500" aria-hidden="true" />,
    title: "端到端加密",
    desc: "所有静态数据 AES-256 加密、传输层 TLS 1.3、应用层字段级加密三重保护。",
  },
  {
    icon: <Key className="size-6 text-amber-500" aria-hidden="true" />,
    title: "密钥管理 (HSM)",
    desc: "企业专属的硬件安全模块管理加密密钥，支持 BYOK（自带密钥）模式。",
  },
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: Shield, text: "Multi-Tenant Security" }}
        title="多租户安全架构"
        subtitle="物理级数据隔离、零信任网络与端到端加密——为工业级数据安全构筑纵深防御体系。"
        accentColor="purple"
      />
      <SubPageSection>
        <SubPageCardGrid cards={SECURITY_LAYERS} columns={2} />
      </SubPageSection>
      <SubPageCta
        title="需要详细的安全白皮书？"
        description="我们的安全团队将为您提供完整的架构与合规文档。"
        cta={{ label: "联系安全团队", href: "/contact" }}
      />
    </div>
  );
}

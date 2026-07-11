import { ArrowRight, Key, Lock, Network, Server, Shield } from "lucide-react";
import Link from "next/link";

const SECURITY_LAYERS = [
  {
    icon: <Server className="size-6 text-indigo-500" />,
    title: "物理隔离多租户",
    desc: "每个企业租户的数据存储在独立的加密数据库实例中，从根源杜绝跨租户数据泄露。",
  },
  {
    icon: <Network className="size-6 text-blue-500" />,
    title: "零信任网络架构",
    desc: "基于 mTLS 的服务间通信、微分段网络与持续身份验证，绝不隐式信任任何节点。",
  },
  {
    icon: <Lock className="size-6 text-emerald-500" />,
    title: "端到端加密",
    desc: "所有静态数据 AES-256 加密、传输层 TLS 1.3、应用层字段级加密三重保护。",
  },
  {
    icon: <Key className="size-6 text-amber-500" />,
    title: "密钥管理 (HSM)",
    desc: "企业专属的硬件安全模块管理加密密钥，支持 BYOK（自带密钥）模式。",
  },
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_0,transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
              <Shield className="size-3" /> Multi-Tenant Security
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">多租户安全架构</h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              物理级数据隔离、零信任网络与端到端加密——为工业级数据安全构筑纵深防御体系。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SECURITY_LAYERS.map((layer) => (
              <div
                key={layer.title}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4"
              >
                {layer.icon}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{layer.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tighter">需要详细的安全白皮书？</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            联系安全团队 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

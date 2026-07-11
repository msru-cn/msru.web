import { Shield } from "lucide-react";
import Link from "next/link";
import { LegalDoc } from "@/components/marketing";

export default function PrivacyPage() {
  return (
    <LegalDoc icon={Shield} title="隐私策略" meta="最后更新：2026 年 1 月 1 日 · 生效日期：2026 年 1 月 15 日">
      <h2>1. 数据控制者</h2>
      <p>MSRU Inc.（以下简称"我们"）是您个人数据的控制者。我们的注册地址为中国广东省珠海市。</p>

      <h2>2. 我们收集的信息</h2>
      <p>我们可能收集以下类型的个人信息：</p>
      <ul>
        <li>身份信息（姓名、电子邮箱、公司名称）</li>
        <li>使用数据（访问日志、功能使用统计）</li>
        <li>设备信息（IP 地址、浏览器类型、操作系统）</li>
        <li>Cookie 与追踪技术数据</li>
      </ul>

      <h2>3. 数据使用目的</h2>
      <p>我们将收集的数据用于：提供和维护服务、改善用户体验、安全防护、法律合规义务、以及经您明确同意的营销通信。</p>

      <h2>4. 数据共享</h2>
      <p>
        我们不会出售您的个人数据。仅在以下情况下共享：执行合同义务的服务提供商（参见
        <Link href="/trust/sub-processors">次级处理者列表</Link>）、法律要求、或经您明确同意。
      </p>

      <h2>5. 数据保留</h2>
      <p>我们在实现收集目的所需的最短期限内保留您的数据。账户关闭后，数据将在 90 天内从活跃系统中删除。</p>

      <h2>6. 您的权利</h2>
      <p>根据适用法律，您享有访问、更正、删除、限制处理、数据可携带以及反对处理的权利。</p>

      <h2>7. 联系我们</h2>
      <p>
        如有隐私相关问题，请联系我们的数据保护官：<a href="mailto:dpo@msru.ai">dpo@msru.ai</a>
      </p>
    </LegalDoc>
  );
}

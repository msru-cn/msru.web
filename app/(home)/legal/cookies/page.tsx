import { Cookie } from "lucide-react";
import { LegalDoc } from "@/components/marketing";

export default function CookiesPage() {
  return (
    <LegalDoc icon={Cookie} title="Cookie 政策" meta="最后更新：2026 年 1 月 1 日">
      <h2>1. 什么是 Cookie</h2>
      <p>Cookie 是存储在您设备上的小型数据文件，帮助我们改善您的浏览体验、分析网站流量并提供个性化内容。</p>

      <h2>2. 我们使用的 Cookie 类型</h2>
      <h3>必要性 Cookie</h3>
      <p>这些 Cookie 对网站的基本功能至关重要，无法被禁用。它们用于维护会话状态、安全验证和负载均衡。</p>

      <h3>分析性 Cookie</h3>
      <p>帮助我们了解访客如何与网站互动。所有分析数据均匿名聚合处理。</p>

      <h3>功能性 Cookie</h3>
      <p>用于记住您的偏好设置，如语言选择和主题模式。</p>

      <h3>营销 Cookie</h3>
      <p>仅在您明确同意后启用，用于提供与您相关的产品信息。</p>

      <h2>3. 管理 Cookie</h2>
      <p>您可以通过浏览器设置随时管理或删除 Cookie。请注意，禁用某些 Cookie 可能影响网站的部分功能。</p>

      <h2>4. 联系我们</h2>
      <p>
        如有关于 Cookie 使用的疑问，请联系 <a href="mailto:privacy@msru.ai">privacy@msru.ai</a>。
      </p>
    </LegalDoc>
  );
}

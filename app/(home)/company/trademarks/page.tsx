import { Copyright } from "lucide-react";
import { LegalDoc } from "@/components/marketing";

export default function TrademarksPage() {
  return (
    <LegalDoc icon={Copyright} title="商标与知识产权" meta="MSRU 商标使用指南与知识产权保护声明。">
      <h2>注册商标</h2>
      <p>以下为 MSRU Inc. 的注册商标或正在申请注册的商标：</p>
      <ul>
        <li>
          <strong>MSRU®</strong> — 公司名称与主品牌标识
        </li>
        <li>
          <strong>MSRU Platform®</strong> — 智能制造统一平台
        </li>
        <li>
          <strong>MSRU Edge Box™</strong> — 工业边缘计算硬件设备
        </li>
        <li>
          <strong>Industrial Brain™</strong> — 工业大脑 AI 引擎
        </li>
      </ul>

      <h2>使用准则</h2>
      <h3>✅ 允许的使用场景</h3>
      <ul>
        <li>在技术文档或文章中引用 MSRU 产品名称（须保留 ® 或 ™ 标记）</li>
        <li>在合作伙伴营销材料中按照品牌指南使用 MSRU Logo</li>
        <li>在学术研究或评测报告中引用</li>
      </ul>

      <h3>❌ 禁止的使用场景</h3>
      <ul>
        <li>将 MSRU 商标用作您自己的产品或公司名称</li>
        <li>修改、扭曲或以误导性方式使用 MSRU 品牌资产</li>
        <li>在暗示 MSRU 背书或关联的场景中未经授权使用</li>
      </ul>

      <h2>侵权举报</h2>
      <p>
        如发现未经授权的商标使用，请联系 <a href="mailto:legal@msru.ai">legal@msru.ai</a>。
      </p>
    </LegalDoc>
  );
}

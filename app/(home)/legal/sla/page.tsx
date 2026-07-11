import { ShieldCheck } from "lucide-react";
import { LegalDoc } from "@/components/marketing";

export default function SLAPage() {
  return (
    <LegalDoc icon={ShieldCheck} title="SLA 与退款政策" meta="最后更新：2026 年 1 月 1 日">
      <h2>1. 服务可用性承诺</h2>
      <p>MSRU 承诺 SaaS 云服务的月度可用性不低于 99.95%。可用性计算排除计划维护窗口。</p>

      <h2>2. 可用性等级与信用额度</h2>
      <table>
        <thead>
          <tr>
            <th>月度可用性</th>
            <th>服务信用额度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>≥ 99.95%</td>
            <td>无</td>
          </tr>
          <tr>
            <td>99.0% — 99.95%</td>
            <td>月费 10%</td>
          </tr>
          <tr>
            <td>95.0% — 99.0%</td>
            <td>月费 25%</td>
          </tr>
          <tr>
            <td>&lt; 95.0%</td>
            <td>月费 50%</td>
          </tr>
        </tbody>
      </table>

      <h2>3. 服务信用申请</h2>
      <p>客户须在停机事件发生后 30 个工作日内提交信用申请。信用额度将在下一个计费周期自动抵扣。</p>

      <h2>4. 退款政策</h2>
      <p>
        年度订阅客户在首次购买后 30 天内可申请全额退款。超过 30
        天后，按剩余服务期限按比例退款（扣除已使用期间的标准月费）。
      </p>

      <h2>5. 排除条件</h2>
      <p>以下情况不适用 SLA 信用：客户网络故障、不可抗力事件、客户自行修改导致的问题、以及计划维护窗口内的短暂中断。</p>
    </LegalDoc>
  );
}

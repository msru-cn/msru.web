import {
  AlertTriangle,
  ArrowRight,
  Eye,
  FileCheck2,
  Fingerprint,
  LineChart,
  Microscope,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { StatBlock } from "@/components/marketing";
import { HeroMockup } from "../../../../components/hero-mockup";

const QMS_STATS = [
  { value: "60", unit: "%", label: "客诉拦截率提升" },
  { value: "85", unit: "%", label: "检验人工成本削减" },
  { value: "100", unit: "%", label: "异常问题闭环率" },
  { value: "0", unit: "容忍", label: "合规审查数据篡改" },
];

export default function QMSPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-rose-500/30">
      {/* 1. 极致震撼的 HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden border-b border-border/50">
        {/* 背景动态光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] md:w-[1200px] md:h-[700px] bg-rose-500/15 dark:bg-rose-600/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute -top-40 right-10 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero 内容 */}
        <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 text-rose-500 font-semibold text-sm mb-8 ring-1 ring-rose-500/20 backdrop-blur-sm">
            <Sparkles className="size-4" /> MSRU QMS 全面质量基座
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-8 leading-[1.1] text-balance">
            让品质缺陷， <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-red-400 dark:from-rose-400 dark:to-red-300">
              无所遁形。
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-balance">
            超越检验的数字化质量管家。将单纯的事后检测升级为事态预测，把 IQA、PQA、OQA 与供应商评级打通。
            基于实时数据建立全面标准化质量防线，捍卫企业声誉。
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-medium hover:scale-105 transition-transform shadow-2xl shadow-primary/20 hover:shadow-primary/40"
            >
              获取企业版报价
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-transparent border border-border text-foreground text-lg font-medium hover:bg-muted transition-colors"
            >
              阅读架构白皮书 <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>

        {/* 悬浮的Dashboard Mockup 视觉元素 */}
        <HeroMockup theme="rose" />
      </section>

      {/* 2. 核心指标统计 - Apple 风格大字 */}
      <StatBlock heading="不是检验。是根本的预防。" accentColor="rose" stats={QMS_STATS} />

      {/* 3. 设计哲学宣言 */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          每一次抽检，
          <br />
          都将驱动流程进化。
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          QMS 不仅是一个质检记录电子化工具。其背后依托的 CAPA (纠正与预防措施) 与 8D
          闭环跟踪系统使得每一次异常上报都会自动驱动上游供应链的改善或制造工程的标准修订。不解决根因，流程永不关停。
        </p>
      </section>

      {/* 4. 八宫格超大 BENTO GRID */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          {/* Card 1: 检验管理 (Large) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-rose-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Microscope className="size-12 text-rose-500 mb-8" />
            <h3 className="text-3xl font-bold mb-4">全面检验管控引擎</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              涵盖来料检验 (IQC)、首检巡检 (IPQC)、制程检验 (PQC) 到最终出货检验 (OQC)。支持按 AQL
              表实现动态放宽与加严抽样转换逻辑。全面适配无线测量仪器自动数据透传。
            </p>
            {/* Visual element */}
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-2xl transform rotate-12 flex flex-col gap-3 p-4 opacity-50 group-hover:-translate-y-4 group-hover:rotate-6 transition-all duration-700">
              <div className="p-4 border-2 border-dashed border-rose-500/30 rounded-lg flex items-center justify-center h-full">
                <ShieldCheck className="size-20 text-rose-500/50" />
              </div>
            </div>
          </div>

          {/* Card 2: 异常闭环 (Medium) */}
          <div className="md:col-span-1 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-rose-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tr from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="size-10 text-rose-500" />
              <h3 className="text-2xl font-bold">CAPA 与 8D 闭环</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              严格贯彻围堵、排查、根因分析、长效预防四大阶段。强制流转多部门会签，并自动归档形成集团知识库 FMEA
              的原始参考。
            </p>
          </div>

          {/* Card 3: 供应商评审 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-rose-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-bl from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Scale className="size-10 text-rose-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">供应商质量绩效 (SQM)</h3>
            <p className="text-muted-foreground text-sm">
              按批次退货率、让步接收率自动绘制多维供应商画像，实现黑白名单准入直连拦截。
            </p>
          </div>

          {/* Card 4: SPC 分析 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-rose-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-t from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <LineChart className="size-10 text-rose-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">多维 SPC 及直通车</h3>
            <p className="text-muted-foreground text-sm">
              对关键特性参数自动生成 CPK 控制图并执行西电八项判异准则，自动抛出异常预警事件。
            </p>
          </div>

          {/* Card 5: 文控体系 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-rose-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <FileCheck2 className="size-12 text-zinc-400 group-hover:text-rose-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">受控文档版本审批</h3>
          </div>

          {/* Card 6: 仪器校验 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-rose-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <Eye className="size-12 text-zinc-400 group-hover:text-rose-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">MSA 与量具校准体系</h3>
          </div>

          {/* Card 7: 合规追溯(Long) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-rose-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tl from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <Fingerprint className="size-10 text-rose-500" />
              <h3 className="text-2xl font-bold">FDA 21 CFR Part 11 合规内审级</h3>
            </div>
            <p className="text-muted-foreground">
              为高端制造业提供最高等阶的数字防串改电子签名（E-Signature）与全链路不可篡改审计日志流水（Audit
              Trail），轻松应对最严苛的跨国采购审查框架。
            </p>
          </div>
        </div>
      </section>

      {/* 9. 巨型底部 CTA */}
      <section className="relative py-32 px-6 overflow-hidden bg-rose-600 dark:bg-rose-900 text-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-400/30 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ShieldCheck className="size-20 mx-auto mb-8 opacity-80" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            用质量信誉
            <br />
            拓宽您的全球市场。
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto">
            质量不是检验出来的，是设计和管控出来的。立即部署零缺陷的高压质量生态墙。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="h-16 px-10 inline-flex items-center justify-center rounded-full bg-white text-rose-600 text-xl font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              预约 QMS 功能演示
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

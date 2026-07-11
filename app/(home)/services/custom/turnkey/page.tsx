import {
  ArrowRight,
  BookOpen,
  Box,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  CreditCard,
  FileCode,
  HelpCircle,
  Layers,
  Lock,
  Package,
  ShieldCheck,
  Target,
  Trophy,
} from "lucide-react";
import Link from "next/link";

// --- 静态数据配置区域 ---
const TURNKEY_PACKAGES = [
  {
    id: "plugin",
    title: "单点插件定制包",
    icon: Layers,
    priceLabel: "指导起步价",
    price: "¥ 30,000",
    time: "2 - 4 周",
    warranty: "3 个月免费维保",
    description: "针对现有 MSRU 标准功能的轻量级增强，或单一硬件设备/第三方系统的点对点协议集成。",
    target: "适用于需求边界极其清晰，不触及核心底层逻辑的单一业务增强。",
    useCases: [
      "特定的电子秤/扫码枪/RFID协议解析",
      "对接外部单一系统的 API 接口",
      "在标准页面上增加 1-2 个专属业务校验逻辑",
    ],
    deliverables: ["插件级独立代码包", "接口调用说明文档", "线上环境热部署支持"],
  },
  {
    id: "subsystem",
    title: "子系统完整重构包",
    icon: Code2,
    priceLabel: "项目基准价",
    price: "¥ 150,000",
    time: "2 - 3 个月",
    warranty: "6 个月免费维保",
    popular: true,
    description: "基于 MSRU 底座，为您量身打造包含独立前端界面、专属数据库表与后台微服务的完整业务子系统。",
    target: "适用于企业有独特的非标业务流程（如特殊的首件检验逻辑、专属的返工返修流程）。",
    useCases: [
      "半导体深度的 Defect 追踪防呆系统",
      "复杂的批次谱系/追溯可视化系统",
      "医药行业合规增强模块 (21 CFR Part 11)",
    ],
    deliverables: [
      "完整的子系统源码",
      "业务蓝图与详细设计文档 (BBP)",
      "关键用户操作手册 (SOP)",
      "原厂工程师现场实施与培训",
    ],
  },
  {
    id: "enterprise",
    title: "全场景私有化重塑",
    icon: Cpu,
    priceLabel: "战略合作",
    price: "需深度调研",
    time: "按里程碑排期",
    warranty: "1 年起底维保",
    description: "针对极度非标的“暗灯工厂”或特殊行业，基于 MSRU 底座进行开天辟地式的全案定制与深度私有化改造。",
    target: "适用于对系统掌控力要求极高，存在大量异构老旧系统需要打通的集团级大客户。",
    useCases: [
      "异构 ERP/WMS/MES 骨干网全链路彻底打通",
      "极致深度的国产化信创适配底层重构",
      "专属私有云高可用灾备架构搭建",
    ],
    deliverables: ["底座级白盒源码 (含二次开发权)", "企业级数字化顶层规划", "长期的原厂驻场与联合研发中心挂牌"],
  },
];

const MILESTONES = [
  {
    title: "需求冻结与蓝图确认",
    percent: "30%",
    desc: "原厂 BA 进场调研，输出并双方签字确认《业务蓝图设计文档》与《原型界面》，明确范围，冻结需求。",
  },
  {
    title: "封闭研发与 Alpha 演示",
    percent: "0%",
    desc: "研发团队进入全封闭开发，期间定期组织系统演示，确保系统走向与蓝图设计完全吻合。",
  },
  {
    title: "UAT 验收与上线",
    percent: "40%",
    desc: "系统部署至客户测试环境，指导客户完成 UAT (用户接受度测试)。确认无误后割接上线。",
  },
  {
    title: "稳定运行与质保交付",
    percent: "30%",
    desc: "系统在生产环境稳定运行 1-3 个月后，移交全部文档资产，进入免费维保期。",
  },
];

const FAQS = [
  {
    q: "如果在开发过程中，我们的业务需求发生了变更怎么办？",
    a: "交钥匙工程的核心是“范围清晰”。在蓝图确认（Milestone 1）之前，需求可随时调整。一旦签字冻结进入开发期，轻微的文案或非逻辑性调整免费支持；如遇重大逻辑变更，我们将启动标准的 CCR（变更控制请求）流程，单独评估变更工作量与费用，绝不含糊拖延。",
  },
  {
    q: "交付后，我们能拿到源代码吗？可以自己二次开发吗？",
    a: "对于定制开发的独立业务模块（插件/子系统），我们交付 100% 且无混淆的源代码及开发说明。只要您购买了相应的平台开发者授权，您的自有 IT 团队完全可以接手进行后续的二次开发与维护。",
  },
  {
    q: "交钥匙工程包含客户现场的实施和培训吗？",
    a: "对于“子系统”及以上的定制包，报价均默认包含一定天数的原厂高级实施顾问现场支持（培训关键用户、协助主数据导入、陪产护航）。具体差旅费可选择包干或实报实销。",
  },
  {
    q: "免费维保期结束后，后续的服务怎么收费？",
    a: "免费维保期（通常为 3-12 个月）过后，您可以选择购买年度 SLA 维保服务（通常为合同总金额的 15%-20%/年），享受持续的 Bug 修复、系统巡检与新版本架构兼容支持。",
  },
];

export default function TurnkeyServicePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 text-foreground overflow-x-hidden selection:bg-purple-500/30">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 text-center border-b border-border/50 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-linear-to-b from-purple-600/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="z-10 relative max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 backdrop-blur-md">
            <Package className="mr-2 h-4 w-4" />
            <span>交钥匙工程 (Turnkey Solutions)</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm leading-tight">
            结果导向，
            <br className="hidden md:block" />
            <span className="text-purple-400">预算兜底的闭环交付。</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            告别无休止的需求蔓延与预算超支。您只需提出业务目标，我们将承担全流程研发风险，给您一个开箱即用、文档齐全的完整数字系统。
          </p>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-300">
            <span className="flex items-center">
              <Target className="size-4 mr-2 text-purple-500" /> 目标可控
            </span>
            <span className="flex items-center">
              <Lock className="size-4 mr-2 text-purple-500" /> 预算锁死
            </span>
            <span className="flex items-center">
              <ShieldCheck className="size-4 mr-2 text-purple-500" /> 原厂质保
            </span>
          </div>
        </div>
      </section>

      {/* 2. 为什么选择交钥匙 (对比人天) */}
      <section className="py-20 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="size-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Box className="size-6" />
              </div>
              <h3 className="text-xl font-bold dark:text-white text-zinc-900">甩手掌柜的体验</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                无需您的 IT 团队深度参与繁琐的代码审查与项目管理。我们将为您配备专属
                PM，定期汇报进度，您只需在关键里程碑进行决策与验收。
              </p>
            </div>
            <div className="space-y-4">
              <div className="size-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <CreditCard className="size-6" />
              </div>
              <h3 className="text-xl font-bold dark:text-white text-zinc-900">财务预算绝对安全</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                一次性评估，一口价合同。只要在确认的蓝图范围内，任何由技术难点或预估失误导致的额外工时成本，全部由 MSRU
                原厂承担。
              </p>
            </div>
            <div className="space-y-4">
              <div className="size-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Trophy className="size-6" />
              </div>
              <h3 className="text-xl font-bold dark:text-white text-zinc-900">结果与质量对赌</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                不仅交付代码，更交付业务结果。系统未达验收标准绝不收尾，交付后配套长达数月的免费维保期，彻底打消上线初期的阵痛顾虑。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 核心定制包矩阵 */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6">
              标准化定制服务矩阵
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto">
              根据您的业务改动深度，我们将交钥匙工程划分为三个等级。所有报价均为基准参考，实际金额将以蓝图调研后的最终工作量为准。
            </p>
          </div>

          <div className="space-y-12">
            {TURNKEY_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`flex flex-col lg:flex-row rounded-3xl border bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-300 ${
                  pkg.popular
                    ? "border-purple-500 shadow-2xl shadow-purple-500/10 scale-[1.02] z-10 relative"
                    : "border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-8 bg-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-b-xl hidden lg:block">
                    最受企业欢迎
                  </div>
                )}

                {/* 左侧：价格与基础信息 */}
                <div className="p-8 lg:p-12 lg:w-1/3 bg-zinc-50/50 dark:bg-zinc-950/30 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-center">
                  <pkg.icon className="size-12 text-purple-500 mb-6" />
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">{pkg.title}</h3>
                  <div className="mb-6">
                    <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">{pkg.priceLabel}</div>
                    <div className="text-4xl font-extrabold text-purple-600 dark:text-purple-400">{pkg.price}</div>
                  </div>
                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
                      <Clock className="size-4 mr-3 text-zinc-400" /> 预估周期:{" "}
                      <span className="font-semibold ml-2">{pkg.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
                      <ShieldCheck className="size-4 mr-3 text-zinc-400" /> 售后保障:{" "}
                      <span className="font-semibold ml-2">{pkg.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* 右侧：详细范围与交付物 */}
                <div className="p-8 lg:p-12 lg:w-2/3 flex flex-col justify-center">
                  <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">{pkg.description}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
                    <strong className="text-zinc-900 dark:text-white">适用场景：</strong>
                    {pkg.target}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-4 flex items-center">
                        <Target className="size-4 mr-2 text-purple-500" /> 典型案例
                      </h4>
                      <ul className="space-y-3">
                        {pkg.useCases.map((useCase) => (
                          <li key={useCase} className="flex items-start text-sm text-zinc-600 dark:text-zinc-400">
                            <div className="size-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-1.5 mr-3 shrink-0" />
                            <span className="leading-snug">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-4 flex items-center">
                        <Package className="size-4 mr-2 text-purple-500" /> 交付物清单
                      </h4>
                      <ul className="space-y-3">
                        {pkg.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-start text-sm text-zinc-600 dark:text-zinc-400">
                            <CheckCircle2 className="size-4 mr-2 text-purple-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 标准付款与验收里程碑 */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">按图施工，见效付款</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              我们将风险前置，采用业界标准的 3-4-3 里程碑验收模式，保障客户资金安全。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-zinc-100 dark:bg-zinc-800/50 z-0" />

            {MILESTONES.map((stone, index) => (
              <div key={stone.title} className="relative z-10 flex flex-col items-center text-center p-4">
                <div className="size-24 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl flex flex-col items-center justify-center mb-6 relative overflow-hidden group">
                  <div
                    className="absolute inset-x-0 bottom-0 bg-purple-100 dark:bg-purple-900/30 transition-all duration-500"
                    style={{ height: stone.percent }}
                  />
                  <span className="text-2xl font-black text-zinc-900 dark:text-white relative z-10">
                    {stone.percent}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest relative z-10">
                    {index === 1 ? "不付款" : "阶段款"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">{stone.title}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{stone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 移交您的资产 */}
      <section className="py-24 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                不留任何黑盒，
                <br />
                移交 100% 数字资产。
              </h2>
              <p className="text-purple-200 text-lg leading-relaxed">
                外包行业最怕的是“被绑定”。我们的交钥匙工程在结案时，将向您移交完整的工程资产体系，确保您的 IT
                团队具备完全的接管能力。
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center">
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <FileCode className="size-5 text-purple-300" />
                  </div>
                  <span className="font-medium text-lg">无混淆的纯净源代码及注释</span>
                </li>
                <li className="flex items-center">
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <Box className="size-5 text-purple-300" />
                  </div>
                  <span className="font-medium text-lg">数据库表结构与字典文档 (ERD)</span>
                </li>
                <li className="flex items-center">
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <BookOpen className="size-5 text-purple-300" />
                  </div>
                  <span className="font-medium text-lg">基于您实际业务的运维与操作手册</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square w-full max-w-md mx-auto bg-linear-to-tr from-purple-800 to-purple-500 rounded-3xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-zinc-950 rounded-[22px] flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                  <div className="text-center relative z-10">
                    <Code2 className="size-20 text-purple-400 mx-auto mb-6" />
                    <div className="text-2xl font-mono font-bold text-white mb-2">GIT REPOSITORY</div>
                    <div className="text-sm font-mono text-purple-300/60">ACCESS GRANTED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 flex justify-center items-center gap-2">
              <HelpCircle className="size-8 text-purple-500" /> 常见问题解答
            </h2>
          </div>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs"
              >
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">{faq.q}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 底部 CTA */}
      <section className="relative py-32 overflow-hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="z-10 relative max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
            准备好锁定您的专属方案了吗？
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            立即预约我们的原厂高级业务顾问。我们将在 1 个工作日内响应，并为您提供免费的初步需求咨询与报价预估。
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-purple-600 text-white text-lg font-bold hover:bg-purple-700 hover:scale-105 transition-all shadow-xl shadow-purple-500/20"
            >
              预约免费需求评估 <ArrowRight className="ml-2 size-5" />
            </Link>
            <Link
              href="/services/custom/man-day"
              className="h-14 px-10 inline-flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-lg font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              看看灵活的专家人天包
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

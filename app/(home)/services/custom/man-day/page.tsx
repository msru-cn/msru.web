import {
  ArrowRight,
  Briefcase,
  Calculator,
  CheckCircle2,
  Clock,
  Code,
  FileText,
  HelpCircle,
  Network,
  RefreshCcw,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";

// --- 静态数据配置区域，方便后期直接修改价格和文案 ---
const PRICING_ROLES = [
  {
    id: "architect",
    title: "系统架构师",
    icon: Network,
    description: "负责 MSRU 底层高可用设计、微服务拆分、性能调优与复杂集成方案敲定。确保系统在未来 5-10 年内的扩展性。",
    tiers: [
      {
        level: "中级架构师",
        exp: "5-8 年经验",
        basePrice: "¥ 3,500",
        outputs: ["子系统物理模型设计", "API 契约文档编制", "标准中间件部署方案", "模块级代码 Review"],
        steps: [
          { range: "1-19 人天", price: "¥ 3,500/天" },
          { range: "20-49 人天", price: "¥ 3,300/天" },
          { range: "50+ 人天", price: "¥ 3,000/天" },
        ],
      },
      {
        level: "高级架构师",
        exp: "8-12 年经验",
        basePrice: "¥ 5,000",
        outputs: ["企业级微服务拓扑设计", "高并发/高可用方案输出", "核心公共组件库封装", "疑难 Bug 攻坚与调优"],
        steps: [
          { range: "1-19 人天", price: "¥ 5,000/天" },
          { range: "20-49 人天", price: "¥ 4,700/天" },
          { range: "50+ 人天", price: "¥ 4,300/天" },
        ],
        highlight: true,
      },
      {
        level: "首席专家",
        exp: "12年以上 / 原厂核心",
        basePrice: "¥ 8,000",
        outputs: ["整体 IT 蓝图与顶层设计", "亿级数据量架构重构", "跨国分布式数据合规方案", "技术委员会级评审把关"],
        steps: [
          { range: "按需邀约", price: "¥ 8,000/天" },
          { range: "长协打包", price: "一事一议" },
        ],
      },
    ],
  },
  {
    id: "ba",
    title: "资深业务顾问 (BA)",
    icon: Briefcase,
    description: "深入产线现场，梳理非标业务 SOT，将客户语言精准转化为软件工程需求，避免“重做”灾难。",
    tiers: [
      {
        level: "中级顾问",
        exp: "3-5 年经验",
        basePrice: "¥ 2,000",
        outputs: ["基础业务流程图 (Visio/Miro)", "功能点清单 (Excel)", "标准原型线框图绘制", "会议纪要与需求收集"],
        steps: [
          { range: "1-19 人天", price: "¥ 2,000/天" },
          { range: "20-49 人天", price: "¥ 1,850/天" },
          { range: "50+ 人天", price: "¥ 1,700/天" },
        ],
      },
      {
        level: "高级顾问",
        exp: "5-10 年行业经验",
        basePrice: "¥ 3,500",
        outputs: [
          "深度跨部门业务蓝图 (BBP)",
          "高保真可交互原型 (Axure)",
          "PRD 产品需求规格说明书",
          "旧系统数据迁移映射逻辑",
        ],
        steps: [
          { range: "1-19 人天", price: "¥ 3,500/天" },
          { range: "20-49 人天", price: "¥ 3,250/天" },
          { range: "50+ 人天", price: "¥ 2,900/天" },
        ],
        highlight: true,
      },
      {
        level: "行业专家",
        exp: "深耕特定制造/半导体领域",
        basePrice: "¥ 6,000",
        outputs: ["行业最佳实践导入方案", "全厂级数字化转型路线图", "高层汇报与业务价值测算", "变革管理 (CM) 推进支持"],
        steps: [
          { range: "按需邀约", price: "¥ 6,000/天" },
          { range: "长协打包", price: "一事一议" },
        ],
      },
    ],
  },
  {
    id: "rd",
    title: "研发工程师 (Full-stack / Backend / Frontend)",
    icon: Code,
    description: "精通 MSRU 底座源码的资深 Coder，负责核心业务逻辑、高并发接口编写及前端交互还原。",
    tiers: [
      {
        level: "中级工程师",
        exp: "2-4 年经验",
        basePrice: "¥ 1,500",
        outputs: ["标准 CRUD 接口开发", "UI 页面组件还原", "基础单元测试编写", "常规 Bug 修复"],
        steps: [
          { range: "1-19 人天", price: "¥ 1,500/天" },
          { range: "20-49 人天", price: "¥ 1,400/天" },
          { range: "50+ 人天", price: "¥ 1,250/天" },
        ],
      },
      {
        level: "高级工程师",
        exp: "5-8 年经验",
        basePrice: "¥ 2,500",
        outputs: [
          "复杂状态机流转逻辑开发",
          "核心事务处理与并发控制",
          "第三方异构系统 API 深度对接",
          "性能瓶颈排查与 SQL 优化",
        ],
        steps: [
          { range: "1-19 人天", price: "¥ 2,500/天" },
          { range: "20-49 人天", price: "¥ 2,300/天" },
          { range: "50+ 人天", price: "¥ 2,000/天" },
        ],
        highlight: true,
      },
      {
        level: "研发专家",
        exp: "8年以上 / 底座级开发者",
        basePrice: "¥ 4,000",
        outputs: [
          "MSRU 底座插件级深度定制",
          "私有化底层驱动开发",
          "框架级疑难杂症 (OOM/死锁) 攻坚",
          "自动化测试框架搭建",
        ],
        steps: [
          { range: "1-19 人天", price: "¥ 4,000/天" },
          { range: "20-49 人天", price: "¥ 3,700/天" },
          { range: "50+ 人天", price: "¥ 3,400/天" },
        ],
      },
    ],
  },
  {
    id: "devops",
    title: "实施与运维专家",
    icon: Wrench,
    description: "把控现场部署节奏，负责软硬件联调、数据初始化、网络环境规划与最终用户培训赋能。",
    tiers: [
      {
        level: "中级实施",
        exp: "1-3 年经验",
        basePrice: "¥ 1,200",
        outputs: ["主数据清洗与导入执行", "基础操作手册编写", "现场硬件 (PDA/打印机) 简单调试", "一线驻场跟线支持"],
        steps: [
          { range: "1-19 人天", price: "¥ 1,200/天" },
          { range: "20-49 人天", price: "¥ 1,100/天" },
          { range: "50+ 人天", price: "¥ 950/天" },
        ],
      },
      {
        level: "高级实施/项目经理",
        exp: "4-7 年经验",
        basePrice: "¥ 2,200",
        outputs: [
          "整体上线割接方案 (Cut-over) 制定",
          "现场复杂网络与容器化环境部署",
          "关键用户培训 (TTT)",
          "上线风险预案与管控",
        ],
        steps: [
          { range: "1-19 人天", price: "¥ 2,200/天" },
          { range: "20-49 人天", price: "¥ 2,050/天" },
          { range: "50+ 人天", price: "¥ 1,800/天" },
        ],
        highlight: true,
      },
      {
        level: "运维专家",
        exp: "精通 K8s / 数据库集群",
        basePrice: "¥ 3,500",
        outputs: [
          "私有云/混合云高可用集群搭建",
          "自动化 CI/CD 流水线构建",
          "灾备与数据恢复演练 (DR)",
          "深层服务器安全加固",
        ],
        steps: [
          { range: "1-19 人天", price: "¥ 3,500/天" },
          { range: "20-49 人天", price: "¥ 3,250/天" },
          { range: "50+ 人天", price: "¥ 2,900/天" },
        ],
      },
    ],
  },
];

const FAQS = [
  {
    q: "人天是怎么计算的？如何保证工作量不被虚报？",
    a: "我们采用「工单预估 + 工时日报」的双重确认机制。任何需求开发前，技术顾问会先提供工作量预估单（精确到 0.5 天），您签字确认后才开始开发。开发过程中，工程师每天会在系统中登记工时明细，每周向您推送工时消耗报表，做到100%透明。",
  },
  {
    q: "如果中途不需要了，剩下的人天包可以退款吗？",
    a: "人天资源包有效期通常为自签订之日起 12 个月。若中途由于项目原因终止，剩余未发生消耗的标准化人天可在扣除 10% 统筹违约金后申请退还；部分大客户年框合同支持跨子项目流转使用，绝不浪费。",
  },
  {
    q: "我可以指定某位特定的工程师吗？",
    a: "原则上我们根据项目紧急程度和技能图谱进行资源池调配。但对于长期购买大型资源包（50人天以上）的客户，我们提供「核心人员锁定期」服务，确保关键角色在项目周期内不被随意替换。",
  },
  {
    q: "人天包包含差旅费用吗？",
    a: "明码标价均为纯服务费（不含税金差异，标准报价含 6% 增值税专票）。如需原厂专家前往客户现场出差，差旅费（机票/高铁及住宿）采取实报实销原则，或按每天固定标准另行收取出差补贴。",
  },
];

export default function ManDayPricingPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 text-foreground overflow-x-hidden selection:bg-purple-500/30">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 text-center border-b border-border/50 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-linear-to-t from-purple-600/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="z-10 relative max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 backdrop-blur-md">
            <Clock className="mr-2 h-4 w-4" />
            <span>MSRU 专家人天包 (Man-Day Resources)</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm leading-tight">
            顶尖原厂智力，
            <br className="hidden md:block" />
            <span className="text-purple-400">按需注入您的战队。</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            当业务需求高度不确定，或您希望将系统源码的控制权牢牢掌握在自己手中时。购买人天资源包，让最懂 MSRU
            底座的专家与您的 IT 团队并肩作战。
          </p>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-300">
            <span className="flex items-center">
              <CheckCircle2 className="size-4 mr-2 text-purple-500" /> 明码标价
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="size-4 mr-2 text-purple-500" /> 阶梯折扣
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="size-4 mr-2 text-purple-500" /> 产出透明
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="size-4 mr-2 text-purple-500" /> 灵活抵扣
            </span>
          </div>
        </div>
      </section>

      {/* 2. 为什么选择人天模式 */}
      <section className="py-20 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="size-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Zap className="size-6" />
              </div>
              <h3 className="text-xl font-bold dark:text-white text-zinc-900">绝对的敏捷与灵活</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                告别冗长的“需求变更走商务审批”流程。在总人天池的框架下，随时调整开发优先级，今天提需求，明天出方案，后天写代码。
              </p>
            </div>
            <div className="space-y-4">
              <div className="size-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="text-xl font-bold dark:text-white text-zinc-900">核心架构不走样</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                外包团队往往为了赶进度牺牲架构质量。原厂专家的介入，确保每一行定制代码都符合 MSRU
                官方标准规范，保证未来的平滑升级。
              </p>
            </div>
            <div className="space-y-4">
              <div className="size-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <RefreshCcw className="size-6" />
              </div>
              <h3 className="text-xl font-bold dark:text-white text-zinc-900">技术赋能与知识转移</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                这不仅是代工服务，更是手把手的带教。我们的专家在输出代码的同时，将底层逻辑与设计思想完整传递给客户自有的
                IT 团队。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 明码标价核心矩阵 */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6">
              按角色职级体系公开报价
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto">
              拒绝黑盒报价，每一种智力资源都有其明确的价值标签与可衡量的交付标准。以下为标准 8 小时/工作日的挂牌指导价。
            </p>
          </div>

          <div className="space-y-32">
            {PRICING_ROLES.map((role) => (
              <div key={role.id} className="relative scroll-mt-32" id={`role-${role.id}`}>
                {/* 角色 Header */}
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-10 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                  <div className="size-16 rounded-2xl bg-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                    <role.icon className="size-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2">{role.title}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-4xl">{role.description}</p>
                  </div>
                </div>

                {/* 等级卡片 Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {role.tiers.map((tier) => (
                    <div
                      key={tier.level}
                      className={`flex flex-col rounded-3xl border bg-white dark:bg-zinc-900 p-8 relative overflow-hidden transition-all duration-300 ${
                        tier.highlight
                          ? "border-purple-500 shadow-xl shadow-purple-500/10 lg:-translate-y-4"
                          : "border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50"
                      }`}
                    >
                      {tier.highlight && (
                        <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                          企业优选
                        </div>
                      )}

                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-semibold mb-4">
                          {tier.exp}
                        </span>
                        <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{tier.level}</h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-extrabold text-purple-600 dark:text-purple-400">
                            {tier.basePrice}
                          </span>
                          <span className="text-sm text-zinc-500">/ 基准人天</span>
                        </div>
                      </div>

                      {/* 阶梯报价表 */}
                      <div className="bg-zinc-50 dark:bg-zinc-950/50 rounded-xl p-4 mb-6 border border-zinc-100 dark:border-zinc-800/50">
                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                          阶梯采购单价
                        </div>
                        <ul className="space-y-2">
                          {tier.steps.map((step) => (
                            <li key={step.range} className="flex justify-between items-center text-sm">
                              <span className="text-zinc-600 dark:text-zinc-300">{step.range}</span>
                              <span className="font-mono font-medium text-zinc-900 dark:text-white">{step.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 核心产出清单 */}
                      <div className="flex-1">
                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center">
                          <FileText className="size-3 mr-1" /> 预期交付产物/职责
                        </div>
                        <ul className="space-y-3">
                          {tier.outputs.map((output) => (
                            <li key={output} className="flex items-start text-sm text-zinc-600 dark:text-zinc-400">
                              <CheckCircle2 className="size-4 mr-2.5 text-purple-500 shrink-0 mt-0.5" />
                              <span className="leading-snug">{output}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 统筹人天池机制 */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500">
                <Calculator className="mr-2 h-4 w-4" /> 高阶玩法：企业统筹资源池
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                一次采购，
                <br className="hidden md:block" />
                跨角色无缝折算调配。
              </h2>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                如果您无法提前预估各类角色的精确配比，我们强烈建议您采购 <strong>“基础人天包”</strong>{" "}
                (以中级研发为基准锚点)。在项目执行过程中，您可以根据实际需求，按照价格比例随时调用架构师或 BA。
              </p>

              <div className="bg-zinc-50 dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 mt-6">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-4">
                  举例：您购买了 100 个人天资源包
                </h4>
                <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-center">
                    <div className="size-2 bg-purple-500 rounded-full mr-3" />
                    本周您调用了 1 天 <strong>高级架构师</strong> (¥5000/天) = 消耗 3.33 个人天额度
                  </li>
                  <li className="flex items-center">
                    <div className="size-2 bg-purple-500 rounded-full mr-3" />
                    本周您调用了 5 天 <strong>中级研发</strong> (¥1500/天) = 消耗 5.00 个人天额度
                  </li>
                  <li className="flex items-center">
                    <div className="size-2 bg-purple-500 rounded-full mr-3" />
                    <strong>系统自动结算扣减，月度提供详细对账单。最高效的资金利用率。</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-[400px]">
              <div className="bg-zinc-900 dark:bg-black rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-zinc-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full" />
                <h3 className="text-white text-xl font-bold mb-6">推荐发包规格</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div>
                      <div className="text-white font-bold group-hover:text-purple-400 transition-colors">
                        50 人天资源池
                      </div>
                      <div className="text-zinc-400 text-xs mt-1">含 10% 赠送额度</div>
                    </div>
                    <ArrowRight className="size-5 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="flex justify-between items-center p-4 rounded-xl bg-purple-600/20 border border-purple-500/50 hover:bg-purple-600/30 transition-colors cursor-pointer group">
                    <div>
                      <div className="text-white font-bold group-hover:text-purple-300 transition-colors">
                        100 人天统筹包
                      </div>
                      <div className="text-purple-300/70 text-xs mt-1">年度最热，享最佳折扣</div>
                    </div>
                    <ArrowRight className="size-5 text-purple-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div>
                      <div className="text-white font-bold group-hover:text-purple-400 transition-colors">
                        300+ 人天战略包
                      </div>
                      <div className="text-zinc-400 text-xs mt-1">含首席架构师月度巡检驻场</div>
                    </div>
                    <ArrowRight className="size-5 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 w-full block text-center py-3 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
                >
                  获取专属商务方案
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 流程与保障 */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">绝不失控的交付保障</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              标准化的四步控制法，确保每一分预算都产生实打实的代码与业务价值。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0" />

            {[
              {
                step: "01",
                title: "需求分发与确认",
                desc: "您通过工单系统提出业务需求，我方接收并分配相应的资源角色。",
              },
              {
                step: "02",
                title: "工时预估与签批",
                desc: "技术团队给出精确到 0.5 天的工作量评估单，需您的项目经理签字同意。",
              },
              {
                step: "03",
                title: "敏捷开发与集成",
                desc: "进入开发迭代周期，代码每日提交至专属 Git 仓库，确保过程资产透明可见。",
              },
              {
                step: "04",
                title: "报表对账与核销",
                desc: "每周生成 Timesheet 工时消耗周报，双方核对无误后从总资源池扣除额度。",
              },
            ].map((item) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
                <div className="size-16 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-50 dark:border-zinc-950 shadow-[0_0_0_2px_rgba(168,85,247,0.3)] flex items-center justify-center text-purple-600 font-black text-xl mb-6">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
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
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800"
              >
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">{faq.q}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 底部 CTA */}
      <section className="relative py-32 overflow-hidden bg-purple-600">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="z-10 relative max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">准备好组建您的梦之队了吗？</h2>
          <p className="text-purple-100 text-lg md:text-xl max-w-2xl mx-auto">
            立即联系我们的销售代表，获取为您量身定制的人天采购测算表与折扣框架协议。
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-white text-purple-700 text-lg font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              申请获取正式报价单 <ArrowRight className="ml-2 size-5" />
            </Link>
            <Link
              href="/services/custom/turnkey"
              className="h-14 px-10 inline-flex items-center justify-center rounded-full border-2 border-white/30 text-white text-lg font-bold hover:bg-white/10 transition-colors"
            >
              看看固定价格交钥匙包
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

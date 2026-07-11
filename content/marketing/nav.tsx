import {
  Activity,
  AlbumIcon,
  Box,
  Briefcase,
  CalendarDays,
  Code,
  ComponentIcon,
  Cpu,
  FileText,
  Globe,
  Handshake,
  Layers,
  LayoutTemplate,
  Network,
  Package,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Sprout,
  Terminal,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type React from "react";

/** 顶部导航巨型菜单单项配置。 */
export type MegaMenuItem = {
  href: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  /** 控制 Grid 布局排版。 */
  className?: string;
};

// ==========================================
// 1. 产品与工程技术 (Product, Engineering & Tech)
// ==========================================
export const productsMegaMenu: MegaMenuItem[] = [
  {
    href: "/products",
    title: "探索产品与技术架构",
    description: "全面了解为智能制造设计的端到端工业基座、微服务组件与开发者资产。",
    icon: <LayoutTemplate />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000", // 实验室/高科技全景
    className: "md:row-span-2",
  },
  {
    href: "/products/ai",
    title: "AI 工业大模型",
    description: "专为制造业训练的缺陷检测与维修专家",
    icon: <Sparkles className="text-amber-500" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-start-1 lg:row-start-3",
  },
  {
    href: "/products/aps",
    title: "APS 高级排程",
    description: "毫秒级约束求解与联合排产算法",
    icon: <CalendarDays className="text-orange-500" />,
    image:
      "https://plus.unsplash.com/premium_photo-1706191097438-a86238a40cfd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NoZWR1bGV8ZW58MHx8MHx8fDA%3D",
    className: "lg:col-start-2 lg:row-start-1",
  },
  {
    href: "/products/mes",
    title: "MES 制造执行",
    description: "全面质量管控与高级动态排程",
    icon: <Cpu className="text-blue-500" />,
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800", // 机械臂/车间
    className: "lg:col-start-3 lg:row-start-1",
  },
  {
    href: "/products/wms",
    title: "WMS 智能仓储",
    description: "3D数字孪生与立库智能控制",
    icon: <Package className="text-emerald-500" />,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-start-4 lg:row-start-1",
  },
  {
    href: "/products/qms",
    title: "QMS 穿透质控",
    description: "SPC 实时监控与 FMEA 失效分析",
    icon: <ShieldCheck className="text-rose-500" />,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-start-2 lg:row-start-2",
  },
  {
    href: "/products/eam",
    title: "EAM 预测维保",
    description: "设备健康建模与备件全寿命追踪",
    icon: <Settings className="text-teal-500" />,
    image:
      "https://plus.unsplash.com/premium_photo-1682147307418-07ad7e897bc9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    className: "lg:col-start-3 lg:row-start-2",
  },
  {
    href: "/products/iot",
    title: "IoT 数据采集系统",
    description: "海量异构设备接入与边缘数据清洗",
    icon: <Network className="text-purple-500" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-start-4 lg:row-start-2",
  },
  {
    href: "/docs/architecture",
    title: "微服务与 DDD 架构",
    description: "底层模型拆解与数据流转图谱",
    icon: <Box className="text-cyan-500" />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800", // 服务器机房/网络节点
    className: "lg:col-start-2 lg:row-start-3",
  },
  {
    href: "/docs/api",
    title: "API 与开发者中心",
    description: "OpenAPI 字典与 Webhook 集成",
    icon: <Terminal className="text-indigo-500" />,
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800", // 屏幕代码
    className: "lg:col-start-3 lg:row-start-3",
  },
  {
    href: "/releases",
    title: "发行说明与 EOL",
    description: "追踪核心迭代与生命周期宣告",
    icon: <Code className="text-slate-500" />,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800", // 时间线/数字蓝图
    className: "lg:col-start-4 lg:row-start-3",
  },
];

// ==========================================
// 2. 商业赋能与解决方案 (Commercial, Marketing & Enablement)
// ==========================================
export const solutionsMegaMenu: MegaMenuItem[] = [
  {
    href: "/solutions",
    title: "行业解决方案",
    description: "获取特定垂直行业的数字化破局蓝图、商业定价模型与灯塔工厂实战经验。",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000", // 全球化地球/数据
    className: "md:row-span-3",
  },
  {
    href: "/solutions/ev-battery",
    title: "新能源与电池",
    description: "电芯追溯与高通量极片质检",
    icon: <Sparkles className="text-amber-500" />,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800", // 电池模组/新能源
    className: "lg:col-start-2 lg:row-start-1",
  },
  {
    href: "/solutions/semiconductor",
    title: "半导体与泛半导体",
    description: "无尘车间管控与 SECS/GEM 集成",
    icon: <Cpu className="text-teal-500" />,
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800", // 晶圆/芯片电路
    className: "lg:col-start-3 lg:row-start-1",
  },
  {
    href: "/solutions/automotive",
    title: "汽车与高端装备",
    description: "JIT 准时制排产与供应链协同",
    icon: <Settings className="text-rose-500" />,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800", // 汽车制造车间
    className: "lg:col-start-4 lg:row-start-1",
  },
  {
    href: "/solutions/agriculture",
    title: "智慧农业全栈底座",
    description: "从 IoT 采集、AI 决策到实体试验田的端到端闭环",
    icon: <Sprout className="text-emerald-500" />,
    image: "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-start-2 lg:col-span-3 lg:row-start-2",
  },
  {
    href: "/pricing",
    title: "商业许可与 TCO",
    description: "版本对比与总体拥有成本计算器",
    icon: <TrendingUp className="text-emerald-500" />,
    className: "lg:col-start-2 lg:row-start-3",
  },
  {
    href: "/whitepapers",
    title: "工业洞察白皮书",
    description: "Gartner 报告与行业前瞻讲义",
    icon: <AlbumIcon className="text-blue-500" />,
    className: "lg:col-start-3 lg:row-start-3",
  },
  {
    href: "/customers",
    title: "全球标杆案例库",
    description: "千亿级集团灯塔图谱与 ROI 分析",
    icon: <Briefcase className="text-indigo-500" />,
    className: "lg:col-start-4 lg:row-start-3",
  },
];

// ==========================================
// 3. 生态系统与客户成功 (Ecosystem & Customer Success)
// ==========================================
export const ecosystemMegaMenu: MegaMenuItem[] = [
  {
    href: "/services",
    title: "生态与客户成功",
    description: "覆盖从硬件集成、联合方案 (ISV) 到 7x24 全生命周期技术保障的生态护城河。",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000", // 团队协作/服务
    className: "md:row-span-2",
  },
  {
    href: "/services/delivery",
    title: "敏捷交付与驻场",
    description: "标准化蓝图落地与专家现场调优",
    icon: <Activity className="text-rose-500" />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800", // 现场工程师
    className: "lg:col-start-2 lg:row-start-1",
  },
  {
    href: "/services/support",
    title: "7x24 NOC 响应",
    description: "全天候工单响应与远程故障急救",
    icon: <ShieldCheck className="text-blue-500" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // 数据大屏/指挥中心
    className: "lg:col-start-3 lg:row-start-1",
  },
  {
    href: "/services/training",
    title: "官方学院与认证",
    description: "系统化的开发者与实施人才赋能",
    icon: <Users className="text-emerald-500" />,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800", // 讲座/培训室
    className: "lg:col-start-4 lg:row-start-1",
  },
  {
    href: "/services/custom",
    title: "定制开发",
    description: "基于底层框架的特定需求研发",
    icon: <Code className="text-purple-500" />,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800", // 讲座/培训室
    className: "lg:col-start-2 lg:row-start-2",
  },
  {
    href: "/partners/hardware",
    title: "认证硬件生态",
    description: "无缝对接的主流网关与 PLC 库",
    icon: <ComponentIcon className="text-amber-500" />,
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=800", // 边缘网关/工控机
    className: "lg:col-start-3 lg:row-start-2",
  },
  {
    href: "/marketplace",
    title: "SaaS 插件市场",
    description: "ISV 联合开发的低代码应用集",
    icon: <Box className="text-purple-500" />,
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800", // 模块化UI/商店概念
    className: "lg:col-start-4 lg:row-start-2",
  },
  {
    href: "/blog/engineering",
    title: "技术博客",
    description: "来自核心架构团队的开源技术解析",
    icon: <Terminal className="text-purple-500" />,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-start-5 lg:row-start-1",
  },
  {
    href: "/community",
    title: "开发者与开源矩阵",
    description: "参与共建工业级开源工具生态",
    icon: <Handshake className="text-cyan-500" />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", // 开发者社区/白板讨论
    className: "lg:col-start-5 lg:row-start-2",
  },
];

// ==========================================
// 4. 信任、合规与防御体系 (Trust, Legal & Compliance)
// ==========================================
export const trustMegaMenu: MegaMenuItem[] = [
  {
    href: "/trust",
    title: "企业级信任中心",
    description: "我们深知工业数据的敏感性。探索 MSRU 如何通过硬核架构构筑不可穿透的合规与安全防线。",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000", // 发光盾牌/网络安全
    className: "md:row-span-2",
  },
  {
    href: "/trust/security",
    title: "多租户安全架构",
    description: "数据物理隔离与零信任网络设计",
    icon: <Shield className="text-indigo-500" />,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800", // 锁与数据层
    className: "lg:col-start-2 lg:row-start-1",
  },
  {
    href: "/trust/compliance",
    title: "全球合规矩阵",
    description: "ISO/SOC2 档案与区域监管对接",
    icon: <Globe className="text-blue-500" />,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800", // 法律天平/合规卷宗
    className: "lg:col-start-3 lg:row-start-1",
  },
  {
    href: "/trust/data",
    title: "数据驻留与可携权",
    description: "跨境传输政策与合规退网指南",
    icon: <Network className="text-emerald-500" />,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800", // 复杂的网络线路/地球节点
    className: "lg:col-start-4 lg:row-start-1",
  },
  {
    href: "/trust/ai-ethics",
    title: "AI 伦理与管辖",
    description: "大模型训练边界与数据脱敏策略",
    icon: <Zap className="text-amber-500" />,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800", // 人工智能发光大脑核心
    className: "lg:col-start-2 lg:row-start-2",
  },
  {
    href: "/trust/accessibility",
    title: "数字包容性 (VPAT)",
    description: "无障碍访问标准与合规采购证明",
    icon: <CalendarDays className="text-rose-500" />,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800", // 无障碍/关怀科技
    className: "lg:col-start-3 lg:row-start-2",
  },
  {
    href: "/status",
    title: "系统状态与 RCA",
    description: "各区实时在线率与历史故障剖析",
    icon: <Activity className="text-teal-500" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // 系统大盘/心电图监控
    className: "lg:col-start-4 lg:row-start-2",
  },
];

// ==========================================
// 5. 企业治理与 ESG (Corporate Governance, ESG & IR)
// ==========================================
export const companyMegaMenu: MegaMenuItem[] = [
  {
    href: "/company",
    title: "公司与企业治理",
    description: "透视 MSRU 的全球愿景、极客工程文化、投资价值以及我们对可持续供应链的承诺。",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000", // 高级现代办公空间
    className: "md:row-span-2",
  },
  {
    href: "/company/about",
    title: "集团愿景与初创",
    description: "探索赋能智造数字化的核心使命",
    icon: <Users className="text-blue-500" />,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", // 团队击掌/愿景
    className: "lg:col-start-2 lg:row-start-1",
  },
  {
    href: "/investors",
    title: "投资者关系 (IR)",
    description: "财报披露、董事会决议与分析会",
    icon: <TrendingUp className="text-emerald-500" />,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800", // 股票走势/交易
    className: "lg:col-start-3 lg:row-start-1",
  },
  {
    href: "/company/brand",
    title: "品牌与媒体中心",
    description: "官方 Logo 规范、Slogan 及多媒体素材",
    icon: <AlbumIcon className="text-pink-500" />,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    className: "lg:col-start-4 lg:row-start-1",
  },
  {
    href: "/esg",
    title: "ESG 年度报告",
    description: "碳足迹追踪与企业可持续发展行动",
    icon: <Globe className="text-teal-500" />,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800", // 绿色能源/风力发电
    className: "lg:col-start-2 lg:row-start-2",
  },
  {
    href: "/company/supply-chain",
    title: "供应链与行为准则",
    description: "反腐败策略与供应商合规指南",
    icon: <Briefcase className="text-amber-500" />,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800", // 全球物流/集装箱
    className: "lg:col-start-3 lg:row-start-2",
  },
  {
    href: "/careers",
    title: "加入我们",
    description: "全球研发中心热招岗位与人才成长",
    icon: <Sparkles className="text-rose-500" />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", // 活力工作氛围
    className: "lg:col-start-4 lg:row-start-2",
  },
];

// ==========================================
// 6. 文档中心 (Docs)
// ==========================================
export const docsMegaMenu: MegaMenuItem[] = [
  {
    href: "/docs",
    title: "文档中心",
    description: "MSRU 全栈工业数字基座的技术文档、API 参考、模块指南与最佳实践。",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    className: "md:row-span-2",
  },
  {
    href: "/docs/framework",
    title: "系统架构指南",
    description: "平台整体架构设计、技术选型与开发规范",
    icon: <Layers className="text-indigo-500" />,
  },
  {
    href: "/docs/platform",
    title: "Platform 美仁平台",
    description: "统一数据主线与多租户微服务基座",
    icon: <Box className="text-blue-500" />,
  },
  {
    href: "/docs/cms",
    title: "CMS 内容管理",
    description: "企业级内容管理与多渠道发布引擎",
    icon: <FileText className="text-pink-500" />,
  },
  {
    href: "/docs/mes",
    title: "MES 制造执行",
    description: "全面质量管控与动态排产执行系统",
    icon: <Cpu className="text-orange-500" />,
  },
  {
    href: "/docs/wms",
    title: "WMS 智能仓储",
    description: "智能库位管理与自动化拣配调度",
    icon: <Package className="text-amber-500" />,
  },
  {
    href: "/docs/aps",
    title: "APS 高级排程",
    description: "多约束有限产能优化排程引擎",
    icon: <CalendarDays className="text-cyan-500" />,
  },
  {
    href: "/docs/qms",
    title: "QMS 质量管理",
    description: "全流程质量追溯与 SPC 统计过程控制",
    icon: <ShieldCheck className="text-emerald-500" />,
  },
  {
    href: "/docs/eam",
    title: "EAM 设备管理",
    description: "设备全生命周期管理与预测性维护",
    icon: <Settings className="text-purple-500" />,
  },
  {
    href: "/docs/iot",
    title: "IOT 数据采集",
    description: "海量异构设备接入与边缘数据清洗",
    icon: <Activity className="text-teal-500" />,
  },
  {
    href: "/docs/legal",
    title: "合规与信任中心",
    description: "隐私政策、服务条款与合规白皮书",
    icon: <Globe className="text-rose-500" />,
  },
];

/** 顶部导航六大板块，顺序即渲染顺序。 */
export const megaMenus: { title: string; url: string; items: MegaMenuItem[] }[] = [
  { title: "产品与技术", url: "/products", items: productsMegaMenu },
  { title: "行业解决方案", url: "/solutions", items: solutionsMegaMenu },
  { title: "生态与服务", url: "/services", items: ecosystemMegaMenu },
  { title: "信任与合规", url: "/trust", items: trustMegaMenu },
  { title: "公司与治理", url: "/company", items: companyMegaMenu },
  { title: "文档中心", url: "/docs", items: docsMegaMenu },
];

import type { Block } from "@/lib/marketing/blocks-schema";

export interface BlockTemplateMeta {
  type: Block["type"];
  name: string;
  category: "hero" | "content" | "data" | "conversion" | "interactive";
  description: string;
  defaultData: Block;
}

export const BLOCK_TEMPLATES: BlockTemplateMeta[] = [
  {
    type: "hero",
    name: "标准主屏 (Hero)",
    category: "hero",
    description: "经典深色或叙事风格首屏横幅，支持角标、背景图与双按钮",
    defaultData: {
      type: "hero",
      variant: "dark",
      badge: { icon: "Sparkles", text: "全新发布" },
      title: "下一代智能制造管理基座",
      subtitle: "深度赋能现代工业互联网与无人工厂自动化协作系统。",
      accentColor: "blue",
      ctas: [
        { label: "立即预约演示", href: "/contact" },
        { label: "查看产品手册", href: "/products/mes" },
      ],
    },
  },
  {
    type: "topHero",
    name: "视频主屏 (Top Hero)",
    category: "hero",
    description: "高级沉浸式主屏，支持背景视频与多频道快捷卡片导航",
    defaultData: {
      type: "topHero",
      badge: { icon: "Play", text: "现场直击" },
      title: "全栈自研黑灯工厂操作系统",
      subtitle: "实时连接设备异构协议，打破数据孤岛。",
      accentColor: "blue",
      channels: [
        { icon: "Cpu", label: "MES 系统", href: "/products/mes" },
        { icon: "Activity", label: "IoT 采集", href: "/products/iot" },
      ],
    },
  },
  {
    type: "subHero",
    name: "二级头屏 (Sub Hero)",
    category: "hero",
    description: "轻量级子页面头部横幅",
    defaultData: {
      type: "subHero",
      badge: { icon: "Layers", text: "产品模块" },
      title: "高级计划与排程系统 (APS)",
      subtitle: "基于智能约束算法的工单动态优化引擎。",
      accentColor: "emerald",
    },
  },
  {
    type: "tabbedHero",
    name: "多页签首屏 (Tabbed Hero)",
    category: "hero",
    description: "带多页签切换的大型综合特性展示首屏",
    defaultData: {
      type: "tabbedHero",
      heading: "核心业务场景全覆盖",
      subtitle: "专为复杂离散制造打造的全流程数字化组件",
      defaultIndex: 0,
      tabs: [
        {
          label: "生产协同",
          icon: "Factory",
          title: "柔性生产调度与现场防错",
          description: "连接工位终端与智能网关，实时指导作业并自动拦截品质异常。",
          ctas: [{ label: "了解 MES", href: "/products/mes" }],
        },
        {
          label: "质量追溯",
          icon: "ShieldCheck",
          title: "全生命周期正反向追溯大屏",
          description: "物料批次与工艺参数 100% 绑定，秒级生成溯源报告。",
          ctas: [{ label: "了解 QMS", href: "/products/qms" }],
        },
      ],
    },
  },
  {
    type: "statBand",
    name: "指标统计条 (Stat Band)",
    category: "data",
    description: "行业量化成果展示，支持 3~6 个带有单位的数据指标",
    defaultData: {
      type: "statBand",
      heading: "规模与品质见证",
      accentColor: "blue",
      stats: [
        { value: "99.99%", unit: "OEE", label: "平均设备综合效率提升" },
        { value: "10x", unit: "速", label: "业务流转响应提速" },
        { value: "30%", unit: "↓", label: "车间在制品库存降低" },
      ],
    },
  },
  {
    type: "statement",
    name: "核心宣言 (Statement)",
    category: "content",
    description: "高亮展示品牌主张或行业核心痛点阐述",
    defaultData: {
      type: "statement",
      title: "工业数字化的核心不是堆砌看板，而是让每一次工序流转都精准可控。",
      body: "我们坚持以高确定性运行时内核，取代传统脆弱的二次定制脚本。",
      accentColor: "blue",
    },
  },
  {
    type: "bento",
    name: "Bento 栅格卡片 (Bento Grid)",
    category: "content",
    description: "流行的 4 栅格混合布局卡片矩阵，支持普通卡片与超宽卡片",
    defaultData: {
      type: "bento",
      items: [
        {
          icon: "Cpu",
          title: "分布式边缘采集架构",
          tagline: "极速响应",
          description: "支持近百种工业协议解析，网关离线仍能维持缓冲与自动重传。",
          span: "wide",
          accentColor: "blue",
        },
        {
          icon: "ShieldAlert",
          title: "智能安防与防错",
          tagline: "安全生产",
          description: "视觉 AI 与传感器联动，及时提示作业违规风险。",
          span: "normal",
          accentColor: "emerald",
        },
        {
          icon: "TrendingUp",
          title: "实时工艺能耗优化",
          tagline: "绿色碳减排",
          description: "通过动态调控设备待机策略，显著降低单件综合能耗。",
          span: "normal",
          accentColor: "amber",
        },
      ],
    },
  },
  {
    type: "splitMedia",
    name: "左右图文对冲 (Split Media)",
    category: "content",
    description: "左右分栏图文介绍，带特性要点列表与行动按钮",
    defaultData: {
      type: "splitMedia",
      side: "left",
      eyebrow: "架构解析",
      title: "软硬结合的数字孪生现场",
      body: "通过 3D 渲染与设备遥测信号同步，让管理者随时掌握车间全局图景。",
      bullets: ["多源协议自适应汇聚", "毫秒级低延迟数据传输", "内置高级故障预警模型"],
      cta: { label: "查看解决方案详情", href: "/solutions" },
    },
  },
  {
    type: "featureGrid",
    name: "特性卡片网格 (Feature Grid)",
    category: "content",
    description: "2 列或 3 列整齐排列的特性亮点卡片组",
    defaultData: {
      type: "featureGrid",
      columns: 3,
      cards: [
        { icon: "Zap", title: "秒级开箱部署", desc: "Docker 与边缘容器一键启动，无需复杂环境配置。" },
        { icon: "Lock", title: "金融级数据安全", desc: "全程国密加密通道，支持企业内网完全本地化私有隔离。" },
        { icon: "RefreshCw", title: "7x24 不间断热升级", desc: "服务高可用架构设计，业务升级零宕机影响。" },
      ],
    },
  },
  {
    type: "list",
    name: "多形态列表矩阵 (List Block)",
    category: "content",
    description: "支持时间线、步骤流程、卡片组或行列表四种渲染形态",
    defaultData: {
      type: "list",
      variant: "steps",
      items: [
        { title: "现场调研与评估", meta: "第一阶段", desc: "深入梳理现有车间工序与设备协议状况" },
        { title: "网关边缘部署接入", meta: "第二阶段", desc: "快速接入采集盒子并配置标准通信通道" },
        { title: "业务规则与排程上线", meta: "第三阶段", desc: "配置高级工单排产规则与质检追溯链路" },
      ],
    },
  },
  {
    type: "caseList",
    name: "标杆案例集 (Case List)",
    category: "content",
    description: "行业客户成功案例展示列表，带引言与成果标签",
    defaultData: {
      type: "caseList",
      cases: [
        {
          company: "某头部汽车装备制造企业",
          industry: "新能源车制造",
          result: "综合产能提升 28%",
          quote: "导入 MSRU 平台后，我们的生产追溯与异常响应速度实现了飞跃式提升。",
          image: "/uploads/preview.png",
        },
      ],
    },
  },
  {
    type: "logoWall",
    name: "合作品牌墙 (Logo Wall)",
    category: "content",
    description: "展示客户、合作伙伴或合规认证 Logo 的滚动矩阵",
    defaultData: {
      type: "logoWall",
      eyebrow: "受到众多领军制造业企业信赖",
      items: [
        { name: "Acme Motors", icon: "CheckCircle" },
        { name: "Global Robotics", icon: "Shield" },
        { name: "Apex Semi", icon: "Cpu" },
      ],
    },
  },
  {
    type: "faq",
    name: "手风琴常见问题 (FAQ)",
    category: "content",
    description: "一问一答的折叠展开问答专区",
    defaultData: {
      type: "faq",
      items: [
        {
          q: "边缘实例是否支持完全断网运行？",
          a: "支持。边缘节点自带本地 SQLite 与多级缓存系统，若与中心服务器断连，现场生产指导与数据采集将继续正常运行，并在网络恢复后自动补发同步。",
        },
        {
          q: "系统对现有老旧硬件设备兼容性如何？",
          a: "兼容常见 Modbus、OPC-UA、PLC S7 及各大品牌的标准工业网关协议。",
        },
      ],
    },
  },
  {
    type: "testimonial",
    name: "客户评价金句 (Testimonial)",
    category: "content",
    description: "展示客户高管或行业专家的详细推荐语",
    defaultData: {
      type: "testimonial",
      quote: "这是我们用过架构最清晰、本地化性能最好的制造管理支撑底座。",
      author: "张总监",
      role: "数字化改造负责人 · 某半导体工厂",
    },
  },
  {
    type: "mediaShowcase",
    name: "媒体视界窗口 (Media Showcase)",
    category: "content",
    description: "全宽展示核心高清图解、演示截图或画廊",
    defaultData: {
      type: "mediaShowcase",
      media: "/uploads/preview.png",
      title: "Liquid Glass 沉浸式车间数字底座界面",
      caption: "支持明暗主题原生理性切换与实时高刷新率数据展现",
    },
  },
  {
    type: "cta",
    name: "行动召集栏 (CTA Block)",
    category: "conversion",
    description: "页面底部或段落间高转化率的引导转化条",
    defaultData: {
      type: "cta",
      variant: "small",
      title: "开启工厂数字化转型下一程",
      description: "立刻预约资深行业专家，获取定制化改造评估方案。",
      cta: { label: "申请免费试用", href: "/contact" },
      accentColor: "blue",
    },
  },
  {
    type: "contactForm",
    name: "在线表单与咨询 (Contact Form)",
    category: "conversion",
    description: "可交互的在线表单，收集客户咨询与意向字段",
    defaultData: {
      type: "contactForm",
      heading: "与我们的资深工程师团队对话",
      subtitle: "填写需求后，我们将于 24 小时内为您准备专属架构指导建议。",
      submitLabel: "发送咨询申请",
      submitEmail: "contact@msru.cn",
      accentColor: "blue",
      fields: [
        { name: "name", label: "您的姓名", type: "text", required: true },
        { name: "phone", label: "联系电话", type: "tel", required: true },
        { name: "company", label: "公司/工厂名称", type: "text" },
        { name: "requirements", label: "核心业务痛点或需求描述", type: "textarea" },
      ],
    },
  },
  {
    type: "pricingTable",
    name: "产品定价价目表 (Pricing Table)",
    category: "conversion",
    description: "标准分阶定价表，支持功能列表与推荐标签",
    defaultData: {
      type: "pricingTable",
      plans: [
        {
          name: "边缘标准版",
          price: "¥38,000",
          unit: "/年/节点",
          description: "适合中小型单体车间快速部署落地",
          features: ["支持至多 50 个网关工位点", "标准 MES 生产执行模块", "本地 SQLite 高速读写", "8x5 邮件在线支持"],
          cta: { label: "选择此方案", href: "/contact" },
        },
        {
          name: "企业多区域集群版",
          price: "定制报价",
          description: "为大型跨国制造集团与多基地量身定制",
          popular: true,
          features: [
            "无限工位点接入",
            "全套高级排产 APS 与质量 QMS",
            "中心化多边缘节点实时同步",
            "7x24 专属架构师驻场与技术响应",
          ],
          cta: { label: "联系专属顾问", href: "/contact" },
        },
      ],
    },
  },
  {
    type: "connectivityGlobe",
    name: "3D 互联地球仪 (Connectivity Globe)",
    category: "interactive",
    description: "3D 动态旋转地球仪，展示全球化节点与互联网络",
    defaultData: {
      type: "connectivityGlobe",
      autoRotate: true,
      heading: "全球化部署与连接网络",
      subtitle: "从中国智造基地至欧美海外分支，毫秒级协同流转",
      markers: [
        { lat: 31.23, lng: 121.47, label: "上海调度中心" },
        { lat: 22.54, lng: 114.05, label: "深圳智造枢纽" },
        { lat: 48.85, lng: 2.35, label: "欧洲边缘节点" },
      ],
    },
  },
  {
    type: "animatedBeams",
    name: "动态连线拓扑图 (Animated Beams)",
    category: "interactive",
    description: "动态连线拓扑流向图，展示系统间集成关系",
    defaultData: {
      type: "animatedBeams",
      heading: "双向高效数据交互架构",
      subtitle: "无缝衔接 ERP 系统与底端设备传感器",
      nodes: [
        { icon: "Server", label: "中心 ERP/SAP" },
        { icon: "Cpu", label: "MSRU 平台引擎" },
        { icon: "Activity", label: "车间设备终端" },
      ],
      edges: [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
      ],
    },
  },
  {
    type: "custom",
    name: "自定义组件挂载点 (Custom Block)",
    category: "interactive",
    description: "直接渲染系统内部在 customRegistry 中注册的高级 React 自定义组件",
    defaultData: {
      type: "custom",
      component: "InteractiveDemo",
      props: {},
    },
  },
];

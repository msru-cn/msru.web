<p align="center">
  <strong>🌐 Language / 语言</strong><br>
  <strong>简体中文</strong> · <a href="./README.en.md">English</a>
</p>

<p align="center">
  <h1 align="center">MSRU Web & Docs</h1>
  <p align="center">
    <strong>企业级官方门户与技术文档中心 · AI-Native 驱动</strong>
  </p>
  <p align="center">
    <strong>开源协议：MIT License (允许免费商用、任意修改及分发)</strong>
  </p>
  <p align="center">
    <a href="#-快速开始">快速开始</a> · <a href="#-项目结构">项目结构</a> · <a href="#-组件与配置">组件与配置</a> · <a href="#-文档管理">文档管理</a>
  </p>
</p>

---

## 概述

MSRU Web & Docs 是 **MSRU Platform** 的官方门户、行业解决方案展示中心及技术文档站。基于 **Next.js 16 (App Router) + React 19 + Fumadocs** 现代化技术栈构建，集成了 AI Copilot 智能问答、实时 3D 渲染和声明式 Liquid Glass 营销组件系统。

**核心理念：配置即页面，文档即代码。**

### 技术栈

| 层级 | 技术 |
|------|------|
| **基础框架** | Next.js 16 (App Router) · React 19 · TypeScript 5.9 |
| **文档引擎** | Fumadocs (MDX loader) · Markdown · Remark/Rehype |
| **样式与动画** | Tailwind CSS 4 · Framer Motion · Lucide Icons |
| **数据与校验** | Zod (Schema validation) · Better-SQLite3 |
| **AI 问答** | Vercel AI SDK · OpenAI Compatible API |
| **代码规范** | Biome (Lint & Format) · Vitest (测试) |

---

## 🏗 项目结构

```
msru.web/
├── app/                           # Next.js App 路由层
│   ├── (home)/                    #   官方门户与产品/解决方案子页面 (:3007)
│   ├── docs/                      #   Fumadocs 文档中心路由层
│   └── api/                       #   AI 搜索与 OpenAI 代理接口
│
├── content/                       # 内容资产源
│   ├── docs/                      #   技术文档 Markdown (MDX)
│   └── marketing/                 #   配置化营销页面 (JSON 块)
│       └── pages/                 #     包含 solutions、products、company 等
│
├── components/                    # 前端 UI 组件群
│   ├── marketing/                 #   Liquid Glass 营销块组件 (hero, bento, splitMedia 等)
│   ├── ui/                        #   基础 UI 按钮与表单组件
│   └── apple-footer.tsx           #   Apple 风格沉浸页脚
│
├── lib/                           # 共享核心逻辑库
│   ├── marketing/                 #   营销页面 Zod 校验 Schema
│   ├── source.ts                  #   Fumadocs 静态数据源加载器
│   └── layout.shared.tsx          #   导航栏与页脚统一菜单配置
│
├── public/                        # 静态资源文件
│   └── uploads/                   #   高清背景视频 (mp4)、SVG Logo 与插图
│
├── biome.json                     # Biome 代码规范定义
├── source.config.ts               # Fumadocs MDX 编译器配置
└── next.config.mjs                # Next.js 配置器 (含 MDX 编译插件)
```

---

## 📦 组件与配置

本站所有的产品介绍与解决方案页面均基于 **声明式营销积木 (Liquid Glass System)** 构建。无需编写前端代码，只需编辑 `content/marketing/pages/` 下的 JSON 文件即可生成高品质页面。

### 支持的营销积木组件

| 类型 | 说明 | 核心属性 |
|------|------|------|
| `topHero` / `hero` | 沉浸式首屏背景 | 支持 `bgVideo` / `bgImage` / 左上角 `badge` / 玻璃 `ctas` |
| `statBand` | 行业量化指标展示条 | 支持 3~6 个带有单位、值 and 标签的统计数值 |
| `statement` | 核心产品宣言与行业痛点说明 | 支持大字标题 + 描述正文 |
| `bento` | 4 栅格技术底座矩阵 | 支持 `span: "wide"` 混合布局与图标配置 |
| `splitMedia` | 图文左右对冲业务场景展示 | 支持 Bullet points 列表与跳转 CTA 链接 |
| `list` | 步骤、卡片或时间线列表 | 支持 `variant: "timeline" / "cards" / "steps" / "rows"` |
| `faq` | 常见问题解答风琴折叠栏 | 支持 QA 数据问答数组 |
| `cta` | 底部全局行动召集区 | 引导客户预约演示或获取白皮书 |

---

## 🚀 快速开始

### 前置要求

- Node.js ≥ 20
- pnpm ≥ 10

### 启动开发服务器

```bash
# 1. 克隆并进入目录
git clone https://github.com/msru-cn/msru.web.git
cd msru.web

# 2. 安装前端依赖
pnpm install

# 3. 启动开发服务器 (端口为 3007)
pnpm dev
```

打开 [http://localhost:3007](http://localhost:3007) 查看渲染效果。

### 常用指令

```bash
pnpm dev              # 启动开发服务器
pnpm build            # 生产环境打包构建
pnpm lint             # 静态代码检查 (Biome)
pnpm format           # 格式化所有代码文件 (Biome)
pnpm check-types      # TS 类型安全性校验 (含 MDX 路由构建)
pnpm test             # 运行 Unit 单元测试 (Vitest)
```

---

## 🔧 代码与样式规范

1. **样式与设计美学**
   - 采用 **Tailwind CSS 4** 渐进式样式系统。
   - 追求 **Liquid Glass 磨砂玻璃流动美学**，明暗主题原生自适应。
2. **代码规范**
   - 严禁提交未通过 Biome 校验的代码，每次提交前请务必运行 `pnpm format` 和 `pnpm lint`。
   - 修改 JSON 配置后，请运行 `pnpm check-types` 以防破坏 Zod 校验规则。

---

## 📄 授权协议

MIT License (允许免费商业使用、私有化部署、任意二次开发、修改与分发)。

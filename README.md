<p align="center">
  <strong>🌐 Language / 语言 / སྐད་ཡིག</strong><br>
  <strong>简体中文</strong> · <a href="./README.en.md">English</a> · <a href="./README.bo.md">བོད་ཡིག</a>
</p>

<p align="center">
  <h1 align="center">MSRU Web & Docs</h1>
  <p align="center">
    <strong>企业级官方门户 · 技术文档中心 · 分布式 Headless CMS 边缘节点 (AI-Native)</strong>
  </p>
  <p align="center">
    <strong>开源协议：MIT License (允许免费商用、私有化部署、任意二次开发与分发)</strong>
  </p>
  <p align="center">
    <strong>👉 示例项目地址 [MSRU 官网]：<a href="https://new.msru.cn/">https://new.msru.cn/</a></strong><br>
    <sub>💡 备注（IPv6 访问提示）：在线示例部署于边缘纯 IPv6 节点，访问前请确保您的路由器开启了 IPv6 或使用手机热点访问。</sub>
  </p>
  <p align="center">
    <a href="#-概述">项目概述</a> · <a href="#-快速开始与定制化">快速开始与换肤</a> · <a href="#-分布式-headless-cms-与边缘同步-api">CMS 与 API 文档</a> · <a href="#-项目结构与营销组件">组件与结构</a>
  </p>
</p>

---

![MSRU DT-Core Preview](public/uploads/preview.png)

## 🌟 概述

**MSRU Web & Docs** 是一套现代化、高并发、基于 **Next.js 16 (App Router) + React 19 + Fumadocs** 构建的企业级双引擎门户系统。

除了作为高品质的产品官网与技术手册呈现平台外，本项目自身也是一个**完全解耦的分布式 Headless CMS 边缘节点**：
- **营销页引擎 (SDUI Engine)**：前后端分离，界面结构完全由 JSON 协议驱动，支持 Liquid Glass 磨砂玻璃声明式组件积木。
- **技术文档引擎 (Fumadocs MDX)**：原生集成 Markdown / MDX 编译器，支持代码高亮、数学公式、Mermaid 架构图与三语翻译。
- **边缘同步引擎 (ISR - 方案 2)**：内置 SQLite 与安全 API 接口 (`/api/cms`)，中心端可随时向多区域边缘实例推送页面更新，**零 JS 开销且毫秒级按需即时生效**。

---

## 🚀 快速开始与定制化

### 1. 本地极速开发

```bash
# 1. 克隆代码并进入目录
git clone https://github.com/msru-cn/msru.web.git
cd msru.web

# 2. 安装依赖 (需 Node.js >= 20.9.0, pnpm >= 10)
pnpm install

# 3. 启动开发服务器 (监听端口 3007)
pnpm dev
```
打开 [http://localhost:3007](http://localhost:3007) 即可查看门户页面效果。

### 2. 客户定制化与信息清理指南 (基于本仓库开发专属项目)

如果您希望利用本项目为**您的企业或客户搭建自己的官方门户与 CMS 边缘节点**（清理掉原有 MSRU 官网品牌信息），请查看我们的全套定制化手册：

👉 **[查看《客户定制化与信息清理 6 步快速指南》 (`docs/quickstart-customization.md`)](./docs/quickstart-customization.md)**

简要提示：
1. 修改全局 SEO 与品牌名：`lib/metadata.ts` 与 `public/` 目录下的 Logo/图标。
2. 更改导航与页脚：`lib/content/nav-model.ts` 和 `components/apple-footer.tsx`。
3. 清理内置默认页面与文稿：`content/marketing/pages/` 与 `content/docs/`。
4. 配置自己的密钥：在 `.env` 或 Coolify 后台设置 `CMS_API_KEY`。

### 3. 常用开发与校验指令

```bash
pnpm dev              # 启动本地开发服务器 (:3007)
pnpm build            # 生产环境打包构建
pnpm lint             # Biome 严格静态代码检查
pnpm format           # Biome 一键自动格式化
pnpm check-types      # TS 类型安全性与 Fumadocs MDX 路由校验
pnpm test             # 运行 Vitest 全量单元测试
```

---

## 📡 分布式 Headless CMS 与边缘同步 API (`/api/cms`)

本项目作为分布式 Headless CMS 的边缘渲染终端，支持中心化后台通过 `/api/cms` 接口推送或更新页面，并自动触发 Next.js 的按需增量静态重构 (ISR `revalidatePath`)。

### 🔗 完整 API 参考文档
我们已为您准备了详细的鉴权指南、`slug` 路径绑定逻辑、覆盖 vs 动态生成新页面说明，以及 5 大指令的完整 Request JSON 与 `curl` 调用示例：
- 👉 **[本地速查文档：`docs/headless-cms-api.md`](./docs/headless-cms-api.md)**
- 👉 **[在线 FumaDocs 页面源文件：`content/docs/cms/integrations/edge-sync-api.mdx`](./content/docs/cms/integrations/edge-sync-api.mdx)**

### 支持的指令 (`action`) 概览
| 指令 | 目标对象 | 触发动作 | 核心参数 |
| :--- | :--- | :--- | :--- |
| **`upsert_marketing`** | 营销页面 (`cms_marketing_pages`) | 存在则更新/覆盖，不存在则凭空构建新页面 + 重写静态缓存 | `slug`, `blocks`, `meta` |
| **`delete_marketing`** | 营销页面 (`cms_marketing_pages`) | 清理数据库记录 + 重写缓存 (降级显示本地文件或 404) | `slug` |
| **`upsert_docs`** | 技术文档 (`cms_docs_pages`) | 写入 Markdown/MDX，实时编译为 RSC 呈现 + 重写静态缓存 | `slug`, `title`, `content` |
| **`delete_docs`** | 技术文档 (`cms_docs_pages`) | 清理文档记录 + 重写缓存 | `slug` |
| **`execute_sql`** | 边缘 SQLite 数据库 | 供中心后台安全查询聚合统计或排查管理 | `sql`, `params`, `type` |

### 快速接口调试示例 (curl)
```bash
# 往边缘节点同步或新增一个定制营销页 (立即生效)
curl -X POST https://your-edge-domain.com/api/cms \
  -H "Authorization: Bearer your_secure_random_token_64_chars" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "upsert_marketing",
    "slug": "products/custom-robot",
    "blocks": [{ "type": "hero", "headline": "智能定制产品平台" }],
    "meta": { "title": "定制产品 | 官网" }
  }'
```

---

## 📦 项目结构与声明式营销组件

```
msru.web/
├── app/                           # Next.js App 路由层 (含 / 和 /docs 路由及 /api/cms 接口)
├── content/                       # 静态预设内容源 (marketing JSON / docs MDX)
├── components/                    # 前端 UI 与营销块组件
├── lib/                           # 核心逻辑与数据库服务 (db.ts, cms-service.ts)
└── docs/                          # 开发者项目级文档与规格手册
```

### 声明式 Liquid Glass 营销组件群

无需编写 HTML/CSS，只需在 JSON (`blocks` 数组) 中传入对应配置，引擎即会自动完成沉浸式玻璃磨砂渲染：

| 积木类型 | 名称 | 核心支持属性 |
| :--- | :--- | :--- |
| **`hero` / `topHero`** | 沉浸式首屏 | `bgVideo` 背景视频、`badge` 角标、`ctas` 玻璃按钮组 |
| **`statBand`** | 数据指标条 | 支持 3~6 个带有单位和标签的高亮量化数值 |
| **`statement`** | 宣言说明块 | 产品核心价值痛点阐述与主打引言 |
| **`bento`** | 4 栅格矩阵卡片 | 支持宽卡布局 `span: "wide"` 及图标特性挂载 |
| **`splitMedia`** | 图文场景展现 | 支持左右对冲展示视频、图片、特征列表 |
| **`list`** | 多形态列表矩阵 | `variant: "timeline" / "cards" / "steps" / "rows"` |
| **`faq`** | 手风琴问答 | 常见问题 QA 数组动态折叠展开 |
| **`cta`** | 全局召集底栏 | 引导客户预约演示或咨询联系 |

---

## 🔧 代码规范与设计美学

1. **样式与美学系统**：使用 **Tailwind CSS 4** 与 **Liquid Glass** 磨砂玻璃流动美学，完美自适应明暗主题。
2. **严格质量保证**：
   - 提交前请执行 `pnpm format && pnpm lint` 保证符合 Biome 标准。
   - JSON 架构由 Zod 强类型严格约束，运行 `pnpm check-types` 可提前验证。

---

## 📄 授权协议

**MIT License** (允许免费商用、私有化部署、任意二次开发、修改与分发)。

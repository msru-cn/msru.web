# msru.web 独立化 · 内容运行时化 · Gen UI 设计

- 日期：2026-07-11
- 状态：待用户审阅
- 来源：从 `msru.platform` monorepo 的 `apps/docs` 抽离，落地为独立项目 `msru.web`

## 1. 背景与目标

现状：`apps/docs` 是 monorepo 内的一个 workspace 包，技术栈为 **Next.js 16 + Fumadocs（fumadocs-core/mdx/ui）+ AI SDK（@ai-sdk/react + ai@6）+ Tailwind 4 + shadcn**，依赖内部包 `@msru/ui`（workspace:*）等。内含约 155 个文档 MDX、约 12,745 行手写营销页 TSX（`app/(home)` 下 60+ 页），并已接入 AI 对话（`components/ai` + `api/chat` 转 Dify 流）与 llms.txt/llms-full.txt。

用户目标（经澄清）：

1. **抽离**：把项目从 monorepo 抽出，成为独立仓库 `msru.web`，可独立 dev/build，不依赖 monorepo。
2. **组件化**：把营销页的裸 JSX（“土代码”）重构为数据驱动的可复用组件库。
3. **内容运行时化**：内容更新（GitHub 文档 / 数据库）**不需要重新 build 或编译**即可生效。
4. **Gen UI**：用 AI SDK 那套（tool call + SSE 流 + 前端按 type 渲染组件），让 AI 回答时动态渲染富卡片。

### 明确不做（YAGNI / 已否决）

- **不换框架到 Rspress**。理由：Rspress 是纯 SSG，其“快”是构建期的快，无法满足“内容更新不 build”的运行期诉求；且 gen UI 依赖 Next.js API Route，换 Rspress 会撕裂现有 AI 后端地基。换 Rspress 对本项目诉求为净负。
- **不整包 copy `@msru/ui`**（190 文件巨库，含 3D/PDF/编辑器等无关依赖）。
- **不做非开发者可视化后台 CMS**（本期“CMS”指内容架构统一 + 运行时可更新，非可视化编辑后台）。

## 2. 范围拆解（有依赖顺序）

四个阶段，后者依赖前者：

- **P0 抽离**：干净迁出到 `msru.web`，切断 workspace 依赖，能独立运行。
- **P1 组件化**：营销区块抽成数据驱动组件库（也是 P3 卡片的渲染目标）。
- **P2 内容运行时化**：内容源统一 + 混合运行时策略，内容更新不 build。
- **P3 Gen UI**：在现有 AI SDK 骨架上扩展多种富卡片 tool + 前端渲染。

## 3. P0 — 抽离策略

决策（已确认）：

- **包管理器**：pnpm。
- **git**：在 `msru.web` 新建独立仓库（`git init`），不带 monorepo 历史。
- **`@msru/ui` 处理**：**只提取实际用到的组件**。docs 实际仅用到 `Button`、`Switch`、`Accordion`（及其子件）、`Breadcrumb`、`buttonVariants`、自定义 `StatusPage`（primitive）、工具函数 `cn`。标准 shadcn 组件在独立项目内重新生成/内联；自定义组件（如 StatusPage）copy 源码过来。

迁移动作：

- copy 源码与配置：`app/`、`components/`、`content/`、`lib/`、`public/`、`mdx-components.tsx`、`source.config.ts`、`next.config.mjs`、`postcss.config.mjs`、`tsconfig.json`、`biome.json`（从 monorepo 根提取需要的部分）、`package.json`。
- **排除构建产物**：`node_modules/`、`.next/`、`.turbo/`、`.source/`、`tsconfig.tsbuildinfo`、`.DS_Store`。
- 依赖内联：`package.json` 移除 `@msru/ui`（workspace:*），补齐它间接带来的直接依赖（radix、cva、clsx、tailwind-merge 等，多数 docs 已直接声明）。
- 配置修正：`tsconfig.json` 移除 `@msru/ui/*` 的 path 映射，改为本地 `components/ui/*`；tailwind/biome 从依赖 monorepo config 改为独立配置。

验收：`pnpm install && pnpm dev` 与 `pnpm build` 在 `msru.web` 内独立通过，无 monorepo 依赖残留。

## 4. P1 — 组件化（数据驱动）

决策（已确认）：**数据驱动**——组件只负责渲染，页面/内容源传入数据。一次抽取同时服务 P1（页面变干净）、P2（数据可外置）、P3（gen UI 复用同一组件）。

从首页 `app/(home)/page.tsx` 已识别的重复 pattern（跨产品页/方案页复现）：

- `Hero`：主标题 + 副文案 + CTA 按钮组。
- `BentoGrid` + `BentoCard`：产品卡（icon / accentColor / title / tagline / description），支持跨列大卡变体。
- `FeatureList`：图标 + 标题 + 描述的服务/特性列表。
- `StatBlock`：统计数字卡（数值 + 单位 + 标签）。
- `CTASection`：底部行动号召段。
- `SolutionSection`、`PricingCard`：从方案页与定价页抽取。

放置：独立项目 `components/marketing/`。每个组件定义清晰 props 接口（TS 类型即数据契约），可独立理解与测试。

原则：遵循现有 Tailwind 视觉风格（Apple/Bento 风），不做无关重构；组件边界以“可被 AI 卡片复用”为约束之一。

## 5. P2 — 内容运行时化（混合策略）

核心目标（已确认）：内容更新（GitHub 文档 / 数据库）**不重新 build/编译**即可生效。本质是把内容从“构建期资产”变为“运行期数据”——这正是 Next.js 能而纯 SSG 不能的能力。

决策（已确认）：**混合策略**，按内容类型分治。

- **结构化数据（产品卡、定价、方案元数据）→ 来源数据库 → 实时读取 + 缓存**。改 DB 后即时生效；用缓存（如 Next.js `fetch` cache / `unstable_cache` + tag）兜住性能，避免每次请求打库。
- **长文 MDX（文档、方案长文）→ 来源 GitHub/远程 → ISR 按需重验证**。默认命中缓存（快）；内容更新通过 webhook 触发 `revalidatePath`/`revalidateTag` 或定时 `revalidate`，**单页**后台再生成，不做全站 build。

远程 MDX “慢”的治理：不在请求时现编译整页，改为“首次编译→缓存→按需重验证”。编译只在缓存失效时发生一次，不是每次请求。

内容源载体：结构化数据可存 MDX frontmatter 或数据库均可（本设计支持二者）；营销结构化数据倾向 DB（满足实时），长文倾向 MDX（满足富文本 + ISR）。

验收：修改 GitHub 上一篇 MDX 或数据库中一条产品数据后，**不触发 build/部署**，对应页面在约定时效内（数据实时 / 文档秒~分钟级）反映更新。

## 6. P3 — Gen UI（AI 动态卡片）

现状雏形：现有 `api/chat` 已把 Dify 流转成 AI SDK 的 UI Message Stream（SSE），并已实现一个“假 tool”——`message_end` 时后端 enqueue `tool-input-available`（toolName `provideLinks`），前端 `Message` 组件按 `part.type === "tool-provideLinks"` 渲染参考链接卡片。**gen UI 完整机制已跑通一遍**，只是渲染的是链接卡片、且 tool 由后端硬编码。

决策（已确认）：**改用 AI SDK 的 `streamText` + tools，后端接 DashScope/qwen（支持 function calling）**，由模型自主决定调用哪个卡片 tool、填什么数据。这是标准 gen UI、控制力最强。

设计：

- **卡片组件**：复用 P1 的数据驱动组件（`BentoCard`/`PricingCard`/`SolutionSection` 等）作为渲染目标。
- **tool 定义**：如 `provideProductComparison`、`providePricing`、`provideSolution`，每个 tool 的输出 schema（zod）对应一种卡片的 props 契约。
- **传输**：沿用 UI Message Stream（SSE）；工具输出作为 tool part 流式下发。
- **前端渲染**：在 `Message` 组件按 `part.type === "tool-<name>"` 映射到对应卡片组件（照现有 `tool-provideLinks` 先例扩展）。
- **RAG 衔接**：qwen tool 路径与知识库检索的关系在实施计划阶段细化（可将检索作为一个 tool，或保留 Dify 作为知识检索来源、qwen 负责编排卡片）。

验收：向站内 AI 提问（如“对比 MES 和 WMS”“APS 多少钱”），模型自主发起对应 tool call，前端流式渲染出产品对比卡 / 定价卡，而非纯文字。

## 7. 架构隔离与单元边界

- 组件库（`components/marketing/`、`components/ui/`）：纯渲染，props 即契约，可独立测试。
- 内容层（`lib/content/`）：封装“取数据 + 缓存 + 重验证”，对页面暴露稳定接口，隐藏 DB/远程/ISR 细节。
- AI 层（`api/chat` + `components/ai/` + tools 定义）：tool schema 是前后端契约；卡片渲染依赖组件库。
- 三层通过明确接口通信，可独立理解与替换。

## 8. 里程碑顺序

P0（可独立运行）→ P1（组件库就位）→ P2（内容运行时化）→ P3（gen UI 卡片）。每阶段独立可验收，后阶段依赖前阶段产物。

## 9. 待实施计划阶段细化的开放项

- P0：从 monorepo 根 `biome.json`/`tailwind-config`/`typescript-config` 提取哪些具体配置项。
- P2：结构化数据的数据库选型/接入方式；webhook 重验证的具体触发链路。
- P3：qwen 接入的凭据来源（复用 core.ai_providers 的 DashScope key）、RAG 与 tool 编排的具体分工。

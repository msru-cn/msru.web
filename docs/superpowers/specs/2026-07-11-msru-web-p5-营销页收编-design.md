# msru.web P5 · 营销页收编（app/(home) 组件化与清创）设计

- 日期：2026-07-11
- 状态：待用户审阅
- 前置：P1 已建营销组件原语（Hero/StatBlock/BentoCard/CTASection/FeatureList + accent 色板 + `@/content/marketing` 数据层），但仅 3/70 页采用。
- 定位：把 `app/(home)` 下 70 个页面、约 11,745 行旧 AI 手写裸 JSX，**收编**到已有组件 + 数据层；补齐缺失组件；清创坏代码。**不改观感**（允许把同一意图的多种硬编码写法统一成一种规范）。

## 1. 背景与目标（基于实测审计）

审计事实（`wc -l` / grep 实测，非估算）：
- `app/(home)` 共 **70 个 page.tsx + 1 个 layout.tsx（609 行）= 12,354 行**；页面本体 11,745 行。
- 最大单文件 `company/brand/fractal/page.tsx` **874 行**；6 个页面超 400 行。
- **仅 3/70 页**（`page.tsx`、`products/aps`、`products/mes`）引用 `@/components/marketing`，且这 3 页也只收编了头尾 chrome，中间 bento 网格仍手写。
- 其余 67 页为纯裸 JSX，无共享组件、无数据/表现分离。

核心判断：**这不是"重写"，是"收编 + 补齐 + 清创"**。P1 已建对的原语，问题是采用率停在 3/70。最高杠杆的活是**采用（adoption）**，不是新写。

用户已确认的范围决策：
1. 深度 = **先收编不改观感**。
2. 观感边界 = **允许统一写法**：同一意图的多种硬编码（如主 CTA 按钮 `rounded-full` vs `rounded-xl` 各半、hero 两套 `min-h-[90vh]` / `bg-zinc-950`）收编时统一成一种规范，轻微观感变化可接受。
3. 验证 = **抓渲染 HTML 自查 + 用户抽查**，不上 Playwright 视觉快照。

### 明确不做（YAGNI）

- 不重做视觉设计语言（配色/间距/排版风格保持现状）。
- 不上 Playwright / 视觉回归基建。
- 不动全局 chrome 的渲染结构（nav/footer 布局不变，仅抽数据）。
- 不新增页面、不改路由结构（除修复已存在的 redirect/href 漂移）。
- 不碰 `app/docs`、`app/(content)`、AI/gen UI 等非 `(home)` 区域。

## 2. 收编目标：重复模式 → 组件（实测计数）

审计出的高频复制块，及其归宿：

**已有 P1 组件、只需采用（adoption）：**
- **Glow Hero**（`min-h-[90vh]` 居中大 hero + 光晕 + 徽章 + 双 CTA）——8 页重复 → 用 `<Hero>`。
- **Dark Stat Band**（`bg-zinc-950` + `text-6xl md:text-7xl` 数字网格）——8 页重复，`text-6xl` 数字出现 28 次 → 用 `<StatBlock>`。
- **Bento feature grid**（`rounded-[2.5rem] border border-border/50` 卡）——卡壳复制 **49 次**（7 产品页×7 张）→ 用 `<BentoCard>/<BentoGrid>`。
- **Bottom CTA band**——CTA 按钮 `rounded-full` 18 次 / `rounded-xl` 16 次（两种写法，收编时统一）→ 用 `<CTASection>`。

**缺失、需新建组件：**
- **`SubPageTemplate`**：`pt-32 pb-24 bg-zinc-950` 紧凑 hero + 局部数据数组 + 卡片网格 + CTA 的子页模板——**24 页**共享（全部 `trust/*`、`pricing`、`tco`、`customers`、`support`、`training`、`kb`、`marketplace`、`partners/*`、`releases`、`whitepapers`、`investors`、`solutions`、`company/supply-chain`）。
- **`DataTable`**：`th`/`td` 字符级复制的对比/矩阵表——**5 页**（`eol`、`tco`、`trust/accessibility`、`trust/sub-processors`、`trust/compliance-matrix`）。
- **`PricingTable`**：3 档套餐卡 + "最受欢迎"徽章 + 特性勾选表（`pricing/page.tsx:66-98`）——当前一次性，抽成组件。

**数据层扩展：** 收编的每页内容（stat 数值、卡片文案、FAQ、表格行、套餐）迁到 `@/content/marketing/`（沿用 P1 数据/表现分离模式）。

## 3. 清创清单（收编时一并修，均有实测出处）

- **幻觉 CSS 变量** `--twbg-linear-to-tops`（`products/wms/page.tsx:324`）——不存在的变量，渐变静默不渲染。删除/修正。
- **错乱注释编号** `{/* 9. 巨型底部 CTA */}`（`products/qms:188`、`products/aps:129`）——从长兄页面剪切遗留，无 5-8 节。收编后自然消除。
- **3 个 redirect 桩页 + 导航 href 漂移**：`trust/data→/trust/data-residency`、`trust/compliance→/trust/compliance-matrix`、`company/investors→/investors`。收编时校正 layout 内 nav href 指向真实路由，评估桩页去留。
- **深层相对 import**（`products/aps:16`、`products/qms:14` 用 `../../../../components/hero-mockup`）——统一为 `@/` 别名。
- **无障碍最低补齐**：装饰性图标加 `aria-hidden`；`DataTable` 加表头 scope；不追求全面 a11y，仅在新建/收编组件里做对。

## 4. layout.tsx 处理（609 行）

- 现状：`<HomeLayout>` 壳（fumadocs）+ 6 个内联 mega-menu 配置数组（`layout.tsx:48-476`，约 430 行硬编码菜单数据，含内联 Unsplash URL + magic grid className）+ `<AppleFooter>`。
- 动作：**渲染结构不动**（`HomeLayout`/`NavMegaMenu`/`AppleFooter` 保留），把 6 个 mega-menu 数据数组抽到 `@/content/marketing/nav.ts`。校正其中漂移的 href。外部 Unsplash URL 集中登记（本期不下载本地化，仅归拢）。

## 5. 执行策略（分批、可渐进、每批验证）

采用"**样板先行 + 分批铺开**"，符合用户"先出样板再批量铺"的偏好倾向与低风险诉求：

- **批次划分**（按重复密度与价值排序）：
  1. 补齐 3 个缺失组件（SubPageTemplate/DataTable/PricingTable）+ 各写单测。
  2. **产品页 8 页**（bento 49 次重复的重灾区，最高杠杆）：`ai/iot/wms/qms/eam/digital-twin` + 补全 `aps/mes` 的 bento 中段。
  3. **trust/工具页 24 页**：套 `SubPageTemplate` + 数据外置。
  4. **solutions/company/services/legal/partners 等剩余页**。
  5. layout 菜单数据外置 + href 校正 + 清创扫尾。
- **每批验证**：
  - 类型检查 `pnpm check-types` 干净。
  - 组件单测（新建组件 TDD；数据 schema 校验）。
  - 起 dev 逐页抓渲染后 HTML，自查关键文案/结构在、无运行时 `⨯`；用户抽查关键页。
- **每批一提交**，可随时叫停/回滚。

## 6. 观感统一规范（本期唯一允许的观感变化）

同一意图的多种硬编码，收编时各取一种为规范：
- **主 CTA 按钮**：统一为 P1 `<CTASection>` 内既有按钮样式（二者取其一，收编时定稿并记录）。
- **Hero**：`<Hero>` 支持现有两种背景变体（`min-h-[90vh]` glow / `bg-zinc-950` compact）作为 prop 变体，页面按原样传参——即"统一到一个组件、保留两种观感"，不强行抹平成一种视觉。
- **accent 颜色**：裸页硬编码的 `text-emerald-400`/`text-rose-500` 等，改走 P1 `accent.ts` 的 `AccentColor` token。

## 7. 交付物（P5 阶段拆解，详见对应 plan）

- **P5-T1** 新建 SubPageTemplate + DataTable + PricingTable（TDD）。
- **P5-T2** 收编 8 个产品页 + 数据外置到 `@/content/marketing/products/*`。
- **P5-T3** 收编 24 个 trust/工具页（SubPageTemplate + 数据外置）。
- **P5-T4** 收编 solutions/company/services/legal/partners 剩余页。
- **P5-T5** layout 菜单数据外置 + nav href 校正 + 清创扫尾（幻觉变量/注释/相对 import/redirect 桩）。
- **P5-T6** 全量类型检查 + 单测 + 逐页抓渲染自查 + 用户抽查验收。

## Self-Review

**Spec coverage：** 覆盖用户三项确认决策（先收编不改观感 / 允许统一写法 / 抓渲染+抽查验证）与我预判未否决的三条（补 3 组件 / 清创 / layout 抽数据不动结构）。重复模式与清创项全部落到实测出处（行号/计数）。

**边界清晰：** 明确不做重设计、不上 Playwright、不动 chrome 结构、不动非 (home) 区域。观感变化被严格约束为"同意图多写法统一 + accent token 化 + hero 双变体保留"，不做视觉重做。

**风险控制：** 分 6 批、每批类型检查+单测+抓渲染自查+用户抽查、每批一提交可回滚；最高杠杆的产品页 bento（49 次重复）排在补组件之后第一批铺开。

**依赖一致性：** 复用 P1 `@/components/marketing` 原语与 `@/content/marketing` 数据层、`accent.ts` token；新增 3 组件同址同测风格；不引入新框架/依赖。

# P6 · 官网营销页结构化区块化（SDUI-ready）设计

日期：2026-07-12
状态：设计已确认，待用户复核 spec
前置：P5「营销页收编」已把 hero/stat/bento/feature/cta/table/pricing/legal 等抽成共享组件（`components/marketing/*`）。P6 在此基础上收口为**数据驱动的区块渲染体系**。

## 1. 目标与非目标

### 目标
把一类「营销叙事页」从「手写 JSX 拼装」升级为「**区块注册表 + 数据驱动渲染**」：页面 = 一份 JSON（blocks 数组）→ Zod 校验 → BlockRenderer 按 `type` 分发到组件。现在喂本地 mock JSON，将来把 `import` 换成 `fetch(后端)` 即成 SDUI，切换成本≈一行。

### 非目标
- 不改造功能页 / 非区块页：`contact`（表单）、`status`（实时）、`sitemap`、`ai/genui`、`company/brand/*`（4 个几百行品牌视觉展演，是「作品」非「营销区块」）、3 个 redirect stub。
- 不动 `legalDoc` 文档体系（P5 已独立，保持原样）。
- 本次不做后端；只做 mock JSON 驱动 + 校验层前置，为 SDUI 铺路。

## 2. 页面树分类（68 页盘点结论）

- **营销叙事页（本次战场）**：products + products/{ai,aps,mes,wms,qms,eam,iot,digital-twin}；solutions + solutions/{ev-battery,semiconductor,automotive,3c,agriculture}；services 及子页、partners/{isv,hardware}、marketplace；company/{about,supply-chain}、careers、esg、investors、community、blog/engineering；customers、releases、whitepapers、kb、pricing、tco、eol、training、support。
- **文档/条款页（P5 已收编，不动）**：legal/*、company/{trademarks,code-of-conduct}、trust/* 一批。
- **功能页/非区块页（跳过）**：contact、status、sitemap、ai/genui、company/brand/*、redirect stub。

## 3. 区块词汇表（15 类营销块 + 1 逃生舱）

对标 WordPress Gutenberg 核心块、Framer/Webflow section 库、SaaS landing 标准解剖、苹果营销范式过滤而来。标注「P5」= 可直接接管已有组件，「NEW」= 本次新建。

| # | type | 关键字段（JSON） | 来源 |
|---|------|------------------|------|
| 1 | `hero` | variant:"dark"\|"narrative"\|"search"、badge?{icon,text}、title、subtitle?、accentColor?、bgImage?、ctas[]? | P5 SubPageHero + 产品页大 hero |
| 2 | `statBand` | heading、accentColor、stats[]{value,unit,label} | P5 StatBlock |
| 3 | `featureGrid` | columns:2\|3、cards[]{icon,title,desc} | P5 SubPageCardGrid |
| 4 | `bento` | items[]{icon,title,desc,span?,accentColor?} | P5 BentoCard/BentoGrid |
| 5 | `splitMedia` | image、side:"left"\|"right"、eyebrow?、title、body、bullets[]?、cta? | NEW |
| 6 | `list` | variant:"timeline"\|"cards"\|"rows"\|"steps"、items[]{title,meta?,desc?,tag?,href?} | NEW（含 steps 折入） |
| 7 | `caseList` | cases[]{company,industry,result,quote,image} | NEW（收编 customers/marketplace/partners 同构） |
| 8 | `statement` | title、body?、accentColor? | NEW（产品页「设计哲学宣言」大字块） |
| 9 | `cta` | variant:"small"\|"large"、title、description?、cta{label,href}、accentColor? | P5 SubPageCta + CTASection |
| 10 | `logoWall` | items[]{name,src?} | NEW |
| 11 | `pricingTable` | plans[] | P5 PricingTable |
| 12 | `faq` | items[]{q,a} | NEW（手风琴，全站现缺） |
| 13 | `testimonial` | quote、author、role?、avatar? | NEW（大引言/证言，苹果签名） |
| 14 | `mediaShowcase` | media、caption?、title? | NEW（全宽/居中媒体主角，苹果签名） |
| 15 | `connectivityGlobe` | markers[]{lat,lng,label?}、autoRotate? | NEW（Magic UI Globe，讲「全球工业节点互联」） |
| 16 | `animatedBeams` | nodes[]{icon,label}、edges[]{from,to} | NEW（Aceternity/Magic UI Beam，讲「微服务架构数据流动」） |

逃生舱：`custom` — `{type:"custom", component:"<key>", props}`，映射到 `customComponents` 注册表；极度定制块（agriculture 8 段叙事等）走这里，或整页跳过，**不污染通用 schema**。

移出：`dataTable` 不进营销注册表，归 utility 族（与 legalDoc 同层，服务 tco/compliance-matrix/accessibility）。

## 4. 架构与数据流

```
content/marketing/pages/<slug>.json         ← mock 数据（纯 JSON blocks 数组）
        │  import（现在）→ fetch（以后接后端 = SDUI）
        ▼
lib/marketing/blocks-schema.ts (Zod)          ← discriminated union，运行时 parse
        │  校验通过 → Block[]；失败 → 开发期抛错、生产期跳过坏块并告警
        ▼
components/marketing/block-renderer.tsx        ← 按 block.type 分发；14/16 client 块懒加载
        ▼
app/(home)/<page>/page.tsx = 读 JSON → <BlockRenderer blocks={...}/>（页面瘦成 ~5 行）
```

### 关键约定（因选 JSON + Zod）
- **icon 用字符串 key**：JSON 写 `"icon":"Sparkles"`；`lib/marketing/icon-registry.ts` 映射 `string → LucideIcon`，查不到降级为无图标（不崩）。
- **图片/链接/媒体就是字符串 URL**，JSON 原生支持。
- **Zod 校验放在 BlockRenderer 入口**：本地 JSON 与后端 JSON 走同一条 parse+分发路径。
- **校验失败策略**：`process.env.NODE_ENV==="development"` 抛错定位；生产环境跳过坏块、`console.warn` 记录，保证页面永不整页崩（延续 P4「无法优雅解析也不崩」的原则）。
- **客户端块隔离**：connectivityGlobe / animatedBeams / faq（手风琴）是 client component，用 `next/dynamic` 懒加载，静态页首屏不受拖累。

### 目录结构
```
lib/marketing/
  blocks-schema.ts        # Zod union + 导出 Block 类型
  icon-registry.ts        # 字符串→LucideIcon
  custom-registry.ts      # 字符串→bespoke 组件
components/marketing/
  block-renderer.tsx      # 分发器
  blocks/                 # 每类块一个渲染组件（复用 P5 组件 or NEW）
    split-media.tsx  list-block.tsx  case-list.tsx  statement.tsx
    logo-wall.tsx  faq.tsx  testimonial.tsx  media-showcase.tsx
    connectivity-globe.tsx  animated-beams.tsx
content/marketing/pages/
  <slug>.json             # 本次切片 3 个页面
```

## 5. Zod schema 骨架（示意）

```ts
import { z } from "zod";

const accent = z.enum(["blue","emerald","amber","orange","rose","slate","purple","fuchsia","teal","cyan"]).optional();
const cta = z.object({ label: z.string(), href: z.string() });

const hero = z.object({
  type: z.literal("hero"),
  variant: z.enum(["dark","narrative","search"]).default("dark"),
  badge: z.object({ icon: z.string(), text: z.string() }).optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  accentColor: accent,
  bgImage: z.string().optional(),
  ctas: z.array(cta).optional(),
});

const statBand = z.object({
  type: z.literal("statBand"),
  heading: z.string(),
  accentColor: accent,
  stats: z.array(z.object({ value: z.string(), unit: z.string(), label: z.string() })),
});

// … 其余 14 类同理 …

const custom = z.object({ type: z.literal("custom"), component: z.string(), props: z.record(z.unknown()).optional() });

export const blockSchema = z.discriminatedUnion("type", [hero, statBand, /* … */ custom]);
export const pageSchema = z.array(blockSchema);
export type Block = z.infer<typeof blockSchema>;
```

## 6. 本次垂直切片（跑通闭环，验证后再批量铺）

选 3 个页面，尽量多覆盖块类型 + 两个签名块：

1. **products/iot** → hero、statBand、`animatedBeams`（IoT→边缘→平台→MES/WMS 数据流）、statement、bento、`connectivityGlobe`（全球设备接入）、cta。覆盖两个技术签名块。
2. **solutions/ev-battery** → hero、featureGrid、splitMedia、cta。干净的小行业页，验证图文块。
3. **customers** → hero、caseList、testimonial、cta。验证案例/证言族。

三页合计覆盖 ~12/16 块类型 + globe + beams。原三页手写 JSX 备份进 workspace，改造后按渲染比对（curl 抓 HTML + grep 内容 + HTTP 200 + 无 `⨯`），人工抽查观感。

## 7. 依赖

- Magic UI Globe：`cobe` + `framer-motion`（或直接搬 Magic UI 源码单文件）。
- Animated Beams：Framer Motion（已在 P5 依赖树内确认可用）；节点连线用 SVG + motion。
- 优先「搬源码进 components/marketing/blocks/」而非加 npm 依赖，避免锁版本；仅 `cobe`（地球 WebGL）需新增。

## 8. 验收（延续 P5 手法，非 Playwright）
- `pnpm check-types` 干净。
- 每个新块 + BlockRenderer + schema 走 TDD：Zod parse 单测（合法/非法/降级）、渲染单测。
- 3 切片页 curl 渲染 200 + 内容 grep 一致 + dev 日志 0 `⨯`。
- `pnpm build` 全绿。
- 交用户抽查观感。

## 9. 后续（本次不做）
切片验证通过后，按「产品族 → 行业族 → 公司/资讯族」批量把营销叙事页转为 JSON 驱动；agriculture 等极度定制页走 custom 或删减；最终页面文件全部瘦身为 `import json + BlockRenderer`。

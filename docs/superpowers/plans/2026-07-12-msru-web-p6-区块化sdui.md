# P6 官网营销页结构化区块化（SDUI-ready）Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把一类营销叙事页从手写 JSX 升级为「区块注册表 + JSON/Zod 数据驱动渲染」，本地 mock JSON 驱动，换 fetch 即成 SDUI。

**Architecture:** 每页一份 JSON（blocks 数组）→ `lib/marketing/blocks-schema.ts`（Zod discriminated union）运行时 parse → `components/marketing/block-renderer.tsx` 按 `block.type` 分发到 15 类块组件（8 类接管 P5 组件、7 类新建）+ `connectivityGlobe`/`animatedBeams` 两个技术签名块 + `custom` 逃生舱。icon 用字符串 key 经 registry 映射，client 块懒加载。

**Tech Stack:** Next.js 16.1.6 / React 19 / TypeScript / Tailwind v4 / Zod v4 / framer-motion v12 / lucide-react 0.563 / cobe（新增，地球 WebGL）/ vitest + @testing-library/react / Biome / pnpm。

## Global Constraints

- 包管理器 `pnpm`；类型检查 `pnpm check-types`；测试 `pnpm vitest run`；构建 `pnpm build`；lint `pnpm biome check --write <files>`。
- 路径别名 `@/*` → 仓库根；`cn` 来自 `@/lib/cn`（= tailwind-merge 的 twMerge）。
- Zod 为 v4（`z.discriminatedUnion`、`z.infer` 可用）。
- 校验失败策略：`NODE_ENV==="development"` 抛错；生产环境跳过坏块 + `console.warn`，页面永不整页崩。
- client 块（connectivityGlobe/animatedBeams/faq）用 `next/dynamic` 懒加载，禁止进入静态首屏同步树。
- AccentColor 现有 9 色（blue/emerald/amber/orange/rose/slate/purple/fuchsia/teal），本计划 Task 1 追加 `cyan`。
- 测试文件与源码同目录（`components/marketing/blocks/x.test.tsx`）；测试用 `import { expect, test } from "vitest"` + `@testing-library/react`。
- 验证手法：curl 抓渲染（HTTP 200 + grep 内容）+ dev 日志 0 `⨯`，非 Playwright。dev server 复用现有 `localhost:3007`（若未起则 `pnpm dev` 后台起）。
- 不改造：contact、status、sitemap、ai/genui、company/brand/*、redirect stub、legal/*、trust/* 文档页。

---

## 文件结构

```
lib/marketing/
  icon-registry.ts        # string → LucideIcon（Task 2）
  custom-registry.ts      # string → bespoke 组件（Task 3）
  blocks-schema.ts        # Zod union + Block 类型（Task 4，随块递增）
components/marketing/
  accent.ts               # 追加 cyan（Task 1）
  block-renderer.tsx      # 分发器 + 校验入口（Task 5，随块递增）
  blocks/
    split-media.tsx (+test)        # Task 6
    list-block.tsx (+test)         # Task 7
    case-list.tsx (+test)          # Task 8
    statement.tsx (+test)          # Task 9
    logo-wall.tsx (+test)          # Task 10
    faq.tsx (+test)                # Task 11
    testimonial.tsx (+test)        # Task 12
    media-showcase.tsx (+test)     # Task 13
    connectivity-globe.tsx (+test) # Task 14
    animated-beams.tsx (+test)     # Task 15
content/marketing/pages/
  products-iot.json       # Task 17
  solutions-ev-battery.json # Task 18
  customers.json          # Task 19
```

接管型块（hero/statBand/featureGrid/bento/cta/pricingTable）不新建组件，直接在 block-renderer 里适配到 P5 组件（Task 16）。

---

### Task 1: accent.ts 追加 cyan

**Files:**
- Modify: `components/marketing/accent.ts`
- Test: `components/marketing/accent.test.ts`（已存在，追加用例）

**Interfaces:**
- Produces: `AccentColor` 新增 `"cyan"` 成员；`getAccent("cyan")` 返回 cyan 类。

- [ ] **Step 1: 追加失败测试**

在 `components/marketing/accent.test.ts` 末尾追加：

```ts
test("cyan accent resolves", () => {
  expect(getAccent("cyan").text).toBe("text-cyan-500");
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run components/marketing/accent.test.ts`
Expected: FAIL（cyan 未定义，text 非 text-cyan-500）

- [ ] **Step 3: 实现**

在 `accent.ts` 的类型联合追加 `| "cyan"`，在 `MAP` 追加一行：

```ts
  cyan:    { text: "text-cyan-500",    border: "hover:border-cyan-500/50",    glow: "from-cyan-500/20 to-transparent",    gradientFrom: "from-cyan-500" },
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run components/marketing/accent.test.ts`
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add components/marketing/accent.ts components/marketing/accent.test.ts
git commit -m "feat(marketing): add cyan accent color"
```

---

### Task 2: icon-registry（字符串 → LucideIcon）

**Files:**
- Create: `lib/marketing/icon-registry.ts`
- Test: `lib/marketing/icon-registry.test.ts`

**Interfaces:**
- Produces: `resolveIcon(name?: string): LucideIcon | undefined` — 命中返回组件，未命中/未传返回 `undefined`（调用方降级为无图标）。

- [ ] **Step 1: 写失败测试**

```ts
import { Sparkles } from "lucide-react";
import { expect, test } from "vitest";
import { resolveIcon } from "./icon-registry";

test("resolves known icon by name", () => {
  expect(resolveIcon("Sparkles")).toBe(Sparkles);
});

test("returns undefined for unknown or missing", () => {
  expect(resolveIcon("NopeIcon")).toBeUndefined();
  expect(resolveIcon(undefined)).toBeUndefined();
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run lib/marketing/icon-registry.test.ts`
Expected: FAIL（模块不存在）

- [ ] **Step 3: 实现**

```ts
import {
  Activity, AlbumIcon, ArrowRight, Battery, Box, Briefcase, CalendarDays,
  Camera, CheckCircle, Code, ComponentIcon, Cpu, Database, Eye, FileText,
  Globe, Handshake, HardDrive, Layers, LayoutTemplate, Network, Package,
  Puzzle, Settings, Shield, ShieldCheck, Sparkles, Sprout, Star, Terminal,
  TrendingUp, Users, Zap, type LucideIcon,
} from "lucide-react";

const REGISTRY: Record<string, LucideIcon> = {
  Activity, AlbumIcon, ArrowRight, Battery, Box, Briefcase, CalendarDays,
  Camera, CheckCircle, Code, ComponentIcon, Cpu, Database, Eye, FileText,
  Globe, Handshake, HardDrive, Layers, LayoutTemplate, Network, Package,
  Puzzle, Settings, Shield, ShieldCheck, Sparkles, Sprout, Star, Terminal,
  TrendingUp, Users, Zap,
};

export function resolveIcon(name?: string): LucideIcon | undefined {
  if (!name) return undefined;
  return REGISTRY[name];
}
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run lib/marketing/icon-registry.test.ts`
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add lib/marketing/icon-registry.ts lib/marketing/icon-registry.test.ts
git commit -m "feat(marketing): add icon registry (string to LucideIcon)"
```

---

### Task 3: custom-registry（逃生舱）

**Files:**
- Create: `lib/marketing/custom-registry.tsx`
- Test: `lib/marketing/custom-registry.test.tsx`

**Interfaces:**
- Produces: `resolveCustom(key: string): React.ComponentType<Record<string, unknown>> | undefined`。初始注册表为空对象（后续按需加 bespoke 组件），未命中返回 `undefined`。

- [ ] **Step 1: 写失败测试**

```tsx
import { expect, test } from "vitest";
import { resolveCustom } from "./custom-registry";

test("returns undefined for unregistered custom key", () => {
  expect(resolveCustom("NotRegistered")).toBeUndefined();
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run lib/marketing/custom-registry.test.tsx`
Expected: FAIL（模块不存在）

- [ ] **Step 3: 实现**

```tsx
import type { ComponentType } from "react";

// bespoke 组件在此注册：key → 组件。初始为空，按需追加。
const CUSTOM: Record<string, ComponentType<Record<string, unknown>>> = {};

export function resolveCustom(key: string): ComponentType<Record<string, unknown>> | undefined {
  return CUSTOM[key];
}
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run lib/marketing/custom-registry.test.tsx`
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add lib/marketing/custom-registry.tsx lib/marketing/custom-registry.test.tsx
git commit -m "feat(marketing): add custom component registry (escape hatch)"
```

---

### Task 4: blocks-schema（Zod union，初始纳入接管型块 + custom）

**Files:**
- Create: `lib/marketing/blocks-schema.ts`
- Test: `lib/marketing/blocks-schema.test.ts`

**Interfaces:**
- Produces:
  - `blockSchema`（z.discriminatedUnion "type"）、`pageSchema = z.array(blockSchema)`
  - `type Block = z.infer<typeof blockSchema>`
  - `parsePage(data: unknown): Block[]` — dev 抛错，prod 逐块过滤坏块并 `console.warn`。
  - 本任务纳入的 type：`hero`、`statBand`、`featureGrid`、`bento`、`cta`、`pricingTable`、`custom`。（其余块在各自任务追加，见 Task 6-15 的 schema 步骤。）

- [ ] **Step 1: 写失败测试**

```ts
import { expect, test } from "vitest";
import { pageSchema, parsePage } from "./blocks-schema";

test("valid hero + cta page parses", () => {
  const data = [
    { type: "hero", title: "T", variant: "dark" },
    { type: "cta", variant: "small", title: "C", cta: { label: "Go", href: "/x" } },
  ];
  expect(pageSchema.safeParse(data).success).toBe(true);
});

test("statBand requires stats array", () => {
  const bad = [{ type: "statBand", heading: "H" }];
  expect(pageSchema.safeParse(bad).success).toBe(false);
});

test("parsePage drops invalid block in production", () => {
  const prev = process.env.NODE_ENV;
  // @ts-expect-error override for test
  process.env.NODE_ENV = "production";
  const warn = console.warn;
  console.warn = () => {};
  const out = parsePage([
    { type: "hero", title: "ok" },
    { type: "hero" }, // missing title -> invalid
  ]);
  console.warn = warn;
  // @ts-expect-error restore
  process.env.NODE_ENV = prev;
  expect(out).toHaveLength(1);
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run lib/marketing/blocks-schema.test.ts`
Expected: FAIL（模块不存在）

- [ ] **Step 3: 实现**

```ts
import { z } from "zod";

export const accent = z
  .enum(["blue", "emerald", "amber", "orange", "rose", "slate", "purple", "fuchsia", "teal", "cyan"])
  .optional();
export const cta = z.object({ label: z.string(), href: z.string() });

const hero = z.object({
  type: z.literal("hero"),
  variant: z.enum(["dark", "narrative", "search"]).default("dark"),
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

const featureGrid = z.object({
  type: z.literal("featureGrid"),
  columns: z.union([z.literal(2), z.literal(3)]).default(2),
  cards: z.array(z.object({ icon: z.string().optional(), title: z.string(), desc: z.string() })),
});

const bento = z.object({
  type: z.literal("bento"),
  items: z.array(
    z.object({
      icon: z.string().optional(),
      title: z.string(),
      description: z.string(),
      tagline: z.string().optional(),
      span: z.enum(["normal", "wide"]).optional(),
      accentColor: accent,
    }),
  ),
});

const ctaBlock = z.object({
  type: z.literal("cta"),
  variant: z.enum(["small", "large"]).default("small"),
  title: z.string(),
  description: z.string().optional(),
  cta: cta,
  accentColor: accent,
});

const pricingTable = z.object({
  type: z.literal("pricingTable"),
  plans: z.array(
    z.object({
      name: z.string(),
      price: z.string(),
      unit: z.string().optional(),
      description: z.string(),
      popular: z.boolean().optional(),
      features: z.array(z.string()),
      cta: cta,
    }),
  ),
});

const custom = z.object({
  type: z.literal("custom"),
  component: z.string(),
  props: z.record(z.string(), z.unknown()).optional(),
});

export const blockSchema = z.discriminatedUnion("type", [
  hero, statBand, featureGrid, bento, ctaBlock, pricingTable, custom,
]);
export const pageSchema = z.array(blockSchema);
export type Block = z.infer<typeof blockSchema>;

export function parsePage(data: unknown): Block[] {
  if (process.env.NODE_ENV === "development") {
    return pageSchema.parse(data);
  }
  if (!Array.isArray(data)) {
    console.warn("[marketing] page data is not an array, skipping");
    return [];
  }
  const out: Block[] = [];
  for (const raw of data) {
    const r = blockSchema.safeParse(raw);
    if (r.success) out.push(r.data);
    else console.warn("[marketing] dropped invalid block", r.error.issues);
  }
  return out;
}
```

> 注意：`z.discriminatedUnion` 后续任务会往数组里加成员。追加时保持数组格式即可。

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run lib/marketing/blocks-schema.test.ts`
Expected: PASS（3 tests）

- [ ] **Step 5: 提交**

```bash
git add lib/marketing/blocks-schema.ts lib/marketing/blocks-schema.test.ts
git commit -m "feat(marketing): add blocks Zod schema with parsePage validator"
```

---

### Task 5: block-renderer（分发器骨架，先接管型块）

**Files:**
- Create: `components/marketing/block-renderer.tsx`
- Test: `components/marketing/block-renderer.test.tsx`

**Interfaces:**
- Consumes: `parsePage`/`Block`（Task 4）、`resolveIcon`（Task 2）、`resolveCustom`（Task 3）、P5 组件 `SubPageHero/StatBlock/SubPageCardGrid/BentoCard/BentoGrid/SubPageCta/PricingTable`。
- Produces: `BlockRenderer({ blocks }: { blocks: unknown })` — 先 `parsePage` 再 map 分发；未知/custom-未命中渲染 `null`。导出 `renderBlock(block: Block, index: number): ReactNode` 供内部与测试用。

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { BlockRenderer } from "./block-renderer";

test("renders hero + statBand from data", () => {
  render(
    <BlockRenderer
      blocks={[
        { type: "hero", title: "工业底座", variant: "dark" },
        { type: "statBand", heading: "规模", stats: [{ value: "99", unit: "%", label: "可用性" }] },
      ]}
    />,
  );
  expect(screen.getByRole("heading", { level: 1, name: "工业底座" })).toBeInTheDocument();
  expect(screen.getByText("可用性")).toBeInTheDocument();
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run components/marketing/block-renderer.test.tsx`
Expected: FAIL（模块不存在）

- [ ] **Step 3: 实现**

```tsx
import type { ReactNode } from "react";
import { type Block, parsePage } from "@/lib/marketing/blocks-schema";
import { resolveCustom } from "@/lib/marketing/custom-registry";
import { resolveIcon } from "@/lib/marketing/icon-registry";
import { BentoCard, BentoGrid } from "./bento-card";
import { PricingTable } from "./pricing-table";
import { StatBlock } from "./stat-block";
import { SubPageCardGrid, SubPageCta, SubPageHero } from "./sub-page-template";

export function renderBlock(block: Block, index: number): ReactNode {
  const key = index;
  switch (block.type) {
    case "hero": {
      const icon = resolveIcon(block.badge?.icon);
      return (
        <SubPageHero
          key={key}
          badge={icon && block.badge ? { icon, text: block.badge.text } : undefined}
          title={block.title}
          subtitle={block.subtitle}
          accentColor={block.accentColor}
        />
      );
    }
    case "statBand":
      return <StatBlock key={key} heading={block.heading} accentColor={block.accentColor} stats={block.stats} />;
    case "featureGrid":
      return (
        <section key={key} className="py-24 bg-white dark:bg-zinc-950">
          <div className="container mx-auto px-6 max-w-5xl">
            <SubPageCardGrid
              columns={block.columns}
              cards={block.cards.map((c) => {
                const Icon = resolveIcon(c.icon);
                return { icon: Icon ? <Icon className="size-8" /> : undefined, title: c.title, desc: c.desc };
              })}
            />
          </div>
        </section>
      );
    case "bento":
      return (
        <section key={key} className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
          <BentoGrid>
            {block.items.map((it, i) => {
              const Icon = resolveIcon(it.icon) ?? resolveIcon("Box");
              if (!Icon) return null;
              return (
                <BentoCard
                  key={`${key}-${i}`}
                  icon={Icon}
                  accentColor={it.accentColor ?? "blue"}
                  title={it.title}
                  tagline={it.tagline ?? ""}
                  description={it.description}
                  span={it.span}
                />
              );
            })}
          </BentoGrid>
        </section>
      );
    case "cta":
      return <SubPageCta key={key} title={block.title} description={block.description} cta={block.cta} />;
    case "pricingTable":
      return (
        <section key={key} className="py-24 bg-white dark:bg-zinc-950">
          <div className="container mx-auto px-6 max-w-6xl">
            <PricingTable plans={block.plans} />
          </div>
        </section>
      );
    case "custom": {
      const Comp = resolveCustom(block.component);
      return Comp ? <Comp key={key} {...(block.props ?? {})} /> : null;
    }
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: unknown }) {
  const parsed = parsePage(blocks);
  return <>{parsed.map((b, i) => renderBlock(b, i))}</>;
}
```

> 注意：`BentoCard.tagline` 必填，缺省用 `""`；`accentColor` 缺省 `"blue"`。后续块任务会往 `switch` 追加 `case`。

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run components/marketing/block-renderer.test.tsx`
Expected: PASS

- [ ] **Step 5: check-types + 提交**

Run: `pnpm check-types`
Expected: ✓ Types generated successfully

```bash
git add components/marketing/block-renderer.tsx components/marketing/block-renderer.test.tsx
git commit -m "feat(marketing): add BlockRenderer dispatcher for adopted P5 blocks"
```

---

### Task 6: splitMedia 块（NEW）

**Files:**
- Create: `components/marketing/blocks/split-media.tsx`
- Test: `components/marketing/blocks/split-media.test.tsx`
- Modify: `lib/marketing/blocks-schema.ts`（加 `splitMedia` 到 union）
- Modify: `components/marketing/block-renderer.tsx`（加 case）

**Interfaces:**
- Consumes: `CtaLink`（`@/components/marketing/hero`）、`resolveIcon`。
- Produces: `SplitMedia({ image, side, eyebrow?, title, body, bullets?, cta? }: SplitMediaProps)`；schema type `"splitMedia"` 字段：`image:string, side:"left"|"right"(默认 left), eyebrow?, title, body, bullets?:string[], cta?:{label,href}`。

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { SplitMedia } from "./split-media";

test("renders title, body, image and bullets", () => {
  render(
    <SplitMedia
      image="https://x/y.jpg"
      side="right"
      title="电芯追溯"
      body="全链路数字化"
      bullets={["极片质检", "循环寿命建模"]}
    />,
  );
  expect(screen.getByRole("heading", { name: "电芯追溯" })).toBeInTheDocument();
  expect(screen.getByText("极片质检")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("alt", "电芯追溯");
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run components/marketing/blocks/split-media.test.tsx`
Expected: FAIL（模块不存在）

- [ ] **Step 3: 实现组件**

```tsx
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { CtaLink } from "../hero";

export interface SplitMediaProps {
  image: string;
  side?: "left" | "right";
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  cta?: CtaLink;
}

export function SplitMedia({ image, side = "left", eyebrow, title, body, bullets, cta }: SplitMediaProps) {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div
        className={cn(
          "container mx-auto px-6 max-w-6xl flex flex-col gap-12 items-center",
          side === "right" ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        <div className="relative w-full lg:w-1/2 aspect-4/3 rounded-[2rem] overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="w-full lg:w-1/2 space-y-5">
          {eyebrow && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{eyebrow}</span>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">{title}</h2>
          <p className="text-lg text-zinc-500 leading-relaxed">{body}</p>
          {bullets && (
            <ul className="space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <ArrowRight className="size-4 text-primary shrink-0" aria-hidden="true" /> {b}
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <Link href={cta.href} className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
              {cta.label} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run components/marketing/blocks/split-media.test.tsx`
Expected: PASS

- [ ] **Step 5: 加 schema + 分发 case**

在 `blocks-schema.ts` 追加（并加入 union 数组）：

```ts
const splitMedia = z.object({
  type: z.literal("splitMedia"),
  image: z.string(),
  side: z.enum(["left", "right"]).default("left"),
  eyebrow: z.string().optional(),
  title: z.string(),
  body: z.string(),
  bullets: z.array(z.string()).optional(),
  cta: cta.optional(),
});
```
把 `splitMedia` 加入 `z.discriminatedUnion("type", [ … , splitMedia])`。

在 `block-renderer.tsx` 顶部 import `import { SplitMedia } from "./blocks/split-media";`，在 switch 加：

```tsx
    case "splitMedia":
      return (
        <SplitMedia
          key={key}
          image={block.image}
          side={block.side}
          eyebrow={block.eyebrow}
          title={block.title}
          body={block.body}
          bullets={block.bullets}
          cta={block.cta}
        />
      );
```

- [ ] **Step 6: 运行全测 + check-types**

Run: `pnpm vitest run components/marketing lib/marketing && pnpm check-types`
Expected: PASS + ✓

- [ ] **Step 7: 提交**

```bash
git add components/marketing/blocks/split-media.tsx components/marketing/blocks/split-media.test.tsx lib/marketing/blocks-schema.ts components/marketing/block-renderer.tsx
git commit -m "feat(marketing): add splitMedia block"
```

---

### Task 7: list 块（NEW，含 timeline/cards/rows/steps 变体）

**Files:**
- Create: `components/marketing/blocks/list-block.tsx` (+test)
- Modify: `lib/marketing/blocks-schema.ts`、`components/marketing/block-renderer.tsx`

**Interfaces:**
- Produces: `ListBlock({ variant, items }: ListBlockProps)`；schema type `"list"`：`variant:"timeline"|"cards"|"rows"|"steps"(默认 rows)`、`items[]{title, meta?, desc?, tag?, href?}`。

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ListBlock } from "./list-block";

test("renders rows with title/meta/desc", () => {
  render(
    <ListBlock
      variant="timeline"
      items={[{ title: "v5.4.0", meta: "2026-02-15", desc: "AI 质检模型发布", tag: "Latest" }]}
    />,
  );
  expect(screen.getByText("v5.4.0")).toBeInTheDocument();
  expect(screen.getByText("2026-02-15")).toBeInTheDocument();
  expect(screen.getByText("AI 质检模型发布")).toBeInTheDocument();
  expect(screen.getByText("Latest")).toBeInTheDocument();
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run components/marketing/blocks/list-block.test.tsx`
Expected: FAIL

- [ ] **Step 3: 实现组件**

```tsx
import Link from "next/link";
import { cn } from "@/lib/cn";

export interface ListItem {
  title: string;
  meta?: string;
  desc?: string;
  tag?: string;
  href?: string;
}
export interface ListBlockProps {
  variant?: "timeline" | "cards" | "rows" | "steps";
  items: ListItem[];
}

export function ListBlock({ variant = "rows", items }: ListBlockProps) {
  const grid = variant === "cards" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4";
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <ol className={grid}>
          {items.map((it, i) => {
            const inner = (
              <>
                <div className="flex items-center gap-3 flex-wrap">
                  {variant === "steps" && (
                    <span className="size-7 rounded-full bg-primary/10 text-primary text-sm font-bold grid place-items-center">
                      {i + 1}
                    </span>
                  )}
                  <h3 className="font-bold text-zinc-900 dark:text-white">{it.title}</h3>
                  {it.tag && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500">
                      {it.tag}
                    </span>
                  )}
                  {it.meta && <span className="text-xs text-zinc-400">{it.meta}</span>}
                </div>
                {it.desc && <p className="text-sm text-zinc-500 mt-2">{it.desc}</p>}
              </>
            );
            const cls = cn(
              "p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50",
              variant === "timeline" && "border-l-2 border-l-primary/40",
            );
            return (
              <li key={`${it.title}-${i}`} className={cls}>
                {it.href ? <Link href={it.href} className="block hover:opacity-80">{inner}</Link> : inner}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run components/marketing/blocks/list-block.test.tsx`
Expected: PASS

- [ ] **Step 5: 加 schema + 分发 case**

`blocks-schema.ts` 追加并入 union：

```ts
const list = z.object({
  type: z.literal("list"),
  variant: z.enum(["timeline", "cards", "rows", "steps"]).default("rows"),
  items: z.array(
    z.object({
      title: z.string(),
      meta: z.string().optional(),
      desc: z.string().optional(),
      tag: z.string().optional(),
      href: z.string().optional(),
    }),
  ),
});
```

`block-renderer.tsx` import `ListBlock`，switch 加：

```tsx
    case "list":
      return <ListBlock key={key} variant={block.variant} items={block.items} />;
```

- [ ] **Step 6: 全测 + check-types**

Run: `pnpm vitest run components/marketing lib/marketing && pnpm check-types`
Expected: PASS + ✓

- [ ] **Step 7: 提交**

```bash
git add components/marketing/blocks/list-block.tsx components/marketing/blocks/list-block.test.tsx lib/marketing/blocks-schema.ts components/marketing/block-renderer.tsx
git commit -m "feat(marketing): add list block (timeline/cards/rows/steps)"
```

---

### Task 8: caseList 块（NEW）

**Files:**
- Create: `components/marketing/blocks/case-list.tsx` (+test)
- Modify: `lib/marketing/blocks-schema.ts`、`components/marketing/block-renderer.tsx`

**Interfaces:**
- Produces: `CaseList({ cases }: CaseListProps)`；schema type `"caseList"`：`cases[]{company, industry, result, quote, image}`。

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { CaseList } from "./case-list";

test("renders a case card", () => {
  render(
    <CaseList
      cases={[{ company: "某电池集团", industry: "新能源", result: "OEE +22%", quote: "三个月回本", image: "https://x/y.jpg" }]}
    />,
  );
  expect(screen.getByRole("heading", { name: "某电池集团" })).toBeInTheDocument();
  expect(screen.getByText("新能源")).toBeInTheDocument();
  expect(screen.getByText("OEE +22%")).toBeInTheDocument();
  expect(screen.getByText(/三个月回本/)).toBeInTheDocument();
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run components/marketing/blocks/case-list.test.tsx`
Expected: FAIL

- [ ] **Step 3: 实现组件**

```tsx
import Image from "next/image";

export interface CaseItem {
  company: string;
  industry: string;
  result: string;
  quote: string;
  image: string;
}
export interface CaseListProps {
  cases: CaseItem[];
}

export function CaseList({ cases }: CaseListProps) {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        {cases.map((c) => (
          <div
            key={c.company}
            className="flex flex-col lg:flex-row rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 overflow-hidden"
          >
            <div className="relative w-full lg:w-2/5 min-h-[280px]">
              <Image src={c.image} alt={c.company} fill className="object-cover" />
            </div>
            <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center bg-zinc-50 dark:bg-zinc-900/50 space-y-4">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{c.industry}</span>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{c.company}</h3>
              <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{c.result}</p>
              <blockquote className="text-zinc-500 italic border-l-2 border-primary/30 pl-4">"{c.quote}"</blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run components/marketing/blocks/case-list.test.tsx`
Expected: PASS

- [ ] **Step 5: 加 schema + 分发 case**

`blocks-schema.ts` 追加并入 union：

```ts
const caseList = z.object({
  type: z.literal("caseList"),
  cases: z.array(
    z.object({
      company: z.string(),
      industry: z.string(),
      result: z.string(),
      quote: z.string(),
      image: z.string(),
    }),
  ),
});
```

`block-renderer.tsx` import `CaseList`，switch 加：

```tsx
    case "caseList":
      return <CaseList key={key} cases={block.cases} />;
```

- [ ] **Step 6: 全测 + check-types**

Run: `pnpm vitest run components/marketing lib/marketing && pnpm check-types`
Expected: PASS + ✓

- [ ] **Step 7: 提交**

```bash
git add components/marketing/blocks/case-list.tsx components/marketing/blocks/case-list.test.tsx lib/marketing/blocks-schema.ts components/marketing/block-renderer.tsx
git commit -m "feat(marketing): add caseList block"
```

---

### Task 9: statement 块（NEW）

**Files:**
- Create: `components/marketing/blocks/statement.tsx` (+test)
- Modify: `lib/marketing/blocks-schema.ts`、`components/marketing/block-renderer.tsx`

**Interfaces:**
- Produces: `Statement({ title, body?, accentColor? }: StatementProps)`；schema type `"statement"`：`title, body?, accentColor?`。

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Statement } from "./statement";

test("renders statement title and body", () => {
  render(<Statement title="每一次抽检，都将驱动流程进化。" body="不解决根因，流程永不关停。" />);
  expect(screen.getByRole("heading", { name: /每一次抽检/ })).toBeInTheDocument();
  expect(screen.getByText(/不解决根因/)).toBeInTheDocument();
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run components/marketing/blocks/statement.test.tsx`
Expected: FAIL

- [ ] **Step 3: 实现组件**

```tsx
import type { AccentColor } from "../accent";

export interface StatementProps {
  title: string;
  body?: string;
  accentColor?: AccentColor;
}

export function Statement({ title, body }: StatementProps) {
  return (
    <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-white">{title}</h2>
      {body && <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-4xl mx-auto">{body}</p>}
    </section>
  );
}
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run components/marketing/blocks/statement.test.tsx`
Expected: PASS

- [ ] **Step 5: 加 schema + 分发 case**

`blocks-schema.ts` 追加并入 union：

```ts
const statement = z.object({
  type: z.literal("statement"),
  title: z.string(),
  body: z.string().optional(),
  accentColor: accent,
});
```

`block-renderer.tsx` import `Statement`，switch 加：

```tsx
    case "statement":
      return <Statement key={key} title={block.title} body={block.body} accentColor={block.accentColor} />;
```

- [ ] **Step 6: 全测 + check-types**

Run: `pnpm vitest run components/marketing lib/marketing && pnpm check-types`
Expected: PASS + ✓

- [ ] **Step 7: 提交**

```bash
git add components/marketing/blocks/statement.tsx components/marketing/blocks/statement.test.tsx lib/marketing/blocks-schema.ts components/marketing/block-renderer.tsx
git commit -m "feat(marketing): add statement block"
```

---

### Task 10: logoWall 块（NEW）

**Files:**
- Create: `components/marketing/blocks/logo-wall.tsx` (+test)
- Modify: `lib/marketing/blocks-schema.ts`、`components/marketing/block-renderer.tsx`

**Interfaces:**
- Produces: `LogoWall({ items }: LogoWallProps)`；schema type `"logoWall"`：`items[]{name, src?}`。无 src 时渲染文字名。

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { LogoWall } from "./logo-wall";

test("renders logo names", () => {
  render(<LogoWall items={[{ name: "宁德时代" }, { name: "比亚迪" }]} />);
  expect(screen.getByText("宁德时代")).toBeInTheDocument();
  expect(screen.getByText("比亚迪")).toBeInTheDocument();
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run components/marketing/blocks/logo-wall.test.tsx`
Expected: FAIL

- [ ] **Step 3: 实现组件**

```tsx
import Image from "next/image";

export interface LogoItem {
  name: string;
  src?: string;
}
export interface LogoWallProps {
  items: LogoItem[];
}

export function LogoWall({ items }: LogoWallProps) {
  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-10 opacity-70">
        {items.map((it) =>
          it.src ? (
            <Image key={it.name} src={it.src} alt={it.name} width={120} height={40} className="object-contain" />
          ) : (
            <span key={it.name} className="text-lg font-bold text-zinc-400 tracking-tight">
              {it.name}
            </span>
          ),
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run components/marketing/blocks/logo-wall.test.tsx`
Expected: PASS

- [ ] **Step 5: 加 schema + 分发 case**

`blocks-schema.ts` 追加并入 union：

```ts
const logoWall = z.object({
  type: z.literal("logoWall"),
  items: z.array(z.object({ name: z.string(), src: z.string().optional() })),
});
```

`block-renderer.tsx` import `LogoWall`，switch 加：

```tsx
    case "logoWall":
      return <LogoWall key={key} items={block.items} />;
```

- [ ] **Step 6: 全测 + check-types**

Run: `pnpm vitest run components/marketing lib/marketing && pnpm check-types`
Expected: PASS + ✓

- [ ] **Step 7: 提交**

```bash
git add components/marketing/blocks/logo-wall.tsx components/marketing/blocks/logo-wall.test.tsx lib/marketing/blocks-schema.ts components/marketing/block-renderer.tsx
git commit -m "feat(marketing): add logoWall block"
```

---

### Task 11: faq 块（NEW，client 手风琴）

**Files:**
- Create: `components/marketing/blocks/faq.tsx` (+test)
- Modify: `lib/marketing/blocks-schema.ts`、`components/marketing/block-renderer.tsx`

**Interfaces:**
- Produces: `Faq({ items }: FaqProps)`（`"use client"`，用原生 `<details>`）；schema type `"faq"`：`items[]{q, a}`。

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Faq } from "./faq";

test("renders question and answer", () => {
  render(<Faq items={[{ q: "支持私有化部署吗？", a: "支持云端与本地部署。" }]} />);
  expect(screen.getByText("支持私有化部署吗？")).toBeInTheDocument();
  expect(screen.getByText("支持云端与本地部署。")).toBeInTheDocument();
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run components/marketing/blocks/faq.test.tsx`
Expected: FAIL

- [ ] **Step 3: 实现组件**

```tsx
"use client";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}
export interface FaqProps {
  items: FaqItem[];
}

export function Faq({ items }: FaqProps) {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-3xl space-y-4">
        {items.map((it) => (
          <details
            key={it.q}
            className="group rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6"
          >
            <summary className="flex items-center justify-between cursor-pointer font-bold text-zinc-900 dark:text-white list-none">
              {it.q}
              <ChevronDown className="size-5 text-zinc-400 group-open:rotate-180 transition-transform" aria-hidden="true" />
            </summary>
            <p className="mt-4 text-zinc-500 leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run components/marketing/blocks/faq.test.tsx`
Expected: PASS

- [ ] **Step 5: 加 schema + 分发 case（懒加载）**

`blocks-schema.ts` 追加并入 union：

```ts
const faq = z.object({
  type: z.literal("faq"),
  items: z.array(z.object({ q: z.string(), a: z.string() })),
});
```

`block-renderer.tsx` 顶部加 `import dynamic from "next/dynamic";` 与懒加载定义（放在文件顶部 import 区之后）：

```tsx
const Faq = dynamic(() => import("./blocks/faq").then((m) => m.Faq));
```
switch 加：

```tsx
    case "faq":
      return <Faq key={key} items={block.items} />;
```

- [ ] **Step 6: 全测 + check-types**

Run: `pnpm vitest run components/marketing lib/marketing && pnpm check-types`
Expected: PASS + ✓

- [ ] **Step 7: 提交**

```bash
git add components/marketing/blocks/faq.tsx components/marketing/blocks/faq.test.tsx lib/marketing/blocks-schema.ts components/marketing/block-renderer.tsx
git commit -m "feat(marketing): add faq accordion block (lazy)"
```

---

### Task 12: testimonial 块（NEW）

**Files:**
- Create: `components/marketing/blocks/testimonial.tsx` (+test)
- Modify: `lib/marketing/blocks-schema.ts`、`components/marketing/block-renderer.tsx`

**Interfaces:**
- Produces: `Testimonial({ quote, author, role?, avatar? }: TestimonialProps)`；schema type `"testimonial"`：`quote, author, role?, avatar?`。

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Testimonial } from "./testimonial";

test("renders quote and author", () => {
  render(<Testimonial quote="MSRU 让我们告别 Excel 排程。" author="张工" role="制造总监" />);
  expect(screen.getByText(/告别 Excel 排程/)).toBeInTheDocument();
  expect(screen.getByText("张工")).toBeInTheDocument();
  expect(screen.getByText("制造总监")).toBeInTheDocument();
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run components/marketing/blocks/testimonial.test.tsx`
Expected: FAIL

- [ ] **Step 3: 实现组件**

```tsx
import Image from "next/image";

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

export function Testimonial({ quote, author, role, avatar }: TestimonialProps) {
  return (
    <section className="py-32 bg-zinc-950 text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center space-y-10">
        <blockquote className="text-3xl md:text-4xl font-bold tracking-tight leading-snug">"{quote}"</blockquote>
        <div className="flex items-center justify-center gap-4">
          {avatar && (
            <Image src={avatar} alt={author} width={48} height={48} className="rounded-full object-cover" />
          )}
          <div className="text-left">
            <div className="font-bold">{author}</div>
            {role && <div className="text-sm text-zinc-400">{role}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run components/marketing/blocks/testimonial.test.tsx`
Expected: PASS

- [ ] **Step 5: 加 schema + 分发 case**

`blocks-schema.ts` 追加并入 union：

```ts
const testimonial = z.object({
  type: z.literal("testimonial"),
  quote: z.string(),
  author: z.string(),
  role: z.string().optional(),
  avatar: z.string().optional(),
});
```

`block-renderer.tsx` import `Testimonial`，switch 加：

```tsx
    case "testimonial":
      return <Testimonial key={key} quote={block.quote} author={block.author} role={block.role} avatar={block.avatar} />;
```

- [ ] **Step 6: 全测 + check-types**

Run: `pnpm vitest run components/marketing lib/marketing && pnpm check-types`
Expected: PASS + ✓

- [ ] **Step 7: 提交**

```bash
git add components/marketing/blocks/testimonial.tsx components/marketing/blocks/testimonial.test.tsx lib/marketing/blocks-schema.ts components/marketing/block-renderer.tsx
git commit -m "feat(marketing): add testimonial block"
```

---

### Task 13: mediaShowcase 块（NEW）

**Files:**
- Create: `components/marketing/blocks/media-showcase.tsx` (+test)
- Modify: `lib/marketing/blocks-schema.ts`、`components/marketing/block-renderer.tsx`

**Interfaces:**
- Produces: `MediaShowcase({ media, title?, caption? }: MediaShowcaseProps)`（全宽居中媒体）；schema type `"mediaShowcase"`：`media(string url), title?, caption?`。

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { MediaShowcase } from "./media-showcase";

test("renders media with title and caption", () => {
  render(<MediaShowcase media="https://x/y.jpg" title="全域数字孪生" caption="WebGPU 实时渲染" />);
  expect(screen.getByRole("heading", { name: "全域数字孪生" })).toBeInTheDocument();
  expect(screen.getByText("WebGPU 实时渲染")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("alt", "全域数字孪生");
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run components/marketing/blocks/media-showcase.test.tsx`
Expected: FAIL

- [ ] **Step 3: 实现组件**

```tsx
import Image from "next/image";

export interface MediaShowcaseProps {
  media: string;
  title?: string;
  caption?: string;
}

export function MediaShowcase({ media, title, caption }: MediaShowcaseProps) {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-6xl text-center space-y-8">
        {title && <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">{title}</h2>}
        <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden">
          <Image src={media} alt={title ?? caption ?? "media"} fill className="object-cover" />
        </div>
        {caption && <p className="text-zinc-500">{caption}</p>}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run components/marketing/blocks/media-showcase.test.tsx`
Expected: PASS

- [ ] **Step 5: 加 schema + 分发 case**

`blocks-schema.ts` 追加并入 union：

```ts
const mediaShowcase = z.object({
  type: z.literal("mediaShowcase"),
  media: z.string(),
  title: z.string().optional(),
  caption: z.string().optional(),
});
```

`block-renderer.tsx` import `MediaShowcase`，switch 加：

```tsx
    case "mediaShowcase":
      return <MediaShowcase key={key} media={block.media} title={block.title} caption={block.caption} />;
```

- [ ] **Step 6: 全测 + check-types**

Run: `pnpm vitest run components/marketing lib/marketing && pnpm check-types`
Expected: PASS + ✓

- [ ] **Step 7: 提交**

```bash
git add components/marketing/blocks/media-showcase.tsx components/marketing/blocks/media-showcase.test.tsx lib/marketing/blocks-schema.ts components/marketing/block-renderer.tsx
git commit -m "feat(marketing): add mediaShowcase block"
```

---

### Task 14: connectivityGlobe 块（NEW，client + cobe）

**Files:**
- Create: `components/marketing/blocks/connectivity-globe.tsx` (+test)
- Modify: `package.json`（加 `cobe`）、`lib/marketing/blocks-schema.ts`、`components/marketing/block-renderer.tsx`

**Interfaces:**
- Produces: `ConnectivityGlobe({ markers?, autoRotate?, heading?, subtitle? }: ConnectivityGlobeProps)`（`"use client"`）；schema type `"connectivityGlobe"`：`markers?[]{lat,lng,label?}, autoRotate?(默认 true), heading?, subtitle?`。测试环境不初始化 WebGL（canvas 无 context），只断言容器与文案渲染。

- [ ] **Step 1: 安装 cobe**

Run: `pnpm add cobe`
Expected: 依赖写入 package.json

- [ ] **Step 2: 写失败测试**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ConnectivityGlobe } from "./connectivity-globe";

test("renders heading and canvas container", () => {
  render(<ConnectivityGlobe heading="全球工业节点" subtitle="实时互联" markers={[{ lat: 22.3, lng: 113.5, label: "珠海" }]} />);
  expect(screen.getByRole("heading", { name: "全球工业节点" })).toBeInTheDocument();
  expect(screen.getByText("实时互联")).toBeInTheDocument();
});
```

- [ ] **Step 3: 运行确认失败**

Run: `pnpm vitest run components/marketing/blocks/connectivity-globe.test.tsx`
Expected: FAIL（模块不存在）

- [ ] **Step 4: 实现组件**

```tsx
"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export interface GlobeMarker {
  lat: number;
  lng: number;
  label?: string;
}
export interface ConnectivityGlobeProps {
  markers?: GlobeMarker[];
  autoRotate?: boolean;
  heading?: string;
  subtitle?: string;
}

export function ConnectivityGlobe({ markers = [], autoRotate = true, heading, subtitle }: ConnectivityGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let phi = 0;
    let globe: { destroy: () => void } | undefined;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: 600,
        height: 600,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: markers.map((m) => ({ location: [m.lat, m.lng], size: 0.05 })),
        onRender: (state) => {
          if (autoRotate) phi += 0.005;
          state.phi = phi;
        },
      });
    } catch {
      // WebGL 不可用（如测试/降级环境）时静默跳过
    }
    return () => globe?.destroy();
  }, [markers, autoRotate]);

  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center space-y-6">
        {heading && <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{heading}</h2>}
        {subtitle && <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="relative mx-auto mt-8 aspect-square w-full max-w-[600px]">
          <canvas ref={canvasRef} className="w-full h-full" style={{ contain: "layout paint size" }} />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: 运行确认通过**

Run: `pnpm vitest run components/marketing/blocks/connectivity-globe.test.tsx`
Expected: PASS（WebGL 初始化被 try/catch 吞掉，文案照常渲染）

- [ ] **Step 6: 加 schema + 分发 case（懒加载）**

`blocks-schema.ts` 追加并入 union：

```ts
const connectivityGlobe = z.object({
  type: z.literal("connectivityGlobe"),
  markers: z.array(z.object({ lat: z.number(), lng: z.number(), label: z.string().optional() })).optional(),
  autoRotate: z.boolean().optional(),
  heading: z.string().optional(),
  subtitle: z.string().optional(),
});
```

`block-renderer.tsx` 加懒加载定义：

```tsx
const ConnectivityGlobe = dynamic(() => import("./blocks/connectivity-globe").then((m) => m.ConnectivityGlobe));
```
switch 加：

```tsx
    case "connectivityGlobe":
      return (
        <ConnectivityGlobe
          key={key}
          markers={block.markers}
          autoRotate={block.autoRotate}
          heading={block.heading}
          subtitle={block.subtitle}
        />
      );
```

- [ ] **Step 7: 全测 + check-types**

Run: `pnpm vitest run components/marketing lib/marketing && pnpm check-types`
Expected: PASS + ✓

- [ ] **Step 8: 提交**

```bash
git add package.json pnpm-lock.yaml components/marketing/blocks/connectivity-globe.tsx components/marketing/blocks/connectivity-globe.test.tsx lib/marketing/blocks-schema.ts components/marketing/block-renderer.tsx
git commit -m "feat(marketing): add connectivityGlobe block (cobe, lazy)"
```

---

### Task 15: animatedBeams 块（NEW，client + framer-motion SVG）

**Files:**
- Create: `components/marketing/blocks/animated-beams.tsx` (+test)
- Modify: `lib/marketing/blocks-schema.ts`、`components/marketing/block-renderer.tsx`

**Interfaces:**
- Produces: `AnimatedBeams({ nodes, edges, heading?, subtitle? }: AnimatedBeamsProps)`（`"use client"`，SVG 均匀分布节点 + motion 流动线）；schema type `"animatedBeams"`：`nodes[]{icon,label}, edges[]{from:number,to:number}, heading?, subtitle?`。`from/to` 为 nodes 数组下标。

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { AnimatedBeams } from "./animated-beams";

test("renders node labels and heading", () => {
  render(
    <AnimatedBeams
      heading="架构数据流"
      nodes={[{ icon: "Network", label: "IoT 采集" }, { icon: "Cpu", label: "MES" }]}
      edges={[{ from: 0, to: 1 }]}
    />,
  );
  expect(screen.getByRole("heading", { name: "架构数据流" })).toBeInTheDocument();
  expect(screen.getByText("IoT 采集")).toBeInTheDocument();
  expect(screen.getByText("MES")).toBeInTheDocument();
});
```

- [ ] **Step 2: 运行确认失败**

Run: `pnpm vitest run components/marketing/blocks/animated-beams.test.tsx`
Expected: FAIL

- [ ] **Step 3: 实现组件**

```tsx
"use client";
import { motion } from "framer-motion";
import { resolveIcon } from "@/lib/marketing/icon-registry";

export interface BeamNode {
  icon: string;
  label: string;
}
export interface BeamEdge {
  from: number;
  to: number;
}
export interface AnimatedBeamsProps {
  nodes: BeamNode[];
  edges: BeamEdge[];
  heading?: string;
  subtitle?: string;
}

function nodePos(i: number, total: number): { x: number; y: number } {
  const pad = 60;
  const span = total > 1 ? (600 - pad * 2) / (total - 1) : 0;
  return { x: pad + span * i, y: 150 };
}

export function AnimatedBeams({ nodes, edges, heading, subtitle }: AnimatedBeamsProps) {
  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center space-y-6">
        {heading && <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{heading}</h2>}
        {subtitle && <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
        <svg viewBox="0 0 600 300" className="w-full max-w-3xl mx-auto mt-8" role="img" aria-label={heading ?? "architecture data flow"}>
          <title>{heading ?? "architecture data flow"}</title>
          {edges.map((e, i) => {
            const a = nodePos(e.from, nodes.length);
            const b = nodePos(e.to, nodes.length);
            return (
              <motion.line
                key={`e-${i}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="url(#beam)"
                strokeWidth={2}
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: i * 0.2 }}
              />
            );
          })}
          <defs>
            <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          {nodes.map((n, i) => {
            const p = nodePos(i, nodes.length);
            return <circle key={`n-${i}`} cx={p.x} cy={p.y} r={22} fill="#18181b" stroke="#3f3f46" strokeWidth={1.5} />;
          })}
        </svg>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {nodes.map((n) => {
            const Icon = resolveIcon(n.icon);
            return (
              <div key={n.label} className="flex items-center gap-2 text-sm text-zinc-300">
                {Icon && <Icon className="size-4 text-cyan-400" aria-hidden="true" />}
                {n.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: 运行确认通过**

Run: `pnpm vitest run components/marketing/blocks/animated-beams.test.tsx`
Expected: PASS

- [ ] **Step 5: 加 schema + 分发 case（懒加载）**

`blocks-schema.ts` 追加并入 union：

```ts
const animatedBeams = z.object({
  type: z.literal("animatedBeams"),
  nodes: z.array(z.object({ icon: z.string(), label: z.string() })),
  edges: z.array(z.object({ from: z.number(), to: z.number() })),
  heading: z.string().optional(),
  subtitle: z.string().optional(),
});
```

`block-renderer.tsx` 加懒加载：

```tsx
const AnimatedBeams = dynamic(() => import("./blocks/animated-beams").then((m) => m.AnimatedBeams));
```
switch 加：

```tsx
    case "animatedBeams":
      return (
        <AnimatedBeams key={key} nodes={block.nodes} edges={block.edges} heading={block.heading} subtitle={block.subtitle} />
      );
```

- [ ] **Step 6: 全测 + check-types**

Run: `pnpm vitest run components/marketing lib/marketing && pnpm check-types`
Expected: PASS + ✓

- [ ] **Step 7: 提交**

```bash
git add components/marketing/blocks/animated-beams.tsx components/marketing/blocks/animated-beams.test.tsx lib/marketing/blocks-schema.ts components/marketing/block-renderer.tsx
git commit -m "feat(marketing): add animatedBeams block (framer-motion, lazy)"
```

---

### Task 16: barrel 导出 BlockRenderer + Block 类型

**Files:**
- Modify: `components/marketing/index.ts`

**Interfaces:**
- Produces: 从 `@/components/marketing` 可 import `BlockRenderer`；从同一 barrel re-export `type Block`。

- [ ] **Step 1: 追加导出**

在 `components/marketing/index.ts` 末尾追加：

```ts
export { BlockRenderer } from "./block-renderer";
export type { Block } from "@/lib/marketing/blocks-schema";
```

- [ ] **Step 2: check-types**

Run: `pnpm check-types`
Expected: ✓

- [ ] **Step 3: 提交**

```bash
git add components/marketing/index.ts
git commit -m "chore(marketing): export BlockRenderer from barrel"
```

---

### Task 17: 切片页 products/iot → JSON 驱动

**Files:**
- Create: `content/marketing/pages/products-iot.json`
- Backup: `cp "app/(home)/products/iot/page.tsx" "/Users/mac_1/.qoderwork/workspace/mretf0n0yiryewe2/products-iot.page.tsx.bak"`
- Modify: `app/(home)/products/iot/page.tsx`

**Interfaces:**
- Consumes: `BlockRenderer`（Task 16）。
- Produces: iot 页由 JSON 驱动，含 hero/statBand/animatedBeams/statement/bento/connectivityGlobe/cta。

- [ ] **Step 1: 备份原页**

Run: `cp "app/(home)/products/iot/page.tsx" "/Users/mac_1/.qoderwork/workspace/mretf0n0yiryewe2/products-iot.page.tsx.bak"`

- [ ] **Step 2: 写 JSON 数据**

Create `content/marketing/pages/products-iot.json`：

```json
[
  { "type": "hero", "variant": "dark", "badge": { "icon": "Network", "text": "IoT Platform" }, "title": "IoT 数据采集系统", "subtitle": "海量异构设备接入与边缘数据清洗，秒级边缘计算。", "accentColor": "purple" },
  { "type": "statBand", "heading": "吞吐量，定义了一切。", "accentColor": "purple", "stats": [
    { "value": "300", "unit": "+", "label": "免驱直连工业协议" },
    { "value": "10", "unit": "M", "label": "QoS 分发高频峰值量" },
    { "value": "1", "unit": "ms", "label": "网关极端调度延迟" },
    { "value": "30", "unit": "d", "label": "断网时序数据本地离线缓存" }
  ] },
  { "type": "animatedBeams", "heading": "从采集到执行，数据一路流动。", "subtitle": "IoT 边缘节点将现场数据清洗后注入平台，驱动上层业务。", "nodes": [
    { "icon": "Network", "label": "IoT 采集" },
    { "icon": "Cpu", "label": "边缘清洗" },
    { "icon": "Box", "label": "平台底座" },
    { "icon": "Package", "label": "MES/WMS" }
  ], "edges": [ { "from": 0, "to": 1 }, { "from": 1, "to": 2 }, { "from": 2, "to": 3 } ] },
  { "type": "statement", "title": "只传有用的，", "body": "边缘侧完成滤波、聚合与异常判定，把带宽和算力留给真正的决策。" },
  { "type": "bento", "items": [
    { "icon": "Network", "accentColor": "purple", "title": "全协议接入", "tagline": "即插即接", "description": "Modbus/OPC-UA/MQTT 等 300+ 协议免驱直连。", "span": "wide" },
    { "icon": "Database", "accentColor": "blue", "title": "时序存储", "tagline": "海量高频", "description": "百万级测点秒级写入与断网续传。" },
    { "icon": "Cpu", "accentColor": "teal", "title": "边缘计算", "tagline": "就近决策", "description": "规则引擎与轻量模型在网关侧实时执行。" }
  ] },
  { "type": "connectivityGlobe", "heading": "全球工业节点，实时互联。", "subtitle": "跨区域工厂设备统一接入同一张数据网络。", "autoRotate": true, "markers": [
    { "lat": 22.27, "lng": 113.57, "label": "珠海" },
    { "lat": 31.23, "lng": 121.47, "label": "上海" },
    { "lat": 50.11, "lng": 8.68, "label": "法兰克福" },
    { "lat": 37.77, "lng": -122.42, "label": "旧金山" }
  ] },
  { "type": "cta", "variant": "small", "title": "接入您的第一台设备", "cta": { "label": "预约 IoT 演示", "href": "/contact" } }
]
```

- [ ] **Step 3: 改页面为 JSON 驱动**

覆盖 `app/(home)/products/iot/page.tsx`：

```tsx
import { BlockRenderer } from "@/components/marketing";
import data from "@/content/marketing/pages/products-iot.json";

export default function IoTPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <BlockRenderer blocks={data} />
    </div>
  );
}
```

- [ ] **Step 4: check-types**

Run: `pnpm check-types`
Expected: ✓（JSON import 需 `resolveJsonModule`，Next/tsconfig 默认开启；若报错则在 tsconfig `compilerOptions` 确认 `"resolveJsonModule": true`）

- [ ] **Step 5: 渲染验证**

确保 dev server 在跑（`curl -s -o /dev/null -w "%{http_code}" http://localhost:3007/products/iot`；若非 200 或连接失败，先 `pnpm dev` 后台起，端口以启动输出为准）。
Run:
```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3007/products/iot
curl -s http://localhost:3007/products/iot | grep -o "IoT 数据采集系统\|吞吐量，定义了一切\|全球工业节点"
```
Expected: `200` + 三段文案命中

- [ ] **Step 6: 提交**

```bash
git add content/marketing/pages/products-iot.json "app/(home)/products/iot/page.tsx"
git commit -m "feat(marketing): drive products/iot page via JSON blocks"
```

---

### Task 18: 切片页 solutions/ev-battery → JSON 驱动

**Files:**
- Create: `content/marketing/pages/solutions-ev-battery.json`
- Backup: `.bak` 到 workspace
- Modify: `app/(home)/solutions/ev-battery/page.tsx`

**Interfaces:**
- Consumes: `BlockRenderer`。
- Produces: ev-battery 页 JSON 驱动，含 hero/featureGrid/splitMedia/cta。

- [ ] **Step 1: 备份**

Run: `cp "app/(home)/solutions/ev-battery/page.tsx" "/Users/mac_1/.qoderwork/workspace/mretf0n0yiryewe2/solutions-ev-battery.page.tsx.bak"`

- [ ] **Step 2: 写 JSON**

Create `content/marketing/pages/solutions-ev-battery.json`：

```json
[
  { "type": "hero", "variant": "dark", "badge": { "icon": "Battery", "text": "新能源与电池" }, "title": "从电芯到 PACK，全链路数字化", "subtitle": "高通量极片质检、电芯追溯与循环寿命建模。", "accentColor": "amber" },
  { "type": "featureGrid", "columns": 3, "cards": [
    { "icon": "Eye", "title": "极片高通量质检", "desc": "AI 视觉在线检测涂布缺陷，漏检率低于万一。" },
    { "icon": "Network", "title": "电芯全程追溯", "desc": "从卷绕到化成的单体级数据链路。" },
    { "icon": "Battery", "title": "循环寿命建模", "desc": "基于工况数据预测衰减曲线与失效风险。" }
  ] },
  { "type": "splitMedia", "side": "right", "image": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800", "eyebrow": "量产验证", "title": "化成分容全域管控", "body": "打通化成、分容、老化工序数据，异常实时拦截。", "bullets": ["工序级数据看板", "异常自动闭环", "OEE 实时追踪"] },
  { "type": "cta", "variant": "small", "title": "获取电池行业方案", "cta": { "label": "预约行业演示", "href": "/contact" } }
]
```

- [ ] **Step 3: 改页面**

覆盖 `app/(home)/solutions/ev-battery/page.tsx`：

```tsx
import { BlockRenderer } from "@/components/marketing";
import data from "@/content/marketing/pages/solutions-ev-battery.json";

export default function EvBatteryPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <BlockRenderer blocks={data} />
    </div>
  );
}
```

- [ ] **Step 4: check-types**

Run: `pnpm check-types`
Expected: ✓

- [ ] **Step 5: 渲染验证**

Run:
```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3007/solutions/ev-battery
curl -s http://localhost:3007/solutions/ev-battery | grep -o "全链路数字化\|极片高通量质检\|化成分容全域管控"
```
Expected: `200` + 三段命中

- [ ] **Step 6: 提交**

```bash
git add content/marketing/pages/solutions-ev-battery.json "app/(home)/solutions/ev-battery/page.tsx"
git commit -m "feat(marketing): drive solutions/ev-battery page via JSON blocks"
```

---

### Task 19: 切片页 customers → JSON 驱动

**Files:**
- Create: `content/marketing/pages/customers.json`
- Backup: `.bak` 到 workspace
- Modify: `app/(home)/customers/page.tsx`

**Interfaces:**
- Consumes: `BlockRenderer`。
- Produces: customers 页 JSON 驱动，含 hero/caseList/testimonial/cta。

- [ ] **Step 1: 备份**

Run: `cp "app/(home)/customers/page.tsx" "/Users/mac_1/.qoderwork/workspace/mretf0n0yiryewe2/customers.page.tsx.bak"`

- [ ] **Step 2: 写 JSON**

Create `content/marketing/pages/customers.json`：

```json
[
  { "type": "hero", "variant": "dark", "badge": { "icon": "Briefcase", "text": "Customer Stories" }, "title": "全球标杆案例库", "subtitle": "来自千亿级集团的真实数字化转型成果与 ROI 分析。" },
  { "type": "caseList", "cases": [
    { "company": "某全球 Top 3 动力电池集团", "industry": "新能源", "result": "产线 OEE 提升 22%，不良品率下降 67%", "image": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800", "quote": "MSRU 的 AI 视觉质检系统在量产第三个月就收回了全部投资。" },
    { "company": "某头部汽车零部件 Tier 1", "industry": "汽车", "result": "排产效率提升 40%，交付准时率 99.2%", "image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800", "quote": "JIT 排产模块让我们彻底告别了手工 Excel 排程的混乱时代。" }
  ] },
  { "type": "testimonial", "quote": "无尘车间的全域数字化管控，MSRU 是我们评估过的唯一能做到的平台。", "author": "李总", "role": "某 12 英寸晶圆 Fab · 智能制造负责人" },
  { "type": "cta", "variant": "small", "title": "想成为下一个标杆？", "cta": { "label": "预约战略演示", "href": "/contact" } }
]
```

- [ ] **Step 3: 改页面**

覆盖 `app/(home)/customers/page.tsx`：

```tsx
import { BlockRenderer } from "@/components/marketing";
import data from "@/content/marketing/pages/customers.json";

export default function CustomersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <BlockRenderer blocks={data} />
    </div>
  );
}
```

- [ ] **Step 4: check-types**

Run: `pnpm check-types`
Expected: ✓

- [ ] **Step 5: 渲染验证**

Run:
```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3007/customers
curl -s http://localhost:3007/customers | grep -o "全球标杆案例库\|动力电池集团\|告别了手工 Excel\|唯一能做到的平台"
```
Expected: `200` + 命中

- [ ] **Step 6: 提交**

```bash
git add content/marketing/pages/customers.json "app/(home)/customers/page.tsx"
git commit -m "feat(marketing): drive customers page via JSON blocks"
```

---

### Task 20: 全量验收（type/test/lint/build/渲染）

**Files:** 无新增，收口验证。

- [ ] **Step 1: lint 全部新增/改动文件**

Run: `pnpm biome check --write lib/marketing components/marketing/block-renderer.tsx components/marketing/blocks content/marketing/pages "app/(home)/products/iot/page.tsx" "app/(home)/solutions/ev-battery/page.tsx" "app/(home)/customers/page.tsx" components/marketing/index.ts components/marketing/accent.ts`
Expected: 全部 fixed/clean

- [ ] **Step 2: 类型检查**

Run: `pnpm check-types`
Expected: ✓ Types generated successfully

- [ ] **Step 3: 全量测试**

Run: `pnpm vitest run`
Expected: 全绿（含新增 ~14 组块测试）

- [ ] **Step 4: 生产构建**

Run: `pnpm build`
Expected: `✓ Compiled successfully`，无 error

- [ ] **Step 5: 三切片页渲染终检**

Run:
```bash
for p in products/iot solutions/ev-battery customers; do
  echo "$p -> $(curl -s -o /dev/null -w '%{http_code}' http://localhost:3007/$p)"
done
```
Expected: 三页均 `200`

- [ ] **Step 6: 若有 lint 自动改动则提交**

```bash
git add -A
git commit -m "chore(marketing): lint pass for P6 block system slice" || echo "nothing to commit"
```

---

## Self-Review

**Spec coverage：**
- §3 词汇表 15 类 + custom：hero/statBand/featureGrid/bento/cta/pricingTable（Task 5 接管）、splitMedia(6)、list 含 steps(7)、caseList(8)、statement(9)、logoWall(10)、faq(11)、testimonial(12)、mediaShowcase(13)、connectivityGlobe(14)、animatedBeams(15)、custom(Task 3+4)。✓ 全覆盖。
- §4 数据流：icon-registry(2)、custom-registry(3)、blocks-schema+parsePage(4)、block-renderer(5)、懒加载 client 块(11/14/15)、校验失败策略(4)。✓
- §4 dataTable 移出：本计划不纳入营销 union，符合 spec。✓
- §6 切片三页(iot/ev-battery/customers)：Task 17/18/19。✓
- §8 验收（check-types/TDD/curl/build）：每任务内含 + Task 20 收口。✓
- §1 accent cyan 缺口：Task 1 补齐。✓

**Placeholder scan：** 每个代码步骤均有完整代码；无 TBD/TODO/"类似 Task N"。✓

**Type consistency：**
- `resolveIcon(name?)→LucideIcon|undefined`（Task 2）在 5/6/14renderer/15 一致调用。
- `parsePage(unknown)→Block[]`、`blockSchema`/`pageSchema`（Task 4）在 renderer(5) 一致。
- `BlockRenderer({blocks:unknown})`（Task 5）在 barrel(16) 与切片页(17/18/19) 一致。
- BentoCard 需 `tagline`（必填）与 `accentColor`——renderer 用 `?? ""` / `?? "blue"` 兜底，JSON 数据均提供。✓
- SubPageCta props `{title,description?,cta}`、StatBlock `{heading,accentColor?,stats}`、SubPageCardGrid `{cards,columns?}`、PricingTable `{plans}`——均与 P5 实测签名一致。✓
- animatedBeams edges `from/to:number`（下标）与 renderer/JSON 一致。✓

无遗留问题。

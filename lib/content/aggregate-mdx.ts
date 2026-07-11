import { compileMDX } from "@fumadocs/mdx-remote";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { unstable_cache } from "next/cache";
import type { MDXComponents } from "mdx/types";
import type { AggregationSource } from "./aggregation-sources";
import { buildAggregatedRawUrl } from "./aggregation-sources";
import { resolveAlias } from "./component-aliases";
import { extractComponentTags, sanitizeMdxSource } from "./mdx-sanitize";
import { makeUnknownTagFallback } from "./unknown-tag-fallback";
import type { RemoteDoc } from "./remote-mdx";

export function aggregatedCacheTag(sourceId: string, slug: string): string {
  return `knowledge:${sourceId}:${slug}`;
}

async function rawFetcher(source: AggregationSource, slug: string): Promise<string | null> {
  const url = buildAggregatedRawUrl(source, slug);
  const res = await fetch(url);
  if (!res.ok) return null;
  return res.text();
}

/**
 * 规范组件白名单 —— 仅收录标准文档组件。
 *
 * 刻意不展开 mdx-components 的 `...icons`（数百个 lucide 图标函数），
 * 因为它作为 components prop 跨 RSC 边界时会触发"函数不能传给 Client
 * Component"序列化错误，且聚合文档并不需要整套图标。
 */
const CANONICAL_COMPONENTS: Record<string, unknown> = {
  Callout,
  Card,
  Cards,
  Accordion,
  Accordions,
  Tab,
  Tabs,
  Step,
  Steps,
};

/**
 * 组件解析集 —— 组件墙第 1 级（规范映射+语义别名）叠加未知标签具体兜底。
 *
 * 关键：返回**普通对象**而非 Proxy。因为 MDX 运行时会 `{...components}` 展开，
 * Proxy 展开只复制自有键、动态 get 陷阱不触发，会导致未知标签丢失。
 * 故编译前扫描出用到的标签，为每个未知标签生成具体 fallback 条目。
 */
export function buildComponentMap(sourceId: string, slug: string, tags: string[]): MDXComponents {
  const map: Record<string, unknown> = { ...CANONICAL_COMPONENTS };
  for (const tag of tags) {
    if (tag in map) continue;
    const canonical = resolveAlias(tag);
    if (canonical && canonical in CANONICAL_COMPONENTS) {
      map[tag] = CANONICAL_COMPONENTS[canonical];
    } else {
      map[tag] = makeUnknownTagFallback(tag, { sourceId, slug });
    }
  }
  return map as unknown as MDXComponents;
}

async function cachedRaw(source: AggregationSource, slug: string): Promise<string | null> {
  const cached = unstable_cache(() => rawFetcher(source, slug), ["aggregated-mdx-raw", source.id, slug], {
    tags: [aggregatedCacheTag(source.id, slug)],
    revalidate: 3600,
  });
  return cached();
}

export interface AggregatedDoc extends RemoteDoc {
  tags: string[];
}

export async function compileAggregatedMdx(source: AggregationSource, slug: string): Promise<AggregatedDoc | null> {
  const rawText = await cachedRaw(source, slug);
  if (rawText == null) return null;
  const sanitized = sanitizeMdxSource(rawText);
  const tags = extractComponentTags(sanitized);
  const compiled = await compileMDX({ source: sanitized });
  const fm = compiled.frontmatter as { title?: string; description?: string };
  return {
    title: fm.title ?? slug,
    description: fm.description,
    Body: compiled.body,
    raw: rawText,
    tags,
  };
}

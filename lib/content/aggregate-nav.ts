import { unstable_cache } from "next/cache";
import type { AggregationSource } from "./aggregation-sources";
import { buildNavFromTree, type NavNode, type TreeEntry } from "./nav-model";

/**
 * 拉取源仓的 git 树，构建导航（第 3 档：文件树 + 数字前缀排序）。
 *
 * 使用 GitHub git/trees recursive API 一次取全树，msru.web 侧归一化为 NavModel。
 * navOverride 若存在则优先（人工补，补在白名单表，不写回 fork）。
 * 缓存标签 nav:<sourceId>，随源同步失效。
 */

interface GitTreeResponse {
  tree?: { path: string; type: string }[];
  truncated?: boolean;
}

async function fetchTree(source: AggregationSource): Promise<TreeEntry[]> {
  const url = `https://api.github.com/repos/${source.repo}/git/trees/${source.branch}?recursive=1`;
  const token = process.env.CONTENT_GITHUB_TOKEN;
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) return [];
  const data = (await res.json()) as GitTreeResponse;
  if (!data.tree) return [];
  return data.tree
    .filter((e) => e.type === "blob" || e.type === "tree")
    .map((e) => ({ path: e.path, type: e.type as "blob" | "tree" }));
}

async function buildNav(source: AggregationSource): Promise<NavNode[]> {
  if (source.navOverride && source.navOverride.length > 0) {
    return source.navOverride.map((n, i) => normalizeOverride(n, i));
  }
  const tree = await fetchTree(source);
  return buildNavFromTree(tree, source.contentDir);
}

function normalizeOverride(node: { title: string; slug?: string; children?: unknown[] }, order: number): NavNode {
  const out: NavNode = { title: node.title, order };
  if (node.slug) out.slug = node.slug;
  if (Array.isArray(node.children) && node.children.length > 0) {
    out.children = node.children.map((c, i) =>
      normalizeOverride(c as { title: string; slug?: string; children?: unknown[] }, i),
    );
  }
  return out;
}

export function navCacheTag(sourceId: string): string {
  return `nav:${sourceId}`;
}

export async function getAggregatedNav(source: AggregationSource): Promise<NavNode[]> {
  const cached = unstable_cache(() => buildNav(source), ["aggregated-nav", source.id], {
    tags: [navCacheTag(source.id)],
    revalidate: 3600,
  });
  return cached();
}

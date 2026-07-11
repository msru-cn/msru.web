/**
 * 导航模型（NavModel）—— 三档适配器的统一输出。
 *
 * 铁律：导航在 msru.web 侧计算，绝不写回 fork。
 *
 * 本文件实现第 3 档「文件树」+ 常见的「数字前缀排序」子情形
 * （如 Next.js 文档 01-app/01-installation.mdx，无中央清单、靠前缀排序）。
 * 第 1 档（meta.json/SUMMARY.md）与第 2 档（frontmatter 排序键）
 * 作为后续适配器接入，均归一化到同一 NavNode。
 */

export interface NavNode {
  title: string;
  slug?: string; // 叶子/分组落地页；映射到 /k/<sourceId>/<slug>
  children?: NavNode[];
  order: number;
}

export interface TreeEntry {
  path: string; // 相对仓根，如 "docs/01-app/01-installation.mdx"
  type: "blob" | "tree";
}

const JUNK = /^(README|CHANGELOG|CONTRIBUTING|LICENSE|CODE_OF_CONDUCT|SECURITY)(\.|$)/i;
const DOC_EXT = /\.(mdx|md)$/i;

export function stripOrderPrefix(name: string): string {
  return name.replace(/^\d+-/, "");
}

export function humanizeTitle(name: string): string {
  return stripOrderPrefix(name)
    .replace(DOC_EXT, "")
    .split("-")
    .filter((w) => w.length > 0)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** 排序值：数字前缀优先；index 落地页置顶；无前缀退到字母序（返回 NaN 交由 tiebreak）。 */
function orderOf(name: string): number {
  const base = name.replace(DOC_EXT, "");
  if (base === "index") return -1;
  const m = base.match(/^(\d+)-/);
  return m ? Number(m[1]) : Number.POSITIVE_INFINITY;
}

interface MutableNode {
  name: string;
  title: string;
  slug?: string;
  order: number;
  childrenMap: Map<string, MutableNode>;
}

function ensureChild(parent: MutableNode, name: string): MutableNode {
  const existing = parent.childrenMap.get(name);
  if (existing) return existing;
  const node: MutableNode = {
    name,
    title: humanizeTitle(name),
    order: orderOf(name),
    childrenMap: new Map(),
  };
  parent.childrenMap.set(name, node);
  return node;
}

function finalize(node: MutableNode): NavNode {
  const children = [...node.childrenMap.values()]
    .map(finalize)
    .sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order;
      return a.title.localeCompare(b.title);
    });
  const out: NavNode = { title: node.title, order: node.order };
  if (node.slug) out.slug = node.slug;
  if (children.length > 0) out.children = children;
  return out;
}

export function buildNavFromTree(tree: TreeEntry[], contentDir: string): NavNode[] {
  const prefix = contentDir.length > 0 ? `${contentDir}/` : "";
  const root: MutableNode = { name: "", title: "", order: 0, childrenMap: new Map() };

  for (const entry of tree) {
    if (entry.type !== "blob") continue;
    if (!entry.path.startsWith(prefix)) continue;
    const rel = entry.path.slice(prefix.length);
    const fileName = rel.split("/").pop() ?? "";
    if (JUNK.test(fileName)) continue;
    if (!DOC_EXT.test(fileName)) continue;

    const segments = rel.split("/");
    const slug = rel.replace(DOC_EXT, "");
    const isIndex = fileName.replace(DOC_EXT, "") === "index";

    if (isIndex && segments.length > 1) {
      // 目录的 index.mdx → 作为该分组的落地页，不作为独立子项
      let cursor = root;
      for (let i = 0; i < segments.length - 1; i++) {
        cursor = ensureChild(cursor, segments[i]);
      }
      cursor.slug = slug;
      continue;
    }

    // 普通叶子（含根级 index.mdx）
    let cursor = root;
    for (let i = 0; i < segments.length - 1; i++) {
      cursor = ensureChild(cursor, segments[i]);
    }
    const leaf = ensureChild(cursor, fileName);
    leaf.slug = slug;
  }

  return finalize(root).children ?? [];
}

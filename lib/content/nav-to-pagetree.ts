import type * as PageTree from "fumadocs-core/page-tree";
import type { NavNode } from "./nav-model";

/**
 * NavModel → fumadocs PageTree.Root。
 *
 * 让聚合内容能直接喂给官方 DocsLayout（皮肤/可折叠侧栏/TOC/搜索）。
 * - 叶子（有 slug、无 children）→ Item(type:'page')，url = /k/<id>/<slug>
 * - 分组（有 children）→ Folder；若分组自身有 slug（目录 index.mdx），
 *   作为 folder.index 落地页。
 */

export interface NavToPageTreeOptions {
  sourceId: string;
  name: string;
}

function urlFor(sourceId: string, slug: string): string {
  return `/k/${sourceId}/${slug}`;
}

function toNode(node: NavNode, sourceId: string): PageTree.Node {
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;

  if (hasChildren) {
    const folder: PageTree.Folder = {
      type: "folder",
      name: node.title,
      children: node.children!.map((c) => toNode(c, sourceId)),
    };
    if (node.slug) {
      folder.index = { type: "page", name: node.title, url: urlFor(sourceId, node.slug) };
    }
    return folder;
  }

  return {
    type: "page",
    name: node.title,
    url: urlFor(sourceId, node.slug ?? ""),
  };
}

export function navToPageTree(nav: NavNode[], opts: NavToPageTreeOptions): PageTree.Root {
  return {
    name: opts.name,
    children: nav.map((n) => toNode(n, opts.sourceId)),
  };
}

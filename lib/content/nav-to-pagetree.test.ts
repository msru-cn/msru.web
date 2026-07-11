import { describe, expect, test } from "vitest";
import type { NavNode } from "./nav-model";
import { navToPageTree } from "./nav-to-pagetree";

const nav: NavNode[] = [
  { title: "Index", slug: "index", order: -1 },
  {
    title: "App",
    slug: "01-app/index",
    order: 1,
    children: [
      { title: "Installation", slug: "01-app/01-installation", order: 1 },
      { title: "Project Structure", slug: "01-app/02-project-structure", order: 2 },
    ],
  },
  { title: "Pages", order: 2, children: [{ title: "Intro", slug: "02-pages/intro", order: 1 }] },
];

describe("navToPageTree", () => {
  test("wraps into a Root with given name", () => {
    const tree = navToPageTree(nav, { sourceId: "nextjs", name: "Next.js" });
    expect(tree.name).toBe("Next.js");
    expect(Array.isArray(tree.children)).toBe(true);
  });

  test("leaf node becomes a page item with /k/<id>/<slug> url", () => {
    const tree = navToPageTree(nav, { sourceId: "nextjs", name: "Next.js" });
    const index = tree.children.find((n) => n.type === "page");
    expect(index).toMatchObject({ type: "page", name: "Index", url: "/k/nextjs/index" });
  });

  test("group with children becomes a folder; folder index maps its slug", () => {
    const tree = navToPageTree(nav, { sourceId: "nextjs", name: "Next.js" });
    const folder = tree.children.find((n) => n.type === "folder" && n.name === "App");
    expect(folder?.type).toBe("folder");
    if (folder?.type === "folder") {
      expect(folder.index).toMatchObject({ type: "page", url: "/k/nextjs/01-app/index" });
      expect(folder.children).toHaveLength(2);
      expect(folder.children[0]).toMatchObject({ name: "Installation", url: "/k/nextjs/01-app/01-installation" });
    }
  });

  test("group without slug has no index but keeps children", () => {
    const tree = navToPageTree(nav, { sourceId: "nextjs", name: "Next.js" });
    const pages = tree.children.find((n) => n.type === "folder" && n.name === "Pages");
    if (pages?.type === "folder") {
      expect(pages.index).toBeUndefined();
      expect(pages.children).toHaveLength(1);
    }
  });
});

import { describe, expect, test } from "vitest";
import { buildNavFromTree, humanizeTitle, stripOrderPrefix } from "./nav-model";
import type { TreeEntry } from "./nav-model";

describe("stripOrderPrefix / humanizeTitle", () => {
  test("strips leading NN- numeric prefix", () => {
    expect(stripOrderPrefix("01-installation")).toBe("installation");
    expect(stripOrderPrefix("14-metadata-and-og-images")).toBe("metadata-and-og-images");
  });

  test("leaves names without numeric prefix alone", () => {
    expect(stripOrderPrefix("guides")).toBe("guides");
  });

  test("humanizes slug segment into title case words", () => {
    expect(humanizeTitle("01-getting-started")).toBe("Getting Started");
    expect(humanizeTitle("route-handlers")).toBe("Route Handlers");
  });
});

describe("buildNavFromTree (文件树档 + 数字前缀排序)", () => {
  const tree: TreeEntry[] = [
    { path: "docs/index.mdx", type: "blob" },
    { path: "docs/01-app/index.mdx", type: "blob" },
    { path: "docs/01-app/02-project-structure.mdx", type: "blob" },
    { path: "docs/01-app/01-installation.mdx", type: "blob" },
    { path: "docs/02-pages/index.mdx", type: "blob" },
    { path: "docs/README.md", type: "blob" },
    { path: "docs/LICENSE", type: "blob" },
  ];

  test("orders by numeric prefix, not alphabetic", () => {
    const nav = buildNavFromTree(tree, "docs");
    const appGroup = nav.find((n) => n.title === "App");
    expect(appGroup?.children?.map((c) => c.title)).toEqual([
      "Installation",
      "Project Structure",
    ]);
    // 01-app before 02-pages
    expect(nav.map((n) => n.title)).toEqual(["Index", "App", "Pages"]);
  });

  test("filters junk files (README/LICENSE) from nav", () => {
    const nav = buildNavFromTree(tree, "docs");
    const titles = JSON.stringify(nav);
    expect(titles).not.toMatch(/README|LICENSE/i);
  });

  test("maps leaf slug relative to contentDir without .mdx", () => {
    const nav = buildNavFromTree(tree, "docs");
    const appGroup = nav.find((n) => n.title === "App");
    const install = appGroup?.children?.find((c) => c.title === "Installation");
    expect(install?.slug).toBe("01-app/01-installation");
  });
});

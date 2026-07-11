import { expect, test, vi } from "vitest";

vi.mock("@/lib/content/products-repo", () => ({
  getProducts: vi.fn(async () => [
    { slug: "mes", title: "MES 执行", tagline: "生产的艺术", description: "d", accentColor: "blue", icon: "Cpu" },
    { slug: "wms", title: "WMS 仓储", tagline: "极智流转", description: "d", accentColor: "emerald", icon: "Package" },
  ]),
}));

test("exposes three gen UI tools", async () => {
  const { genuiTools } = await import("./genui-tools");
  expect(Object.keys(genuiTools).sort()).toEqual([
    "providePricing",
    "provideProductComparison",
    "provideSolution",
  ]);
});

test("provideProductComparison.execute pulls real data by slug", async () => {
  const { genuiTools } = await import("./genui-tools");
  const execute = genuiTools.provideProductComparison.execute;
  if (!execute) throw new Error("execute missing");
  const out = (await execute({ slugs: ["mes", "wms"] }, { toolCallId: "t", messages: [] })) as {
    products: { slug: string; title: string; tagline: string; accentColor: string }[];
  };
  expect(out.products).toHaveLength(2);
  expect(out.products[0]).toMatchObject({ slug: "mes", title: "MES 执行", accentColor: "blue" });
});

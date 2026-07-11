import { expect, test } from "vitest";
import { parseProducts } from "./products-repo";

test("parses valid rows into ProductRecord[]", () => {
  const rows = [
    { slug: "mes", title: "MES 执行", tagline: "生产的艺术", description: "全流程追溯", accent_color: "blue", icon: "Cpu" },
  ];
  const out = parseProducts(rows);
  expect(out).toHaveLength(1);
  expect(out[0]).toEqual({ slug: "mes", title: "MES 执行", tagline: "生产的艺术", description: "全流程追溯", accentColor: "blue", icon: "Cpu" });
});

test("skips invalid rows", () => {
  const rows = [{ slug: "x" }, { slug: "mes", title: "t", tagline: "g", description: "d", accent_color: "blue", icon: "Cpu" }];
  expect(parseProducts(rows)).toHaveLength(1);
});

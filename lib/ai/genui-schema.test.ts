import { expect, test } from "vitest";
import { PricingSchema, ProductComparisonSchema, SolutionSchema } from "./genui-schema";

test("ProductComparisonSchema accepts valid input", () => {
  const r = ProductComparisonSchema.safeParse({
    products: [{ slug: "mes", title: "MES", tagline: "生产", accentColor: "blue" }],
  });
  expect(r.success).toBe(true);
});

test("PricingSchema requires features array", () => {
  const r = PricingSchema.safeParse({
    plans: [{ name: "Pro", price: "￥999", unit: "/月", features: ["A", "B"], href: "/pricing" }],
  });
  expect(r.success).toBe(true);
});

test("SolutionSchema rejects missing title", () => {
  const r = SolutionSchema.safeParse({ description: "d", bullets: [], ctaHref: "/x" });
  expect(r.success).toBe(false);
});

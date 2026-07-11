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

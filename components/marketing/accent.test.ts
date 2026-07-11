import { expect, test } from "vitest";
import { getAccent } from "./accent";

test("returns full static tailwind classes for blue", () => {
  const a = getAccent("blue");
  expect(a.text).toBe("text-blue-500");
  expect(a.border).toBe("hover:border-blue-500/50");
  expect(a.glow).toContain("from-blue-500/20");
});

test("falls back to blue for unknown color", () => {
  expect(getAccent("unknown" as never).text).toBe("text-blue-500");
});

test("cyan accent resolves", () => {
  expect(getAccent("cyan").text).toBe("text-cyan-500");
});

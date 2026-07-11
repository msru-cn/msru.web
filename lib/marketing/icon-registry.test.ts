import { Sparkles } from "lucide-react";
import { expect, test } from "vitest";
import { resolveIcon } from "./icon-registry";

test("resolves known icon by name", () => {
  expect(resolveIcon("Sparkles")).toBe(Sparkles);
});

test("returns undefined for unknown or missing", () => {
  expect(resolveIcon("NopeIcon")).toBeUndefined();
  expect(resolveIcon(undefined)).toBeUndefined();
});

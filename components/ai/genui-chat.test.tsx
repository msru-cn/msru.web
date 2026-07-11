import { expect, test } from "vitest";
import { isToolPart } from "./genui-chat";

test("recognizes gen UI tool parts", () => {
  expect(isToolPart("tool-provideProductComparison")).toBe(true);
  expect(isToolPart("tool-providePricing")).toBe(true);
  expect(isToolPart("tool-provideSolution")).toBe(true);
});

test("rejects non-tool parts", () => {
  expect(isToolPart("text")).toBe(false);
  expect(isToolPart("tool-unknown")).toBe(false);
});

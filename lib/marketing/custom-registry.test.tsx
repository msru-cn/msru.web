import { expect, test } from "vitest";
import { resolveCustom } from "./custom-registry";

test("returns undefined for unregistered custom key", () => {
  expect(resolveCustom("NotRegistered")).toBeUndefined();
});

import { describe, expect, test } from "vitest";
import { SEMANTIC_ALIASES, resolveAlias } from "./component-aliases";

describe("resolveAlias (语义别名归一化)", () => {
  test("maps upstream note-like tags to Callout", () => {
    expect(resolveAlias("Note")).toBe("Callout");
    expect(resolveAlias("Aside")).toBe("Callout");
    expect(resolveAlias("Warning")).toBe("Callout");
    expect(resolveAlias("Info")).toBe("Callout");
  });

  test("returns the same name when already canonical", () => {
    expect(resolveAlias("Callout")).toBe("Callout");
    expect(resolveAlias("Tabs")).toBe("Tabs");
  });

  test("returns null for genuinely unknown tags", () => {
    expect(resolveAlias("AppOnly")).toBeNull();
    expect(resolveAlias("SomeVendorWidget")).toBeNull();
  });

  test("alias table only maps to known canonical targets", () => {
    const canonical = new Set(["Callout", "Tabs", "Tab", "Steps", "Step", "Card", "Cards", "Accordion", "Accordions"]);
    for (const target of Object.values(SEMANTIC_ALIASES)) {
      expect(canonical.has(target)).toBe(true);
    }
  });
});

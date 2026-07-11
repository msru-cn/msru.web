import { beforeEach, describe, expect, test } from "vitest";
import { getUnknownComponentLedger, recordUnknownComponent, resetLedger } from "./component-ledger";

describe("component ledger (棘轮刻度尺)", () => {
  beforeEach(() => resetLedger());

  test("records an unknown component occurrence", () => {
    recordUnknownComponent({ sourceId: "nextjs", slug: "01-app/index", tagName: "AppOnly" });
    const ledger = getUnknownComponentLedger();
    expect(ledger).toHaveLength(1);
    expect(ledger[0]).toMatchObject({ sourceId: "nextjs", tagName: "AppOnly", count: 1 });
  });

  test("aggregates repeated tag across pages by count", () => {
    recordUnknownComponent({ sourceId: "nextjs", slug: "a", tagName: "PagesOnly" });
    recordUnknownComponent({ sourceId: "nextjs", slug: "b", tagName: "PagesOnly" });
    const entry = getUnknownComponentLedger().find((e) => e.tagName === "PagesOnly");
    expect(entry?.count).toBe(2);
  });

  test("keys by sourceId+tagName so different sources are separate", () => {
    recordUnknownComponent({ sourceId: "nextjs", slug: "a", tagName: "Note" });
    recordUnknownComponent({ sourceId: "vue", slug: "a", tagName: "Note" });
    expect(getUnknownComponentLedger()).toHaveLength(2);
  });
});

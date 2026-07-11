import { describe, expect, test } from "vitest";
import {
  buildAggregatedRawUrl,
  getSource,
  navPathToSlug,
} from "./aggregation-sources";

describe("getSource", () => {
  test("returns registered source by id", () => {
    const s = getSource("nextjs");
    expect(s?.repo).toBe("vercel/next.js");
    expect(s?.contentDir).toBe("docs");
  });

  test("returns undefined for unknown id (whitelist gate)", () => {
    expect(getSource("not-in-whitelist")).toBeUndefined();
  });
});

describe("buildAggregatedRawUrl", () => {
  test("joins repo/branch/contentDir/slug into raw url", () => {
    const s = getSource("nextjs");
    if (!s) throw new Error("nextjs source missing");
    const url = buildAggregatedRawUrl(s, "01-app/index");
    expect(url).toBe(
      "https://raw.githubusercontent.com/vercel/next.js/canary/docs/01-app/index.mdx",
    );
  });

  test("handles empty contentDir without double slash", () => {
    const url = buildAggregatedRawUrl(
      { id: "x", repo: "o/r", branch: "main", contentDir: "", mode: "live", license: "MIT", attribution: { text: "", originBaseUrl: "" } },
      "guide",
    );
    expect(url).toBe("https://raw.githubusercontent.com/o/r/main/guide.mdx");
  });
});

describe("navPathToSlug", () => {
  test("joins slug segments", () => {
    expect(navPathToSlug(["01-app", "index"])).toBe("01-app/index");
  });

  test("returns empty string for no segments", () => {
    expect(navPathToSlug([])).toBe("");
    expect(navPathToSlug(undefined)).toBe("");
  });
});

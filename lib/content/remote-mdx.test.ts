import { describe, expect, test } from "vitest";
import { buildRawUrl, cacheTagFor } from "./remote-mdx";

describe("remote-mdx helpers", () => {
  test("builds github raw url from slug", () => {
    const url = buildRawUrl("guide/start", { repo: "org/docs", branch: "master" });
    expect(url).toBe("https://raw.githubusercontent.com/org/docs/master/guide/start.mdx");
  });

  test("cache tag is namespaced by slug", () => {
    expect(cacheTagFor("guide/start")).toBe("mdx:guide/start");
  });
});

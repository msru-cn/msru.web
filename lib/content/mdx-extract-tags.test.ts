import { describe, expect, test } from "vitest";
import { extractComponentTags } from "./mdx-sanitize";

describe("extractComponentTags", () => {
  test("finds uppercase JSX component tags in prose", () => {
    const src = "text <AppOnly>x</AppOnly> more <PagesOnly /> end";
    expect(extractComponentTags(src).sort()).toEqual(["AppOnly", "PagesOnly"]);
  });

  test("ignores lowercase html tags", () => {
    const src = "<div><span>hi</span></div> <Callout>y</Callout>";
    expect(extractComponentTags(src)).toEqual(["Callout"]);
  });

  test("does not pick tags inside fenced code blocks", () => {
    const src = ["<Real>keep</Real>", "```jsx", "<InCode />", "```"].join("\n");
    expect(extractComponentTags(src)).toEqual(["Real"]);
  });

  test("dedupes repeated tags", () => {
    const src = "<Tabs><Tab>a</Tab><Tab>b</Tab></Tabs>";
    expect(extractComponentTags(src).sort()).toEqual(["Tab", "Tabs"]);
  });
});

import { describe, expect, test } from "vitest";
import { sanitizeMdxSource, stripEsmStatements } from "./mdx-sanitize";

describe("stripEsmStatements", () => {
  test("removes top-level import statements", () => {
    const src = `import Image from 'next/image'\n\n# Title\n\nbody`;
    const out = stripEsmStatements(src);
    expect(out).not.toMatch(/^import /m);
    expect(out).toContain("# Title");
  });

  test("removes top-level export statements", () => {
    const src = `export const meta = { a: 1 }\n\ntext`;
    const out = stripEsmStatements(src);
    expect(out).not.toMatch(/^export /m);
    expect(out).toContain("text");
  });

  test("does NOT touch import inside fenced code blocks", () => {
    const src = ["# Doc", "", "```js", "import Image from 'next/image'", "export default App", "```", "", "after"].join("\n");
    const out = stripEsmStatements(src);
    // the code fence content must survive intact
    expect(out).toContain("import Image from 'next/image'");
    expect(out).toContain("export default App");
    expect(out).toContain("after");
  });

  test("keeps prose lines that merely start with the word import", () => {
    const src = `important note: do this`;
    const out = stripEsmStatements(src);
    expect(out).toContain("important note");
  });
});

describe("sanitizeMdxSource", () => {
  test("returns frontmatter untouched and strips esm from body region", () => {
    const src = ["---", "title: X", "---", "import Foo from './foo'", "", "content"].join("\n");
    const out = sanitizeMdxSource(src);
    expect(out).toContain("title: X");
    expect(out).not.toMatch(/^import Foo/m);
    expect(out).toContain("content");
  });
});

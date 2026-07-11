/**
 * 编译前中和 MDX 源里的 ESM 语句（import/export）。
 *
 * 为什么：@fumadocs/mdx-remote 的 compileMDX 会真去解析顶层 import
 * （如 `import Foo from '../foo'`），在无对应模块的运行时环境里整篇编译失败。
 * 外部聚合文档几乎必然带 import，故编译前必须主动剥离。
 *
 * 关键约束：绝不碰代码围栏（``` fenced code）内的 import/export —— 那些是
 * 文档示例代码，是要展示给读者的正文，不是真的模块导入。
 */

/** 将源码按代码围栏切成"代码段"与"非代码段"，只对非代码段做处理。 */
function splitByFences(src: string): { text: string; isCode: boolean }[] {
  const lines = src.split("\n");
  const segments: { text: string; isCode: boolean }[] = [];
  let buf: string[] = [];
  let inFence = false;
  let fenceMarker = "";

  const flush = (isCode: boolean) => {
    if (buf.length > 0) {
      segments.push({ text: buf.join("\n"), isCode });
      buf = [];
    }
  };

  for (const line of lines) {
    const fenceMatch = line.match(/^(\s*)(`{3,}|~{3,})/);
    if (fenceMatch) {
      const marker = fenceMatch[2];
      if (!inFence) {
        flush(false);
        inFence = true;
        fenceMarker = marker[0];
        buf.push(line);
      } else if (marker[0] === fenceMarker) {
        buf.push(line);
        flush(true);
        inFence = false;
        fenceMarker = "";
      } else {
        buf.push(line);
      }
    } else {
      buf.push(line);
    }
  }
  flush(inFence);
  return segments;
}

/** 仅匹配行首（可含缩进）的 import/export 语句，代码段除外。 */
export function stripEsmStatements(src: string): string {
  const segments = splitByFences(src);
  return segments
    .map((seg) => {
      if (seg.isCode) return seg.text;
      return seg.text
        .split("\n")
        .map((line) => (/^\s*(import|export)\s[^]*/.test(line) ? "" : line))
        .join("\n");
    })
    .join("\n");
}

/** 拆出 frontmatter（原样保留），对正文区做 ESM 中和。 */
export function sanitizeMdxSource(src: string): string {
  const fmMatch = src.match(/^(---\n[\s\S]*?\n---\n?)([\s\S]*)$/);
  if (fmMatch) {
    const [, frontmatter, body] = fmMatch;
    return frontmatter + stripEsmStatements(body);
  }
  return stripEsmStatements(src);
}

/**
 * 扫描非代码区里用到的大写 JSX 组件标签名（去重）。
 *
 * 用途：编译前预知文档用了哪些组件，为未知标签生成具体的 fallback 条目，
 * 构成普通对象——避免 Proxy 动态兜底在 MDX 运行时 `{...components}` 展开时
 * 丢失（Proxy 展开只复制自有键，动态 get 陷阱不触发）。
 */
export function extractComponentTags(src: string): string[] {
  const segments = splitByFences(src);
  const found = new Set<string>();
  const tagRe = /<([A-Z][A-Za-z0-9]*)/g;
  for (const seg of segments) {
    if (seg.isCode) continue;
    let m: RegExpExecArray | null;
    m = tagRe.exec(seg.text);
    while (m !== null) {
      found.add(m[1]);
      m = tagRe.exec(seg.text);
    }
  }
  return [...found];
}

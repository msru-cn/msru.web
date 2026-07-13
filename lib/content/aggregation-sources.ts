/**
 * P4 外部内容聚合 —— 白名单（合规闸 + 单一真理源）。
 *
 * 不在本表内的仓一律不碰。加源 = 人工判断可不可 fork + 登记一条，
 * 合规拍板发生在登记这一刻。渲染时强制挂 attribution（license + 原文深链）。
 */

export interface NavOverrideNode {
  title: string;
  slug?: string;
  children?: NavOverrideNode[];
}

export interface AggregationSource {
  /** 路由前缀，决定 /k/<id>/...；同时是 raw 缓存标签命名空间。 */
  id: string;
  /** fork 后的仓（snapshot）或上游仓（live），owner/repo。 */
  repo: string;
  branch: string;
  /** mdx 所在子目录（相对仓根，拼进 raw url）；空串表示仓根。 */
  contentDir: string;
  /** 文档文件扩展名，"md" 或 "mdx"；默认 mdx。纯 markdown 书库用 md。 */
  ext?: "md" | "mdx";
  /** 默认 snapshot（指向 fork）；live 仅对自己/完全信任源开放；local 直读本仓文件系统。 */
  mode: "snapshot" | "live" | "local";
  /**
   * 本地模式（mode==="local"）专用：文档所在目录（相对仓根，如 "docs/palantir"）。
   * 走文件系统直读，不联网。用于验证本地知识库导入渲染。
   */
  localDir?: string;
  /** 原始上游 owner/repo；snapshot 记录来源，live 与 repo 相同。 */
  upstream?: string;
  /** SPDX 标识或自由文本。 */
  license: string;
  attribution: {
    /** 署名文本，渲染进页脚。 */
    text: string;
    /** 原文 base url，用于每页"查看原文"深链。 */
    originBaseUrl: string;
  };
  /** 可选：导航硬猜时的人工覆盖（补在此，绝不写回 fork）。 */
  navOverride?: NavOverrideNode[];
  /**
   * 可选：多语言约定。基准语言 = 无后缀文件（如 overview.md）；
   * 每个额外 locale 用文件名后缀标记译文（如 -cn → overview-cn.md）。
   * 导航按基准语言收敛（隐藏译文叶子），渲染页据 ?lang=<code> 切换。
   */
  i18n?: {
    /** 基准语言展示名（无后缀文件），如 "English"。 */
    defaultLabel: string;
    locales: {
      /** 语言码，用于 ?lang= 与 <html lang>，如 "zh"。 */
      code: string;
      /** 展示名，如 "中文"。 */
      label: string;
      /** 译文文件名后缀（不含扩展名），如 "-cn"。 */
      suffix: string;
    }[];
  };
}

/**
 * 白名单。演示阶段用 live 直连 vercel/next.js 验证渲染链路；
 * 生产默认应 fork 进 msru-cn 后改 snapshot + 指向 fork（见 P4-T6）。
 */
export const AGGREGATION_SOURCES: AggregationSource[] = [
  {
    id: "palantir",
    repo: "palantir/foundry-docs-local",
    branch: "main",
    contentDir: "docs/palantir",
    localDir: "docs/palantir",
    ext: "md",
    mode: "local",
    license: "Proprietary（Palantir 官方文档，仅本地导入渲染验证用）",
    attribution: {
      text: "内容来源：Palantir Foundry 官方文档（本地导入，中英双语）。",
      originBaseUrl: "https://www.palantir.com/docs/foundry",
    },
    i18n: {
      defaultLabel: "English",
      locales: [{ code: "zh", label: "中文", suffix: "-cn" }],
    },
  },
  {
    id: "nextjs",
    repo: "vercel/next.js",
    branch: "canary",
    contentDir: "docs",
    mode: "live",
    upstream: "vercel/next.js",
    license: "MIT",
    attribution: {
      text: "内容来源：Next.js 官方文档（Vercel Inc.），MIT License。",
      originBaseUrl: "https://github.com/vercel/next.js/blob/canary/docs",
    },
  },
  {
    id: "pi-zhcn",
    repo: "algotao/pidoc-site-zhcn",
    branch: "main",
    contentDir: "docs",
    ext: "mdx",
    mode: "live",
    upstream: "algotao/pidoc-site-zhcn",
    license: "CC-BY-SA-4.0",
    attribution: {
      text: "内容来源：树莓派官方文档中文版（algotao/pidoc-site-zhcn），CC-BY-SA-4.0，转载需署名并以相同方式共享。",
      originBaseUrl: "https://github.com/algotao/pidoc-site-zhcn/blob/main/docs",
    },
  },
  {
    id: "advanced-java",
    repo: "doocs/advanced-java",
    branch: "main",
    contentDir: "docs",
    ext: "md",
    mode: "live",
    upstream: "doocs/advanced-java",
    license: "CC-BY-SA-4.0",
    attribution: {
      text: "内容来源：《互联网 Java 工程师进阶知识完全扫盲》（doocs/advanced-java），CC-BY-SA-4.0，转载需署名并以相同方式共享。",
      originBaseUrl: "https://github.com/doocs/advanced-java/blob/main/docs",
    },
  },
];

export function getSource(id: string): AggregationSource | undefined {
  return AGGREGATION_SOURCES.find((s) => s.id === id);
}

export function listSources(): AggregationSource[] {
  return AGGREGATION_SOURCES;
}

export function navPathToSlug(segments: string[] | undefined): string {
  return (segments ?? []).join("/");
}

export function buildAggregatedRawUrl(source: AggregationSource, slug: string): string {
  const parts = [source.repo, source.branch];
  const ext = source.ext ?? "mdx";
  const path = [source.contentDir, slug].filter((p) => p.length > 0).join("/");
  return `https://raw.githubusercontent.com/${parts.join("/")}/${path}.${ext}`;
}

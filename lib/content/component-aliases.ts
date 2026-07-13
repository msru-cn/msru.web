/**
 * 语义别名表 —— "用我们的组件智能化替代上游组件"。
 *
 * 上游文档生态高度互抄：<Note>/<Aside>/<Warning>/<Info> 本质都是
 * <Callout> 换个名。把这些收敛到本站规范组件，是组件墙第一级
 * （规范映射 + 语义替代）的核心。
 *
 * key = 上游标签名（大小写敏感，按常见写法登记）；
 * value = 本站规范组件名（必须是 mdx-components 里真实存在的）。
 */
export const SEMANTIC_ALIASES: Record<string, string> = {
  // Callout 家族
  Note: "Callout",
  Aside: "Callout",
  Warning: "Callout",
  Info: "Callout",
  Tip: "Callout",
  Caution: "Callout",
  Important: "Callout",
  Danger: "Callout",
  // Tabs 家族
  TabItem: "Tab",
  TabList: "Tabs",
  // Steps 家族
  Step: "Step",
  // Card 家族
  LinkCard: "Card",
  CardGrid: "Cards",
};

/** 已知规范组件（mdx-components 提供）——别名与直接命中都归此集合。 */
const CANONICAL = new Set(["Callout", "Tabs", "Tab", "Steps", "Step", "Card", "Cards", "Accordion", "Accordions"]);

/**
 * 解析一个上游标签名：
 * - 已是规范组件 → 原样返回
 * - 命中别名 → 返回规范组件名
 * - 都不是 → null（交给未知标签 Proxy 降级 + 台账）
 */
export function resolveAlias(tagName: string): string | null {
  if (CANONICAL.has(tagName)) return tagName;
  if (tagName in SEMANTIC_ALIASES) return SEMANTIC_ALIASES[tagName];
  return null;
}

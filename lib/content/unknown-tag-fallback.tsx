import type { FC, ReactNode } from "react";
import { recordUnknownComponent } from "./component-ledger";

export interface FallbackContext {
  sourceId: string;
  slug: string;
}

/**
 * 未知标签降级组件工厂（组件墙第 2-3 级）。
 *
 * 优先级：透传 children > 代码化。
 * - 有可渲染 children → 直接渲染 children（很多私有组件价值恰在它包住的正文，
 *   如 <AppOnly>这里是真文档</AppOnly>，直接代码化会把真内容藏起来）。
 * - 无 children → 退到"原样标签占位"展示（最后一档）。
 *
 * 每次实例化即命中一次未知标签 → 记台账（棘轮反哺）。
 */
export function makeUnknownTagFallback(tagName: string, ctx: FallbackContext): FC<{ children?: ReactNode }> {
  recordUnknownComponent({ sourceId: ctx.sourceId, slug: ctx.slug, tagName });

  return function UnknownTagFallback({ children }: { children?: ReactNode }) {
    const hasChildren = children !== undefined && children !== null && children !== false && children !== "";
    if (hasChildren) {
      // 透传：真内容优先，外壳不识别但不吞正文
      return <>{children}</>;
    }
    // 代码化：无可渲染子内容，占位展示标签名，永不崩溃
    return (
      <code className="rounded bg-fd-muted px-1.5 py-0.5 text-xs text-fd-muted-foreground">
        {`<${tagName} />`}
      </code>
    );
  };
}

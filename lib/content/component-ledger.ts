/**
 * 未知组件台账 —— 组件墙"棘轮"的刻度尺。
 *
 * 每次渲染命中未知标签记一笔；跨源高频出现的标签就是下一个该建映射/
 * 语义替代的目标。没有台账，"收集→反哺"只是口号、没有数据落点。
 *
 * 进程内内存实现（够演示与开发期观察）。生产可换 SQLite/日志落盘，
 * 接口保持不变。
 */

export interface UnknownComponentHit {
  sourceId: string;
  slug: string;
  tagName: string;
}

export interface UnknownComponentEntry {
  sourceId: string;
  tagName: string;
  count: number;
  lastSlug: string;
}

const ledger = new Map<string, UnknownComponentEntry>();

function keyOf(sourceId: string, tagName: string): string {
  return `${sourceId}::${tagName}`;
}

export function recordUnknownComponent(hit: UnknownComponentHit): void {
  const key = keyOf(hit.sourceId, hit.tagName);
  const existing = ledger.get(key);
  if (existing) {
    existing.count += 1;
    existing.lastSlug = hit.slug;
  } else {
    ledger.set(key, { sourceId: hit.sourceId, tagName: hit.tagName, count: 1, lastSlug: hit.slug });
  }
}

export function getUnknownComponentLedger(): UnknownComponentEntry[] {
  return [...ledger.values()].sort((a, b) => b.count - a.count);
}

export function resetLedger(): void {
  ledger.clear();
}

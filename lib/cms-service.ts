import { db } from "./db";

export interface CmsMarketingPageRecord {
  slug: string;
  blocks: unknown;
  meta?: { title?: string; description?: string; path?: string };
}

export interface CmsDocsPageRecord {
  slug: string;
  title: string;
  description?: string;
  content: string;
  updated_at?: string;
}

/**
 * 从 SQLite 获取营销页内容与 SEO 元素
 */
export function getMarketingPageFromDB(slug: string): CmsMarketingPageRecord | null {
  try {
    const row = db().prepare("SELECT slug, blocks, meta FROM cms_marketing_pages WHERE slug = ?").get(slug) as
      | { slug: string; blocks: string; meta: string | null }
      | undefined;

    if (!row) return null;

    return {
      slug: row.slug,
      blocks: JSON.parse(row.blocks),
      meta: row.meta ? JSON.parse(row.meta) : undefined,
    };
  } catch (error) {
    console.error(`[CMS] Failed to fetch marketing page from DB (${slug}):`, error);
    return null;
  }
}

/**
 * 更新或插入营销页 JSON 到 SQLite
 */
export function upsertMarketingPageToDB(slug: string, blocks: unknown, meta?: unknown): void {
  const blocksJson = typeof blocks === "string" ? blocks : JSON.stringify(blocks);
  const metaJson = meta ? (typeof meta === "string" ? meta : JSON.stringify(meta)) : null;

  db()
    .prepare(
      `INSERT INTO cms_marketing_pages (slug, blocks, meta, updated_at)
       VALUES (?, ?, ?, CURRENT_TIMESTAMP)
       ON CONFLICT(slug) DO UPDATE SET
       blocks = excluded.blocks,
       meta = excluded.meta,
       updated_at = CURRENT_TIMESTAMP`,
    )
    .run(slug, blocksJson, metaJson);
}

/**
 * 删除营销页记录
 */
export function deleteMarketingPageFromDB(slug: string): boolean {
  const res = db().prepare("DELETE FROM cms_marketing_pages WHERE slug = ?").run(slug);
  return res.changes > 0;
}

/**
 * 从 SQLite 获取文档页 Markdown/MDX
 */
export function getDocsPageFromDB(slug: string): CmsDocsPageRecord | null {
  try {
    const row = db()
      .prepare("SELECT slug, title, description, content, updated_at FROM cms_docs_pages WHERE slug = ?")
      .get(slug) as
      | { slug: string; title: string; description: string | null; content: string; updated_at: string }
      | undefined;

    if (!row) return null;

    return {
      slug: row.slug,
      title: row.title,
      description: row.description ?? undefined,
      content: row.content,
      updated_at: row.updated_at,
    };
  } catch (error) {
    console.error(`[CMS] Failed to fetch docs page from DB (${slug}):`, error);
    return null;
  }
}

/**
 * 更新或插入文档页 MDX 到 SQLite
 */
export function upsertDocsPageToDB(slug: string, title: string, content: string, description?: string): void {
  db()
    .prepare(
      `INSERT INTO cms_docs_pages (slug, title, description, content, updated_at)
       VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
       ON CONFLICT(slug) DO UPDATE SET
       title = excluded.title,
       description = excluded.description,
       content = excluded.content,
       updated_at = CURRENT_TIMESTAMP`,
    )
    .run(slug, title, description ?? null, content);
}

/**
 * 删除文档记录
 */
export function deleteDocsPageFromDB(slug: string): boolean {
  const res = db().prepare("DELETE FROM cms_docs_pages WHERE slug = ?").run(slug);
  return res.changes > 0;
}

/**
 * 安全的万能 SQL 执行接口（供中心端复杂逻辑查询使用）
 */
export function executeRawSql(sql: string, params: unknown[] = [], type: "all" | "get" | "run" = "run"): unknown {
  const stmt = db().prepare(sql);
  if (type === "all") return stmt.all(...params);
  if (type === "get") return stmt.get(...params);
  return stmt.run(...params);
}

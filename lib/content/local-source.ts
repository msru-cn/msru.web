import { type Dirent, constants as fsConstants } from "node:fs";
import { access, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import type { AggregationSource } from "./aggregation-sources";
import { buildNavFromTree, type NavNode, type TreeEntry } from "./nav-model";

/**
 * 本地知识库适配器 —— 用文件系统直读替换 GitHub tree API + raw.githubusercontent。
 *
 * 用途：验证本地导入的 markdown 书库（如 docs/palantir，中英双语）能否走
 * 既有聚合渲染链路（/k/<id>）落地。不联网、不改动源目录。
 *
 * nav 复用 buildNavFromTree（第 3 档文件树 + 数字前缀排序），只是把 TreeEntry
 * 换成本地递归遍历的产物；内容读取直接 readFile。
 */

const DOC_EXT = /\.(mdx|md)$/i;

/** 本地目录递归遍历，产出与 GitHub git-tree 同构的 TreeEntry[]（path 相对仓根）。 */
async function walkLocalTree(absRoot: string, relRoot: string): Promise<TreeEntry[]> {
  const out: TreeEntry[] = [];
  async function recurse(absDir: string, relDir: string): Promise<void> {
    let entries: Dirent[];
    try {
      entries = await readdir(absDir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name.startsWith(".")) continue;
      const abs = join(absDir, e.name);
      const rel = relDir ? `${relDir}/${e.name}` : e.name;
      if (e.isDirectory()) {
        out.push({ path: rel, type: "tree" });
        await recurse(abs, rel);
      } else if (e.isFile() && DOC_EXT.test(e.name)) {
        out.push({ path: rel, type: "blob" });
      }
    }
  }
  await recurse(absRoot, relRoot);
  return out;
}

/** 判断某文件名（不含扩展名）是否为译文（结尾匹配任一 locale 后缀）。 */
function matchLocaleSuffix(baseNameNoExt: string, source: AggregationSource): string | null {
  for (const loc of source.i18n?.locales ?? []) {
    if (baseNameNoExt.endsWith(loc.suffix)) return loc.suffix;
  }
  return null;
}

/** 本地源导航：遍历 localDir，隐藏译文叶子后交给统一的 NavModel 构建器。 */
export async function buildLocalNav(source: AggregationSource): Promise<NavNode[]> {
  const dir = source.localDir ?? source.contentDir;
  const absRoot = join(process.cwd(), dir);
  const tree = await walkLocalTree(absRoot, dir);
  const filtered = tree.filter((e) => {
    if (e.type !== "blob") return true;
    const fileName = e.path.split("/").pop() ?? "";
    const baseNoExt = fileName.replace(DOC_EXT, "");
    return matchLocaleSuffix(baseNoExt, source) === null;
  });
  return buildNavFromTree(filtered, dir);
}

/** 本地源内容：按 slug 直读 markdown 文件，找不到返回 null（交由 404）。 */
export async function readLocalRaw(source: AggregationSource, slug: string): Promise<string | null> {
  const dir = source.localDir ?? source.contentDir;
  const ext = source.ext ?? "md";
  const abs = join(process.cwd(), dir, `${slug}.${ext}`);
  try {
    return await readFile(abs, "utf8");
  } catch {
    return null;
  }
}

/** 磁盘上是否存在该 slug 对应的文档文件。 */
export async function fileExistsForSlug(source: AggregationSource, slug: string): Promise<boolean> {
  const dir = source.localDir ?? source.contentDir;
  const ext = source.ext ?? "md";
  const abs = join(process.cwd(), dir, `${slug}.${ext}`);
  try {
    await access(abs, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

/**
 * 给定基准（默认语言）slug，探测磁盘上实际存在译文的 locale 码集合。
 * 无 i18n 配置时返回空数组。基准语言始终隐含可用（不计入 available）。
 */
export async function resolveLocalLocales(
  source: AggregationSource,
  baseSlug: string,
): Promise<{ available: string[] }> {
  const locales = source.i18n?.locales ?? [];
  if (locales.length === 0) return { available: [] };
  const checks = await Promise.all(
    locales.map(async (loc) => ({
      code: loc.code,
      ok: await fileExistsForSlug(source, `${baseSlug}${loc.suffix}`),
    })),
  );
  return { available: checks.filter((c) => c.ok).map((c) => c.code) };
}

import type { SidebarTabWithProps } from "fumadocs-ui/components/sidebar/tabs/dropdown";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { BookMarked } from "lucide-react";
import { notFound } from "next/navigation";
import { type DocLanguageOption, DocLanguageToggle } from "@/components/content/doc-language-toggle";
import { buildComponentMap, compileAggregatedMdx } from "@/lib/content/aggregate-mdx";
import { getAggregatedNav } from "@/lib/content/aggregate-nav";
import { getSource, listSources, navPathToSlug } from "@/lib/content/aggregation-sources";
import { resolveLocalLocales } from "@/lib/content/local-source";
import { navToPageTree } from "@/lib/content/nav-to-pagetree";
import { baseOptions } from "@/lib/layout.shared";

// ISR：后台重验证；未知路径运行时按需生成（不 build）。
export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

/** 顶部下拉：白名单里的每个库 = 一个可切换的 tab（Root Toggle）。 */
function buildSourceTabs(): SidebarTabWithProps[] {
  return listSources().map((s) => ({
    title: s.id,
    description: s.attribution.text,
    // 不设 urls：让 isTabActive 走前缀匹配（/k/<id> 是所有子路由的前缀），
    // 否则 urls 集合只含落地页，一进子路由 tab 判为非激活、下拉塌陷。
    url: `/k/${s.id}`,
    icon: <BookMarked className="size-full" />,
  }));
}

export default async function AggregatedContentPage({
  params,
  searchParams,
}: {
  params: Promise<{ sourceId: string; slug?: string[] }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { sourceId, slug } = await params;
  const { lang } = await searchParams;

  // 白名单闸：不在表内的源一律 404
  const source = getSource(sourceId);
  if (!source) notFound();

  const nav = await getAggregatedNav(source);
  const tree = navToPageTree(nav, { sourceId, name: source.id });

  // 基准（默认语言）slug
  const basePath = navPathToSlug(slug) || "index";
  const routeBase = `/k/${sourceId}/${basePath}`;

  // 语言解析：仅当源配置了 i18n 且请求语言存在译文时切到译文文件
  let renderPath = basePath;
  let activeCode = "";
  let toggleOptions: DocLanguageOption[] = [];
  if (source.i18n) {
    const { available } = await resolveLocalLocales(source, basePath);
    const wanted = source.i18n.locales.find((l) => l.code === lang && available.includes(l.code));
    if (wanted) {
      renderPath = `${basePath}${wanted.suffix}`;
      activeCode = wanted.code;
    }
    if (available.length > 0) {
      toggleOptions = [
        { code: "", label: source.i18n.defaultLabel, active: activeCode === "", href: routeBase },
        ...source.i18n.locales
          .filter((l) => available.includes(l.code))
          .map((l) => ({
            code: l.code,
            label: l.label,
            active: activeCode === l.code,
            href: `${routeBase}?lang=${l.code}`,
          })),
      ];
    }
  }

  const doc = await compileAggregatedMdx(source, renderPath);

  const base = baseOptions();

  return (
    <DocsLayout {...base} tree={tree} sidebar={{ tabs: buildSourceTabs() }}>
      <DocsPage toc={doc?.toc ?? []}>
        {doc ? (
          <>
            <DocLanguageToggle options={toggleOptions} />
            <DocsTitle>{doc.title}</DocsTitle>
            {doc.description && <DocsDescription>{doc.description}</DocsDescription>}
            <DocsBody>
              <doc.Body components={buildComponentMap(source.id, renderPath, doc.tags)} />
              <footer className="mt-12 border-t border-fd-border pt-4 text-xs text-fd-muted-foreground">
                {source.attribution.text}{" "}
                <a
                  href={`${source.attribution.originBaseUrl}/${basePath}.${source.ext ?? "mdx"}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline hover:text-fd-foreground"
                >
                  查看原文 →
                </a>
              </footer>
            </DocsBody>
          </>
        ) : (
          <>
            <DocsTitle>{source.id}</DocsTitle>
            <DocsBody>
              <p className="text-fd-muted-foreground">请从左侧选择一篇文档。</p>
            </DocsBody>
          </>
        )}
      </DocsPage>
    </DocsLayout>
  );
}

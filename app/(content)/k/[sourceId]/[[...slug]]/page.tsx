import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { SidebarTabWithProps } from "fumadocs-ui/components/sidebar/tabs/dropdown";
import { BookMarked } from "lucide-react";
import { notFound } from "next/navigation";
import { buildComponentMap, compileAggregatedMdx } from "@/lib/content/aggregate-mdx";
import { getAggregatedNav } from "@/lib/content/aggregate-nav";
import { getSource, listSources, navPathToSlug } from "@/lib/content/aggregation-sources";
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
}: {
  params: Promise<{ sourceId: string; slug?: string[] }>;
}) {
  const { sourceId, slug } = await params;

  // 白名单闸：不在表内的源一律 404
  const source = getSource(sourceId);
  if (!source) notFound();

  const nav = await getAggregatedNav(source);
  const tree = navToPageTree(nav, { sourceId, name: source.id });

  const path = navPathToSlug(slug) || "index";
  const doc = await compileAggregatedMdx(source, path);

  const base = baseOptions();

  return (
    <DocsLayout
      {...base}
      tree={tree}
      sidebar={{ tabs: buildSourceTabs() }}
    >
      <DocsPage toc={doc?.toc ?? []}>
        {doc ? (
          <>
            <DocsTitle>{doc.title}</DocsTitle>
            {doc.description && <DocsDescription>{doc.description}</DocsDescription>}
            <DocsBody>
              <doc.Body components={buildComponentMap(source.id, path, doc.tags)} />
              <footer className="mt-12 border-t border-fd-border pt-4 text-xs text-fd-muted-foreground">
                {source.attribution.text}{" "}
                <a
                  href={`${source.attribution.originBaseUrl}/${path}.${source.ext ?? "mdx"}`}
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

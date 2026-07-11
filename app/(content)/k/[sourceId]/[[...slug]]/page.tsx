import { notFound } from "next/navigation";
import { AggregatedNavSidebar } from "@/components/content/aggregated-nav-sidebar";
import { buildComponentMap, compileAggregatedMdx } from "@/lib/content/aggregate-mdx";
import { getAggregatedNav } from "@/lib/content/aggregate-nav";
import { getSource, navPathToSlug } from "@/lib/content/aggregation-sources";

// ISR：后台重验证；未知路径运行时按需生成（不 build）。
export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
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

  // 无 slug → 若源有根 index 则渲染，否则渲染导航落地
  const path = navPathToSlug(slug) || "index";
  const doc = await compileAggregatedMdx(source, path);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row">
      <AggregatedNavSidebar nodes={nav} sourceId={sourceId} />
      <div className="min-w-0 flex-1">
        {doc ? (
          <article className="prose max-w-none">
            <h1>{doc.title}</h1>
            <doc.Body components={buildComponentMap(source.id, path, doc.tags)} />
          </article>
        ) : (
          <div className="prose max-w-none">
            <h1>{source.id}</h1>
            <p className="text-fd-muted-foreground">请从左侧选择一篇文档。</p>
          </div>
        )}
        <footer className="mt-12 border-t border-fd-border pt-4 text-xs text-fd-muted-foreground">
          {source.attribution.text}{" "}
          {slug && slug.length > 0 && (
            <a
              href={`${source.attribution.originBaseUrl}/${path}.mdx`}
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:text-fd-foreground"
            >
              查看原文 →
            </a>
          )}
        </footer>
      </div>
    </div>
  );
}

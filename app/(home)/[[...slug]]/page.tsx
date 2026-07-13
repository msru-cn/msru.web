import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/marketing";
import { getMarketingMetadata, getMarketingPage, marketingPageParams } from "@/lib/marketing/pages-registry";

/**
 * 营销页 catch-all 路由 —— 数据驱动 (SDUI)。
 * 从页面注册表按 slug 取 block JSON，交给 BlockRenderer 渲染。
 * 具体路由 (concrete page.tsx) 优先级更高，故可与尚未迁移的手写页共存，支持增量迁移。
 * 新增/改营销页 = 加/改一个 JSON + 注册表登记一行，零改路由代码。
 */
export function generateStaticParams(): { slug: string[] }[] {
  return marketingPageParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  return getMarketingMetadata(slug) ?? {};
}

export default async function MarketingPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const data = getMarketingPage(slug);
  if (!data) notFound();
  return (
    <main className="relative flex flex-col w-full min-h-screen text-foreground overflow-x-hidden">
      <BlockRenderer blocks={data} />
    </main>
  );
}

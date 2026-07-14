import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/marketing";
import { getMarketingPageFromDB } from "@/lib/cms-service";
import { getMarketingMetadata, getMarketingPage, marketingPageParams } from "@/lib/marketing/pages-registry";
import { createMetadata } from "@/lib/metadata";

/**
 * 营销页 catch-all 路由 —— 数据驱动 (SDUI)。
 * 优先检查 SQLite 分布式 CMS 数据库，若不存在则降级到页面注册表获取静态 JSON。
 */
export function generateStaticParams(): { slug: string[] }[] {
  return marketingPageParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const slugStr = (slug ?? []).join("/");
  const dbRecord = getMarketingPageFromDB(slugStr);
  if (dbRecord?.meta) {
    return createMetadata(dbRecord.meta);
  }
  return getMarketingMetadata(slug) ?? {};
}

export default async function MarketingPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const slugStr = (slug ?? []).join("/");
  const dbRecord = getMarketingPageFromDB(slugStr);
  const data = dbRecord?.blocks ?? getMarketingPage(slug);
  if (!data) notFound();
  return (
    <main className="relative flex flex-col w-full min-h-screen text-foreground overflow-x-hidden">
      <BlockRenderer blocks={data} />
    </main>
  );
}

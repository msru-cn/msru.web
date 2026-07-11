import { notFound } from "next/navigation";
import { compileRemoteMdx } from "@/lib/content/remote-mdx";

// ISR：60 秒后台重验证；未知路径运行时按需生成（不 build）
export const revalidate = 60;
export const dynamicParams = true;

// 不预生成任何路径 —— 全部运行时按需 + ISR 缓存
export function generateStaticParams() {
  return [];
}

export default async function RemoteContentPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const path = (slug ?? []).join("/");
  if (!path) notFound();
  const doc = await compileRemoteMdx(path);
  if (!doc) notFound();
  const { Body } = doc;
  return (
    <article className="prose mx-auto py-12">
      <h1>{doc.title}</h1>
      <Body />
    </article>
  );
}

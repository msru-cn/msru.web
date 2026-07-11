import { generate as DefaultImage } from "fumadocs-ui/og";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { source } from "@/lib/source";

/** OG 图片按需动态生成，不在 build 时预渲染（避免 Google Fonts 网络超时） */
export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: RouteContext<"/og/docs/[...slug]">) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    <DefaultImage title={page.data.title} description={page.data.description} site="MSRU Platform" />,
    {
      width: 1200,
      height: 630,
    },
  );
}

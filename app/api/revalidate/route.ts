import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/content/revalidate-auth";

export async function POST(req: Request) {
  if (!isAuthorized(req, process.env.REVALIDATE_SECRET)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const body = (await req.json().catch(() => ({}))) as { tag?: string; slug?: string };
  const tag = body.tag ?? (body.slug ? `mdx:${body.slug}` : null);
  if (!tag) {
    return NextResponse.json({ ok: false, error: "missing tag or slug" }, { status: 400 });
  }
  revalidateTag(tag);
  return NextResponse.json({ ok: true, revalidated: tag });
}

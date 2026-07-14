import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import {
  deleteDocsPageFromDB,
  deleteMarketingPageFromDB,
  executeRawSql,
  upsertDocsPageToDB,
  upsertMarketingPageToDB,
} from "@/lib/cms-service";

export async function POST(req: Request) {
  const apiKey = process.env.CMS_API_KEY ?? process.env.DB_API_KEY;
  const authHeader = req.headers.get("authorization");

  if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
    return NextResponse.json({ success: false, error: "Unauthorized: Invalid or missing API Key" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { action } = body;

    if (!action) {
      return NextResponse.json({ success: false, error: "Missing action field" }, { status: 400 });
    }

    switch (action) {
      case "upsert_marketing": {
        const { slug = "", blocks, meta } = body;
        if (blocks === undefined) {
          return NextResponse.json({ success: false, error: "Missing blocks for marketing page" }, { status: 400 });
        }
        upsertMarketingPageToDB(slug, blocks, meta);
        const targetPath = slug === "" ? "/" : `/${slug}`;
        revalidatePath(targetPath);
        return NextResponse.json({ success: true, message: `Marketing page '${targetPath}' upserted and revalidated` });
      }

      case "delete_marketing": {
        const { slug = "" } = body;
        const deleted = deleteMarketingPageFromDB(slug);
        const targetPath = slug === "" ? "/" : `/${slug}`;
        if (deleted) revalidatePath(targetPath);
        return NextResponse.json({ success: true, deleted, path: targetPath });
      }

      case "upsert_docs": {
        const { slug, title, content, description } = body;
        if (!slug || !title || !content) {
          return NextResponse.json(
            { success: false, error: "Missing slug, title, or content for docs" },
            { status: 400 },
          );
        }
        upsertDocsPageToDB(slug, title, content, description);
        const targetPath = `/docs/${slug}`;
        revalidatePath(targetPath);
        return NextResponse.json({ success: true, message: `Docs page '${targetPath}' upserted and revalidated` });
      }

      case "delete_docs": {
        const { slug } = body;
        if (!slug) {
          return NextResponse.json({ success: false, error: "Missing slug for docs" }, { status: 400 });
        }
        const deleted = deleteDocsPageFromDB(slug);
        const targetPath = `/docs/${slug}`;
        if (deleted) revalidatePath(targetPath);
        return NextResponse.json({ success: true, deleted, path: targetPath });
      }

      case "execute_sql": {
        const { sql, params = [], type = "run" } = body;
        if (!sql) {
          return NextResponse.json({ success: false, error: "Missing sql statement" }, { status: 400 });
        }
        const result = executeRawSql(sql, params, type);
        return NextResponse.json({ success: true, data: result });
      }

      default:
        return NextResponse.json({ success: false, error: `Unknown action: ${action}` }, { status: 400 });
    }
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: errMessage }, { status: 500 });
  }
}

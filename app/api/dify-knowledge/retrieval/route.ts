// 文件路径必须是：apps/docs/app/api/dify-knowledge/retrieval/route.ts
// 这样才能匹配 Dify 自动追加的 /retrieval 路径

import fs from "node:fs";
import path from "node:path";
import { type NextRequest, NextResponse } from "next/server";
import { source } from "@/lib/source";

const DIFY_API_KEY = process.env.DIFY_API_KEY || "app-lAMH93hbSklDLhyjswhLwE8y";

interface SearchResultItem {
  url: string;
  title?: string;
  content?: string;
  description?: string;
  score?: number;
}

function findLocalMdxFile(slugArray: string[]): string | null {
  const basePath = path.join(process.cwd(), "content", "docs");
  const slugPath = slugArray.join(path.sep);
  const possiblePaths = [
    path.join(basePath, `${slugPath}.mdx`),
    path.join(basePath, `${slugPath}.md`),
    path.join(basePath, slugPath, "index.mdx"),
    path.join(basePath, slugPath, "index.md"),
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${DIFY_API_KEY}`) {
      // 严格符合 Dify 的 1002 错误码标准
      return NextResponse.json({ error_code: 1002, error_msg: "授权失败" }, { status: 403 });
    }

    const body = await req.json();
    const { query, retrieval_setting } = body;
    const topK = retrieval_setting?.top_k || 3;

    if (!query || String(query).trim() === "") {
      return NextResponse.json({ records: [] }, { status: 200 });
    }

    // 【致命网络陷阱的修复】
    // 强制使用本地环回地址 (127.0.0.1)，彻底避开 Docker 容器自己请求自己公网域名导致的超时挂起！
    const port = process.env.PORT || 3000;
    const searchUrl = `http://127.0.0.1:${port}/api/search?query=${encodeURIComponent(String(query))}`;

    // 禁用缓存，防止 Next.js 静态化
    const searchRes = await fetch(searchUrl, { cache: "no-store" });

    if (!searchRes.ok) {
      return NextResponse.json({ error_code: 500, error_msg: "本地搜索失败" }, { status: 500 });
    }

    const searchData: SearchResultItem[] = await searchRes.json();
    const uniqueUrls: string[] = Array.from(new Set(searchData.map((item) => String(item.url).split("#")[0])));
    const targetUrls = uniqueUrls.slice(0, topK);

    const records = [];
    let currentScore = 1.0;

    for (const urlString of targetUrls) {
      const urlPath = new URL(urlString, req.nextUrl.origin).pathname;
      const slugArray = urlPath.replace("/docs/", "").split("/").filter(Boolean);
      const page = source.getPage(slugArray);

      if (page) {
        let fullDocumentContent = "";
        const filePath = findLocalMdxFile(slugArray);

        if (filePath) {
          try {
            fullDocumentContent = fs.readFileSync(filePath, "utf-8");
          } catch (_e) {
            fullDocumentContent = `标题：${page.data.title}\n描述：${page.data.description || ""}`;
          }
        } else {
          fullDocumentContent = `标题：${page.data.title}\n描述：${page.data.description || ""}`;
        }

        records.push({
          title: page.data.title || "文档",
          content: fullDocumentContent,
          score: currentScore,
          metadata: {
            // 极致贴合官方示例，把 url 和 path 都给它
            url: new URL(urlPath, req.nextUrl.origin).toString(),
            path: new URL(urlPath, req.nextUrl.origin).toString(),
            description: page.data.description || "",
          },
        });

        currentScore = Math.max(0.1, currentScore - 0.1);
      }
    }

    return NextResponse.json({ records }, { status: 200 });
  } catch (_error: unknown) {
    return NextResponse.json({ error_code: 500, error_msg: "服务器内部错误" }, { status: 500 });
  }
}

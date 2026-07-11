import { unstable_cache } from "next/cache";
import { z } from "zod";
import { db } from "@/lib/db";

export interface ProductRecord {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  icon: string;
}

const RowSchema = z.object({
  slug: z.string(),
  title: z.string(),
  tagline: z.string(),
  description: z.string(),
  accent_color: z.string(),
  icon: z.string(),
});

export function parseProducts(rows: unknown[]): ProductRecord[] {
  const out: ProductRecord[] = [];
  for (const row of rows) {
    const parsed = RowSchema.safeParse(row);
    if (!parsed.success) continue;
    const r = parsed.data;
    out.push({
      slug: r.slug,
      title: r.title,
      tagline: r.tagline,
      description: r.description,
      accentColor: r.accent_color,
      icon: r.icon,
    });
  }
  return out;
}

async function fetchProducts(): Promise<ProductRecord[]> {
  const rows = db()
    .prepare("SELECT slug, title, tagline, description, accent_color, icon FROM marketing_products ORDER BY sort_order")
    .all();
  return parseProducts(rows as unknown[]);
}

export async function getProducts(): Promise<ProductRecord[]> {
  const cached = unstable_cache(fetchProducts, ["products"], { tags: ["products"], revalidate: 300 });
  return cached();
}

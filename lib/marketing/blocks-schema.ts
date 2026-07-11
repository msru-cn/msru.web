import { z } from "zod";

export const accent = z
  .enum(["blue", "emerald", "amber", "orange", "rose", "slate", "purple", "fuchsia", "teal", "cyan"])
  .optional();
export const cta = z.object({ label: z.string(), href: z.string() });

const hero = z.object({
  type: z.literal("hero"),
  variant: z.enum(["dark", "narrative", "search"]).default("dark"),
  badge: z.object({ icon: z.string(), text: z.string() }).optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  accentColor: accent,
  bgImage: z.string().optional(),
  ctas: z.array(cta).optional(),
});

const statBand = z.object({
  type: z.literal("statBand"),
  heading: z.string(),
  accentColor: accent,
  stats: z.array(z.object({ value: z.string(), unit: z.string(), label: z.string() })),
});

const featureGrid = z.object({
  type: z.literal("featureGrid"),
  columns: z.union([z.literal(2), z.literal(3)]).default(2),
  cards: z.array(z.object({ icon: z.string().optional(), title: z.string(), desc: z.string() })),
});

const bento = z.object({
  type: z.literal("bento"),
  items: z.array(
    z.object({
      icon: z.string().optional(),
      title: z.string(),
      description: z.string(),
      tagline: z.string().optional(),
      span: z.enum(["normal", "wide"]).optional(),
      accentColor: accent,
    }),
  ),
});

const ctaBlock = z.object({
  type: z.literal("cta"),
  variant: z.enum(["small", "large"]).default("small"),
  title: z.string(),
  description: z.string().optional(),
  cta: cta,
  accentColor: accent,
});

const pricingTable = z.object({
  type: z.literal("pricingTable"),
  plans: z.array(
    z.object({
      name: z.string(),
      price: z.string(),
      unit: z.string().optional(),
      description: z.string(),
      popular: z.boolean().optional(),
      features: z.array(z.string()),
      cta: cta,
    }),
  ),
});

const custom = z.object({
  type: z.literal("custom"),
  component: z.string(),
  props: z.record(z.string(), z.unknown()).optional(),
});

const splitMedia = z.object({
  type: z.literal("splitMedia"),
  image: z.string(),
  side: z.enum(["left", "right"]).default("left"),
  eyebrow: z.string().optional(),
  title: z.string(),
  body: z.string(),
  bullets: z.array(z.string()).optional(),
  cta: cta.optional(),
});

export const blockSchema = z.discriminatedUnion("type", [
  hero, statBand, featureGrid, bento, ctaBlock, pricingTable, custom, splitMedia,
]);
export const pageSchema = z.array(blockSchema);
export type Block = z.infer<typeof blockSchema>;

export function parsePage(data: unknown): Block[] {
  if (process.env.NODE_ENV === "development") {
    return pageSchema.parse(data);
  }
  if (!Array.isArray(data)) {
    console.warn("[marketing] page data is not an array, skipping");
    return [];
  }
  const out: Block[] = [];
  for (const raw of data) {
    const r = blockSchema.safeParse(raw);
    if (r.success) out.push(r.data);
    else console.warn("[marketing] dropped invalid block", r.error.issues);
  }
  return out;
}

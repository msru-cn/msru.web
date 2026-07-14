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
  titleAccent: z.string().optional(),
  subtitle: z.string().optional(),
  accentColor: accent,
  bgImage: z.string().optional(),
  bgVideo: z.string().optional(),
  ctas: z.array(cta).optional(),
});

const subHero = z.object({
  type: z.literal("subHero"),
  badge: z.object({ icon: z.string().optional(), text: z.string() }).optional(),
  title: z.string(),
  titleAccent: z.string().optional(),
  subtitle: z.string().optional(),
  accentColor: accent,
  bgImage: z.string().optional(),
  bgVideo: z.string().optional(),
});

const contactForm = z.object({
  type: z.literal("contactForm"),
  heading: z.string().optional(),
  subtitle: z.string().optional(),
  submitLabel: z.string().optional(),
  submitEmail: z.string().optional(),
  accentColor: accent,
  fields: z.array(
    z.object({
      name: z.string(),
      label: z.string(),
      type: z.enum(["text", "email", "tel", "textarea", "select"]).optional(),
      placeholder: z.string().optional(),
      required: z.boolean().optional(),
      options: z.array(z.string()).optional(),
    }),
  ),
});

const videoSpec = z.object({ src: z.string(), poster: z.string().optional() });

const topHero = z.object({
  type: z.literal("topHero"),
  badge: z.object({ icon: z.string(), text: z.string() }).optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  accentColor: accent,
  bgImage: z.string().optional(),
  bgVideo: z.string().optional(),
  channels: z.array(z.object({ icon: z.string(), label: z.string(), href: z.string() })).optional(),
  video: z.union([videoSpec, z.array(videoSpec)]).optional(),
  videos: z.array(videoSpec).optional(),
  intro: z
    .object({
      heading: z.string().optional(),
      paragraphs: z.array(z.string()).optional(),
      ctas: z.array(cta).optional(),
    })
    .optional(),
});

const tabbedHero = z.object({
  type: z.literal("tabbedHero"),
  heading: z.string().optional(),
  subtitle: z.string().optional(),
  defaultIndex: z.number().optional(),
  tabs: z.array(
    z.object({
      label: z.string(),
      icon: z.string().optional(),
      bgImage: z.string().optional(),
      accentColor: accent,
      eyebrow: z.string().optional(),
      title: z.string(),
      description: z.string().optional(),
      bullets: z.array(z.string()).optional(),
      ctas: z.array(cta).optional(),
    }),
  ),
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
  image: z.string().optional(),
  side: z.enum(["left", "right"]).default("left"),
  eyebrow: z.string().optional(),
  title: z.string(),
  body: z.string(),
  bullets: z.array(z.string()).optional(),
  cta: cta.optional(),
});

const list = z.object({
  type: z.literal("list"),
  variant: z.enum(["timeline", "cards", "rows", "steps"]).default("rows"),
  items: z.array(
    z.object({
      title: z.string(),
      meta: z.string().optional(),
      desc: z.string().optional(),
      tag: z.string().optional(),
      href: z.string().optional(),
    }),
  ),
});

const caseList = z.object({
  type: z.literal("caseList"),
  cases: z.array(
    z.object({
      company: z.string(),
      industry: z.string(),
      result: z.string(),
      quote: z.string(),
      image: z.string(),
    }),
  ),
});

const statement = z.object({
  type: z.literal("statement"),
  title: z.string().optional(),
  body: z.string().optional(),
  accentColor: accent,
});

const logoWall = z.object({
  type: z.literal("logoWall"),
  eyebrow: z.string().optional(),
  items: z.array(z.object({ name: z.string(), src: z.string().optional(), icon: z.string().optional() })),
});

const faq = z.object({
  type: z.literal("faq"),
  items: z.array(z.object({ q: z.string(), a: z.string() })),
});

const testimonial = z.object({
  type: z.literal("testimonial"),
  quote: z.string(),
  author: z.string(),
  role: z.string().optional(),
  avatar: z.string().optional(),
});

const mediaShowcase = z.object({
  type: z.literal("mediaShowcase"),
  media: z.string(),
  title: z.string().optional(),
  caption: z.string().optional(),
});

const connectivityGlobe = z.object({
  type: z.literal("connectivityGlobe"),
  markers: z.array(z.object({ lat: z.number(), lng: z.number(), label: z.string().optional() })).optional(),
  autoRotate: z.boolean().optional(),
  heading: z.string().optional(),
  subtitle: z.string().optional(),
});

const animatedBeams = z.object({
  type: z.literal("animatedBeams"),
  nodes: z.array(z.object({ icon: z.string(), label: z.string() })),
  edges: z.array(z.object({ from: z.number(), to: z.number() })),
  heading: z.string().optional(),
  subtitle: z.string().optional(),
});

export const blockSchema = z.discriminatedUnion("type", [
  hero,
  subHero,
  contactForm,
  topHero,
  tabbedHero,
  statBand,
  featureGrid,
  bento,
  ctaBlock,
  pricingTable,
  custom,
  splitMedia,
  list,
  caseList,
  statement,
  logoWall,
  faq,
  testimonial,
  mediaShowcase,
  connectivityGlobe,
  animatedBeams,
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

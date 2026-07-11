import { z } from "zod";

export const ProductComparisonSchema = z.object({
  products: z
    .array(
      z.object({
        slug: z.string(),
        title: z.string(),
        tagline: z.string(),
        accentColor: z.string(),
      }),
    )
    .min(1),
});

export const PricingSchema = z.object({
  plans: z
    .array(
      z.object({
        name: z.string(),
        price: z.string(),
        unit: z.string(),
        features: z.array(z.string()),
        href: z.string(),
      }),
    )
    .min(1),
});

export const SolutionSchema = z.object({
  title: z.string(),
  description: z.string(),
  bullets: z.array(z.string()),
  ctaHref: z.string(),
});

export type ProductComparisonInput = z.infer<typeof ProductComparisonSchema>;
export type PricingInput = z.infer<typeof PricingSchema>;
export type SolutionInput = z.infer<typeof SolutionSchema>;

export const GENUI_TOOL_NAMES = [
  "provideProductComparison",
  "providePricing",
  "provideSolution",
] as const;
export type GenUiToolName = (typeof GENUI_TOOL_NAMES)[number];

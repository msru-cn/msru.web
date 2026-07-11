import { tool } from "ai";
import { z } from "zod";
import { getProducts } from "@/lib/content/products-repo";
import { PricingSchema, SolutionSchema } from "./genui-schema";

export const genuiTools = {
  provideProductComparison: tool({
    description: "当用户想对比或了解多个产品时调用。传入产品 slug 列表（如 mes/wms/aps/qms/eam/iot/ai）。",
    inputSchema: z.object({ slugs: z.array(z.string()).min(1) }),
    async execute({ slugs }) {
      const all = await getProducts();
      const products = all
        .filter((p) => slugs.includes(p.slug))
        .map((p) => ({ slug: p.slug, title: p.title, tagline: p.tagline, accentColor: p.accentColor }));
      return { products };
    },
  }),
  providePricing: tool({
    description: "当用户询问价格、报价、套餐时调用，返回定价方案卡片。",
    inputSchema: PricingSchema,
    async execute(input) {
      return input;
    },
  }),
  provideSolution: tool({
    description: "当用户描述某个行业场景或需求、需要方案推荐时调用。",
    inputSchema: SolutionSchema,
    async execute(input) {
      return input;
    },
  }),
};

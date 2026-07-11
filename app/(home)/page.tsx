import { BentoCard, BentoGrid, CTASection, FeatureList, Hero } from "@/components/marketing";
import { createMetadata } from "@/lib/metadata";
import { bottomCta, hero, products, services } from "@/content/marketing/home";

export const metadata = createMetadata({
  title: "工业数字化引擎 - 引领智造未来",
  description: "深耕 工业数字化与人工智能领域。MSRU 为您打造突破性的数字化转型方案与精工细作的软件定制开发。",
});

export default function HomePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero {...hero} />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">七大核心基座。样样超能。</h2>
          <p className="text-muted-foreground text-xl">全栈工业管理控制系统，构建您的无人工厂与工业互联新生态。</p>
        </div>
        <BentoGrid>
          {products.map((p) => (
            <BentoCard key={p.title} {...p} />
          ))}
        </BentoGrid>
      </section>

      <section className="py-32 bg-zinc-950 text-white w-full border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                每一行代码，
                <br />
                都为你量体裁衣。
              </h2>
              <p className="text-zinc-400 text-xl max-w-xl leading-relaxed">
                除了成熟的标准产品，我们更提供行业顶级的数字化咨询与软件定制开发服务。
              </p>
              <FeatureList items={services} />
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="minimal" {...bottomCta} />
    </main>
  );
}

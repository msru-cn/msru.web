import type { ReactNode } from "react";
import { type Block, parsePage } from "@/lib/marketing/blocks-schema";
import { resolveCustom } from "@/lib/marketing/custom-registry";
import { resolveIcon } from "@/lib/marketing/icon-registry";
import { BentoCard, BentoGrid } from "./bento-card";
import { ListBlock } from "./blocks/list-block";
import { SplitMedia } from "./blocks/split-media";
import { PricingTable } from "./pricing-table";
import { StatBlock } from "./stat-block";
import { SubPageCardGrid, SubPageCta, SubPageHero } from "./sub-page-template";

export function renderBlock(block: Block, index: number): ReactNode {
  const key = index;
  switch (block.type) {
    case "hero": {
      const icon = resolveIcon(block.badge?.icon);
      return (
        <SubPageHero
          key={key}
          badge={icon && block.badge ? { icon, text: block.badge.text } : undefined}
          title={block.title}
          subtitle={block.subtitle}
          accentColor={block.accentColor}
        />
      );
    }
    case "statBand":
      return <StatBlock key={key} heading={block.heading} accentColor={block.accentColor} stats={block.stats} />;
    case "featureGrid":
      return (
        <section key={key} className="py-24 bg-white dark:bg-zinc-950">
          <div className="container mx-auto px-6 max-w-5xl">
            <SubPageCardGrid
              columns={block.columns}
              cards={block.cards.map((c) => {
                const Icon = resolveIcon(c.icon);
                return { icon: Icon ? <Icon className="size-8" /> : undefined, title: c.title, desc: c.desc };
              })}
            />
          </div>
        </section>
      );
    case "bento":
      return (
        <section key={key} className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
          <BentoGrid>
            {block.items.map((it, i) => {
              const Icon = resolveIcon(it.icon) ?? resolveIcon("Box");
              if (!Icon) return null;
              return (
                <BentoCard
                  key={`${key}-${i}`}
                  icon={Icon}
                  accentColor={it.accentColor ?? "blue"}
                  title={it.title}
                  tagline={it.tagline ?? ""}
                  description={it.description}
                  span={it.span}
                />
              );
            })}
          </BentoGrid>
        </section>
      );
    case "cta":
      return <SubPageCta key={key} title={block.title} description={block.description} cta={block.cta} />;
    case "pricingTable":
      return (
        <section key={key} className="py-24 bg-white dark:bg-zinc-950">
          <div className="container mx-auto px-6 max-w-6xl">
            <PricingTable plans={block.plans} />
          </div>
        </section>
      );
    case "custom": {
      const Comp = resolveCustom(block.component);
      return Comp ? <Comp key={key} {...(block.props ?? {})} /> : null;
    }
    case "splitMedia":
      return (
        <SplitMedia
          key={key}
          image={block.image}
          side={block.side}
          eyebrow={block.eyebrow}
          title={block.title}
          body={block.body}
          bullets={block.bullets}
          cta={block.cta}
        />
      );
    case "list":
      return <ListBlock key={key} variant={block.variant} items={block.items} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: unknown }) {
  const parsed = parsePage(blocks);
  return <>{parsed.map((b, i) => renderBlock(b, i))}</>;
}

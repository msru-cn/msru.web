import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { type Block, parsePage } from "@/lib/marketing/blocks-schema";
import { resolveCustom } from "@/lib/marketing/custom-registry";
import { resolveIcon } from "@/lib/marketing/icon-registry";
import { BentoCard, BentoGrid } from "./bento-card";
import { CaseList } from "./blocks/case-list";
import { CtaBlock } from "./blocks/cta-block";
import { FeatureGrid } from "./blocks/feature-grid";
import { HeroBlock } from "./blocks/hero-block";
import { ListBlock } from "./blocks/list-block";
import { LogoWall } from "./blocks/logo-wall";
import { MediaShowcase } from "./blocks/media-showcase";
import { PricingBlock } from "./blocks/pricing-block";
import { SplitMedia } from "./blocks/split-media";
import { Statement } from "./blocks/statement";
import { SubHero } from "./blocks/sub-hero";
import { Testimonial } from "./blocks/testimonial";
import { TopHero } from "./blocks/top-hero";
import { StatBlock } from "./stat-block";

const Faq = dynamic(() => import("./blocks/faq").then((m) => m.Faq));
const ConnectivityGlobe = dynamic(() => import("./blocks/connectivity-globe").then((m) => m.ConnectivityGlobe));
const AnimatedBeams = dynamic(() => import("./blocks/animated-beams").then((m) => m.AnimatedBeams));
const TabbedHero = dynamic(() => import("./blocks/tabbed-hero").then((m) => m.TabbedHero));
const ContactForm = dynamic(() => import("./blocks/contact-form").then((m) => m.ContactForm));

export function renderBlock(block: Block, index: number): ReactNode {
  const key = index;
  switch (block.type) {
    case "hero": {
      return (
        <HeroBlock
          key={key}
          badge={block.badge}
          title={block.title}
          titleAccent={block.titleAccent}
          subtitle={block.subtitle}
          accentColor={block.accentColor}
          bgImage={block.bgImage}
          ctas={block.ctas}
        />
      );
    }
    case "topHero":
      return (
        <TopHero
          key={key}
          badge={block.badge}
          title={block.title}
          subtitle={block.subtitle}
          accentColor={block.accentColor}
          channels={block.channels}
          video={block.video}
          intro={block.intro}
        />
      );
    case "subHero":
      return (
        <SubHero
          key={key}
          badge={block.badge}
          title={block.title}
          titleAccent={block.titleAccent}
          subtitle={block.subtitle}
          accentColor={block.accentColor}
          bgImage={block.bgImage}
        />
      );
    case "contactForm":
      return (
        <ContactForm
          key={key}
          heading={block.heading}
          subtitle={block.subtitle}
          fields={block.fields}
          submitLabel={block.submitLabel}
          submitEmail={block.submitEmail}
          accentColor={block.accentColor}
        />
      );
    case "tabbedHero":
      return (
        <TabbedHero
          key={key}
          heading={block.heading}
          subtitle={block.subtitle}
          tabs={block.tabs}
          defaultIndex={block.defaultIndex}
        />
      );
    case "statBand":
      return <StatBlock key={key} heading={block.heading} accentColor={block.accentColor} stats={block.stats} />;
    case "featureGrid":
      return <FeatureGrid key={key} columns={block.columns} cards={block.cards} />;
    case "bento":
      return (
        <section key={key} className="glass-stage py-28 px-6 md:px-12 w-full">
          <div className="max-w-[1400px] mx-auto">
            <BentoGrid>
              {block.items.map((it) => {
                const Icon = resolveIcon(it.icon) ?? resolveIcon("Box");
                if (!Icon) return null;
                return (
                  <BentoCard
                    key={it.title}
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
          </div>
        </section>
      );
    case "cta":
      return (
        <CtaBlock
          key={key}
          variant={block.variant}
          title={block.title}
          description={block.description}
          cta={block.cta}
          accentColor={block.accentColor}
        />
      );
    case "pricingTable":
      return <PricingBlock key={key} plans={block.plans} />;
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
    case "caseList":
      return <CaseList key={key} cases={block.cases} />;
    case "statement":
      return <Statement key={key} title={block.title} body={block.body} accentColor={block.accentColor} />;
    case "logoWall":
      return <LogoWall key={key} eyebrow={block.eyebrow} items={block.items} />;
    case "faq":
      return <Faq key={key} items={block.items} />;
    case "testimonial":
      return (
        <Testimonial key={key} quote={block.quote} author={block.author} role={block.role} avatar={block.avatar} />
      );
    case "mediaShowcase":
      return <MediaShowcase key={key} media={block.media} title={block.title} caption={block.caption} />;
    case "connectivityGlobe":
      return (
        <ConnectivityGlobe
          key={key}
          markers={block.markers}
          autoRotate={block.autoRotate}
          heading={block.heading}
          subtitle={block.subtitle}
        />
      );
    case "animatedBeams":
      return (
        <AnimatedBeams
          key={key}
          nodes={block.nodes}
          edges={block.edges}
          heading={block.heading}
          subtitle={block.subtitle}
        />
      );
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: unknown }) {
  const parsed = parsePage(blocks);
  return <>{parsed.map((b, i) => renderBlock(b, i))}</>;
}

import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import * as FilesComponents from "fumadocs-ui/components/files";
import { Step, Steps } from "fumadocs-ui/components/steps";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import defaultMdxComponents from "fumadocs-ui/mdx";
import * as icons from "lucide-react";
import type { MDXComponents } from "mdx/types";
import type React from "react";
import type { ComponentProps, ReactNode } from "react";
import { createElement } from "react";
import { MathEquation } from "@/components/math-equation";
import { Mermaid } from "@/components/mermaid";
import { PricingTable } from "@/components/pricing-table";

/**
 * 包装 FumaDocs Card 组件，支持字符串 icon prop
 *
 * MDX 中 `icon="Lock"` 传入的是字符串名称，
 * 需自动映射为 lucide-react 的同名 React 组件。
 */
function IconCard({ icon, ...rest }: ComponentProps<typeof Card> & { icon?: ReactNode | string }) {
  let resolvedIcon = icon;
  if (typeof icon === "string" && icon in icons) {
    // biome-ignore lint/suspicious/noExplicitAny: lucide-react 动态组件查找
    resolvedIcon = createElement((icons as any)[icon], {
      className: "size-4",
    });
  }
  return <Card icon={resolvedIcon} {...rest} />;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    ...TabsComponents,
    ...FilesComponents,
    Accordion,
    Accordions,
    Callout,
    Tabs,
    Tab,
    TypeTable,
    Step,
    Steps,
    Card: IconCard,
    Cards,
    MathEquation,
    Mermaid,
    PricingTable,
    ...components,
  } as MDXComponents;
}

declare module "mdx/types.js" {
  // Augment the MDX types to make it understand React.
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type Element = React.JSX.Element;
    type ElementClass = React.JSX.ElementClass;
    type ElementType = React.JSX.ElementType;
    type IntrinsicElements = React.JSX.IntrinsicElements;
  }
}

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}

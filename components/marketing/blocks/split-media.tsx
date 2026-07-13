import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export interface CtaLink {
  label: string;
  href: string;
}

export interface SplitMediaProps {
  image?: string;
  side?: "left" | "right";
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  cta?: CtaLink;
}

/**
 * 图文分栏 —— glass-stage 背景，图片裹玻璃相框，文案侧玻璃勾选点。
 * 明暗双主题自适应。无 image 时降级为居中单列文案排版。
 */
export function SplitMedia({ image, side = "left", eyebrow, title, body, bullets, cta }: SplitMediaProps) {
  const textBlock = (
    <div className={cn("w-full space-y-5", image ? "lg:w-1/2" : "max-w-3xl text-center")}>
      {eyebrow && <span className="text-[11px] font-bold uppercase tracking-widest text-blue-500">{eyebrow}</span>}
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-white">{title}</h2>
      <p className="text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">{body}</p>
      {bullets && (
        <ul className={cn("space-y-3", image ? "" : "inline-block text-left")}>
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300">
              <span className="glass-subtle mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-blue-500">
                <Check className="size-3.5" aria-hidden="true" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      )}
      {cta && (
        <Link
          href={cta.href}
          className="group inline-flex items-center gap-2 font-semibold text-blue-500 transition-all hover:gap-3"
        >
          {cta.label} <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  );

  if (!image) {
    return (
      <section className="glass-stage py-24 md:py-28">
        <div className="container mx-auto flex max-w-6xl flex-col items-center px-6">{textBlock}</div>
      </section>
    );
  }

  return (
    <section className="glass-stage py-24 md:py-28">
      <div
        className={cn(
          "container mx-auto flex max-w-6xl flex-col items-center gap-12 px-6",
          side === "right" ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        <div className="glass glass-hover w-full overflow-hidden rounded-[2rem] p-2 lg:w-1/2">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1.6rem]">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
        {textBlock}
      </div>
    </section>
  );
}

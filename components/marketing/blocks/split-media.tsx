import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { CtaLink } from "../hero";

export interface SplitMediaProps {
  image: string;
  side?: "left" | "right";
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  cta?: CtaLink;
}

export function SplitMedia({ image, side = "left", eyebrow, title, body, bullets, cta }: SplitMediaProps) {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div
        className={cn(
          "container mx-auto px-6 max-w-6xl flex flex-col gap-12 items-center",
          side === "right" ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        <div className="relative w-full lg:w-1/2 aspect-4/3 rounded-[2rem] overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="w-full lg:w-1/2 space-y-5">
          {eyebrow && <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{eyebrow}</span>}
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">{title}</h2>
          <p className="text-lg text-zinc-500 leading-relaxed">{body}</p>
          {bullets && (
            <ul className="space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <ArrowRight className="size-4 text-primary shrink-0" aria-hidden="true" /> {b}
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all"
            >
              {cta.label} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

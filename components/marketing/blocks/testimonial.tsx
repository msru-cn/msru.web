import { Quote } from "lucide-react";
import Image from "next/image";

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

/**
 * 客户证言 —— glass-stage 背景 + 中央玻璃引言面板。明暗双主题自适应。
 */
export function Testimonial({ quote, author, role, avatar }: TestimonialProps) {
  return (
    <section className="glass-stage py-28 md:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <figure className="glass glass-strong flex flex-col items-center gap-8 rounded-[2.5rem] px-8 py-14 text-center md:px-16">
          <Quote className="size-10 text-blue-500/70" aria-hidden="true" />
          <blockquote className="text-2xl font-bold leading-snug tracking-tight text-zinc-900 md:text-3xl dark:text-white">
            “{quote}”
          </blockquote>
          <figcaption className="flex items-center justify-center gap-4">
            {avatar && <Image src={avatar} alt={author} width={48} height={48} className="rounded-full object-cover" />}
            <div className="text-left">
              <div className="font-bold text-zinc-900 dark:text-white">{author}</div>
              {role && <div className="text-sm text-zinc-500 dark:text-zinc-400">{role}</div>}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

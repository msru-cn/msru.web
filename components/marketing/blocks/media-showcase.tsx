import Image from "next/image";

export interface MediaShowcaseProps {
  media: string;
  title?: string;
  caption?: string;
}

/**
 * 媒体展示 —— glass-stage 背景中一块玻璃相框裹主视觉。明暗双主题自适应。
 */
export function MediaShowcase({ media, title, caption }: MediaShowcaseProps) {
  return (
    <section className="glass-stage py-24 md:py-28">
      <div className="container mx-auto max-w-6xl space-y-8 px-6 text-center">
        {title && (
          <h2 className="text-balance text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-white">
            {title}
          </h2>
        )}
        <div className="glass glass-hover overflow-hidden rounded-[2.5rem] p-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-[2rem]">
            <Image src={media} alt={title ?? caption ?? "media"} fill className="object-cover" />
          </div>
        </div>
        {caption && <p className="text-zinc-500 dark:text-zinc-400">{caption}</p>}
      </div>
    </section>
  );
}

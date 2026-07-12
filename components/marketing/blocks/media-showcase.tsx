import Image from "next/image";

export interface MediaShowcaseProps {
  media: string;
  title?: string;
  caption?: string;
}

export function MediaShowcase({ media, title, caption }: MediaShowcaseProps) {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-6xl text-center space-y-8">
        {title && <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">{title}</h2>}
        <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden">
          <Image src={media} alt={title ?? caption ?? "media"} fill className="object-cover" />
        </div>
        {caption && <p className="text-zinc-500">{caption}</p>}
      </div>
    </section>
  );
}

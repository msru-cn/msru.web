import Image from "next/image";
import { resolveIcon } from "@/lib/marketing/icon-registry";

export interface LogoItem {
  name: string;
  src?: string;
  icon?: string;
}
export interface LogoWallProps {
  eyebrow?: string;
  items: LogoItem[];
}

export function LogoWall({ eyebrow, items }: LogoWallProps) {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-10">
          {eyebrow ?? "深耕高端制造，服务关键行业"}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {items.map((it) => {
            const Icon = resolveIcon(it.icon);
            return it.src ? (
              <div
                key={it.name}
                className="flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-5 py-2.5 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0"
              >
                <Image src={it.src} alt={it.name} width={104} height={32} className="object-contain" />
              </div>
            ) : (
              <div
                key={it.name}
                className="group flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 transition hover:border-blue-500/40 hover:text-zinc-900 dark:hover:text-white hover:shadow-sm"
              >
                {Icon && (
                  <Icon
                    className="size-4 text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-500"
                    aria-hidden="true"
                  />
                )}
                <span className="tracking-tight">{it.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

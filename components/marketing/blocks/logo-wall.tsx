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

/**
 * 行业信任墙 —— 玻璃 pill 陈列在 glass-stage 之上，
 * 光斑/网格作可折射内容层，明暗双主题自适应。
 */
export function LogoWall({ eyebrow, items }: LogoWallProps) {
  return (
    <section className="glass-stage py-20 md:py-24">
      <div className="container mx-auto px-6">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          {eyebrow ?? "深耕高端制造，服务关键行业"}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {items.map((it) => {
            const Icon = resolveIcon(it.icon);
            return it.src ? (
              <div
                key={it.name}
                className="glass glass-hover flex items-center rounded-full px-5 py-2.5 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <Image src={it.src} alt={it.name} width={104} height={32} className="object-contain" />
              </div>
            ) : (
              <div
                key={it.name}
                className="group glass glass-hover flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200"
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

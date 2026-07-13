import Image from "next/image";
import { cn } from "@/lib/cn";
import { resolveIcon } from "@/lib/marketing/icon-registry";
import { type AccentColor, getAccent } from "../accent";

export interface SubHeroProps {
  badge?: { icon?: string; text: string };
  title: string;
  titleAccent?: string;
  subtitle?: string;
  accentColor?: AccentColor;
  bgImage?: string;
}

/**
 * 子页紧凑 hero(block 版) —— glass-stage 背景 + 玻璃徽章 + 标题/副标。
 * 与全站玻璃语言统一，图标走字符串名(resolveIcon)，可纯 JSON 表达。
 * 可选 bgImage：铺底照片 + 渐隐遮罩，与 HeroBlock 保持一致的视觉语言。
 * 明暗双主题自适应。
 */
export function SubHero({ badge, title, titleAccent, subtitle, accentColor = "blue", bgImage }: SubHeroProps) {
  const accent = getAccent(accentColor);
  const BadgeIcon = badge?.icon ? resolveIcon(badge.icon) : undefined;
  return (
    <section className="glass-stage relative overflow-hidden pt-36 pb-24 md:pt-40 md:pb-28">
      {bgImage && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image src={bgImage} alt="" fill className="object-cover opacity-25 dark:opacity-20" priority={false} />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white dark:to-zinc-950" />
        </div>
      )}
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {badge && (
          <div
            className={cn(
              "glass glass-hover mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide",
              accent.text,
            )}
          >
            {BadgeIcon && <BadgeIcon className="size-3.5" />}
            {badge.text}
          </div>
        )}
        <h1 className="text-balance text-5xl font-bold tracking-tighter text-zinc-900 md:text-7xl dark:text-white">
          {title}
          {titleAccent && <span className={cn("italic", accent.text)}> {titleAccent}</span>}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-balance text-xl leading-relaxed text-zinc-500 dark:text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

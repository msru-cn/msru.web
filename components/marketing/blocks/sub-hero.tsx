import { cn } from "@/lib/cn";
import { resolveIcon } from "@/lib/marketing/icon-registry";
import { type AccentColor, getAccent } from "../accent";
import { HeroBackground } from "./hero-background";

export interface SubHeroProps {
  badge?: { icon?: string; text: string };
  title: string;
  titleAccent?: string;
  subtitle?: string;
  accentColor?: AccentColor;
  bgImage?: string;
  bgVideo?: string;
  isFirst?: boolean;
}

/**
 * 子页紧凑 hero(block 版) —— glass-stage 背景 + 玻璃徽章 + 标题/副标。
 * 与全站玻璃语言统一，图标走字符串名(resolveIcon)，可纯 JSON 表达。
 * 可选 bgImage：铺底照片 + 渐隐遮罩，与 HeroBlock 保持一致的视觉语言。
 * 明暗双主题自适应。
 */
export function SubHero({
  badge,
  title,
  titleAccent,
  subtitle,
  accentColor = "blue",
  bgImage,
  bgVideo,
  isFirst = true,
}: SubHeroProps) {
  const accent = getAccent(accentColor);
  const BadgeIcon = badge?.icon ? resolveIcon(badge.icon) : undefined;
  return (
    <section
      className={cn(
        "glass-stage relative overflow-hidden pt-[22vh] pb-24 md:pt-[26vh] md:pb-32",
        isFirst && "flex min-h-[55vh] flex-col justify-center",
      )}
    >
      <HeroBackground bgImage={bgImage} bgVideo={bgVideo} />
      {/* 徽标：左上角，与导航栏 logo 对齐 */}
      {badge && (
        <div className="z-10 absolute top-20 md:top-24 inset-x-0 mx-auto w-full max-w-fd-container px-6">
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs md:text-sm font-medium backdrop-blur-md border border-white/40 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 shadow-sm",
              accent.text,
            )}
          >
            {BadgeIcon && <BadgeIcon className="size-4" />}
            {badge.text}
          </div>
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="whitespace-pre-wrap text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.12] text-zinc-900 dark:text-white">
          {title}
          {titleAccent && <span className={cn("italic", accent.text)}> {titleAccent}</span>}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 md:mt-8 max-w-3xl text-balance whitespace-pre-wrap text-base sm:text-lg md:text-2xl font-normal leading-relaxed text-zinc-600 dark:text-zinc-300">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

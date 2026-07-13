import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { resolveIcon } from "@/lib/marketing/icon-registry";
import { type AccentColor, getAccent } from "../accent";

export interface TopHeroChannel {
  icon: string;
  label: string;
  href: string;
}
export interface TopHeroCta {
  label: string;
  href: string;
}
export interface TopHeroProps {
  badge?: { icon: string; text: string };
  title: string;
  subtitle?: string;
  accentColor?: AccentColor;
  channels?: TopHeroChannel[];
  video?: { src: string; poster?: string };
  intro?: {
    heading?: string;
    paragraphs?: string[];
    ctas?: TopHeroCta[];
  };
}

/**
 * 顶部 hero —— 参考 liquid-glass.ybouane.com：
 * 顶端玻璃 slogan → 双联系渠道(github / x) → 下方左视频 / 右长文。
 * 走 CSS .glass 体系，明暗双主题自适应；glass-stage 提供可折射的内容层。
 */
export function TopHero({ badge, title, subtitle, accentColor = "blue", channels = [], video, intro }: TopHeroProps) {
  const accent = getAccent(accentColor);
  const BadgeIcon = badge ? resolveIcon(badge.icon) : undefined;

  return (
    <section className="glass-stage relative overflow-hidden px-6 py-24 md:py-32">
      {/* 顶部：slogan + 双联系渠道，居中 */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {badge && (
          <div
            className={cn(
              "glass glass-hover mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide",
              accent.text,
            )}
          >
            {BadgeIcon && <BadgeIcon className="size-3.5" />}
            {badge.text}
          </div>
        )}

        <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tighter text-zinc-900 md:text-7xl lg:text-8xl dark:text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-zinc-500 md:text-xl dark:text-zinc-400">
            {subtitle}
          </p>
        )}

        {channels.length > 0 && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {channels.map((ch) => {
              const ChIcon = resolveIcon(ch.icon);
              return (
                <Link
                  key={ch.href}
                  href={ch.href}
                  className="glass glass-hover inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-zinc-800 dark:text-zinc-100"
                >
                  {ChIcon && <ChIcon className="size-4" />}
                  {ch.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* 下方：左视频 / 右长文 */}
      {(video || intro) && (
        <div className="relative mx-auto mt-16 grid max-w-[1200px] items-center gap-8 md:mt-20 lg:grid-cols-2 lg:gap-12">
          {video && (
            <div className="glass glass-hover overflow-hidden rounded-3xl p-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900/40">
                <video
                  className="size-full object-cover"
                  src={video.src}
                  poster={video.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <track kind="captions" />
                </video>
              </div>
            </div>
          )}

          {intro && (
            <div className="flex flex-col gap-5">
              {intro.heading && (
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-white">
                  {intro.heading}
                </h2>
              )}
              {intro.paragraphs?.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400"
                >
                  {p}
                </p>
              ))}
              {intro.ctas && intro.ctas.length > 0 && (
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                  {intro.ctas.map((c, i) =>
                    i === 0 ? (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={cn(
                          "group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-linear-to-r px-8 text-base font-medium text-white shadow-lg transition-all duration-[var(--dur-base)] ease-[var(--ease-glass)] hover:scale-[1.03]",
                          accent.gradientFrom,
                          "to-cyan-500 shadow-blue-500/25",
                        )}
                      >
                        {c.label}
                        <ArrowRight className="size-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="glass glass-hover inline-flex h-13 items-center justify-center rounded-full px-8 text-base font-medium text-zinc-800 dark:text-zinc-100"
                      >
                        {c.label}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { resolveIcon } from "@/lib/marketing/icon-registry";
import { type AccentColor, getAccent } from "../accent";
import { HeroBackground } from "./hero-background";

export interface TopHeroChannel {
  icon: string;
  label: string;
  href: string;
}
export interface TopHeroCta {
  label: string;
  href: string;
}
export interface TopHeroVideo {
  src: string;
  poster?: string;
}
export interface TopHeroProps {
  badge?: { icon: string; text: string };
  title: string;
  subtitle?: string;
  accentColor?: AccentColor;
  bgImage?: string;
  bgVideo?: string;
  isFirst?: boolean;
  channels?: TopHeroChannel[];
  video?: TopHeroVideo | TopHeroVideo[];
  videos?: TopHeroVideo[];
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
export function TopHero({
  badge,
  title,
  subtitle,
  accentColor = "blue",
  bgImage,
  bgVideo,
  isFirst = true,
  channels = [],
  video,
  videos,
  intro,
}: TopHeroProps) {
  const accent = getAccent(accentColor);
  const BadgeIcon = badge ? resolveIcon(badge.icon) : undefined;

  const videoList = useMemo(() => {
    if (videos && videos.length > 0) return videos;
    if (Array.isArray(video)) return video;
    if (video) return [video];
    return [];
  }, [videos, video]);

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const activeVideo = videoList[activeVideoIndex] || videoList[0];

  return (
    <section
      className={cn(
        "glass-stage relative overflow-hidden px-6 pt-[22vh] pb-24 md:pt-[26vh] md:pb-32",
        isFirst && "flex min-h-[88vh] flex-col lg:min-h-screen",
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
      {/* 顶部：slogan + 双联系渠道，居中 */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="whitespace-pre-wrap md:whitespace-nowrap text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.12] tracking-tight text-zinc-900 dark:text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 md:mt-8 max-w-3xl text-balance whitespace-pre-wrap text-base sm:text-lg md:text-2xl font-normal leading-relaxed text-zinc-600 dark:text-zinc-300">
            {subtitle}
          </p>
        )}

        {channels.length > 0 && (
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3.5">
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
      {(activeVideo || intro) && (
        <div className="relative z-10 mx-auto mt-16 grid max-w-[1200px] items-center gap-8 md:mt-20 lg:grid-cols-2 lg:gap-12">
          {activeVideo && (
            <div className="glass glass-hover flex flex-col overflow-hidden rounded-3xl p-1.5">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900/40">
                <video
                  key={activeVideo.src}
                  className="size-full object-cover"
                  src={activeVideo.src}
                  poster={activeVideo.poster}
                  autoPlay
                  muted
                  loop={videoList.length <= 1}
                  onEnded={() => {
                    if (videoList.length > 1) {
                      setActiveVideoIndex((prev) => (prev + 1) % videoList.length);
                    }
                  }}
                  playsInline
                  controls
                >
                  <track kind="captions" />
                </video>
              </div>

              {videoList.length > 1 && (
                <div className="flex items-center justify-center gap-2 pt-1.5 pb-0.5">
                  {videoList.map((v, idx) => (
                    <button
                      key={v.src}
                      type="button"
                      onClick={() => setActiveVideoIndex(idx)}
                      aria-label={`切换至视频 ${idx + 1}`}
                      className={cn(
                        "h-2 rounded-full transition-all duration-[var(--dur-base)] ease-[var(--ease-glass)]",
                        idx === activeVideoIndex
                          ? "w-6 bg-zinc-800/80 shadow-xs dark:bg-white/90"
                          : "w-2 bg-zinc-400/40 hover:bg-zinc-500/60 dark:bg-white/25 dark:hover:bg-white/45",
                      )}
                    />
                  ))}
                </div>
              )}
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

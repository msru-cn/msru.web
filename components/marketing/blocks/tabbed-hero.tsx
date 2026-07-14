"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { resolveIcon } from "@/lib/marketing/icon-registry";
import { type AccentColor, getAccent } from "../accent";

export interface TabbedHeroCta {
  label: string;
  href: string;
}
export interface TabbedHeroTab {
  /** tab 按钮上的短标签 */
  label: string;
  /** tab 按钮图标名（icon-registry） */
  icon?: string;
  /** 该 tab 的背景图（任意 URL，用户可替换） */
  bgImage?: string;
  /** 该 tab 的强调色，切换时随内容一起换 */
  accentColor?: AccentColor;
  /** 内容区 —— 每个 tab 完全独立可配 */
  eyebrow?: string;
  title: string;
  description?: string;
  bullets?: string[];
  ctas?: TabbedHeroCta[];
}
export interface TabbedHeroProps {
  heading?: string;
  subtitle?: string;
  tabs: TabbedHeroTab[];
  /** 默认激活的 tab 下标 */
  defaultIndex?: number;
}

/**
 * 可 tab 的 hero —— 参考 liquid-glass.ybouane.com 底部 tab 切换器。
 * 区别：参考站 tab 只换背景；这里 tab 同时换「背景 + 内容」，每个 tab 内容可配置化。
 * client 组件，useState 管理激活 tab；玻璃 tab 条 + 滑动指示 pill 走 CSS .glass 体系。
 */
export function TabbedHero({ heading, subtitle, tabs, defaultIndex = 0 }: TabbedHeroProps) {
  const safeTabs = tabs.length > 0 ? tabs : [];
  const initial = Math.min(Math.max(defaultIndex, 0), Math.max(safeTabs.length - 1, 0));
  const [active, setActive] = useState(initial);
  const groupId = useId();

  if (safeTabs.length === 0) return null;

  const current = safeTabs[active];
  const accent = getAccent(current.accentColor ?? "blue");

  return (
    <section className="glass-stage relative overflow-hidden px-6 py-24 md:py-28">
      {(heading || subtitle) && (
        <div className="relative mx-auto mb-12 max-w-3xl text-center">
          {heading && (
            <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-white">
              {heading}
            </h2>
          )}
          {subtitle && <p className="mt-4 text-balance text-lg text-zinc-500 dark:text-zinc-400">{subtitle}</p>}
        </div>
      )}

      {/* 玻璃舞台：背景随 tab 切换 + 内容面板叠上 */}
      <div className="relative mx-auto max-w-[1200px]">
        <div className="glass glass-hover relative overflow-hidden rounded-[2rem] p-2">
          <div className="relative min-h-[440px] overflow-hidden rounded-[1.6rem]">
            {/* 背景层：每个 tab 一张，交叉淡入淡出 */}
            <div aria-hidden="true" className="absolute inset-0">
              {safeTabs.map((t, i) => (
                <div
                  key={`${t.label}-bg`}
                  className={cn(
                    "absolute inset-0 bg-cover bg-center transition-opacity duration-[var(--dur-slow)] ease-[var(--ease-smooth)]",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                  style={t.bgImage ? { backgroundImage: `url("${t.bgImage}")` } : undefined}
                />
              ))}
              {/* 压暗渐层，保证内容可读 */}
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/85 via-zinc-950/45 to-zinc-950/20" />
            </div>

            {/* 内容层：随 active tab 换 */}
            <div className="relative flex min-h-[440px] flex-col justify-end gap-5 p-8 md:max-w-2xl md:p-12">
              {current.eyebrow && (
                <span
                  className={cn(
                    "glass inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
                    accent.text,
                  )}
                >
                  {current.eyebrow}
                </span>
              )}
              <h3 className="whitespace-pre-wrap text-balance text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                {current.title}
              </h3>
              {current.description && (
                <p className="max-w-xl text-base leading-relaxed text-zinc-200 md:text-lg">{current.description}</p>
              )}
              {current.bullets && current.bullets.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-zinc-100 md:text-base">
                      <Check className={cn("mt-0.5 size-4 shrink-0", accent.text)} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {current.ctas && current.ctas.length > 0 && (
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                  {current.ctas.map((c, i) =>
                    i === 0 ? (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={cn(
                          "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r px-7 text-sm font-medium text-white shadow-lg transition-all duration-[var(--dur-base)] ease-[var(--ease-glass)] hover:scale-[1.03]",
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
                        className="glass glass-hover inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-medium text-white"
                      >
                        {c.label}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* tab 切换条 —— 玻璃 pill，居中叠在舞台底部 */}
        <div className="relative z-10 -mt-7 flex justify-center px-4">
          <div
            role="tablist"
            aria-label="hero tabs"
            className="glass-strong flex flex-wrap items-center justify-center gap-1 rounded-full p-1.5"
          >
            {safeTabs.map((t, i) => {
              const TabIcon = resolveIcon(t.icon);
              const isActive = i === active;
              const tabAccent = getAccent(t.accentColor ?? "blue");
              return (
                <button
                  type="button"
                  key={t.label}
                  role="tab"
                  id={`${groupId}-tab-${i}`}
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-[var(--dur-base)] ease-[var(--ease-glass)]",
                    isActive
                      ? cn("bg-linear-to-r text-white shadow-md", tabAccent.gradientFrom, "to-cyan-500")
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
                  )}
                >
                  {TabIcon && <TabIcon className="size-4" />}
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

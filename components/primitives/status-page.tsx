"use client";

import { ArrowLeft, Construction, Home, Lock, RefreshCw, SearchX, ServerCrash } from "lucide-react";
import type React from "react";

// ─── 类型定义 ─────────────────────────────────────────────

/**
 * 预设状态类型
 * - not-found: 404 页面不存在
 * - forbidden: 403 无权限访问
 * - server-error: 500 服务器内部错误
 * - service-unavailable: 503 服务维护中
 * - coming-soon: 功能开发中
 */
type StatusPreset = "not-found" | "forbidden" | "server-error" | "service-unavailable" | "coming-soon";

/** StatusPage 组件属性 */
export interface StatusPageProps {
  /** 预设状态类型，决定默认图标/标题/描述 */
  preset: StatusPreset;
  /** 自定义标题（覆盖预设） */
  title?: string;
  /** 自定义描述文本（覆盖预设） */
  description?: string;
  /** 自定义副标题/提示（覆盖预设） */
  hint?: string;
  /** 自定义图标组件（覆盖预设） */
  icon?: React.ComponentType<{ className?: string }>;
  /** error.tsx 的 reset 回调 */
  onRetry?: () => void;
  /** 是否显示返回首页按钮（默认 true） */
  showHomeButton?: boolean;
  /** 是否显示返回上一页按钮（默认 true） */
  showBackButton?: boolean;
}

// ─── 预设配置 ─────────────────────────────────────────────

interface PresetConfig {
  icon: React.ComponentType<{ className?: string }>;
  code: string;
  title: string;
  description: string;
  hint: string;
  accentColor: string; // Tailwind color class prefix
  glowColor: string; // CSS glow color
}

const PRESETS: Record<StatusPreset, PresetConfig> = {
  "not-found": {
    icon: SearchX,
    code: "404",
    title: "页面未找到",
    description: "您访问的页面不存在或已被移除。",
    hint: "请检查 URL 是否正确，或返回首页继续浏览。",
    accentColor: "blue",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  forbidden: {
    icon: Lock,
    code: "403",
    title: "暂无访问权限",
    description: "您没有权限访问当前页面或功能模块。",
    hint: "可能原因：该模块未开通、权限不足，或已被管理员停用。请联系管理员开通。",
    accentColor: "red",
    glowColor: "rgba(239, 68, 68, 0.15)",
  },
  "server-error": {
    icon: ServerCrash,
    code: "500",
    title: "服务器开小差了",
    description: "服务端在处理请求时遇到了意外问题。",
    hint: "我们的技术团队已收到通知，正在全力排查中。请稍后重试。",
    accentColor: "yellow",
    glowColor: "rgba(234, 179, 8, 0.15)",
  },
  "service-unavailable": {
    icon: ServerCrash,
    code: "503",
    title: "服务维护中",
    description: "对应的业务服务节点当前不可用。",
    hint: "可能正在进行系统升级或例行维护，请稍候片刻后重试。",
    accentColor: "orange",
    glowColor: "rgba(249, 115, 22, 0.15)",
  },
  "coming-soon": {
    icon: Construction,
    code: "🚧",
    title: "功能开发中",
    description: "该页面正在紧锣密鼓地开发中，敬请期待。",
    hint: "我们正在努力为您打造更好的体验，请持续关注平台更新。",
    accentColor: "purple",
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
};

// ─── 颜色映射 ─────────────────────────────────────────────

/** 根据预设颜色名获取 icon 颜色 class */
function getIconColorClass(color: string): string {
  const map: Record<string, string> = {
    blue: "text-blue-400",
    red: "text-red-400",
    yellow: "text-yellow-400",
    orange: "text-orange-400",
    purple: "text-purple-400",
  };
  return map[color] || "text-blue-400";
}

/** 根据预设颜色名获取 badge 背景 class */
function getBadgeBgClass(color: string): string {
  const map: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
    red: "bg-red-500/10 text-red-400 ring-red-500/20",
    yellow: "bg-yellow-500/10 text-yellow-400 ring-yellow-500/20",
    orange: "bg-orange-500/10 text-orange-400 ring-orange-500/20",
    purple: "bg-purple-500/10 text-purple-400 ring-purple-500/20",
  };
  return map[color] || "bg-blue-500/10 text-blue-400 ring-blue-500/20";
}

// ─── 主组件 ─────────────────────────────────────────────

/**
 * 平台统一状态页
 *
 * 设计理念：
 * - 统一的视觉语言，与 PlatformShell 暗色主题一致
 * - 每种状态有独特的颜色标识（蓝/红/黄/橙/紫）
 * - 微动画增加生动感（图标脉冲 + 光效扩散）
 * - 清晰的行动引导（返回/重试/联系管理员）
 *
 * @example
 * ```tsx
 * // 404 页面
 * <StatusPage preset="not-found" />
 *
 * // 500 + 重试
 * <StatusPage preset="server-error" onRetry={() => reset()} />
 *
 * // 自定义
 * <StatusPage preset="coming-soon" title="排程引擎升级中" />
 * ```
 */
export function StatusPage({
  preset,
  title,
  description,
  hint,
  icon,
  onRetry,
  showHomeButton = true,
  showBackButton = true,
}: StatusPageProps) {
  const config = PRESETS[preset];
  const IconComponent = icon || config.icon;
  const displayTitle = title || config.title;
  const displayDescription = description || config.description;
  const displayHint = hint || config.hint;
  const iconColor = getIconColorClass(config.accentColor);
  const badgeClass = getBadgeBgClass(config.accentColor);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] bg-background text-foreground relative overflow-hidden font-sans px-6">
      {/* 背景光效 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-60"
        style={{ background: `radial-gradient(circle, ${config.glowColor} 0%, transparent 70%)` }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        {/* 状态码 Badge */}
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ring-1 ring-inset mb-6 ${badgeClass}`}
        >
          {config.code}
        </div>

        {/* 图标 */}
        <div className="relative mb-6">
          <div
            className="absolute inset-0 rounded-full blur-2xl animate-pulse opacity-40"
            style={{ backgroundColor: config.glowColor }}
          />
          <div className="relative w-20 h-20 rounded-2xl bg-zinc-900/80 border border-white/5 flex items-center justify-center">
            <IconComponent className={`w-10 h-10 ${iconColor}`} />
          </div>
        </div>

        {/* 标题 */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{displayTitle}</h1>

        {/* 描述 */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2">{displayDescription}</p>

        {/* 提示 */}
        <p className="text-xs text-muted-foreground/70 leading-relaxed mb-8">{displayHint}</p>

        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {showBackButton && (
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.history.back();
                }
              }}
              className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-5 py-2.5 bg-zinc-900/80 hover:bg-zinc-800 text-foreground rounded-lg transition-all border border-white/10 text-sm font-medium hover:border-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              返回上一页
            </button>
          )}

          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-5 py-2.5 bg-zinc-900/80 hover:bg-zinc-800 text-foreground rounded-lg transition-all border border-white/10 text-sm font-medium group hover:border-white/20"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              重新尝试
            </button>
          )}

          {showHomeButton && (
            <a
              href="/"
              className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-5 py-2.5 bg-blue-600/90 hover:bg-blue-700 text-white rounded-lg transition-all text-sm font-medium shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20"
            >
              <Home className="w-4 h-4" />
              返回首页
            </a>
          )}
        </div>

        {/* 底部品牌 */}
        <p className="text-[11px] text-muted-foreground/40 mt-12">MSRU Platform · 智能制造数字基座</p>
      </div>
    </div>
  );
}

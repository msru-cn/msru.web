import { Activity, Cpu, Database, Layers, Server, ShieldCheck, Workflow, Zap } from "lucide-react";
import type React from "react";

export type ThemeColor = "blue" | "emerald" | "indigo" | "teal" | "amber" | "rose" | "cyan" | "purple";

interface HeroMockupProps {
  theme?: ThemeColor;
  className?: string;
}

const themeConfig: Record<
  ThemeColor,
  {
    bg: string;
    border: string;
    text: string;
    glow: string;
    gradient: string;
    chartLine: string;
    chartFill: string;
    icon: React.ReactNode;
  }
> = {
  blue: {
    bg: "bg-blue-500/10 dark:bg-blue-500/20",
    border: "border-blue-500/20 dark:border-blue-500/30",
    text: "text-blue-600 dark:text-blue-400",
    glow: "shadow-blue-500/20",
    gradient: "from-blue-500/20 to-transparent",
    chartLine: "border-blue-500",
    chartFill: "bg-blue-500/20",
    icon: <Cpu className="size-5 text-blue-500" />,
  },
  emerald: {
    bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    border: "border-emerald-500/20 dark:border-emerald-500/30",
    text: "text-emerald-600 dark:text-emerald-400",
    glow: "shadow-emerald-500/20",
    gradient: "from-emerald-500/20 to-transparent",
    chartLine: "border-emerald-500",
    chartFill: "bg-emerald-500/20",
    icon: <Layers className="size-5 text-emerald-500" />,
  },
  indigo: {
    bg: "bg-indigo-500/10 dark:bg-indigo-500/20",
    border: "border-indigo-500/20 dark:border-indigo-500/30",
    text: "text-indigo-600 dark:text-indigo-400",
    glow: "shadow-indigo-500/20",
    gradient: "from-indigo-500/20 to-transparent",
    chartLine: "border-indigo-500",
    chartFill: "bg-indigo-500/20",
    icon: <Server className="size-5 text-indigo-500" />,
  },
  teal: {
    bg: "bg-teal-500/10 dark:bg-teal-500/20",
    border: "border-teal-500/20 dark:border-teal-500/30",
    text: "text-teal-600 dark:text-teal-400",
    glow: "shadow-teal-500/20",
    gradient: "from-teal-500/20 to-transparent",
    chartLine: "border-teal-500",
    chartFill: "bg-teal-500/20",
    icon: <Database className="size-5 text-teal-500" />,
  },
  amber: {
    bg: "bg-amber-500/10 dark:bg-amber-500/20",
    border: "border-amber-500/20 dark:border-amber-500/30",
    text: "text-amber-600 dark:text-amber-400",
    glow: "shadow-amber-500/20",
    gradient: "from-amber-500/20 to-transparent",
    chartLine: "border-amber-500",
    chartFill: "bg-amber-500/20",
    icon: <ShieldCheck className="size-5 text-amber-500" />,
  },
  rose: {
    bg: "bg-rose-500/10 dark:bg-rose-500/20",
    border: "border-rose-500/20 dark:border-rose-500/30",
    text: "text-rose-600 dark:text-rose-400",
    glow: "shadow-rose-500/20",
    gradient: "from-rose-500/20 to-transparent",
    chartLine: "border-rose-500",
    chartFill: "bg-rose-500/20",
    icon: <Activity className="size-5 text-rose-500" />,
  },
  cyan: {
    bg: "bg-cyan-500/10 dark:bg-cyan-500/20",
    border: "border-cyan-500/20 dark:border-cyan-500/30",
    text: "text-cyan-600 dark:text-cyan-400",
    glow: "shadow-cyan-500/20",
    gradient: "from-cyan-500/20 to-transparent",
    chartLine: "border-cyan-500",
    chartFill: "bg-cyan-500/20",
    icon: <Workflow className="size-5 text-cyan-500" />,
  },
  purple: {
    bg: "bg-purple-500/10 dark:bg-purple-500/20",
    border: "border-purple-500/20 dark:border-purple-500/30",
    text: "text-purple-600 dark:text-purple-400",
    glow: "shadow-purple-500/20",
    gradient: "from-purple-500/20 to-transparent",
    chartLine: "border-purple-500",
    chartFill: "bg-purple-500/20",
    icon: <Zap className="size-5 text-purple-500" />,
  },
};

export function HeroMockup({ theme = "blue", className = "" }: HeroMockupProps) {
  const currentTheme = themeConfig[theme];

  return (
    <div className={`z-10 relative mt-24 w-full max-w-6xl mx-auto perspective-1000 ${className}`}>
      {/* 
        MacOS Style Window Frame 
        - High contrast dark themed outer shell
        - Apple inspired top bar with traffic light buttons
        - Subtle gradient reflection on bottom
      */}
      <div
        className={`relative aspect-21/9 rounded-2xl md:rounded-[2rem] bg-zinc-900 border border-zinc-700/50 shadow-2xl ${currentTheme.glow} overflow-hidden group flex flex-col`}
      >
        {/* Top Window Bar */}
        <div className="h-10 shrink-0 bg-linear-to-b from-zinc-800 to-zinc-900 border-b border-zinc-800/80 flex items-center px-4 shadow-sm w-full z-20">
          <div className="flex gap-2">
            <div className="size-3 rounded-full bg-red-400/90 shadow-inner" />
            <div className="size-3 rounded-full bg-amber-400/90 shadow-inner" />
            <div className="size-3 rounded-full bg-emerald-400/90 shadow-inner" />
          </div>
          {/* Address Bar Mock */}
          <div className="ml-6 h-5 w-64 bg-zinc-950/50 rounded-md border border-zinc-800/80 shadow-inner flex items-center px-3 gap-2">
            {currentTheme.icon}
            <div className="h-1.5 w-1/3 bg-zinc-700 rounded-full" />
          </div>
        </div>

        {/* Bento Grid Content Area */}
        <div className="flex-1 p-4 md:p-6 grid grid-cols-12 grid-rows-12 gap-4 h-full relative z-10">
          {/* Top Left Quadrant - Two Small Blocks */}
          <div
            className={`col-span-12 md:col-span-4 row-span-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/50 shadow-inner flex flex-col p-4 relative overflow-hidden group/card`}
          >
            <div className="flex justify-between items-center mb-4 z-10">
              <div className="h-2 w-16 bg-zinc-700 rounded-full" />
              <div className={`size-2 rounded-full ${currentTheme.bg} animate-pulse`} />
            </div>
            <div className="flex items-end gap-2 h-full z-10">
              <div
                className={`w-1/4 rounded-t-sm ${currentTheme.chartFill} h-[30%] group-hover/card:h-[60%] transition-all duration-700`}
              />
              <div
                className={`w-1/4 rounded-t-sm ${currentTheme.chartFill} h-[70%] group-hover/card:h-[40%] transition-all duration-700 delay-75`}
              />
              <div
                className={`w-1/4 rounded-t-sm ${currentTheme.chartFill} h-[50%] group-hover/card:h-[90%] transition-all duration-700 delay-150`}
              />
              <div
                className={`w-1/4 rounded-t-sm border-t-2 ${currentTheme.border} ${currentTheme.bg} h-[85%] group-hover/card:h-[50%] transition-all duration-700 delay-300`}
              />
            </div>
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-bl ${currentTheme.gradient} opacity-20 pointer-events-none`}
            />
          </div>

          <div
            className={`col-span-12 md:col-span-3 row-span-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/50 shadow-inner flex flex-col justify-center items-center p-4 relative overflow-hidden group/stat`}
          >
            {/* Circular Progress Mock */}
            <div className="relative size-20 md:size-24 flex items-center justify-center z-10">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative svg */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-zinc-800"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className={`${currentTheme.text} origin-center animate-[spin_4s_linear_infinite] group-hover/stat:animate-none group-hover/stat:[stroke-dasharray:100,100] transition-all duration-1000`}
                  strokeDasharray="75, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
              <div className="absolute font-mono text-lg font-bold text-white">75%</div>
            </div>
          </div>

          {/* Right Quadrant - Large Accent Block */}
          {/* This matches the dark large square in the reference bento grid */}
          <div
            className={`col-span-12 md:col-span-5 row-span-8 rounded-2xl bg-linear-to-br from-zinc-950 to-zinc-950 ${currentTheme.border} border shadow-inner overflow-hidden relative group/map`}
          >
            <div
              className={`absolute inset-0 bg-linear-to-b ${currentTheme.gradient} opacity-50 pointer-events-none group-hover/map:opacity-80 transition-opacity duration-1000`}
            />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="p-6 relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                {currentTheme.icon}
                <div className="h-3 w-32 bg-zinc-800 rounded-md" />
              </div>

              {/* Abstract Topology/Network Map */}
              <div className="flex-1 relative flex items-center justify-center">
                <div
                  className={`absolute w-40 h-40 border ${currentTheme.border} rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20`}
                />
                <div
                  className={`absolute w-32 h-32 border ${currentTheme.border} rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40 delay-700`}
                />
                <div
                  className={`absolute w-24 h-24 border ${currentTheme.border} rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-60 delay-1000`}
                />

                <div
                  className={`relative z-10 p-4 rounded-xl ${currentTheme.bg} border ${currentTheme.border} backdrop-blur-md`}
                >
                  <Database className={`size-8 ${currentTheme.text}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Left Quadrant - Wide Block */}
          <div
            className={`col-span-12 md:col-span-7 row-span-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/50 shadow-inner p-4 relative overflow-hidden flex flex-col group/log`}
          >
            <div
              className={`absolute top-0 right-0 w-64 h-full bg-linear-to-l ${currentTheme.gradient} opacity-10 pointer-events-none`}
            />
            <div className="h-2 w-24 bg-zinc-700 rounded-full mb-4" />

            {/* Mock Log lines output */}
            <div className="flex-1 space-y-3 font-mono text-xs overflow-hidden opacity-80 group-hover/log:opacity-100 transition-opacity">
              <div className="flex items-center gap-3 text-zinc-500">
                <span className="text-zinc-600">14:02:11</span>
                <span className={`${currentTheme.text}`}>[SYS]</span>
                <span className="truncate">Synchronizing core modules across 12 nodes...</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500">
                <span className="text-zinc-600">14:02:12</span>
                <span className="text-emerald-500">[OK]</span>
                <span className="truncate">Data pipeline stream stabilized.</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <span className="text-zinc-600">14:02:15</span>
                <span className={`${currentTheme.text} animate-pulse`}>[APP]</span>
                <span className="truncate w-[60%] h-3 bg-zinc-700/50 rounded-sm inline-block" />
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <span className="text-zinc-600">14:02:16</span>
                <span className="text-amber-500">[WRN]</span>
                <span className="truncate w-[40%] h-3 bg-zinc-700/50 rounded-sm inline-block" />
              </div>
            </div>
          </div>

          {/* Bottom Quadrant - Full Width Block */}
          {/* Replacing the old bottom half layout to be a single pan-out footer block */}
          <div
            className={`col-span-12 row-span-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/50 shadow-inner relative overflow-hidden group/wave flex flex-col p-4 md:p-6`}
          >
            <div className="flex justify-between items-end h-full w-full relative z-10">
              <div>
                <div className="h-3 w-40 bg-zinc-700 rounded-full mb-3" />
                <div className="h-2 w-64 bg-zinc-800 rounded-full" />
              </div>

              {/* Activity Graph */}
              <div className="flex gap-1 h-3/4 items-end">
                {Array.from({ length: 24 }, (_, i) => i).map((id) => (
                  <div
                    key={`bar-${id}`}
                    className={`w-1.5 md:w-2 rounded-t-sm ${currentTheme.bg} border-t ${currentTheme.border} opacity-70 group-hover/wave:opacity-100 transition-all duration-500`}
                    style={{
                      height: `${20 + Math.sin(id * 0.5) * 40 + Math.random() * 20}%`,
                      transitionDelay: `${id * 30}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Absolute bottom ambient light */}
            <div className="absolute bottom-0 inset-x-0 h-10 bg-white/5 dark:bg-zinc-800/20 pointer-events-none" />
          </div>
        </div>

        {/* Global Lighting Glare */}
        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none z-30 opacity-50 mix-blend-overlay" />
      </div>
    </div>
  );
}

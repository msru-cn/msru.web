"use client";
import { useEffect } from "react";

/**
 * 预览页专用：持续把根 html 的 .dark 去掉，让整页基线为 light。
 * 因为 Tailwind 暗色是后代选择器 (.dark *)，且 next-themes 会反复把
 * .dark 写回根节点，所以用 MutationObserver 守住 light 基线——
 * 这样只有显式包了 .dark 的面板才走暗色，light 面板才真正是浅色。
 */
export function PreviewThemeReset() {
  useEffect(() => {
    const root = document.documentElement;
    const had = root.classList.contains("dark");
    const strip = () => {
      if (root.classList.contains("dark")) root.classList.remove("dark");
    };
    strip();
    const obs = new MutationObserver(strip);
    obs.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => {
      obs.disconnect();
      if (had) root.classList.add("dark");
    };
  }, []);
  return null;
}

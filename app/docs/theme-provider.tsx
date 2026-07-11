"use client"; // 👈 必须是客户端组件才能检测路径

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // 根据路径判断应该给页面加什么类名
  let themeClass = "";

  if (pathname.includes("/mes")) {
    themeClass = "mes";
  } else if (pathname.includes("/wms")) {
    themeClass = "wms";
  } else if (pathname.includes("/aps")) {
    themeClass = "aps";
  } else if (pathname.includes("/qms")) {
    themeClass = "qms";
  } else if (pathname.includes("/eam")) {
    themeClass = "eam";
  } else if (pathname.includes("/iot")) {
    themeClass = "iot";
  } else if (pathname.includes("/platform")) {
    themeClass = "platform";
  } else if (pathname.includes("/cms")) {
    themeClass = "cms";
  } else if (pathname.includes("/legal")) {
    themeClass = "legal";
  } else if (pathname.includes("/framework")) {
    themeClass = "framework";
  } else {
    themeClass = "msru";
  }

  // 还可以加 else if (pathname.includes("/(msru)")) ...

  return (
    // 把计算出来的类名加在最外层
    // 这样 DocsLayout 里的所有组件（包括侧边栏）都会继承这个类名下的 CSS 变量
    <div className={themeClass} style={{ display: "contents" }}>
      {children}
    </div>
  );
}

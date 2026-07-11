"use client";

import type React from "react";
import { useId } from "react";

/**
 * MSRU 品牌图标组件
 * 基于 msru.svg 三角形矩阵图案，使用 fd-primary / fd-background 渐变填充
 */
export function MsruDocsIcon(props: React.SVGProps<SVGSVGElement>) {
  const id = useId();
  const gradientId = `${id}-msruGradient`;

  return (
    <svg viewBox="102.62 141.19 594.76 517.62" {...props}>
      <title>MSRU Icon</title>
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="102.62" y1="141.19" x2="697.38" y2="658.81">
          <stop offset="25%" stopColor="var(--color-fd-background)" />
          <stop offset="75%" stopColor="var(--color-fd-primary)" />
        </linearGradient>
      </defs>
      <g stroke="var(--color-fd-primary)" strokeWidth={1.5} strokeLinejoin="round">
        <path d="M400.29 141.19L460.34 246.75L340.4 247.1L400.29 141.19Z" fill={`url(#${gradientId})`} />
        <path d="M470.87 266.55L531.6 370.11L410.51 371.92L470.87 266.55Z" fill={`url(#${gradientId})`} />
        <path d="M329.44 264.99L390.19 370.62L268.17 371.58L329.44 264.99Z" fill={`url(#${gradientId})`} />
        <path d="M566.59 430.12L627.64 535.69L504.57 533.85L566.59 430.12Z" fill={`url(#${gradientId})`} />
        <path d="M638.06 552.31L697.38 657.92L576.57 658.8L638.06 552.31Z" fill={`url(#${gradientId})`} />
        <path d="M495.22 553.36L555.03 657.33L434.5 657.85L495.22 553.36Z" fill={`url(#${gradientId})`} />
        <path d="M234.26 429.93L295.18 535.09L174.58 535.73L234.26 429.93Z" fill={`url(#${gradientId})`} />
        <path d="M305.38 553.93L366.09 658.81L245.42 658.15L305.38 553.93Z" fill={`url(#${gradientId})`} />
        <path d="M162.61 552.33L223.66 657.88L102.62 658.29L162.61 552.33Z" fill={`url(#${gradientId})`} />
      </g>
    </svg>
  );
}

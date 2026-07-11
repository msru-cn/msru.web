"use client";

import mermaid from "mermaid";
import { useEffect, useRef, useState } from "react";

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "loose",
  fontFamily: "var(--font-sans)",
});

export function Mermaid({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    async function renderChart() {
      if (!containerRef.current) return;
      try {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        if (isMounted) {
          setSvg(svg);
        }
      } catch (e) {
        console.error("Mermaid parsing failed", e);
      }
    }

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className="mermaid w-full flex justify-center my-8 overflow-x-auto p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: injecting user-defined SVG diagrams
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

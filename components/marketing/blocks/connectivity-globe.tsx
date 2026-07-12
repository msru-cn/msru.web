"use client";
import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";

export interface GlobeMarker {
  lat: number;
  lng: number;
  label?: string;
}
export interface ConnectivityGlobeProps {
  markers?: GlobeMarker[];
  autoRotate?: boolean;
  heading?: string;
  subtitle?: string;
}

function useIsDark(): boolean {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    const read = () => setIsDark(root.classList.contains("dark"));
    read();
    const obs = new MutationObserver(read);
    obs.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return isDark;
}

export function ConnectivityGlobe({ markers = [], autoRotate = true, heading, subtitle }: ConnectivityGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDark = useIsDark();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let phi = 0;
    let frame = 0;
    let globe: { update: (state: { phi: number }) => void; destroy: () => void } | undefined;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: 600,
        height: 600,
        phi: 0,
        theta: 0.3,
        dark: isDark ? 1 : 0,
        diffuse: isDark ? 1.2 : 1.6,
        mapSamples: 16000,
        mapBrightness: isDark ? 6 : 8,
        baseColor: isDark ? [0.3, 0.3, 0.3] : [0.85, 0.87, 0.9],
        markerColor: [0.05, 0.5, 1],
        glowColor: isDark ? [0.06, 0.09, 0.16] : [0.9, 0.93, 0.98],
        markers: markers.map((m) => ({ location: [m.lat, m.lng] as [number, number], size: 0.05 })),
      });
      const g = globe;
      const tick = () => {
        if (autoRotate) phi += 0.005;
        g.update({ phi });
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    } catch {
      // WebGL unavailable (test/degraded env) -> silently skip
    }
    return () => {
      if (frame) cancelAnimationFrame(frame);
      globe?.destroy();
    };
  }, [markers, autoRotate, isDark]);

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center space-y-6">
        {heading && <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{heading}</h2>}
        {subtitle && <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="relative mx-auto mt-8 aspect-square w-full max-w-[600px]">
          <canvas ref={canvasRef} className="w-full h-full" style={{ contain: "layout paint size" }} />
        </div>
      </div>
    </section>
  );
}

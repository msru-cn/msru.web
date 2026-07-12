"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

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

export function ConnectivityGlobe({ markers = [], autoRotate = true, heading, subtitle }: ConnectivityGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
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
  }, [markers, autoRotate]);

  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center space-y-6">
        {heading && <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{heading}</h2>}
        {subtitle && <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="relative mx-auto mt-8 aspect-square w-full max-w-[600px]">
          <canvas ref={canvasRef} className="w-full h-full" style={{ contain: "layout paint size" }} />
        </div>
      </div>
    </section>
  );
}

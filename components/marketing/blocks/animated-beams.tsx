"use client";
import { motion } from "framer-motion";
import { resolveIcon } from "@/lib/marketing/icon-registry";

export interface BeamNode {
  icon: string;
  label: string;
}
export interface BeamEdge {
  from: number;
  to: number;
}
export interface AnimatedBeamsProps {
  nodes: BeamNode[];
  edges: BeamEdge[];
  heading?: string;
  subtitle?: string;
}

function nodePos(i: number, total: number): { x: number; y: number } {
  const pad = 60;
  const span = total > 1 ? (600 - pad * 2) / (total - 1) : 0;
  return { x: pad + span * i, y: 150 };
}

export function AnimatedBeams({ nodes, edges, heading, subtitle }: AnimatedBeamsProps) {
  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center space-y-6">
        {heading && <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{heading}</h2>}
        {subtitle && <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
        <svg viewBox="0 0 600 300" className="w-full max-w-3xl mx-auto mt-8" role="img" aria-label={heading ?? "architecture data flow"}>
          <title>{heading ?? "architecture data flow"}</title>
          {edges.map((e, i) => {
            const a = nodePos(e.from, nodes.length);
            const b = nodePos(e.to, nodes.length);
            return (
              <motion.line
                key={`e-${i}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="url(#beam)"
                strokeWidth={2}
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: i * 0.2 }}
              />
            );
          })}
          <defs>
            <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          {nodes.map((n, i) => {
            const p = nodePos(i, nodes.length);
            return <circle key={`n-${i}`} cx={p.x} cy={p.y} r={22} fill="#18181b" stroke="#3f3f46" strokeWidth={1.5} />;
          })}
        </svg>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {nodes.map((n) => {
            const Icon = resolveIcon(n.icon);
            return (
              <div key={n.label} className="flex items-center gap-2 text-sm text-zinc-300">
                {Icon && <Icon className="size-4 text-cyan-400" aria-hidden="true" />}
                {n.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

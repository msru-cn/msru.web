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

const VB_W = 640;
const NODE_Y = 96;
const NODE_R = 34;

function nodePos(i: number, total: number): { x: number; y: number } {
  const pad = 80;
  const span = total > 1 ? (VB_W - pad * 2) / (total - 1) : 0;
  return { x: pad + span * i, y: NODE_Y };
}

export function AnimatedBeams({ nodes, edges, heading, subtitle }: AnimatedBeamsProps) {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center space-y-6">
        {heading && <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{heading}</h2>}
        {subtitle && <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
        <svg
          viewBox="0 0 640 190"
          className="w-full max-w-3xl mx-auto mt-8"
          role="img"
          aria-label={heading ?? "architecture data flow"}
        >
          <title>{heading ?? "architecture data flow"}</title>
          <defs>
            <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* static rail under the animated beam so the path always reads as connected */}
          {edges.map((e) => {
            const a = nodePos(e.from, nodes.length);
            const b = nodePos(e.to, nodes.length);
            return (
              <line
                key={`rail-${e.from}-${e.to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                className="stroke-zinc-200 dark:stroke-zinc-800"
                strokeWidth={2}
              />
            );
          })}
          {edges.map((e, i) => {
            const a = nodePos(e.from, nodes.length);
            const b = nodePos(e.to, nodes.length);
            return (
              <motion.line
                key={`edge-${e.from}-${e.to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="url(#beam)"
                strokeWidth={2.5}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: i * 0.2 }}
              />
            );
          })}

          {nodes.map((n, i) => {
            const p = nodePos(i, nodes.length);
            const Icon = resolveIcon(n.icon);
            return (
              <g key={`node-${n.label}`}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={NODE_R}
                  className="fill-zinc-50 stroke-zinc-200 dark:fill-zinc-900 dark:stroke-zinc-700"
                  strokeWidth={1.5}
                />
                {Icon && (
                  <foreignObject x={p.x - 14} y={p.y - 14} width={28} height={28}>
                    <div className="flex size-full items-center justify-center">
                      <Icon className="size-7 text-blue-600 dark:text-cyan-400" aria-hidden="true" />
                    </div>
                  </foreignObject>
                )}
                <text
                  x={p.x}
                  y={p.y + NODE_R + 22}
                  textAnchor="middle"
                  className="fill-zinc-600 dark:fill-zinc-300 text-[13px] font-medium"
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}

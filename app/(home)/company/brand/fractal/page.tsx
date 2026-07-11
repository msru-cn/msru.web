"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useCallback, useEffect, useRef, useState } from "react";

// --- MATH & UTILS ---

function cssColorToHex(color: string): string {
  if (typeof document === "undefined") return color;
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return color;
  ctx.fillStyle = color;
  return ctx.fillStyle;
}

// --- CORE RENDERERS ---
class BoundingBoxCalculator {
  minX: number = Infinity;
  maxX: number = -Infinity;
  minY: number = Infinity;
  maxY: number = -Infinity;
  matrix: number[] = [1, 0, 0, 1, 0, 0];
  stack: number[][] = [];
  isEmpty: boolean = true;
  maxLineWidth: number = 1;

  reset() {
    this.minX = Infinity;
    this.maxX = -Infinity;
    this.minY = Infinity;
    this.maxY = -Infinity;
    this.matrix = [1, 0, 0, 1, 0, 0];
    this.stack = [];
    this.isEmpty = true;
    this.maxLineWidth = 1;
  }

  multiply(m: number[]) {
    const [a1, b1, c1, d1, e1, f1] = this.matrix;
    const [a2, b2, c2, d2, e2, f2] = m;
    this.matrix = [
      a1 * a2 + c1 * b2,
      b1 * a2 + d1 * b2,
      a1 * c2 + c1 * d2,
      b1 * c2 + d1 * d2,
      a1 * e2 + c1 * f2 + e1,
      b1 * e2 + d1 * f2 + f1,
    ];
  }

  translate(x: number, y: number) {
    this.multiply([1, 0, 0, 1, x, y]);
  }
  rotate(rad: number) {
    const c = Math.cos(rad),
      s = Math.sin(rad);
    this.multiply([c, s, -s, c, 0, 0]);
  }
  save() {
    this.stack.push([...this.matrix]);
  }
  restore() {
    // biome-ignore lint/style/noNonNullAssertion: stack length checked
    if (this.stack.length) this.matrix = this.stack.pop()!;
  }

  transformPoint(x: number, y: number) {
    return {
      x: this.matrix[0] * x + this.matrix[2] * y + this.matrix[4],
      y: this.matrix[1] * x + this.matrix[3] * y + this.matrix[5],
    };
  }

  addPoint(x: number, y: number) {
    const p = this.transformPoint(x, y);
    if (p.x < this.minX) this.minX = p.x;
    if (p.x > this.maxX) this.maxX = p.x;
    if (p.y < this.minY) this.minY = p.y;
    if (p.y > this.maxY) this.maxY = p.y;
    this.isEmpty = false;
  }

  beginPath() {}
  closePath() {}
  stroke() {}
  fill() {}
  moveTo(x: number, y: number) {
    this.addPoint(x, y);
  }
  lineTo(x: number, y: number) {
    this.addPoint(x, y);
  }
  fillRect(x: number, y: number, w: number, h: number) {
    this.addPoint(x, y);
    this.addPoint(x + w, y);
    this.addPoint(x, y + h);
    this.addPoint(x + w, y + h);
  }
  circle(x: number, y: number, r: number) {
    const c = this.transformPoint(x, y);
    if (c.x - r < this.minX) this.minX = c.x - r;
    if (c.x + r > this.maxX) this.maxX = c.x + r;
    if (c.y - r < this.minY) this.minY = c.y - r;
    if (c.y + r > this.maxY) this.maxY = c.y + r;
    this.isEmpty = false;
  }
  setLineWidth(w: number) {
    if (w > this.maxLineWidth) this.maxLineWidth = w;
  }
  setColor() {}
  clear() {
    this.reset();
  }

  getBounds(padding = 0) {
    if (this.isEmpty) return { x: 0, y: 0, w: 100, h: 100 };
    const strokePad = this.maxLineWidth / 2;
    const totalPad = padding + strokePad;
    return {
      x: this.minX - totalPad,
      y: this.minY - totalPad,
      w: this.maxX - this.minX + totalPad * 2,
      h: this.maxY - this.minY + totalPad * 2,
    };
  }
}

class CanvasRenderer {
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;
  dpr: number;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number, dpr = 1) {
    this.ctx = ctx;
    this.w = width;
    this.h = height;
    this.dpr = dpr;
  }
  clear(color?: string) {
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.ctx.clearRect(0, 0, this.w, this.h);
    if (color && color !== "transparent") {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(0, 0, this.w, this.h);
    }
  }
  setColor(fill: string, stroke: string) {
    this.ctx.fillStyle = fill;
    this.ctx.strokeStyle = stroke;
  }
  setLineWidth(w: number) {
    this.ctx.lineWidth = w;
  }
  translate(x: number, y: number) {
    this.ctx.translate(x, y);
  }
  rotate(rad: number) {
    this.ctx.rotate(rad);
  }
  save() {
    this.ctx.save();
  }
  restore() {
    this.ctx.restore();
  }
  beginPath() {
    this.ctx.beginPath();
  }
  moveTo(x: number, y: number) {
    this.ctx.moveTo(x, y);
  }
  lineTo(x: number, y: number) {
    this.ctx.lineTo(x, y);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke() {
    this.ctx.stroke();
  }
  fill() {
    this.ctx.fill();
  }
  fillRect(x: number, y: number, w: number, h: number) {
    this.ctx.fillRect(x, y, w, h);
  }
  circle(x: number, y: number, r: number) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

class SVGRenderer {
  elements: string[] = [];
  fillColor: string = "#000";
  strokeColor: string = "#000";
  lineWidth: number = 1;
  transforms: string[] = [];
  currentPath: string = "";

  clear() {
    this.elements = [];
  }
  setColor(fill: string, stroke: string) {
    this.fillColor = fill;
    this.strokeColor = stroke;
  }
  setLineWidth(w: number) {
    this.lineWidth = w;
  }
  translate(x: number, y: number) {
    this.transforms.push(`translate(${x}, ${y})`);
  }
  rotate(rad: number) {
    this.transforms.push(`rotate(${(rad * 180) / Math.PI})`);
  }
  save() {
    this.transforms.push("SAVE");
  }
  restore() {
    while (this.transforms.length) if (this.transforms.pop() === "SAVE") break;
  }
  getT() {
    return this.transforms.filter((t) => t !== "SAVE").join(" ");
  }
  beginPath() {
    this.currentPath = "";
  }
  moveTo(x: number, y: number) {
    this.currentPath += `M ${x.toFixed(2)} ${y.toFixed(2)} `;
  }
  lineTo(x: number, y: number) {
    this.currentPath += `L ${x.toFixed(2)} ${y.toFixed(2)} `;
  }
  closePath() {
    this.currentPath += `Z `;
  }
  stroke() {
    this.elements.push(
      `<path d="${this.currentPath}" fill="none" stroke="${this.strokeColor}" stroke-width="${this.lineWidth}" transform="${this.getT()}" stroke-linecap="round" stroke-linejoin="round"/>`,
    );
  }
  fill() {
    this.elements.push(
      `<path d="${this.currentPath}" fill="${this.fillColor}" stroke="none" transform="${this.getT()}" />`,
    );
  }
  fillRect(x: number, y: number, w: number, h: number) {
    this.elements.push(
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${this.fillColor}" transform="${this.getT()}" />`,
    );
  }
  circle(x: number, y: number, r: number) {
    this.elements.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="${this.fillColor}" transform="${this.getT()}" />`);
  }
  getSVG(viewBox: { x: number; y: number; w: number; h: number }) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}">${this.elements.join("\n")}</svg>`;
  }
}

// --- FRACTAL ALGORITHMS ---
const Algorithms: Record<
  string,
  {
    draw: (
      r: CanvasRenderer | BoundingBoxCalculator | SVGRenderer,
      w: number,
      h: number,
      // biome-ignore lint/suspicious/noExplicitAny: complex dynamic parameter object
      p: Record<string, number | boolean | any>,
    ) => void;
  }
> = {
  drift: {
    draw: (r, w, h, p) => {
      const lerp = (a: { x: number; y: number }, b: { x: number; y: number }, t: number) => ({
        x: a.x * (1 - t) + b.x * t,
        y: a.y * (1 - t) + b.y * t,
      });
      const noise = () => (Math.random() - 0.5) * p.noise;
      function fractalN(points: { x: number; y: number }[], depth: number) {
        if (depth <= 0) {
          if (p.scale !== 1.0) {
            let cx = 0;
            let cy = 0;
            points.forEach((pt) => {
              cx += pt.x;
              cy += pt.y;
            });
            cx /= points.length;
            cy /= points.length;
            const sPts = points.map((pt) => ({ x: cx + (pt.x - cx) * p.scale, y: cy + (pt.y - cy) * p.scale }));
            drawPoly(sPts);
          } else drawPoly(points);
          return;
        }
        for (let i = 0; i < points.length; i++) {
          const sub = points.map((pt) => lerp(points[i], pt, p.bias));
          fractalN(sub, depth - 1);
        }
      }
      function drawPoly(pts: { x: number; y: number }[]) {
        r.beginPath();
        r.moveTo(pts[0].x + noise(), pts[0].y + noise());
        for (let i = 1; i < pts.length; i++) r.lineTo(pts[i].x + noise(), pts[i].y + noise());
        r.closePath();
        p.outline ? r.stroke() : r.fill();
      }
      r.translate(w / 2, h / 2);
      r.rotate((p.rotation * Math.PI) / 180);
      const points = [];
      const rad = Math.min(w, h) * 0.42;
      for (let i = 0; i < p.sides; i++) {
        const a = -Math.PI / 2 + (i * (Math.PI * 2)) / p.sides;
        points.push({ x: Math.cos(a) * rad, y: Math.sin(a) * rad });
      }
      fractalN(points, p.depth);
    },
  },
  tree: {
    draw: (r, w, h, p) => {
      function branch(len: number, depth: number) {
        if (depth <= 0) return;
        r.beginPath();
        r.moveTo(0, 0);
        r.lineTo(0, -len);
        r.stroke();
        r.translate(0, -len);
        r.save();
        r.rotate((p.angle * Math.PI) / 180 + (Math.random() - 0.5) * p.noise * 0.1);
        branch(len * p.decay, depth - 1);
        r.restore();
        r.save();
        r.rotate((-p.angle * Math.PI) / 180 + (Math.random() - 0.5) * p.noise * 0.1);
        branch(len * p.decay, depth - 1);
        r.restore();
        if (p.triple) {
          r.save();
          branch(len * p.decay, depth - 1);
          r.restore();
        }
      }
      r.setLineWidth(Math.min(w, h) * 0.005 * (p.thick ? 3 : 1));
      r.translate(w / 2, h * 0.9);
      branch(Math.min(w, h) * 0.28, p.depth);
    },
  },
  koch: {
    draw: (r, w, h, p) => {
      function kochLine(p1: { x: number; y: number }, p2: { x: number; y: number }, depth: number) {
        if (depth <= 0) {
          r.lineTo(p2.x, p2.y);
          return;
        }
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const unit = dist / 3;
        const angle = Math.atan2(dy, dx);
        const pA = { x: p1.x + dx / 3, y: p1.y + dy / 3 };
        const pC = { x: p1.x + (2 * dx) / 3, y: p1.y + (2 * dy) / 3 };
        const hh = (Math.sqrt(3) / 2) * unit * p.tension;
        const pB = {
          x: pA.x + Math.cos(angle - Math.PI / 2) * hh + dx / 6,
          y: pA.y + Math.sin(angle - Math.PI / 2) * hh + dy / 6,
        };
        if (p.tension !== 1) {
          const mx = (pA.x + pC.x) / 2;
          const my = (pA.y + pC.y) / 2;
          pB.x = mx + Math.cos(angle - Math.PI / 2) * hh;
          pB.y = my + Math.sin(angle - Math.PI / 2) * hh;
        }
        kochLine(p1, pA, depth - 1);
        kochLine(pA, pB, depth - 1);
        kochLine(pB, pC, depth - 1);
        kochLine(pC, p2, depth - 1);
      }
      const br = Math.min(w, h) * 0.35;
      const sr = (br / (1 + p.tension * 0.5)) * p.zoom;
      const cx = w / 2;
      const cy = h / 2 + sr * 0.2;
      const pts = [];
      for (let i = 0; i < 3; i++)
        pts.push({ x: cx + Math.cos(-Math.PI / 2 + i * 2.094) * sr, y: cy + Math.sin(-Math.PI / 2 + i * 2.094) * sr });
      r.setLineWidth(Math.min(w, h) * 0.005);
      r.translate(w / 2, h / 2);
      r.rotate((p.rotation * Math.PI) / 180);
      r.translate(-w / 2, -h / 2);
      r.beginPath();
      r.moveTo(pts[0].x, pts[0].y);
      kochLine(pts[0], pts[1], p.depth);
      kochLine(pts[1], pts[2], p.depth);
      kochLine(pts[2], pts[0], p.depth);
      p.outline ? r.stroke() : r.fill();
    },
  },
  tsquare: {
    draw: (r, w, h, p) => {
      function drawSq(x: number, y: number, s: number, depth: number) {
        if (depth === 0) return;
        r.fillRect(x - s / 2, y - s / 2, s, s);
        const newS = (s / 2) * p.ratio;
        drawSq(x - s / 2, y - s / 2, newS, depth - 1);
        drawSq(x + s / 2, y - s / 2, newS, depth - 1);
        drawSq(x - s / 2, y + s / 2, newS, depth - 1);
        drawSq(x + s / 2, y + s / 2, newS, depth - 1);
      }
      r.translate(w / 2, h / 2);
      r.rotate((p.rotation * Math.PI) / 180);
      r.translate(-w / 2, -h / 2);
      drawSq(w / 2, h / 2, Math.min(w, h) * 0.4, p.depth);
    },
  },
  hilbert: {
    draw: (r, w, h, p) => {
      const N = p.depth;
      const sz = Math.min(w, h) * 0.8;
      const sx = (w - sz) / 2;
      const sy = (h - sz) / 2;
      const hPt = (i: number, o: number) => {
        const pt = [
          { x: 0, y: 0 },
          { x: 0, y: 1 },
          { x: 1, y: 1 },
          { x: 1, y: 0 },
        ];
        let idx = i & 3,
          v = { ...pt[idx] };
        for (let j = 1; j < o; j++) {
          i >>>= 2;
          idx = i & 3;
          const len = 2 ** j;
          if (idx === 0) {
            const t = v.x;
            v.x = v.y;
            v.y = t;
          } else if (idx === 1) {
            v.y += len;
          } else if (idx === 2) {
            v.x += len;
            v.y += len;
          } else if (idx === 3) {
            const t = len - 1 - v.x;
            v.x = len - 1 - v.y;
            v.y = t;
            v.x += len;
          }
        }
        return v;
      };
      const tot = 4 ** N;
      const cell = sz / (2 ** N - (p.gap ? 0 : 1));
      r.setLineWidth(Math.min(w, h) * 0.005 * p.thick);
      r.beginPath();
      for (let i = 0; i < tot; i++) {
        const pt = hPt(i, N);
        const px = sx + pt.x * cell + (p.gap ? cell / 2 : 0);
        const py = sy + pt.y * cell + (p.gap ? cell / 2 : 0);
        i === 0 ? r.moveTo(px, py) : r.lineTo(px, py);
      }
      r.stroke();
    },
  },
  vicsek: {
    draw: (r, w, h, p) => {
      function vRec(x: number, y: number, s: number, d: number) {
        if (d === 0) {
          p.round ? r.circle(x + s / 2, y + s / 2, s / 2.2) : r.fillRect(x, y, s, s);
          return;
        }
        const ns = s / 3;
        vRec(x + ns, y + ns, ns, d - 1);
        vRec(x + ns, y, ns, d - 1);
        vRec(x + ns, y + 2 * ns, ns, d - 1);
        vRec(x, y + ns, ns, d - 1);
        vRec(x + 2 * ns, y + ns, ns, d - 1);
        if (p.cross) {
          vRec(x, y, ns, d - 1);
          vRec(x + 2 * ns, y, ns, d - 1);
          vRec(x, y + 2 * ns, ns, d - 1);
          vRec(x + 2 * ns, y + 2 * ns, ns, d - 1);
        }
      }
      r.translate(w / 2, h / 2);
      r.rotate((p.rotation * Math.PI) / 180);
      r.translate(-w / 2, -h / 2);
      const sz = Math.min(w, h) * 0.75;
      vRec((w - sz) / 2, (h - sz) / 2, sz, p.depth);
    },
  },
};

// --- CONFIGURATION ---
type ParamConfig = {
  id: string;
  label: string;
  type: "range" | "toggle";
  min?: number;
  max?: number;
  step?: number;
  val: number | boolean;
};
type LabConfig = { name: string; params: ParamConfig[] };

const Configs: Record<string, LabConfig> = {
  drift: {
    name: "Drift Poly",
    params: [
      { id: "sides", label: "Sides", type: "range", min: 3, max: 8, step: 1, val: 3 },
      { id: "bias", label: "Bias", type: "range", min: 0.1, max: 0.9, step: 0.01, val: 0.5 },
      { id: "depth", label: "Depth", type: "range", min: 1, max: 6, step: 1, val: 5 },
      { id: "scale", label: "Gap", type: "range", min: 0.5, max: 1.2, step: 0.01, val: 1.0 },
      { id: "rotation", label: "Rot", type: "range", min: 0, max: 360, step: 1, val: 0 },
      { id: "noise", label: "Noise", type: "range", min: 0, max: 20, step: 1, val: 0 },
      { id: "outline", label: "Outline", type: "toggle", val: false },
    ],
  },
  tree: {
    name: "Recursive Tree",
    params: [
      { id: "angle", label: "Angle", type: "range", min: 10, max: 120, step: 1, val: 25 },
      { id: "decay", label: "Decay", type: "range", min: 0.5, max: 1, step: 0.01, val: 0.7 },
      { id: "depth", label: "Depth", type: "range", min: 1, max: 10, step: 1, val: 8 },
      { id: "noise", label: "Wind", type: "range", min: 0, max: 30, step: 1, val: 0 },
      { id: "triple", label: "Triple", type: "toggle", val: false },
      { id: "thick", label: "Thick", type: "toggle", val: false },
    ],
  },
  koch: {
    name: "Koch Snowflake",
    params: [
      { id: "depth", label: "Depth", type: "range", min: 1, max: 6, step: 1, val: 4 },
      { id: "tension", label: "Tension", type: "range", min: 0.1, max: 3.0, step: 0.1, val: 1.0 },
      { id: "zoom", label: "Zoom", type: "range", min: 0.5, max: 1.5, step: 0.01, val: 1.0 },
      { id: "rotation", label: "Rot", type: "range", min: 0, max: 360, step: 1, val: 0 },
      { id: "outline", label: "Outline", type: "toggle", val: false },
    ],
  },
  tsquare: {
    name: "T-Square",
    params: [
      { id: "depth", label: "Depth", type: "range", min: 1, max: 7, step: 1, val: 5 },
      { id: "ratio", label: "Ratio", type: "range", min: 0.3, max: 0.9, step: 0.01, val: 0.5 },
      { id: "rotation", label: "Rot", type: "range", min: 0, max: 90, step: 1, val: 0 },
    ],
  },
  hilbert: {
    name: "Hilbert Curve",
    params: [
      { id: "depth", label: "Depth", type: "range", min: 1, max: 7, step: 1, val: 5 },
      { id: "thick", label: "Weight", type: "range", min: 0.5, max: 5.0, step: 0.1, val: 2.0 },
      { id: "gap", label: "Gap", type: "toggle", val: false },
    ],
  },
  vicsek: {
    name: "Vicsek Fractal",
    params: [
      { id: "depth", label: "Depth", type: "range", min: 1, max: 6, step: 1, val: 4 },
      { id: "rotation", label: "Rot", type: "range", min: 0, max: 90, step: 1, val: 0 },
      { id: "cross", label: "Fill Diag", type: "toggle", val: false },
      { id: "round", label: "Round", type: "toggle", val: false },
    ],
  },
};

// --- REACT APP COMPONENT ---
export default function FractalLabHub() {
  const [currentLab, setCurrentLab] = useState("drift");
  const [currentColor, setCurrentColor] = useState("#1e293b");
  const [colorInput, setColorInput] = useState("#1e293b");
  const [params, setParams] = useState<Record<string, number | boolean>>({});
  const [dimensions, setDimensions] = useState({ w: 800, h: 800, dpr: 1 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Initialize Params when lab changes
  useEffect(() => {
    const initialParams: Record<string, number | boolean> = {};
    Configs[currentLab].params.forEach((p) => {
      initialParams[p.id] = p.val;
    });
    setParams(initialParams);
  }, [currentLab]);

  // Handle Resize observer
  useEffect(() => {
    if (!wrapperRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const dpr = window.devicePixelRatio || 1;
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setDimensions({ w: width, h: height, dpr });
        }
      }
    });
    resizeObserver.observe(wrapperRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const handleLabChange = (value: string) => {
    setCurrentLab(value);
  };

  // Draw Function
  const drawCanvas = useCallback(() => {
    if (!canvasRef.current || Object.keys(params).length === 0 || dimensions.w === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.w * dimensions.dpr;
    canvas.height = dimensions.h * dimensions.dpr;

    const renderer = new CanvasRenderer(ctx, dimensions.w, dimensions.h, dimensions.dpr);
    renderer.clear(); // Transparent background
    renderer.setColor(currentColor, currentColor);

    Algorithms[currentLab].draw(renderer, dimensions.w, dimensions.h, params);
  }, [currentLab, params, currentColor, dimensions]);

  // Trigger draw on dependencies change
  useEffect(() => {
    requestAnimationFrame(drawCanvas);
  }, [drawCanvas]);

  // Input Handlers
  const handleParamChange = (id: string, value: number | boolean) => {
    setParams((prev) => ({ ...prev, [id]: value }));
  };

  const handleColorChange = (val: string, updateInput: boolean) => {
    setCurrentColor(val);
    if (updateInput) setColorInput(val);
  };

  const randomize = () => {
    const rCol =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    handleColorChange(rCol, true);

    const newParams = { ...params };
    Configs[currentLab].params.forEach((p) => {
      if (p.type === "range" && p.min !== undefined && p.max !== undefined && p.step !== undefined) {
        let v = p.min + Math.random() * (p.max - p.min);
        v = Math.round(v / p.step) * p.step;
        newParams[p.id] = parseFloat(v.toFixed(2));
      }
    });
    setParams(newParams);
  };

  const exportGraphic = (type: "png" | "svg") => {
    const bbox = new BoundingBoxCalculator();
    Algorithms[currentLab].draw(bbox, 800, 800, params);
    const pad = 20;
    const bounds = bbox.getBounds(pad);

    if (type === "png") {
      const tCanvas = document.createElement("canvas");
      tCanvas.width = bounds.w;
      tCanvas.height = bounds.h;
      const tCtx = tCanvas.getContext("2d");
      if (!tCtx) return;

      tCtx.translate(-bounds.x, -bounds.y);
      const pngRenderer = new CanvasRenderer(tCtx, bounds.w, bounds.h, 1);
      pngRenderer.setColor(currentColor, currentColor);
      Algorithms[currentLab].draw(pngRenderer, 800, 800, params);

      const link = document.createElement("a");
      link.download = `fractal_${currentLab}_${Date.now()}.png`;
      link.href = tCanvas.toDataURL("image/png");
      link.click();
    } else {
      const svgR = new SVGRenderer();
      svgR.setColor(currentColor, currentColor);
      Algorithms[currentLab].draw(svgR, 800, 800, params);

      const svgStr = svgR.getSVG({ x: bounds.x, y: bounds.y, w: bounds.w, h: bounds.h });
      const blob = new Blob([svgStr], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `fractal_${currentLab}_${Date.now()}.svg`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-slate-50 text-slate-800 font-sans overflow-hidden select-none">
      <style>{`
        .custom-range {
            -webkit-appearance: none;
            width: 100%;
            height: 6px;
            background: #e2e8f0;
            border-radius: 3px;
            outline: none;
        }
        .custom-range::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #0f172a;
            cursor: pointer;
            transition: transform 0.1s;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border: 2px solid white;
        }
        .custom-range::-webkit-slider-thumb:hover { transform: scale(1.1); }
        
        .checker-bg {
            background-image: 
                linear-gradient(45deg, #cbd5e1 25%, transparent 25%), 
                linear-gradient(-45deg, #cbd5e1 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, #cbd5e1 75%), 
                linear-gradient(-45deg, transparent 75%, #cbd5e1 75%);
            background-size: 20px 20px;
            background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
        
        /* Custom scrollbar for controls */
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background-color: #e2e8f0; border-radius: 3px; }
      `}</style>

      {/* --- Main Canvas Area --- */}
      <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden bg-slate-300 checker-bg">
        <div
          ref={wrapperRef}
          className="relative shadow-2xl rounded bg-white w-full h-full max-w-full max-h-full flex justify-center items-center"
        >
          <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100%", display: "block", cursor: "crosshair", borderRadius: "4px" }}
          />
          <div className="absolute bottom-4 right-6 font-mono text-[11px] font-bold text-slate-400 pointer-events-none opacity-50 z-10">
            LAB: {currentLab.toUpperCase()}
          </div>
        </div>
      </div>

      {/* --- Sidebar Controls --- */}
      <Card className="p-0 border-r-0 border-y-0 border-l border-border rounded-none shadow-[-4px_0_15px_rgba(0,0,0,0.03)] bg-background">
        <div className="p-6 border-b border-border bg-card text-card-foreground">
          <h1 className="text-xl font-extrabold tracking-tight mb-4 flex items-center gap-2">
            <span className="block w-3 h-3 bg-primary rounded-sm"></span>
            FRACTAL HUB
          </h1>

          <div className="mb-6">
            <Select value={currentLab} onValueChange={handleLabChange}>
              <SelectTrigger className="w-full font-semibold">
                <SelectValue placeholder="Select a lab" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="drift">LAB 01: DRIFT (多边形漂移)</SelectItem>
                  <SelectItem value="tree">LAB 02: TREE (递归树)</SelectItem>
                  <SelectItem value="koch">LAB 03: KOCH (科赫雪花)</SelectItem>
                  <SelectItem value="tsquare">LAB 04: T-SQUARE (T型分形)</SelectItem>
                  <SelectItem value="hilbert">LAB 05: HILBERT (希尔伯特)</SelectItem>
                  <SelectItem value="vicsek">LAB 06: VICSEK (维切克十字)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-0">
            <Label className="flex justify-between mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Color Theme
            </Label>
            <div className="flex items-center gap-2 bg-muted/50 p-1 border border-border rounded-md">
              <div
                className="relative w-9 h-9 rounded overflow-hidden border border-border cursor-pointer shrink-0"
                style={{ backgroundColor: currentColor }}
              >
                <input
                  type="color"
                  className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] p-0 m-0 cursor-pointer opacity-0"
                  value={cssColorToHex(currentColor)}
                  onChange={(e) => handleColorChange(e.target.value, true)}
                />
              </div>
              <input
                type="text"
                className="flex-1 bg-transparent border-none font-mono text-sm text-foreground p-2 outline-none lowercase focus:bg-background focus:rounded-sm"
                value={colorInput}
                onChange={(e) => {
                  setColorInput(e.target.value);
                  handleColorChange(e.target.value, false);
                }}
                placeholder="hex, rgb, hsl..."
              />
            </div>
          </div>
        </div>

        <CardContent className="flex-1 overflow-y-auto p-6 custom-scroll">
          {Configs[currentLab]?.params.map((p) => (
            <div key={p.id} className="mb-7">
              {p.type === "range" ? (
                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <Label>{p.label}</Label>
                    <span className="font-mono text-foreground">
                      {params[p.id] !== undefined ? params[p.id] : p.val}
                    </span>
                  </div>
                  <Slider
                    min={p.min}
                    max={p.max}
                    step={p.step}
                    value={[Number((params[p.id] as number) ?? p.val)]}
                    onValueChange={(vals: number[]) => handleParamChange(p.id, vals[0])}
                    className="py-4"
                  />
                </div>
              ) : (
                <div className="flex items-center space-x-3 mt-2 py-1">
                  <Switch
                    id={p.id}
                    checked={(params[p.id] as boolean) ?? p.val}
                    onCheckedChange={(checked: boolean) => handleParamChange(p.id, checked)}
                  />
                  <Label htmlFor={p.id} className="text-sm font-semibold cursor-pointer">
                    {p.label}
                  </Label>
                </div>
              )}
            </div>
          ))}
        </CardContent>

        <div className="p-6 bg-card border-t border-border grid grid-cols-2 gap-3">
          <Button type="button" variant="secondary" className="col-span-2 font-bold tracking-wide" onClick={randomize}>
            RANDOMIZE
          </Button>
          <Button
            type="button"
            variant="default"
            className="font-bold tracking-wide text-xs"
            onClick={() => exportGraphic("png")}
          >
            EXPORT PNG
          </Button>
          <Button
            type="button"
            variant="outline"
            className="font-bold tracking-wide text-xs"
            onClick={() => exportGraphic("svg")}
          >
            EXPORT SVG
          </Button>
        </div>
      </Card>
    </div>
  );
}

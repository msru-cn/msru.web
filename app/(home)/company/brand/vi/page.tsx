"use client";

import { useEffect, useRef } from "react";

interface FractalOptions {
  color1?: string;
  color2?: string;
  depth?: number;
  gapRatio?: number;
  isStroke?: boolean;
  strokeColor?: string;
}

/**
 * MERU FRACTAL ENGINE v2.3 - Core Generative Logic
 */
function drawFractal(canvas: HTMLCanvasElement | null, options: FractalOptions = {}) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;

  // Defaults
  const color1 = options.color1 || "#20B2AA";
  const color2 = options.color2 || "#008B8B";
  const depth = options.depth || 4;
  const gapRatio = options.gapRatio !== undefined ? options.gapRatio : 0.06;
  const isStroke = options.isStroke || false;
  const strokeColor = options.strokeColor || "#008B8B";

  ctx.clearRect(0, 0, w, h);

  // Gradient Fill
  if (!isStroke) {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
  } else {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
  }

  // Recursive Function
  function drawTriangle(x: number, y: number, size: number, d: number) {
    if (d === 0) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + size / 2, y + size * 0.866);
      ctx.lineTo(x - size / 2, y + size * 0.866);
      ctx.closePath();

      if (isStroke) ctx.stroke();
      else ctx.fill();
      return;
    }

    const standardSubSize = size / 2;
    const drawSize = standardSubSize * (1 - gapRatio);

    const hFactor = 0.866;
    const centroidFactor = 0.57735; // hFactor * 2/3
    const shiftY = (standardSubSize - drawSize) * centroidFactor;

    // Top
    drawTriangle(x, y + shiftY, drawSize, d - 1);
    // Bottom Left
    drawTriangle(x - standardSubSize / 2, y + standardSubSize * hFactor + shiftY, drawSize, d - 1);
    // Bottom Right
    drawTriangle(x + standardSubSize / 2, y + standardSubSize * hFactor + shiftY, drawSize, d - 1);
  }

  // Centering Logic
  const size = w * 0.9;
  const height = size * 0.866;
  const startX = w / 2;
  const startY = (h - height) / 2;

  drawTriangle(startX, startY, size, depth);

  // Singularity Dot (The Seed)
  if (!isStroke) {
    ctx.beginPath();
    ctx.arc(startX, startY - w * 0.025, w * 0.015, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
  }
}

const MarkCard = ({ title, depth, gap, desc }: { title: string; depth: number; gap: number; desc: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    drawFractal(canvasRef.current, { depth, gapRatio: gap });
  }, [depth, gap]);

  return (
    <div className="glass-card p-8 flex flex-col items-center justify-center aspect-square group hover-lift transition-all duration-500 text-balance">
      <canvas ref={canvasRef} width={400} height={400} className="w-48 h-48 mb-6"></canvas>
      <div className="text-center">
        <h4 className="text-lg text-slate-900 serif font-bold">{title}</h4>
        <p className="text-xs text-slate-400 tech-text mt-2 font-medium">
          Depth: {depth} | Gap: {gap}
        </p>
        <p className="text-xs text-slate-500 mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default function VIPage() {
  const navLogoRef = useRef<HTMLCanvasElement>(null);
  const iconAppRef = useRef<HTMLCanvasElement>(null);
  const toteLogoRef = useRef<HTMLCanvasElement>(null);
  const signLogoRef = useRef<HTMLCanvasElement>(null);
  const ideLogoRef = useRef<HTMLCanvasElement>(null);
  const cardFrontLogoRef = useRef<HTMLCanvasElement>(null);
  const cardBackLogoRef = useRef<HTMLCanvasElement>(null);
  const cardBackPatternRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    drawFractal(navLogoRef.current, { depth: 2, gapRatio: 0.1 });
    drawFractal(iconAppRef.current, { depth: 3, gapRatio: 0.08, color1: "#FFFFFF", color2: "#F0FDF4" });
    drawFractal(toteLogoRef.current, { depth: 4, gapRatio: 0.08, color1: "#004d4d", color2: "#004d4d" });
    drawFractal(signLogoRef.current, { depth: 4, gapRatio: 0.05, color1: "#334155", color2: "#1e293b" });
    drawFractal(ideLogoRef.current, { depth: 5, gapRatio: 0.04, color1: "#2DD4BF", color2: "#2DD4BF" });
    drawFractal(cardFrontLogoRef.current, { depth: 4, gapRatio: 0.05 });
    drawFractal(cardBackLogoRef.current, { depth: 4, gapRatio: 0.05, color1: "#FFFFFF", color2: "#E0F2F1" });
    drawFractal(cardBackPatternRef.current, { depth: 5, gapRatio: 0.02, color1: "#FFFFFF", color2: "#FFFFFF" });
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-[#008B8B] selection:text-white relative overflow-x-hidden font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Serif+SC:wght@300;400;600;700&display=swap');
        
        .serif { font-family: 'Noto Serif SC', serif; }
        .tech-text { font-family: 'Inter', sans-serif; letter-spacing: 0.05em; }
        
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .grid-bg {
          background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
          background-size: 32px 32px;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 32px rgba(0, 139, 139, 0.08);
          border-radius: 24px;
        }

        .hover-lift { transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease; }
        .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -10px rgba(0, 139, 139, 0.15); }
        
        .highlight-number {
          font-family: 'Noto Serif SC', serif;
          font-style: italic;
          color: #008B8B;
          font-weight: 700;
        }
      `}</style>

      <div className="noise-overlay" />
      <div className="grid-bg absolute inset-0 -z-10" />

      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F8FAFC]/80 backdrop-blur-xl border-b border-slate-200/60 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center text-balance">
          <div className="flex items-center gap-4">
            <canvas ref={navLogoRef} width={40} height={40} className="w-10 h-10"></canvas>
            <div>
              <span className="block text-lg font-bold tracking-tight text-slate-900 leading-none serif">MERU</span>
              <span className="text-[10px] text-slate-400 tech-text tracking-widest uppercase font-medium">
                System v2.3
              </span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase text-slate-400 tech-text">
            <a href="#philosophy" className="hover:text-[#008B8B] transition-colors">
              Philosophy
            </a>
            <a href="#mark" className="hover:text-[#008B8B] transition-colors">
              Mark
            </a>
            <a href="#colors" className="hover:text-[#008B8B] transition-colors">
              Color
            </a>
            <a href="#typography" className="hover:text-[#008B8B] transition-colors">
              Type
            </a>
            <a href="#applications" className="hover:text-[#008B8B] transition-colors text-[#008B8B]">
              Applications
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="philosophy"
        className="pt-48 pb-32 px-6 max-w-7xl mx-auto text-center relative overflow-hidden text-balance"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-tr from-[#008B8B]/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm shadow-sm hover:border-[#008B8B]/30 transition-colors cursor-default text-balance">
          <div className="w-2 h-2 rounded-full bg-[#008B8B] animate-pulse"></div>
          <span className="text-[10px] tech-text text-slate-500 uppercase tracking-wider font-semibold">
            Human Verified Identity
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl tracking-tight text-slate-900 mb-8 font-serif">
          极微 <span className="text-[#008B8B] serif italic px-2">·</span> 涌现
        </h1>

        <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed serif">
          &quot;Infinite within Finite&quot;
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-40 pb-40 relative z-10">
        {/* Mark Logic Section */}
        <section id="mark">
          <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-[#008B8B] tracking-widest uppercase mb-2 block highlight-number">
                01. Identity
              </span>
              <h2 className="text-3xl font-serif font-bold italic">参数化标志 (Parametric Mark)</h2>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-xs tech-text text-slate-400 font-medium">ALGORITHM: FRACTAL_GAP</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MarkCard title="极简 (Low Depth)" depth={2} gap={0.1} desc="App 图标、导航栏、Favicon" />
            <MarkCard title="标准 (Standard)" depth={4} gap={0.06} desc="名片、文档、网页主视觉" />
            <MarkCard title="宏观 (High Detail)" depth={6} gap={0.03} desc="户外广告、高清屏幕、品牌墙" />
          </div>
        </section>

        {/* Color System Section */}
        <section id="colors">
          <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-[#008B8B] tracking-widest uppercase mb-2 block highlight-number">
                02. Color
              </span>
              <h2 className="text-3xl text-slate-900 font-serif font-bold italic">色彩定义 (Color System)</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white transition-all transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-[#F8FAFC] flex items-center justify-center border-b border-slate-100">
                <span className="text-slate-400 font-light text-2xl serif italic tracking-widest">Aa</span>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Base</p>
                <h4 className="text-xl text-slate-900 mt-1 serif font-bold italic">云雾白 (Cloud White)</h4>
                <p className="text-xs tech-text text-slate-400 mt-2 font-medium">HEX: #F8FAFC</p>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  略带蓝灰的自然白，如清晨草原上的薄雾。比纯白更柔和、护眼，作为所有界面的背景色。
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#008B8B]/20 bg-white transition-all transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-linear-to-br from-[#20B2AA] to-[#008B8B] flex items-center justify-center">
                <span className="text-white font-light text-2xl serif italic tracking-widest">Aa</span>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold tracking-widest text-[#008B8B] uppercase">Primary</p>
                <h4 className="text-xl text-slate-900 mt-1 serif font-bold italic">美仁青 (Merin Turquoise)</h4>
                <p className="text-xs tech-text text-slate-400 mt-2 font-medium">HEX: #008B8B</p>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  源自藏族绿松石与夏季草原。它区别于传统的科技蓝或警告红，代表生态、理性、冷静与永续。
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white transition-all transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-[#0F172A] flex items-center justify-center">
                <span className="text-white font-light text-2xl serif italic tracking-widest">Aa</span>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Secondary</p>
                <h4 className="text-xl text-slate-900 mt-1 serif font-bold italic">深空黑 (Void Black)</h4>
                <p className="text-xs tech-text text-slate-400 mt-2 font-medium">HEX: #0F172A</p>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  非纯黑，而是极深邃的蓝黑。代表微观粒子的背景、底层算力与未知的宇宙深空。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Card Preview Section */}
        <section id="applications">
          <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-[#008B8B] tracking-widest uppercase mb-2 block highlight-number">
                04. Scenarios
              </span>
              <h2 className="text-3xl text-slate-900 font-serif font-bold italic">核心应用 (Application Matrix)</h2>
            </div>
          </div>

          <div className="bg-slate-200 p-12 md:p-16 rounded-[3rem] flex flex-col xl:flex-row gap-16 items-center justify-center shadow-inner border border-slate-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 mix-blend-overlay pointer-events-none"></div>

            {/* Business Card Front */}
            <div className="relative group text-balance">
              <div className="w-[350px] h-[200px] bg-white rounded-lg shadow-2xl relative overflow-hidden flex flex-col p-8 transition-transform hover:-translate-y-2 duration-500 z-10">
                <div className="flex justify-between items-start mb-auto text-balance">
                  <div className="flex items-center gap-3">
                    <canvas ref={cardFrontLogoRef} width={48} height={48} className="w-10 h-10"></canvas>
                    <span className="text-lg font-bold tracking-tight text-slate-900 serif">MERU</span>
                  </div>
                  <span className="text-[8px] font-bold tracking-[0.2em] text-[#008B8B] uppercase border border-[#008B8B]/20 px-2 py-1 rounded font-sans">
                    Founder
                  </span>
                </div>
                <div className="z-10 mt-4">
                  <h5 className="text-slate-900 font-bold text-xl tracking-tight serif">
                    Suo Lang <span className="text-sm font-normal text-slate-400 ml-1 font-sans not-italic">索朗</span>
                  </h5>
                  <p className="text-slate-500 text-xs mt-1 font-sans font-medium">Chief Executive Officer</p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-[8px] text-slate-400 tech-text font-medium text-balance">
                  <div>
                    <p>T. +86 138 0000 0000</p>
                    <p>E. founder@meru.one</p>
                  </div>
                  <div className="text-right">
                    <p>Gannan, China</p>
                    <p>meru.one</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-slate-500 mt-4 tech-text font-medium italic">
                Front Side (90x54mm)
              </p>
            </div>

            {/* Business Card Back */}
            <div className="relative group text-balance">
              <div className="w-[350px] h-[200px] bg-[#008B8B] rounded-lg shadow-2xl relative overflow-hidden flex flex-col items-center justify-center transition-transform hover:-translate-y-2 duration-500">
                <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                  <canvas
                    ref={cardBackPatternRef}
                    width={400}
                    height={400}
                    className="w-full h-full scale-150"
                  ></canvas>
                </div>
                <div className="z-10 text-center text-balance">
                  <canvas ref={cardBackLogoRef} width={100} height={100} className="w-16 h-16 mx-auto mb-4"></canvas>
                  <p className="text-white text-sm font-serif italic tracking-widest">Infinite within Finite</p>
                  <p className="text-white/60 text-[10px] mt-2 tracking-[0.5em] uppercase font-sans font-medium">
                    极微 · 涌现
                  </p>
                </div>
                <div className="absolute bottom-0 w-full h-1 bg-[#20B2AA]"></div>
              </div>
              <p className="text-center text-xs text-slate-500 mt-4 tech-text font-medium italic">
                Back Side (Brand Color)
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tighter mb-4 serif italic">MERU</h2>
            <p className="text-sm mb-8 tracking-widest uppercase text-[#008B8B] tech-text font-medium italic">
              Infinite within Finite
            </p>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded bg-[#008B8B]"></span>
              <span className="w-8 h-8 rounded bg-[#F8FAFC]"></span>
              <span className="w-8 h-8 rounded bg-[#0F172A]"></span>
            </div>
          </div>
          <div className="text-right flex flex-col justify-end">
            <p className="text-xs opacity-50 mb-2 tech-text">Designed by AI & Suo Lang</p>
            <p className="text-xs opacity-30 tech-text uppercase tracking-widest font-bold">
              © 2026 MERU TECHNOLOGY. BRAND GUIDELINES V2.3
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

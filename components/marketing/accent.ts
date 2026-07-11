export type AccentColor =
  | "blue" | "emerald" | "amber" | "orange" | "rose"
  | "slate" | "purple" | "fuchsia" | "teal";

export interface AccentClasses {
  text: string;
  border: string;
  glow: string;
  gradientFrom: string;
}

const MAP: Record<AccentColor, AccentClasses> = {
  blue:    { text: "text-blue-500",    border: "hover:border-blue-500/50",    glow: "from-blue-500/20 to-transparent",    gradientFrom: "from-blue-500" },
  emerald: { text: "text-emerald-500", border: "hover:border-emerald-500/50", glow: "from-emerald-500/20 to-transparent", gradientFrom: "from-emerald-500" },
  amber:   { text: "text-amber-500",   border: "hover:border-amber-500/50",   glow: "from-amber-500/20 to-transparent",   gradientFrom: "from-amber-500" },
  orange:  { text: "text-orange-500",  border: "hover:border-orange-500/50",  glow: "from-orange-500/20 to-transparent",  gradientFrom: "from-orange-500" },
  rose:    { text: "text-rose-500",    border: "hover:border-rose-500/50",    glow: "from-rose-500/20 to-transparent",    gradientFrom: "from-rose-500" },
  slate:   { text: "text-slate-500",   border: "hover:border-slate-500/50",   glow: "from-slate-500/20 to-transparent",   gradientFrom: "from-slate-500" },
  purple:  { text: "text-purple-500",  border: "hover:border-purple-500/50",  glow: "from-purple-500/20 to-transparent",  gradientFrom: "from-purple-500" },
  fuchsia: { text: "text-fuchsia-500", border: "hover:border-fuchsia-500/50", glow: "from-fuchsia-500/20 to-transparent", gradientFrom: "from-fuchsia-500" },
  teal:    { text: "text-teal-500",    border: "hover:border-teal-500/50",    glow: "from-teal-500/20 to-transparent",    gradientFrom: "from-teal-500" },
};

export function getAccent(color: AccentColor): AccentClasses {
  return MAP[color] ?? MAP.blue;
}

import { cn } from "@/lib/cn";
import { type AccentColor, getAccent } from "./accent";

export interface Stat {
  value: string;
  unit: string;
  label: string;
}

export interface StatBlockProps {
  heading: string;
  accentColor?: AccentColor;
  stats: Stat[];
}

export function StatBlock({ heading, accentColor = "blue", stats }: StatBlockProps) {
  const accent = getAccent(accentColor);
  return (
    <section className="py-32 bg-zinc-950 text-white w-full border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">{heading}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-x-0 lg:divide-x divide-zinc-800">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center">
              <span className={cn("text-6xl md:text-7xl font-bold mb-4 tracking-tighter", accent.text)}>
                {s.value}
                <span className="text-4xl md:text-5xl">{s.unit}</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

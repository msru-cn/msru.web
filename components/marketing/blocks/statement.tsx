import type { AccentColor } from "../accent";

export interface StatementProps {
  title: string;
  body?: string;
  accentColor?: AccentColor;
}

export function Statement({ title, body }: StatementProps) {
  return (
    <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-white">{title}</h2>
      {body && <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-4xl mx-auto">{body}</p>}
    </section>
  );
}

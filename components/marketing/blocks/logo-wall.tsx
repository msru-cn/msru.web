import Image from "next/image";

export interface LogoItem {
  name: string;
  src?: string;
}
export interface LogoWallProps {
  items: LogoItem[];
}

export function LogoWall({ items }: LogoWallProps) {
  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-10 opacity-70">
        {items.map((it) =>
          it.src ? (
            <Image key={it.name} src={it.src} alt={it.name} width={120} height={40} className="object-contain" />
          ) : (
            <span key={it.name} className="text-lg font-bold text-zinc-400 tracking-tight">
              {it.name}
            </span>
          ),
        )}
      </div>
    </section>
  );
}

import Image from "next/image";

export interface CaseItem {
  company: string;
  industry: string;
  result: string;
  quote: string;
  image: string;
}
export interface CaseListProps {
  cases: CaseItem[];
}

export function CaseList({ cases }: CaseListProps) {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        {cases.map((c) => (
          <div
            key={c.company}
            className="flex flex-col lg:flex-row rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 overflow-hidden"
          >
            <div className="relative w-full lg:w-2/5 min-h-[280px]">
              <Image src={c.image} alt={c.company} fill className="object-cover" />
            </div>
            <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center bg-zinc-50 dark:bg-zinc-900/50 space-y-4">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{c.industry}</span>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{c.company}</h3>
              <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{c.result}</p>
              <blockquote className="text-zinc-500 italic border-l-2 border-primary/30 pl-4">"{c.quote}"</blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

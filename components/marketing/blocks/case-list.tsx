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

/**
 * 案例列表 —— glass-stage 背景 + 玻璃卡片(左图右文)。明暗双主题自适应。
 */
export function CaseList({ cases }: CaseListProps) {
  return (
    <section className="glass-stage py-24 md:py-28">
      <div className="container mx-auto max-w-5xl space-y-10 px-6">
        {cases.map((c) => (
          <div key={c.company} className="glass glass-hover flex flex-col overflow-hidden rounded-[2.5rem] lg:flex-row">
            <div className="relative min-h-[280px] w-full lg:w-2/5">
              <Image src={c.image} alt={c.company} fill className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-center space-y-4 p-10 lg:p-14">
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-500">{c.industry}</span>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{c.company}</h3>
              <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{c.result}</p>
              <blockquote className="border-l-2 border-blue-500/40 pl-4 italic text-zinc-500 dark:text-zinc-400">
                “{c.quote}”
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

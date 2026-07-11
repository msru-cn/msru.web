import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface LegalDocProps {
  icon: LucideIcon;
  title: string;
  /** 页眉副标，如「最后更新：2026 年 1 月 1 日」。 */
  meta: string;
  children: ReactNode;
}

/**
 * 法律文档页模板 —— 收编 legal/{privacy,terms,sla,cookies} 共享的
 * 紧凑深色文档 hero（图标 + 标题 + 更新日期，pt-32 pb-16）
 * 与 prose 正文容器。正文以 children 传入。
 */
export function LegalDoc({ icon: Icon, title, meta, children }: LegalDocProps) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-16 bg-zinc-950">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <Icon className="size-8 text-primary mx-auto" aria-hidden="true" />
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">{title}</h1>
            <p className="text-zinc-400">{meta}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-3xl prose dark:prose-invert prose-zinc prose-headings:tracking-tight">
          {children}
        </div>
      </section>
    </div>
  );
}

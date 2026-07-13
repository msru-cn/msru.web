import type { AccentColor } from "../accent";

export interface StatementProps {
  title?: string;
  body?: string;
  accentColor?: AccentColor;
}

/**
 * 宣言 —— 大字居中断言。背景由整页唯一的 .page-stage 提供，
 * 本区块不再自画渐变。明暗双主题自适应。
 * 无 title 时降级为居中脚注（用于说明性小字）。
 */
export function Statement({ title, body }: StatementProps) {
  if (!title) {
    return (
      <section className="glass-stage relative overflow-hidden py-12 md:py-16">
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          {body && (
            <p className="mx-auto max-w-3xl text-balance text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {body}
            </p>
          )}
        </div>
      </section>
    );
  }
  return (
    <section className="glass-stage relative overflow-hidden py-32 md:py-40">
      <div className="relative mx-auto max-w-5xl space-y-8 px-6 text-center md:px-12">
        <h2 className="text-balance text-4xl font-bold tracking-tighter text-zinc-900 md:text-6xl dark:text-white">
          {title}
        </h2>
        {body && (
          <p className="mx-auto max-w-3xl text-balance text-xl leading-relaxed text-zinc-500 md:text-2xl dark:text-zinc-400">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}

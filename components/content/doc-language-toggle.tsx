import Link from "next/link";

export interface DocLanguageOption {
  /** 语言码（default 语言用 ""）。 */
  code: string;
  /** 展示名，如 "English" / "中文"。 */
  label: string;
  /** 是否为当前激活语言。 */
  active: boolean;
  /** 切到该语言的链接（保留当前路径，仅改 ?lang）。 */
  href: string;
}

/**
 * 文档语言切换 —— 玻璃药丸组。
 * 仅当该文档存在译文时由页面渲染（options.length > 1）。纯链接，无客户端 JS。
 */
export function DocLanguageToggle({ options }: { options: DocLanguageOption[] }) {
  if (options.length < 2) return null;
  return (
    <div className="mb-6 inline-flex items-center gap-1 rounded-full border border-fd-border bg-fd-card p-1 text-sm">
      {options.map((o) => (
        <Link
          key={o.code || "default"}
          href={o.href}
          scroll={false}
          aria-current={o.active ? "true" : undefined}
          className={
            o.active
              ? "rounded-full bg-fd-primary px-3 py-1 font-medium text-fd-primary-foreground"
              : "rounded-full px-3 py-1 text-fd-muted-foreground transition-colors hover:text-fd-foreground"
          }
        >
          {o.label}
        </Link>
      ))}
    </div>
  );
}

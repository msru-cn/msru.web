import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface DataTableColumn {
  key: string;
  header: string;
}

export interface DataTableProps<Row extends Record<string, ReactNode>> {
  columns: DataTableColumn[];
  rows: Row[];
  /** 用作 React key 的列名（行内唯一）。 */
  rowKey: string;
  caption?: string;
}

/**
 * 数据表 —— 收编 5 个页面字符级复制的对比/矩阵表
 * （eol / tco / trust/accessibility / trust/sub-processors / trust/compliance-matrix）。
 */
export function DataTable<Row extends Record<string, ReactNode>>({
  columns,
  rows,
  rowKey,
  caption,
}: DataTableProps<Row>) {
  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead className="bg-zinc-50 dark:bg-zinc-900">
            <tr>
              {columns.map((col) => (
                <th key={col.key} scope="col" className="p-4 text-xs font-bold text-zinc-500 uppercase">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {rows.map((row) => (
              <tr
                key={String(row[rowKey])}
                className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
              >
                {columns.map((col, i) => (
                  <td
                    key={col.key}
                    className={cn(
                      "p-4",
                      i === 0 ? "font-bold text-zinc-900 dark:text-white" : "text-zinc-500",
                    )}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

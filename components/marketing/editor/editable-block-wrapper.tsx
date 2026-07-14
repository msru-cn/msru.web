"use client";

import { ArrowDown, ArrowUp, Edit3, Plus, Trash2 } from "lucide-react";
import type { ReactNode } from "react";
import type { Block } from "@/lib/marketing/blocks-schema";

interface EditableBlockWrapperProps {
  index: number;
  total: number;
  block: Block;
  children: ReactNode;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onInsertAfter: () => void;
  onInsertBefore: () => void;
}

export function EditableBlockWrapper({
  index,
  total,
  block,
  children,
  onMoveUp,
  onMoveDown,
  onEdit,
  onDelete,
  onInsertAfter,
  onInsertBefore,
}: EditableBlockWrapperProps) {
  return (
    <div className="relative group my-4 transition-all">
      {/* 顶部插入按钮 (仅第一块展示顶部插入区，其余通过底部插入条完成) */}
      {index === 0 && (
        <div className="flex justify-center -mb-3 relative z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={onInsertBefore}
            className="flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-full shadow-lg border border-blue-400/30 transition-transform active:scale-95"
          >
            <Plus className="size-3" />
            在顶部插入积木
          </button>
        </div>
      )}

      {/* 区块悬浮与编辑高亮外框 */}
      <div className="relative rounded-2xl border border-transparent group-hover:border-blue-500/60 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all overflow-hidden">
        {/* 右上角浮动工具控制栏 */}
        <div className="absolute top-3 right-3 z-30 flex items-center gap-1 p-1 bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-700/60 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100">
          <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold uppercase text-blue-400 border-r border-slate-700/60 select-none">
            #{index + 1} {block.type}
          </span>

          <button
            type="button"
            onClick={onMoveUp}
            disabled={index === 0}
            title="上移"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/60 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowUp className="size-3.5" />
          </button>

          <button
            type="button"
            onClick={onMoveDown}
            disabled={index === total - 1}
            title="下移"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/60 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowDown className="size-3.5" />
          </button>

          <button
            type="button"
            onClick={onEdit}
            title="编辑内容与属性"
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-amber-300 hover:text-amber-200 hover:bg-amber-500/20 rounded-lg transition-colors"
          >
            <Edit3 className="size-3.5" />
            配置
          </button>

          <button
            type="button"
            onClick={onDelete}
            title="删除区块"
            className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/20 rounded-lg transition-colors"
          >
            <Trash2 className="size-3.5" />
          </button>
        </div>

        {/* 原生积木内容 */}
        <div className="relative z-10 pointer-events-none group-hover:pointer-events-auto">{children}</div>
      </div>

      {/* 底部插入按钮 */}
      <div className="flex justify-center -mt-3 relative z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={onInsertAfter}
          className="flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-full shadow-lg border border-blue-400/30 transition-transform active:scale-95"
        >
          <Plus className="size-3" />
          在此处下方插入新积木
        </button>
      </div>
    </div>
  );
}

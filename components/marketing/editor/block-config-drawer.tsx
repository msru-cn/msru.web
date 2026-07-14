"use client";

import { AlertCircle, Check, Code, FileText, Layers, Plus, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { type Block, blockSchema } from "@/lib/marketing/blocks-schema";
import { BLOCK_TEMPLATES } from "./block-templates";

/* ======================= 1. 积木块参数配置抽屉 ======================= */
interface BlockConfigDrawerProps {
  block: Block | null;
  index: number | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (index: number, updatedBlock: Block) => void;
}

export function BlockConfigDrawer({ block, index, isOpen, onClose, onSave }: BlockConfigDrawerProps) {
  const [mounted, setMounted] = useState(false);
  const [jsonString, setJsonString] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (block) {
      setJsonString(JSON.stringify(block, null, 2));
      setErrorMsg(null);
    }
  }, [block]);

  if (!mounted || !isOpen || block === null || index === null) return null;

  const handleApply = () => {
    try {
      const raw = JSON.parse(jsonString);
      const res = blockSchema.safeParse(raw);
      if (!res.success) {
        setErrorMsg(`格式校验失败：${res.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ")}`);
        return;
      }
      onSave(index, res.data);
      onClose();
    } catch (err) {
      setErrorMsg(`JSON 解析错误：${err instanceof Error ? err.message : String(err)}`);
    }
  };

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(jsonString);
      setJsonString(JSON.stringify(parsed, null, 2));
      setErrorMsg(null);
    } catch {
      setErrorMsg("无法格式化：JSON 语法存在错误");
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl h-full bg-slate-900/95 dark:bg-slate-950 border-l border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300">
        {/* 抽屉头部 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
              <Code className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">配置积木参数 #{index + 1}</h3>
              <p className="text-xs font-mono text-blue-400">类型: {block.type}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* 抽屉正文区 (JSON 编辑与快捷提示) */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Sparkles className="size-3.5 text-amber-400" />
              实时 JSON 协议配置（支持高亮结构化修改）
            </span>
            <button
              type="button"
              onClick={handleFormat}
              className="text-blue-400 hover:text-blue-300 underline font-mono"
            >
              一键美化格式
            </button>
          </div>

          <div className="relative flex-1 min-h-[360px] flex">
            <textarea
              value={jsonString}
              onChange={(e) => {
                setJsonString(e.target.value);
                if (errorMsg) setErrorMsg(null);
              }}
              spellCheck={false}
              className="w-full h-full p-4 bg-slate-950/80 border border-slate-800 focus:border-blue-500/60 rounded-2xl font-mono text-sm text-slate-200 leading-relaxed resize-none focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
            />
          </div>

          {errorMsg && (
            <div className="flex items-start gap-2 p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs leading-normal font-mono">
              <AlertCircle className="size-4 shrink-0 mt-0.5 text-rose-400" />
              <div className="flex-1 break-all">{errorMsg}</div>
            </div>
          )}
        </div>

        {/* 底部按钮栏 */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-800 bg-slate-900">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            取消
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="flex items-center gap-1.5 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-95"
          >
            <Check className="size-4" />
            确认更新此积木
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

/* ======================= 2. 插入积木模板库选择窗 ======================= */
interface AddBlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: Block) => void;
}

export function AddBlockModal({ isOpen, onClose, onSelectTemplate }: AddBlockModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  const categories = [
    { id: "all", label: "全部 21 种积木" },
    { id: "hero", label: "首屏与横幅" },
    { id: "content", label: "核心内容" },
    { id: "data", label: "量化指标" },
    { id: "conversion", label: "转化与表单" },
    { id: "interactive", label: "3D 与互动特效" },
  ];

  const filtered = BLOCK_TEMPLATES.filter((t) => selectedCategory === "all" || t.category === selectedCategory);

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[85vh] bg-slate-900/95 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* 头部 */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
              <Layers className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg">选择要插入的积木模板</h3>
              <p className="text-xs text-slate-400">提供全部 21 种高品质预设营销积木，点击立刻插入当前页面</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* 分类筛选条 */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-800/80 bg-slate-950/60 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 ${
                selectedCategory === c.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* 模板网格卡片 */}
        <div className="flex-1 p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((t) => (
            <button
              key={t.type + t.name}
              type="button"
              onClick={() => {
                onSelectTemplate(t.defaultData);
                onClose();
              }}
              className="group p-4 bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl cursor-pointer transition-all flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white text-sm group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    <Plus className="size-4 text-slate-400 group-hover:text-blue-400" />
                    {t.name}
                  </span>
                  <span className="px-2 py-0.5 bg-slate-800 group-hover:bg-blue-500/10 text-[10px] font-mono text-slate-400 group-hover:text-blue-400 rounded-md border border-slate-700/60 group-hover:border-blue-500/30 uppercase">
                    {t.type}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{t.description}</p>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-blue-400/80 group-hover:text-blue-400 font-medium">
                <span>快速插入模板 →</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}

/* ======================= 3. 页面 SEO 属性配置窗 ======================= */
interface MetaConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  meta: Record<string, unknown> | null;
  onSaveMeta: (updatedMeta: Record<string, unknown>) => void;
}

export function MetaConfigModal({ isOpen, onClose, meta, onSaveMeta }: MetaConfigModalProps) {
  const [mounted, setMounted] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (meta) {
      setTitle(typeof meta.title === "string" ? meta.title : "");
      setDescription(typeof meta.description === "string" ? meta.description : "");
    }
  }, [meta]);

  if (!mounted || !isOpen) return null;

  const handleSave = () => {
    onSaveMeta({ ...meta, title, description });
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-slate-900/95 border border-slate-800 rounded-3xl shadow-2xl p-6 flex flex-col gap-4 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20">
              <FileText className="size-5" />
            </div>
            <h3 className="font-semibold text-white text-base">编辑页面 SEO 设置</h3>
          </div>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="size-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4 py-2">
          <label className="flex flex-col gap-1.5 text-xs font-medium text-slate-300">
            页面标题 (Title)
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="例如：智能制造 MES 系统 | MSRU"
              className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-purple-500/60 rounded-xl text-sm text-white focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-xs font-medium text-slate-300">
            页面摘要描述 (Description)
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="用于搜索引擎优化 (SEO) 与分享卡片描述..."
              className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-purple-500/60 rounded-xl text-sm text-white focus:outline-none resize-none"
            />
          </label>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
          <button type="button" onClick={onClose} className="px-4 py-2 text-sm text-slate-400 hover:text-white">
            取消
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-xl shadow-lg transition-all"
          >
            保存配置
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

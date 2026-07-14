"use client";

import { AlertCircle, Check, Key, Layers, LogOut, Plus, Save, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { type ReactNode, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { renderBlock } from "@/components/marketing/block-renderer";
import { type Block, parsePage } from "@/lib/marketing/blocks-schema";
import { AddBlockModal, BlockConfigDrawer, MetaConfigModal } from "./block-config-drawer";
import { EditableBlockWrapper } from "./editable-block-wrapper";

interface PageEditorOverlayProps {
  slug: string;
  initialBlocks: unknown;
  initialMeta?: unknown;
  children: ReactNode;
}

export function PageEditorOverlay({ slug, initialBlocks, initialMeta, children }: PageEditorOverlayProps) {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [inputKey, setInputKey] = useState("");
  const [rememberKey, setRememberKey] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState<string | null>(null);

  const [blocks, setBlocks] = useState<Block[]>([]);
  const [meta, setMeta] = useState<Record<string, unknown>>({});

  const [activeEditIndex, setActiveEditIndex] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [insertIndex, setInsertIndex] = useState<number>(0);
  const [showMetaModal, setShowMetaModal] = useState(false);

  const [isSaving, setIsSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    setMounted(true);
    const saved = sessionStorage.getItem("CMS_API_KEY");
    if (saved) {
      setApiKey(saved);
    }
    const parsed = parsePage(initialBlocks);
    setBlocks(parsed);
    if (initialMeta && typeof initialMeta === "object") {
      setMeta(initialMeta as Record<string, unknown>);
    }
  }, [initialBlocks, initialMeta]);

  const handleStartEdit = useCallback(async () => {
    if (!apiKey) {
      setShowKeyModal(true);
      return;
    }
    try {
      const res = await fetch("/api/cms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ action: "verify_key" }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        sessionStorage.removeItem("CMS_API_KEY");
        setApiKey("");
        setShowKeyModal(true);
      } else {
        setIsEditing(true);
      }
    } catch {
      setShowKeyModal(true);
    }
  }, [apiKey]);

  useEffect(() => {
    const handler = () => {
      handleStartEdit();
    };
    window.addEventListener("start-page-edit", handler);
    return () => window.removeEventListener("start-page-edit", handler);
  }, [handleStartEdit]);

  const handleVerifyKey = async () => {
    if (!inputKey.trim() || isVerifying) return;
    setIsVerifying(true);
    setVerifyError(null);

    try {
      const res = await fetch("/api/cms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${inputKey.trim()}`,
        },
        body: JSON.stringify({ action: "verify_key" }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "鉴权验证失败，API Key 不匹配！");
      }

      if (rememberKey) {
        sessionStorage.setItem("CMS_API_KEY", inputKey.trim());
      } else {
        sessionStorage.removeItem("CMS_API_KEY");
      }
      setApiKey(inputKey.trim());
      setShowKeyModal(false);
      setInputKey("");
      setIsEditing(true);
    } catch (err) {
      setVerifyError(err instanceof Error ? err.message : "鉴权验证失败，API Key 不匹配或不正确！");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleExitEdit = () => {
    sessionStorage.removeItem("CMS_API_KEY");
    setApiKey("");
    setIsEditing(false);
    setActiveEditIndex(null);
    setStatusMsg({ type: "success", text: "已安全退出并锁定了编辑状态，下次编辑须重新输入 API Key 验证！" });
  };

  const handleMoveUp = (index: number) => {
    if (index <= 0) return;
    setBlocks((prev) => {
      const next = [...prev];
      const temp = next[index - 1];
      next[index - 1] = next[index];
      next[index] = temp;
      return next;
    });
  };

  const handleMoveDown = (index: number) => {
    if (index >= blocks.length - 1) return;
    setBlocks((prev) => {
      const next = [...prev];
      const temp = next[index + 1];
      next[index + 1] = next[index];
      next[index] = temp;
      return next;
    });
  };

  const handleDelete = (index: number) => {
    if (!window.confirm("确定要删除此营销积木块吗？")) return;
    setBlocks((prev) => prev.filter((_, i) => i !== index));
    if (activeEditIndex === index) setActiveEditIndex(null);
  };

  const handleSaveBlock = (index: number, updatedBlock: Block) => {
    setBlocks((prev) => {
      const next = [...prev];
      next[index] = updatedBlock;
      return next;
    });
  };

  const handleInsertTemplate = (template: Block) => {
    setBlocks((prev) => {
      const next = [...prev];
      next.splice(insertIndex, 0, template);
      return next;
    });
  };

  const handleSaveAndPublish = async () => {
    if (!apiKey) {
      setShowKeyModal(true);
      return;
    }
    setIsSaving(true);
    setStatusMsg(null);

    try {
      const res = await fetch("/api/cms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          action: "upsert_marketing",
          slug,
          blocks,
          meta,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || `HTTP 错误码: ${res.status}`);
      }

      setStatusMsg({ type: "success", text: "保存并实时同步发布成功！正在重构界面..." });
      setTimeout(() => {
        router.refresh();
        setIsEditing(false);
        setStatusMsg(null);
      }, 1200);
    } catch (err) {
      setStatusMsg({
        type: "error",
        text: `保存失败：${err instanceof Error ? err.message : String(err)}`,
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      {/* ===================== 2. 编辑模式下的悬浮主工具条 ===================== */}
      {isEditing &&
        mounted &&
        createPortal(
          <div className="fixed bottom-6 inset-x-0 z-[9999] flex justify-center px-4 pointer-events-none animate-in slide-in-from-bottom-6 duration-300">
            <div className="pointer-events-auto flex items-center gap-3 px-5 py-3 bg-slate-900/95 dark:bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 pr-3 border-r border-slate-800 text-xs font-medium text-emerald-400 select-none">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                可视化编辑模式 ({blocks.length} 块积木)
              </div>

              <button
                type="button"
                onClick={() => {
                  setInsertIndex(blocks.length);
                  setShowAddModal(true);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl text-xs font-medium border border-slate-700/60 transition-colors"
              >
                <Layers className="size-3.5 text-blue-400" />
                添加新积木
              </button>

              <button
                type="button"
                onClick={() => setShowMetaModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl text-xs font-medium border border-slate-700/60 transition-colors"
              >
                <Settings className="size-3.5 text-purple-400" />
                SEO 设置
              </button>

              <button
                type="button"
                onClick={handleSaveAndPublish}
                disabled={isSaving}
                className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all active:scale-95"
              >
                <Save className="size-4" />
                {isSaving ? "正在同步保存..." : "保存并发布"}
              </button>

              <button
                type="button"
                onClick={handleExitEdit}
                className="flex items-center gap-1.5 px-3 py-1.5 text-rose-400 hover:text-white hover:bg-rose-600/80 rounded-xl transition-all text-xs font-medium border border-rose-500/30"
                title="退出并安全锁定（清除本次会话中的 API Key）"
              >
                <LogOut className="size-3.5" />
                <span>退出并锁定</span>
              </button>
            </div>
          </div>,
          document.body,
        )}

      {/* ===================== 3. 状态与提示通知栏 ===================== */}
      {statusMsg &&
        mounted &&
        createPortal(
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] animate-in fade-in slide-in-from-top-6 duration-300">
            <div
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl shadow-2xl border text-xs font-medium backdrop-blur-xl ${
                statusMsg.type === "success"
                  ? "bg-emerald-950/90 border-emerald-500/40 text-emerald-300"
                  : "bg-rose-950/90 border-rose-500/40 text-rose-300"
              }`}
            >
              {statusMsg.type === "success" ? (
                <Check className="size-4 text-emerald-400" />
              ) : (
                <AlertCircle className="size-4 text-rose-400" />
              )}
              <span>{statusMsg.text}</span>
              <button
                type="button"
                onClick={() => setStatusMsg(null)}
                className="ml-2 underline opacity-60 hover:opacity-100"
              >
                关闭
              </button>
            </div>
          </div>,
          document.body,
        )}

      {/* ===================== 4. 密钥输入安全模态框 ===================== */}
      {showKeyModal &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 flex flex-col gap-4 animate-in zoom-in-95 duration-200">
              <div className="flex items-center gap-2 text-white font-semibold text-base">
                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
                  <Key className="size-5" />
                </div>
                <span>安全验证 / 输入密钥</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                为了保障官网数据安全，开启可视化积木编辑器需要验证环境变量中配置的{" "}
                <code className="text-blue-400 font-mono">CMS_API_KEY</code>。
              </p>
              <input
                type="password"
                value={inputKey}
                onChange={(e) => {
                  setInputKey(e.target.value);
                  if (verifyError) setVerifyError(null);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleVerifyKey()}
                placeholder="输入管理员 API Key..."
                className="px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm text-white focus:outline-none"
              />
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberKey}
                  onChange={(e) => setRememberKey(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-0 size-3.5"
                />
                <span>在本窗口内记住登录态 (退出或关闭标签自动清除)</span>
              </label>
              {verifyError && (
                <div className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs">
                  <AlertCircle className="size-4 shrink-0 text-rose-400" />
                  <span>{verifyError}</span>
                </div>
              )}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowKeyModal(false)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  取消
                </button>
                <button
                  type="button"
                  onClick={handleVerifyKey}
                  disabled={isVerifying || !inputKey.trim()}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold rounded-xl shadow-lg transition-all"
                >
                  {isVerifying ? "正在校检密钥..." : "解锁进入编辑"}
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}

      {/* ===================== 5. 页面正文内容渲染流 ===================== */}
      {!isEditing ? (
        children
      ) : (
        <div className="pb-36 pt-4 min-h-screen">
          {blocks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-slate-800 rounded-3xl m-8 text-center">
              <p className="text-slate-400 text-sm mb-4">当前页面尚未包含任何营销积木块</p>
              <button
                type="button"
                onClick={() => {
                  setInsertIndex(0);
                  setShowAddModal(true);
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition-all"
              >
                <Plus className="size-4" />
                立即插入第一块积木
              </button>
            </div>
          ) : (
            blocks.map((block, i) => (
              <EditableBlockWrapper
                key={`${block.type}-${JSON.stringify(block).slice(0, 60)}`}
                index={i}
                total={blocks.length}
                block={block}
                onMoveUp={() => handleMoveUp(i)}
                onMoveDown={() => handleMoveDown(i)}
                onEdit={() => setActiveEditIndex(i)}
                onDelete={() => handleDelete(i)}
                onInsertBefore={() => {
                  setInsertIndex(i);
                  setShowAddModal(true);
                }}
                onInsertAfter={() => {
                  setInsertIndex(i + 1);
                  setShowAddModal(true);
                }}
              >
                {renderBlock(block, i)}
              </EditableBlockWrapper>
            ))
          )}
        </div>
      )}

      {/* ===================== 6. 抽屉与模态框渲染区 ===================== */}
      <BlockConfigDrawer
        block={activeEditIndex !== null ? blocks[activeEditIndex] : null}
        index={activeEditIndex}
        isOpen={activeEditIndex !== null}
        onClose={() => setActiveEditIndex(null)}
        onSave={handleSaveBlock}
      />

      <AddBlockModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSelectTemplate={handleInsertTemplate}
      />

      <MetaConfigModal
        isOpen={showMetaModal}
        onClose={() => setShowMetaModal(false)}
        meta={meta}
        onSaveMeta={(updated) => setMeta(updated)}
      />
    </>
  );
}

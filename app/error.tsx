"use client";

import { StatusPage } from "@msru/ui/components/primitives";

/** Docs 错误边界 — 统一状态页 */
export default function DocsError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <StatusPage preset="server-error" onRetry={reset} />;
}

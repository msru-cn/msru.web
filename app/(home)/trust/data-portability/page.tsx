import { ArrowRight, FileOutput } from "lucide-react";
import Link from "next/link";

export default function DataPortabilityPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              <FileOutput className="size-3" /> Data Portability
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">数据可携权与导出</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              MSRU 承诺您对自身数据的完全控制权。随时导出、迁移或删除您的全部业务数据。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-3xl prose dark:prose-invert prose-zinc prose-headings:tracking-tight">
          <h2>导出格式</h2>
          <p>MSRU 支持将您的业务数据以以下标准格式批量导出：</p>
          <ul>
            <li>
              <strong>结构化数据：</strong>CSV、JSON、Parquet
            </li>
            <li>
              <strong>文档与附件：</strong>原始格式保留（PDF、图片、CAD 文件等）
            </li>
            <li>
              <strong>系统配置：</strong>YAML/JSON 格式的完整配置快照
            </li>
          </ul>

          <h2>导出流程</h2>
          <p>
            管理员可在「系统设置 → 数据管理 →
            批量导出」中发起导出请求。导出任务在后台异步执行，完成后通过邮件通知并提供安全的下载链接（72 小时有效）。
          </p>

          <h2>合规退网</h2>
          <p>
            如您决定终止服务，我们将在合同终止后 30 天内提供完整的数据导出包，并在 90
            天后从所有活跃系统中永久删除您的数据（法律要求的备份保留期除外）。
          </p>

          <h2>数据删除证明</h2>
          <p>应您的要求，我们将提供经审计方签章的数据删除证明书。</p>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">数据导出问题？</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition"
          >
            联系数据治理团队 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

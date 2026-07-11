import { FileOutput } from "lucide-react";
import { SubPageCta, SubPageHero } from "@/components/marketing";

export default function DataPortabilityPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: FileOutput, text: "Data Portability" }}
        title="数据可携权与导出"
        subtitle="MSRU 承诺您对自身数据的完全控制权。随时导出、迁移或删除您的全部业务数据。"
      />

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

      <SubPageCta title="数据导出问题？" cta={{ label: "联系数据治理团队", href: "/contact" }} />
    </div>
  );
}

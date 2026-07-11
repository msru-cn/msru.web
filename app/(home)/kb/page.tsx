import { ArrowRight, BookOpen, Search } from "lucide-react";
import Link from "next/link";

const KB_CATEGORIES = [
  { title: "快速入门指南", count: 24, desc: "产品安装、首次配置与基础操作教程" },
  { title: "常见问题排查", count: 156, desc: "按模块分类的高频问题与解决方案" },
  { title: "API 集成参考", count: 89, desc: "接口调用示例、错误码与最佳实践" },
  { title: "版本升级指南", count: 18, desc: "跨版本迁移步骤与数据兼容性说明" },
  { title: "安全与合规", count: 32, desc: "权限配置、加密策略与审计日志教程" },
  { title: "性能调优手册", count: 45, desc: "数据库优化、缓存策略与高并发配置" },
];

export default function KnowledgeBasePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
              <BookOpen className="size-3" /> Knowledge Base
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">技术知识库</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              搜索 300+ 篇经过工程师审核的技术文章，快速解决您在使用中遇到的一切问题。
            </p>
            <div className="max-w-lg mx-auto relative mt-8">
              <Search className="size-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="搜索知识库..."
                className="w-full h-14 pl-12 pr-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {KB_CATEGORIES.map((cat) => (
              <Link
                key={cat.title}
                href="/docs"
                className="group p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-primary/50 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-zinc-400">{cat.count} 篇</span>
                </div>
                <p className="text-sm text-zinc-500">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">没找到答案？</h2>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition"
          >
            联系技术支持 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

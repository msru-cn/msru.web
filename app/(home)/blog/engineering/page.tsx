import { ArrowRight, Calendar, Clock, Code2, GitBranch, Github, Search, Star, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const POSTS = [
  {
    title: "MSRU 存储引擎底层优化：从 B+ 树到 LSM 树的演进",
    excerpt: "深入分析在超大规模工业数据吞吐场景下，我们如何通过重构存储引擎将写入性能提升 3x。",
    author: "Chen Yao",
    avatar: "CY",
    date: "2024-05-15",
    readTime: "12 min",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "WebGPU 在工业数字孪生中的实时渲染实践",
    excerpt: "探讨如何利用次世代 Web 渲染技术在浏览器中实现百万级三角面片的丝滑流畅交互。",
    author: "Liu Ming",
    avatar: "LM",
    date: "2024-05-02",
    readTime: "8 min",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "工业网关零拷贝内存管理策略",
    excerpt: "如何在资源受限的边缘节点实现高效的数据包处理？解析我们的零拷贝 (Zero-Copy) 实现细节。",
    author: "Zhang Wei",
    avatar: "ZW",
    date: "2024-04-20",
    readTime: "15 min",
    category: "IoT / C++",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
];

export default function EngineeringBlogPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-zinc-950">
      {/* Geeky Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="font-mono text-[10px] leading-tight text-emerald-500 overflow-hidden h-full select-none italic tracking-tighter">
            {`import { SurrealDB } from "@msru/core";
const db = new SurrealDB();
async function factorySync() {
  const assets = await db.select("machine_state")
    .where("load > 85")
    .parallel();
  assets.map(a => a.propagate());
}
// Infinite loop mock
while (true) {
  process.stdout.write("MSRU Kernel: Optimizing storage...");
  await factorySync();
}`.repeat(20)}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest mx-auto">
              <Terminal className="size-3" /> Engineering Blog
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              代码、架构
              <br />与
              <span className="bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                工业未来
              </span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
              来自 MSRU 核心研发团队，分享我们在分布式系统、实时数据处理与工业渲染领域的深度实践。
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <span className="flex items-center gap-2">
                <Star className="size-4 text-amber-500" /> Open Source First
              </span>
              <span className="flex items-center gap-2">
                <GitBranch className="size-4 text-blue-500" /> 10k+ PRs merged
              </span>
            </div>

            <div className="flex items-center max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 mt-8 group focus-within:border-primary">
              <Search className="size-4 text-zinc-500 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="搜索技术文章、关键词或标签..."
                className="bg-transparent border-none focus:ring-0 text-white text-sm w-full font-medium placeholder:text-zinc-600 ml-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Grid */}
      <section className="py-24 border-y border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col bg-zinc-900/40 rounded-3xl border border-zinc-800 overflow-hidden hover:bg-zinc-900 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={post.image}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt={post.title}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-4 text-xs text-zinc-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-8 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-auto pt-6 border-t border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-linear-to-tr from-zinc-700 to-zinc-800 flex items-center justify-center text-[10px] font-bold text-white">
                        {post.avatar}
                      </div>
                      <span className="text-xs font-bold text-zinc-300">{post.author}</span>
                    </div>
                    <ArrowRight className="size-4 text-zinc-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OSS contribution Call to action */}
      <section className="py-24 bg-linear-to-b from-zinc-950 to-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="p-12 rounded-[3rem] bg-zinc-900 border border-zinc-800 space-y-8 relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 size-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              <Github className="size-12 text-white" />
              <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
                我们拥抱
                <br />
                <span className="text-zinc-500 italic">开源工业</span> 生态
              </h3>
              <p className="text-zinc-400 leading-relaxed font-normal">
                从核心通信驱动到高性能图表组件，MSRU 坚信开源是推动工业进步的最短路径。 探索我们维护的 50+ 个开源项目。
              </p>
              <Link
                href="https://github.com/msru-platform"
                className="inline-flex items-center gap-2 font-bold text-emerald-500 hover:gap-3 transition-all uppercase tracking-widest text-xs"
              >
                View on GitHub <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="space-y-8">
              <h4 className="text-lg font-bold text-zinc-500 uppercase tracking-widest">Tech Stack Roadmap</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  "Rust",
                  "TypeScript",
                  "SurrealDB",
                  "Three.js",
                  "WebGPU",
                  "Kubernetes",
                  "Erlang",
                  "Go",
                  "TensorFlow",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-5 py-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold hover:border-primary/50 transition-colors cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="pt-8">
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 italic">
                  "在这里，每一行提交的代码都有可能成为支撑全球数千台机械臂稳定运行的基石。"
                </p>
                <div className="flex items-center gap-2 text-zinc-400 font-bold uppercase tracking-tighter text-xs">
                  <Code2 className="size-4" /> JOIN THE DEV TEAM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

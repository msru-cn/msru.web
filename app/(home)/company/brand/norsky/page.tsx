"use client";

import {
  Activity,
  Aperture,
  ArrowRight,
  Camera,
  ChevronRight,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// --- Data & Content ---
const NAV_LINKS = [
  { name: "首页", href: "#home" },
  { name: "瞰界", href: "#aerial" },
  { name: "视作", href: "#video" },
  { name: "定光", href: "#custom" },
  { name: "联迹", href: "#contact" },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "城市脉搏",
    category: "城市规划",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "山河壮丽",
    category: "地质勘察",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "云端之上",
    category: "云层摄影",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "夜幕流光",
    category: "城市夜景",
    img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800",
  },
];

const SERVICES = [
  { icon: <Camera size={32} />, title: "高空航拍", desc: "8K影视级画质，捕捉城市天际线与自然奇观。" },
  { icon: <Layers size={32} />, title: "测绘建模", desc: "高精度倾斜摄影，生成实景三维模型与数据分析。" },
  { icon: <Activity size={32} />, title: "动态影像", desc: "FPV穿越机极速跟拍，带来第一人称视觉冲击。" },
];

const PROCESS_STEPS = [
  { num: "01", title: "需求洞察", desc: "深度沟通拍摄意图与应用场景" },
  { num: "02", title: "航线规划", desc: "勘察地形，定制专属飞行脚本" },
  { num: "03", title: "执行拍摄", desc: "双飞手协作，多机位同步作业" },
  { num: "04", title: "后期交付", desc: "专业调色剪辑，呈现完美成片" },
];

export default function NorskyPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="antialiased selection:bg-yellow-400 selection:text-black bg-[#0a0a0a] text-white min-h-screen font-sans">
      <style jsx global>{`
        body {
          background-color: #0a0a0a;
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(234, 179, 8, 0.3);
        }
        .clip-slant {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
        }
        .nav-backdrop {
          backdrop-filter: blur(10px);
          background-color: rgba(10, 10, 10, 0.85);
        }
      `}</style>

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "nav-backdrop border-b border-white/10 py-4" : "bg-transparent py-6"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 text-black flex items-center justify-center rounded-sm">
              <Aperture size={20} strokeWidth={3} />
            </div>
            <span>
              北空<span className="text-yellow-400">光影</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-gray-300 hover:text-yellow-400 transition-colors tracking-widest uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 bg-yellow-400 text-black font-bold text-sm hover:bg-white transition-colors uppercase tracking-wide"
            >
              立即预约
            </a>
          </div>

          <button type="button" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#0a0a0a] absolute top-full left-0 w-full border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-gray-300 hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 text-balance">
          <Image
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1920"
            alt="Aerial View"
            fill
            className="w-full h-full object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center mt-16">
          <div className="inline-block px-3 py-1 border border-yellow-400/50 rounded-full text-yellow-400 text-xs font-bold tracking-widest mb-6 animate-pulse">
            NORTH AIR LIGHT & SHADOW
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            看见，
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">从未见过的</span>
            <span className="text-yellow-400 text-glow">世界</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            以航拍视角重构视觉叙事，用专业影像技术捕捉城市与自然的壮阔之美。 北空光影，专注高空之眼，见证非凡时刻。
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#aerial"
              className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 group"
            >
              探索作品 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#video"
              className="px-8 py-4 border border-white/20 text-white font-bold text-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Play size={18} fill="currentColor" /> 观看Showreel
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
          <div className="w-px h-16 bg-linear-to-b from-transparent via-yellow-400 to-transparent"></div>
        </div>
      </section>

      {/* Aerial View Section */}
      <section id="aerial" className="py-24 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-3">
                <span className="w-2 h-12 bg-yellow-400 block"></span>
                瞰界 <span className="text-xl text-gray-500 font-light opacity-50">/ AERIAL VIEW</span>
              </h2>
              <p className="text-gray-400 max-w-lg">
                我们不只是拍摄照片，而是提供上帝视角的视觉解决方案。从城市规划到地质勘察，每一帧都极具商业与艺术价值。
              </p>
            </div>
            <div className="hidden md:block">
              <button
                type="button"
                className="text-yellow-400 border-b border-yellow-400 hover:text-white hover:border-white transition-colors pb-1"
              >
                查看更多案例
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-[#171717] p-8 border border-white/5 hover:border-yellow-400/50 transition-colors group"
              >
                <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform origin-left">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="group relative h-80 overflow-hidden cursor-pointer text-balance">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <p className="text-yellow-400 text-xs font-bold mb-1 tracking-wider uppercase">{item.category}</p>
                  <h3 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-balance">
                  <ChevronRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Works Section */}
      <section id="video" className="py-24 bg-[#171717] clip-slant pb-40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 text-balance">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              视作 <span className="text-yellow-400">.</span>
            </h2>
            <p className="text-gray-400">VIDEO PRODUCTION</p>
          </div>

          <div className="relative w-full aspect-video bg-black group cursor-pointer overflow-hidden border border-white/10 shadow-2xl shadow-yellow-400/5 text-balance">
            <Image
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600"
              alt="Video Cover"
              fill
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 text-balance">
                <Play fill="black" size={32} className="text-black" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-bold mb-2">城市宣传片：未来之境</h3>
              <p className="text-gray-300">客户：某市规划局 / 类型：城市形象片</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-yellow-400">#</span> 严谨的分镜脚本
              </h3>
              <p className="text-gray-400 leading-loose mb-6">
                从创意构思到分镜绘制，我们坚持“先纸上谈兵，再空中实战”。确保每一个运镜都有意义，每一帧画面都服务于叙事。
              </p>
              <ul className="space-y-4">
                {["地产项目展示", "文旅景区推广", "政企形象宣传"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-yellow-400"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 opacity-50 hover:opacity-100 transition-opacity">
              <div className="bg-white/5 p-4 h-32 border border-white/10 flex items-center justify-center text-xs text-gray-500">
                Shot 01: Establish
              </div>
              <div className="bg-white/5 p-4 h-32 border border-white/10 flex items-center justify-center text-xs text-gray-500">
                Shot 02: Pan Left
              </div>
              <div className="bg-white/5 p-4 h-32 border border-white/10 flex items-center justify-center text-xs text-gray-500">
                Shot 03: Zoom In
              </div>
              <div className="bg-white/5 p-4 h-32 border border-white/10 flex items-center justify-center text-xs text-gray-500">
                Shot 04: Reveal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Service Section */}
      <section id="custom" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                定光{" "}
                <span className="block text-xl text-gray-500 font-light mt-2 opacity-50 text-balance">
                  CUSTOMIZATION
                </span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                每一个项目都是独一无二的挑战。我们提供从创意策划到执行交付的全流程定制化服务。
              </p>
              <div className="p-6 bg-yellow-400/10 border border-yellow-400/20 rounded-sm">
                <h4 className="font-bold text-yellow-400 mb-2">为什么选择定制？</h4>
                <p className="text-sm text-gray-400">拒绝流水线作业，精准匹配您的品牌调性与传播需求。</p>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROCESS_STEPS.map((step) => (
                  <div
                    key={step.num}
                    className="bg-[#171717] p-8 border-l-4 border-yellow-400 relative overflow-hidden group"
                  >
                    <div className="absolute -right-4 -top-4 text-8xl font-black text-white/5 group-hover:text-yellow-400/10 transition-colors">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white relative z-10">{step.title}</h3>
                    <p className="text-gray-400 text-sm relative z-10">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#171717] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-8 text-white">
                联迹 <span className="text-yellow-400">.</span>
              </h2>
              <p className="text-gray-400 mb-10">
                准备好开启上帝视角了吗？请通过以下方式联系我们，或填写右侧表格预约。
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-yellow-400 shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">联系电话</h4>
                    <p className="text-gray-400 font-mono text-lg">184 0944 4773</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-yellow-400 shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">商务邮箱</h4>
                    <p className="text-gray-400 font-mono">ciroxu@norsky.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-yellow-400 shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">公司总部</h4>
                    <p className="text-gray-400">兰州市安宁区高新科技园 A座 19F</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 w-full h-48 bg-[#0a0a0a] border border-white/10 relative overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{
                    backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full relative z-10"></div>
                </div>
                <div className="absolute bottom-2 right-2 text-xs text-gray-500 font-mono">
                  GPS: 39.9042° N, 116.4074° E
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] p-8 md:p-12 border-t-4 border-yellow-400">
              <h3 className="text-2xl font-bold mb-6 text-white text-balance">项目预约咨询</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="user-name"
                      className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide"
                    >
                      您的姓名
                    </label>
                    <input
                      id="user-name"
                      type="text"
                      className="w-full bg-[#171717] border border-white/10 p-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all font-sans"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="user-phone"
                      className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide"
                    >
                      联系方式
                    </label>
                    <input
                      id="user-phone"
                      type="tel"
                      className="w-full bg-[#171717] border border-white/10 p-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all font-mono"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="shoot-type"
                    className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide"
                  >
                    拍摄需求 / 行业
                  </label>
                  <select
                    id="shoot-type"
                    className="w-full bg-[#171717] border border-white/10 p-3 text-gray-300 focus:outline-none focus:border-yellow-400 transition-all font-sans"
                  >
                    <option>地产建筑</option>
                    <option>城市规划</option>
                    <option>企业宣传</option>
                    <option>文旅景区</option>
                    <option>其他定制</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="project-desc"
                    className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide"
                  >
                    项目简述
                  </label>
                  <textarea
                    id="project-desc"
                    rows={4}
                    className="w-full bg-[#171717] border border-white/10 p-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all font-sans"
                    placeholder="请简要描述您的拍摄需求..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-yellow-400 text-black font-black text-lg hover:bg-white transition-colors uppercase tracking-widest mt-4"
                >
                  提交需求
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500">
              <span className="font-bold text-white mr-2">北空光影</span>© 2024 North Air Light & Shadow. All rights
              reserved.
            </div>
            <div className="flex gap-6">
              <button type="button" className="text-gray-500 hover:text-yellow-400 transition-colors">
                隐私政策
              </button>
              <button type="button" className="text-gray-500 hover:text-yellow-400 transition-colors">
                服务条款
              </button>
              <div className="flex gap-4 ml-4">
                <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

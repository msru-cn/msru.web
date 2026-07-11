import {
  ArrowRight,
  Binary,
  CloudRain,
  Database,
  Droplets,
  Globe2,
  Layers,
  Leaf,
  LineChart,
  Map as MapIcon,
  Microscope,
  RefreshCcw,
  Router,
  ServerCog,
  Settings,
  ShieldCheck,
  Signal,
  Sprout,
  Terminal,
  ThermometerSun,
  Tractor,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// 静态模拟日志数据，用于服务端渲染
const MOCK_LOGS = [
  {
    id: "a1b2c3",
    time: "12:30:45",
    topic: "greenhouse_A/soil_cluster",
    payload: "{ temp: 24.5°C, EC: 1.25, pH: 6.2 }",
    ack: 5,
  },
  {
    id: "d4e5f6",
    time: "12:30:47",
    topic: "open_field_B/weather_station",
    payload: "{ humidity: 65%, wind: 2.4m/s }",
    ack: 8,
  },
  { id: "g7h8i9", time: "12:30:49", topic: "test_plot_C/par_sensor", payload: "{ light: 1200lux, UV: 3 }", ack: 4 },
  {
    id: "j0k1l2",
    time: "12:30:51",
    topic: "greenhouse_A/par_sensor",
    payload: "{ CO2: 450ppm, temp: 23.8°C }",
    ack: 7,
  },
  {
    id: "m3n4o5",
    time: "12:31:02",
    topic: "open_field_B/soil_cluster",
    payload: "{ moisture: 42%, temp: 19.5°C }",
    ack: 6,
  },
  { id: "p6q7r8", time: "12:31:15", topic: "greenhouse_A/weather_station", payload: "{ pressure: 1013hPa }", ack: 3 },
  { id: "s9t0u1", time: "12:31:22", topic: "test_plot_C/soil_cluster", payload: "{ ph: 6.5, EC: 1.10 }", ack: 5 },
  {
    id: "v2w3x4",
    time: "12:31:35",
    topic: "greenhouse_A/irrigation_ctrl",
    payload: "{ valve: open, flow: 12L/min }",
    ack: 9,
  },
];

export default function SmartAgriPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-zinc-950 text-zinc-50 overflow-x-hidden selection:bg-emerald-500/30">
      {/* 1. 极致震撼的 HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden border-b border-zinc-800/50">
        {/* 背景真实场景大图融合 - 农业科技园航拍 */}
        <Image
          src="https://images.unsplash.com/photo-1586771107445-d3afeb0a382c?q=80&w=2070&auto=format&fit=crop"
          alt="智慧农业园区"
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none"
        />

        {/* 背景动态光晕 - 农业科技感 (Emerald & Teal) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] md:w-[1200px] md:h-[700px] bg-emerald-500/15 dark:bg-emerald-600/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 left-10 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero 内容 */}
        <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-sm mb-8 ring-1 ring-emerald-500/20 backdrop-blur-sm">
            <Leaf className="w-4 h-4" /> 500强企业级智慧农业全栈底座
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-8 leading-[1.1] text-balance shadow-black drop-shadow-2xl">
            从云端大脑到， <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">
              真实的土壤。
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-12 text-balance drop-shadow-md">
            融合世界级 IoT 底座、前沿 AI 算法与 3D
            数字孪生技术。为您提供涵盖高精度传感设备与全功能温室试验田的“端到端”交付，赋能产业升级与前沿农科实验。
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#demo"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white text-lg font-medium hover:scale-105 transition-transform shadow-2xl shadow-emerald-600/20 hover:shadow-emerald-600/40"
            >
              预约试验田考察
            </a>
            <a
              href="#docs"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-zinc-100 text-lg font-medium hover:bg-zinc-800 transition-colors"
            >
              查看解决方案手册 <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 悬浮的 农业数据网关 Mockup 视觉元素 */}
        <div className="z-10 relative mt-24 w-full max-w-6xl mx-auto perspective-1000">
          <div className="relative aspect-21/9 rounded-2xl md:rounded-[2.5rem] bg-zinc-950/90 backdrop-blur-xl border border-zinc-700/50 shadow-2xl shadow-emerald-500/20 overflow-hidden group">
            {/* 模拟顶栏 */}
            <div className="absolute top-0 inset-x-0 h-10 bg-white/5 backdrop-blur-md border-b border-zinc-800/50 flex items-center px-4 gap-2 z-20">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-zinc-400">agri-iot-gateway-01 {/* stream logs */}</span>
            </div>
            {/* 模拟终端数据流 */}
            <div className="absolute top-12 bottom-0 inset-x-0 p-6 font-mono text-sm leading-relaxed overflow-hidden z-20">
              <div className="text-emerald-400 opacity-80">
                {MOCK_LOGS.map((log) => (
                  <div key={log.id} className="flex gap-4 mb-2 animate-fade-in-up">
                    <span className="text-zinc-500">[{log.time}]</span>
                    <span className="text-teal-400">RCV</span>
                    <span className="text-zinc-300">
                      topic: <span className="text-emerald-300">{log.topic}</span>
                    </span>
                    <span className="text-amber-300 ml-auto hidden md:inline-block drop-shadow-md">
                      payload: {log.payload}
                    </span>
                    <span className="text-zinc-500 hidden lg:inline-block">--&gt; ACK ms: {log.ack}</span>
                  </div>
                ))}
              </div>

              {/* 中央感知动效 */}
              <div className="absolute top-12 bottom-0 inset-x-0 p-6 font-mono text-sm leading-relaxed overflow-hidden flex items-center justify-center pointer-events-none opacity-30">
                <div className="relative flex items-center justify-center w-full h-full">
                  {Array.from({ length: 6 }, (_, i) => i).map((id) => (
                    <div
                      key={`signal-${id}`}
                      className="absolute rounded-full border border-emerald-500/30 opacity-0 group-hover:animate-[ping_4s_ease-out_infinite]"
                      style={{
                        width: `${(id + 1) * 100}px`,
                        height: `${(id + 1) * 100}px`,
                        animationDelay: `${id * 0.5}s`,
                      }}
                    />
                  ))}
                  <div className="relative w-24 h-24 bg-zinc-900 border border-emerald-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-500 z-10">
                    <Sprout className="w-10 h-10 text-emerald-400" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* 内部隐约透出的网关硬件大图 - 工业级控制柜 */}
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
              alt="硬件控制柜"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity z-0 group-hover:opacity-20 transition-opacity duration-1000"
            />
          </div>
        </div>
      </section>

      {/* 2. 海量数据支撑 - Apple 风格大字 */}
      <section className="py-24 bg-zinc-950 text-white w-full border-b border-b-zinc-900 border-t border-t-emerald-900/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 tracking-tight text-zinc-100">数据，孕育未来的丰收。</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-x-0 lg:divide-x divide-zinc-800">
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-emerald-400 mb-4 tracking-tighter">
                500<span className="text-4xl md:text-5xl text-teal-400">强</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">级企业 IoT 底座支撑</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-emerald-400 mb-4 tracking-tighter">
                24<span className="text-4xl md:text-5xl text-zinc-500">/</span>7
              </span>
              <span className="text-zinc-400 font-medium text-lg">全天候微环境感知网络</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-emerald-400 mb-4 tracking-tighter">
                1<span className="text-4xl md:text-5xl text-teal-400">:</span>1
              </span>
              <span className="text-zinc-400 font-medium text-lg">高精度农场数字孪生</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-emerald-400 mb-4 tracking-tighter">
                100<span className="text-4xl md:text-5xl text-teal-400">%</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">软硬件与实体试验田闭环</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 设计哲学宣言 */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          不止于屏幕上的数字，
          <br />
          更扎根于真实的土壤。
        </h2>
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-4xl mx-auto">
          我们深知，纯粹的软件在农业面前往往显得苍白。因此，我们拒绝多家供应商的拼凑。从底层多维传感器、工业级通讯网关，到云端
          AI 决策引擎，再到真实的<strong>线下温室大棚试验田</strong>，我们提供的是一套历经泥土检验的软硬一体化闭环方案。
        </p>
      </section>

      {/* 4. 八宫格超大 BENTO GRID - 核心能力 */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          {/* Card 1: 专属 AI 引擎 (Large) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 relative p-10 bg-zinc-900/80 rounded-[2.5rem] border border-zinc-800 overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

            {/* 融入农业AI大屏图片作为背景 - 数据可视化大屏 */}
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="AI指挥大屏"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen group-hover:scale-105 transition-transform duration-700"
            />

            <div className="relative z-20">
              <Database className="w-12 h-12 text-emerald-400 mb-8 drop-shadow-md" />
              <h3 className="text-3xl font-bold mb-4 text-zinc-100 drop-shadow-md">农业专属 AI 与决策引擎</h3>
              <p className="text-zinc-300 text-lg leading-relaxed max-w-md drop-shadow-md">
                不仅是数据收集，更是智能决策。通过多模态时序数据分析，实现农作物病虫害视觉预警、水肥一体化动态智能调度、以及产量的精准预测，将传统农人的“经验直觉”转化为可复制的数字化模型。
              </p>
            </div>
            {/* Visual element */}
            <div className="absolute -bottom-10 -right-10 w-96 h-80 bg-zinc-900/80 backdrop-blur-md rounded-2xl transform rotate-12 flex flex-col gap-4 p-6 opacity-80 group-hover:-translate-y-4 group-hover:rotate-6 transition-all duration-700 border border-zinc-700 z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <ThermometerSun className="w-6 h-6 text-zinc-500" />
                <div className="w-16 h-8 bg-zinc-700 rounded" />
                <ArrowRight className="w-5 h-5 text-emerald-500" />
                <div className="h-8 flex-1 bg-emerald-500/30 rounded border border-emerald-500/50" />
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="w-6 h-6 text-zinc-500" />
                <div className="w-24 h-8 bg-zinc-700 rounded" />
                <ArrowRight className="w-5 h-5 text-emerald-500" />
                <div className="h-8 flex-1 bg-teal-500/30 rounded border border-teal-500/50" />
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="w-6 h-6 text-zinc-500" />
                <div className="w-12 h-8 bg-zinc-700 rounded" />
                <ArrowRight className="w-5 h-5 text-emerald-500" />
                <div className="h-8 flex-1 bg-emerald-500/30 rounded border border-emerald-500/50" />
              </div>
            </div>
          </div>

          {/* Card 2: IoT 底座 (Medium) 带有硬件背景图 */}
          <div className="md:col-span-1 lg:col-span-2 row-span-1 relative bg-zinc-900/60 rounded-[2.5rem] border border-zinc-800 overflow-hidden group hover:border-emerald-500/30 transition-colors flex">
            {/* 硬件背景图 - 工业级电路硬件 */}
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
              alt="IoT硬件设备"
              fill
              className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-linear-to-r from-zinc-900 via-zinc-900/90 to-transparent" />

            <div className="relative z-10 p-10 max-w-lg">
              <div className="flex items-center gap-4 mb-4">
                <ServerCog className="w-10 h-10 text-teal-400" />
                <h3 className="text-2xl font-bold text-zinc-100 drop-shadow-md">世界级 IoT 物联网底座</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed drop-shadow-sm">
                采用 500
                强企业级底层架构，支持海量传感器节点高并发接入与毫秒级延迟处理。无论是千亩农场的复杂气象站，还是温室大棚内的密集电磁阀，均能实现
                24/7 稳定互联。
              </p>
            </div>
          </div>

          {/* Card 3: 传感网络 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-900/40 rounded-[2.5rem] border border-zinc-800 overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-bl from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Signal className="w-10 h-10 text-emerald-400 mb-6" />
            <h3 className="text-xl font-bold mb-3 text-zinc-100">全矩阵环境感知</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              提供工业级精度的土壤温湿度、EC 值、PH 值、光合有效辐射 (PAR) 及气象要素感知网络，无死角捕捉微环境异动。
            </p>
          </div>

          {/* Card 4: 数字孪生 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-900/40 rounded-[2.5rem] border border-zinc-800 overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Layers className="w-10 h-10 text-teal-400 mb-6" />
            <h3 className="text-xl font-bold mb-3 text-zinc-100">3D 农场数字孪生</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              将物理农场完整映射至虚拟空间。高保真可视化呈现地块布局、设备状态与作物长势，赋予管理者“上帝视角”。
            </p>
          </div>

          {/* Card 5: 气候预警 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-900/40 rounded-[2.5rem] border border-zinc-800 overflow-hidden group hover:border-emerald-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <CloudRain className="w-12 h-12 text-zinc-500 group-hover:text-emerald-400 transition-colors mb-4" />
            <h3 className="text-lg font-bold text-zinc-200">灾害性气候预警</h3>
          </div>

          {/* Card 6: 边缘策略 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-900/40 rounded-[2.5rem] border border-zinc-800 overflow-hidden group hover:border-teal-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <Router className="w-12 h-12 text-zinc-500 group-hover:text-teal-400 transition-colors mb-4" />
            <h3 className="text-lg font-bold text-zinc-200">边缘断网自治</h3>
          </div>

          {/* Card 7: 实体试验田 (Long) 带有大棚背景图 */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 relative bg-zinc-900/60 rounded-[2.5rem] border border-zinc-800 overflow-hidden group hover:border-emerald-500/30 transition-colors flex">
            {/* 温室大棚背景图 - 现代无土栽培温室 */}
            <Image
              src="https://images.unsplash.com/photo-1530836369250-ef71a3f5e902?q=80&w=2000&auto=format&fit=crop"
              alt="温室试验田"
              fill
              className="absolute right-0 top-0 h-full w-3/4 object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-linear-to-r from-zinc-900 via-zinc-900/80 to-transparent" />

            <div className="relative z-10 p-10 max-w-lg">
              <div className="flex items-center gap-4 mb-4">
                <MapIcon className="w-10 h-10 text-emerald-400" />
                <h3 className="text-2xl font-bold text-zinc-100 drop-shadow-md">配套实体温室大棚试验田</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed drop-shadow-sm">
                纸上得来终觉浅。我们拥有实体温室试验田基建，提供软硬一体“拎包入驻”体验。科研模型或硬件方案可直接在真实的农业场景中进行跑通与抗压验证。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 深度特写 A：产业升级 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-sm border border-emerald-500/20 shadow-inner">
              <Tractor className="w-4 h-4" /> 场景一：驱动现代农业产业升级
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
              将专家经验，转化为可复制的代码。
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              面向现代农业企业、合作社与产业园区，我们帮助您摆脱对传统人力和“老天爷”的重度依赖。依托 AI 与 IoT
              平台，实现跨区域基地的标准化、规模化、自动化管理。
            </p>
            <ul className="space-y-6 mt-8">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <Droplets className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-zinc-200 mb-1">降本增效与精准水肥</h4>
                  <p className="text-zinc-400">
                    通过传感器反馈闭环控制电磁阀，按需精准滴灌施肥，大幅降低水肥成本与能源消耗。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <Globe2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-zinc-200 mb-1">全局可视化指挥调度</h4>
                  <p className="text-zinc-400">
                    借助数字大屏，农场主在运营中心即可实时掌控数千亩土地的微观环境，一键下发区域控制指令。
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 w-full lg:w-1/2 relative">
            {/* 包含真实产业场景底图的仪表盘 - 农机自动化作业 */}
            <div className="aspect-4/3 rounded-[2rem] bg-zinc-950 border border-zinc-700 p-8 flex items-center justify-center overflow-hidden group shadow-[0_20px_50px_rgba(16,185,129,0.15)] relative">
              <Image
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop"
                alt="产业升级场景"
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

              {/* 模拟仪表盘 UI */}
              <div className="w-full h-full flex flex-col gap-4 relative z-10 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-2xl">
                <div className="flex justify-between items-center bg-zinc-950/70 backdrop-blur-md p-4 rounded-xl border border-zinc-700 shadow-lg">
                  <div className="flex gap-2 items-center text-zinc-100">
                    <Leaf className="w-5 h-5 text-emerald-500" />
                    <span>1号智能温室</span>
                  </div>
                  <span className="text-emerald-400 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>{" "}
                    运行良好
                  </span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="bg-zinc-950/70 backdrop-blur-md rounded-xl border border-zinc-700 p-4 flex flex-col justify-center items-center shadow-lg">
                    <span className="text-zinc-400 text-sm mb-2">土壤湿度</span>
                    <span className="text-3xl font-bold text-teal-400">
                      42<span className="text-lg">%</span>
                    </span>
                  </div>
                  <div className="bg-zinc-950/70 backdrop-blur-md rounded-xl border border-zinc-700 p-4 flex flex-col justify-center items-center shadow-lg">
                    <span className="text-zinc-400 text-sm mb-2">光照强度</span>
                    <span className="text-3xl font-bold text-amber-400">
                      32k<span className="text-lg">lx</span>
                    </span>
                  </div>
                  <div className="col-span-2 bg-zinc-950/70 backdrop-blur-md rounded-xl border border-zinc-700 p-4 flex items-center justify-center relative overflow-hidden shadow-lg">
                    <LineChart className="w-full h-full text-zinc-600 absolute opacity-30" />
                    <div className="text-center z-10">
                      <span className="block text-zinc-300 mb-1 drop-shadow-md">自动灌溉策略</span>
                      <span className="text-emerald-300 border border-emerald-500/50 bg-emerald-500/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        已触发执行
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 深度特写 B：科研转化 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 font-medium text-sm border border-teal-500/20 shadow-inner">
              <Microscope className="w-4 h-4" /> 场景二：赋能农业科学研究
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
              让前沿算法，在温室里结出果实。
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              面向农科院、高校与育种机构。科研团队无需从零搭建基础设施，您的模型算法与理论成果可直接接入我们的平台，在真实的试验田环境中进行验证。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-teal-500/30 transition-colors">
                <Database className="w-8 h-8 text-teal-500 mb-4" />
                <h4 className="font-semibold text-lg text-zinc-200 mb-2">高保真数据采集</h4>
                <p className="text-zinc-400 text-sm">满足科研级苛刻要求，无死角记录环境胁迫下的多维表型数据。</p>
              </div>
              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-teal-500/30 transition-colors">
                <Settings className="w-8 h-8 text-teal-500 mb-4" />
                <h4 className="font-semibold text-lg text-zinc-200 mb-2">微环境控制实验</h4>
                <p className="text-zinc-400 text-sm">精确定义光照、温湿度及营养液配比，轻松开展严谨的对照实验。</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            {/* 包含真实科研实验室场景底图的组件 - 科研环境 */}
            <div className="aspect-4/3 rounded-[2rem] bg-zinc-950 border border-zinc-700 flex items-center justify-center relative overflow-hidden shadow-[0_20px_50px_rgba(20,184,166,0.15)] group">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="科研实验室场景"
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-linear-to-bl from-teal-950/80 via-zinc-950/60 to-zinc-950" />

              {/* 模拟 AI 模型验证动效 */}
              <div className="relative z-10 flex flex-col items-center bg-zinc-900/40 backdrop-blur-md p-8 rounded-3xl border border-zinc-700/50 shadow-2xl">
                <div className="w-32 h-32 rounded-full border border-teal-500/30 flex items-center justify-center relative mb-6 bg-zinc-950/50 shadow-inner">
                  <div className="absolute inset-0 rounded-full border-2 border-teal-400 border-t-transparent animate-spin drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
                  <Binary className="w-12 h-12 text-teal-400 drop-shadow-md" />
                </div>
                <div className="flex gap-3">
                  <span className="px-4 py-1.5 bg-zinc-950/80 text-zinc-200 rounded-full text-sm border border-zinc-600 shadow-md">
                    模型参数同步中
                  </span>
                  <span className="px-4 py-1.5 bg-teal-500/20 text-teal-300 rounded-full text-sm border border-teal-500/40 shadow-md font-medium">
                    下发生长策略
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ 常见问题 */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full border-t border-zinc-800/80">
        <h2 className="text-3xl font-bold mb-12 text-center text-zinc-100">核心优势与落地释疑</h2>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800 transition-colors hover:border-emerald-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-zinc-200">
              <Layers className="w-5 h-5 text-emerald-500" /> 你们的平台与市面上的普通农业 SAAS 有何不同？
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              底层逻辑的代差。我们采用的是 <strong>500强级别工业物联网架构</strong> 降维打击，而非简单的 Web
              表单系统。它能支撑十万级传感器的超低延迟并发，确保控制指令毫秒级触达硬件，这在极其考验稳定性的水肥控制中是致命的护城河。
            </p>
          </div>
          <div className="p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800 transition-colors hover:border-emerald-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-zinc-200">
              <ShieldCheck className="w-5 h-5 text-emerald-500" /> 科研机构入驻试验田，数据资产如何归属？
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              绝对的数据主权。平台支持私有化部署隔离与多租户权限管控。您的实验数据、作物表型特征库及调优后的 AI
              模型参数完全归属贵方，我们仅提供高保真的算力底座与环境容器。
            </p>
          </div>
          <div className="p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800 transition-colors hover:border-emerald-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-zinc-200">
              <RefreshCcw className="w-5 h-5 text-emerald-500" /> 现有的老旧温室大棚和水泵可以接入吗？
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              完全可以。我们的边缘网关内置丰富的工控协议解析，配备外置的继电器与数据采集模块，能够以极低的改造成本将老旧风机、水泵、卷帘机数字化上云。
            </p>
          </div>
        </div>
      </section>

      {/* 8. 巨型底部 CTA */}
      <section className="relative py-32 px-6 overflow-hidden bg-emerald-950 text-white border-t-4 border-teal-500">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/30 rounded-[100%] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <MapIcon className="w-20 h-20 mx-auto mb-8 text-teal-400 opacity-80" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            从数字代码，
            <br />
            到万亩良田。
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100/80 mb-12 max-w-2xl mx-auto">
            停止碎片化的硬件拼凑。选择全栈软硬一体架构，即刻申请试验田实地考察与系统演示。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="h-16 px-10 inline-flex items-center justify-center rounded-full bg-white text-emerald-950 text-xl font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              预约系统演示与实地考察
            </Link>
            <Link
              href="/solutions"
              className="h-16 px-10 inline-flex items-center justify-center rounded-full bg-transparent border-2 border-teal-500/50 text-white text-xl font-medium hover:bg-teal-500/10 transition-colors"
            >
              获取行业解决方案 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import {
  ActivitySquare,
  ArrowRight,
  Binary,
  Cable,
  Database,
  Globe2,
  HardDrive,
  Layers,
  Microchip,
  Radio,
  RadioTower,
  RefreshCcw,
  Router,
  ServerCog,
  Settings,
  ShieldAlert,
  Signal,
  Terminal,
  WifiHigh,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function IoTPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-purple-500/30">
      {/* 1. 极致震撼的 HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden border-b border-border/50">
        {/* 背景动态光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] md:w-[1200px] md:h-[700px] bg-purple-500/15 dark:bg-purple-600/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 left-10 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero 内容 */}
        <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 font-semibold text-sm mb-8 ring-1 ring-purple-500/20 backdrop-blur-sm">
            <RadioTower className="size-4" /> 新一代边缘云协同物联基座
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-8 leading-[1.1] text-balance">
            用数据重塑， <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-fuchsia-400 dark:from-purple-400 dark:to-fuchsia-300">
              物理世界。
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-balance">
            这不仅是一个采集盒，而是具备规则过滤与缓存重传的工业神经中枢。 内置 300+ 原生工控协议，支持公有云级别千万
            QPS 消息吞吐，让厂房里的每一台老旧机床，跃升上云。
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-purple-600 text-white text-lg font-medium hover:scale-105 transition-transform shadow-2xl shadow-purple-600/20 hover:shadow-purple-600/40"
            >
              申请测试网关
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto h-14 px-10 inline-flex items-center justify-center rounded-full bg-transparent border border-border text-foreground text-lg font-medium hover:bg-muted transition-colors"
            >
              查看协议支持列表 <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>

        {/* 悬浮的 Broker Mockup 视觉元素 */}
        <div className="z-10 relative mt-24 w-full max-w-6xl mx-auto perspective-1000">
          <div className="relative aspect-21/9 rounded-2xl md:rounded-[2.5rem] bg-zinc-950 border border-zinc-800 shadow-2xl shadow-purple-500/10 overflow-hidden group">
            {/* 模拟顶栏 */}
            <div className="absolute top-0 inset-x-0 h-10 bg-white/5 dark:bg-white/5 backdrop-blur-md border-b border-zinc-800/50 flex items-center px-4 gap-2">
              <Terminal className="size-4 text-purple-400" />
              <span className="text-xs font-mono text-zinc-400">mqtt-broker-cluster-01 {/* stream logs */}</span>
            </div>
            {/* 模拟终端数据流 */}
            <div className="absolute top-12 bottom-0 inset-x-0 p-6 font-mono text-sm leading-relaxed overflow-hidden">
              <div className="text-purple-400 opacity-80 group-hover:-translate-y-4 transition-transform duration-1000">
                {Array.from({ length: 10 }, (_, i) => i).map((id) => (
                  <div key={`log-${id}`} className="flex gap-4 mb-2">
                    <span className="text-zinc-600">[{new Date().toISOString().split("T")[1].slice(0, -1)}]</span>
                    <span className="text-emerald-400">INFO</span>
                    <span className="text-zinc-300">
                      topic: <span className="text-purple-300">machine/{Math.floor(Math.random() * 1000)}/spindle</span>
                    </span>
                    <span className="text-amber-300 ml-auto hidden md:inline-block">
                      payload: {"{"} temp: {(Math.random() * 80).toFixed(1)}, rpm: {Math.floor(Math.random() * 12000)}{" "}
                      {"}"}
                    </span>
                    <span className="text-zinc-500 hidden lg:inline-block">
                      --&gt; ACK ms: {Math.floor(Math.random() * 5)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute top-12 bottom-0 inset-x-0 p-6 font-mono text-sm leading-relaxed overflow-hidden flex items-center justify-center pointer-events-none opacity-20">
                <div className="relative flex items-center justify-center size-full">
                  {Array.from({ length: 6 }, (_, i) => i).map((id) => (
                    <div
                      key={`signal-${id}`}
                      className="absolute rounded-full border border-purple-500/20 opacity-0 group-hover:animate-[wave_4s_ease-out_infinite]"
                      style={{
                        width: `${(id + 1) * 100}px`,
                        height: `${(id + 1) * 100}px`,
                        animationDelay: `${id * 0.5}s`,
                      }}
                    />
                  ))}
                  <div className="relative size-24 bg-zinc-900 border border-purple-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_20px_var(--color-purple-500)] group-hover:scale-110 transition-transform duration-500 z-10">
                    <Database className="size-10 text-purple-400" />
                  </div>
                </div>
                {/* 扫描线光效 */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500/20 shadow-[0_0_20px_var(--color-purple-500)] animate-[scan_4s_ease-in-out_infinite] z-20" />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
      {/* 2. 海量数据支撑 - Apple 风格大字 */}
      <section className="py-24 bg-zinc-950 text-white w-full border-b border-b-zinc-900 border-t border-t-purple-900/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 tracking-tight text-zinc-100">吞吐量，定义了一切。</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-x-0 lg:divide-x divide-zinc-800">
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-purple-400 mb-4 tracking-tighter">
                300<span className="text-4xl md:text-5xl">+</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">免驱直连工业协议</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-purple-400 mb-4 tracking-tighter">
                10<span className="text-4xl md:text-5xl">M</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">QoS 分发高频峰值量</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-purple-400 mb-4 tracking-tighter">
                1<span className="text-4xl md:text-5xl">ms</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">网关极端调度延迟</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-purple-400 mb-4 tracking-tighter">
                30<span className="text-4xl md:text-5xl">d</span>
              </span>
              <span className="text-zinc-400 font-medium text-lg">断网时序数据本地离线缓存</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 设计哲学宣言 */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          只传有用的，
          <br />
          并在离线时保持清醒。
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          原始带宽是昂贵的，直接将海量传感器噪音抛给云端是不负责任的。MSRU IoT 在网络的最边缘建立拦截哨所。
          通过图形化的拖拽算子，在设备测直接完成清洗、聚合、死区过滤与异常规则抛转。哪怕厂区主干网意外中断，
          本地的时间序列数据库亦将忠于职守，在网络复苏的那一刻无损补传。
        </p>
      </section>

      {/* 4. 八宫格超大 BENTO GRID - IoT 核心能力 */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          {/* Card 1: 协议解析 (Large) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-purple-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Cable className="size-12 text-purple-500 mb-8" />
            <h3 className="text-3xl font-bold mb-4">即插即用的全能翻译官</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              从主流的 OPC UA、Modbus TCP/RTU，到特定的西门子
              S7、三菱、欧姆龙非标网口/串口。无需复杂的梯形图编程，驱动库一键导入，将各种生僻语言翻译为标准的 JSON
              物模型字典。
            </p>
            {/* Visual element */}
            <div className="absolute -bottom-10 -right-10 w-96 h-80 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-2xl transform rotate-12 flex flex-col gap-4 p-6 opacity-50 group-hover:-translate-y-4 group-hover:rotate-6 transition-all duration-700">
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-zinc-400 dark:bg-zinc-600 rounded" />
                <ArrowRight className="size-5 text-purple-500" />
                <div className="h-8 flex-1 bg-purple-500/30 rounded" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 h-8 bg-zinc-400 dark:bg-zinc-600 rounded" />
                <ArrowRight className="size-5 text-purple-500" />
                <div className="h-8 flex-1 bg-purple-500/30 rounded" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-zinc-400 dark:bg-zinc-600 rounded" />
                <ArrowRight className="size-5 text-purple-500" />
                <div className="h-8 flex-1 bg-purple-500/30 rounded" />
              </div>
            </div>
          </div>

          {/* Card 2: 边缘计算 (Medium) */}
          <div className="md:col-span-1 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-purple-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <Microchip className="size-10 text-purple-500" />
              <h3 className="text-2xl font-bold">边缘侧规则流引擎</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              支持 JavaScript/Lua 脚本热加载。在网关层即可判定水冷温度是否越界，直接通过 DO (Digital Output)
              输出告警继电器闭合，告别数十毫秒的云端折返延迟。
            </p>
          </div>

          {/* Card 3: 断网续传 (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-purple-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-bl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <HardDrive className="size-10 text-purple-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">极致离线缓存</h3>
            <p className="text-muted-foreground text-sm">
              车间局域网遭遇断电或断光纤？网关 TF
              存储及内置轻量级时序库(TSDB)，确保海量点位无损驻留，来电瞬间通过游标断点补传。
            </p>
          </div>

          {/* Card 4: Broker (Medium) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-purple-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <ServerCog className="size-10 text-purple-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">千万级 Broker</h3>
            <p className="text-muted-foreground text-sm">
              全异步非阻塞设计的云端 MQTT 集群。支持共享订阅与万级客户端的心跳保活监控。
            </p>
          </div>

          {/* Card 5: 物模型 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-purple-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <Layers className="size-12 text-zinc-400 group-hover:text-purple-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">数字孪生字典</h3>
          </div>

          {/* Card 6: 消息列队 (Small) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative p-8 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-purple-500/30 transition-colors flex flex-col justify-center items-center text-center">
            <Binary className="size-12 text-zinc-400 group-hover:text-purple-500 transition-colors mb-4" />
            <h3 className="text-lg font-bold">Kafka 旁路集成</h3>
          </div>

          {/* Card 7: 安全与证书 (Long) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 relative p-10 bg-zinc-100 dark:bg-zinc-900/40 rounded-[2.5rem] border border-border/50 overflow-hidden group hover:border-purple-500/30 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-4 mb-4">
              <ShieldAlert className="size-10 text-purple-500" />
              <h3 className="text-2xl font-bold">防重放与双向 SSL 握手</h3>
            </div>
            <p className="text-muted-foreground">
              安全，是工业互联网的绝对生命线。全链路 Payload 加密防嗅探。针对每一个下位机节点发放独立 x.509
              客户端证书鉴权。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 深度特写 A：边缘控制台 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium text-sm">
              <Router className="size-4" /> 云端统一基定
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">坐在总部，升维几千公里外的设备固件。</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              随着厂区规模扩张，成千上万个数据采集箱挂在柱子上，人工巡检变得毫无可能。通过 MSRU IoT 中心，
              您不仅能看到每一个网关的网络在线率，还能进行一键批量的云端下发（OTA）更新与脚本远端重载。
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-purple-500/20 rounded-full">
                  <ActivitySquare className="size-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">网关资源大盘</h4>
                  <p className="text-muted-foreground">CPU / 内存 / Socket 连接数 / 报错堆栈 全透明展现。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-1 bg-purple-500/20 rounded-full">
                  <ActivitySquare className="size-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">拓扑树地图呈现</h4>
                  <p className="text-muted-foreground">
                    以总线形式直观可视化：主网关 -{">"} 交换机 -{">"} PLC 节点的网络树。
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full lg:w-1/2 relative">
            <div className="aspect-4/3 rounded-[2rem] bg-indigo-100 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900 p-8 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-transparent" />
              <Globe2 className="size-40 text-purple-500/40 relative z-10 group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. 深度特写 B：为大模型准备干柴烈火 */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-500 font-medium text-sm">
              <Database className="size-4" /> AI 燃料收集者
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">数据即资产的起点。</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              没有高质量的连续时序数据，所有的高端人工智能与预测性维护都只是空中楼阁。
              系统内置强悍的时序数据分流引擎（Data
              Bridge），一端供能给高频实时屏幕，另一端低频静默灌入企业级数据湖进行深海沉淀。
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-border">
                <WifiHigh className="size-6 text-fuchsia-500 mb-2" />
                <h4 className="font-semibold">流处理 (Flink / Spark) 友好的输出</h4>
              </div>
              <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-border">
                <Signal className="size-6 text-fuchsia-500 mb-2" />
                <h4 className="font-semibold">异常频谱特征值预处理提取</h4>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            <div className="aspect-4/3 rounded-[2rem] bg-fuchsia-100 dark:bg-fuchsia-950/30 border border-fuchsia-200 dark:border-fuchsia-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-bl from-fuchsia-500/20 to-transparent" />
              <Zap className="size-40 text-fuchsia-500/40 animate-[pulse_2s_infinite]" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ 常见问题 */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full border-t border-border">
        <h2 className="text-3xl font-bold mb-12 text-center">基础架构释疑</h2>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border transition-colors hover:border-purple-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Settings className="size-5 text-purple-500" /> 我们拥有几十年历史的车床机械，还能做物联吗？
            </h4>
            <p className="text-muted-foreground">
              针对这类甚至没有控制系统的哑设备。我们提供一套低成本方案：安装包含外置电流互感器与三轴振动传感器的复合网关，从侧面监测主轴能耗与震频，推断并数字化计算其开机率及负荷情况。
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border transition-colors hover:border-purple-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <ServerCog className="size-5 text-purple-500" /> 对于大规模部署，单节点的 Broker 会成为瓶颈吗？
            </h4>
            <p className="text-muted-foreground">
              MSRU Broker 本身的设计就是采用 Actor
              并发模型与分布式哈希集群。通过横向增加节点水平扩展，没有单点瓶颈。同时客户端订阅均具备黏性转移与失效平移机制。
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-border transition-colors hover:border-purple-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <RefreshCcw className="size-5 text-purple-500" /> 是否必须绑定使用你们的配套 MES/WMS？
            </h4>
            <p className="text-muted-foreground">
              不需要。基于绝对的标准与开放理念。其数据输出可以直接推送到主流大厂的 Kafka、RabbitMQ
              或者企业服务总线中，您可以使用它来赋能您现存的任何老旧 IT 系统。
            </p>
          </div>
        </div>
      </section>

      {/* 8. 巨型底部 CTA */}
      <section className="relative py-32 px-6 overflow-hidden bg-purple-950 text-white border-t-4 border-fuchsia-500">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/40 rounded-[100%] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Radio className="size-20 mx-auto mb-8 text-fuchsia-400 opacity-80" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            将沉默的厂房，
            <br />
            变为澎湃的网络中枢。
          </h2>
          <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-2xl mx-auto">
            停止数据流失，建立坚不可摧的底层神经元。点击申请寄送测试评估网关（SDK）进行小范围压测。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="h-16 px-10 inline-flex items-center justify-center rounded-full bg-white text-purple-900 text-xl font-bold hover:scale-105 transition-all shadow-2xl"
            >
              立即接入数采宇宙
            </Link>
            <Link
              href="/products/ai"
              className="h-16 px-10 inline-flex items-center justify-center rounded-full bg-transparent border-2 border-fuchsia-500/50 text-white text-xl font-medium hover:bg-fuchsia-500/10 transition-colors"
            >
              进入高维度 AI 分析 <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

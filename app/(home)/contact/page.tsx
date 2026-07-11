import { ArrowRight, Building, Globe2, Mail, MapPin, MessageSquare, Phone, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white selection:bg-primary selection:text-primary-foreground overflow-hidden pb-24 transition-colors duration-300">
      {/* 1. Hero 区域：极致简洁深邃 */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center overflow-hidden">
        {/* 背景光效 */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-200/50 dark:from-zinc-800/40 via-zinc-100/20 dark:via-zinc-900/10 to-transparent pointer-events-none transition-colors duration-300" />
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-300" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-300 backdrop-blur-md transition-colors duration-300">
            <Sparkles className="size-4 text-primary" />
            期待与您的连接
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-zinc-900 to-zinc-900/60 dark:from-white dark:to-white/60 transition-colors duration-300">
            随时准备为您提供支撑。
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300">
            无论是技术探索、商业合作还是平台支持，我们的全球专家团队始终在线。
          </p>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* 左侧：通信渠道卡片群 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tight">联系方式</h2>
            <p className="text-zinc-500">选择最适合您的沟通渠道。我们通常会在 2 小时内响应。</p>
          </div>

          <div className="group p-6 rounded-3xl bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-none">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MessageSquare className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1 transition-colors duration-300">
                  商业与战略合作
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3 transition-colors duration-300">
                  探讨企业级授权、定制化需求与代理生态。
                </p>
                <a
                  href="mailto:business@msru.platform"
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1 transition-colors duration-300"
                >
                  business@msru.cn <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="group p-6 rounded-3xl bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-none">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-400 flex items-center justify-center shrink-0 transition-colors duration-300">
                <Mail className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1 transition-colors duration-300">
                  技术支持中心
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3 transition-colors duration-300">
                  遇到部署困难或系统异常？提交工单获取专家协助。
                </p>
                <a
                  href="mailto:support@msru.platform"
                  className="text-blue-500 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1 transition-colors duration-300"
                >
                  support@msru.cn <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="group p-6 rounded-3xl bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-none">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shrink-0 transition-colors duration-300">
                <Phone className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1 transition-colors duration-300">
                  全球服务热线
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3 transition-colors duration-300">
                  工作日 9:00 - 18:00 (GMT+8) 提供实时语音支援。
                </p>
                <a
                  href="tel:+864000000000"
                  className="text-emerald-500 dark:text-emerald-400 font-medium hover:underline inline-flex items-center gap-1 transition-colors duration-300"
                >
                  400-094-1904 <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：高质感表单区 */}
        <div className="lg:col-span-7">
          <div className="relative p-1 rounded-[2.5rem] bg-linear-to-b from-zinc-200 dark:from-zinc-800/50 to-zinc-100 dark:to-zinc-900/50 overflow-hidden shadow-xl dark:shadow-2xl transition-colors duration-300">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay pointer-events-none transition-opacity duration-300" />
            <div className="relative bg-white dark:bg-zinc-950 p-8 sm:p-12 rounded-[2.4rem] h-full border border-zinc-200 dark:border-zinc-800/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white transition-colors duration-300">
                直接留言
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-300"
                    >
                      您的姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-hidden focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-xs dark:shadow-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-300"
                    >
                      工作邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-hidden focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-xs dark:shadow-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-300"
                  >
                    公司名称
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-hidden focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-xs dark:shadow-none"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-300"
                  >
                    需求描述
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-hidden focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none shadow-xs dark:shadow-none"
                    placeholder="请简要描述您的业务场景或面临的挑战..."
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl px-4 py-4 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group shadow-sm"
                >
                  发送请求
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-zinc-500 dark:text-zinc-600 mt-4 transition-colors duration-300">
                  点击发送即代表您同意我们的隐私政策与数据处理条例。
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 办公室分布（可选的大型 Footer 卡片视效） */}
      <section className="relative mt-32 max-w-7xl mx-auto px-6">
        <div className="rounded-[3rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 p-8 md:p-16 overflow-hidden relative group transition-colors duration-300 shadow-sm dark:shadow-none">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 dark:from-primary/10 via-transparent to-transparent opacity-50 transition-opacity group-hover:opacity-100" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 space-y-4 pr-12">
              <div className="w-12 h-12 rounded-2xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center mb-6 transition-colors duration-300">
                <Globe2 className="size-6 text-zinc-600 dark:text-zinc-300 transition-colors duration-300" />
              </div>
              <h2 className="text-3xl font-bold transition-colors duration-300">全球研发与交付架构</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
                我们在全球设立了三个主要中心，以覆盖全时区的高可用保障。不论您的产线在哪个被照亮的大洲，我们的现场工程师都能迅速响应。
              </p>
            </div>

            <div className="space-y-4">
              <Building className="size-6 text-zinc-500 mb-4 transition-colors duration-300" />
              <h4 className="font-bold text-lg transition-colors duration-300">亚太总部 (APAC)</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono transition-colors duration-300">
                珠海横琴粤澳深度合作区
                <br />
                环岛东路 1889 号横琴澳门青年创业谷
                <br />
                中国, 519031
              </p>
              <a
                href="https://uri.amap.com/marker?position=113.54,22.14&name=横琴澳门青年创业谷&callnative=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-500 mt-2 transition-colors duration-300 hover:text-blue-500 cursor-pointer"
              >
                <MapPin className="size-4" />
                <span className="font-mono">经纬定位: 22.14°N, 113.54°E</span>
              </a>
            </div>

            <div className="space-y-4">
              <Building className="size-6 text-zinc-500 mb-4 transition-colors duration-300" />
              <h4 className="font-bold text-lg transition-colors duration-300">北美枢纽 (NA)</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono transition-colors duration-300">
                100 Innovation Way
                <br />
                San Jose, CA 95134
                <br />
                United States
              </p>
              <div className="flex items-center gap-2 text-sm text-zinc-500 mt-2 transition-colors duration-300">
                <MapPin className="size-4" /> 经纬定位: 37.4°N, 121.9°W
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

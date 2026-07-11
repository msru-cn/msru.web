import { Headphones, Mail, MessageSquare, Phone } from "lucide-react";
import { SubPageCta, SubPageHero } from "@/components/marketing";

const CHANNELS = [
  {
    icon: <Phone className="size-6 text-blue-500" aria-hidden="true" />,
    title: "电话热线",
    info: "400-800-1904",
    desc: "7x24 全天候服务",
  },
  {
    icon: <Mail className="size-6 text-emerald-500" aria-hidden="true" />,
    title: "邮件工单",
    info: "support@msru.ai",
    desc: "SLA 4 小时内首次响应",
  },
  {
    icon: <MessageSquare className="size-6 text-amber-500" aria-hidden="true" />,
    title: "在线即时聊天",
    info: "平台右下角",
    desc: "工作时间实时接入",
  },
];

export default function SupportPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: Headphones, text: "Support Center" }}
        title={
          <>
            7x24 <span className="italic text-zinc-500">全天候支持</span>
          </>
        }
        subtitle="全球 NOC 响应中心，由资深工程师值守，确保您的生产线永不停歇。"
      />

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CHANNELS.map((ch) => (
              <div
                key={ch.title}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-center space-y-4"
              >
                <div className="mx-auto w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center">
                  {ch.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{ch.title}</h3>
                <p className="text-lg font-bold text-primary">{ch.info}</p>
                <p className="text-sm text-zinc-500">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubPageCta title="查看系统实时运行状态" cta={{ label: "系统状态面板", href: "/status" }} />
    </div>
  );
}

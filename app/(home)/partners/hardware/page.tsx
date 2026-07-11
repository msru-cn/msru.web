import { CheckCircle, HardDrive } from "lucide-react";
import { SubPageCta, SubPageHero } from "@/components/marketing";

const HARDWARE = [
  { category: "工业边缘网关", items: ["Advantech UNO-2484G", "Siemens IOT2050", "MSRU Edge Box M1"] },
  { category: "PLC 与协议转换", items: ["Siemens S7-1500", "Allen-Bradley CompactLogix", "Mitsubishi iQ-R"] },
  { category: "工业视觉硬件", items: ["Basler ace 2 系列", "HIKROBOT MV-CS 系列", "MSRU AI Vision Cabinet"] },
  { category: "RFID 与条码", items: ["Zebra FX9600", "Impinj R700", "Honeywell Granit 1920i"] },
];

export default function HardwarePartnersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SubPageHero
        badge={{ icon: HardDrive, text: "Certified Hardware" }}
        title="认证硬件生态"
        subtitle="经过 MSRU 实验室严格测试认证的工业网关、PLC、视觉传感器与 RFID 硬件目录。"
        accentColor="amber"
      />

      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HARDWARE.map((cat) => (
              <div
                key={cat.category}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4"
              >
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="size-4 text-emerald-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubPageCta title="提交硬件认证申请" cta={{ label: "联系硬件生态团队", href: "/contact" }} />
    </div>
  );
}

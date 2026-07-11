import { ArrowRight, CheckCircle, HardDrive } from "lucide-react";
import Link from "next/link";

const HARDWARE = [
  { category: "工业边缘网关", items: ["Advantech UNO-2484G", "Siemens IOT2050", "MSRU Edge Box M1"] },
  { category: "PLC 与协议转换", items: ["Siemens S7-1500", "Allen-Bradley CompactLogix", "Mitsubishi iQ-R"] },
  { category: "工业视觉硬件", items: ["Basler ace 2 系列", "HIKROBOT MV-CS 系列", "MSRU AI Vision Cabinet"] },
  { category: "RFID 与条码", items: ["Zebra FX9600", "Impinj R700", "Honeywell Granit 1920i"] },
];

export default function HardwarePartnersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative pt-32 pb-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-400 uppercase tracking-widest">
              <HardDrive className="size-3" /> Certified Hardware
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">认证硬件生态</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              经过 MSRU 实验室严格测试认证的工业网关、PLC、视觉传感器与 RFID 硬件目录。
            </p>
          </div>
        </div>
      </section>

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

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 text-center">
        <div className="container mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">提交硬件认证申请</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition"
          >
            联系硬件生态团队 <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

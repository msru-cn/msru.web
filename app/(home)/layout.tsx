import { HomeLayout } from "fumadocs-ui/layouts/home";
import { NavbarMenu, NavbarMenuContent, NavbarMenuLink, NavbarMenuTrigger } from "fumadocs-ui/layouts/home/navbar";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { AppleFooter } from "@/components/apple-footer";
import { type MegaMenuItem, megaMenus } from "@/content/marketing/nav";
import { baseOptions, linkItems } from "@/lib/layout.shared";

// 巨型菜单渲染组件 (保持原逻辑结构，因为原本针对图片的 CSS 已经写得非常完美)
function NavMegaMenu({ title, items }: { title: string; items: MegaMenuItem[] }) {
  return (
    <NavbarMenu>
      <NavbarMenuTrigger className="cursor-pointer">{title}</NavbarMenuTrigger>
      <NavbarMenuContent className="auto-cols-fr">
        <style>
          {`
            nav [data-radix-navigation-menu-content] > div {
              grid-auto-columns: minmax(0, 1fr) !important;
            }
          `}
        </style>
        {items.map((item) => (
          <NavbarMenuLink
            key={item.href}
            href={item.href}
            className={`group relative overflow-hidden flex flex-col justify-end transition-all duration-500 hover:shadow-xl hover:border-primary/50 ${item.className || ""}`}
            style={item.image ? { minHeight: "140px", padding: 0 } : {}}
          >
            {item.image ? (
              <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-100 [@media(hover:hover)]:opacity-50 group-hover:scale-110 [@media(hover:hover)]:group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-white/10 dark:bg-zinc-950/10 [@media(hover:hover)]:bg-white/40 [@media(hover:hover)]:dark:bg-zinc-950/60 [@media(hover:hover)]:group-hover:bg-white/10 [@media(hover:hover)]:dark:group-hover:bg-zinc-950/10 transition-colors duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 dark:from-zinc-950 dark:via-zinc-950/60 to-transparent pointer-events-none" />
              </div>
            ) : null}

            <div className={`relative z-10 flex flex-col h-full ${item.image ? "p-6" : "p-4"}`}>
              {/* 顶部装饰性元素 - 仅在巨型封面图 (row-span-2+) 中显示以填补空白 */}
              {item.image && item.className?.includes("row-span") && (
                <div className="mb-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/10 dark:bg-white/10 border border-zinc-950/10 dark:border-white/20 backdrop-blur-md text-[10px] uppercase tracking-widest text-zinc-800 dark:text-white/80 font-bold mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <Sparkles className="size-3 text-amber-500 dark:text-amber-400" />
                    {item.href.includes("products") && "Core Infrastructure"}
                    {item.href.includes("solutions") && "Industry Solutions"}
                    {item.href.includes("services") && "Ecosystem Services"}
                    {item.href.includes("trust") && "Trust & Security"}
                    {item.href.includes("company") && "Corporate Strategy"}
                  </div>
                  <div className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                    <div className="h-px w-12 bg-linear-to-r from-primary to-transparent" />
                    <p className="text-xs text-zinc-500 dark:text-white/60 font-medium leading-relaxed max-w-[180px]">
                      {item.href.includes("products") && "基于统一数据主线打造的全栈数字基座"}
                      {item.href.includes("solutions") && "深耕垂直领域，提供端到端的行业破局蓝图"}
                      {item.href.includes("services") && "全生命周期技术保障，构建协同共赢生态"}
                      {item.href.includes("trust") && "硬核安全架构，守护工业数据的绝对隐私"}
                      {item.href.includes("company") && "全球视野，极客文化，驱动可持续工业未来"}
                    </p>
                  </div>
                </div>
              )}

              <div className={item.image ? "mt-auto" : ""}>
                {item.image ? null : item.icon ? (
                  <div className="w-10 h-10 mb-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-600 dark:text-zinc-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-sm transition-all duration-300">
                    {item.icon}
                  </div>
                ) : null}
                <div
                  className={`flex items-center gap-2 font-bold mb-1 tracking-tight ${item.image ? "text-zinc-900 dark:text-white drop-shadow-md text-2xl" : "text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors"}`}
                >
                  {item.image && item.icon ? (
                    <div className="shrink-0 text-primary drop-shadow-lg">{item.icon}</div>
                  ) : null}
                  <span>{item.title}</span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${item.image ? "text-zinc-600 dark:text-white/80 line-clamp-3" : "text-zinc-500 dark:text-zinc-400"}`}
                >
                  {item.description}
                </p>
                {item.image && item.className?.includes("row-span") && (
                  <div className="mt-6 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter group-hover:gap-3 transition-all">
                    查看详情 <ArrowRight className="size-3" />
                  </div>
                )}
              </div>
            </div>
          </NavbarMenuLink>
        ))}
      </NavbarMenuContent>
    </NavbarMenu>
  );
}

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        ...megaMenus.flatMap((menu) => [
          {
            type: "menu" as const,
            on: "menu" as const,
            text: menu.title,
            items: menu.items.map((item) => ({
              text: item.title,
              url: item.href,
              icon: item.icon,
              description: item.description,
            })),
          },
          {
            type: "custom" as const,
            on: "nav" as const,
            children: <NavMegaMenu title={menu.title} items={menu.items} />,
          },
        ]),
        ...linkItems,
      ]}
      className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)] [--color-fd-primary:var(--color-brand)]"
    >
      <div id="home-content-wrapper" className="transition-all duration-500 will-change-[filter,transform]">
        <div className="page-stage" aria-hidden="true" />
        {children}
        <AppleFooter />
      </div>
    </HomeLayout>
  );
}

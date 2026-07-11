import { buttonVariants } from "@/components/ui/button";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { MessageCircleIcon } from "lucide-react";
import type { ReactNode } from "react";
import { AISearch, AISearchPanel, AISearchTrigger } from "@/components/ai/search";
import { cn } from "@/lib/cn";
import { baseOptions, logo } from "@/lib/layout.shared";
import { getSection } from "@/lib/navigation";
import { source } from "@/lib/source";
import { ThemeProvider } from "./theme-provider";

export default function Layout({ children }: { children: ReactNode }) {
  const base = baseOptions();
  return (
    <ThemeProvider>
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions}
        nav={{
          ...base.nav,
          title: (
            <>
              {logo}
              <span className="font-medium in-[.uwu]:hidden max-md:hidden">MSRU | Docs</span>
            </>
          ),
        }}
        sidebar={{
          tabs: {
            transform(option, node) {
              const meta = source.getNodeMeta(node);
              if (!meta || !node.icon) return option;

              const sectionName = getSection(meta.path);
              const color = `var(--${sectionName}-color, var(--color-fd-foreground))`;

              // Formatting the title to align English prefix and Chinese suffix
              let formattedTitle: ReactNode = option.title;
              if (typeof option.title === "string") {
                const parts = option.title.trim().split(" ");
                if (parts.length >= 2 && /^[a-zA-Z0-9]+$/i.test(parts[0])) {
                  const en = parts[0];
                  const cn = parts.slice(1).join(" ");
                  formattedTitle = (
                    <span className="grid grid-cols-[4.5rem_1fr] items-center gap-1.5 w-full">
                      <span className="font-semibold text-xs tracking-wider opacity-60 uppercase">{en}</span>
                      <span className="truncate font-medium">{cn}</span>
                    </span>
                  );
                } else {
                  formattedTitle = (
                    <span className="grid grid-cols-[min-content_1fr] items-center gap-1.5 w-full">
                      <span className="truncate font-medium col-span-2">{option.title}</span>
                    </span>
                  );
                }
              }

              return {
                ...option,
                title: formattedTitle,
                icon: (
                  <div
                    className="[&_svg]:size-full rounded-lg size-full text-(--tab-color) max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5"
                    style={
                      {
                        "--tab-color": color,
                      } as object
                    }
                  >
                    {node.icon}
                  </div>
                ),
              };
            },
          },
        }}
      >
        {children}

        <AISearch>
          <AISearchPanel />
          <AISearchTrigger
            position="float"
            className={cn(
              buttonVariants({
                variant: "secondary",
                className: "text-fd-muted-foreground rounded-2xl",
              }),
            )}
          >
            <MessageCircleIcon className="size-4.5" />
            询问人工智能
          </AISearchTrigger>
        </AISearch>
      </DocsLayout>
    </ThemeProvider>
  );
}

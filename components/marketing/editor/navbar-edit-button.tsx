"use client";

import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { Edit3 } from "lucide-react";
import { cn } from "@/lib/cn";

export function NavbarEditButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("start-page-edit"))}
      className={cn(
        buttonVariants({ color: "ghost", size: "icon" }),
        "[&_svg]:size-4 -mx-1 text-fd-muted-foreground hover:text-fd-accent-foreground cursor-pointer transition-colors",
      )}
      title="进入可视化编辑"
      aria-label="进入可视化编辑"
    >
      <Edit3 className="size-4" />
    </button>
  );
}

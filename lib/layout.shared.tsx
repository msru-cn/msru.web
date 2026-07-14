import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import { Github } from "lucide-react";
import Image from "next/image";
import { MsruDocsIcon } from "@/app/layou.client";

export const linkItems: LinkItemType[] = [
  {
    type: "icon",
    url: "https://github.com/fuma-nama/fumadocs",
    label: "Github",
    text: "Github",
    icon: <Github />,
    external: true,
  },
];

export const logo = (
  <>
    <MsruDocsIcon className="size-5 in-[.uwu]:hidden" />
  </>
);

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/uploads/msru.svg"
            alt="MSRU Logo"
            width={24}
            height={24}
            style={{ width: "auto" }}
            className="h-6 w-auto dark:brightness-0 dark:invert"
          />
          <span className="font-medium">MSRU</span>
        </div>
      ),
    },
  };
}

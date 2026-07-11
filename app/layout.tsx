import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import localFont from "next/font/local";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata();

/**
 * 使用本地字体替代 Google Fonts，避免构建时依赖外部网络
 * Inter 字体文件来源：https://github.com/rsms/inter/releases
 * 如需使用正式 Inter 字体，下载 .woff2 放入 app/fonts/ 目录
 */
const inter = localFont({
  src: [
    {
      path: "./fonts/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{ defaultTheme: "dark" }}>{children}</RootProvider>
      </body>
    </html>
  );
}

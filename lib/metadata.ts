import type { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  path?: string;
}

/**
 * 创建统一的 Metadata 配置
 * @param props - 页面特定的 Metadata 属性
 * @returns 格式化后的 Next.js Metadata 对象
 */
export function createMetadata({
  title,
  description = "MSRU Platform - 深耕开源工业管理控制系统，构建您的无人工厂与工业互联新生态。提供 工业数字化等全栈方案。",
  image,
  type = "website",
  path,
}: MetadataProps = {}): Metadata {
  const siteName = "MSRU Platform";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL("https://msru.cn"), // 待实际部署后替换为真实域名
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      title: fullTitle,
      description,
      type,
      siteName,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

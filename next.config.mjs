import { remarkMdxMermaid } from "fumadocs-core/mdx-plugins";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid],
  },
});

/** @type {import('next').NextConfig} */
const config = {
  output: "standalone",
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  eslint: {
    // 部署和构建时跳过内部的 Lint，交由外部 Turbo 的 lint 任务负责
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 部署和构建时跳过内部的 TSC 检查，交由外部 Turbo 的 check-types 任务负责
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: "images.unsplash.com" }, { hostname: "plus.unsplash.com" }],
  },
  async rewrites() {
    return [
      {
        source: "/docs/:path*.mdx",
        destination: "/llms.mdx/docs/:path*",
      },
    ];
  },
};

export default withMDX(config);

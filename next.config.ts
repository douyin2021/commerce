import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. 开启纯静态导出模式，彻底规避 Cloudflare Workers 的 prerender 冲突
  output: "export",

  experimental: {
    // 必须移除或禁用 ppr 和 useCache，因为静态导出不支持动态流式服务端渲染 (SSR)
    inlineCss: true,
  },

  images: {
    // 静态导出下必须关闭 Next.js 自带的实时图片优化服务，改由 CDN 直接分发
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
};

export default nextConfig;

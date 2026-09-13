import { baseUrl } from "lib/utils";
export const dynamic = "force-static"; // 标记为静态生成
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

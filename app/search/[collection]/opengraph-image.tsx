import OpengraphImage from "components/opengraph-image";
import { getCollection } from "lib/shopify";
export const dynamic = "force-static";
export default async function Image({
  params,
}: {
  params: { collection: string };
}) {
  const collection = await getCollection(params.collection);
  const title = collection?.seo?.title || collection?.title;

  return await OpengraphImage({ title });
}
// 添加此函数：告知 Next.js 静态导出哪些路径的 OG 图
export async function generateStaticParams() {
  // 如果希望静态预生成特定分类的 OG 图：
  // return [{ collection: 'all' }, { collection: 'featured' }];

  // 如果不需要构建期预生成所有动态分类的 OG 图，直接返回空数组即可通过编译：
  return [];
}

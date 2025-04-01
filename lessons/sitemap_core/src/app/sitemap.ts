import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/products");
  const { productNames } = (await response.json()) as {
    productNames: string[];
  };

  return [
    {
      url: "",
      priority: 1,
    },
    ...productNames.map((name) => ({
      url: `/product/${name}`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    })),
  ].map((route: MetadataRoute.Sitemap[number]) => ({
    ...route,
    url: "https://booleanart.com" + route.url,
  }));
}

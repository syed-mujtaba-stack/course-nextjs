import { fetchPageContent } from "@/api/cms";
import { SimpleContent } from "@/lib/SimpleContent";
import { type Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await fetchPageContent(slug);
  return {
    title: content.title,
    description: content.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await fetchPageContent(slug);
  return <SimpleContent {...content} />;
}

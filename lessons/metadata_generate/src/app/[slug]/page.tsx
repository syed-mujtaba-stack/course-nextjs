import { fetchPageContent } from '@/api/cms';
import { SimpleContent } from '@/lib/SimpleContent';

export default async function Page({params}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const content = await fetchPageContent(slug);
  return <SimpleContent {...content} />;
}

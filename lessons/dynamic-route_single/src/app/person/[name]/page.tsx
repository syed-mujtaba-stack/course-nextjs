import { formatName } from '@/utils/formatName';

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <div>Hi {formatName(name)}! 👋</div>;
}

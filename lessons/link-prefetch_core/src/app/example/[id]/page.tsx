import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <Link href="/">← Home</Link>
      <div>Example: {id}</div>
    </>
  );
}

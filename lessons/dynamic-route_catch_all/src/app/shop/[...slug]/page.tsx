export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      Shopping for <b>{slug.join(" ► ")}</b> 🛍️
    </div>
  );
}

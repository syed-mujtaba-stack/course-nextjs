export default async function Page({
  params,
}: {
  params: Promise<{ slug: undefined | string[] }>;
}) {
  const { slug } = await params;

  console.log("slug:", slug);

  if (slug == null) {
    return <div>Welcome to the shop 🏪</div>;
  }

  return (
    <div>
      Shopping for <b>{slug.join(" ► ")}</b> 🛍️
    </div>
  );
}

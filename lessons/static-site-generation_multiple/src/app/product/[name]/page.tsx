export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const content = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/product" + `/${name}`
  );

  const details = await content.json();
  const { title, icon, description } = details;

  return (
    <div className="flex flex-col p-2 gap-4">
      <aside className="text-6xl mb-4">{icon}</aside>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-xl">{description}</p>
    </div>
  );
}

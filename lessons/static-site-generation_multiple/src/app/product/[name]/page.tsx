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
    <div>
      <aside>{icon}</aside>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

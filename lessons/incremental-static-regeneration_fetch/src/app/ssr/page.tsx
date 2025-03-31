export default async function Page() {
  console.log("Rendering SSR page...");

  const content = await fetch(process.env.NEXT_PUBLIC_API_URL + "/content", {
    cache: "no-store",
  });

  const { message } = await content.json();
  return <div>{message}</div>;
}

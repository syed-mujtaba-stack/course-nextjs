export default async function Page() {
  const content = await fetch(process.env.NEXT_PUBLIC_API_URL + "/content", {
    cache: "no-store",
  });

  console.log("Rendering SSR page...");

  const json = await content.json();
  const message = json.message;

  return <div>{message}</div>;
}

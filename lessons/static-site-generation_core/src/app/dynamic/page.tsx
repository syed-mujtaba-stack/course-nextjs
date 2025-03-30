export default async function Page() {
  const content = await fetch(process.env.NEXT_PUBLIC_API_URL + "/content", {
    cache: "no-store",
  });

  const json = await content.json();
  const message = json.message;

  return <div>{message}</div>;
}

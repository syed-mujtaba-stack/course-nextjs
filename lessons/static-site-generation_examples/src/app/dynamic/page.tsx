export const dynamic = "force-dynamic";

export default async function Page() {
  const content = await fetch(process.env.NEXT_PUBLIC_API_URL + "/content");

  const json = await content.json();
  const message = json.message;

  return <div>{message}</div>;
}

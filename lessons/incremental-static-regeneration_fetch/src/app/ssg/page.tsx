export default async function Page() {
  console.log("Rendering SSG page...");

  const content = await fetch(process.env.NEXT_PUBLIC_API_URL + "/content");
  
  const { message } = await content.json();
  return <div>{message}</div>;
}

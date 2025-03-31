export default async function Page() {
  console.log("Rendering ISR page...");

  const content = await fetch(process.env.NEXT_PUBLIC_API_URL + "/content", {
    next: {
      revalidate: 10,
    },
  });

  const { message } = await content.json();
  return <div>{message}</div>;
}

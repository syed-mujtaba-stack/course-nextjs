export const dynamic = "force-dynamic";

export default async function Dynamic() {
  console.log("Dynamic Page");
  await new Promise((res) => setTimeout(res, 3000));
  return <div>Dynamic</div>;
}

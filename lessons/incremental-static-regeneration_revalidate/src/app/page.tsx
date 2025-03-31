export const revalidate = 10;

export default async function Page() {
  return (
    <div>
      <h1>Incremental Static Regeneration</h1>
      <p>Last Rendered At Seconds: {new Date().getSeconds()}</p>
    </div>
  );
}

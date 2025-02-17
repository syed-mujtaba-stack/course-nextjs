export default async function Page(input: { params: { id: string } }) {
  return <div>Example: {input.params.id}</div>;
}

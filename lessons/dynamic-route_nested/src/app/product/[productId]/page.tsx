export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <div>
      Product: <b>{productId}</b> 📦
    </div>
  );
}

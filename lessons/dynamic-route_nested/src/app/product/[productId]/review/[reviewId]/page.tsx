export default async function Page({
  params,
}: {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      Product: <b>{productId}</b> 📦
      <br />
      Review: <b>{reviewId}</b> 📝
    </div>
  );
}

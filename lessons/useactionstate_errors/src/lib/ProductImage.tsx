export const ProductImage = ({ product }: { product: string }) => {
  const size = 100;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="product-image"
      src={`/images/${product}.png`}
      alt={product}
      width={size}
      height={size}
    />
  );
};

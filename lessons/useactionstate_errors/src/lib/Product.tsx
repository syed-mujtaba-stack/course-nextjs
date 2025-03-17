"use client";

import { ProductImage } from "./ProductImage";
import { addToCart } from "./functions";
import { useActionState } from "react";

export function Product({ product }: { product: string }) {
  const [serverResponse, action, isPending] = useActionState(addToCart, null);

  return (
    <div className="product-row">
      <ProductImage product={product} />
      <div className="product-col">
        <form action={action}>
          <input hidden readOnly name="product" value={product} />
          <button type="submit" disabled={isPending}>
            Add to cart
          </button>
        </form>
        {serverResponse != null && (
          <p className={serverResponse.type}>{serverResponse.message}</p>
        )}
      </div>
    </div>
  );
}

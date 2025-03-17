"use server";

export type AddToCartResponse = {
  type: "error" | "success";
  message: string;
};

export async function addToCart(
  _prevState: unknown,
  formData: FormData
): Promise<AddToCartResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const product = formData.get("product");
  if (product === "wheels") {
    return {
      type: "error",
      message: `Out of stock: ${product}`,
    };
  }
  return {
    type: "success",
    message: `Added to cart: ${product}`,
  };
}

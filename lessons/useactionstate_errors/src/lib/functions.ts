"use server";

export type AddToCartResponse = {
  type: "error" | "success";
  message: string;
};

export async function addToCart(
  _currentState: unknown,
  formData: FormData
): Promise<AddToCartResponse> {
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

import { ProductProps, Product } from "@/lib/Product";

export default async function Page() {
  const props: ProductProps = {
    title: "Apple",
    icon: "🍎",
    description: "An apple a day, keeps the doctor away! 🥼",
  };

  return <Product {...props} />;
}

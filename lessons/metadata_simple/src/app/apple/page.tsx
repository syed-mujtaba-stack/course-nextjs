import { ProductProps, Product } from "@/lib/Product";

const apple: ProductProps = {
  title: "Apple",
  icon: "🍎",
  description: "An apple a day, keeps the doctor away! 🥼",
};

export default async function Page() {
  return <Product {...apple} />;
}

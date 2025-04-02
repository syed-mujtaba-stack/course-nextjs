import { ProductProps, Product } from "@/lib/Product";

const orange: ProductProps = {
  title: "Orange",
  icon: "🍊",
  description: "An orange a day, keeps the sniffles away! 🤧",
};

export default async function Page() {
  return <Product {...orange} />;
}

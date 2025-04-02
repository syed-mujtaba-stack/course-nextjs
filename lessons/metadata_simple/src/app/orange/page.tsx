import { ProductProps, Product } from "@/lib/Product";

export default async function Page() {
  const props: ProductProps = {
    title: "Orange",
    icon: "🍊",
    description: "An orange a day, keeps the sniffles away! 🤧",
  };

  return <Product {...props} />;
}

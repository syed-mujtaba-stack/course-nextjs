import { Product } from "@/lib/Product";

export default function Page() {
  return (
    <div className="root">
      <Product product="skateboard" />
      <Product product="wheels" />
    </div>
  );
}

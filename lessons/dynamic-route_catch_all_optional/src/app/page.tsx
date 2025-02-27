import { Example } from "@/utils/Example";

export default function Page() {
  return (
    <div>
      <div>Pick an example 🌹</div>
      <ul>
        <Example url="/shop/clothes" />
        <Example url="/shop/clothes/tops" />
        <Example url="/shop/clothes/tops/t-shirts" />
        <br />
        <Example url="/shop" />
      </ul>
    </div>
  );
}

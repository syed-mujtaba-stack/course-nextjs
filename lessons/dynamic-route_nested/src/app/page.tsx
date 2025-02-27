import { Example } from "@/utils/Example";

export default function Page() {
  return (
    <div>
      <div>Pick an example 🌹</div>
      <ul>
        <Example url="/product/ball" />
        <Example url="/product/racquet" />
        <br />
        <Example url="/product/ball/review/1337" />
        <Example url="/product/racquet/review/5a9a" />
      </ul>
    </div>
  );
}

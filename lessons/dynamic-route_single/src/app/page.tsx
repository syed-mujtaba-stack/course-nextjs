import { Example } from "@/utils/Example";

export default function Page() {
  return (
    <div>
      <div>Pick an example 🌹</div>
      <ul>
        <Example url="/person/alpha" />
        <Example url="/person/beta" />
        <Example url="/person/charlie-chaplin" />
      </ul>
    </div>
  );
}

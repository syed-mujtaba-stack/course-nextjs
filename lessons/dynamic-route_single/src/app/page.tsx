import Link from "next/link";

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

const Example = ({ url }: { url: string }) => {
  return (
    <li>
      <Link href={url}>{url}</Link>
    </li>
  );
};

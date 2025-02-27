import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>Pick an example 🌹</div>
      <ul>
        <Example url="/shop/clothes" />
        <Example url="/shop/clothes/tops" />
        <Example url="/shop/clothes/tops/t-shirt" />
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

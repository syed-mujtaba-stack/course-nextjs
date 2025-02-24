import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>Pick a NextJS `Image` example</div>
      <ul>
        <Example url="/basic" />
        <Example url="/fill" />
        <Example url="/object-fit" />
        <Example url="/remote" />
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

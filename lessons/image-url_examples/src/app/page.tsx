import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>Pick a NextJS `Image` example</div>
      <ul>
        <Example url="/basic" title="Basic" />
      </ul>
    </div>
  );
}

const Example = ({ url, title }: { url: string; title: string }) => {
  return (
    <li>
      <Link href={url}>{title}</Link>
    </li>
  );
};

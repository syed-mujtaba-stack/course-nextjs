import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>Value: true</div>
      <Link prefetch={true} href="/static">
        Static
      </Link>
      <Link prefetch={true} href="/dynamic">
        Dynamic
      </Link>
    </div>
  );
}

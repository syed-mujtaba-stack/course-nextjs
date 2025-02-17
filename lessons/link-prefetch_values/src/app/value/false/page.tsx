import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>Value: false</div>
      <Link prefetch={false} href="/static">
        Static
      </Link>
      <Link prefetch={false} href="/dynamic">
        Dynamic
      </Link>
    </div>
  );
}

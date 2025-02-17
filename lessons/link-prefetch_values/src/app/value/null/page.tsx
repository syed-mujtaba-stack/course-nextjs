import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>Value: null</div>
      <Link prefetch={null} href="/static">
        Static
      </Link>
      <Link prefetch={null} href="/dynamic">
        Dynamic
      </Link>
    </div>
  );
}

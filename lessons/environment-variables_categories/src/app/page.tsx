import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/server">Server Environment</Link>
      <br />
      <Link href="/client">Client Environment</Link>
    </div>
  );
}

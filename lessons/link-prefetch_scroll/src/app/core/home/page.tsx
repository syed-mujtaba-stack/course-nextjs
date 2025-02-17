import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/core/alpha">Go to Alpha</Link>
      <Link href="/core/beta">Go to Beta</Link>
    </div>
  );
}

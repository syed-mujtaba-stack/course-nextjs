import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/alpha">Go to Alpha</Link>
      <Link href="/beta">Go to Beta</Link>
    </div>
  );
}

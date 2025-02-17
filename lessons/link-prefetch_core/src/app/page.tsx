export const dynamic = "force-dynamic";

import Link from "next/link";

export default function Home() {
  console.log("Home");

  return (
    <div>
      <Link href="/alpha">Go to Alpha</Link>
      <Link href="/beta">Go to Beta</Link>
    </div>
  );
}

export const dynamic = 'force-dynamic';

import Link from "next/link";

export default function Alpha() {
  return (
    <div>
      <Link href="/beta">Go to Beta</Link>
    </div>
  );
}

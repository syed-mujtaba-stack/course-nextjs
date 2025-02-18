import { BigBox } from "@/components/BigBox";
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      {[...Array(10)].map((_, i) => (
        <BigBox key={i} backgroundColor={"#16b3fc"} value={i} />
      ))}

      <Link href="/beta">
        Go to Beta (scroll=true)
      </Link>
      <Link href="/beta" scroll={false}>
        Go to Beta (scroll=false)
      </Link>
    </div>
  );
}

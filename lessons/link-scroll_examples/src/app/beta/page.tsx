import { BigBox } from "@/components/BigBox";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {[...Array(10)].map((_, i) => (
        <BigBox key={i} backgroundColor={"#f84e4e"} value={i} />
      ))}

      <Link href="/alpha">
        Go to Alpha (scroll=true)
      </Link>
      <Link href="/alpha" scroll={false}>
        Go to Alpha (scroll=false)
      </Link>
    </div>
  );
}

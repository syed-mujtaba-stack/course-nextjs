import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/value/true">true</Link>
      <Link href="/value/false">false</Link>
      <Link href="/value/null">null</Link>
    </div>
  )
}

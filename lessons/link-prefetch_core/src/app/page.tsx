import Link from "next/link";

export default function Home() {
  return [...Array(1000)].map((_, i) => (
    <div key={i}>
      <Link href={`/example/${i + 1}`}>Example {i + 1}</Link>
    </div>
  ));
}

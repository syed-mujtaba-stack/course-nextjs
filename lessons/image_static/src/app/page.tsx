import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>Pick a NextJS `Image` example</div>
      <ul>
        <li>
          <Link href="/basic">Basic</Link>
        </li>
        <li>
          <Link href="/scale">Automatic Resizing</Link>
        </li>
        <li>
          <Link href="/placeholder">Placeholder Blur</Link>
        </li>
        <li>
          <Link href="/quality">Quality</Link>
        </li>
        <li>
          <Link href="/responsive">Responsive</Link>
        </li>
        <li>
          <Link href="/loading">Lazy Loading vs Eager Loading</Link>
        </li>
        <li>
          <Link href="/priority">Preloading (Priority)</Link>
        </li>
      </ul>
    </div>
  );
}

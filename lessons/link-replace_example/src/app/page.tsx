import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Hello Fam!
      <Link href="/error">🚀 YOLO, Simulate an Error 💣</Link>
    </div>
  );
}

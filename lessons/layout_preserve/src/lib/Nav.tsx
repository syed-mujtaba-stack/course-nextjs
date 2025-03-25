import Link from "next/link";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/dashboard">Home</Link>
        </li>
        <li>
          <Link href="/dashboard/subscriptions">Subscriptions</Link>
        </li>
      </ul>
    </nav>
  );
};

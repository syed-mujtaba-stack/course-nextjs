import Link from "next/link";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Dashboard Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </nav>
  );
};

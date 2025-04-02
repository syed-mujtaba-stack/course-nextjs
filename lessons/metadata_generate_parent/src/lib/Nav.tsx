import styles from "./Nav.module.css";

import Link from "next/link";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ExampleLink href="/">Home</ExampleLink>
      <ExampleLink href="/about">About</ExampleLink>
      <ExampleLink href="/contact">Contact</ExampleLink>
      <ExampleLink href="/dashboard/security">Security</ExampleLink>
      <ExampleLink href="/dashboard/subscription">Subscription</ExampleLink>
    </nav>
  );
};

const ExampleLink = (props: React.PropsWithChildren<{ href: string }>) => {
  return (
    <Link className={styles.link} href={props.href}>
      {props.children}
    </Link>
  );
};

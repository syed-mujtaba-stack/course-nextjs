import { fetchPageIdAndTitles } from "@/api/cms";
import styles from "./Nav.module.css";

import Link from "next/link";

export const Nav = async () => {
  const pages = await fetchPageIdAndTitles();
  return (
    <nav className={styles.nav}>
      <ExampleLink href="/">Home</ExampleLink>
      {pages.map((page) => (
        <ExampleLink href={`/cms/${page.id}`} key={page.id}>
          {page.title}
        </ExampleLink>
      ))}
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

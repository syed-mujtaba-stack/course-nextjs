import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Generate a sitemap.xml listing the different products</h1>
      <ExampleLink href="/product/apple">Apple</ExampleLink>
      <ExampleLink href="/product/banana">Banana</ExampleLink>
      <ExampleLink href="/product/orange">Orange</ExampleLink>
    </div>
  );
}

import Link from "next/link";
const ExampleLink = (props: React.PropsWithChildren<{ href: string }>) => {
  return (
    <div>
      👉🏻{" "}
      <Link className={styles.link} href={props.href}>
        {props.children}
      </Link>
    </div>
  );
};

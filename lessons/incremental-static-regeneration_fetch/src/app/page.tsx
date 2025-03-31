import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Pick an example</h1>
      <ExampleLink href="/ssg">SSG Page</ExampleLink>
      <ExampleLink href="/ssr">SSR Page</ExampleLink>
      <ExampleLink href="/isr">ISR Page</ExampleLink>
    </div>
  );
}

import Link from "next/link";
const ExampleLink = (props: React.PropsWithChildren<{ href: string }>) => {
  return (
    <div>
      👉🏻{" "}
      <Link className={styles.link} href={props.href} prefetch={false}>
        {props.children}
      </Link>
    </div>
  );
};

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Detect Runtime Environment</h1>
      <ExampleLink href="/server">Render on Server Only</ExampleLink>
      <ExampleLink href="/client">Render on Client Only</ExampleLink>
      <ExampleLink href="/hydrate">
        Render on Server and Hydrate on Client
      </ExampleLink>
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

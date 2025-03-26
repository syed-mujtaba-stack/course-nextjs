import Link from 'next/link';
import styles from "./page.module.css";

export default async function Page() {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Client State Management with Context</h1>
      <Link href='/courses'>Courses Page</Link>
      <Link href='/courses'>Checkout Page</Link>
    </div>
  );
}

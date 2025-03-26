import Link from 'next/link';
import styles from "./page.module.css";

export default async function Page() {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Client State Management</h1>
      <Link className={styles.link} href='/courses'>Courses Page</Link>
      <Link className={styles.link} href='/courses'>Checkout Page</Link>
    </div>
  );
}

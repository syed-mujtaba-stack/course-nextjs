import styles from './page.module.css'
import Link from 'next/link';

export default function Page() {
  return (<div className={styles.root}>
    <h1 className={styles.title}>Detect Runtime Environment</h1>
    <Link href="/server">Render on Server Only</Link>
    <Link href="/client">Render on Client Only</Link>
    <Link href="/hydrate">Render on Server and Hydrate on Client</Link>
  </div>)
}

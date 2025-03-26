import styles from "./page.module.css";

export default async function Page() {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Client State Management</h1>
      <p className={styles.subheading}>
        Visit the different pages by using the links in the header 🫰🏻
      </p>
    </div>
  );
}

import styles from "./page.module.css";

export default async function Page() {
  const response = await fetch("http://localhost:3000/api/random");
  const { randomNumber } = await response.json();
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Random Winner 🎉</h1>
      <p className={styles.paragraph}>{randomNumber}</p>
    </div>
  );
}

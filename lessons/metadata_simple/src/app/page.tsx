import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to our home page",
};

export default function Page() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Welcome to our home 🏡</h1>
    </div>
  );
}

import styles from "./primeFactorsStyles.module.css";
import { fetchTableOfContents } from "./api";

export async function TableOfContents() {
  await fetchTableOfContents();
  return (
    <div className={`bg-blue-300 ${styles.component}`}>
      
    </div>
  );
}

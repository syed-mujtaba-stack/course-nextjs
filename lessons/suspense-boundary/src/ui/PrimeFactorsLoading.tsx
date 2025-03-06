import styles from "./primeFactorsStyles.module.css";

export function PrimeFactorLoading() {
  return <div className={`animate-pulse bg-gray-300 ${styles.common}`}>
    Computing prime factors...
  </div>;
}

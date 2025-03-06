import styles from "./primeFactorStyles.module.css";

export function PrimeFactorLoading() {
  return <div className={`animate-pulse bg-gray-300 ${styles.common}`} />;
}

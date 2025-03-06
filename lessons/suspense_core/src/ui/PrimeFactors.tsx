import styles from "./primeFactorsStyles.module.css";
import { primeFactorsAPI } from "./primeFactorsAPI";

export async function PrimeFactors({ input }: { input: number }) {
  const [factor1, factor2] = await primeFactorsAPI(input);
  return (
    <div className={`text-2xl bg-blue-300 ${styles.component}`}>
      Prime Factors: {factor1} x {factor2}
    </div>
  );
}

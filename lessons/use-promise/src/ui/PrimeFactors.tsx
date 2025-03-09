'use client';

import styles from "./primeFactorsStyles.module.css";
import { primeFactorsAPI } from "./primeFactorsAPI";

export function PrimeFactors({ input }: { input: number }) {
  primeFactorsAPI(input);
  return (
    <div className={`bg-blue-300 ${styles.component}`}>
      
    </div>
  );
}

"use client";

import styles from "./primeFactorsStyles.module.css";
import { primeFactorsAPI } from "./primeFactorsAPI";
import { use } from "react";

export function PrimeFactors({ input }: { input: number }) {
  const [factor1, factor2] = use(primeFactorsAPI(input));

  return (
    <div className={`bg-blue-300 ${styles.component}`}>
      Prime Factors: {factor1} x {factor2}
    </div>
  );
}

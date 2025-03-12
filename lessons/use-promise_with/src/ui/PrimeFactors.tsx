"use client";

import styles from "./primeFactorsStyles.module.css";
import { use } from "react";

export function PrimeFactors({ promise }: { promise: Promise<[number, number]> }) {
  const [factor1, factor2] = use(promise);

  return (
    <div className={`bg-blue-300 ${styles.component}`}>
      Prime Factors: {factor1} x {factor2}
    </div>
  );
}

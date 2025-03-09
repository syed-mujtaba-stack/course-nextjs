"use client";

import styles from "./primeFactorsStyles.module.css";
import { primeFactorsAPI } from "./primeFactorsAPI";
import { useEffect, useState } from "react";
import { PrimeFactorLoading } from "./PrimeFactorsLoading";

export function PrimeFactors({ input }: { input: number }) {
  const [factors, factorsSet] = useState<[number, number] | null>(null);

  useEffect(() => {
    primeFactorsAPI(input).then(([factor1, factor2]) => {
      factorsSet([factor1, factor2]);
    });
  }, [input]);

  if (factors === null) {
    return <PrimeFactorLoading />;
  }

  const [factor1, factor2] = factors;

  return (
    <div className={`bg-blue-300 ${styles.component}`}>
      Prime Factors: {factor1} x {factor2}
    </div>
  );
}

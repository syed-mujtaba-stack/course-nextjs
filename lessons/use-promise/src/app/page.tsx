/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrimeFactors } from "@/ui/PrimeFactors";
import { PrimeFactorLoading } from "@/ui/PrimeFactorsLoading";
import { Suspense } from "react";

export default function Home() {
  const input = 6999999989 * 7000000001;
  return (
    <>
      <h1 className="text-3xl">Prime Factors for {input}</h1>
      <PrimeFactors input={input} />
    </>
  );
}

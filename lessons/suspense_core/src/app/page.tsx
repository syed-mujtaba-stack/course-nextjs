import { PrimeFactors } from "@/ui/PrimeFactors";
import { Suspense } from "react";
import { PrimeFactorLoading } from "@/ui/PrimeFactorsLoading";

export default function Home() {
  const input = 6999999989 * 7000000001;
  return (
    <>
      <h1 className="text-3xl">Prime Factors for {input}</h1>
      <Suspense fallback={<PrimeFactorLoading />}>
        <PrimeFactors input={input} />
      </Suspense>
    </>
  );
}

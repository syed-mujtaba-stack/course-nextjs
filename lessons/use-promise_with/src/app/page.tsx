import { PrimeFactors } from "@/ui/PrimeFactors";
import { primeFactorsAPI } from '@/ui/primeFactorsAPI';
import { PrimeFactorLoading } from "@/ui/PrimeFactorsLoading";
import { Suspense } from "react";

export default function Home() {
  const input = 6999999989 * 7000000001;
  const promise = primeFactorsAPI(input);
  return (
    <>
      <h1 className="text-3xl">Prime Factors for {input}</h1>
      <Suspense fallback={<PrimeFactorLoading />}>
        <PrimeFactors promise={promise} />
      </Suspense>
    </>
  );
}

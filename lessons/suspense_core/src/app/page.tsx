import { PrimeFactors } from "@/ui/PrimeFactors";
import { Suspense } from "react";
import { PrimeFactorLoading } from "@/ui/PrimeFactorsLoading";

export default function Home() {
  const input = 6999999989 * 7000000001;
  return (
    <>
      <Suspense fallback={<PrimeFactorLoading />}>
        <PrimeFactors input={input} />
      </Suspense>
    </>
  );
}

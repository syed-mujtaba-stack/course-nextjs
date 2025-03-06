import { PrimeFactor } from "@/ui/PrimeFactor";
import { Suspense } from "react";
import { PrimeFactorLoading } from "@/ui/PrimeFactorLoading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<PrimeFactorLoading />}>
        <PrimeFactor />
      </Suspense>
    </>
  );
}

import { PrimeFactor } from "@/ui/PrimeFactor";
import { PrimeFactorLoading } from "@/ui/PrimeFactorLoading";

import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<PrimeFactorLoading />}>
        <PrimeFactor />
      </Suspense>
    </>
  );
}

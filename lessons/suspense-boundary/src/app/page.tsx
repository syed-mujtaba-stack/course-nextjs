import { TableOfContents } from "@/lib/TableOfContents";
import { PrimeFactorLoading } from "@/lib/PrimeFactorsLoading";
import { Suspense } from "react";

export default function Home() {
  const input = 6999999989 * 7000000001;
  return (
    <>
      <h1 className="text-3xl">Prime Factors for {input}</h1>
      <Suspense fallback={<PrimeFactorLoading />}>
        <TableOfContents input={input} />
      </Suspense>
    </>
  );
}

import { primeFactorAPI } from "./primeFactorAPI";
import { commonClassName } from "./common";

export async function PrimeFactor() {
  const [factor1, factor2] = await primeFactorAPI(48999999930000000000);
  return (
    <div className={`text-2xl bg-blue-300 ${commonClassName}`}>
      Prime Factors: {factor1} x {factor2}
    </div>
  );
}

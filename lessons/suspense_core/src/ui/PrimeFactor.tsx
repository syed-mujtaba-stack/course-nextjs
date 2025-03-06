import { primeFactorAPI } from "./primeFactorAPI";
import { commonClassName } from "./common";

export async function PrimeFactor() {
  const result = await primeFactorAPI(489538065520461000);
  return <div className={`text-4xl bg-blue-300 ${commonClassName}`}>Result: {result}</div>;
}

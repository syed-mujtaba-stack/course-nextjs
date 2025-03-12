import { PageError } from "@/lib/PageError";
import { SquareRoot } from "@/lib/SquareRoot";

export default function Page() {
  return (
    <div>
      <h1>Square Root Calculators</h1>
      <PageError>
        <h2>Calculator 1:</h2>
        <SquareRoot />
        <hr />
        <h2>Calculator 2:</h2>
        <SquareRoot />
      </PageError>
    </div>
  );
}

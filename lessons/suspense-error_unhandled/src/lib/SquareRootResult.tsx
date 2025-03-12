import { use } from "react";

export const SquareRootResult = ({ input }: { input: Promise<number> }) => {
  const result = use(input);
  return <div>{result}</div>;
};

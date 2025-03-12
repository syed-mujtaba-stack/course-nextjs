import { use } from "react";
import { sqrt } from "./api";

export const SquareRootResult = ({ value }: { value: number }) => {
  console.log('before ')
  const result = use(sqrt(value));
  console.log('after ')

  return <div>{result}</div>;
};

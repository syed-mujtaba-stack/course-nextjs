import { use, useEffect, useState } from "react";
import { sqrt } from "./api";

export const SquareRootResult = ({ value }: { value: number }) => {
  const [result, setResult] = useState("");
  useEffect(() => {
    setResult(use(sqrt(value)));
  }, [value]);

  return <div>{result}</div>;
};

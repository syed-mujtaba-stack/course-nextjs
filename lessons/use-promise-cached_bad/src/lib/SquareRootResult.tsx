"use client";

import { use } from "react";
import { sqrt } from "./api";

export const SquareRootResult = ({ input }: { input: number }) => {
  const result = use(sqrt(input));
  return <div>{result.toFixed(2)}</div>;
};

"use client";

import { use } from "react";
import { fetchSqrt } from "./api";

export const SquareRootResult = ({ input }: { input: number }) => {
  const result = use(fetchSqrt(input));
  return <div>{result.toFixed(2)}</div>;
};

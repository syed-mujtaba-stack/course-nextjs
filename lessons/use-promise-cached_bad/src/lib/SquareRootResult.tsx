"use client";

import { fetchSqrt } from "./api";
import { use } from "react";

export const SquareRootResult = ({ input }: { input: number }) => {
  const result = use(fetchSqrt(input));
  return <div>{result.toFixed(2)}</div>;
};

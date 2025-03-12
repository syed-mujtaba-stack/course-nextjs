"use client";

import { use } from "react";
import { sqrt } from "./api";

export const SquareRootResult = ({ value }: { value: number }) => {
  const result = use(sqrt(value));
  return <div>{result}</div>;
};

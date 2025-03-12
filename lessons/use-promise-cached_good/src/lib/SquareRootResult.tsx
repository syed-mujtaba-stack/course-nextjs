"use client";

import { use } from "react";

export const SquareRootResult = ({ input }: { input: Promise<number> }) => {
  const result = use(input);
  return <div>{result.toFixed(2)}</div>;
};

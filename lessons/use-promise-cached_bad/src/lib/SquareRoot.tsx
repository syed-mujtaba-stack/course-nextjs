"use client";

import { Suspense, useState } from "react";
import { SquareRootResult } from "./SquareRootResult";

export const SquareRoot = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(+e.target.value);
        }}
      />
      <Suspense fallback={<div>Calculating...</div>}>
        <SquareRootResult value={value} />
      </Suspense>
    </>
  );
};

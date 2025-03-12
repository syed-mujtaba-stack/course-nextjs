"use client";

import { Suspense, useMemo, useState } from "react";
import { SquareRootResult } from "./SquareRootResult";
import { fetchSquareRoot } from "./api";

export const SquareRoot = () => {
  const [value, setValue] = useState(0);
  const promise = useMemo(() => fetchSquareRoot(value), [value]);

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
        <SquareRootResult input={promise} />
      </Suspense>
    </>
  );
};

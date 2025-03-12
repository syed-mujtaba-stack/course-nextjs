"use client";

import { Suspense, useMemo, useState } from "react";
import { SquareRootResult } from "./SquareRootResult";
import { fetchSquareRoot } from "./api";
import { SquareRootError } from "./SquareRootError";

export const SquareRoot = () => {
  const [value, setValue] = useState(0);
  const promise = useMemo(() => fetchSquareRoot(value), [value]);

  return (
    <>
      <SquareRootError onReset={() => setValue(0)}>
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
      </SquareRootError>
    </>
  );
};

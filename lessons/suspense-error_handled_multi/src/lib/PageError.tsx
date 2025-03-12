"use client";

import { ErrorBoundary, FallbackProps } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <>
      <div>Failed: {error.message}</div>
      <button onClick={resetErrorBoundary}>Reset</button>
    </>
  );
}

export const PageError = ({ children }: React.PropsWithChildren) => {
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
};

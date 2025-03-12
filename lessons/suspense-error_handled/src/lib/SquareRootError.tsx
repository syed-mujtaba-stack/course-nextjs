import { ErrorBoundary, FallbackProps } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <>
      <div>Failed: {error.message}</div>
      <button onClick={resetErrorBoundary}>Reset</button>
    </>
  );
}

export const SquareRootError = ({
  children,
  onReset,
}: React.PropsWithChildren<{ onReset: () => void }>) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback} onReset={onReset}>
      {children}
    </ErrorBoundary>
  );
};

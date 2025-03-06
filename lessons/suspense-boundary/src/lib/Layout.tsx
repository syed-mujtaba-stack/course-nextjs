export function Row({
  children,
  vAlign,
  gap,
}: React.PropsWithChildren<{ gap?: number; vAlign?: "center" }>) {
  return (
    <div
      className="flex flex-row"
      style={{ gap, ...(vAlign == "center" ? { alignItems: "center" } : {}) }}
    >
      {children}
    </div>
  );
}

export function Column({
  children,
  gap,
}: React.PropsWithChildren<{ gap?: number }>) {
  return (
    <div className="flex flex-col" style={{ gap }}>
      {children}
    </div>
  );
}

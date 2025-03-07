export function Row({
  children,
  vAlign,
  gap,
  className,
}: React.PropsWithChildren<{
  gap?: number;
  vAlign?: "center";
  className?: string;
}>) {
  return (
    <div
      className={`flex flex-row ${className ?? ""}`}
      style={{ gap, ...(vAlign == "center" ? { alignItems: "center" } : {}) }}
    >
      {children}
    </div>
  );
}

export const PageRoot = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export function Column({
  children,
  gap,
  className,
}: React.PropsWithChildren<{ gap?: number; className?: string }>) {
  return (
    <div className={`flex flex-col ${className ?? ""}`} style={{ gap }}>
      {children}
    </div>
  );
}

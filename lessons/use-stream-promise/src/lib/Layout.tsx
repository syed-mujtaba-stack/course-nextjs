export function Row({
  children,
  vAlign,
  gap,
  flex,
  className,
}: React.PropsWithChildren<{
  gap?: number;
  flex?: number;
  vAlign?: "center";
  className?: string;
}>) {
  return (
    <div
      className={`flex flex-row ${className ?? ""}`}
      style={{
        gap,
        ...(vAlign == "center" ? { alignItems: "center" } : {}),
        ...(flex ? { flex } : {}),
      }}
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
  flex,
  className,
}: React.PropsWithChildren<{
  gap?: number;
  flex?: number;
  className?: string;
}>) {
  return (
    <div
      className={`flex flex-col ${className ?? ""}`}
      style={{ gap, ...(flex ? { flex } : {}) }}
    >
      {children}
    </div>
  );
}

const isClient = typeof window !== "undefined";

export default function DetectEnvironment() {
  return <div>{isClient ? "Client-side" : "Server-side"}</div>;
}

"use client";

import { useEffect, useState } from "react";

export default function UpliftOnClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Runs only on the client
  }, []);

  return <div>{isClient ? "Client-side" : "Server-side"}</div>;
}

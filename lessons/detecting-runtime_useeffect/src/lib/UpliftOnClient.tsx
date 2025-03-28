"use client";

import { useEffect, useState } from "react";

export default function UpliftOnClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Runs only on the client
    setIsClient(true);
  }, []);

  return <div>{isClient ? "Client-side" : "Server-side"}</div>;
}

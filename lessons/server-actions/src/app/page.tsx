"use client";

import { Button } from "@/lib/Button";

export default function Home() {
  return <Button onClick={() => alert("Stop Clicking Me!")}>Click Me!</Button>;
}

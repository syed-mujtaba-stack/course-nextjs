"use client";

import { Button } from "@/lib/Button";

export default function Page() {
  return <Button onClick={() => alert("Stop Clicking Me!")}>Click Me!</Button>;
}

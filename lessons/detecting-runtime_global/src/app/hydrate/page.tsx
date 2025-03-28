"use client";

import DetectEnvironment from "@/lib/DetectEnvironment";

export default function Page() {
  /** 
   * This will result in a runtime hydration error
   * Reason: 
   * - client components render on server and hydrate on client
   * - the output of both should match
   * - this is not the case for <DetectEnvironment/>
   */
  return <DetectEnvironment />;
}

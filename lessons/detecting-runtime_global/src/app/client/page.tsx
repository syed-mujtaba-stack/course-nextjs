"use client";

import dynamic from "next/dynamic";

const DetectEnvironment = dynamic(
  () => import("./../../lib/DetectEnvironment"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <DetectEnvironment />;
}

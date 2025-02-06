"use client";

import dynamic from "next/dynamic";

export const ClientOnlyRoot = dynamic(
  () => import("./ClientOnly").then((module) => module.ClientOnly),
  {
    ssr: false,
  }
);

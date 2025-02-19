"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    sendToErrorMonitoring();
  }, []);
  return (
    <div>
      Oh no! Something went wrong 😱
      <Link href="/" replace>Go back to the homepage</Link>
    </div>
  );
}

function sendToErrorMonitoring() {
  /** Example */
  console.log("Error Logged for Monitoring 🚨");
}

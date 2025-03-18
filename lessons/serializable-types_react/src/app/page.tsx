"use client";

import { useEffect } from "react";
import { serverFunction } from "@/lib/functions";

export default function Page() {
  useEffect(() => {
    serverFunction({ date: new Date() })
      .then((body) =>
        console.log(body.date instanceof Date, body.date)
      );
  }, []);

  return <div>Take a look at the console 👀</div>;
}

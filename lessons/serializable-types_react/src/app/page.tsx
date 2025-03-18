"use client";

import { useEffect } from "react";
import { serverFunction } from "@/lib/functions";

export default function Page() {
  useEffect(() => {
    serverFunction({ date: new Date() })
      .then((body) =>
        console.log({
          isDate: body.date instanceof Date,
          type: typeof body.date,
          value: body.date,
        })
      );
  }, []);

  return <div>Take a look at the console 👀</div>;
}

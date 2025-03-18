"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: new Date(),
      }),
    })
      .then((res) => res.json())
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

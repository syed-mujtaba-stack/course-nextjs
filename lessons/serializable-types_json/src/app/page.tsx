"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: new Date(),
      }),
    })
      .then((res) => res.json())
      .then((body) => console.log(typeof body.date, body.date));
  }, []);

  return <div>Take a look at the console 👀</div>;
}

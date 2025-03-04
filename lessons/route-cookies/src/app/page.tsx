"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [whoami, whoamiSet] = useState("");

  const whoamiFetch = async () => {
    const response = await fetch("/api/whoami");
    const whoami = await response.text();
    whoamiSet(whoami);
  };

  const makeSetRequest = async () => {
    await fetch("/api/cookies/set");
    await whoamiFetch();
  };

  const makeDeleteRequest = async () => {
    await fetch("/api/cookies/delete");
    await whoamiFetch();
  };

  useEffect(() => {
    whoamiFetch();
  }, []);

  return (
    <>
      <h1>Demo: Route Cookies</h1>
      <div className="row">
        <button onClick={makeSetRequest}>Set Cookie `auth`</button>
        <button onClick={makeDeleteRequest}>Delete Cookie `auth`</button>
      </div>
      <p>You Are:{whoami}</p>
    </>
  );
}

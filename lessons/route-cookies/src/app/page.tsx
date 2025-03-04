"use client";

import { useState } from "react";

export default function Page() {
  const [authCookieValue, setAuthCookieValue] = useState("");
  const makeSetRequest = async () => {
    await fetch("/api/cookies/set");
  };
  const makeGetRequest = async () => {
    const response = await fetch("/api/cookies/get");
    const data = await response.json();
    setAuthCookieValue(data.auth);
  };

  return (
    <>
      <h1>Demo: NextRequest && NextResponse</h1>
      <h2>Cookies</h2>
      <button onClick={makeSetRequest}>Set Cookie `auth`</button>
      <button onClick={makeGetRequest}>Read Cookie `auth`</button>
      {authCookieValue && <p>`auth` Cookie Value:{authCookieValue}</p>}
    </>
  );
}

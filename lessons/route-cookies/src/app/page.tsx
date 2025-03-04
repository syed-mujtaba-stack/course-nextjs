"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [authCookieValue, setAuthCookieValue] = useState("");

  const makeGetRequest = async () => {
    const response = await fetch("/api/cookies/get");
    const data = await response.json();
    setAuthCookieValue(data.auth);
  };

  const makeSetRequest = async () => {
    await fetch("/api/cookies/set");
    await makeGetRequest();
  };

  const makeDeleteRequest = async () => {
    await fetch("/api/cookies/delete");
    await makeGetRequest();
  };

  useEffect(() => {
    makeGetRequest();
  }, []);

  return (
    <>
      <h1>Demo: Route Cookies</h1>
      <div className='row'>
        <button onClick={makeSetRequest}>Set Cookie `auth`</button>
        <button onClick={makeDeleteRequest}>Delete Cookie `auth`</button>
      </div>
      <p>`auth` Cookie Value:{authCookieValue ?? "<COOKIE NOT SET>"}</p>
    </>
  );
}

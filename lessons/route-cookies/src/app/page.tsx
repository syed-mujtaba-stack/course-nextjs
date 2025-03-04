"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [whoami, whoamiSet] = useState("");

  const whoamiFetch = async () => {
    const response = await fetch("/api/whoami");
    const whoami = await response.text();
    whoamiSet(whoami);
  };

  const login = async () => {
    await fetch("/api/login");
    await whoamiFetch();
  };

  const logout = async () => {
    await fetch("/api/logout");
    await whoamiFetch();
  };

  useEffect(() => {
    whoamiFetch();
  }, []);

  return (
    <>
      <h1>Demo: Route Cookies</h1>
      <div className="row">
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
      <p>You Are: {whoami}</p>
    </>
  );
}

"use client";

import { login } from "@/lib/functions";
import { useState, useTransition } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const [serverResult, setServerResult] = useState<{
    success?: string;
    error?: string;
  }>({});

  function handleSubmit() {
    startTransition(async () => {
      const result = await login({ username: name });
      setServerResult(result);
    });
  }

  return (
    <div className="root">
      <form action={handleSubmit}>
        <input
          name="username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setServerResult({});
          }}
          placeholder="Enter your username"
        />
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </form>
      {serverResult.error && <p className="error">{serverResult.error}</p>}
      {serverResult.success && (
        <p className="success">{serverResult.success}</p>
      )}
    </div>
  );
}

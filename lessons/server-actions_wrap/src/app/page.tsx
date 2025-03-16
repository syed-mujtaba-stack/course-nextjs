"use client";

import { login, LoginResponse } from "@/lib/functions";
import { useState, useTransition } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const [serverResult, setServerResult] = useState<LoginResponse | null>(null);

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
            setServerResult(null);
          }}
          placeholder="Enter your username"
          disabled={isPending}
        />
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </form>

      {serverResult != null && "error" in serverResult && (
        <p className="error">{serverResult.error}</p>
      )}
      {serverResult != null && "success" in serverResult! && (
        <p className="success">{serverResult.success}</p>
      )}
    </div>
  );
}

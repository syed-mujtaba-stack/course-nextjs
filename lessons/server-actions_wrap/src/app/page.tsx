"use client";

import { login, LoginResponse } from "@/lib/functions";
import { useState, useTransition } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const [serverResult, setServerResult] = useState<LoginResponse | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    setServerResult(null);
  }

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
          onChange={handleChange}
          placeholder="Enter your username"
          disabled={isPending}
        />
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </form>

      {serverResult != null && (
        <p className={serverResult.type}>{serverResult.message}</p>
      )}
    </div>
  );
}

"use client";

import { login } from "@/lib/functions";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");

  return (
    <div className="root">
      <form action={login}>
        <input
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

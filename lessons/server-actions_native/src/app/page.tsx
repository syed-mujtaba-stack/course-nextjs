"use client";

import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  return (
    <div className="page">
      <form action="/api/login" method="POST">
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

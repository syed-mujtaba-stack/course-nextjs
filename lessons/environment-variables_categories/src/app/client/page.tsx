"use client";

export default function Page() {
  return (
    <div>
      <h1>Client Environment</h1>
      <div>
        `DB_URL`:
        <b>{process.env.DB_URL ?? "undefined"}</b>
      </div>
      <div>
        `NEXT_PUBLIC_TRACKING_ID`:
        <b>{process.env.NEXT_PUBLIC_TRACKING_ID ?? "undefined"}</b>
      </div>
    </div>
  );
}

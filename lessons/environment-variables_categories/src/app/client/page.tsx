"use client";

export default function Page() {
  return (
    <div>
      <h1>Client Side Code</h1>
      <div>
        `DB_URL`:
        <b>{process.env.DB_URL}</b>
      </div>
      <div>
        `NEXT_PUBLIC_TRACKING_ID`:
        <b>{process.env.NEXT_PUBLIC_TRACKING_ID}</b>
      </div>
    </div>
  );
}

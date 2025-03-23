import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <Link href="/server">Server Side Code</Link>
      <Link href="/client">Client Side Code</Link>
    </div>
  );
}

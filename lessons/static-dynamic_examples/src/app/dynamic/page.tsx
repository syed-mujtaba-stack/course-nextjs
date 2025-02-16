import { headers } from "next/headers";

export default async function Dynamic() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");

  return (
    <div>
      This page is dynamic as it uses `headers`.
      <br />
      User Agent: {userAgent}
    </div>
  );
}

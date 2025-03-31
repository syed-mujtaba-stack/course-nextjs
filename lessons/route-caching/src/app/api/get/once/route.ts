import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  console.log("Running GET");
  return NextResponse.json({
    message: "Hello",
  });
}

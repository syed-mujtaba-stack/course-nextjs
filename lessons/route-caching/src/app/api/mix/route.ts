import { NextResponse } from "next/server";

// Since this file exports a `POST`, the `dynamic` option will have no effect
export const dynamic = "force-static";

export async function GET() {
  console.log("Running GET");
  return NextResponse.json({
    message: "Hello",
  });
}

export async function POST() {
  console.log("Running POST");
  return NextResponse.json({
    message: "Hello",
  });
}

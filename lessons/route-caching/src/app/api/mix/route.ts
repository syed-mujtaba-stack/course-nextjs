import { NextResponse } from "next/server";

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

import { NextResponse } from "next/server";

export const revalidate = 10;

export async function GET() {
  console.log("Running GET");
  return NextResponse.json({
    message: "Hello",
  });
}

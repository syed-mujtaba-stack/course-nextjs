import { NextResponse } from "next/server";

export async function GET() {
  console.log('Running GET');
  return NextResponse.json({
    message: "Hello",
  });
}

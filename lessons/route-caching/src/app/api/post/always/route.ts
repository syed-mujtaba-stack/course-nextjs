import { NextResponse } from "next/server";

export async function POST() {
  console.log('Running POST');
  return NextResponse.json({
    message: "Hello",
  });
}

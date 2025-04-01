import { NextResponse } from "next/server";

export async function GET() {
  const randomNumber = Math.floor(Math.random() * 99) + 1;
  return NextResponse.json({
    randomNumber,
  });
}

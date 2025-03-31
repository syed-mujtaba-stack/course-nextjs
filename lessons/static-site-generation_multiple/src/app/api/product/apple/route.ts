import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    title: "Apple",
    icon: "🍎",
    description: "An apple a day, keeps the doctor away",
  });
}

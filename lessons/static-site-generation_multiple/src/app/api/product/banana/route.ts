import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    title: "Banana",
    icon: "🍌",
    description: "A banana a day, keeps the cramps away",
  });
}

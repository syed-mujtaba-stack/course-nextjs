import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    title: "Orange",
    icon: "🍊",
    description: "An orange a day, keeps the sniffles away! 🤧",
  });
}

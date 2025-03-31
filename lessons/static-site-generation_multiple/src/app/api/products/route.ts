import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    products: [
      "apple",
      "orange",
      "banana",
    ],
  });
}

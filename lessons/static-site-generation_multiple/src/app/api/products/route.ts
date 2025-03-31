import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    productNames: [
      "apple",
      "orange",
      "banana",
    ],
  });
}

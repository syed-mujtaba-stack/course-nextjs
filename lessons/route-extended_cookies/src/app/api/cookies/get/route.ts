import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const authCookieValue = request.cookies.get("auth")?.value;
  return NextResponse.json({
    auth: authCookieValue,
  });
}

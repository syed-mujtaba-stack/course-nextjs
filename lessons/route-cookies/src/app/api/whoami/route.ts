import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const authCookie = request.cookies.get("auth");
  return new NextResponse(authCookie ? authCookie.value : "Anonymous");
}

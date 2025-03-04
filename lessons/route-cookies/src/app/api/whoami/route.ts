import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const authCookie = request.cookies.get("auth");
  const whoami = authCookie ? authCookie.value : "Anonymous";
  return new NextResponse(whoami);
}

import { NextResponse } from "next/server";

export function GET() {
  const response = new NextResponse();
  response.cookies.set("auth", "john-doe");
  return response;
}

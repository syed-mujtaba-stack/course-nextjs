import { NextResponse } from "next/server";

export function GET() {
  const response = NextResponse.json({ message: "Success" });
  response.cookies.delete("auth");
  return response;
}

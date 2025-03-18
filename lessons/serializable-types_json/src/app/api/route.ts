import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(typeof body.date, body.date);

  return NextResponse.json({
    date: new Date(),
  });
}

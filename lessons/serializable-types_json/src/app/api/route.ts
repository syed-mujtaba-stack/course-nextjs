import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  console.log({
    isDate: body.date instanceof Date,
    type: typeof body.date,
    value: body.date,
  });

  return NextResponse.json({
    date: new Date(),
  });
}

import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get("name");

  return Response.json({
    pathname,
    searchParams: {
      name,
    },
  });
}

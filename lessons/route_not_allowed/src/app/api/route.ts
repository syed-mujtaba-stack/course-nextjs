export async function GET() {
  return Response.json({
    method: "GET",
  });
}

export async function POST(req: Request) {
  const json = await req.json();
  return Response.json({
    method: "POST",
    request: json,
  });
}

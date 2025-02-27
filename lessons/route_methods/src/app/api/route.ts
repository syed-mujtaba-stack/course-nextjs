export async function POST(req: Request) {
  const json = await req.json();
  return Response.json({
    method: "POST",
    request: json,
  });
}

export async function PUT(req: Request) {
  const json = await req.json();
  return Response.json({
    method: "PUT",
    request: json,
  });
}

export async function PATCH(req: Request) {
  const json = await req.json();
  return Response.json({
    method: "PATCH",
    request: json,
  });
}

export async function DELETE() {
  return Response.json({
    method: "DELETE",
  });
}

export async function OPTIONS() {
  return Response.json({
    method: "OPTIONS",
  });
}

export async function GET() {
  return Response.json(
    {
      method: "GET",
    },
    {
      headers: {
        method: "GET",
      },
    }
  );
}

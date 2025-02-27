export async function GET() {
  return Response.json({
    method: "GET",
  });
}

export async function POST() {
  return Response.json({
    method: "POST",
  });
}

export async function PUT() {
  return Response.json({
    method: "PUT",
  });
}

export async function PATCH() {
  return Response.json({
    method: "PATCH",
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

export async function POST(request: Request) {
  const json = await request.json();
  return Response.json({
    message: `Hello ${json.name}!`,
  });
}

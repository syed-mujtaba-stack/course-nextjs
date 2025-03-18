import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    <div style={{ fontSize: "24px" }}>Simple Image</div>,
    {
      width: 300,
      height: 300,
    }
  );
}

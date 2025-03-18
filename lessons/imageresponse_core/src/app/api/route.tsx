import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          /** Take up all the space from the parent */
          height: "100%",
          width: "100%",

          /** Setup a column layout */
          display: "flex",
          flexDirection: "column",

          /** Center the children */
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "36px" }}>Sample Image</div>
      </div>
    ),
    {
      width: 300,
      height: 300,
    }
  );
}

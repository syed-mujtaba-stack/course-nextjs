import {
  ImageResponseFullBackgroundImg,
  ImageResponseRoot,
} from "@/lib/ImageResponseComponents";
import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <ImageResponseRoot>
        <ImageResponseFullBackgroundImg src="http://localhost:3000/images/background.png" />
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "69px" }}>Sample Image</div>
        </div>
      </ImageResponseRoot>
    ),
    {
      width: 1080,
      height: 1080,
    }
  );
}

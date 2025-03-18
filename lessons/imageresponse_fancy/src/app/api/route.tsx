import {
  ImageResponseCenteredText,
  ImageResponseFullBackgroundImg,
  ImageResponseRoot,
  localImageToSrc,
} from "@/lib/ImageResponseComponents";
import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <ImageResponseRoot>
        <ImageResponseFullBackgroundImg
          src={await localImageToSrc("./public/images/background.png")}
        />
        <ImageResponseCenteredText>
          <div style={{ fontSize: "69px" }}>Sample Image</div>
        </ImageResponseCenteredText>
      </ImageResponseRoot>
    ),
    {
      width: 1080,
      height: 1080,
    }
  );
}

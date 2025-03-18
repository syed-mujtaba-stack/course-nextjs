import {
  ImageResponseCenteredText,
  ImageResponseFullBackgroundImg,
  ImageResponseRoot,
  localImageToSrc,
} from "@/lib/ImageResponseComponents";
import { ImageResponse } from "next/og";
import { fontGagalin, getFontGagalin } from "@/lib/ImageResponseFonts";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const message = new URL(req.url).searchParams.get("message") ?? "NO MESSAGE";

  return new ImageResponse(
    (
      <ImageResponseRoot>
        <ImageResponseFullBackgroundImg
          src={await localImageToSrc("./public/images/background.png")}
        />
        <ImageResponseCenteredText>
          <div style={{ fontSize: "69px", fontFamily: fontGagalin }}>
            {message}
          </div>
        </ImageResponseCenteredText>
      </ImageResponseRoot>
    ),
    {
      width: 1080,
      height: 1080,
      fonts: [await getFontGagalin()],
    }
  );
}

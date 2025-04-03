import {
  ImageResponseFullBackgroundImg,
  ImageResponseRoot,
  localImageToSrc,
  ImageResponseRow,
  ImageResponseOverlay,
  ImageResponseText,
  ImageResponseColumn,
} from "@/lib/ImageResponseComponents";
import { ImageResponse } from "next/og";
import {
  fontGagalin,
  getFontGagalin,
  fontFredoka,
  getFontFredoka,
} from "@/lib/ImageResponseFonts";
import { NextRequest } from "next/server";
import { fetchProduct } from "@/lib/cms";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ sku: string }> }
) {
  const { sku } = await params;
  const product = await fetchProduct(sku);

  return new ImageResponse(
    (
      <ImageResponseRoot>
        <ImageResponseFullBackgroundImg
          src={await localImageToSrc("./public/images/metadata-background.png")}
        />
        <ImageResponseOverlay top="50px" left="50px" bottom="120px" right="50px">
          <ImageResponseColumn gap={20}>
            <ImageResponseRow gap={20}>
              <ImageResponseText style={{ fontSize: 90 }}>
                {product.icon}
              </ImageResponseText>
              <ImageResponseText style={{ color: "white", fontSize: 90, fontFamily: fontFredoka }}>
                {product.title}
              </ImageResponseText>
            </ImageResponseRow>
            <ImageResponseText style={{ color: "white", fontSize: 40, fontFamily: fontGagalin }}>
              {product.description}
            </ImageResponseText>
          </ImageResponseColumn>
        </ImageResponseOverlay>
      </ImageResponseRoot>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [await getFontGagalin(), await getFontFredoka()],
    }
  );
}

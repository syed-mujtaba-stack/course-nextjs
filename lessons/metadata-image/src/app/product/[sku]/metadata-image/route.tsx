import {
  ImageResponsePlaceAtXY,
  ImageResponseFullBackgroundImg,
  ImageResponseRoot,
  localImageToSrc,
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
        <ImageResponsePlaceAtXY x={50} y={100} style={{ fontSize: 60 }}>
          {product.icon}
        </ImageResponsePlaceAtXY>
        <ImageResponsePlaceAtXY
          x={140}
          y={80}
          style={{ fontSize: 90, color: "white", fontFamily: fontFredoka }}
        >
          {product.title}
        </ImageResponsePlaceAtXY>
        <ImageResponsePlaceAtXY
          x={55}
          y={200}
          style={{ fontSize: 40, color: "white", fontFamily: fontGagalin }}
        >
          {product.description}
        </ImageResponsePlaceAtXY>
      </ImageResponseRoot>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [await getFontGagalin(), await getFontFredoka()],
    }
  );
}

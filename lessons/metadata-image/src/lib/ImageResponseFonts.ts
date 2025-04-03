import { ImageResponse } from "next/og";
import { promises as fs } from "fs";
import path from "path";

type FontOptions = NonNullable<
  NonNullable<ConstructorParameters<typeof ImageResponse>[1]>["fonts"]
>[number];

export const fontGagalin = "Gagalin";
export const getFontGagalin = async (): Promise<FontOptions> => {
  const data = await fs.readFile(path.resolve("./public/fonts/Gagalin.otf"));
  return {
    name: fontGagalin,
    data: data,
  };
};

export const fontFredoka = "Fredoka";
export const getFontFredoka = async (): Promise<FontOptions> => {
  const data = await fs.readFile(path.resolve("./public/fonts/Fredoka.ttf"));
  return {
    name: fontFredoka,
    data: data,
  };
};

import { promises as fs } from "fs";
import path from "path";

import type { ImageResponse } from "next/og";
type FontOptions = NonNullable<
  NonNullable<
    ConstructorParameters<typeof ImageResponse>[1]
  >["fonts"]
>[number];

export const fontGagalin = "Gagalin";

export const getFontGagalin = async (): Promise<FontOptions> => {
  const data = await fs.readFile(path.resolve("./public/fonts/Gagalin.otf"));
  return {
    name: fontGagalin,
    data: data,
  };
};

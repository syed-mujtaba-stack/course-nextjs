export const ImageResponseRoot = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        /** Take up all the space from the parent */
        height: "100%",
        width: "100%",
        /** Setup a column layout */
        display: "flex",
        flexDirection: "column",
        /** Allow children to position themselves relatively */
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

export const ImageResponseFullBackgroundImg = ({ src }: { src: string }) => {
  return (
    <img
      style={{
        position: "absolute",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
      }}
      src={src}
    />
  );
};

export const ImageResponseCenteredText = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

import path from "path";
import { promises as fs } from "fs";
export async function localImageToSrc(localPath: string): Promise<string> {
  const imageBuffer = await fs.readFile(path.resolve(localPath));
  const base64ImageSrc = `data:image/png;base64,${imageBuffer.toString(
    "base64"
  )}`;
  return base64ImageSrc;
}

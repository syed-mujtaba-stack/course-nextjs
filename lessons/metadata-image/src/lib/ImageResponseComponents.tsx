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

export const ImageResponsePlaceAtXY = ({
  children,
  x,
  y,
  style,
}: React.PropsWithChildren<{
  x: number;
  y: number;
  style?: CSSProperties;
}>) => {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        left: x,
        top: y,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

import path from "path";
import { promises as fs } from "fs";
import { CSSProperties } from "react";
export async function localImageToSrc(localPath: string): Promise<string> {
  const imageBuffer = await fs.readFile(path.resolve(localPath));
  const base64ImageSrc = `data:image/png;base64,${imageBuffer.toString(
    "base64"
  )}`;
  return base64ImageSrc;
}

export const ImageResponseOverlay = ({
  children,
  style,
  top, right, bottom, left,
}: React.PropsWithChildren<{
  style?: CSSProperties;
  top: CSSProperties["top"]; right: CSSProperties["right"]; bottom: CSSProperties["bottom"]; left: CSSProperties["left"];
}>) => {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        ...style,
        top, right, bottom, left,
      }}
    >
      {children}
    </div>
  );
};

export const ImageResponseRow = ({
  children,
  style,
  gap,
}: React.PropsWithChildren<{
  style?: CSSProperties;
  gap?: CSSProperties["gap"];
}>) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        ...style,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export const ImageResponseColumn = ({
  children,
  style,
  gap,
}: React.PropsWithChildren<{
  style?: CSSProperties;
  gap?: CSSProperties["gap"];
}>) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export const ImageResponseText = ({
  children,
  style,
}: React.PropsWithChildren<{ style?: CSSProperties }>) => {
  return (
    <div
      style={{
        display: "flex",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

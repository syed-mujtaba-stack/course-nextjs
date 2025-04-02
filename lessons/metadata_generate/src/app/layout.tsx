import type { Metadata } from "next";
import "./globals.css";
import { Nav } from '@/lib/Nav';

export const metadata: Metadata = {
  title: "Website",
  description: "Sample App for the BooleanArt NextJS Course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}</body>
    </html>
  );
}

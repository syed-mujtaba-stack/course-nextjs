import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BooleanArt NextJS App",
  description: "Sample App for the BooleanArt NextJS Course",
};

import { CartStoreProvider } from "@/lib/CartStoreContext";
import { Header } from "@/lib/ui/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartStoreProvider>
          <Header />
          {children}
        </CartStoreProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { UIProvider } from "@yamada-ui/react";
import { ImageProvider } from "./utils/context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "swapFaceProject",
  description: "顔の交換をするアプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div style={{ margin: "0 0 100px 0" }}></div>
        <ImageProvider>
          <UIProvider>{children}</UIProvider>
        </ImageProvider>
      </body>
    </html>
  );
}

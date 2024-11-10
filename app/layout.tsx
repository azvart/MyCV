import type { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";



const sfLight = localFont({
  src: "./fonts/SF-Pro-Display-Light.otf",
  variable: "--font-sf-pro-light",
  weight: "100"
})
export const metadata: Metadata = {
  title: "Vladislav Gasanov CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sfLight.variable}`}>
          {children}
      </body>
    </html>
  );
}

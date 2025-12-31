import type { Metadata } from "next";
import "./globals.css";

import { sixtysStripe } from "@/fonts";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sixtysStripe.variable}>
      <GoogleTagManager gtmId="GTM-K9SHR86D" />
      <body>{children}</body>
    </html>
  );
}

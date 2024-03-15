import type { Metadata } from "next";
import "./globals.css";

import { sixtysStripe } from "@/fonts";

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
      <body>{children}</body>
    </html>
  );
}

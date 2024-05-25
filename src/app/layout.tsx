import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";

import { useMediaQuery } from "react-responsive";
import Providers from "./(components)/Providers";
const inter = Inter({ subsets: ["latin"] });

const euclid = localfont({
  src: [
    {
      path: "../../public/fonts/EuclidFlexRegular.ttf",
    },
  ],
  variable: "--font-euclid",
});

const butler = localfont({
  src: [
    {
      path: "../../public/fonts/Butler_Regular.otf",
      weight: "700",
    },
  ],
  variable: "--font-butler",
});

export const metadata: Metadata = {
  title: "Hermanhood",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${euclid.variable} font-sans`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

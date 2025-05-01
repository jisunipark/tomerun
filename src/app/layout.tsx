"use client"; // ChakraProvider를 사용하기 위해 필요

import { Noto_Sans_JP } from "next/font/google";
import Providers from "../components/common/Providers";
import Navigation from "../components/common/Navigation";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body>
        <Providers>
          <main className="min-h-screen pb-16">
            {children}
            <Navigation />
          </main>
        </Providers>
      </body>
    </html>
  );
}

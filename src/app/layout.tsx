import type { Metadata } from "next";
import { Modak, Mouse_Memoirs } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TitleCycler } from "@/components/layout/TitleCycler";

const modak = Modak({
  variable: "--font-modak",
  subsets: ["latin"],
  weight: "400",
});

const mouseMemoirs = Mouse_Memoirs({
  variable: "--font-mouse-memoirs",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Smokin' Grill Cafe",
  description:
    "Explore our diverse restaurant menu featuring soups, starters, wings, steaks, burgers, and more. Perfect for every palate and occasion, our menu promises a memorable dining experience.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${modak.variable} ${mouseMemoirs.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <TitleCycler />
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

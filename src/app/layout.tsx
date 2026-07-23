import type { Metadata } from "next";
import { Modak, Mouse_Memoirs } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

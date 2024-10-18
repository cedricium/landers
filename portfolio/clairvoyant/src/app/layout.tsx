import type { Metadata } from "next";
import { Hanalei, Instrument_Serif, Just_Another_Hand } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter/InterVariable.woff2",
  variable: "--font-sans",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});
const handwritten = Just_Another_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "Clairvoyant Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrument.variable} ${handwritten.variable} antialiased bg-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

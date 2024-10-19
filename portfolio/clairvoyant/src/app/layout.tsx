import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Instrument_Serif, Just_Another_Hand } from "next/font/google";
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
        <div className="grid grid-rows-[40px_1fr] grid-cols-12 max-w-screen-2xl mx-auto items-start justify-items-start min-h-screen overflow-hidden p-8 gap-16 font-[family-name:var(--font-sans)]">
          <header className="col-start-1 md:col-start-2 col-end-13 md:col-end-12 w-full text-background">
            <nav className="flex items-center justify-between">
              <Link href="/">
                <Image
                  src="/img/logos/clairvoyant.png"
                  alt="Clairvoyant Intelligence logo"
                  width={180}
                  height={33}
                  priority
                />
              </Link>

              <ul className="flex gap-8 text-sm font-medium">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Request Access</Link>
                </li>
              </ul>
            </nav>
          </header>

          {children}

          <footer className="h-36 mt-36 py-5 col-start-2 col-end-12 w-full border-t-4 border-double text-white/70 text-sm flex justify-between">
            <span>
              ©️ {new Date().getFullYear()} Clairvoyant Intelligence, All rights
              reserved
            </span>
            <span>
              <ul className="inline-flex flex-row gap-3">
                <li>
                  <a
                    href="https://www.linkedin.com/company/clairvoyant-intelligence/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}

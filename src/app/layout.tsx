import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { Footer, Header } from "../components";

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
  generator: "Next.js",
  title: {
    template: "%s | Agendar",
    default: "Agendar",
  },
  description: "Encontre um profisional e agende um serviço.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-svh`}
      >
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

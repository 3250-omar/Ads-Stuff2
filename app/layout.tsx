import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ads & Stuff",
  description:
    "Ads & Stuff is a digital advertising company that specializes in creating targeted and effective online ads for businesses of all sizes. From social media to search engine optimization, we help our clients reach their target audience and drive real results for their business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased space-y-8`}
      >
        <NavBar />
        <div className="head-section">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

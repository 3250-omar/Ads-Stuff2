import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AntdRegistry from "@/lib/AntdRegistry";
import { ConfigProvider, App } from "antd";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/i18n/config";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ads & Stuff | Modern Digital Advertising & Content Creation",
    template: "%s | Ads & Stuff",
  },
  description:
    "Ads & Stuff is a premier digital advertising agency specializing in high-impact visual storytelling, creative content campaigns, and result-driven marketing strategies for modern brands.",
  keywords: [
    "Digital Advertising",
    "Content Creation",
    "Digital Marketing",
    "Brand Storytelling",
    "Social Media Marketing",
    "Advertising Agency",
    "Creative Visuals",
    "Ziad Portfolio",
  ],
  authors: [{ name: "Ziad" }],
  creator: "Ziad",
  publisher: "Ads & Stuff",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ads-stuff2.vercel.app/", // Ideally update with your actual domain
    siteName: "Ads & Stuff",
    title: "Ads & Stuff | Modern Digital Advertising & Content Creation",
    description:
      "Crafting compelling brand stories and result-driven advertising campaigns that make your business unforgettable.",
    images: [
      {
        url: "/Logo3G.png",
        width: 1200,
        height: 630,
        alt: "Ads & Stuff Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ads & Stuff | Digital Advertising Solutions",
    description:
      "High-impact visual storytelling and creative content campaigns for modern brands.",
    images: ["/Logo3G.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

import Providers from "@/components/Providers";
import ToWhatsapp from "@/components/ToWhatsapp";
import { notFound } from "next/navigation";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!locales.includes(locale as any)) notFound();
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-linear-to-br from-schemaWhite/50 via-white to-secondary/20 min-h-screen overflow-x-hidden`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <AntdRegistry>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#4A6B50",
                  },
                }}
              >
                <App>
                  <NavBar />
                  <main className="head-section">{children}</main>
                  <Footer />
                  <ScrollToTop />
                  <ToWhatsapp />
                </App>
              </ConfigProvider>
            </AntdRegistry>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

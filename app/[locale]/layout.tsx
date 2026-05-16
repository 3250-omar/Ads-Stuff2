import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AntdRegistry from "@/lib/AntdRegistry";
import { ConfigProvider, App, theme } from "antd";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/i18n/config";
import Providers from "@/components/Providers";
import ToWhatsapp from "@/components/ToWhatsapp";
import { notFound } from "next/navigation";

const BASE_URL = "https://ads-stuff2.vercel.app";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  const isAr = locale === "ar";

  const title = isAr
    ? "Ads & Stuff | إعلانات رقمية وإنتاج إبداعي"
    : "Ads & Stuff | Modern Digital Advertising & Content Creation";

  const description = isAr
    ? messages?.Hero?.description ??
      "نصيغ قصص علامات تجارية مقنعة ومرئيات مذهلة وحملات إعلانية مدفوعة بالنتائج."
    : messages?.Hero?.description ??
      "Ads & Stuff is a premier digital advertising agency specializing in high-impact visual storytelling, creative content campaigns, and result-driven marketing strategies for modern brands.";

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: title,
      template: "%s | Ads & Stuff",
    },
    description,
    keywords: isAr
      ? [
          "إعلانات رقمية",
          "إنشاء محتوى",
          "تسويق رقمي",
          "تصميم جرافيك",
          "وسائل التواصل الاجتماعي",
          "وكالة إعلانية",
          "مرئيات إبداعية",
          "Ads and Stuff",
        ]
      : [
          "Digital Advertising",
          "Content Creation",
          "Digital Marketing",
          "Brand Storytelling",
          "Social Media Marketing",
          "Advertising Agency",
          "Creative Visuals",
          "Graphic Design",
          "Video Editing",
          "Motion Graphics",
        ],
    authors: [{ name: "Ziad" }],
    creator: "Ziad",
    publisher: "Ads & Stuff",
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        ar: `${BASE_URL}/ar`,
        "x-default": `${BASE_URL}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_AE" : "en_US",
      alternateLocale: isAr ? "en_US" : "ar_AE",
      url: `${BASE_URL}/${locale}`,
      siteName: "Ads & Stuff",
      title,
      description,
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
      title,
      description,
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
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-primary text-text-primary min-h-screen overflow-x-hidden`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <AntdRegistry>
              <ConfigProvider
                theme={{
                  algorithm: theme.darkAlgorithm,
                  token: {
                    colorPrimary: "#4A6B50",
                    colorBgContainer: "#1A2420",
                    colorBgElevated: "#243029",
                    colorBgLayout: "#0A0F0D",
                    colorText: "#E8F0E9",
                    colorTextSecondary: "#9BA89E",
                    colorBorder: "rgba(74, 107, 80, 0.2)",
                    borderRadius: 16,
                    fontFamily: "var(--font-geist-sans)",
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

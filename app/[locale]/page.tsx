import PageContent from "./_comp/PageContent";
import { createClient } from "@/utils/supabase/server";
import { getHeroImagesInternal } from "../api/hero-fetching";

const BASE_URL = "https://ads-stuff2.vercel.app";

export default async function Home() {
  const supabase = await createClient();
  const heroImages = await getHeroImagesInternal(supabase);

  // Fetch social media links for structured data
  const { data: socialMediaRows } = await supabase
    .from("socialmedia")
    .select("social_media_url");

  const sameAs = (socialMediaRows ?? [])
    .map((row: { social_media_url: string }) => row.social_media_url)
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ads & Stuff",
    url: BASE_URL,
    logo: `${BASE_URL}/Logo3G.png`,
    description:
      "Ads & Stuff is a premier digital advertising agency specializing in high-impact visual storytelling, creative content campaigns, and result-driven marketing strategies for modern brands.",
    email: "ziad@adsstaff.com",
    foundingDate: "2022",
    knowsAbout: [
      "Digital Advertising",
      "Social Media Marketing",
      "Graphic Design",
      "Video Editing",
      "Motion Graphics",
      "Media Buying",
      "Brand Storytelling",
      "Content Creation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Media Production" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Media Buying" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Editing & Motion Graphics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development & Management" } },
      ],
    },
    sameAs: sameAs.length > 0 ? sameAs : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageContent initialHeroImages={heroImages} />
    </>
  );
}

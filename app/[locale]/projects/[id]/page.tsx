import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import ProjectDetailsClient from "./_comp/ProjectDetailsClient";

const BASE_URL = "https://ads-stuff2.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const supabase = await createClient();

  const { data: project, error } = await supabase
    .from("our_projects")
    .select("id, title, description, overview, project_media")
    .eq("id", Number(id))
    .single();

  if (error) {
    console.error("Error fetching project in generateMetadata:", error);
  }

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = project.title ?? "Project";
  const description =
    project.overview ??
    project.description ??
    "Explore this creative project by Ads & Stuff.";
  const ogImage = project.project_media?.[0] ?? "/Logo3G.png";

  return {
    title,
    description,
    keywords: [
      "Digital Advertising",
      "Creative Project",
      "Ads & Stuff",
      "Portfolio",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/projects/${id}`,
      languages: {
        en: `${BASE_URL}/en/projects/${id}`,
        ar: `${BASE_URL}/ar/projects/${id}`,
      },
    },
    openGraph: {
      type: "article",
      url: `${BASE_URL}/${locale}/projects/${id}`,
      title: `${title} | Ads & Stuff`,
      description,
      siteName: "Ads & Stuff",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Ads & Stuff`,
      description,
      images: [ogImage],
    },
  };
}

export default function ProjectPage() {
  return <ProjectDetailsClient />;
}

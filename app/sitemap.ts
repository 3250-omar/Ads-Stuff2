import type { MetadataRoute } from "next";
import { createClient } from "@/utils/supabase/server";
import { locales } from "@/i18n/config";

const BASE_URL = "https://ads-stuff2.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient();

  // Static locale routes
  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) => [
    {
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}`]),
        ),
      },
    },
    // {
    //   url: `${BASE_URL}/${locale}/skills`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // },
    {
      url: `${BASE_URL}/${locale}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    
  ]);

  // Dynamic project routes
  const { data: projects } = await supabase
    .from("our_projects")
    .select("id, title")
    .order("id", { ascending: true });

  const projectRoutes: MetadataRoute.Sitemap = (projects ?? []).flatMap(
    (project: { id: number; title: string }) =>
      locales.map((locale) => ({
        url: `${BASE_URL}/${locale}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}/projects/${project.id}`]),
          ),
        },
      })),
  );

  // Dynamic article routes
  const { data: articles } = await supabase
    .from("articles")
    .select("slug, published_at")
    .order("published_at", { ascending: false });

  const articleRoutes: MetadataRoute.Sitemap = (articles ?? []).flatMap(
    (article: { slug: string; published_at: string }) =>
      locales.map((locale) => ({
        url: `${BASE_URL}/${locale}/articles/${article.slug}`,
        lastModified: new Date(article.published_at),
        changeFrequency: "monthly" as const,
        priority: 0.75,
      })),
  );

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}

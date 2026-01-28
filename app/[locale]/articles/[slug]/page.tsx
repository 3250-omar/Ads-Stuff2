import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/articles/ArticleContent";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  console.log("🚀 ~ generateMetadata ~ slug:", slug);
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();
  console.log("🚀 ~ generateMetadata ~ article:", article);

  if (!article) return { title: "Article Not Found" };

  return {
    title: article.meta_title || article.title,
    description: article.meta_description || article.description,
    keywords: article.meta_keywords || article.tags,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image_url],
      type: "article",
      publishedTime: article.published_at,
      authors: [article.author || "Ads & Stuff"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image_url],
    },
  };
}

export default async function ArticleDetail({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    image: article.image_url,
    datePublished: article.published_at,
    author: {
      "@type": "Person",
      name: article.author || "Ads & Stuff",
    },
    description: article.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleContent article={article} />
    </>
  );
}

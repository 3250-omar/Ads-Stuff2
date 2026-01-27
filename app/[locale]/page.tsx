import PageContent from "./_comp/PageContent";
import { createClient } from "@/utils/supabase/server";
import { getHeroImagesInternal } from "../api/hero-fetching";

export default async function Home() {
  const supabase = await createClient();
  const heroImages = await getHeroImagesInternal(supabase);

  return <PageContent initialHeroImages={heroImages} />;
}

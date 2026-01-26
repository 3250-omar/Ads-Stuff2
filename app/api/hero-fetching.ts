import { staticHeroImages } from "@/constants/staticImages";

export const getHeroImagesInternal = async (supabase: any) => {
  const { data: files, error } = await supabase.storage
    .from("project-media")
    .list("projects", {
      limit: 5,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) {
    console.error("Error fetching hero images:", error);
    return staticHeroImages;
  }

  if (!files || files.length === 0) return staticHeroImages;

  const allMedia = files
    .filter((file: any) => file.name !== ".emptyFolderPlaceholder")
    .filter((file: any) => !file.metadata?.mimetype?.startsWith("video"))
    .map((file: any) => {
      const { data } = supabase.storage
        .from("project-media")
        .getPublicUrl(`projects/${file.name}`);
      return data.publicUrl;
    })
    .filter((url: any): url is string => !!url);

  return allMedia.length >= 3 ? allMedia : staticHeroImages;
};

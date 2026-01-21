import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "@/utils/supabase/client";

export const staticImages = [
  "/imgs/1.jpeg",
  "/imgs/2.jpeg",
  "/imgs/3.jpeg",
  "/imgs/4.jpeg",
  "/imgs/5.jpeg",
];

async function fetchHeroImages() {
  const { data: files, error } = await supabaseClient.storage
    .from("project-media")
    .list("projects", {
      limit: 5,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) throw error;

  if (!files) return staticImages;

  const allMedia = files
    .filter((file) => file.name !== ".emptyFolderPlaceholder")
    .map((file) => {
      const { data } = supabaseClient.storage
        .from("project-media")
        .getPublicUrl(`projects/${file.name}`);
      return data.publicUrl;
    })
    .filter((url): url is string => !!url);

  return allMedia.length >= 3 ? allMedia : staticImages;
}

export function useHeroMedia() {
  const { data: images = staticImages, isLoading } = useQuery({
    queryKey: ["hero-media"],
    queryFn: fetchHeroImages,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const [imageIndices, setImageIndices] = useState([0, 1, 2]);
  const [nextImage, setNextImage] = useState(3);

  return {
    images,
    isLoading,
    imageIndices,
    nextImage,
    setImageIndices,
    setNextImage,
  };
}

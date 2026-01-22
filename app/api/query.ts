import { staticHeroImages } from "@/constants/staticImages";
import { supabaseClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { App } from "antd";
import { useState } from "react";

export const useGetSocialMedia = (): {
  socialMedia: any[] | null | undefined;
  loading: boolean;
} => {
  const { message } = App.useApp();
  const getAllSocialMedia = async () => {
    const { data } = await supabaseClient.from("socialmedia").select();
    return data;
  };
  const { data, isPending, error } = useQuery({
    queryKey: ["social-media"],
    queryFn: getAllSocialMedia,
    staleTime: 1000 * 60 * 60 * 2, // 2 hours
  });
  if (error) message.error(error?.message);

  return { socialMedia: data, loading: isPending };
};

export const useHeroMedia = () => {
  const fetchHeroImages = async () => {
    const { data: files, error } = await supabaseClient.storage
      .from("project-media")
      .list("projects", {
        limit: 5,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
    console.log("🚀 ~ fetchHeroImages ~ files:", files);

    if (error) throw error;

    if (!files) return staticHeroImages;

    const allMedia = files
      .filter((file) => file.name !== ".emptyFolderPlaceholder")
      .filter((file) => !file.metadata?.mimetype?.startsWith("video"))
      .map((file) => {
        const { data } = supabaseClient.storage
          .from("project-media")
          .getPublicUrl(`projects/${file.name}`);
        return data.publicUrl;
      })
      .filter((url): url is string => !!url);
    console.log("🚀 ~ fetchHeroImages ~ allMedia:", allMedia);

    return allMedia.length >= 3 ? allMedia : staticHeroImages;
  };
  const { data: images = staticHeroImages, isLoading } = useQuery({
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
};

export const useGetProjects = ({
  status,
  id,
  page = 1,
  pageSize = 5,
}: {
  status?: string;
  id?: number;
  page?: number;
  pageSize?: number;
}) => {
  const { message } = App.useApp();

  const getAllProjects = async () => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    let query = supabaseClient
      .from("our_projects")
      .select("*", { count: "exact" });

    if (status) {
      query = query.eq("status", status);
    }
    if (id) {
      query = query.eq("id", id);
    }

    // Apply pagination
    query = query.range(from, to);

    const { data, error, count } = await query;
    if (error) throw error;

    return { data, count };
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["projects", status, id, page, pageSize],
    queryFn: getAllProjects,
    refetchOnWindowFocus: false,
  });

  if (error) message.error(error?.message);

  return {
    projects: data?.data,
    total: data?.count || 0,
    loading: isPending,
  };
};

export const useGetAllCustomers = () => {
  const { message } = App.useApp();

  const getAllCustomers = async () => {
    const { data, error } = await supabaseClient
      .from("our_customers")
      .select("*");
    // .eq("status", "active");
    if (error) throw error;
    return data;
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["our_customers"],
    queryFn: getAllCustomers,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (error) message.error(error?.message);

  return { customers: data, loading: isPending };
};

"use client";
import { staticHeroImages } from "@/constants/staticImages";
import { supabaseClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { App } from "antd";
import { useState, useEffect } from "react";
import { getHeroImagesInternal } from "./hero-fetching";

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
  useEffect(() => {
    if (error) {
      message.error(error.message);
    }
  }, [error, message]);

  return { socialMedia: data, loading: isPending };
};

export const useHeroMedia = (initialImages?: string[]) => {
  const { data: images = initialImages || staticHeroImages, isLoading } =
    useQuery({
      queryKey: ["hero-media"],
      queryFn: () => getHeroImagesInternal(supabaseClient),
      refetchOnWindowFocus: false,
      initialData: initialImages,
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

  useEffect(() => {
    if (error) {
      message.error(error.message);
    }
  }, [error, message]);

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

  useEffect(() => {
    if (error) {
      message.error(error.message);
    }
  }, [error, message]);

  return { customers: data, loading: isPending };
};

export const useGetAllFeedbacks = () => {
  const { message } = App.useApp();

  const getAllFeedbacks = async () => {
    const { data, error } = await supabaseClient
      .from("customer_feedback")
      .select("* , our_customers(logo_url , name)");
    // .eq("status", "active");
    if (error) throw error;
    return data;
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["customer_feedback"],
    queryFn: getAllFeedbacks,
    refetchOnWindowFocus: false,
    // staleTime: 1000 * 60 * 60, // 1 hour
  });

  useEffect(() => {
    if (error) {
      message.error(error.message);
    }
  }, [error, message]);

  return { feedbacks: data, loading: isPending };
};

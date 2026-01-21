import { supabaseClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { App } from "antd";

export const useGetSocialMedia = () => {
  const { message } = App.useApp();
  const getAllSocialMedia = async () => {
    const { data } = await supabaseClient.from("socialmedia").select();
    return data;
  };
  const { data, isPending, error } = useQuery({
    queryKey: ["social-media"],
    queryFn: getAllSocialMedia,
  });
  if (error) message.error(error?.message);

  return { socialMedia: data, loading: isPending };
};

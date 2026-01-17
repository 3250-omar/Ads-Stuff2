"use client";

import { supabase } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function useGetSocialMedia() {
  const [socialmedia, setSocialmedia] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      const { data, error } = await supabase.from("socialmedia").select();

      if (error) {
        console.error("Error fetching social media data:", error);
        setError(error);
      } else {
        setSocialmedia(data);
      }
      setLoading(false);
    };

    fetchSocialMedia();
  }, []);

  return { socialmedia, loading, error };
}

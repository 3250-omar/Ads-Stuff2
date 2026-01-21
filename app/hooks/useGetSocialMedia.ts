"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function useGetSocialMedia() {
  const [socialmedia, setSocialmedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        const supabase = createClient();
        if (!supabase) {
          setLoading(false);
          return;
        }
        const { data, error } = await supabase.from("socialmedia").select();

        if (error) {
          console.error("Supabase error fetching social media:", error);
          setError(error);
        } else {
          setSocialmedia(data);
        }
      } catch (err) {
        console.error("Unknown error in useGetSocialMedia:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialMedia();
  }, []);

  return { socialmedia, loading, error };
}

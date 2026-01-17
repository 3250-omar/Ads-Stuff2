"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function useGetSocialMedia() {
  const [socialmedia, setSocialmedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      console.log("Checking environment variables...");
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      console.log("SUPABASE_URL defined:", !!supabaseUrl);
      console.log("SUPABASE_ANON_KEY defined:", !!supabaseKey);

      console.log("Starting social media fetch...");
      try {
        const supabase = createClient();
        if (!supabase) {
          console.error("Supabase client could not be created.");
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

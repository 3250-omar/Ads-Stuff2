import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = () => {
  if (!supabaseUrl || !supabaseKey) {
    console.error(
      "Supabase project URL and API key are required to create a client. " +
        "Please check your environment variables (NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY).",
    );
  }
  return createBrowserClient(supabaseUrl!, supabaseKey!, {
    auth: {
      persistSession: false,
    autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
};
export const supabaseClient = createClient();
// Export a singleton if needed, but only if we are sure env vars exist.
// For now, we remove the top-level execution to prevent build failures.
// export const supabase = createClient();

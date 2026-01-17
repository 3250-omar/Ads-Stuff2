import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = () =>
  createBrowserClient(supabaseUrl!, supabaseKey!);

// Export a singleton if needed, but only if we are sure env vars exist.
// For now, we remove the top-level execution to prevent build failures.
// export const supabase = createClient();

import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export function createClient() {
  // Use service role key to bypass RLS and auth
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      }
    }
  )
}

-- Drop the table if it exists
DROP TABLE IF EXISTS public.users CASCADE;

-- Create users table with only name and role (no email, no auth.users reference)
CREATE TABLE public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('TEACHER', 'STUDENT')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Enable Row Level Security (RLS) - but we'll use service role to bypass it
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Allow service role to do everything (we'll manage auth ourselves)
DROP POLICY IF EXISTS "Allow service role full access" ON public.users;
CREATE POLICY "Allow service role full access"
  ON public.users
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS set_updated_at ON public.users;

-- Create trigger
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Create indexes
CREATE INDEX IF NOT EXISTS users_name_idx ON public.users(name);
CREATE INDEX IF NOT EXISTS users_role_idx ON public.users(role);

-- Verify
SELECT * FROM public.users;

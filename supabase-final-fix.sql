-- COMPLETE FIX FOR SUPABASE DATABASE
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/pxxtotonboqgvuaxmduo/sql/new

-- 1. Drop existing table and all dependencies
DROP TABLE IF EXISTS public.users CASCADE;

-- 2. Create users table with correct structure
CREATE TABLE public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('TEACHER', 'STUDENT')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- 3. DISABLE Row Level Security for development
ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;

-- 4. Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 5. Create trigger for auto-updating updated_at
DROP TRIGGER IF EXISTS set_updated_at ON public.users;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 6. Create indexes for performance
CREATE INDEX IF NOT EXISTS users_name_idx ON public.users(name);
CREATE INDEX IF NOT EXISTS users_role_idx ON public.users(role);

-- 7. Test insert to verify everything works
INSERT INTO public.users (name, role) VALUES ('Test Teacher', 'TEACHER');
INSERT INTO public.users (name, role) VALUES ('Test Student', 'STUDENT');

-- 8. Verify the table structure and data
SELECT
  table_name,
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_schema = 'public' AND table_name = 'users'
ORDER BY ordinal_position;

-- 9. Show all data
SELECT * FROM public.users;

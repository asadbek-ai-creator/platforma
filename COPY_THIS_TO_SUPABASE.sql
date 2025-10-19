-- =====================================================
-- COMPLETE DATABASE FIX FOR AUTH SYSTEM
-- Copy ALL of this and run in Supabase SQL Editor
-- URL: https://supabase.com/dashboard/project/pxxtotonboqgvuaxmduo/sql/new
-- =====================================================

-- Step 1: Clean up everything (remove old tables and constraints)
DROP TABLE IF EXISTS public.users CASCADE;
DROP FUNCTION IF EXISTS public.handle_updated_at() CASCADE;

-- Step 2: Create the users table with correct structure
CREATE TABLE public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('TEACHER', 'STUDENT')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Step 3: Disable Row Level Security (for development)
ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;

-- Step 4: Create trigger function for auto-updating timestamps
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 5: Create trigger
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Step 6: Create indexes for better performance
CREATE INDEX users_name_idx ON public.users(name);
CREATE INDEX users_role_idx ON public.users(role);

-- Step 7: Insert test data to verify everything works
INSERT INTO public.users (name, role) VALUES
  ('Test Teacher', 'TEACHER'),
  ('Test Student', 'STUDENT');

-- Step 8: Verify the setup
SELECT
  'SUCCESS! Table created with ' || COUNT(*) || ' test users' as status
FROM public.users;

-- Step 9: Show table structure
SELECT
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'users'
ORDER BY ordinal_position;

-- Step 10: Show all data
SELECT * FROM public.users;

-- =====================================================
-- EXPECTED OUTPUT:
-- - "SUCCESS! Table created with 2 test users"
-- - Table structure showing: id, name, role, created_at, updated_at
-- - 2 test users displayed
-- =====================================================

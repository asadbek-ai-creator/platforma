# Supabase Setup Guide

This project has been configured to use Supabase for authentication and database management.

## Environment Variables

The following environment variables have been configured in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous/public key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (keep this secret!)

## Database Setup

### 1. Run the SQL Schema

You need to execute the SQL schema to create the necessary tables in your Supabase database:

1. Go to your Supabase Dashboard: https://pxxtotonboqgvuaxmduo.supabase.co
2. Navigate to the SQL Editor
3. Copy the contents of `supabase-schema.sql` and execute it

This will create:
- `users` table with proper structure
- Row Level Security (RLS) policies
- Indexes for performance
- Triggers for automatic timestamp updates

### 2. Configure Authentication

1. In your Supabase Dashboard, go to **Authentication** → **Providers**
2. Enable **Email** provider
3. Configure email templates if needed
4. (Optional) Disable email confirmation for development:
   - Go to **Authentication** → **Settings**
   - Under "Email Auth", toggle off "Enable email confirmations"

## Project Structure

### Supabase Integration Files

- `lib/supabase/client.ts` - Client-side Supabase client for use in Client Components
- `lib/supabase/server.ts` - Server-side Supabase client for use in Server Components
- `lib/supabase/middleware.ts` - Middleware helper for session management
- `middleware.ts` - Next.js middleware configured with Supabase auth
- `components/LogoutButton.tsx` - Client component for logout functionality

### Updated Files

- `app/login/page.tsx` - Login/Register page using Supabase Auth
- `app/dashboard/page.tsx` - Protected dashboard page fetching user from Supabase
- `components/TeacherDashboard.tsx` - Updated to use Supabase user type
- `components/StudentDashboard.tsx` - Updated to use Supabase user type

## Features

### Authentication

- Email/password authentication via Supabase Auth
- Automatic session management with middleware
- Protected routes with automatic redirects
- User profile stored in `users` table

### Security

- Row Level Security (RLS) enabled on all tables
- Users can only read/update their own data
- Service role key separated from public key
- Secure session handling with HTTP-only cookies

## Running the Application

1. Make sure your `.env.local` file has the correct Supabase credentials
2. Run the SQL schema in your Supabase dashboard
3. Start the development server:

```bash
npm run dev
```

4. Navigate to http://localhost:3000
5. Try registering a new user or logging in

## User Registration Flow

1. User fills out registration form with:
   - Email
   - Password (min 6 characters)
   - Name
   - Role (TEACHER or STUDENT)

2. Supabase Auth creates the auth user
3. User profile is created in the `users` table
4. User is automatically logged in and redirected to dashboard

## User Login Flow

1. User enters email and password
2. Supabase Auth validates credentials
3. Session is created and stored in cookies
4. User is redirected to role-appropriate dashboard

## Troubleshooting

### "Email not confirmed" error
- Disable email confirmations in Supabase Dashboard (Authentication → Settings)
- Or check your email for confirmation link

### "Row Level Security" errors
- Make sure you've run the SQL schema from `supabase-schema.sql`
- Check that RLS policies are created correctly

### "Invalid JWT" errors
- Clear your browser cookies
- Check that your environment variables are correct
- Restart the development server

## Next Steps

You can extend this setup by:
- Adding password reset functionality
- Implementing OAuth providers (Google, GitHub, etc.)
- Adding more tables with proper RLS policies
- Creating admin roles and permissions
- Adding email templates customization

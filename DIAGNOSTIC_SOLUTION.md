# 500 Internal Server Error - Complete Diagnostic & Solution

## ROOT CAUSE ANALYSIS

**Error Code:** `23514`
**Error Message:** `new row for relation "users" violates check constraint "users_role_check"`

### What's Happening:
The database has a CHECK constraint on the `role` column that expects 'TEACHER' or 'STUDENT', but there may be an old constraint with different values or the table wasn't created properly.

## COMPLETE SOLUTION

### Step 1: Run the Corrected SQL in Supabase

1. **Go to Supabase SQL Editor:**
   https://supabase.com/dashboard/project/pxxtotonboqgvuaxmduo/sql/new

2. **Copy and run the ENTIRE contents of `supabase-final-fix.sql`**

3. **Expected result after running:**
   - Table `users` dropped and recreated
   - 2 test users inserted successfully
   - Table structure displayed
   - All data shown

### Step 2: Verify Environment Variables

File: `.env.local`
```env
NEXT_PUBLIC_SUPABASE_URL=https://pxxtotonboqgvuaxmduo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eHRvdG9uYm9xZ3Z1YXhtZHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5ODAwODMsImV4cCI6MjA3NTU1NjA4M30.P7GdTr-rQoPv-uHulzUHYJLACYCg5x1jofh2cB7NSEc
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eHRvdG9uYm9xZ3Z1YXhtZHVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTk4MDA4MywiZXhwIjoyMDc1NTU2MDgzfQ.S4SSNyfgyD15hRB_yqvTcrZAxCnLpfvZY_GjEdoiVXI
```

✅ **Verified:** All environment variables are correctly set.

### Step 3: API Route Analysis

**File:** `app/api/auth/register/route.ts`

**Current Status:**
- ✅ Using correct imports
- ✅ Proper Supabase client initialization
- ✅ Correct validation logic
- ✅ Enhanced error logging added
- ✅ Returns detailed error information

**What Was Fixed:**
1. Added comprehensive console logging
2. Added detailed error responses with code and details
3. Proper handling of "user not found" vs actual errors
4. Better error messages for debugging

### Step 4: Test the Fix

After running the SQL:

1. **Restart the development server** (environment variables are now loaded)
2. **Visit:** http://localhost:3004/login
3. **Try registering:**
   - Name: "Asadbek"
   - Role: Click "Talaba" (STUDENT) or "O'qituvchi" (TEACHER)
   - Submit

4. **Check terminal logs** for detailed debugging info:
   ```
   === REGISTRATION REQUEST STARTED ===
   Request body: { name: 'Asadbek', role: 'STUDENT' }
   Validation passed. Creating Supabase client...
   Supabase client created successfully
   Checking if user exists: Asadbek
   Inserting new user: { name: 'Asadbek', role: 'STUDENT' }
   User created successfully: { id: '...', name: 'Asadbek', role: 'STUDENT', ... }
   ```

## DEBUGGING CHECKLIST

- [x] Environment variables configured
- [x] Supabase client initialization correct
- [x] API route has proper error handling
- [ ] **SQL schema executed in Supabase** ← YOU NEED TO DO THIS
- [ ] Server restarted after running SQL
- [ ] Test registration works

## Common Issues & Solutions

### Issue 1: "users_role_check" constraint violation
**Solution:** Run `supabase-final-fix.sql` to recreate the table with correct constraints

### Issue 2: Environment variables not loaded
**Solution:** Restart the development server after modifying `.env.local`

### Issue 3: RLS (Row Level Security) blocking inserts
**Solution:** The SQL disables RLS for development: `ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;`

### Issue 4: Table doesn't exist
**Solution:** Run the SQL file to create the table

## Next Steps

1. **Run `supabase-final-fix.sql` in Supabase SQL Editor**
2. **Restart development server** (kill current process and run again)
3. **Test registration at** http://localhost:3004/login
4. **Check terminal for detailed logs**

## Expected Successful Response

```json
{
  "message": "Muvaffaqiyatli ro'yxatdan o'tdingiz",
  "user": {
    "id": "uuid-here",
    "name": "Asadbek",
    "role": "STUDENT"
  }
}
```

## If Still Getting Errors

Check terminal logs for:
- Exact error code
- Error details
- Insert error details (code, message, details, hint)

The enhanced logging will show exactly what's failing.

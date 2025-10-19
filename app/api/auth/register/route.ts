import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  console.log('=== REGISTRATION REQUEST STARTED ===');

  try {
    // Verify environment variables first
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.error('NEXT_PUBLIC_SUPABASE_URL is not set');
      return NextResponse.json(
        { error: 'Server configuration error: Missing Supabase URL' },
        { status: 500 }
      );
    }

    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('SUPABASE_SERVICE_ROLE_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error: Missing Supabase service key' },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('Request body:', body);

    const { name, role } = body;

    // Validate input
    if (!name || !role) {
      console.log('Validation failed: missing name or role');
      return NextResponse.json(
        { error: 'Ism va rolni tanlang' },
        { status: 400 }
      );
    }

    if (!['TEACHER', 'STUDENT'].includes(role)) {
      console.log('Validation failed: invalid role -', role);
      return NextResponse.json(
        { error: 'Noto\'g\'ri rol' },
        { status: 400 }
      );
    }

    console.log('Validation passed. Creating Supabase client...');
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Has Service Key:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);
    console.log('Service Key length:', process.env.SUPABASE_SERVICE_ROLE_KEY?.length);

    const supabase = createClient();
    console.log('Supabase client created successfully');

    // Test connection first
    const { error: connectionError } = await supabase.from('users').select('count').limit(1);
    if (connectionError) {
      console.error('Supabase connection error:', connectionError);
      return NextResponse.json(
        {
          error: 'Database connection failed',
          details: connectionError.message,
          code: connectionError.code
        },
        { status: 500 }
      );
    }

    // Check if user already exists
    console.log('Checking if user exists:', name);
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('*')
      .eq('name', name)
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error('Error checking existing user:', checkError);
    }

    if (existingUser) {
      console.log('User already exists:', name);
      return NextResponse.json(
        { error: 'Bu nom band qilingan' },
        { status: 400 }
      );
    }

    // Create user
    console.log('Inserting new user:', { name, role });
    const { data: user, error: insertError } = await supabase
      .from('users')
      .insert([{ name, role }])
      .select()
      .single();

    if (insertError) {
      console.error('Insert error details:', {
        code: insertError.code,
        message: insertError.message,
        details: insertError.details,
        hint: insertError.hint
      });
      return NextResponse.json(
        {
          error: insertError.message || 'Foydalanuvchi yaratishda xatolik',
          details: insertError.details,
          code: insertError.code
        },
        { status: 500 }
      );
    }

    console.log('User created successfully:', user);

    // Set session cookie
    const response = NextResponse.json(
      {
        message: 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz',
        user: {
          id: user.id,
          name: user.name,
          role: user.role,
        },
      },
      { status: 201 }
    );

    response.cookies.set('user_id', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Server xatosi' },
      { status: 500 }
    );
  }
}

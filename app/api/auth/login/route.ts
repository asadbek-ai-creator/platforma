import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
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
    const { name } = body;

    // Validate input
    if (!name) {
      return NextResponse.json(
        { error: 'Ismni kiriting' },
        { status: 400 }
      );
    }

    const supabase = createClient();

    // Find user
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('name', name)
      .single();

    if (error || !user) {
      return NextResponse.json(
        { error: 'Foydalanuvchi topilmadi' },
        { status: 401 }
      );
    }

    // Set cookie
    const response = NextResponse.json(
      {
        message: 'Muvaffaqiyatli kirdingiz',
        user: {
          id: user.id,
          name: user.name,
          role: user.role,
        },
      },
      { status: 200 }
    );

    response.cookies.set('user_id', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Server xatosi' },
      { status: 500 }
    );
  }
}

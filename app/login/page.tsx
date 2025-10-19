'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type AuthMode = 'login' | 'register';
type UserRole = 'TEACHER' | 'STUDENT';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>('login');
  const [formData, setFormData] = useState({
    name: '',
    role: 'STUDENT' as UserRole,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        // Login via API
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.name }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Xatolik yuz berdi');
        }

        // Store user data in localStorage
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));

          // Redirect based on role
          if (data.user.role === 'TEACHER') {
            router.push('/teacher');
          } else if (data.user.role === 'STUDENT') {
            router.push('/student');
          } else {
            router.push('/dashboard');
          }
        } else {
          router.push('/dashboard');
        }
        router.refresh();
      } else {
        // Validate role is selected
        if (!formData.role) {
          throw new Error('Iltimos, rolni tanlang');
        }

        // Register via API
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            role: formData.role
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Xatolik yuz berdi');
        }

        // Store user data in localStorage
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));

          // Redirect based on role
          if (data.user.role === 'TEACHER') {
            router.push('/teacher');
          } else if (data.user.role === 'STUDENT') {
            router.push('/student');
          } else {
            router.push('/dashboard');
          }
        } else {
          router.push('/dashboard');
        }
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || 'Serverga ulanishda xatolik');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {mode === 'login' ? 'Kirish' : "Ro'yxatdan o'tish"}
          </h1>
          <p className="text-gray-600">
            {mode === 'login'
              ? 'Tizimga kirish uchun ma\'lumotlaringizni kiriting'
              : "Yangi hisob yaratish uchun ma'lumotlaringizni kiriting"}
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Ism
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900"
              placeholder="Ismingizni kiriting"
              disabled={loading}
            />
          </div>

          {/* Role Selection (only for register) */}
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rol
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'STUDENT' })}
                  className={`py-3 px-4 rounded-lg font-medium transition ${
                    formData.role === 'STUDENT'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  disabled={loading}
                >
                  Talaba
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'TEACHER' })}
                  className={`py-3 px-4 rounded-lg font-medium transition ${
                    formData.role === 'TEACHER'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  disabled={loading}
                >
                  O'qituvchi
                </button>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? 'Yuklanmoqda...'
              : mode === 'login' ? 'Kirish' : "Ro'yxatdan o'tish"}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setMode(mode === 'login' ? 'register' : 'login');
              setError('');
            }}
            className="text-blue-600 hover:text-blue-700 font-medium transition"
            disabled={loading}
          >
            {mode === 'login'
              ? "Hisobingiz yo'qmi? Ro'yxatdan o'ting"
              : 'Hisobingiz bormi? Kirish'}
          </button>
        </div>
      </div>
    </div>
  );
}

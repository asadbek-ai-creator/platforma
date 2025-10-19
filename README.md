# Next.js Authentication System

Next.js autentifikatsiya tizimi - O'qituvchi va Talaba rollari bilan.

## Texnologiyalar

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT tokens, bcrypt

## Xususiyatlari

- Kirish/Ro'yxatdan o'tish (Uzbek tilida)
- Ikki rol: O'qituvchi va Talaba
- JWT token asosida autentifikatsiya
- Himoyalangan yo'nalishlar (Protected routes)
- Rol asosida turli dashboard'lar
- HttpOnly cookie'lar bilan xavfsizlik

## O'rnatish

### 1. Loyihani klonlash

```bash
cd auth-system
npm install
```

### 2. Ma'lumotlar bazasini sozlash

PostgreSQL ma'lumotlar bazasini yarating:

```sql
CREATE DATABASE auth_db;
```

### 3. .env.local faylini sozlash

`.env.local` faylini tahrirlang:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/auth_db?schema=public"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
```

**Muhim**: `username`, `password` va `JWT_SECRET` qiymatlarini o'zgartiring!

### 4. Prisma migratsiyalarini bajarish

```bash
npx prisma generate
npx prisma db push
```

### 5. Loyihani ishga tushirish

```bash
npm run dev
```

Loyiha manzili: http://localhost:3000

## API Endpoints

### POST /api/auth/register
Yangi foydalanuvchi ro'yxatdan o'tkazish

**Body:**
```json
{
  "name": "Ali",
  "password": "parol123",
  "role": "STUDENT" // yoki "TEACHER"
}
```

### POST /api/auth/login
Foydalanuvchi kirishi

**Body:**
```json
{
  "name": "Ali",
  "password": "parol123"
}
```

### GET /api/auth/me
Joriy foydalanuvchi ma'lumotlarini olish (token kerak)

### POST /api/auth/logout
Foydalanuvchi chiqishi

## Loyiha tuzilishi

```
auth-system/
├── app/
│   ├── api/
│   │   └── auth/           # API routes
│   │       ├── login/
│   │       ├── register/
│   │       ├── me/
│   │       └── logout/
│   ├── dashboard/          # Dashboard sahifasi
│   ├── login/              # Login sahifasi
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # React komponentlari
│   ├── TeacherDashboard.tsx
│   └── StudentDashboard.tsx
├── lib/                    # Utility funksiyalar
│   ├── auth.ts            # JWT va bcrypt funksiyalari
│   └── prisma.ts          # Prisma client
├── prisma/
│   └── schema.prisma      # Database schema
├── middleware.ts          # Next.js middleware
├── .env.local             # Environment variables
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Rollar

### Talaba (STUDENT)
- O'z kurslarini ko'rish
- Vazifalarni bajarish
- Natijalarni ko'rish

### O'qituvchi (TEACHER)
- Talabalarni boshqarish
- Vazifalar yaratish
- Natijalarni baholash

## Xavfsizlik

- Parollar bcrypt bilan hash qilinadi
- JWT tokenlar HttpOnly cookie'larda saqlanadi
- Middleware orqali himoyalangan yo'nalishlar
- CSRF himoyasi
- Role-based access control (RBAC)

## Development

```bash
# Development mode
npm run dev

# Build
npm run build

# Production mode
npm start

# Prisma Studio
npx prisma studio
```

## Ma'lumotlar bazasi boshqaruvi

```bash
# Prisma Studio ochish
npx prisma studio

# Migratsiya yaratish
npx prisma migrate dev --name migration_name

# Schema yangilash
npx prisma generate

# Database reset qilish
npx prisma migrate reset
```

## Muammolarni hal qilish

### Database ulanish xatosi
- PostgreSQL ishlab turganini tekshiring
- `.env.local` faylidagi `DATABASE_URL` to'g'riligini tekshiring

### Prisma client topilmadi
```bash
npx prisma generate
```

### Port band
Next.js default 3000-portdan foydalanadi. Boshqa portni ishlatish:
```bash
npm run dev -- -p 3001
```

## License

MIT

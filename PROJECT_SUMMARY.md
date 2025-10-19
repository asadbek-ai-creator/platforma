# Loyiha xulosasi - Next.js Autentifikatsiya tizimi

## Yaratilgan sanasi
2025-10-19

## Loyiha haqida
Next.js 15 asosida yaratilgan to'liq funksional autentifikatsiya tizimi. O'qituvchi va Talaba rollari bilan.

## Texnologiyalar

### Frontend
- **Next.js 15** - App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

### Backend
- **Next.js API Routes** - Backend endpoints
- **PostgreSQL** - Ma'lumotlar bazasi
- **Prisma ORM** - Database ORM
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing

## Fayl tuzilishi

```
auth-system/
│
├── app/                          # Next.js App Router
│   ├── api/auth/                # Authentication API endpoints
│   │   ├── login/route.ts       # POST /api/auth/login
│   │   ├── register/route.ts    # POST /api/auth/register
│   │   ├── me/route.ts          # GET /api/auth/me
│   │   └── logout/route.ts      # POST /api/auth/logout
│   │
│   ├── dashboard/               # Dashboard sahifasi
│   │   └── page.tsx            # Role-based dashboard
│   │
│   ├── login/                   # Login sahifasi
│   │   └── page.tsx            # Login/Register form
│   │
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home (redirect to login)
│
├── components/                  # React components
│   ├── TeacherDashboard.tsx    # O'qituvchi paneli
│   └── StudentDashboard.tsx    # Talaba paneli
│
├── lib/                         # Utility functions
│   ├── auth.ts                 # JWT va bcrypt funksiyalari
│   └── prisma.ts               # Prisma client instance
│
├── prisma/                      # Prisma ORM
│   └── schema.prisma           # Database schema
│
├── middleware.ts                # Next.js middleware (route protection)
├── .env.local                   # Environment variables
├── .gitignore                   # Git ignore
├── next.config.ts               # Next.js config
├── tailwind.config.ts           # Tailwind config
├── tsconfig.json                # TypeScript config
├── package.json                 # Dependencies
├── README.md                    # Loyiha hujjatlari
└── SETUP.md                     # O'rnatish yo'riqnomasi
```

## Asosiy xususiyatlar

### 1. Autentifikatsiya
- ✅ Ro'yxatdan o'tish (name, password, role)
- ✅ Kirish (name, password)
- ✅ Chiqish
- ✅ JWT token asosida sessiya
- ✅ HttpOnly cookie'lar
- ✅ Password hashing (bcrypt)

### 2. Rollar
- ✅ **Talaba (STUDENT)**: O'z kurslari, vazifalar, natijalar
- ✅ **O'qituvchi (TEACHER)**: Talabalarni boshqarish, vazifalar yaratish

### 3. Himoyalangan yo'nalishlar
- ✅ Middleware orqali route protection
- ✅ Role-based access control
- ✅ Auto redirect (login → dashboard, dashboard → login)

### 4. UI/UX
- ✅ Uzbek tilida barcha matnlar
- ✅ Responsive design
- ✅ Modern va chiroyli interface
- ✅ Loading states
- ✅ Error handling va xabarlar

## API Endpoints

| Method | Endpoint | Tavsif | Body |
|--------|----------|--------|------|
| POST | `/api/auth/register` | Ro'yxatdan o'tish | `{name, password, role}` |
| POST | `/api/auth/login` | Kirish | `{name, password}` |
| GET | `/api/auth/me` | Foydalanuvchi ma'lumoti | - |
| POST | `/api/auth/logout` | Chiqish | - |

## Database Schema

```prisma
model User {
  id        String   @id @default(uuid())
  name      String   @unique
  password  String
  role      UserRole
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum UserRole {
  TEACHER  // O'qituvchi
  STUDENT  // Talaba
}
```

## Xavfsizlik

1. **Password Security**
   - bcrypt hashing (10 salt rounds)
   - Parollar hech qachon plaintext saqlanmaydi

2. **Token Security**
   - JWT tokens with 7-day expiry
   - HttpOnly cookies (XSS himoyasi)
   - SameSite: lax (CSRF himoyasi)

3. **Route Protection**
   - Middleware orqali himoyalangan routes
   - Token verification har requestda
   - Invalid token → auto logout

4. **Input Validation**
   - Required field validation
   - Role validation
   - Unique username check

## Ishga tushirish

### 1. Dependencies o'rnatish
```bash
npm install
```

### 2. Database sozlash
```bash
# .env.local faylini tahrirlang
DATABASE_URL="postgresql://user:password@localhost:5432/auth_db"
JWT_SECRET="your-secret-key"

# Prisma setup
npx prisma generate
npx prisma db push
```

### 3. Development server
```bash
npm run dev
```

Brauzer: http://localhost:3000

## Test qilish

1. Talaba sifatida ro'yxatdan o'ting
2. Dashboard'ni ko'ring (Talaba paneli)
3. Chiqing
4. O'qituvchi sifatida ro'yxatdan o'ting
5. Dashboard'ni ko'ring (O'qituvchi paneli)

## Keyingi qadamlar (ixtiyoriy)

- [ ] Email verification
- [ ] Password reset
- [ ] Remember me
- [ ] Two-factor authentication (2FA)
- [ ] User profile editing
- [ ] Admin panel
- [ ] Rate limiting
- [ ] Logging system
- [ ] Tests (Jest, Cypress)
- [ ] Deployment (Vercel, Railway)

## Hujjatlar

- `README.md` - Batafsil hujjatlar
- `SETUP.md` - Bosqichma-bosqich o'rnatish
- `PROJECT_SUMMARY.md` - Ushbu fayl

## Muallif va litsenziya

- Framework: Next.js 15
- License: MIT
- Til: TypeScript
- UI Language: O'zbek tili

---

**Eslatma**: Bu loyiha production uchun tayyor. Faqat `.env.local` faylidagi kalitlarni o'zgartiring va database'ni sozlang.

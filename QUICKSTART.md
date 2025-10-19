# Tezkor boshlash (5 daqiqa)

## Oldindan talab qilinadigan
- Node.js 18+ o'rnatilgan
- PostgreSQL o'rnatilgan va ishlab turgan

## 1. Ma'lumotlar bazasini yaratish

PostgreSQL terminalida:
```sql
CREATE DATABASE auth_db;
```

## 2. Environment o'zgaruvchilarni sozlash

`.env.local` faylini tahrirlang:

```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/auth_db?schema=public"
JWT_SECRET="maxfiy-kalit-123456"
```

**O'zgartiring:**
- `yourpassword` - PostgreSQL parolingiz
- `maxfiy-kalit-123456` - o'z maxfiy kalitingiz

## 3. Paketlarni o'rnatish va database setup

```bash
npm install
npx prisma generate
npx prisma db push
```

## 4. Ishga tushirish

```bash
npm run dev
```

**Tayyor!** Brauzerda oching: http://localhost:3000

## 5. Test qilish

1. **Ro'yxatdan o'tish**
   - Ism: `ali`
   - Parol: `123456`
   - Rol: Talaba

2. **Dashboard**
   - Talaba paneli ochiladi
   - "Chiqish" tugmasini bosing

3. **Yana ro'yxatdan o'tish**
   - Ism: `vali`
   - Parol: `123456`
   - Rol: O'qituvchi

4. **Dashboard**
   - O'qituvchi paneli ochiladi

---

## Qisqa xulosa

✅ **Frontend**: Next.js 15 + React 19 + TypeScript + Tailwind CSS
✅ **Backend**: Next.js API Routes + JWT
✅ **Database**: PostgreSQL + Prisma ORM
✅ **Features**: Login/Register, Role-based dashboards, Protected routes
✅ **Language**: Uzbek UI

---

## Muammolar?

**Database error:**
```bash
# PostgreSQL ishlab turganini tekshiring
# Windows: Services > PostgreSQL
# Mac/Linux: sudo service postgresql status
```

**Port band:**
```bash
npm run dev -- -p 3001
```

**Batafsil yo'riqnoma**: `SETUP.md` faylini o'qing

# O'rnatish yo'riqnomasi

Bu qo'llanma sizga loyihani bosqichma-bosqich o'rnatishga yordam beradi.

## 1-bosqich: Node.js va PostgreSQL o'rnatish

### Node.js
- Node.js 18+ versiyasini o'rnating: https://nodejs.org/
- Tekshirish: `node --version`

### PostgreSQL
- PostgreSQL o'rnating: https://www.postgresql.org/download/
- Tekshirish: `psql --version`

## 2-bosqich: PostgreSQL ma'lumotlar bazasini sozlash

### Windows
1. PostgreSQL SQL Shell (psql) ni oching
2. Quyidagi buyruqlarni kiriting:

```sql
CREATE DATABASE auth_db;
```

### Mac/Linux
```bash
psql postgres
CREATE DATABASE auth_db;
\q
```

## 3-bosqich: Loyiha paketlarini o'rnatish

```bash
cd auth-system
npm install
```

## 4-bosqich: Environment o'zgaruvchilarni sozlash

`.env.local` faylini tahrirlang:

```env
# PostgreSQL ulanish manzili
# Format: postgresql://username:password@host:port/database
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/auth_db?schema=public"

# JWT maxfiy kalit (istagan uzun matni kiriting)
JWT_SECRET="o'zingizning-maxfiy-kalitingiz-bu-yerga-123456"
```

**Muhim amallar:**
- `postgres` - PostgreSQL foydalanuvchi nomi (default: postgres)
- `yourpassword` - PostgreSQL parolingiz
- `JWT_SECRET` - O'zingizning maxfiy kalitingizni yozing

## 5-bosqich: Prisma sozlash va migratsiya

```bash
# Prisma client yaratish
npx prisma generate

# Ma'lumotlar bazasiga table'larni qo'shish
npx prisma db push

# (Ixtiyoriy) Prisma Studio ochish - ma'lumotlar bazasini ko'rish uchun
npx prisma studio
```

## 6-bosqich: Loyihani ishga tushirish

```bash
npm run dev
```

Brauzerda oching: http://localhost:3000

## Test qilish

### 1. Ro'yxatdan o'tish
- http://localhost:3000 ochiladi
- "Ro'yxatdan o'tish" ni bosing
- Ism, parol va rol tanlang
- "Ro'yxatdan o'tish" tugmasini bosing

### 2. Kirish
- Yaratgan foydalanuvchi ma'lumotlaringiz bilan kirish
- Dashboard sahifasi ochiladi

### 3. Rollarni sinash
- Birinchi foydalanuvchini TALABA sifatida yarating
- Chiqing va ikkinchi foydalanuvchini O'QITUVCHI sifatida yarating
- Har ikkala dashboard'larni ko'ring

## Muammolar va yechimlar

### "Port 3000 already in use"
```bash
# Boshqa port ishlatish
npm run dev -- -p 3001
```

### "Can't reach database server"
- PostgreSQL ishlab turganini tekshiring:
  - Windows: Services > PostgreSQL
  - Mac/Linux: `sudo service postgresql status`
- `.env.local` dagi DATABASE_URL to'g'riligini tekshiring

### "Prisma Client not found"
```bash
npx prisma generate
```

### "Authentication failed"
- PostgreSQL parolingiz to'g'riligini tekshiring
- `.env.local` fayldagi ma'lumotlarni yangilang

## Prisma Studio

Ma'lumotlar bazasini vizual ko'rish va tahrirlash uchun:

```bash
npx prisma studio
```

Brauzerda ochiladi: http://localhost:5555

## Production uchun build

```bash
npm run build
npm start
```

## Qo'shimcha buyruqlar

```bash
# Linting
npm run lint

# Ma'lumotlar bazasini tozalash
npx prisma migrate reset

# Yangi migratsiya yaratish
npx prisma migrate dev --name migration_name

# Format check
npx prisma format
```

## Yordam

Agar muammoga duch kelsangiz:
1. Error xabarini diqqat bilan o'qing
2. `.env.local` fayldagi ma'lumotlarni tekshiring
3. `node_modules` ni qayta o'rnating: `rm -rf node_modules && npm install`
4. README.md faylidagi "Muammolarni hal qilish" bo'limini o'qing

## Keyingi qadamlar

Loyiha ishlayotgandan keyin:
1. `JWT_SECRET` ni o'zgartiring
2. Production uchun `DATABASE_URL` ni sozlang
3. HTTPS ni yoqing
4. Rate limiting qo'shing
5. Logging tizimini qo'shing

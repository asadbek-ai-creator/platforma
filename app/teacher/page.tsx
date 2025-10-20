'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// VARK Test Questions (16 questions)
const questions = [
  {
    question: "Yangi ma'lumotni o'rganishda qaysi usul sizga yoqadi?",
    options: [
      { type: 'V', text: "Diagramma va grafiklar orqali" },
      { type: 'A', text: "Audio yozuvlar va tushuntirishlar orqali" },
      { type: 'R', text: "Kitoblar va maqolalar o'qish orqali" },
      { type: 'K', text: "Amaliy mashqlar va tajribalar orqali" }
    ]
  },
  {
    question: "Darsni qanday qilib yaxshiroq eslab qolasiz?",
    options: [
      { type: 'V', text: "Tasvirlar va videolarni ko'rish orqali" },
      { type: 'A', text: "Muhokama va tinglab o'rganish orqali" },
      { type: 'R', text: "Qayta-qayta o'qish orqali" },
      { type: 'K', text: "Amaliy ish orqali mashq qilish orqali" }
    ]
  },
  {
    question: "Yo'l-yo'riqlarni qabul qilishda qaysi usul qulay?",
    options: [
      { type: 'V', text: "Xarita yoki diagramma ko'rish" },
      { type: 'A', text: "Og'zaki tushuntirish eshitish" },
      { type: 'R', text: "Yozma ko'rsatmalarni o'qish" },
      { type: 'K', text: "O'zim amalda sinab ko'rish" }
    ]
  },
  {
    question: "Biror narsani tushuntirishda qaysi usulni afzal ko'rasiz?",
    options: [
      { type: 'V', text: "Rasm yoki diagramma chizish" },
      { type: 'A', text: "Og'zaki tushuntirish berish" },
      { type: 'R', text: "Yozma qo'llanma tayyorlash" },
      { type: 'K', text: "Amalda ko'rsatish" }
    ]
  },
  {
    question: "Dam olishda nima bilan shug'ullanasiz?",
    options: [
      { type: 'V', text: "Film ko'rish yoki rasm chizish" },
      { type: 'A', text: "Musiqa tinglash yoki suhbatlashish" },
      { type: 'R', text: "Kitob o'qish" },
      { type: 'K', text: "Sport bilan shug'ullanish" }
    ]
  },
  {
    question: "Yangi odamni eslab qolishda sizga nima yordam beradi?",
    options: [
      { type: 'V', text: "Yuzini eslash" },
      { type: 'A', text: "Ismini eshitish" },
      { type: 'R', text: "Ismini yozib olish" },
      { type: 'K', text: "Birgalikda biror ish qilish" }
    ]
  },
  {
    question: "Ma'lumotni qayta ko'rib chiqishda qaysi usul samarali?",
    options: [
      { type: 'V', text: "Rang-barang belgilar va diagrammalar" },
      { type: 'A', text: "O'zimga ovoz chiqarib o'qish" },
      { type: 'R', text: "Qaytadan qayta o'qish" },
      { type: 'K', text: "Yozib chiqish va amaliy mashqlar" }
    ]
  },
  {
    question: "Do'stlaringiz sizni qanday tasvirlaydi?",
    options: [
      { type: 'V', text: "Vizual va ijodkor" },
      { type: 'A', text: "Yaxshi tinglovchi" },
      { type: 'R', text: "Bilimdon va o'qimishli" },
      { type: 'K', text: "Faol va harakatchan" }
    ]
  },
  {
    question: "Yangi dasturiy ta'minotni o'rganishda qaysi usul qulay?",
    options: [
      { type: 'V', text: "Video darsliklar ko'rish" },
      { type: 'A', text: "Birovdan tushuntirib olish" },
      { type: 'R', text: "Qo'llanmani o'qish" },
      { type: 'K', text: "O'zim sinab ko'rish" }
    ]
  },
  {
    question: "Taqdimot tayyorlashda nimaga e'tibor berasiz?",
    options: [
      { type: 'V', text: "Slaydlar va grafiklar" },
      { type: 'A', text: "Og'zaki nutq va ovoz" },
      { type: 'R', text: "Yozma ma'lumotlar" },
      { type: 'K', text: "Interaktiv faoliyat" }
    ]
  },
  {
    question: "Imtihonga qanday tayyorlanasiz?",
    options: [
      { type: 'V', text: "Diagramma va jadvallar tuzish" },
      { type: 'A', text: "Guruhdoshlar bilan muhokama qilish" },
      { type: 'R', text: "Konspekt va kitoblarni o'qish" },
      { type: 'K', text: "Amaliy mashqlar yechish" }
    ]
  },
  {
    question: "Bir necha ishni bajarishda qaysi usul yaxshiroq?",
    options: [
      { type: 'V', text: "Vizual rejalashtirish (mind map)" },
      { type: 'A', text: "Ovozli eslatmalar" },
      { type: 'R', text: "Ro'yxat yozish" },
      { type: 'K', text: "Amalda sinab ko'rish" }
    ]
  },
  {
    question: "Do'konda xarid qilishda qaysi usul qulay?",
    options: [
      { type: 'V', text: "Mahsulotni ko'rib tanlayman" },
      { type: 'A', text: "Sotuvchidan maslahat olamanman" },
      { type: 'R', text: "Yorliqlarni o'qib tanlayman" },
      { type: 'K', text: "Sinab ko'rib tanlayman" }
    ]
  },
  {
    question: "Yangi joy haqida ma'lumot olishda?",
    options: [
      { type: 'V', text: "Xaritani ko'rish" },
      { type: 'A', text: "Yo'l-yo'riq so'rash" },
      { type: 'R', text: "Qo'llanmani o'qish" },
      { type: 'K', text: "O'zim yurib ko'rish" }
    ]
  },
  {
    question: "Gap-so'zda qaysi jihat muhim?",
    options: [
      { type: 'V', text: "Imo-ishoralar va mimika" },
      { type: 'A', text: "Ovoz ohangi" },
      { type: 'R', text: "So'zlarning ma'nosi" },
      { type: 'K', text: "Tana harakatlari" }
    ]
  },
  {
    question: "Retseptni eslab qolishda?",
    options: [
      { type: 'V', text: "Tayyorlangan taomning rasmini ko'rish" },
      { type: 'A', text: "Kimdir tushuntirib berishini eshitish" },
      { type: 'R', text: "Retseptni o'qish" },
      { type: 'K', text: "O'zim tayyorlab ko'rish" }
    ]
  }
];

// Practical Topics (13 topics with full resources)
const practicalTopics = [
  {
    id: 1,
    title: "🎯 Tarbiya ijtimoiy-tarixiy zarurat sifatida",
    resources: {
      visual: [
        "Tarbiya tarixini aks ettiruvchi slayd taqdimoti",
        "Qadimgi madaniyatlarda tarbiya jarayonini ko'rsatuvchi video",
        "Ijtimoiy-tarixiy rivojlanish infografikasi",
        "Tarbiya evolyutsiyasining vizual xronologiyasi",
        "Turli davrlar tarbiya tizimlarining taqqoslash jadvali",
        "Tarbiyaning ijtimoiy ahamiyatini ko'rsatuvchi diagramma",
        "Tarixiy shaxslarning tarbiya haqidagi fikrlari posteri",
        "Zamonaviy tarbiya tizimining ko'rgazmali tahlili",
        "Tarbiyaning jamiyat rivojiga ta'sirini aks ettiruvchi grafik",
        "Milliy tarbiya an'analarini ko'rsatuvchi rasm to'plami"
      ],
      audio: [
        "Tarbiya tarixi haqida audio ma'ruza",
        "Ijtimoiy-tarixiy tahlil podcast",
        "Mutaxassislar suhbati audio yozuvi",
        "Tarbiya rivojlanishi haqida audio kitob",
        "O'zbek pedagoglarining nutqlari audio to'plami",
        "Tarbiya falsafasi haqida munozara yozuvi",
        "Tarixiy faktlarni bayon qiluvchi audio hikoya",
        "Tarbiya tizimlarini taqqoslovchi audio tahlil",
        "O'qituvchilar tajribasi audio intervyu",
        "Milliy qadriyatlar haqida audio ma'lumot"
      ],
      kinesthetic: [
        "Tarixiy voqealarni qayta tiklash (role-play)",
        "Tarbiya usullarini amaliy sinab ko'rish",
        "Guruh loyihasi: Tarbiya tarixi muzeyi yaratish",
        "Ijodiy ish: Tarbiya jarayonini modellash",
        "Tarixiy tarbiya usullarini zamonaviy sharoitda qo'llash",
        "Amaliy seminar: Tarbiya metodlarini taqqoslash",
        "Interaktiv o'yin: Tarbiya tarixining bosqichlari",
        "Eksperiment: Turli tarbiya yondashuvlarini sinash",
        "Guruh muhokamasi va natijalarn taqdimoti",
        "Amaliy topshiriq: Tarbiya rejasi ishlab chiqish"
      ],
      reading: [
        "Abu Nasr Forobiy 'Fozil odamlar shahri' asari",
        "Alisher Navoiy pedagogik qarashlari",
        "Abdulla Avloniy 'Turkiy guliston yoxud axloq' kitobi",
        "Milliy tarbiya konsepsiyasi matni",
        "Tarbiya tarixiga oid maqolalar to'plami",
        "O'zbekiston tarbiya tizimi rivojlanishi",
        "Jahon pedagogikasi tarixi bo'limlari",
        "Sharq mutafakkirlari pedagogik meroslaridan",
        "Zamonaviy tarbiya nazariyasi asoslari",
        "Tarbiya falsafasi bo'yicha ilmiy tadqiqotlar"
      ],
      digital: [
        "Virtual tur: Jahon tarbiya tarixi muzeyiga",
        "Interaktiv xronologiya: Tarbiya rivojlanishi",
        "Online test: Tarbiya tarixi bilimlari",
        "Raqamli prezentatsiya yaratish vositasi",
        "Vebinar: Tarbiya tarixining zamonaviy talqini",
        "Elektron kutubxona: Pedagogika klasiklari",
        "3D model: Qadimgi maktabxonalar",
        "Mobil ilova: Tarbiya tarixidan test",
        "Video konferentsiya: Xalqaro tajriba almash",
        "Online platformada guruh loyihasi"
      ]
    }
  },
  {
    id: 2,
    title: "🇺🇿 Milliy tarbiya konsepsiyasi",
    resources: {
      visual: [
        "Milliy tarbiya konsepsiyasi asoslari slayd taqdimoti",
        "O'zbekiston milliy g'oyasi infografikasi",
        "Milliy qadriyatlar tizimi diagrammasi",
        "Tarbiyaning milliy o'ziga xosligi ko'rsatkichlari",
        "Milliy an'analar va zamonaviylik integratsiyasi sxemasi",
        "O'zbek xalqining milliy-ma'naviy merosi vijalari",
        "Yosh avlod tarbiyasi yo'nalishlari grafik taqdimoti",
        "Milliy g'urur va vatanparvarlik tarbiyasi posteri",
        "Ma'naviy-axloqiy tarbiyaning vizual modeli",
        "Milliy tarbiya maqsad va vazifalari jadvali"
      ],
      audio: [
        "Milliy tarbiya konsepsiyasi audio sharhi",
        "Prezident nutqlari milliy tarbiya haqida",
        "Milliy g'oya asoslari audio ma'ruzasi",
        "O'zbek milliy qadriyatlari podcast",
        "Ajdodlar merosi haqida audio hikoyalar",
        "Milliy tarbiya yo'nalishlari audio tahlili",
        "Vatanparvarlik tarbiyasi audio darslari",
        "Milliy an'analarni saqlash audio muhokamasi",
        "Ma'naviy-axloqiy qadriyatlar audio kursi",
        "Milliy tarbiya tajribasi intervyulari"
      ],
      kinesthetic: [
        "Milliy o'yinlar va bayramlarni tashkil etish",
        "An'anaviy hunarmandchilik amaliyoti",
        "Milliy liboslar ko'rgazmasi uyushtirish",
        "Vatanparvarlik mavzusida loyiha tayyorlash",
        "Milliy taomlar tayyorlash master-klassi",
        "Xalq qo'shiqlari va raqs mashg'ulotlari",
        "Milliy o'yinchoqlar yaratish ustaxonasi",
        "Ajdodlar merosi bo'yicha ekskursiya uyushtirish",
        "Milliy bayram senariysini tayyorlash va o'tkazish",
        "Milliy qadriyatlar muzeyi yaratish loyihasi"
      ],
      reading: [
        "O'zbekiston Respublikasi Milliy tarbiya konsepsiyasi",
        "Karimov I.A. 'Yuksak ma'naviyat yengilmas kuch'",
        "Mirziyoyev Sh.M. nutqlari milliy tarbiya haqida",
        "O'zbek xalqining milliy qadriyatlari to'plami",
        "Vatanparvarlik tarbiyasi metodikasi",
        "Milliy g'urur va iftixor tarbiyalash yo'llari",
        "O'zbek milliy pedagogikasi asoslari",
        "Ma'naviy-axloqiy tarbiya metodikasi",
        "Milliy an'analar va zamonaviylik maqolalar",
        "Yosh avlod tarbiyasi davlat dasturi"
      ],
      digital: [
        "Virtual muzey: O'zbekiston tarixi va madaniyati",
        "Interaktiv xarita: O'zbekiston diydorlari",
        "Online test: Milliy qadriyatlar bilimi",
        "Raqamli kutubxona: Milliy meros",
        "3D tur: Tarixiy yodgorliklar",
        "Mobil ilova: Milliy an'analar",
        "Video galereya: Milliy bayramlar",
        "E-portfolio: Milliy tarbiya loyihalari",
        "Onlayn viktorina: O'zbekiston tarixi",
        "Virtual reality: Ajdodlar hayoti"
      ]
    }
  },
  {
    id: 3,
    title: "👨‍👩‍👧 Ta'lim-tarbiya jarayonida oila, mahalla va ta'lim muassasasi integratsiyasi",
    resources: {
      visual: [
        "Oila-mahalla-maktab uchburchagi diagrammasi",
        "Integratsiya mexanizmlari infografikasi",
        "Hamkorlik shakllari vizual taqdimoti",
        "Ota-onalar ishtiroki ko'rsatkichlari jadvali",
        "Mahalla faoliyati tarbiyaviy ta'siri grafigi",
        "Pedagogik jamoaning tuzilishi sxemasi",
        "Uch tomonlama hamkorlik modeli",
        "Tarbiyaviy muhit yaratish bosqichlari",
        "Oilaviy qadriyatlar tizimi posteri",
        "Jamoa shakllanishining vizual ko'rinishi"
      ],
      audio: [
        "Oila tarbiyasi asoslari audio kursi",
        "Mahalla roli haqida audio ma'ruza",
        "Ota-onalar uchun audio maslahatlari",
        "Pedagoglar va ota-onalar suhbati",
        "Mahalla faollari tajribasi audio",
        "Hamkorlik shakllari audio tahlili",
        "Oilaviy tarbiya podcast seriyasi",
        "Maktab-oila aloqasi audio seminari",
        "Tarbiyaviy muhit yaratish audio qo'llanma",
        "Integratsiya tajribasi audio intervyu"
      ],
      kinesthetic: [
        "Ota-onalar yig'ini o'tkazish amaliyoti",
        "Mahalla tadbirlari uyushtirish",
        "Oilaviy sport bayrami tashkil etish",
        "Qo'shma loyihalar ishlab chiqish",
        "Ota-onalar maktabi mashg'ulotlari",
        "Mahalla kengashi ishtirokida tadbir",
        "Oilaviy master-klasslar o'tkazish",
        "Uchrashuvlar va suhbatlar tashkil etish",
        "Qo'shma ekskursiyalar uyushtirish",
        "Ota-onalar kuzatuvlar o'tkazishi"
      ],
      reading: [
        "Oila kodeksi va bolalar huquqlari",
        "Mahalla faoliyati to'g'risidagi qonun",
        "Ota-onalar uchun tarbiya qo'llanmasi",
        "Oilaviy pedagogika asoslari",
        "Maktab-oila hamkorligi metodikasi",
        "Mahallaning tarbiyaviy imkoniyatlari",
        "Pedagogik jamoaning vazifalari",
        "Hamkorlikda tarbiya metodikasi",
        "Oilaviy qadriyatlarni saqlash",
        "Integratsiya shakllari va usullari"
      ],
      digital: [
        "Online platforma: Maktab-oila aloqasi",
        "Mobil ilova: Ota-onalar uchun",
        "Virtual uchrashuvlar platformasi",
        "Elektron jurnali: O'quvchilar faoliyati",
        "Raqamli kutubxona: Oilaviy tarbiya",
        "Video konferentsiya: Ota-onalar yig'ini",
        "Onlayn so'rovnomalar va testlar",
        "Ijtimoiy tarmoq: Maktab hamjamiyati",
        "E-pochta axborot tizimi",
        "Veb-sayt: Maktab hayoti"
      ]
    }
  },
  {
    id: 4,
    title: "🎨 Axloqiy va estetik tarbiya",
    resources: {
      visual: [
        "Axloqiy qadriyatlar infografikasi",
        "Estetik tarbiya yo'nalishlari sxemasi",
        "Go'zallikni idrok etish bosqichlari",
        "Axloqiy xususiyatlar tizimi jadvali",
        "San'at turlarining tarbiyaviy ta'siri",
        "Estetik didning shakllanish bosqichlari",
        "Axloqiy tanlov situatsiyalari diagrammasi",
        "Go'zallik hissi rivojlantirish usullari",
        "Madaniy qadriyatlar piramidasi",
        "Estetik muhit yaratish ko'rsatkichlari"
      ],
      audio: [
        "Axloq asoslari audio darslari",
        "Estetik tarbiya audio ma'ruzalari",
        "Klassik musiqa tinglab tahlil qilish",
        "Adabiy asarlarni audio tinglash",
        "San'at haqida audio podcast",
        "Axloqiy hikoyalar audio to'plami",
        "Estetik didni rivojlantiruvchi audio",
        "Go'zallik haqida suhbatlar",
        "Madaniy meros audio ekskursiyalari",
        "Axloqiy qadriyatlar audio kursi"
      ],
      kinesthetic: [
        "Tasviriy san'at mashg'ulotlari",
        "Musiqiy asboblarda chalish darslari",
        "Dramatizatsiya va teatr mashqlari",
        "Ijodiy ustaxonalar (workshoplar)",
        "Rassomlik va haykaltaroshlik amaliyoti",
        "Raqs va xoreografiya mashg'ulotlari",
        "Amaliy san'at ko'rgazmasi uyushtirish",
        "Axloqiy vaziyatlarni o'ynash (role-play)",
        "Dizayn loyihalari ishlab chiqish",
        "San'at asarlarini tahlil qilish amaliyoti"
      ],
      reading: [
        "Navoi 'Mahbub ul-qulub' asari",
        "Abdulla Qodiriy 'O'tkan kunlar'",
        "Fitrat 'Oila' asari",
        "Cho'lpon she'rlar to'plami",
        "Oybek 'Navoiy' romani",
        "G'afur G'ulom hikoyalari",
        "Abdulla Oripov she'rlari",
        "Estetika nazariyasi asoslari",
        "Axloq va odob-axloq adabiyoti",
        "San'atshunoslik asoslari"
      ],
      digital: [
        "Virtual muzey: Jahon san'ati",
        "Online galereya: O'zbek san'ati",
        "Raqamli rasm chizish dasturlari",
        "Musiqa yaratish ilovasi",
        "3D modellashtirish dasturi",
        "Video montaj vositasi",
        "Interaktiv teatr platformasi",
        "E-portfolio: Ijodiy ishlar",
        "Online test: Axloq bilimlari",
        "Virtual konsert zali"
      ]
    }
  },
  {
    id: 5,
    title: "🏋️ Jismoniy tarbiya va sog'lom turmush tarzi",
    resources: {
      visual: [
        "Sog'lom turmush tarzi piramidasi",
        "Jismoniy mashqlar infografikasi",
        "To'g'ri ovqatlanish jadvali",
        "Sport turlari tasnifi diagrammasi",
        "Inson tanasi anatomiyasi posteri",
        "Kundalik rejim grafigi",
        "Gigiyena qoidalari vizual qo'llanma",
        "Jismoniy rivojlanish ko'rsatkichlari",
        "Sog'lom odatlar ro'yxati",
        "Sport yutuqlari motivatsion posteri"
      ],
      audio: [
        "Sog'lom turmush tarzi audio ma'ruzalari",
        "Jismoniy mashqlar audio qo'llanma",
        "Ovqatlanish haqida audio maslahatlari",
        "Sport shifokorlari suhbatlari",
        "Motivatsion audio xabarlar",
        "Relaksatsiya va meditatsiya audio",
        "Jismoniy tarbiya metodikasi podcast",
        "Gigiyena qoidalari audio qo'llanma",
        "Sog'liq saqlash audio kursi",
        "Sport psixologiyasi audio darslari"
      ],
      kinesthetic: [
        "Kundalik jismoniy mashqlar majmuasi",
        "Sport o'yinlari (futbol, basketbol, voleybol)",
        "Gimnastika va akrobatika mashg'ulotlari",
        "Yengil atletika mashqlari",
        "Suzish darslari",
        "Milliy kurash va judo mashg'ulotlari",
        "Yoga va cho'zilish mashqlari",
        "Estafeta va sport musobaqalari",
        "Tog'ga chiqish va sayohat",
        "Badminton va tennis o'yinlari"
      ],
      reading: [
        "Jismoniy tarbiya metodikasi darsligi",
        "Sog'lom turmush tarzi qo'llanmasi",
        "Sport fiziologiyasi asoslari",
        "To'g'ri ovqatlanish haqida kitob",
        "Gigiyena va sanitariya qoidalari",
        "Yoshlar sog'ligi maqolalar to'plami",
        "Sport psixologiyasi asoslari",
        "Birinchi tibbiy yordam qo'llanmasi",
        "Jismoniy rivojlanish nazariyasi",
        "Milliy sport o'yinlari tarixi"
      ],
      digital: [
        "Mobil ilova: Fitness tracker",
        "Online mashg'ulotlar platformasi",
        "Raqamli ovqatlanish kundaligi",
        "Sport statistika ilovasi",
        "Virtual yugurish musobaqasi",
        "Jismoniy mashqlar video kursi",
        "Sog'liqni kuzatish ilovasi",
        "Onlayn yoga darslari",
        "3D anatomiya atlasi",
        "Interaktiv sport o'yinlari"
      ]
    }
  },
  {
    id: 6,
    title: "💼 Mehnatga va kasb tanlashga yo'naltirish",
    resources: {
      visual: [
        "Kasblar tasnifi infografikasi",
        "Mehnat bozori tendentsiyalari grafigi",
        "Professional ko'nikmalar jadvali",
        "Karyera yo'llari diagrammasi",
        "Kasb tanlash bosqichlari sxemasi",
        "Zamonaviy kasblar katalogi",
        "Mehnat malakalarini baholash matritsasi",
        "Karyera rivojlanish yo'nalishlari",
        "Professional kompetentsiyalar modeli",
        "Iqtisodiy sohalar vizual ko'rinishi"
      ],
      audio: [
        "Kasblar haqida audio ma'lumot",
        "Muvaffaqiyatli odamlar intervyulari",
        "Kasb tanlash maslahatlar audio",
        "Mehnat bozori tahlili podcast",
        "Professional rivojlanish audio kursi",
        "Tadbirkorlik asoslari audio darslari",
        "Karyera maslahat audio seanslari",
        "Turli sohalar mutaxassislari suhbati",
        "Mehnat qonunlari audio sharhi",
        "Biznes yo'nalishlari audio tahlili"
      ],
      kinesthetic: [
        "Turli kasb vakillariga tashrif",
        "Ishlab chiqarish korxonalariga ekskursiya",
        "Amaliy ko'nikmalarni o'rganish ustaxonalari",
        "Biznes loyihalar ishlab chiqish",
        "Kasbiy mahorat ko'rgazmalari",
        "Praktika va stajlar o'tash",
        "Mehnat ko'rgazmalariga tashrif",
        "Hunarmandlik master-klasslari",
        "Tadbirkorlik o'yinlari",
        "Professional musobaqalar va olimpiadalar"
      ],
      reading: [
        "Kasblar ensiklopediyasi",
        "Mehnat kodeksi va qonunlar",
        "Tadbirkorlik asoslari darsligi",
        "Karyera rivojlantirish qo'llanmasi",
        "Professional ta'lim yo'llari",
        "Biznes rejalashtirish kitobi",
        "Muvaffaqiyatli odamlar biografiyalari",
        "Mehnat bozori tahlili maqolalari",
        "Kasbiy yo'naltirish metodikasi",
        "Iqtisodiy bilim asoslari"
      ],
      digital: [
        "Online kasbiy orientatsiya testi",
        "Virtual kasb tanlov platformasi",
        "Elektron karyera markazi",
        "Raqamli rezyume yaratish",
        "Online praktika va kurslar",
        "Kasbiy ta'lim veb-platformasi",
        "Biznes simulyatsiya o'yinlari",
        "Professional tarmoq platformasi",
        "E-portfolio yaratish vositasi",
        "Virtual ishlab chiqarish turlari"
      ]
    }
  },
  {
    id: 7,
    title: "🌍 Ekologik tarbiya va tabiatni muhofaza qilish",
    resources: {
      visual: [
        "Ekologik muammolar infografikasi",
        "Tabiatni muhofaza qilish yo'llari diagrammasi",
        "O'zbekiston tabiati fotogalereya",
        "Ekotizim zanjiri sxemasi",
        "Chiqindilarni qayta ishlash jarayoni",
        "Iqlim o'zgarishi grafiklari",
        "Yashil texnologiyalar posteri",
        "Biologik xilma-xillik katalogi",
        "Ekologik oyoq izi kalkulyatori",
        "Tabiatni asrash kampaniyalari"
      ],
      audio: [
        "Ekologiya asoslari audio darslari",
        "Tabiat haqida audio hikoyalar",
        "Ekologik muammolar podcast",
        "Tabiatshunoslar suhbatlari",
        "Hayvonlar olami audio ekskursiya",
        "O'simliklar dunyosi audio qo'llanma",
        "Ekologik loyihalar audio taqdimoti",
        "Tabiatni muhofaza qonunlari audio",
        "Yashil texnologiyalar audio tahlil",
        "Iqlim o'zgarishi audio ma'ruzasi"
      ],
      kinesthetic: [
        "Daraxt ekish aksiyalari",
        "Ekologik to'da tashkil etish",
        "Tabiiy hududlarga ekskursiya",
        "Chiqindilarni ajratish amaliyoti",
        "Botanika bog'ida kuzatuvlar",
        "Hayvonlar bilan ishlash tajribasi",
        "Ekologik loyihalar amalga oshirish",
        "Tabiatni tozalash tadbirlari",
        "Organik bog'dorchilik mashg'ulotlari",
        "Ekologik kampaniyalar uyushtirish"
      ],
      reading: [
        "Ekologiya asoslari darsligi",
        "O'zbekiston tabiati haqida kitoblar",
        "Ekologik muammolar maqolalari",
        "Tabiatni muhofaza qilish qonunlari",
        "Biologik xilma-xillik tadqiqotlari",
        "Iqlim o'zgarishi ilmiy nashrlari",
        "Yashil iqtisodiyot asoslari",
        "Ekologik tarbiya metodikasi",
        "Tabiatshunoslarning asarlari",
        "Barqaror rivojlanish konsepsiyasi"
      ],
      digital: [
        "Virtual tabiat muzeyi",
        "Ekologik o'yinlar va testlar",
        "Online hayvonot bog'i safari",
        "Raqamli botanika atlasi",
        "Ekologik oyoq izi kalkulyatori",
        "Iqlim o'zgarishi simulyatsiyasi",
        "Mobil ilova: Tabiatni himoya qilish",
        "Virtual ekskursiya: Qo'riqxonalar",
        "Onlayn ekologik loyihalar platformasi",
        "3D ekotizim modellari"
      ]
    }
  },
  {
    id: 8,
    title: "🤝 Xalqaro tarbiya va madaniyatlararo muloqot",
    resources: {
      visual: [
        "Jahon madaniyatlari xaritasi",
        "Xalqaro ta'lim tizimlari taqqoslash jadvali",
        "Madaniyatlararo muloqot modeli",
        "Global kompetentsiyalar diagrammasi",
        "Dunyoning turli xalqlari infografikasi",
        "Xalqaro hamkorlik yo'nalishlari sxemasi",
        "Madaniy xilma-xillik posteri",
        "Global maqsadlar vizual ko'rinishi",
        "Tillararo muloqot usullari",
        "Xalqaro loyihalar katalogi"
      ],
      audio: [
        "Jahon madaniyatlari audio ekskursiya",
        "Xalqaro ta'lim tajribasi podcast",
        "Turli tillarda musiqiy asarlar",
        "Madaniyatlararo muloqot audio kursi",
        "Xalqaro mutaxassislar suhbatlari",
        "Global muammolar audio tahlili",
        "Xorijiy tillarni o'rganish audio darslari",
        "Dunyo xalqlari hikoyalari",
        "Xalqaro tadbirlar audio yozuvlari",
        "Madaniy almashish tajribalari audio"
      ],
      kinesthetic: [
        "Xalqaro loyihalarda ishtirok etish",
        "Madaniyatlararo festival uyushtirish",
        "Chet tilida muloqot amaliyoti",
        "Xorijlik talabalar bilan aloqa",
        "Madaniy almashish dasturlari",
        "Xalqaro musobaqalarda qatnashish",
        "Global loyihalar ishlab chiqish",
        "Turli madaniyatlar taomlarini tayyorlash",
        "Xalqaro videokonferentsiyalar",
        "Madaniy an'analarni o'rganish amaliyoti"
      ],
      reading: [
        "Xalqaro huquq asoslari",
        "Jahon madaniyatlari ensiklopediyasi",
        "Madaniyatlararo muloqot nazariyasi",
        "Global ta'lim tendentsiyalari",
        "Xalqaro aloqalar tarixi",
        "Chet tillarini o'rganish metodikasi",
        "Dunyo adabiyoti asarlari",
        "Global muammolar va yechimlar",
        "Xalqaro tashkilotlar faoliyati",
        "Madaniy diplomatiya asoslari"
      ],
      digital: [
        "Virtual sayohat: Jahon muzeylar",
        "Online tillar o'rganish platformasi",
        "Xalqaro hamkorlik veb-saytlari",
        "Raqamli madaniy almashish",
        "Global loyihalar platformasi",
        "Video konferentsiya xizmatlari",
        "Xalqaro ijtimoiy tarmoqlar",
        "E-learning xalqaro kurslar",
        "Virtual madaniy tadbirlar",
        "Mobil tarjimon ilovasi"
      ]
    }
  },
  {
    id: 9,
    title: "🧘 Ruhiy salomatlik va stressni boshqarish",
    resources: {
      visual: [
        "Ruhiy salomatlik ko'rsatkichlari infografikasi",
        "Stressni boshqarish usullari diagrammasi",
        "Emotsional intellekt modeli",
        "Ruhiy muvozanat piramidasi",
        "Meditatsiya texnikalari vizual qo'llanma",
        "Pozitiv fikrlash sxemasi",
        "Psixologik farovonlik jadvali",
        "Relaksatsiya usullari posteri",
        "Emotsiyalarni boshqarish yo'llari",
        "Mindfulness amaliyoti ko'rinishi"
      ],
      audio: [
        "Meditatsiya va relaksatsiya audio yozuvlari",
        "Stressni kamaytirish audio mashqlari",
        "Motivatsion audio xabarlar",
        "Psixologlar maslahat audio seanslari",
        "Nafas olish texnikalari audio qo'llanma",
        "Positiv tasdiqlar audio to'plami",
        "Tinchlik audio musiqasi",
        "Uyqu uchun audio terapiya",
        "Emotsional intellekt audio kursi",
        "Mindfulness audio darslari"
      ],
      kinesthetic: [
        "Yoga va meditatsiya mashg'ulotlari",
        "Nafas olish mashqlari amaliyoti",
        "Art-terapiya seanslari",
        "Progressiv mushaklarni bo'shashtirish",
        "Harakatli meditatsiya (tai chi)",
        "Ijodiy faoliyat ustaxonalari",
        "Guruhli psixologik mashg'ulotlar",
        "Tabiatda sayr va dam olish",
        "Sport va jismoniy faollik",
        "Ijtimoiy o'yinlar va muloqot"
      ],
      reading: [
        "Ruhiy salomatlik asoslari kitoblari",
        "Stressni boshqarish qo'llanmasi",
        "Emotsional intellekt rivojlantirish",
        "Pozitiv psixologiya asarlari",
        "Mindfulness amaliyoti darsligi",
        "Psixologik yordam metodikasi",
        "O'zini-o'zi rivojlantirish kitoblari",
        "Meditatsiya va yoga adabiyoti",
        "Bolalar psixologiyasi maqolalari",
        "Stress va uning oqibatlari tadqiqotlari"
      ],
      digital: [
        "Mobil ilova: Meditatsiya va mindfulness",
        "Online psixologik yordam platformasi",
        "Ruhiy salomatlik testi",
        "Relaksatsiya audio ilovasi",
        "Virtual psixolog konsultatsiyasi",
        "Emotsiyalarni kuzatish ilovasi",
        "Uyqu sifatini yaxshilash dasturi",
        "Nafas olish mashqlari ilovasi",
        "Stress darajasini o'lchash vositasi",
        "Onlayn qo'llab-quvvatlash guruhlari"
      ]
    }
  },
  {
    id: 10,
    title: "💻 Raqamli savodxonlik va axborot xavfsizligi",
    resources: {
      visual: [
        "Raqamli savodxonlik ko'nikmalari infografikasi",
        "Kiberxavfsizlik qoidalari posteri",
        "Axborot texnologiyalari tasnifi diagrammasi",
        "Internet xavfsizligi vizual qo'llanma",
        "Shaxsiy ma'lumotlarni himoya qilish sxemasi",
        "Raqamli fuqarolik modeli",
        "Online odob qoidalari jadvali",
        "Kiberbulling oldini olish yo'llari",
        "Raqamli oyoq izlari tushunchasi",
        "Axborot manbalarini baholash grafigi"
      ],
      audio: [
        "Raqamli savodxonlik audio kursi",
        "Kiberxavfsizlik audio ma'ruzalari",
        "Internet xavfsizligi audio qo'llanma",
        "IT mutaxassislari suhbatlari",
        "Axborot texnologiyalari podcast",
        "Onlayn xavfsizlik maslahat audio",
        "Raqamli fuqarolik audio darslari",
        "Kiberbulling haqida audio tahlil",
        "Shaxsiy ma'lumotlar himoyasi audio",
        "Texnologik tendentsiyalar audio sharh"
      ],
      kinesthetic: [
        "Kompyuter dasturlarini o'rganish amaliyoti",
        "Kiberxavfsizlik simulyatsiya o'yinlari",
        "Web-sayt yaratish loyihalari",
        "Dasturlash asoslarini o'rganish",
        "Raqamli loyihalar ishlab chiqish",
        "Internet qidiruv ko'nikmalari mashqi",
        "Multimedia taqdimotlar tayyorlash",
        "Onlayn hamkorlik amaliyoti",
        "Raqamli portfolio yaratish",
        "IT musobaqalar va hackathon"
      ],
      reading: [
        "Raqamli savodxonlik asoslari darsligi",
        "Kiberxavfsizlik qonunlari",
        "Internet xavfsizligi qo'llanmasi",
        "Axborot texnologiyalari kitobi",
        "Dasturlash asoslari adabiyoti",
        "Raqamli fuqarolik metodikasi",
        "Onlayn xavfsizlik maslahat kitoblari",
        "Shaxsiy ma'lumotlar himoyasi maqolalari",
        "Kiberbulling va uning oldini olish",
        "Raqamli iqtisodiyot asoslari"
      ],
      digital: [
        "Online raqamli savodxonlik kurslari",
        "Interaktiv kiberxavfsizlik o'yini",
        "Dasturlashni o'rganish platformasi",
        "Virtual IT laboratoriya",
        "Kiberxavfsizlik testlari",
        "Onlayn kodlash musobaqlari",
        "Raqamli portfolio platformasi",
        "IT bo'yicha vebinarlar",
        "Kiberbulling hisobot tizimi",
        "Parol boshqaruv ilovasi"
      ]
    }
  },
  {
    id: 11,
    title: "🎭 Ijodkorlik va innovatsion fikrlash",
    resources: {
      visual: [
        "Ijodiy fikrlash jarayoni infografikasi",
        "Innovatsiya turlari tasnifi",
        "Design thinking bosqichlari diagrammasi",
        "Ijodkorlikni rivojlantirish usullari",
        "Brainstorming texnikalari vizual qo'llanma",
        "Innovatsion loyihalar modeli",
        "Muammolarni ijodiy yechish sxemasi",
        "Ijodiy shaxs xususiyatlari jadvali",
        "Innovatsion ekotizim ko'rinishi",
        "SCAMPER texnikasi posteri"
      ],
      audio: [
        "Ijodkorlik asoslari audio kursi",
        "Innovatorlar suhbatlari podcast",
        "Ijodiy fikrlash audio mashqlari",
        "Design thinking audio qo'llanma",
        "Muvaffaqiyatli startaplar hikoyasi",
        "Ijodiy jarayon audio tahlili",
        "Innovatsiya boshqaruvi audio darslari",
        "Brainstorming seanslari audio",
        "Ijodiy muammolarni yechish audio",
        "Innovatsion texnologiyalar audio sharh"
      ],
      kinesthetic: [
        "Ijodiy ustaxonalar (workshops)",
        "Design thinking sessiyalari",
        "Brainstorming mashg'ulotlari",
        "Innovatsion loyihalar ishlab chiqish",
        "Prototiplar yaratish amaliyoti",
        "Ijodiy musobaqalar va hackathon",
        "Tasviriy san'at eksperimentlari",
        "Modellashtirish va konstruksiya",
        "Ijodiy o'yinlar va topishmoqlar",
        "Startup loyihalari taqdimoti"
      ],
      reading: [
        "Ijodkorlik psixologiyasi kitoblari",
        "Innovatsiya boshqaruvi darsligi",
        "Design thinking qo'llanmasi",
        "Ijodiy fikrlash metodikasi",
        "Muammolarni ijodiy yechish asoslari",
        "Innovatorlarning biografiyalari",
        "Tadbirkorlik va innovatsiya maqolalari",
        "TRIZ nazariyasi adabiyoti",
        "Lateral fikrlash kitobi",
        "Ijodiy yozuv texnikalari"
      ],
      digital: [
        "Online ijodkorlik kurslari",
        "Raqamli brainstorming vositalari",
        "Prototiplash dasturlari",
        "Innovatsion loyihalar platformasi",
        "Virtual ijodiy ustaxonalar",
        "Mind mapping ilovasi",
        "Dizayn va modellashtirish dasturlari",
        "Onlayn ijodiy musobaqalar",
        "Startup simulyatsiya o'yini",
        "Ijodiy portfolio platformasi"
      ]
    }
  },
  {
    id: 12,
    title: "👥 Liderlik va jamoa bilan ishlash ko'nikmalari",
    resources: {
      visual: [
        "Liderlik uslublari infografikasi",
        "Jamoaviy ishlash prinsiplari diagrammasi",
        "Lider xususiyatlari piramidasi",
        "Kommunikatsiya ko'nikmalari jadvali",
        "Jamoa rivojlanish bosqichlari sxemasi",
        "Liderlik kompetentsiyalari modeli",
        "Konfliktlarni hal qilish yo'llari",
        "Jamoa rollarini taqsimlash grafigi",
        "Emotsional liderlik ko'rinishi",
        "Motivatsiya usullari posteri"
      ],
      audio: [
        "Liderlik asoslari audio kursi",
        "Muvaffaqiyatli liderlar suhbatlari",
        "Jamoa bilan ishlash audio qo'llanma",
        "Kommunikatsiya ko'nikmalari podcast",
        "Konfliktlarni boshqarish audio darslari",
        "Motivatsiya va ilhom audio xabarlar",
        "Liderlik strategiyalari audio tahlil",
        "Jamoa shakllanishi audio seminar",
        "Delegatsiya qilish audio maslahat",
        "Emotsional liderlik audio kursi"
      ],
      kinesthetic: [
        "Liderlik o'yinlari va simulyatsiyalar",
        "Jamoa qurilish mashg'ulotlari (team building)",
        "Role-play: Liderlik stsenariylari",
        "Guruh loyihalari va taqdimotlar",
        "Konflikt hal qilish amaliyoti",
        "Kommunikatsiya mashqlari",
        "Muzokaralar olib borish tajribasi",
        "Jamoa strategiyasini ishlab chiqish",
        "Liderlik musobaqalari",
        "Mentorlik va kouching seanslari"
      ],
      reading: [
        "Liderlik nazariyasi darsligi",
        "Jamoa bilan ishlash metodikasi",
        "Emotsional intellekt va liderlik",
        "Kommunikatsiya ko'nikmalari kitoblari",
        "Konfliktologiya asoslari",
        "Liderlarning biografiyalari",
        "Jamoaviy psixologiya maqolalari",
        "Boshqaruv va liderlik adabiyoti",
        "Motivatsiya nazariyalari",
        "Kouching va mentorlik qo'llanmasi"
      ],
      digital: [
        "Online liderlik kurslari",
        "Virtual jamoa bilan ishlash platformasi",
        "Liderlik ko'nikmalari testi",
        "Jamoaviy loyihalar onlayn vositasi",
        "Video konferentsiya: Liderlik seminarlari",
        "Liderlik simulyatsiya o'yinlari",
        "Kommunikatsiya ko'nikmalari ilovasi",
        "Onlayn kouching platformasi",
        "Jamoa boshqaruvi dasturi",
        "E-learning: Liderlik rivojlanish"
      ]
    }
  },
  {
    id: 13,
    title: "📖 O'qish madaniyati va kritik fikrlash",
    resources: {
      visual: [
        "O'qish strategiyalari infografikasi",
        "Kritik fikrlash bosqichlari diagrammasi",
        "Kitobxonlik ko'nikmalari piramidasi",
        "Axborotni tahlil qilish usullari sxemasi",
        "O'qish turlari tasnifi jadvali",
        "Matnni tushunish darajalari modeli",
        "Muallif pozitsiyasini aniqlash yo'llari",
        "Argument va dalillarni baholash grafigi",
        "Bilim manbalarini saralash ko'rinishi",
        "Tafakkur xaritalari yaratish posteri"
      ],
      audio: [
        "O'qish texnikasi audio qo'llanma",
        "Adabiy asarlar audiobook",
        "Kritik fikrlash audio kursi",
        "Kitob muhokamasi podcast",
        "Matnni tahlil qilish audio darslari",
        "Mualliflar suhbatlari audio",
        "O'qish motivatsiyasi audio",
        "Argumentatsiya audio qo'llanma",
        "Mantiqiy fikrlash audio mashqlari",
        "Kitobxonlik klubi audio uchrashuvlari"
      ],
      kinesthetic: [
        "Kitoblar klubi mashg'ulotlari",
        "Adabiy asarlar bo'yicha munozaralar",
        "Ijodiy yozuv ustaxonalari",
        "Kitob taqdimotlari tayyorlash",
        "Dramatizatsiya: Adabiy personajlar",
        "Matnlar bo'yicha loyihalar",
        "Kritik tahlil amaliyoti",
        "Kitobxona tashrifi va tadqiqot",
        "O'qish marafon va musobaqalar",
        "Adabiy syujetlarni qayta yaratish"
      ],
      reading: [
        "Jahon adabiyoti asarlari",
        "O'zbek klassik adabiyoti",
        "Zamonaviy badiiy asarlar",
        "Kritik fikrlash metodikasi",
        "O'qish texnikalari qo'llanmasi",
        "Matnni tahlil qilish asoslari",
        "Adabiyotshunoslik darsligi",
        "Mantiq va argumentatsiya kitoblari",
        "Ilmiy-ommabop maqolalar",
        "Kitobxonlik madaniyati adabiyoti"
      ],
      digital: [
        "Elektron kutubxonalar",
        "Online kitob klublari",
        "Raqamli o'qish platformalari",
        "Audiobook ilovasi",
        "Kritik fikrlash testlari",
        "Adabiy viktorina onlayn",
        "E-kitoblar to'plami",
        "Virtual adabiy ekskursiya",
        "Onlayn yozuv ustaxonalari",
        "Kitoblarni tavsiya qiluvchi ilova"
      ]
    }
  }
];

// Independent Learning Topics (36 courses)
const independentTopics = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  title: i < 5 ? [
    "🎯 Innovatsion ta'lim texnologiyalari",
    "👨‍🏫 Zamonaviy dars metodikasi",
    "🧠 Bolalar psixologiyasi asoslari",
    "📊 Ta'lim natijalarini baholash",
    "💻 Raqamli ta'lim vositalari"
  ][i] : `📚 ${i + 1}-mavzu: Ta'lim-tarbiya asoslari`,
  resources: {
    visual: Array.from({ length: 5 }, (_, j) => `Vizual material ${j + 1}: Video dars, infografika, slayd taqdimot`),
    audio: Array.from({ length: 5 }, (_, j) => `Audio material ${j + 1}: Ma'ruza, podcast, audio kitob`),
    reading: Array.from({ length: 5 }, (_, j) => `Matn materiali ${j + 1}: Maqola, kitob bo'limi, tadqiqot`),
    tasks: Array.from({ length: 5 }, (_, j) => `Amaliy topshiriq ${j + 1}: Tahlil, loyiha, taqdimot`),
    tests: Array.from({ length: 5 }, (_, j) => `Test savoli ${j + 1}: Nazariy bilim, amaliy ko'nikma`)
  }
}));

export default function TeacherPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(1);

  // VARK test state
  const [varkAnswers, setVarkAnswers] = useState<string[]>(Array(16).fill(''));
  const [varkResults, setVarkResults] = useState<any>(null);

  // Practical lessons state
  const [currentTopic, setCurrentTopic] = useState<number | null>(null);
  const [activeModality, setActiveModality] = useState<string>('visual');
  const [selectedResources, setSelectedResources] = useState<{[key: string]: boolean[]}>({
    visual: [],
    audio: [],
    kinesthetic: [],
    reading: [],
    digital: []
  });

  // Independent learning state
  const [currentIndependent, setCurrentIndependent] = useState<number | null>(null);
  const [activeIndependentSection, setActiveIndependentSection] = useState<string>('visual');
  const [selectedIndependent, setSelectedIndependent] = useState<{[key: string]: boolean[]}>({
    visual: [],
    audio: [],
    reading: [],
    tasks: [],
    tests: []
  });
  const [courseProgress, setCourseProgress] = useState<{[key: number]: number}>({});

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/user');
      const data = await res.json();

      if (!data.user || data.user.role !== 'TEACHER') {
        router.push('/login');
        return;
      }

      setUser(data.user);
    } catch (error) {
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  const showSection = (num: number) => {
    setCurrentSection(num);
  };

  // VARK Test Functions
  const handleVarkAnswer = (questionIndex: number, type: string) => {
    const newAnswers = [...varkAnswers];
    newAnswers[questionIndex] = type;
    setVarkAnswers(newAnswers);
  };

  const calculateVark = () => {
    const counts = { V: 0, A: 0, R: 0, K: 0 };
    varkAnswers.forEach(answer => {
      if (answer) counts[answer as keyof typeof counts]++;
    });

    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    if (total === 0) return;

    const percentages = {
      visual: Math.round((counts.V / total) * 100),
      audial: Math.round((counts.A / total) * 100),
      reading: Math.round((counts.R / total) * 100),
      kinesthetic: Math.round((counts.K / total) * 100)
    };

    setVarkResults(percentages);

    setTimeout(() => {
      document.getElementById('vark-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Practical Lessons Functions
  const openPractical = (index: number) => {
    setCurrentTopic(index);
    setActiveModality('visual');
    setSelectedResources({
      visual: Array(10).fill(false),
      audio: Array(10).fill(false),
      kinesthetic: Array(10).fill(false),
      reading: Array(10).fill(false),
      digital: Array(10).fill(false)
    });
  };

  const toggleResource = (type: string, index: number) => {
    setSelectedResources(prev => {
      const newState = { ...prev };
      newState[type] = [...newState[type]];
      newState[type][index] = !newState[type][index];
      return newState;
    });
  };

  const getSelectedCount = () => {
    return Object.values(selectedResources).reduce((sum, arr) =>
      sum + arr.filter(Boolean).length, 0
    );
  };

  const downloadPracticalPlan = () => {
    if (currentTopic === null) return;

    const topic = practicalTopics[currentTopic];
    const selectedItems: string[] = [];

    Object.entries(selectedResources).forEach(([type, selections]) => {
      selections.forEach((selected, idx) => {
        if (selected) {
          const typeMap: {[key: string]: string} = {
            visual: '📺 Vizual',
            audio: '🎵 Audio',
            kinesthetic: '🤲 Kinestetik',
            reading: '✏️ O\'qish/Yozish',
            digital: '💻 Raqamli'
          };
          selectedItems.push(`${typeMap[type]}: ${topic.resources[type as keyof typeof topic.resources][idx]}`);
        }
      });
    });

    const content = `
╔════════════════════════════════════════════════════════════╗
║          4+1 FORMULA PLATFORMASI - DARS REJASI            ║
╚════════════════════════════════════════════════════════════╝

MAVZU: ${topic.title}

TANLANGAN MATERIALLAR (${selectedItems.length}):

${selectedItems.map((item, i) => `${i + 1}. ${item}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tayyorlandi: ${new Date().toLocaleDateString('uz-UZ')}
O'qituvchi: ${user?.name || 'Teacher'}

🎓 4+1 Formula Platformasi - Multimodal ta'lim metodikasi
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dars-reja-${currentTopic + 1}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearPracticalSelection = () => {
    setSelectedResources({
      visual: Array(10).fill(false),
      audio: Array(10).fill(false),
      kinesthetic: Array(10).fill(false),
      reading: Array(10).fill(false),
      digital: Array(10).fill(false)
    });
  };

  // Independent Learning Functions
  const openIndependent = (num: number) => {
    setCurrentIndependent(num);
    setActiveIndependentSection('visual');
    setSelectedIndependent({
      visual: Array(5).fill(false),
      audio: Array(5).fill(false),
      reading: Array(5).fill(false),
      tasks: Array(5).fill(false),
      tests: Array(5).fill(false)
    });
  };

  const toggleIndependentResource = (type: string, index: number) => {
    setSelectedIndependent(prev => {
      const newState = { ...prev };
      newState[type] = [...newState[type]];
      newState[type][index] = !newState[type][index];

      // Update progress
      if (currentIndependent !== null) {
        updateCourseProgress(newState);
      }

      return newState;
    });
  };

  const updateCourseProgress = (selections: typeof selectedIndependent) => {
    if (currentIndependent === null) return;

    const total = Object.values(selections).reduce((sum, arr) => sum + arr.length, 0);
    const completed = Object.values(selections).reduce((sum, arr) =>
      sum + arr.filter(Boolean).length, 0
    );
    const percentage = Math.round((completed / total) * 100);

    setCourseProgress(prev => ({
      ...prev,
      [currentIndependent]: percentage
    }));
  };

  const downloadIndependentPlan = () => {
    if (currentIndependent === null) return;

    const course = independentTopics[currentIndependent - 1];
    const selectedItems: string[] = [];

    Object.entries(selectedIndependent).forEach(([type, selections]) => {
      selections.forEach((selected, idx) => {
        if (selected) {
          const typeMap: {[key: string]: string} = {
            visual: '📺 Vizual (15 daq)',
            audio: '🎵 Audio (15 daq)',
            reading: '📖 Matn (30 daq)',
            tasks: '✏️ Topshiriqlar (20 daq)',
            tests: '📝 Test (10 daq)'
          };
          selectedItems.push(`${typeMap[type]}: ${course.resources[type as keyof typeof course.resources][idx]}`);
        }
      });
    });

    const progress = courseProgress[currentIndependent] || 0;

    const content = `
╔════════════════════════════════════════════════════════════╗
║      4+1 FORMULA PLATFORMASI - MUSTAQIL TA'LIM REJASI     ║
╚════════════════════════════════════════════════════════════╝

KURS: ${course.title}

TANLANGAN MATERIALLAR (${selectedItems.length}):

${selectedItems.map((item, i) => `${i + 1}. ${item}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KURS STATISTIKASI:
• Jami davomiyligi: 90 daqiqa
• O'zlashtirish mezoni: 70%
• Joriy natija: ${progress}%
• Holati: ${progress >= 80 ? '✅ Sertifikat olishga tayyor' : progress >= 70 ? '⚠️ O\'rtacha natija' : '❌ Qo\'shimcha ishlash talab etiladi'}

Tayyorlandi: ${new Date().toLocaleDateString('uz-UZ')}
O'qituvchi: ${user?.name || 'Teacher'}

🎓 4+1 Formula Platformasi - Multimodal ta'lim metodikasi
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mustaqil-talim-${currentIndependent}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadCertificate = (courseNum: number) => {
    const progress = courseProgress[courseNum] || 0;
    if (progress < 80) {
      alert('Sertifikat olish uchun kamida 80% ni o\'zlashtirishingiz kerak!');
      return;
    }

    const course = independentTopics[courseNum - 1];

    const content = `
╔════════════════════════════════════════════════════════════╗
║                       SERTIFIKAT                           ║
║            CERTIFICATE OF ACHIEVEMENT                      ║
╚════════════════════════════════════════════════════════════╝

Ushbu sertifikat quyidagi shaxsga beriladi:
This certificate is awarded to:

${user?.name || 'Teacher'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Kurs nomi / Course Title:
${course.title}

O'zlashtirish darajasi / Achievement Level: ${progress}%
Kurs davomiyligi / Course Duration: 90 daqiqa

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Berilgan sana / Issue Date: ${new Date().toLocaleDateString('uz-UZ')}

🎓 4+1 Formula Platformasi
Multimodal ta'lim metodikasi

Boshlang'ich ta'limda tarbiya - O'zbekiston Respublikasi
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sertifikat-${courseNum}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearIndependentSelection = () => {
    setSelectedIndependent({
      visual: Array(5).fill(false),
      audio: Array(5).fill(false),
      reading: Array(5).fill(false),
      tasks: Array(5).fill(false),
      tests: Array(5).fill(false)
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-900">
        <div className="text-white text-2xl">Yuklanmoqda...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>

      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-5xl font-bold text-white mb-4">🎓 4+1 Formula Platformasi</h1>
          <p className="text-xl text-white/90 mb-6">Boshlang'ich ta'limda tarbiya - Multimodal ta'lim metodikasi</p>
          <div className="flex justify-center items-center gap-4">
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white">
              Xush kelibsiz, {user?.name || 'O\'qituvchi'}!
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500/80 hover:bg-red-600 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              Chiqish
            </button>
          </div>
        </div>

        {/* Three Main Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div
            onClick={() => showSection(1)}
            className={`bg-white rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${currentSection === 1 ? 'shadow-2xl ring-4 ring-yellow-400' : 'shadow-lg hover:shadow-2xl'}`}
          >
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">VARK Test</h3>
            <p className="text-gray-600 text-center">O'rganish uslubingizni aniqlang</p>
          </div>

          <div
            onClick={() => showSection(2)}
            className={`bg-white rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${currentSection === 2 ? 'shadow-2xl ring-4 ring-yellow-400' : 'shadow-lg hover:shadow-2xl'}`}
          >
            <div className="text-6xl mb-4 text-center">👨‍🏫</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Amaliy Dars</h3>
            <p className="text-gray-600 text-center">13 ta mavzu</p>
          </div>

          <div
            onClick={() => showSection(3)}
            className={`bg-white rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${currentSection === 3 ? 'shadow-2xl ring-4 ring-yellow-400' : 'shadow-lg hover:shadow-2xl'}`}
          >
            <div className="text-6xl mb-4 text-center">📚</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Mustaqil Ta'lim</h3>
            <p className="text-gray-600 text-center">36 ta kurs</p>
          </div>
        </div>

        {/* VARK Test Section */}
        {currentSection === 1 && (
          <div className="bg-white rounded-2xl p-8 shadow-2xl fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🧠 VARK O'rganish Uslubi Testi</h2>

            <div className="space-y-6 mb-8">
              {questions.map((q, qIndex) => (
                <div key={qIndex} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{qIndex + 1}. {q.question}</h3>
                  <div className="space-y-2">
                    {q.options.map((option, oIndex) => (
                      <label key={oIndex} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name={`q${qIndex}`}
                          value={option.type}
                          checked={varkAnswers[qIndex] === option.type}
                          onChange={() => handleVarkAnswer(qIndex, option.type)}
                          className="w-5 h-5"
                        />
                        <span className="text-gray-700">{option.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={calculateVark}
                className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-12 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Natijani Hisoblash
              </button>
            </div>

            {varkResults && (
              <div id="vark-results" className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">📊 Sizning O'rganish Uslubingiz</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">📺</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">Vizual (Ko'rish)</h4>
                        <div className="bg-gray-200 rounded-full h-4 mt-2">
                          <div
                            className="bg-blue-500 h-4 rounded-full transition-all duration-1000"
                            style={{width: `${varkResults.visual}%`}}
                          ></div>
                        </div>
                        <p className="text-right mt-1 font-bold text-blue-600">{varkResults.visual}%</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">🎵</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">Audial (Eshitish)</h4>
                        <div className="bg-gray-200 rounded-full h-4 mt-2">
                          <div
                            className="bg-green-500 h-4 rounded-full transition-all duration-1000"
                            style={{width: `${varkResults.audial}%`}}
                          ></div>
                        </div>
                        <p className="text-right mt-1 font-bold text-green-600">{varkResults.audial}%</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">✏️</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">O'qish/Yozish</h4>
                        <div className="bg-gray-200 rounded-full h-4 mt-2">
                          <div
                            className="bg-yellow-500 h-4 rounded-full transition-all duration-1000"
                            style={{width: `${varkResults.reading}%`}}
                          ></div>
                        </div>
                        <p className="text-right mt-1 font-bold text-yellow-600">{varkResults.reading}%</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">🤲</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">Kinestetik (Amaliy)</h4>
                        <div className="bg-gray-200 rounded-full h-4 mt-2">
                          <div
                            className="bg-red-500 h-4 rounded-full transition-all duration-1000"
                            style={{width: `${varkResults.kinesthetic}%`}}
                          ></div>
                        </div>
                        <p className="text-right mt-1 font-bold text-red-600">{varkResults.kinesthetic}%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3">💡 Tavsiyalar:</h4>
                  <ul className="space-y-2 text-gray-700">
                    {varkResults.visual > 30 && <li>• Diagrammalar, grafiklar va vizual materiallardan foydalaning</li>}
                    {varkResults.audial > 30 && <li>• Audio darsliklar va muhokamalardan foydalaning</li>}
                    {varkResults.reading > 30 && <li>• Konspekt yozish va kitob o'qishni kuchaytiring</li>}
                    {varkResults.kinesthetic > 30 && <li>• Amaliy mashg'ulotlar va tajriba o'tkazishga e'tibor bering</li>}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Practical Lessons Section */}
        {currentSection === 2 && (
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">👨‍🏫 Amaliy Darslar (13 ta mavzu)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practicalTopics.map((topic, index) => (
                <div
                  key={topic.id}
                  onClick={() => openPractical(index)}
                  className="bg-white rounded-xl p-6 cursor-pointer hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-600">50 ta material (5 modallik)</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Independent Learning Section */}
        {currentSection === 3 && (
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">📚 Mustaqil Ta'lim (36 ta kurs)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {independentTopics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => openIndependent(topic.id)}
                  className="bg-white rounded-xl p-4 cursor-pointer hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <h3 className="text-sm font-bold text-gray-800 mb-2">{topic.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span>⏱️ 90 daq</span>
                    {courseProgress[topic.id] >= 80 && <span className="text-green-600">✅ Sertifikat</span>}
                  </div>
                  {courseProgress[topic.id] > 0 && (
                    <div className="mt-2">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all"
                          style={{width: `${courseProgress[topic.id]}%`}}
                        ></div>
                      </div>
                      <p className="text-xs text-right mt-1 text-gray-600">{courseProgress[topic.id]}%</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Practical Modal */}
      {currentTopic !== null && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setCurrentTopic(null)}>
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b p-6 z-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{practicalTopics[currentTopic].title}</h2>
                <button onClick={() => setCurrentTopic(null)} className="text-gray-500 hover:text-gray-700 text-3xl">&times;</button>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Tanlangan: {getSelectedCount()}/50</span>
                  <span>{Math.round((getSelectedCount() / 50) * 100)}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-purple-800 h-3 rounded-full transition-all"
                    style={{width: `${(getSelectedCount() / 50) * 100}%`}}
                  ></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveModality('visual')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeModality === 'visual' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  📺 Vizual
                </button>
                <button
                  onClick={() => setActiveModality('audio')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeModality === 'audio' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  🎵 Audio
                </button>
                <button
                  onClick={() => setActiveModality('kinesthetic')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeModality === 'kinesthetic' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  🤲 Kinestetik
                </button>
                <button
                  onClick={() => setActiveModality('reading')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeModality === 'reading' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  ✏️ O'qish/Yozish
                </button>
                <button
                  onClick={() => setActiveModality('digital')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeModality === 'digital' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  💻 Raqamli
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-2 mb-6">
                {practicalTopics[currentTopic].resources[activeModality as keyof typeof practicalTopics[0]['resources']].map((resource: string, idx: number) => (
                  <label key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedResources[activeModality][idx] || false}
                      onChange={() => toggleResource(activeModality, idx)}
                      className="w-5 h-5 mt-1"
                    />
                    <span className="text-gray-700 flex-1">{resource}</span>
                  </label>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={downloadPracticalPlan}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all"
                >
                  📥 Dars rejasini yuklash
                </button>
                <button
                  onClick={clearPracticalSelection}
                  className="px-6 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all"
                >
                  🗑️ Tozalash
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Independent Learning Modal */}
      {currentIndependent !== null && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setCurrentIndependent(null)}>
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b p-6 z-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{independentTopics[currentIndependent - 1].title}</h2>
                <button onClick={() => setCurrentIndependent(null)} className="text-gray-500 hover:text-gray-700 text-3xl">&times;</button>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>O'zlashtirildi: {courseProgress[currentIndependent] || 0}%</span>
                  <span>⏱️ Jami: 90 daqiqa</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-600 to-green-800 h-3 rounded-full transition-all"
                    style={{width: `${courseProgress[currentIndependent] || 0}%`}}
                  ></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveIndependentSection('visual')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeIndependentSection === 'visual' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  📺 Vizual (15 daq)
                </button>
                <button
                  onClick={() => setActiveIndependentSection('audio')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeIndependentSection === 'audio' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  🎵 Audio (15 daq)
                </button>
                <button
                  onClick={() => setActiveIndependentSection('reading')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeIndependentSection === 'reading' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  📖 Matn (30 daq)
                </button>
                <button
                  onClick={() => setActiveIndependentSection('tasks')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeIndependentSection === 'tasks' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  ✏️ Topshiriqlar (20 daq)
                </button>
                <button
                  onClick={() => setActiveIndependentSection('tests')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeIndependentSection === 'tests' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  📝 Test (10 daq)
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-2 mb-6">
                {independentTopics[currentIndependent - 1].resources[activeIndependentSection as keyof typeof independentTopics[0]['resources']].map((resource: string, idx: number) => (
                  <label key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedIndependent[activeIndependentSection][idx] || false}
                      onChange={() => toggleIndependentResource(activeIndependentSection, idx)}
                      className="w-5 h-5 mt-1"
                    />
                    <span className="text-gray-700 flex-1">{resource}</span>
                  </label>
                ))}
              </div>

              {(courseProgress[currentIndependent] || 0) >= 80 && (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">🎉</span>
                    <div>
                      <h4 className="font-bold text-green-800">Tabriklaymiz!</h4>
                      <p className="text-green-700">Siz kursni muvaffaqiyatli tamomladingiz!</p>
                    </div>
                  </div>
                  <button
                    onClick={() => downloadCertificate(currentIndependent)}
                    className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all"
                  >
                    🏆 Sertifikatni yuklash
                  </button>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={downloadIndependentPlan}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all"
                >
                  📥 Kurs rejasini yuklash
                </button>
                <button
                  onClick={clearIndependentSelection}
                  className="px-6 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all"
                >
                  🗑️ Tozalash
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

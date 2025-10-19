/**
 * LECTURES DATA - Comprehensive structure derived from "Maruza Super" content
 * This file contains all 13 lectures with detailed sections and content blocks
 * Each lecture follows the 4+1 Formula: Visual, Audio, Kinesthetic, Reading/Writing, and Technology (+1)
 */

export const lecturesData = [
  // MA'RUZA 1: Fanning umumiy mazmuni va tuzilmasi
  {
    id: 'maruza-1-fanning-umumiy-mazmuni',
    title: "MA'RUZA 1: Fanning umumiy mazmuni va tuzilmasi",
    duration: "90 daqiqa",
    subject: "Boshlang'ich ta'limda tarbiya",
    objective: "Talabalarni fanlar va ularning o'zaro bog'liqligi to'g'risida xabardor etish, ijodiy fikrlash qobiliyatlarini rivojlantirish hamda akademik ko'nikmalarni kuchaytirishga qaratilgan.",
    tasks: [
      "Fanlarning asosiy tushunchalarini tushunish",
      "Turli fanlar orasidagi o'zaro bog'liqlikni tahlil qilish",
      "Ijodiy va tanqidiy fikrlash ko'nikmalarini rivojlantirish",
      "Multimodal o'qitish yondashuvlarini qo'llash"
    ],
    sections: [
      {
        sectionTitle: "1. VIZUAL taqdimot",
        duration: "10 daqiqa",
        componentType: 'visual',
        contentBlocks: [
          {
            type: 'slide_presentation',
            heading: "Slayd-prezentatsiya:",
            description: "PowerPoint yoki Google Slides orqali vizual taqdimot",
            details: [
              "Matnli slaydlar: Fan nomi, asosiy mavzular ro'yxati",
              "Rangli infografikalar: Fanlar orasidagi bog'liqlik ko'rsatuvchi diagrammalar",
              "Murakkab diagrammalar: Konsepsiyalarni tushunish uchun vizual tushuntirishlar"
            ]
          },
          {
            type: 'visual_materials',
            heading: "Vizual materiallar:",
            description: "Qo'shimcha ko'rgazmali vositalar",
            details: [
              "Posterlar: Asosiy mavzu yoki konsepsiyani ko'rsatuvchi katta ko'rgazmali posterlar",
              "Video kliplar: Fan bilan bog'liq qisqa video materiallar (masalan, YouTube, ilmiy kanallar)",
              "Tasvirlar va jadvallar: Matnni yorituvchi o'quv materiallari"
            ]
          },
          {
            type: 'interactive_board',
            heading: "Interaktiv doska:",
            description: "Zamonaviy texnologiya yordamida o'qitish",
            details: [
              "Darsda talabalar bilan interaktiv ishlash (ular o'zlari doska yuzasida yozish, chizish imkoniyatiga ega)",
              "Slaydlarni real vaqtda o'zgartirish va qo'shimcha izohlar qo'shish"
            ]
          },
          {
            type: 'concept_mapping',
            heading: "Konsepsiya xaritasi:",
            description: "Fan bo'limlari orasidagi munosabatlarni ko'rsatish",
            details: [
              "Fanlarning turli bo'limlari orasidagi bog'lanishlarni aks ettiruvchi vizual xarita",
              "Talabalar uchun murakkab ma'lumotlarni strukturalash imkoniyati"
            ]
          }
        ]
      },
      {
        sectionTitle: "2. AUDIO materiallar",
        duration: "15 daqiqa",
        componentType: 'audio',
        contentBlocks: [
          {
            type: 'audio_lecture',
            heading: "Audio ma'ruza:",
            description: "Ovozli ma'ruzalar va tushuntirishlar",
            details: [
              "O'qituvchi tomonidan maxsus tayyorlangan audio materiallar (masalan, podcast format)",
              "Fanlar haqida umumiy ma'lumot, tarix va hozirgi holat haqida tushuntirishlar",
              "Audio format orqali ijtimoiy, madaniy yoki ilmiy kontekstlarni chuqur tushuntirish"
            ]
          },
          {
            type: 'interviews_discussions',
            heading: "Intervyu va munozaralar:",
            description: "Mutaxassislar bilan suhbatlar",
            details: [
              "Fan bo'yicha mutaxassislar yoki amaliyotchilar bilan audio intervyular",
              "Mavzu bo'yicha ekspertlarning fikrlari, tajribalari va maslahatlari",
              "Audio format orqali turli nuqtai nazarlarni taqdim etish"
            ]
          },
          {
            type: 'music_sounds',
            heading: "Musiqa va tovushlar:",
            description: "Emotsional va pedagogik ta'sir",
            details: [
              "Fan yoki mavzu bilan bog'liq fon musiqasi (masalan, ilmiy kashfiyotlar tarixi bo'yicha sahnalashtirilgan musiqa)",
              "Tovushli effektlar: Tabiiy tovushlar, laboratoriya tovushlari yoki tarixiy voqealar tovushlari",
              "Musiqa orqali talabalarning diqqatini jalb qilish va muhitni jonlantirish"
            ]
          },
          {
            type: 'audio_books',
            heading: "Audio kitoblar:",
            description: "Adabiyotlarni eshitish orqali o'rganish",
            details: [
              "Fan bo'yicha taniqli mualliflarning asarlarini audio formatda tinglash",
              "Ilmiy yoki badiiy adabiyotlardan ko'chirma qismlar",
              "Audio kitoblar orqali talabalarning mustaqil o'qish va eshitish malakalarini rivojlantirish"
            ]
          }
        ]
      },
      {
        sectionTitle: "3. KINESTETIK faoliyat",
        duration: "20 daqiqa",
        componentType: 'kinesthetic',
        contentBlocks: [
          {
            type: 'hands_on_activities',
            heading: "Amaliy mashqlar:",
            description: "Jismoniy faoliyat orqali o'rganish",
            details: [
              "Talabalar qo'l bilan ishlash orqali o'rganadilar (masalan, laboratoriya tajribalari, prototip yasash)",
              "Fizik modellar yasash: Fanlar konsepsiyalarini ko'rsatuvchi 3D modellar yoki strukturalar qurish",
              "Tajribalar o'tkazish: Ilmiy tajribalar yoki amaliy mashqlar"
            ]
          },
          {
            type: 'role_playing',
            heading: "Rol o'ynash:",
            description: "Vaziyatlarni jonlantirish",
            details: [
              "Talabalar turli rollarni o'ynash orqali fanlarni chuqurroq tushunishadi",
              "Masalan, tarixiy voqealarni yoki ilmiy kashfiyotlarni sahnalashtirish",
              "Drama va teatr elementlari orqali o'rganish"
            ]
          },
          {
            type: 'group_activities',
            heading: "Guruh ishlari:",
            description: "Hamkorlikda o'rganish",
            details: [
              "Kichik guruhlarda loyihalar ustida ishlash",
              "Jamoaviy muammolarni hal qilish",
              "Hamkorlik ko'nikmalarini rivojlantirish"
            ]
          },
          {
            type: 'physical_movement',
            heading: "Jismoniy harakatlar:",
            description: "Harakat orqali o'rganish",
            details: [
              "O'yinlar va sport faoliyatlari orqali fanlar konsepsiyalarini o'rgatish",
              "Masalan, matematik tushunchalarni harakatlar orqali namoyish etish",
              "Energetik mashqlar: Talabalarni faollashtiradigan qisqa jismoniy mashqlar"
            ]
          }
        ]
      },
      {
        sectionTitle: "4. O'QISH/YOZISH",
        duration: "25 daqiqa",
        componentType: 'reading',
        contentBlocks: [
          {
            type: 'textbooks_articles',
            heading: "Darsliklar va maqolalar:",
            description: "Matnga asoslangan o'rganish",
            details: [
              "Asosiy darsliklardan kerakli bo'limlarni o'qish",
              "Qo'shimcha maqolalar: Ilmiy jurnallar, onlayn platformalar (masalan, Google Scholar, ResearchGate)",
              "Taniqli mualliflarning asarlari: Fan bo'yicha klassik yoki zamonaviy asarlar"
            ]
          },
          {
            type: 'note_taking',
            heading: "Konspekt yozish:",
            description: "Yozma fikrlash ko'nikmalari",
            details: [
              "Talabalar ma'ruza yoki o'qish jarayonida asosiy fikrlarni yozib olishadi",
              "Cornell usuli, Mind mapping yoki Outline usullaridan foydalanish",
              "Konspekt yozish orqali mantiqiy fikrlash va tizimlashtirish malakalarini rivojlantirish"
            ]
          },
          {
            type: 'essays_reports',
            heading: "Insholar va hisobotlar:",
            description: "Yozma ish ko'nikmalarini rivojlantirish",
            details: [
              "Talabalar mavzu bo'yicha qisqa insholar yoki keng qamrovli hisobotlar yozishadi",
              "Akademik yozish malakalarini rivojlantirish",
              "Tadqiqot metodologiyasi va manbalar bilan ishlash ko'nikmalarini kuchaytirish"
            ]
          },
          {
            type: 'creative_writing',
            heading: "Ijodiy yozish:",
            description: "Badiiy yondashuvlar",
            details: [
              "She'r, hikoya yoki dramatik matnlar yozish orqali fan mavzularini ifodalash",
              "Ijodiy fikrlash va tasavvurni rivojlantirish",
              "Fanlarni badiiy adabiyot bilan bog'lash"
            ]
          }
        ]
      },
      {
        sectionTitle: "5. TEXNOLOGIYA (+1)",
        duration: "20 daqiqa",
        componentType: 'digital',
        contentBlocks: [
          {
            type: 'online_platforms',
            heading: "Onlayn platformalar:",
            description: "Raqamli ta'lim vositalari",
            details: [
              "Google Classroom, Moodle, Canvas kabi LMS (Learning Management Systems)",
              "Video konferensiya vositalari: Zoom, Microsoft Teams, Google Meet",
              "Onlayn kurslar: Coursera, edX, Khan Academy kabi platformalardan foydalanish"
            ]
          },
          {
            type: 'educational_apps',
            heading: "Ta'limiy ilovalar:",
            description: "Mobil va veb ilovalar",
            details: [
              "Quizlet: Flashcardlar va o'yinlar orqali o'rganish",
              "Kahoot!: Interaktiv viktorinalar va o'yinlar",
              "Nearpod: Interaktiv darslar yaratish va o'tkazish",
              "Padlet: Virtual devorlar va hamkorlik platformasi"
            ]
          },
          {
            type: 'multimedia_tools',
            heading: "Multimedia vositalari:",
            description: "Yaratuvchilik va taqdimot vositalari",
            details: [
              "Canva: Dizayn va grafik yaratish",
              "Prezi: Dinamik taqdimotlar",
              "Adobe Spark: Video, veb-sahifalar va grafik dizayn",
              "Animoto: Video montaj va yaratish"
            ]
          },
          {
            type: 'simulations_vr',
            heading: "Simulyatsiya va VR:",
            description: "Immersiv o'rganish tajribasi",
            details: [
              "Virtual laboratoriyalar: PhET, Labster kabi platformalar",
              "Virtual Reality (VR): Google Expeditions orqali virtual sayohatlar",
              "Augmented Reality (AR): Quiver, Merge Cube kabi AR ilovalar",
              "3D simulyatsiyalar: Murakkab konsepsiyalarni vizualizatsiya qilish"
            ]
          },
          {
            type: 'research_tools',
            heading: "Tadqiqot vositalari:",
            description: "Ilmiy izlanish va ma'lumot qidirish",
            details: [
              "Google Scholar: Ilmiy maqolalar va tadqiqotlar",
              "ResearchGate: Akademik tarmoq va resurslar",
              "Mendeley/Zotero: Bibliografiya boshqaruvi",
              "Online kutubxonalar: JSTOR, ScienceDirect"
            ]
          }
        ]
      }
    ],
    summary: "Ushbu ma'ruzada talabalar fanlarning umumiy mazmuni va tuzilmasi haqida keng qamrovli ma'lumot oldilar. Multimodal yondashuv - vizual, audio, kinestetik, o'qish/yozish va texnologiya komponentlari orqali o'rganish samaradorligini oshirish, turli o'rganish uslublariga ega talabalarning ehtiyojlarini qondirish va zamonaviy ta'lim talablariga javob berish ta'minlandi.",
    keyTakeaways: [
      "Fanlarning ko'p qirrali tuzilmasi va ularning o'zaro bog'liqligi",
      "Multimodal o'qitish yondashuvining afzalliklari",
      "Zamonaviy texnologiyalarni ta'limga samarali integratsiya qilish",
      "Talabalarning turli o'rganish uslublarini hisobga olish"
    ],
    culturalContext: "O'zbekiston ta'lim tizimi kontekstida milliy qadriyatlar va zamonaviy pedagogik yondashuvlarni uyg'unlashtirish",
    recommendedComponents: ['visual', 'audio', 'kinesthetic', 'reading', 'digital'],
    assessmentStrategy: "Multimodal baholash: yozma testlar, amaliy loyihalar, taqdimotlar va portfolio"
  },

  // MA'RUZA 2: Tarbiya ijtimoiy-tarixiy zarurat
  {
    id: 'maruza-2-tarbiya-ijtimoiy-tarixiy',
    title: "MA'RUZA 2: Tarbiya ijtimoiy-tarixiy zarurat, Milliy tarbiya konsepsiyasi",
    duration: "90 daqiqa",
    subject: "Boshlang'ich ta'limda tarbiya",
    objective: "Talabalarni tarbiyaning ijtimoiy-tarixiy zaruriyati va O'zbekiston Respublikasida milliy tarbiya konsepsiyasi bilan tanishtirishga, bu konsepsiyaning ahamiyatini tushunishga va amaliyotda qo'llash ko'nikmalarini rivojlantirishga qaratilgan.",
    tasks: [
      "Tarbiyaning ijtimoiy-tarixiy zaruriyatini anglash",
      "Milliy tarbiya konsepsiyasining mohiyatini tushunish",
      "O'zbekiston kontekstida milliy qadriyatlarni o'rganish",
      "Tarbiya jarayonida milliy an'analarni qo'llash usullarini o'zlashtirish"
    ],
    sections: [
      {
        sectionTitle: "1. VIZUAL taqdimot",
        duration: "10 daqiqa",
        componentType: 'visual',
        contentBlocks: [
          {
            type: 'slide_presentation',
            heading: "Slayd-prezentatsiya:",
            description: "Tarbiyaning tarixiy rivojlanishi va milliy konsepsiya",
            details: [
              "Tarixiy timeline: Tarbiyaning O'zbekiston va jahon miqyosida tarixiy evolyutsiyasi",
              "Milliy tarbiya konsepsiyasi: Asosiy tamoyillar, maqsad va vazifalar",
              "Infografikalar: Milliy qadriyatlar, ramzlar va ularning tarbiyaviy ahamiyati",
              "Vizual modellar: Tarbiya tizimining strukturasi va komponentlari"
            ]
          },
          {
            type: 'visual_materials',
            heading: "Vizual materiallar:",
            description: "Milliy ramzlar va madaniy meros",
            details: [
              "Posterlar: O'zbekiston davlat ramzlari (bayroq, gerb, madhiya)",
              "Foto galereyasi: Milliy yodgorliklar, tarixiy joylar (Registon, Shohizinda, Ichan-qal'a)",
              "Video kliplar: Milliy bayramlar, madaniy tadbirlar va an'analar",
              "Tasvirlar: Milliy liboslar, hunarmandchilik namunalari, me'morchilik yodgorliklari"
            ]
          },
          {
            type: 'interactive_board',
            heading: "Interaktiv doska:",
            description: "Hamkorlikda konsepsiya xaritasi yaratish",
            details: [
              "Talabalar bilan birgalikda milliy tarbiya konsepsiyasining asosiy komponentlarini vizual tarzda joylash",
              "Real vaqtda fikrlar almashinuvi va konsepsiya xaritasini to'ldirish",
              "Interaktiv savollar va javoblar orqali talabalarni faol ishtirok ettirishga yo'naltirish"
            ]
          },
          {
            type: 'concept_mapping',
            heading: "Konsepsiya xaritasi:",
            description: "Milliy tarbiyaning ko'p qirrali tuzilmasi",
            details: [
              "Milliy qadriyatlar ierarxiyasi: Oila, jamoa, vatan, insoniyat",
              "Tarbiya yo'nalishlari: Milliy, vatanparvarlik, axloqiy, estetik, jismoniy, mehnat tarbiyasi",
              "O'zaro bog'liqliklar: Tarbiya komponentlari orasidagi aloqalarni ko'rsatish"
            ]
          }
        ]
      },
      {
        sectionTitle: "2. AUDIO materiallar",
        duration: "15 daqiqa",
        componentType: 'audio',
        contentBlocks: [
          {
            type: 'audio_lecture',
            heading: "Audio ma'ruza:",
            description: "Tarbiyaning ijtimoiy-tarixiy asoslari",
            details: [
              "O'qituvchi tomonidan tayyorlangan audio taqdimot",
              "Tarbiyaning jamiyatdagi o'rni va ahamiyatini tushuntirish",
              "Tarixiy kontekst: Qadimiy O'zbekiston allomalarining tarbiya haqidagi qarashlari (Abu Ali ibn Sino, Abu Rayhon Beruniy, Alisher Navoiy)",
              "Zamonaviy davr: Milliy tarbiya konsepsiyasining shakllansih jarayoni"
            ]
          },
          {
            type: 'interviews_discussions',
            heading: "Intervyu va munozaralar:",
            description: "Ekspertlar fikrlari",
            details: [
              "Pedagogika mutaxassislari bilan audio intervyular",
              "Tajribali o'qituvchilarning milliy tarbiya bo'yicha fikrlari",
              "Talabalar bilan panel munozara (podcast format): 'Milliy tarbiyaning bugungi kunda ahamiyati'",
              "Ota-onalar va jamoatchilik vakillarining tarbiya jarayonidagi roli haqida audio fikr-mulohazalar"
            ]
          },
          {
            type: 'music_sounds',
            heading: "Milliy musiqa va madhiyalar:",
            description: "Audio-madaniy tajriba",
            details: [
              "O'zbekiston Respublikasi Davlat madhiyasi: tahlil va ma'no tushuntirish",
              "Milliy qo'shiqlar va kuylar: 'O'zbegim', 'Yurt yuragi', xalq ashulalari",
              "Fon musiqasi: Milliy cholg'u asboblari (doira, tanbur, rubob, g'ijjak) ovozlari",
              "Audio hikoyalar: Milliy qahramonlar va tarixiy shaxslar haqida badiiy hikoyalar"
            ]
          },
          {
            type: 'audio_books',
            heading: "Audio kitoblar:",
            description: "Adabiyotni eshitish orqali o'rganish",
            details: [
              "Abdulla Avloniy 'Turkiy guliston yoxud axloq': audio format",
              "Navoiy 'Xamsa' asarlaridan parcha lar",
              "G'afur G'ulom, Oybek asarlaridan milliy qadriyatlarga oid qismlar",
              "Zamonaviy pedagogik adabiyotlardan audio ko'chirma lar"
            ]
          }
        ]
      },
      {
        sectionTitle: "3. KINESTETIK faoliyat",
        duration: "20 daqiqa",
        componentType: 'kinesthetic',
        contentBlocks: [
          {
            type: 'hands_on_activities',
            heading: "Amaliy mashqlar:",
            description: "Milliy hunarmandchilik va san'at",
            details: [
              "Milliy ornamentlar chizish: Islimiy, girix naqshlarini amaliy bajarish",
              "Qo'g'irchoq teatri: Milliy qahramonlar yoki xalq ertaklari asosida",
              "Kulolchilik/to'quv namunalari yaratish: Sodda hunarmandchilik texnikalarini sinab ko'rish",
              "Milliy kiyimlarni bezash: Rasmiy yoki maket kiyimlarni milliy naqshlar bilan to'ldirish"
            ]
          },
          {
            type: 'role_playing',
            heading: "Rol o'ynash va sahnalashtirish:",
            description: "Tarixiy voqealar va milliy qadriyatlar",
            details: [
              "Tarixiy voqealarni sahnalashtirish: Amir Temur davri, Ulug'bek rasadxonasi",
              "Milliy bayram sahnalari: Navroz, Mustaqillik kuni nishonlashlari",
              "Oilaviy vaziyatlar: O'zbek oilasida hurmat, mehribonlik, katta-kichiklikni rol o'yini orqali namoyish etish",
              "Mahalla hayoti: Mahalla faoliyatini jonli ravishda ko'rsatish"
            ]
          },
          {
            type: 'group_activities',
            heading: "Guruh loyihalari:",
            description: "Jamoaviy ishlar va hamkorlik",
            details: [
              "Miniatura loyiha: Guruh bo'lib milliy mavzudagi miniatura rasm yaratish",
              "Hashar tashkil qilish: Jamoaviy ish va hamkorlik ko'nikmalarini amaliy rivojlantirish",
              "Kollaj yaratish: Milliy ramzlar, yodgorliklar, hunarmandchilik tasvirlaridan katta kollaj",
              "Flash mob: Milliy bayramlar yoki milliy g'oya mavzusida ijodiy flash mob tayyorlash"
            ]
          },
          {
            type: 'physical_movement',
            heading: "Milliy o'yinlar va raqslar:",
            description: "Harakat orqali madaniyatni his qilish",
            details: [
              "Milliy o'yinlar: Toguz korgol, uloq, chopur, boychilik",
              "Milliy raqslar: Lazgi, Fergana polka, andijon raqsi elementlari",
              "Ommaviy mashqlar: Milliy musiqa ostida fizik faollik",
              "Koordinatsiya o'yinlari: Jamoa hamkorligi va harakat uyg'unligini rivojlantirish"
            ]
          }
        ]
      },
      {
        sectionTitle: "4. O'QISH/YOZISH",
        duration: "25 daqiqa",
        componentType: 'reading',
        contentBlocks: [
          {
            type: 'textbooks_articles',
            heading: "Darsliklar va hujjatlar:",
            description: "Rasmiy va akademik adabiyotlar",
            details: [
              "O'zbekiston Respublikasi 'Milliy tarbiya konsepsiyasi' hujjati",
              "Pedagogika darsliklari: Tarbiya nazariyasi bo'limlari",
              "Ilmiy maqolalar: Milliy tarbiya, tarbiyaning ijtimoiy-tarixiy asoslari mavzusida",
              "Qonunchilik hujjatlari: Ta'lim to'g'risidagi qonun, Kadrlar tayyorlash milliy dasturi"
            ]
          },
          {
            type: 'note_taking',
            heading: "Konspekt yozish:",
            description: "Strukturalashgan yozma ishlar",
            details: [
              "Asosiy tushunchalarni belgilash: tarbiya, milliy tarbiya, ijtimoiy-tarixiy zarurat",
              "Cornell usuli: Savollar, asosiy fikrlar va xulosa yozish",
              "Mind map yaratish: Milliy tarbiya konsepsiyasining asosiy komponentlarini vizual strukturalash",
              "Refleksiya yozish: 'Men bu mavzu haqida nima o'rgandim?' degan savol asosida shaxsiy fikrlar"
            ]
          },
          {
            type: 'essays_reports',
            heading: "Insholar va hisobotlar:",
            description: "Akademik yozish ko'nikmalari",
            details: [
              "Qisqa insho: 'Milliy tarbiyaning zamonaviy talabalar uchun ahamiyati' (500-800 so'z)",
              "Tadqiqot hisoboti: Milliy tarbiya konsepsiyasining tarixiy tahlili (1500-2000 so'z)",
              "Taqqoslash inshosi: O'zbekiston va boshqa mamlakatlar tarbiya tizimlari",
              "Akademik formatda yozish: Manba ko'rsatish, bibliografiya, strukturalash"
            ]
          },
          {
            type: 'creative_writing',
            heading: "Ijodiy yozish:",
            description: "Badiiy va ijodiy matnlar",
            details: [
              "She'r yozish: Vatan, millat, ona-bobolar mavzusida",
              "Hikoya yaratish: Milliy qahramon yoki tarixiy shaxs haqida badiiy hikoya",
              "Kundalik yozish: 'Mening milliy tarbiyam' degan sarlavha ostida shaxsiy kundalik",
              "Maktublar: Kelajak avlodga maktub yoki tarixiy shaxsiyatga murojaatnoma"
            ]
          }
        ]
      },
      {
        sectionTitle: "5. TEXNOLOGIYA (+1)",
        duration: "20 daqiqa",
        componentType: 'digital',
        contentBlocks: [
          {
            type: 'online_platforms',
            heading: "Onlayn ta'lim platformalari:",
            description: "Raqamli ta'lim resurslari",
            details: [
              "eduportal.uz: O'zbekiston ta'lim resurslari portali",
              "ziyo.uz: Elektron darsliklar va ta'limiy materiallar",
              "Google Classroom: Talabalar va o'qituvchilar uchun virtualь sinf",
              "Telegram kanallar: Milliy tarbiya, pedagogika mavzusidagi kanal va guruhlar"
            ]
          },
          {
            type: 'educational_apps',
            heading: "Ta'limiy ilovalar:",
            description: "Mobil va veb ilovalar",
            details: [
              "Quizlet: Milliy tarbiya atamalarini o'rganish uchun flashcardlar",
              "Kahoot!: Interaktiv viktorina - 'Milliy tarbiya konsepsiyasi savollari'",
              "Padlet: Virtual devor - talabalar o'z fikrlarini milliy tarbiya haqida ulashishadi",
              "Mentimeter: Real vaqtda so'rovnomalar va fikr-mulohazalar yig'ish"
            ]
          },
          {
            type: 'multimedia_tools',
            heading: "Multimedia yaratish:",
            description: "Ijodiy raqamli loyihalar",
            details: [
              "Canva: Milliy tarbiya haqida infografika, poster yoki taqdimot yaratish",
              "Animoto/Filmora: Milliy qadriyatlar mavzusida qisqa video rolik yaratish",
              "Adobe Spark: Milliy ramzlar, yodgorliklar haqida veb-sahifa yoki vizual hikoya",
              "Prezi: Dinamik taqdimot - 'Milliy tarbiyaning tarixiy rivojlanishi'"
            ]
          },
          {
            type: 'simulations_vr',
            heading: "Virtual sayohatlar va AR:",
            description: "Immersiv madaniy tajriba",
            details: [
              "Google Arts & Culture: O'zbekiston muzeylari va yodgorliklari virtual turi",
              "360° video: Registon maydoni, Shohizinda majmuasi virtual sayohati",
              "AR ilovalar: Milliy liboslar yoki yodgorliklarni augmented reality orqali ko'rish",
              "Virtual muzelylar: Samarqand, Buxoro, Xiva tarixiy joylari virtual sayohati"
            ]
          },
          {
            type: 'research_tools',
            heading: "Tadqiqot va ma'lumot resurslari:",
            description: "Ilmiy izlanish vositalari",
            details: [
              "e-library.uz: O'zbekiston elektron kutubxonasi",
              "Google Scholar: Milliy tarbiya va pedagogika bo'yicha ilmiy maqolalar",
              "ziyonet.uz: O'zbek ziyolilari va muttafakkirlari haqida ma'lumotlar",
              "YouTube: 'Milliy tarbiya', 'O'zbekiston tarixi' kabi ta'limiy kanallar"
            ]
          }
        ]
      }
    ],
    summary: "Ushbu ma'ruzada talabalar tarbiyaning ijtimoiy-tarixiy zaruriyatini va O'zbekiston Respublikasi Milliy tarbiya konsepsiyasini to'liq o'rgandilar. Multimodal yondashuv - vizual, audio, kinestetik, o'qish/yozish va texnologiya orqali milliy qadriyatlar, ramzlar va an'analarni chuqur tushunish ta'minlandi.",
    keyTakeaways: [
      "Tarbiya jamiyatning tarixiy va ijtimoiy ehtiyojlaridan kelib chiqqan zaruriyat",
      "Milliy tarbiya konsepsiyasi O'zbekiston yoshlarini kamol topgan insonlar qilib tarbiyalash maqsadini ko'zlaydi",
      "Milliy qadriyatlar, ramzlar va an'analar tarbiya jarayonining asosini tashkil qiladi",
      "Multimodal yondashuv milliy tarbiyani samarali amalga oshirishda muhim rol o'ynaydi"
    ],
    culturalContext: "O'zbekiston milliy tarbiyasi boy tarixiy meros va zamonaviy pedagogik yondashuvlar sintezi sifatida",
    recommendedComponents: ['visual', 'audio', 'kinesthetic', 'reading', 'digital'],
    assessmentStrategy: "Ko'p qirrali baholash: yozma testlar, ijodiy loyihalar, multimodal taqdimotlar, shaxsiy refleksiya hisobotlari"
  },

  // MA'RUZA 3: Oila, mahalla va ta'lim muassasasi integratsiyasi
  {
    id: 'maruza-3-oila-mahalla-talim',
    title: "MA'RUZA 3: Oila, mahalla va ta'lim muassasasi integratsiyasi",
    duration: "90 daqiqa",
    subject: "Boshlang'ich ta'limda tarbiya",
    objective: "Talabalarni oila, mahalla va ta'lim muassasasining o'zaro bog'liqligi, ularning bolalar tarbiyasidagi birgalikdagi roli va samarali hamkorlik mexanizmlari bilan tanishtirishga qaratilgan.",
    tasks: [
      "Oila, mahalla va maktabning tarbiyaviy potentsialini anglash",
      "Uch institut o'rtasidagi o'zaro ta'sir mexanizmlarini tushunish",
      "Samarali hamkorlik strategiyalarini o'rganish",
      "Amaliy integratsiya loyihalarini ishlab chiqish ko'nikmalarini rivojlantirish"
    ],
    sections: [
      {
        sectionTitle: "1. VIZUAL taqdimot",
        duration: "10 daqiqa",
        componentType: 'visual',
        contentBlocks: [
          {
            type: 'slide_presentation',
            heading: "Slayd-prezentatsiya:",
            description: "Uch tarbiya institutining integratsiyasi",
            details: [
              "Venn diagrammasi: Oila-Mahalla-Maktab o'zaro kesishuvi va umumiy tarbiyaviy maydon",
              "Strukturaviy sxema: Har bir institutning funksiyalari, mas'uliyatlari va imkoniyatlari",
              "Infografikalar: Integratsiya darajalari, hamkorlik shakllari va natijalari",
              "Timeline: O'zbekistonda oila-mahalla-maktab hamkorligining tarixiy evolyutsiyasi"
            ]
          },
          {
            type: 'visual_materials',
            heading: "Vizual materiallar:",
            description: "Amaliy namunalar va ko'rgazmalar",
            details: [
              "Fotolavha: Muvaffaqiyatli hamkorlik loyihalaridan namunalar (ota-onalar kengashi, mahalla tadbirlari)",
              "Posterlar: 'Oila - tarbiyaning birinchi maktabi', 'Mahalla - ikkinchi uyimiz', 'Maktab - bilim maskani'",
              "Video kliplar: Maktabda ota-onalar bilan hamkorlik, mahalla tadbirlari, ochiq darslar",
              "Grafik modellar: Samarali hamkorlikning asosiy tamoyillari va bosqichlari"
            ]
          },
          {
            type: 'interactive_board',
            heading: "Interaktiv doska:",
            description: "Hamkorlik strategiyasini birgalikda ishlab chiqish",
            details: [
              "Brainstorming sessiyasi: Talabalar bilan oila-mahalla-maktab integratsiyasining afzalliklari va qiyinchiliklarini muhokama qilish",
              "Interaktiv xarita: Mahalliy resurslar va imkoniyatlarni aniqlash",
              "Real vaqt ishtirok: Talabalarning tajribalarini ulashish va vizuallashtirish"
            ]
          },
          {
            type: 'concept_mapping',
            heading: "Konsepsiya xaritasi:",
            description: "Tizimli yondashuv",
            details: [
              "Markazda: Bola (talaba)",
              "Uch asosiy aylanalar: Oila (primär tarbiya), Mahalla (ijtimoiy muhit), Maktab (formal ta'lim)",
              "Bog'lovchi chiziqlar: O'zaro ta'sir kanalları va hamkorlik mexanizmlari",
              "Natijalar: Harmonik rivojlangan shaxs"
            ]
          }
        ]
      },
      {
        sectionTitle: "2. AUDIO materiallar",
        duration: "15 daqiqa",
        componentType: 'audio',
        contentBlocks: [
          {
            type: 'audio_lecture',
            heading: "Audio ma'ruza:",
            description: "Integratsiya nazariyasi va amaliyoti",
            details: [
              "O'qituvchi tomonidan tayyorlangan audio taqdimot: oila, mahalla, maktabning alohida va birgalikdagi funktsiyalari",
              "Tarixiy kontekst: O'zbek oilasi va mahalla institutining ahamiyati",
              "Zamonaviy tendensiyalar: Globallashuv sharoitida an'anaviy tarbiya institutlarining o'zgarishi",
              "Integratsiya modellari: Muvaffaqiyatli xorijiy va mahalliy tajribalar"
            ]
          },
          {
            type: 'interviews_discussions',
            heading: "Intervyu va munozaralar:",
            description: "Amaliyotchilar tajribasi",
            details: [
              "Direktorlar intervyusi: Maktabda oila va mahalla bilan hamkorlik tajribalari",
              "Ota-onalar paneli: Bolalar tarbiyasida oila va maktab hamkorligi haqida audio fikrlar",
              "Mahalla rais suhbati: Mahallaning tarbiyaviy imkoniyatlari va maktab bilan bog'liqlik",
              "Talabalar audio reportaji: 'Mening oilam, mahallam va maktabim' mavzusida shaxsiy hikoyalar"
            ]
          },
          {
            type: 'music_sounds',
            heading: "Audio-madaniy kontekst:",
            description: "Oilaviy va mahalla muhiti",
            details: [
              "Oilaviy muhabbat qo'shiqlari: 'Onam', 'Ota yurti', 'Ona tuprog'i' kabi milliy qo'shiqlar",
              "Mahalla tovushlari: Hashar chog'idagi qo'shiqlar, nikoh to'yi musiqalari, bayram sadolari",
              "Audio sahna: Oilaviy kecha, gaplashuvlar, ota-bobolar hikoyalari",
              "Fon musiqasi: O'zbek xalq musiqasi - doira, tanbur sadolari"
            ]
          },
          {
            type: 'audio_books',
            heading: "Audio kitoblar va hikoyalar:",
            description: "Adabiyotdan namunalar",
            details: [
              "Abdulla Qahhor 'Sinchalak' (oilaviy tarbiya haqida hikoya) audio versiyasi",
              "Tog'ay Murod 'Onajon' audio hikoyasi",
              "Pedagogik audio kitoblar: Anton Makarenko, Vasily Sukhomlinsky asarlaridan oila va jamoa tarbiyasi haqida parchalar",
              "Zamonaviy audio podcast: 'Oila va maktab hamkorligi' mavzusida"
            ]
          }
        ]
      },
      {
        sectionTitle: "3. KINESTETIK faoliyat",
        duration: "20 daqiqa",
        componentType: 'kinesthetic',
        contentBlocks: [
          {
            type: 'hands_on_activities',
            heading: "Amaliy loyihalar:",
            description: "Hamkorlik ko'nikmalarini amalda sinash",
            details: [
              "Oilaviy daraxt yasash: Talabalar o'z oilalarining daraxtini yaratadi (materiyallar: qog'oz, qalam, sticker)",
              "Mahalla xaritasi chizish: Mahalla obyektlarini (masjid, maktab, oshxona, bog'cha) belgilash",
              "Mini-tadbirlar rejalashtirish: Guruhda oila-mahalla-maktab birgalikdagi tadbir loyihasini ishlab chiqish",
              "Hashar modellashtirish: Sinfda kichik hashar tashkil qilish (sinfni birgalikda bezash, tartibga solish)"
            ]
          },
          {
            type: 'role_playing',
            heading: "Rol o'yinlari va simulyatsiyalar:",
            description: "Real vaziyatlarni sahnalashtirish",
            details: [
              "Ota-onalar yig'ilishi simulyatsiyasi: Talabalar o'qituvchi, ota-ona, direktor rollarini o'ynaydilar",
              "Mahalla kengashi: Mahalla aholisi bilan muammo yechish jarayoni",
              "Oilaviy kengash: Oilada qaror qabul qilish jarayonini jonlashtirish",
              "Konflikt yechimi: Oila-maktab o'rtasidagi tushunmovchiliklarni hal qilish stsenariylari"
            ]
          },
          {
            type: 'group_activities',
            heading: "Guruh ishlari:",
            description: "Jamoaviy loyihalar va hamkorlik",
            details: [
              "Poster yaratish: 'Ideal oila-mahalla-maktab hamkorligi' mavzusida guruh posteri",
              "Dramatik sahna tayyorlash: Oila, mahalla va maktabning uyg'unlashuvini ko'rsatuvchi mini-drama",
              "Loyiha taqdimoti: Har bir guruh integratsiya loyihasini ishlab chiqadi va taqdim etadi",
              "SWOT tahlili: Oila-mahalla-maktab hamkorligining kuchli, zaif tomonlari, imkoniyatlari va tahdidlarini guruhda tahlil qilish"
            ]
          },
          {
            type: 'physical_movement',
            heading: "Faol o'yinlar:",
            description: "Hamkorlik va ishonch o'yinlari",
            details: [
              "'Uch asosiylar' o'yini: Talabalar uch guruhga bo'linadi (oila, mahalla, maktab) va birgalikda topshiriqlarni bajarishadi",
              "Bog'liqlik o'yini: Talabalar birgalikda ip yoki lentalar yordamida o'zaro bog'liqlikni namoyon etadilar",
              "Trust fall: Ishonch va hamkorlik o'yinlari",
              "Human knot: Talabalar qo'llarini tutib, murakkab tugunni yechish (hamkorlik va muloqot ko'nikmalari)"
            ]
          }
        ]
      },
      {
        sectionTitle: "4. O'QISH/YOZISH",
        duration: "25 daqiqa",
        componentType: 'reading',
        contentBlocks: [
          {
            type: 'textbooks_articles',
            heading: "Darsliklar va ilmiy maqolalar:",
            description: "Nazariy asoslar",
            details: [
              "Pedagogika darsliklari: Oila tarbiyasi va maktab-oila hamkorligi bo'limlari",
              "Ilmiy maqolalar: Oila, mahalla, maktab integratsiyasi mavzusida O'zbekiston va xorijiy tadqiqotlar",
              "Urie Bronfenbrenner ekologik tizim nazariyasi: Mikrosistema, mezosistema, ekzosistema, makrosistema",
              "Rasmiy hujjatlar: O'zbekiston Respublikasi Ta'lim to'g'risidagi qonun, Oila kodeksi, Mahalla faoliyati to'g'risidagi nizom"
            ]
          },
          {
            type: 'note_taking',
            heading: "Konspekt yozish:",
            description: "Strukturalashgan yozma ishlar",
            details: [
              "T-jadvali: Oila, mahalla, maktabning har birining afzalliklari va cheklovlari",
              "Cornell usuli: Ma'ruzadan asosiy tushunchalar, savollar va xulosa yozish",
              "Venn diagrammasi konspekt: Uch institutning o'xshash va farqli jihatlarini yozma ravishda belgilash",
              "Refleksiya yozuvi: 'Mening oilam va maktabim o'rtasidagi munosabatlar' mavzusida"
            ]
          },
          {
            type: 'essays_reports',
            heading: "Insholar va tadqiqot hisobotlari:",
            description: "Akademik yozish",
            details: [
              "Taqqoslash inshosi: 'O'zbekiston va Finlandiya maktablarida oila hamkorligi' (1000-1500 so'z)",
              "Tadqiqot hisoboti: 'Mening mahallam va maktab munosabatlari' - kichik sоsiologik tadqiqot (anketa, intervyu, kuzatish)",
              "Tahliliy insho: 'Oila-mahalla-maktab integratsiyasining pedagogik asoslari' (1500-2000 so'z)",
              "Case study: Konkret maktabdagi muvaffaqiyatli hamkorlik loyihasini yozma tahlil qilish"
            ]
          },
          {
            type: 'creative_writing',
            heading: "Ijodiy yozish:",
            description: "Badiiy va ijodiy matnlar",
            details: [
              "Hikoya: 'Mening oilam, mahallam va maktabim' mavzusida badiiy hikoya yozish",
              "Maktub: Kelajakdagi o'zimga maktub - 'Men qanday ota-ona bo'laman va maktab bilan qanday hamkorlik qilaman?'",
              "She'r: Oila, mahalla yoki maktab mavzusida lirik she'r",
              "Kundalik: 'Oila-maktab munosabatlari kundaligi' - bir haftalik kuzatishlar va refleksiyalar"
            ]
          }
        ]
      },
      {
        sectionTitle: "5. TEXNOLOGIYA (+1)",
        duration: "20 daqiqa",
        componentType: 'digital',
        contentBlocks: [
          {
            type: 'online_platforms',
            heading: "Oila-maktab aloqa platformalari:",
            description: "Raqamli hamkorlik vositalari",
            details: [
              "Google Classroom: Ota-onalarni sinf faoliyatidan xabardor qilish, topshiriqlar ko'rish",
              "Telegram guruhlar: Sinf, maktab va ota-onalar uchun mobil kommunikatsiya",
              "Edupage/iMektep: Maktab boshqaruv tizimlari - baholar, davomatlar, yangiliklar",
              "Zoom/Google Meet: Virtual ota-onalar yig'ilishlari, ochiq darslar"
            ]
          },
          {
            type: 'educational_apps',
            heading: "Oilaviy ta'limiy ilovalar:",
            description: "Mobil hamkorlik",
            details: [
              "ClassDojo: Talabalar xulq-atvorini ijobiy kuzatish, ota-onalar bilan aloqa",
              "Remind: Tez va samarali xabar almashinuvi (SMS, push notifications)",
              "Bloomz: Oila-maktab hamkorligi uchun maxsus ijtimoiy tarmoq",
              "Seesaw: Talabalar portfoliosi - ota-onalar bolalarining ishlarini ko'rish imkoniyati"
            ]
          },
          {
            type: 'multimedia_tools',
            heading: "Multimedia loyihalar:",
            description: "Ijodiy raqamli hamkorlik",
            details: [
              "Canva: Oilaviy taqdimot, infografika yoki poster yaratish (oila tarixchasi, mahalla xaritasi)",
              "Padlet: Virtual devor - oilalar va talabalar o'z fikrlarini, fotolavhalarini ulashishadi",
              "Flipgrid: Video javoblar - talabalar va ota-onalar video orqali fikr almashishadi",
              "Storybird/Book Creator: Oilaviy hikoyalar yoki kitoblar yaratish (birgalikda ota-ona va bola)"
            ]
          },
          {
            type: 'simulations_vr',
            heading: "Virtual voqeliklar:",
            description: "Immersiv tajribalar",
            details: [
              "Virtual ochiq darslar: 360° kamera orqali ota-onalar darsl arni kuzatishlari mumkin",
              "Virtual mahalla sayohati: Mahalla obyektlarini virtual ko'rib chiqish (masjid, maktab, bog'cha)",
              "AR oilaviy loyihalar: Augmented Reality orqali oilaviy daraxt yoki mahalla xaritasini interaktiv ko'rish",
              "VR simulyatsiya: Oila-maktab hamkorligining ideal modeli - virtual tajriba"
            ]
          },
          {
            type: 'research_tools',
            heading: "Tadqiqot va resurslар:",
            description: "Ma'lumot to'plash va tahlil",
            details: [
              "Google Forms: Ota-onalar va mahalla vakillari uchun onlayn so'rovnomalar yaratish",
              "SurveyMonkey: Mukammalroq anketa yaratish va tahlil qilish",
              "Canva/Piktochart: Tadqiqot natijalarini infografika shaklida taqdim etish",
              "YouTube: 'Oila-maktab hamkorligi', 'Mahalla ta'limiy ahamiyati' mavzusidagi ta'limiy videolar"
            ]
          }
        ]
      }
    ],
    summary: "Ushbu ma'ruzada talabalar oila, mahalla va ta'lim muassasasining o'zaro bog'liqligi, ularning birgalikdagi tarbiyaviy salohiyati va samarali hamkorlik mexanizmlarini multimodal yondashuv orqali to'liq o'rgandilar. Nazariy bilimlar, amaliy mashqlar, ijodiy loyihalar va zamonaviy texnologiyalar integratsiyasi orqali keng qamrovli tushuncha shakllantirildi.",
    keyTakeaways: [
      "Oila - tarbiyaning asosiy va birinchi manbai, primär sotsializatsiya joyi",
      "Mahalla - ikkilamchi sotsializatsiya, ijtimoiy madaniy muhit va qo'llab-quvvatlash tarmog'i",
      "Maktab - formal ta'lim, professional o'qitish va keng ijtimoiy integratsiya markazi",
      "Uch institutning samarali integratsiyasi yaxlit va harmonik rivojlangan shaxsni shakllantirishning kaliti"
    ],
    culturalContext: "O'zbekiston kontekstida oila, mahalla va maktabning boy tarixiy an'analari va zamonaviy pedagogik yondashuvlarni birlashtirish",
    recommendedComponents: ['visual', 'audio', 'kinesthetic', 'reading', 'digital'],
    assessmentStrategy: "Multimodal baholash: nazariy testlar, amaliy loyihalar, guruh taqdimotlari, ijodiy ishlar, refleksiya hisobotlari, tadqiqot loyihalari"
  },

    {
      "id": "maruza-4-ilg'or-xorijiy-tajribalar",
      "title": "MA'RUZA 4: Tarbiya jarayonini samaradorligini oshirishda ilg'or xorijiy tajribalar",
      "duration": "90 daqiqa",
      "sections": [
        {
          "sectionTitle": "1. VIZUAL",
          "duration": "10 daq",
          "content": [
            {
              "type": "Slayd-prezentatsiya",
              "details": [
                "JAHON TA'LIM XARITASI",
                "PISA 2022 Reytingi (15 yoshli o'quvchilar):",
                "1. Singapur 569 ball",
                "2. Yaponiya 543 ball",
                "3. Finlandiya 536 ball",
                "...O'zbekiston (ishtirok etmagan)",
                "TIMSS 2019 (4-sinf matematika):",
                "1. Singapur 625 ball",
                "2. Janubiy Koreya 600 ball",
                "3. Yaponiya 593 ball",
                "...Qozog'iston 544 ball (MDH eng yaxshi)"
              ]
            },
            {
              "type": "Taqqoslash jadvali infografika",
              "headers": ["Mamlakat", "Ta'lim tizimi xususiyati", "Tarbiya yondashuvi", "Natija"],
              "data": [
                ["Finlandiya", "Trust-based", "Holistic, individual", "Yuqori"],
                ["Singapur", "Meritocracy", "Discipline, excellence", "Top-1"],
                ["Yaponiya", "Collectivist", "Moral education", "Tartib"],
                ["J.Koreya", "Competitive", "Respect, hard work", "Yutuq"],
                ["O'zbekiston", "Reforming", "Milliy qadriyatlar", "O'sish"]
              ]
            },
            {
              "type": "Video",
              "details": [
                "'Finlandiya maktabida bir kun' (4 daq)",
                "'Yaponiya tarbiya darsi - Dotoku' (3 daq)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "2. AUDIO",
          "duration": "10 daq",
          "content": [
            {
              "type": "PODKAST: 'Dunyoning eng yaxshi ta'lim tizimlari'",
              "parts": [
                {
                  "QISM": "1: Finlandiya sirlari (4 daq)",
                  "speaker": "[Ta'lim eksperti - Dr. Pasi Sahlberg]",
                  "text": "Finlandiya mukammalligi 3 ta prinsipga asoslangan: 1. Ishonch (Trust) - O'qituvchilarga to'liq ishonch. Nazorat minimal. Har kim professional va mas'ul. 2. Tenglik (Equity) - Barcha bolalar bir xil imkoniyat. Maxsus ehtiyojli bolalarga 30% budget. 3. Mazmunliroq (Less is more) - Kam dars soatlari, ko'p o'yin va dam olish. Uy vazifasi minimal. Tarbiyaviy jihati: Bola - markazda. Uning baxti, sog'ligi, rivojlanishi - birinchi o'rinda. Baholar, testlar, reytinglar - ikkinchi...",
                  "summary": "Finlandiya ta'lim tizimining asosiy tamoyillari: ishonch, tenglik va mazmunli ta'lim."
                },
                {
                  "QISM": "2: Singapur meritokrasiyasi (3 daq)",
                  "speaker": "[Singapur ta'lim vaziri muovini]",
                  "text": "Bizning tizimimiz qattiq lekin adolatli. Asosiy g'oya: Meritocracy - har kim mehnat va qobiliyat asosida o'sadi. Boshlang'ich sinfda: Intizom va tartib - asosiy, Hurmat - o'qituvchi, keksalar, qonun, Character Education - maxsus darslar (30 daq, haftada 2 marta), Bilingualism - ingliz + milliy til (xitoy/malay/tamil). Natija: Eng yuqori natijalar, lekin... stress ham yuqori...",
                  "summary": "Singapur ta'lim tizimining meritokratiya tamoyili, intizom, hurmat va ko'p tillilikka e'tibor."
                },
                {
                  "QISM": "3: Yaponiya 'Dotoku' (3 daq)",
                  "speaker": "[Yapon pedagog]",
                  "text": "Dotoku - moral ta'lim. 1890-yildan beri mavjud. 2018-da majburiy fan bo'ldi. Har hafta 1 soat. Mavzular: Hurmat va minnatdorchilik, Do'stlik va ishonch, Mas'uliyat va mehnat, Jamiyatga xizmat. Metod: Hikoyalar, munozara, rol o'yini, refleksiya. Baho yo'q - faqat tavsif. Maqsad: Yaxshi inson tarbiyalash, nafaqat aqlli...",
                  "summary": "Yaponiyaning 'Dotoku' moral ta'limi, uning mavzulari va metodlari, asosiy maqsadi yaxshi inson tarbiyalash."
                }
              ]
            }
          ]
        },
        {
          "sectionTitle": "3. KINESTETIK faoliyat",
          "duration": "15 daq",
          "content": [
            {
              "type": "Mashq 1: 'Mamlakatlar ko'rgazmasi' (8 daq)",
              "details": [
                "5 guruh = 5 mamlakat: Finlandiya, Singapur, Yaponiya, Janubiy Koreya, Qozog'iston (yoki MDH)",
                "Vazifa (5 daq tayyorlov): Mamlakatning ta'lim-tarbiya tizimini 3 daqiqada taqdim eting. Format: Mini-spektakl, rol o'yini yoki namoyish. Ko'rsatish kerak: Tipik dars, tarbiya usuli, o'qituvchi-o'quvchi munosabat.",
                "Namoyish (3 daq): Har guruh o'z 'mamlakatini' ko'rsatadi. Boshqalar kuzatib, xususiyatlarni yozib oladilar."
              ]
            },
            {
              "type": "Mashq 2: 'SWOT kompyuter o'yini' - Turli tizimlar taqqoslash (5 daq)",
              "details": [
                "4 burchakka 4 ta plakat: Strengths (Kuchli tomonlar), Weaknesses (Zaifliklar), Opportunities (Imkoniyatlar), Threats (Xavflar).",
                "Har mamlakat uchun talabalar tegishli burchakka yugurib stiker yopishtiradilar.",
                "Misol: Finlandiya Strengths: Ishonch, tenglik. Finlandiya Weaknesses: Past raqobat, kam ambitsiya."
              ]
            },
            {
              "type": "Mashq 3: 'Men nima olaman?' harakatchan refleksiya (2 daq)",
              "details": [
                "Talabalar sinfni aylanib, har xil mamlakatlardan 1 ta yaxshi g'oyani 'oladi' (qo'liga yozadi yoki eslab qoladi). Navbatma-navbat baham ko'radi."
              ]
            }
          ]
        },
        {
          "sectionTitle": "4. O'QISH/YOZISH",
          "duration": "25 daq",
          "content": [
            {
              "type": "O'qish materiallari",
              "sections": [
                {
                  "heading": "MATN 1: 'Finlandiya fenomeni' - Pasi Sahlberg maqolasi (10 daq)",
                  "subsections": [
                    {
                      "title": "FINLANDIYA: QANDAY QILIB TOP-3 GA KIRDI?",
                      "text": "1990-yillarda Finlandiya ta'limi o'rtachadan past edi. Bugun - dunyoda eng yaxshilardan biri. Qanday?",
                      "points": [
                        "ASOSIY ISLOHOTLAR:",
                        "1. O'QITUVCHILAR - ELITA (1970-lardan) - Faqat magistr darajasi (5 yil), Qabul - 10% (juda qattiq), Maosh - o'rtacha, lekin hurmat - yuqori, Avtonomiya - to'liq ishonch",
                        "2. TENGLIK - ASOSIY QADRIYAT (1980-lardan) - Barcha maktablar bir xil sifat, Maxsus talim - 30% o'quvchilar uchun, Bepul ovqat, kitob, transport, Alohida sinflar yo'q",
                        "3. KAM LEKIN SIFATLI (1990-lardan) - Dars soati: 20 soat/hafta (eng kam dunyoda), Uy vazifasi: 30 daq/kun, Test va imtihon: minimal, O'yin va ijodkorlik: ko'p",
                        "4. HOLISTIK YONDASHUV (2000-lardan) - Bola sog'ligi va baxti - birinchi, Fanlararo integratsiya, Amaliy ko'nikmalar, Ijtimoiy-emotsional ta'lim",
                        "TARBIYA JIHATI: 'Sisu' (qat'iyat, chidamlilik) - milliy qadriyat, Demokratiya va tenglik, Ekologiya va tabiat muhabbati, Individual mas'uliyat",
                        "NATIJA: PISA - Top 3, O'quvchilar baxtli, O'qituvchilar motivatsiyalangan",
                        "LEKIN HAM: Raqobat past - ambitsiya kam, Migratsiya muammolari, Mental salomatlik muammolari (qorong'u qish)"
                      ]
                    }
                  ]
                },
                {
                  "heading": "MATN 2: Taqqoslash jadvali - talabalar to'ldiradi (10 daq)",
                  "table": {
                    "headers": ["Parametr", "Finlandiya", "Singapur", "Yaponiya", "O'zbekiston"],
                    "rows": [
                      ["Dars soati/hafta", "20", "30", "27", "24"],
                      ["Sinf hajmi", "20", "30", "35", "25-30"],
                      ["O'qituvchi tayyorlash", "5 yil (magistr)", "4 yil + 1 yil", "4 yil", "4 yil"],
                      ["Tarbiya yondashuvi", "Holistic", "Discipline", "Moral", "Milliy"],
                      ["Test va imtihon", "Minimal", "Ko'p", "O'rtacha", "O'rtacha"],
                      ["Uy vazifasi", "Kam", "Ko'p", "O'rtacha", "O'rtacha"]
                    ]
                  }
                }
              ]
            },
            {
              "type": "Yozish mashqlari (5 daq)",
              "tasks": [
                "1. Taqqosiy tahlil (3 daq): 'Qaysi mamlakat yondashuvi O'zbekistonga eng mos? Nima uchun?' (5 gap)",
                "2. 'Men olaman' ro'yxat (2 daq): Har mamlakatdan 1 ta yaxshi g'oyani yozish va O'zbekistonda qanday qo'llash mumkinligini tushuntirish"
              ]
            }
          ]
        },
        {
          "sectionTitle": "5. TEXNOLOGIYA",
          "duration": "20 daq",
          "content": [
            {
              "type": "VOSITA 1: Google Earth - Virtual sayohatlar (5 daq)",
              "details": [
                "Finlandiya Helsinki maktabi: 360° Street View, Maktab binosi, o'yin maydoni, sinf xonalar, Yashil zona, tabiiy muhit, Kuzatish va taqqoslash.",
                "Singapur: Zamonaviy binolar, Texnologik jihozlanish, Smart classroom."
              ]
            },
            {
              "type": "VOSITA 2: YouTube + EdPuzzle - Interaktiv video (5 daq)",
              "details": [
                "Video tanlash: 'A Day in Finnish School' (10 daq video).",
                "EdPuzzle'da tahrirlash: Video ichiga savollar qo'yish, Muhim joyda to'xtatish, Ko'p tanlovli / Ochiq savollar, Talabalar javob beradi, Avtomatik baholash.",
                "Savollar misoli: 00:30: Finlandiyada dars soat nechida boshlanadi? 02:15: Tanaffusda bolalar nima qilishadi? 05:00: O'qituvchi qanday munosabatda?"
              ]
            },
            {
              "type": "VOSITA 3: Padlet - 'Dunyoning eng yaxshi g'oyalari' devori (4 daq)",
              "details": [
                "Struktura: 5 ta ustun = 5 mamlakat, Har ustunda: bolalar postlari.",
                "Talabalar qo'shadi: Rasm / Video, Matn (100-150 so'z), 'Men bu g'oyani qanday qo'llayman?'",
                "Interaktiv: Boshqalarnikiga , like, izoh, Eng ko'p like olgan g'oya - g'olib."
              ]
            },
            {
              "type": "VOSITA 4: Mentimeter - 'Qaysi mamlakat yondashuvi eng yaxshi?' (3 daq)",
              "details": [
                "So'rov turlari: 1. Word Cloud: 'Finlandiya' desangiz birinchi nima esga tushadi? 2. Multiple Choice: Qaysi mamlakat tizimi sizga yoqdi? 3. Scales: Har mamlakat uchun baho (1-10) 4. Open Ended: Qaysi g'oyani o'zingiz sinab ko'rishni xohlaysiz?",
                "Natijalarni real-time ekranda ko'rish."
              ]
            },
            {
              "type": "VOSITA 5: Canva - Taqqoslash infografika (3 daq)",
              "details": [
                "Shablon: 'Educational Systems Comparison'. 3-4 mamlakat, Parametrlar: Icon + Qisqa matn, Professional dizayn, Eksport: PNG, PDF, Link.",
                "Amaliy mashq: Guruhda 1 ta infografika yaratish (5 daqiqa beriladi)."
              ]
            }
          ]
        },
        {
          "sectionTitle": "MUSTAQIL ISH",
          "content": [
            {
              "type": "1. TAQQOSIY TAHLIL HISOBOTI (O'qish/Yozish - 2500 so'z)",
              "details": [
                "2 ta mamlakat chuqur tahlili (masalan: Finlandiya va Singapur).",
                "Struktura: Tarixiy kontekst, Ta'lim tizimi tuzilmasi, Tarbiya yondashuvi va metodlari, Kuchli va zaif tomonlar, O'zbekiston uchun saboqlar, Shaxsiy xulosa va takliflar.",
                "Kamida 10 ta manba (ilmiy maqola, kitob, hisobot).",
                "APA format havola."
              ]
            },
            {
              "type": "2. MULTIMEDIYA TAQDIMOT (Vizual + Texnologiya - 15 slayd)",
              "details": [
                "Mamlakat tanlang.",
                "PowerPoint / Prezi / Canva.",
                "Video, rasm, grafik, jadval.",
                "Voice-over (ovoz yozish) yoki subtitles.",
                "10 daqiqalik taqdimot.",
                "Google Drive / YouTube'ga joylashtirish."
              ]
            },
            {
              "type": "3. PODKAST SERIYASI (Audio - 20 daq, 2 qism)",
              "details": [
                "Qism 1: 'Finlandiya vs Singapur - Ikkala tajriba ham to'g'rimi?'",
                "Qism 2: 'O'zbekiston nimani o'rganishi mumkin?'",
                "Professional format: Intro, asosiy, xulosa, outro.",
                "Musiqa, sound effects.",
                "Transkripsiya (yozma variant).",
                "SoundCloud / Anchor'ga joylashtirish."
              ]
            },
            {
              "type": "4. VIDEO KEYS-STADI (Kinestetik - 5 daq)",
              "details": [
                "O'zbek maktabida vaziyat.",
                "Xorijiy tajribani qo'llash urinishi.",
                "3 ta ssenariy: Finlandiya usulida (ishonch, erkinlik), Singapur usulida (intizom, me'yor), Yaponiya usulida (jamoa, mas'uliyat).",
                "Qaysi biri eng yaxshi natija berdi? Nima uchun?",
                "Aktyorlik + Montaj."
              ]
            },
            {
              "type": "5. INTERAKTIV XARİTA (Texnologiya)",
              "details": [
                "Google My Maps / Padlet'da dunyo xaritasi.",
                "10 ta mamlakat belgilash.",
                "Har biri uchun: Flag, PISA/TIMSS natijasi, Asosiy tarbiya xususiyati (1 paragraf), Video link, Qiziqarli fakt.",
                "Shareable link."
              ]
            }
          ]
        },
        {
          "sectionTitle": "XULOSA",
          "content": [
            "DUNYODAN SABOQLAR:",
            "Finlandiya → Ishonch, Tenglik, Kam lekin Sifatli",
            "Singapur → Intizom, A'lochilik, Meritokrasiya",
            "Yaponiya → Axloq, Jamoa, Hurmat",
            "J.Koreya → Mehnat, Raqobat, Natija",
            "O'zbekiston → Milliy + Global = Noyob yo'l!",
            "Har mamlakat o'z tarixiga, madaniyatiga mos tizim yaratgan.",
            "Nusxa ko'chirish emas - o'rganish va moslash!",
            "O'zbekiston: Milliy qadriyatlar + Xalqaro tajriba.",
            "Biz o'z yo'limizni yaratamiz - MILLIY MODEL!"
          ]
        }
      ]
    },
    {
      "id": "maruza-5-vatanparvarlik-tarbiyasi",
      "title": "MA'RUZA 5: Boshlang'ich sinf o'quvchilarini vatanparvarlik ruhida tarbiyalash",
      "duration": "90 daqiqa",
      "sections": [
        {
          "sectionTitle": "1. VIZUAL (10 daq)",
          "content": [
            {
              "type": "Slayd-prezentatsiya",
              "details": [
                "VATANPARVARLIK TARBIYASI PIRAMIDASI",
                "FAOL FUQARO (yuqorida)",
                "MILLIY G'URUR, VATAN SEVGISI",
                "DAVLAT RAMZLARI BILIMI",
                "OILA MUHABBATI (pastda)",
                "Bandura IJTIMOIY O'RGANISH nazariyasi: Kuzatish → Taqlid → Mustahkamlash → Ichkilashtirish"
              ]
            },
            {
              "type": "Infografikalar",
              "details": [
                "O'zbekiston xaritasi: 14 viloyat + Qoraqalpog'iston",
                "Davlat ramzlari: Bayroq (ma'no), Gerb (ramzlar), Madhiya (matn va tahlil)",
                "Tarixiy shaxslar: Amir Temur, Alisher Navoiy, Bobur, Ulug'bek, Jaloliddin Manguberdi",
                "Mustaqillik yili timeline: 1991 → 2024 (asosiy yutuqlar)",
                "Vatanparvarlik faoliyatlari kalendari: 12 oy - 12 tadbir"
              ]
            },
            {
              "type": "Video",
              "details": [
                "'O'zbekiston - go'zal Vatanim' (4 daq) - tabiiy go'zalliklar",
                "Bolalar 'Vatanim' she'ri (2 daq)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "2. AUDIO (10 daq)",
          "content": [
            {
              "type": "PODKAST: 'Vatanparvarlik - yurak ishi'",
              "parts": [
                {
                  "QISM": "1: Vatanparvarlik nima? (4 daq)",
                  "speaker": "[Psixolog - Dr. Karimova]",
                  "text": "'Vatanparvarlik - bu nafaqat bilim, bu HIS-TUYG'U!' Rivojlanish bosqichlari (yosh bo'yicha): 6-7 yosh (1-sinf): Vatan = Mening uyim, mening ko'cham, Oila, mahalla muhabbati, Oddiy bayramlar (Navruz, Mustaqillik). 8-9 yosh (2-3-sinf): Vatan = Mening shahrim, viloyatim, Milliy qahramonlar hikoyalari, Davlat ramzlari ma'nosi. 10-11 yosh (4-sinf): Vatan = O'zbekiston - butun mamlakat, Tarix va madaniyat, Men nima qila olaman? Muhim: Majburlash emas - ILHOM!'",
                  "summary": "Vatanparvarlik hissiyotga asoslangan tushuncha ekanligi va uning yoshga qarab rivojlanish bosqichlari."
                },
                {
                  "QISM": "2: Tarixiy hikoya - 'Jaloliddin Manguberdi' (3 daq)",
                  "speaker": "[Dramatik audio-hikoya]",
                  "text": "'1221-yil, Mo'g'ullar hujumi. Jaloliddin 18 yoshda. Otasi vafot etgan. Mamlakatni kim qutqaradi? Yosh shohzoda qo'shinini yig'di. 'Vatan bizdan qancha qurbon talab qilsa - beramiz!' dedi u. Parvon jangida 120 ming mo'g'ulga qarshi 60 ming o'zbek jangchisi. G'alaba! Chingizxon hayratda: 'Bu qanday yigit? Shunday o'g'il mening bo'lsa edi!' Jaloliddin: 'Vatan uchun jon fido!' - bu so'zlar bugun ham qalbimizda...' Saboq: Huquq - bu nafaqat 'Mening!', balki 'Sen huquqqa egasan!'",
                  "summary": "Jaloliddin Manguberdining vatanparvarlik jasorati haqidagi tarixiy audio-hikoya."
                },
                {
                  "QISM": "3: Zamonaviy qahramonlar (3 daq)",
                  "speaker": "[Taniqli jurnalist]",
                  "text": "'Vatanparvarlik faqat o'tmishda emas. Bugun ham qahramonlar bor: Mehribon Olimova - Paralympics chempioni. Dunyoga O'zbekiston bayrog'ini ko'rsatdi. Shahram Giyosov - MMA jangchisi. 'Men O'zbekiston uchun jang qilaman!' Yosh ixtirochilar - xalqaro olimpiadalarda g'alaba. Tibbiyot xodimlari - pandemiyada jon saqladilar. Vatanparvarlik - bu kundalik ishda, o'z joyingizda yurt uchun xizmat qilish!'",
                  "summary": "Zamonaviy O'zbekiston qahramonlari misolida vatanparvarlikning kundalik hayotdagi ko'rinishlari."
                }
              ]
            }
          ]
        },
        {
          "sectionTitle": "3. KINESTETIK (15 daq)",
          "content": [
            {
              "type": "Mashq 1: 'Bayroq ma'nosi' harakatli mashq (5 daq)",
              "details": [
                "Rang-harakatlar: Ko'k rang (Osmon): Qo'llarni yuqoriga, osmonga qarang. Oq rang (Tinchlik): Qo'llarni yonboshar, tinch turganda. Qizil rang (Hayot kuchi): Yurakka qo'l qo'ying. Yashil rang (Tabiat): Yerga cho'kilib, o'simlik kabi o'sing. Yarim oy va yulduzlar: Doira bo'lib, qo'l ushlang - BIRLIK.",
                "Bolalar uchun namoyish: Guruh bo'lib bayroqning har bir elementi harakatida."
              ]
            },
            {
              "type": "Mashq 2: 'Vatan xaritasi' - Jismoniy xarita (6 daq)",
              "details": [
                "Tayyorlov: Katta qog'ozda O'zbekiston xaritasi chizilgan. 14 viloyat + Qoraqalpog'iston. Har viloyat - bo'sh.",
                "Faoliyat: Talabalar guruhlarga bo'linadi. Har guruh 2-3 ta viloyat oladi. Viloyatga qo'shish kerak: Nomi, Mashhur joyi (rasm/chizma), 1 ta qiziqarli fakt, Mahsuloti yoki kasbı. Stiker, rasm, matn - xaritaga yopishtiriladi.",
                "Natija: Jamoa ishida yaratilgan 'Jonli O'zbekiston xaritasi'."
              ]
            },
            {
              "type": "Mashq 3: 'Men Vatan uchun nima qila olaman?' Action cards (4 daq)",
              "details": [
                "Kartochkalar: Axlatni to'g'ri tashlash, Daraxt ekish, Yaxshi o'qish, Ota-onaga yordam, Do'stga mehr, Tarixni o'rganish, Ona tilini hurmat qilish, Mahallani tozalash.",
                "O'yin: Kartochkalar aralashgan. Har talaba 1 ta oladi. 30 soniyada pantomima ko'rsatadi. Boshqalar taxmin qiladi. 'Men buni amalga oshiraman!' - va'da."
              ]
            }
          ]
        },
        {
          "sectionTitle": "4. O'QISH/YOZISH (25 daq)",
          "content": [
            {
              "type": "O'qish materiallari",
              "sections": [
                {
                  "heading": "MATN 1: 'Vatanparvarlik tarbiyasi konsepsiyasi' (10 daq)",
                  "subsections": [
                    {
                      "title": "BOSHLANG'ICH SINFDA VATANPARVARLIK TARBIYASI",
                      "points": [
                        "I. MAQSAD VA VAZIFALAR:",
                        "Maqsad: Yosh avlodda Vatanga muhabbat, milliy g'urur, fuqarolik ongi va mas'uliyatini shakllantirish.",
                        "Vazifalar: 1. Vatan tushunchasini shakllantirish (oiladan boshlab) 2. Davlat ramzlari va ularning ma'nosini o'rgatish 3. Milliy qahramonlar va tarixdan xabardor qilish 4. Milliy qadriyatlar va madaniyatni singdirish 5. Ekologik mas'uliyat va Vatanni asrashga o'rgatish",
                        "II. MAZMUN (Sinf bo'yicha):",
                        "1-SINF: 'Mening oilam va uyim' - Oila daraxti, Mening ko'cham, mahallam, Navruz - milliy bayram, Bayroq, Madhiya - tanishuv.",
                        "2-SINF: 'Mening shahrim va yurtim' - Mening shahrim (viloyatim) tarixi, Mashhur insonlar (mahalliy), Davlat ramzlarining ma'nosi, O'zbekiston xaritasi.",
                        "3-SINF: 'O'zbekiston - mening Vatanim' - O'zbekiston tarixi (qisqacha), Buyuk ajdodlar (Temur, Navoiy), Tabiiy boyliklar va go'zalliklar, Mustaqillik yili ahamiyati.",
                        "4-SINF: 'Men - O'zbekistonning fuqarosi' - Fuqarolik huquq va majburiyatlari, Konstitutsiya - asosiy qonun, Men Vatan uchun nima qila olaman?, Kelajak rejalarim - yurtim rivoji.",
                        "III. METODLAR: 1. Hikoya va suhbat - hayajonli, qiziqarli 2. Tarixiy voqealarni qayta jonlantirish 3. Ekskursiya - muzey, tarixiy joylar 4. Ijodiy faoliyat - rasm, she'r, loyiha 5. Uchrashuvlar - veteranlar, ziyolilar 6. Bayram tadbirlari - Navruz, Mustaqillik 7. Amaliy ishlar - hashar, daraxt ekish.",
                        "IV. BAHOLASH: Baho emas! Kuzatuv, tavsif, rag'batlantirish. Mezonlar: Bilim (davlat ramzlari, tarix), Munosabat (hurmat, g'urur), Xatti-harakat (amalda vatanparvarlik).",
                        "V. HAMKORLIK: Oila + Maktab + Mahalla = Kuchli Vatan sevgisi!"
                      ]
                    }
                  ]
                },
                {
                  "heading": "MATN 2: Alisher Navoiy - 'Vatan' she'ri va tahlil (7 daq)",
                  "subsections": [
                    {
                      "title": "VATAN (zamonaviy tilga o'girilgan)",
                      "poem": "Vatan – ona, degandek aziz,\nUni sevmoq – burchak har kishiga.\nVatansiz kishi – bechora bedor,\nVatani bor – baxtiyordir ishoqa.",
                      "analysis": "TAHLIL: Asosiy g'oya: Vatan - onaga o'xshash muqaddas. Uni sevish - har insonning burchi va sharafidir. Kalit so'zlar: VATAN = ONA (eng yaqin, eng aziz), SEVMOQ = BURCH (majburiyat emas, ichki his), BECHORA = VATANSIZ (yo'qotish - eng katta fojia), BAXTIYORLIK = VATANI BOR (baxtli Vatanda). Pedagogik qiymat: Navoiy bolalarga oddiy tilda tushuntiradi - Vatanni ona kabi sev! Bu hissiy aloqa yaratadi. Amaliy darslik: 1-sinf: 'Onam va Vatanim' - taqqoslash 2-sinf: She'rni yod olish, tahlil qilish 3-sinf: O'z she'ringni yozish 'Mening Vatanim' 4-sinf: Navoiyning boshqa asarlari bilan tanishish."
                    }
                  ]
                }
              ]
            },
            {
              "type": "Yozish mashqlari (8 daq)",
              "tasks": [
                "1. 'Vatan - bu...' (3 daq) 5 ta gap tugatish: Vatan - bu mening..., Vatan - bu joy, bu yerda..., Men Vatanimni sevaman, chunki..., Kelajakda men Vatan uchun..., Vatansiz hayot...",
                "2. Davlat ramzlari jadvali (3 daq): Ramz, Tavsif, Ma'nosi, Mening his-tuyg'um (jadvalni to'ldirish).",
                "3. Refleksiv savol (2 daq): 'Eng sevimli O'zbekiston joyi va nima uchun?' (3-4 gap)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "5. TEXNOLOGIYA (20 daq)",
          "content": [
            {
              "type": "VOSITA 1: Google Earth - Virtual O'zbekiston safari (5 daq)",
              "details": [
                "Marshshrut: 1. Toshkent: Mustaqillik maydoni, Amir Temur haykali. 2. Samarqand: Registon (360°), Shohi Zinda. 3. Buxoro: Kolon minorasi, Ark qal'asi. 4. Xiva: Ichon-qala (to'liq panorama). 5. Farg'ona: Tabiat - Qo'qon vodiysi. 6. Termiz: Qadimiy shahar, Buddaviy yodgorliklar.",
                "Faoliyat: Screenshot olish, Qiziqarli joyni belgilash, 'Men bu yerga borishni xohlayman!' - izoh."
              ]
            },
            {
              "type": "VOSITA 2: Thinglink - Interaktiv Bayroq (4 daq)",
              "details": [
                "Yaratish: O'zbekiston bayrog'i rasmi. Har rangda - hotspot (bosish nuqtasi). Har nuqtada: Matn (ma'no), Video (tarixdan), Audio (tushuntirish), Rasm (ramziy).",
                "Namuna: Ko'k rang hotspot: 'Osmon va tinchlik ramzi', Video: 'O'zbekiston osmoni' (30 sek), Audio: 'Ko'k rang bizda nima anglatadi?'"
              ]
            },
            {
              "type": "VOSITA 3: Padlet - 'Mening viloyatim' (5 daq)",
              "details": [
                "Tuzilma: 14 ustun = 14 viloyat. Har ustunda: bolalar postlari.",
                "Talabalar qo'shadi: Viloyat nomi, Mashhur joyi (rasm), Qiziqarli fakt (matn), Mahsuloti yoki taom (rasm), 'Men bu yerdan faxrlanaman!' (izoh).",
                "Interaktiv: Boshqa viloyatlarga, Savol berish, 'Men bu yerga borishni xohlayman!' emoji."
              ]
            },
            {
              "type": "VOSITA 4: Quizizz - Vatanparvarlik viktorinasi (4 daq)",
              "details": [
                "Savol turlari: 1. Ko'p tanlov: 'O'zbekiston bayrog'ida nechta rang bor?' a) 3 b) 4 c) 5 d) 6. 2. To'g'ri/Noto'g'ri: 'Amir Temur Samarqandda tug'ilgan' - To'g'ri / Noto'g'ri. 3. Rasm tanlov: 'Qaysi rasm Registon?' [4 ta rasm ko'rsatiladi]. 4. Ochiq savol: 'Mustaqillik kuni qachon?'.",
                "Gamifikatsiya: Timer (30 sek), Leaderboard (reyting), Power-ups (bonuslar), Memes (qiziqarli reaktsiyalar)."
              ]
            },
            {
              "type": "VOSITA 5: Canva - 'Vatanparvarlik poster' (2 daq)",
              "details": [
                "Shablon: 'I Love Uzbekistan' poster.",
                "Ramzlar: bayroq, gerb, tarixiy joylar.",
                "Matn: 'Men O'zbekistonni sevaman, chunki...'.",
                "Dizayn: milliy naqsh, rangli.",
                "Amaliy: Talabalar o'z posterini yaratadi (5 daq uy vazifasi)."
              ]
            }
          ]
        },
        {
          "sectionTitle": "MUSTAQIL ISH",
          "content": [
            {
              "type": "1. VATANPARVARLIK TARBIYASI REJASI (O'qish/Yozish - 2000 so'z)",
              "details": [
                "Konkret sinf uchun (masalan, 2-sinf).",
                "Yillik reja: 9 oy × 4 hafta = 36 hafta.",
                "Har hafta: 1 ta faoliyat.",
                "Struktura: Sentyabr: 'Mening maktabim', Oktyabr: 'Mening shahrim', Noyabr: 'O'zbekiston xaritasi', ...Iyun: 'Men - O'zbekiston fuqarosi'.",
                "Har faoliyat: Maqsad, Mazmun, Metod, Resurs, Natija.",
                "Oila va mahalla bilan hamkorlik.",
                "Baholash mezonlari."
              ]
            },
            {
              "type": "2. MULTIMEDIYA TAQDIMOT (Vizual + Texnologiya - 20 slayd)",
              "details": [
                "Mavzu: 'O'zbekiston - go'zal Vatanim'.",
                "Qismlar: Davlat ramzlari va ma'nosi, Tarix (10 ta muhim sana), Geografiya (5 ta viloyat batafsil), Madaniyat (milliy kiyim, taom, san'at), Bugungi yutuqlar, Kelajak - mening hissam.",
                "Video, audio, rasm, interaktiv elementlar.",
                "Bolalar uchun tushunarli til."
              ]
            },
            {
              "type": "3. AUDIO HIKOYALAR TO'PLAMI (Audio - 30 daq, 5 hikoya)",
              "details": [
                "Har biri 5-6 daqiqa.",
                "Mavzular: Amir Temur va Aksak Temur laqabi, Alisher Navoiy va o'zbek tili, Bobur va 'Boburnoma', Ulug'bek va yulduzlar, Jaloliddin Manguberdi jasorati.",
                "Dramatik, qiziqarli, bolalar uchun.",
                "Musiqa va sound effects.",
                "MP3 format."
              ]
            },
            {
              "type": "4. VIDEO LOYIHA (Kinestetik - 7-10 daq)",
              "details": [
                "'Mening Vatanim - mening faxrim'.",
                "Qismlar: Intro: O'zbekiston go'zalliklari (1 daq), Intervyular: Bolalar 'Men Vatanimni nima uchun sevaman?' (3 daq), Tarixiy joylar virtual sayohat (2 daq), Davlat madhiyasi (bolalar kuylaydi) (1 daq), Action: 'Biz Vatan uchun...' - amaliy ishlar (2 daq), Xulosa: 'O'zbekiston - kelajak mamlakati!' (1 daq).",
                "Professional montaj.",
                "Subtitles (2 tilda: o'zbek, rus)."
              ]
            },
            {
              "type": "5. INTERAKTIV VEBSAYT (Texnologiya)",
              "details": [
                "Google Sites: 'O'zbekistonim'.",
                "Sahifalar: Bosh sahifa: 'Xush kelibsiz!', Tarix: Timeline + Interaktiv, Geografiya: Xarita + Viloyatlar, Madaniyat: Galereya, Ramzlar: Bayroq, Gerb, Madhiya (audio), Viktorina: Embedded Quizizz, Galereya: Bolalar ishlari, Men va Vatanim: Shaxsiy blog.",
                "Responsive dizayn.",
                "Shareable link."
              ]
            }
          ]
        },
        {
          "sectionTitle": "XULOSA",
          "content": [
            "VATANPARVARLIK = VATAN",
            "BILISH → HIS QILISH → HARAKAT QILISH",
            "Oila → Mahalla → Shahar → Vatan",
            "Vatanparvarlik - ichki his, majburiy emas.",
            "Yosh xususiyatiga mos: 1-sinf (uy) → 4-sinf (mamlakat).",
            "Hikoya va hayajon - eng yaxshi vosita."
          ]
        }
      ]
    },
    {
      "id": "maruza-6-jamoa-tashkil-etish",
      "title": "MA'RUZA 6: Jamoa va jamoani tashkil etish asoslari. Boshlang'ich sinf o'quvchilar jamoasini tashkil etishning o'ziga xos jihatlari",
      "duration": "90 daqiqa",
      "sections": [
        {
          "sectionTitle": "1. VIZUAL (10 daq)",
          "content": [
            {
              "type": "Slayd-prezentatsiya",
              "details": [
                "JAMOA RIVOJLANISH BOSQICHLARI",
                "Tuckman Modeli (1965):",
                "1. FORMING (Shakllanish) - 'Kim bu? Nima qilamiz?' → Noaniqlik, odob, tanishuv",
                "2. STORMING (Bo'ron) - 'Men boshqa fikrdaman!' → Ziddiyat, raqobat, guruhlar",
                "3. NORMING (Normalashtirish) - 'Keling kelishaylik' → Qoidalar, rol taqsimoti, hamkorlik",
                "4. PERFORMING (Samaradorlik) - 'Biz jamoamiz!' → Yuqori natija, ishonch, avtonomiya",
                "5. ADJOURNING (Yakunlash) - 'Xayrlashish vaqti' → Refleksiya, xotira, yangi yo'l"
              ]
            },
            {
              "type": "Infografikalar",
              "details": [
                "Guruh vs Jamoa: Taqqoslash jadvali",
                "Jamoa rollari (Belbin): 9 ta rol - har birining xususiyati",
                "Sinf jamoa strukturasi: Rasmiy (lavozimlar) va Norasmiy (do'stlik) tuzilma",
                "Jamoa salomatligi diagnostikasi: 5 parametr (ishonch, muloqot, maqsad, hamkorlik, natija)",
                "Yillik jamoa rivojlanish rejasi: Sentyabr (tanishuv) → Iyun (kuchli jamoa)"
              ]
            },
            {
              "type": "Video",
              "details": [
                "'Boshlang'ich sinf - jamoa bo'lish' (4 daq)",
                "'Team-building o'yinlari namunasi' (2 daq)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "2. AUDIO (10 daq)",
          "content": [
            {
              "type": "PODKAST: 'Sinf - bizning jamoamiz!'",
              "parts": [
                {
                  "QISM": "1: Jamoa nima va nima uchun muhim? (4 daq)",
                  "speaker": "[Ijtimoiy psixolog - Prof. Yusupova]",
                  "text": "'Jamoa - bu guruh + umumiy maqsad + o'zaro bog'liqlik + ishonch. Boshlang'ich sinfda jamoa JUDA muhim, chunki: 1. Ijtimoiy ko'nikmalar - bu yerda do'stlik, hamkorlik, kelishish o'rganiladi. 2. Xavfsizlik - kuchli jamoada bola o'zini himoyalangan his qiladi. Bulling kam. 3. O'rganish - jamoada o'rganish 30% samaraliroq (Vygotskiy). 4. Identitet - 'Men 2-A sinfmanman!' - g'urur va tegishlilik. 5. Hayotga tayyorgarlik - kelajakda istalgan joyda jamoa bilan ishlash. Lekin... Jamoa avtomatik emas. Uni YARATISH kerak!'",
                  "summary": "Jamoaning ta'rifi, uning boshlang'ich sinfda ijtimoiy, xavfsizlik, o'rganish, identitet va hayotga tayyorgarlik uchun muhimligi."
                },
                {
                  "QISM": "2: Makarenko tajribasi (3 daq)",
                  "speaker": "[Tarixiy audio-hikoya]",
                  "text": "'1920-yillar, Ukraina. Anton Makarenko - o'qituvchi. Unga 200 ta qaroqchi va vagrantdan tashkil topgan maktab berildi. Birinchi kun: Bolalar o'g'irlik, janjal, qochish. Makarenko: 'Men sizni jamoa qilaman!' Usuli: Jamoa maqsadi - maktab qurish, Har kim mas'ul - lavozimlar taqsimi, O'z-o'zini boshqarish - Sovet (kengash), An'analar - bayramlar, qo'shiqlar, Ishonch va hurmat. 5 yildan keyin: Maktab - namuna, bolalar - ijodkor, mehnatsevar, axloqli. Makarenko: 'Jamoa - tarbiyaning eng kuchli vositasi!'",
                  "summary": "Anton Makarenkoning qiyin bolalar jamoasini tarbiyalash tajribasi va uning muvaffaqiyat sirlari."
                },
                {
                  "QISM": "3: Zamonaviy yondashuv (3 daq)",
                  "speaker": "[Tajribali sinf rahbari - Nurmatova Guli]",
                  "text": "'Men har yil yangi 1-sinf olaman. Sentyabrda - 25 ta begona bola. Iyunda - kuchli jamoa. Qanday? Sirlarim: 1. Birinchi kun juda muhim! Qiziqarli tanishuv o'yinlari. Hammaning ismini bilib olish. 2. Sinf nomi va shiori. Bolalar o'zlari tanlaydi. 'Yulduzchalar', 'Do'stlar', 'Sherlar' - bu BIZNING jamoamiz! 3. Har kuni - jamoa vaqti. 10 daqiqa doirada suhbat. 'Bugun nima yaxshi bo'ldi?' 'Kim kimga yordam berdi?' 4. An'analar yaratish. Tug'ilgan kun kutlaymiz. Muvaffaqiyatni nishonlaymiz. Qiyinchilikda qo'llab-quvvatlaymiz. 5. Har kim muhim! Har bola o'zini maxsus his qilsin. 'Sen bizga keraksan!' Natija: Bolalar maktabni sog'inadi, bir-birini qo'llab-quvvatlaydi, o'rganishda yordam beradi. Bu - jamoa kuchi!'",
                  "summary": "Zamonaviy sinf rahbari tajribasi asosida jamoa yaratish sirlari va ularning natijalari."
                }
              ]
            }
          ]
        },
        {
          "sectionTitle": "3. KINESTETIK (15 daq)",
          "content": [
            {
              "type": "Mashq 1: 'Tuckman bosqichlarini jonli tajriba' (10 daq)",
              "details": [
                "Vaziyat: Yangi 'sinf' - talabalar noma'lum guruh.",
                "Bosqich 1: FORMING - Tanishuv (2 daq). Kimdir qo'lni ko'taring va o'rningizdan turing. Xonaning turli burchaklarida 4-5 kishilik guruh yasang. Faqat ko'z kontakti - gapirmasdan. His-tuyg'u: noaniqlik, noqulaylik.",
                "Bosqich 2: STORMING - Ziddiyat (3 daq). Vaziyat: Guruhga 1 ta qalam berildi. Vazifa: Birgalikda 1 ta rasm chizish. Lekin: Hammaning fikri turli - nima chizish? Tabiiy ziddiyat paydo bo'ladi. Lider kim? Kimni tinglash? His-tuyg'u: frustratsiya, ixtilof.",
                "Bosqich 3: NORMING - Kelishish (2 daq). Guruh 3 daqiqa muhokama qiladi. Qoidalar yaratadi: Kim bosh, kim yordamchi? Strategiya: Birinchi nima, keyin nima? Konsensus - hammaning fikri eshitildi. His-tuyg'u: yengillik, tushunish.",
                "Bosqich 4: PERFORMING - Muvaffaqiyat (3 daq). Guruh ishlaydi - tez, samarali. Rol taqsimoti aniq. Muloqot oson. Natija: Rasm tayyor! His-tuyg'u: g'urur, jamoa ruhi.",
                "Refleksiya: Har bosqichda nima his qildingiz?"
              ]
            },
            {
              "type": "Mashq 2: 'Ishonch mashqlari' - Trust Building (5 daq)",
              "parts": [
                {
                  "type": "Mashq A: 'Yiqilish va ushlab olish' (2 daq)",
                  "details": "Juftlikda. Biri orqaga yiqiladi (ko'zlar ochiq). Ikkinchisi ushlab oladi. Keyin almashinadi. Metafora: Jamoa meni qo'llab-quvvatlaydi."
                },
                {
                  "type": "Mashq B: 'Tugun yechish' (3 daq)",
                  "details": "6-8 kishi doira. Hamma qo'llarini o'rtaga cho'zadi. Tasodifiy 2 ta boshqa qo'ldan ushlaydi. Murakkab tugun hosil bo'ldi. Vazifa: Gapirmay, qo'llarni qo'ymasdan tugunni yechish. Metafora: Jamoa muammolarini hamkorlikda hal qiladi."
                }
              ]
            },
            {
              "type": "Mashq 3: 'Muloqot doirasi' (3 daq)",
              "details": [
                "Ichki doira: O'qituvchilar.",
                "Tashqi doira: Ota-onalar.",
                "Ichki doira soat yo'nalishi, tashqi teskari.",
                "Stop - yangi juftlik.",
                "30 soniya: 'Muammo' va 'Yechim' taklifi.",
                "3-4 ta aylanish."
              ]
            }
          ]
        },
        {
          "sectionTitle": "4. O'QISH/YOZISH (25 daq)",
          "content": [
            {
              "type": "O'qish materiallari",
              "sections": [
                {
                  "heading": "MATN 1: 'Jamoa nazariyasi' - asosiy tushunchalar (12 daq)",
                  "subsections": [
                    {
                      "title": "JAMOA PSIXOLOGIYASI VA PEDAGOGIKASI",
                      "points": [
                        "I. ASOSIY TUSHUNCHALAR:",
                        "GURUH - bir joyda to'plangan odamlar (avtobus, navbat). Minimal aloqa, Umumiy maqsad yo'q, Bir-biriga bog'liq emas.",
                        "JAMOA - umumiy maqsad uchun birgalikda ishlovchi odamlar. Kuchli aloqa va o'zaro bog'liqlik, Aniq umumiy maqsad, Rol taqsimoti, Ishonch va hurmat, Birgalikda mas'uliyat.",
                        "II. JAMOA XUSUSIYATLARI (Katzenbach & Smith):",
                        "1. Kichik hajm (5-15 kishi). Boshlang'ich sinf: 20-30 - katta, lekin mumkin.",
                        "2. To'ldiruvchi ko'nikmalar. Har kim o'ziga xos qobiliyat.",
                        "3. Umumiy maqsad va yondashuv. 'Biz eng yaxshi sinf bo'lamiz!'",
                        "4. O'zaro mas'uliyat. Hammamiz birgalikda javobgarmiz.",
                        "5. Natijaga yo'naltirilganlik. Faqat jarayon emas, yutuq muhim.",
                        "III. JAMOA ROLLARI (Belbin, 1981):",
                        "ACTION-ORIENTED: SHAPER - maqsadga harakat, qiyinchilikni yengish. IMPLEMENTER - rejani amalga oshirish, tartib. COMPLETER-FINISHER - mukammallik, tugatish.",
                        "PEOPLE-ORIENTED: COORDINATOR - guruhni boshqarish, delegatsiya. TEAM WORKER - hamkorlik, qo'llab-quvvatlash. RESOURCE INVESTIGATOR - tashqi aloqalar, yangiliklar.",
                        "THOUGHT-ORIENTED: PLANT - ijodiy g'oyalar, innovatsiya. MONITOR-EVALUATOR - tanqidiy tahlil, xolislik. SPECIALIST - chuqur bilim, ekspert.",
                        "Boshlang'ich sinfda: Bolalar turli rollarni sinab ko'radi. O'qituvchi: har rolga imkoniyat berish.",
                        "IV. MAKARENKO JAMOA TARBIYASI TAMOYILLARI:",
                        "1. Perspektiva (maqsad): Yaqin, o'rta, uzoq. 'Bugun - sinf bayramı. Bu oy - musobaqa. Bu yil - eng yaxshi sinf!'",
                        "2. Jamoa va shaxs: Kuchli jamoa → Kuchli shaxs. Jamoa shaxsni tarbiyalaydi, lekin shaxs ham erkin rivojlanadi.",
                        "3. Parallel talablar: Jamoaga talabni qo'y, jamoa shaxsga uzatadi. O'qituvchi → Jamoa → Shaxs.",
                        "4. An'analar: Doimiy marosimlar jamoa ruhini mustahkamlaydi. Tug'ilgan kun, hafta oxiri doirasi, chorak bayramlari.",
                        "5. O'z-o'zini boshqarish: Jamoada demokratiya. Sinf kengashi, saylov, qarorlar.",
                        "V. BOSHLANG'ICH SINFDA JAMOA XUSUSIYATLARI:",
                        "YOSHGA XOS: 6-10 yosh: Tengdoshlar ahamiyati o'sadi, Do'stlik - muhim ehtiyoj, Jamoa o'yinlari - sevimli faoliyat, O'qituvchi - hali ham katta avtoritet, Ishonch va xavfsizlik - zarurat.",
                        "QIYINCHILIKLAR: Egosentrizm (o'zini markaz deb bilish), Hamkorlik ko'nikmalari zaif, Konfliktni hal qilish bilmaydi, Guruhlar va 'yoqtirmayman' muammosi, Liderlik uchun raqobat.",
                        "O'QITUVCHI ROLI: Jamoa yaratuvchi, Munosabatlarni nazorat qiluvchi, Har kimni qo'llab-quvvatlovchi, Ziddiyatni hal qiluvchi, Ijobiy muhit yaratuvchi."
                      ]
                    }
                  ]
                },
                {
                  "heading": "MATN 2: 'Sinf jamoasini shakllantirish bo'yicha amaliy tavsiyalar' (8 daq)",
                  "subsections": [
                    {
                      "title": "KUCHLI SINF JAMOASINI YARATISH: 20 TA AMALIY STRATEGIYA",
                      "points": [
                        "TANISHUV VA ISHONCH (Sentyabr-Oktyabr): 1. Qiziqarli tanishuv o'yinlari ('To'p o'yini', 'Ismim va yaxshi tomonim'). 2. 'Bizning sinf' ni yaratish (Nom, shior, ramz, bayroq tanlash (bolalar ovozi!)). 3. Sinf qoidalari - birgalikda (O'qituvchi diktatura emas, birgalikda yaratamiz). 4. Sinf burchagini bezash (Hammaning rasm/iishi). 5. 'Mening do'stlarim' doirasi (Har kuni yangi do'st topish challenge).",
                        "HAMKORLIK VA MULOQOT (Noyabr-Dekabr): 6. Jamoaviy o'yinlar (Sport, aql, ijodiy - raqobat emas, hamkorlik!). 7. Juftlik va guruh ishlari (Har darsda kamida 1 ta guruh faoliyati). 8. 'Yordam qo'li' tizimi (Har kim har haftada kimgadir yordam beradi). 9. 'Sinf xazinasi' - umumiy maqsad (Birgalikda nimadir yig'amiz/yaratamiz). 10. Muloqot doirasi - har kuni (10 daqiqa: 'Bugun nima yaxshi? Nimaga minnatdormiz?').",
                        "MAQSAD VA YUTUQ (Yanvar-Fevral): 11. Sinf maqsadi belgilash ('Bu chorakda eng ko'p kitob o'qiymiz!'). 12. Muvaffaqiyat taxtasi (Har yutuq - yulduzcha, to'plash - mukofot). 13. Sinf loyihalari ('Bizning sinf muzeyi', 'Daraxt ekamiz'). 14. Musobaqalarda ishtirok (Maktab, tuman - jamoa sifatida). 15. Yutuqlarni nishonlash (Kichik bayram, diploma, rasm).",
                        "AN'ANALAR VA MADANIYAT (Mart-May): 16. Sinf bayramlari (Tug'ilgan kun, Navruz, Sinf yil kuni). 17. Sinf an'analari ('Hafta oxiri doirasi', 'Oyning yulduzi'). 18. Sinf jurnali/blog (Rasmlar, hikoyalar, xotiralar). 19. Ota-onalar ishtiroki (Ota-onalar ham jamoa a'zosi!). 20. Xayrlashuv va refleksiya (Iyun) ('Biz nimalarga erishdik? Nima o'rgandik?').",
                        "ESLATMA: Bu strategiyalar - bu taklif. Har sinf noyob. Bolalaringizni tinglang, ularning ehtiyojlarini his qiling!"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Yozish mashqlari (5 daq)",
              "tasks": [
                "1. Jamoa diagnostikasi (3 daq): Sinfingiz (yoki tasavvur qiling) - qaysi bosqichda? (Jadval to'ldirish: Bosqich, Belgilar, Bizning sinf? – Forming, Storming, Norming, Performing).",
                "2. Refleksiv savol (2 daq): 'Mening ideal jamoam qanday bo'lishi kerak?' (5 ta xususiyat)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "5. TEXNOLOGIYA (20 daq)",
          "content": [
            {
              "type": "VOSITA 1: ClassDojo - Sinf boshqarish platformasi (6 daq)",
              "details": [
                "O'rnatish va sozlash: 1. Account yaratish - Teacher profile. 2. Sinf qo'shish - '2-A sinf'. 3. O'quvchilar qo'shish - Har biri avatar tanlaydi (qiziqarli monster). 4. Positive xatti-harakat kategoriyalari: Darsda faol ishtirok (+1 ball), Do'stga yordam (+2 ball), Uy vazifasi bajarilgan (+1 ball), O'z vaqtida keldi (+1 ball), Ijodiy ish (+2 ball). 5. Jamoa maqsadlari: Haftalik: 100 ball = Qo'shimcha tanaffus, Oylik: 500 ball = Pizza party.",
                "Ota-onalar integratsiyasi: Har ota-ona o'z bolasini ko'radi, Kundalik yangilanish, O'qituvchi xabar yuboradi.",
                "Namoyish: Real-time ball berish (proyektor orqali)."
              ]
            },
            {
              "type": "VOSITA 2: Trello - Sinf loyihalari va vazifalar (4 daq)",
              "details": [
                "Board yaratish: '2-A Sinf Jamoasi'.",
                "Lists (ustunlar): 1. REJALAR - nima qilishimiz kerak? 2. BAJARILAYOTGAN - hozir ustida ishlanmoqda. 3. TUGALLANGAN - bajarildi!.",
                "Cards (kartochkalar) - vazifalar: 'Sinf burchagini bezash' (Checklist: Rang tanlash, rasm chizish, yopishtirish, Mas'ul: Jamshid, Malika, Sardor, Deadline: 15-Sentyabr, Rasm biriktirish). 'Navruz tadbiri tayyorlash' (Checklist: Dastur, bezak, ovqat, o'yin, Mas'ul: Barcha (4 ta guruh), Comments: Fikr almashish).",
                "Bolalar ko'radi: Vazifalar aniq, Kim nima qiladi?, Qachon tugashi kerak?, Collaboratsiya."
              ]
            },
            {
              "type": "VOSITA 3: Flipgrid - Video muloqot platformasi (5 daq)",
              "details": [
                "Topic yaratish: 'Bizning sinf - eng yaxshi sinf!'.",
                "Vazifalar: 1. Tanishish (Sentyabr): Prompt: 'Mening ismim... va men ushbu sinfda bo'lganimdan xursandman, chunki...', 30 soniya video. Hamma ko'radi, va izoh qoldiradi. 2. Refleksiya (har oy): 'Bu oy mening eng yaxshi xotiram...', Video yozish, Ijobiy atmosfera. 3. Maqtovlar (doimiy): 'Men ... ni maqtamoqchiman, chunki u...', Bir-birini qo'llab-quvvatlash.",
                "Afzallik: Introvert bolalar ham o'z ovozini topadi, Kamera oldida gapirish - ko'nikma, Xotiralar arxivi."
              ]
            },
            {
              "type": "VOSITA 4: Kahoot / Quizizz - Jamoa o'yinlari (3 daq)",
              "details": [
                "'Bizning sinf' viktorinasi: Savol turlari: 1. 'Sinfimizda nechta qiz bor?' 2. 'Bizning sinf shiori nima?' 3. 'Eng ko'p kitob kim o'qidi?' 4. 'Kim eng ko'p yordam berdi?' (ovoz berish).",
                "Jamoa rejimi: Bolalar 4-5 kishilik jamoa, Birgalikda javob beradi, Raqobat + Hamkorlik."
              ]
            },
            {
              "type": "VOSITA 5: Google Forms - So'rov va feedback (2 daq)",
              "details": [
                "Oylik 'Bizning sinf' so'rovi: BIZNING SINF - QANDAY? 1. Men bu sinfda o'zimni qanday his qilaman? (emoji scale). 2. Mening eng yaxshi do'stim: [Dropdown: barcha bolalar]. 3. Men kimga ko'proq yordam bera olaman? [Dropdown]. 4. Sinfimizda nimani o'zgartirish kerak? [Open text]. 5. Men sinfimdan faxrlanaman (1-10) [Scale].",
                "Natijalar: O'qituvchi tahlil qiladi, zarur o'zgarishlar kiritadi."
              ]
            }
          ]
        },
        {
          "sectionTitle": "MUSTAQIL ISH",
          "content": [
            {
              "type": "1. JAMOA SHAKLLANTIRISH STRATEGIYASI (O'qish/Yozish - 3000 so'z)",
              "details": [
                "Konkret sinf: 1-sinf, 1-sentyabr boshlanadi.",
                "To'liq yillik reja: Sentyabr - Iyun (36 hafta).",
                "Har oy uchun: Maqsad (Tuckman bosqichi), 4-5 ta asosiy faoliyat (Team-building, An'analar).",
                "Diagnostika (Sotsiometriya, So'rov), Muammolar va yechimlar, Oila va mahalla hamkorligi.",
                "Nazariy asos: Makarenko, Tuckman, Belbin.",
                "Amaliy strategiyalar: 20 tadan foydalanish.",
                "Baholash: Jamoa salomatligi indikatorlari."
              ]
            },
            {
              "type": "2. JAMOA DIAGNOSTIKA LOYIHASI (Vizual + Texnologiya)",
              "details": [
                "Konkret sinf tanlang (real yoki tasavvuriy).",
                "3 ta diagnostika qo'llash: Sotsiometriya: 'Kim kim bilan do'st?' (Yonma-yon network diagramma), Jamoa iqlimi so'rovi: Google Forms (10 savol, 25 bola), Kuzatuv protokoli: 1 hafta, har kun 2 ta hodisa.",
                "Tahlil hisoboti (1500 so'z): Jamoa holati (Tuckman qaysi bosqich?), Kuchli va zaif tomonlar, Muammoli bolalar/guruhlar, Liderlar va izolyatsiya qilinganlar, 3 oylik harakat rejasi.",
                "Vizual taqdimot: Grafiklar, diagrammalar, Canva."
              ]
            },
            {
              "type": "3. TEAM-BUILDING FAOLIYATLAR BANKI (Audio + Kinestetik)",
              "details": [
                "30 ta turli o'yin va mashq.",
                "Kategoriya: Tanishuv (5 ta) - Sentyabr, Ishonch (5 ta) - Oktyabr, Muloqot (5 ta) - Noyabr, Hamkorlik (5 ta) - Dekabr, Muammoli hal qilish (5 ta) - Yanvar, Ijodkorlik (5 ta) - Fevral+.",
                "Har biri uchun: Nomi va maqsadi, Yosh (qaysi sinf?), Vaqt va materiallar, Qadamma-qadam ko'rsatma (yozma), Audio tushuntirish (2-3 daq MP3), Video demo (agar mumkin bo'lsa), Refleksiya savollari."
              ]
            },
            {
              "type": "4. VIDEO KEYS-STADI (Kinestetik - 10 daq)",
              "details": [
                "Mavzu: 'Muammoli sinf → Kuchli jamoaga transformatsiya'.",
                "3 ta sahna: Sahna 1: Muammo (guruhlar, ziddiyat, bulling, yolg'izlik), Sahna 2: O'qituvchi aralashuvi (strategiyalar qo'llash), Sahna 3: Natija (kuchli, qo'llab-quvvatlovchi jamoa).",
                "Aktyorlik: Talabalar (o'qituvchi va bolalar rollari).",
                "Real vaziyatlardan ilhom olish.",
                "Subtitles va izohlar.",
                "YouTube / Google Drive'ga joylashtirish."
              ]
            },
            {
              "type": "5. RAQAMLI JAMOA PLATFORMASI (Texnologiya)",
              "details": [
                "Google Sites: '2-A Sinf Jamoasi' vebsayti.",
                "Sahifalar: Bosh sahifa: 'Bizning sinf - eng zo'r!', Bizning jamoa: Har bolaning profili (rasm, 3 ta hobby), Yangiliklar: Blog (haftalik yangilanish), Galereya: Rasmlar va videolar, Yutuqlar: Diplom, sovrinlar, reytinglar, Loyihalar: Trello embed, Ota-onalar: Yangiliklar, so'rovlar (Google Forms), Aloqa: O'qituvchi bilan bog'lanish.",
                "ClassDojo / Flipgrid integratsiya.",
                "Responsive dizayn.",
                "QR kod (osongina kirish).",
                "Topshirish: 3 hafta."
              ]
            }
          ]
        },
        {
          "sectionTitle": "XULOSA",
          "content": [
            "KUCHLI JAMOA = MUVAFFAQIYAT",
            "ISHONCH ↓ MULOQOT ↓ HAMKORLIK ↓ NATIJA",
            "1-sinf → Begonalar",
            "4-sinf → Do'stlar, Jamoa!",
            "Jamoa - tarbiyaning eng kuchli vositasi (Makarenko).",
            "Jamoa - jarayon, avtomatik emas.",
            "Tuckman bosqichlari: Forming → Performing.",
            "O'qituvchi - jamoa arxitektori.",
            "Har bola - jamoa a'zosi, muhim va qadrlangan.",
            "Texnologiya - zamonaviy boshqarish vositasi."
          ]
        }
      ]
    },
    {
      "id": "maruza-7-ekologik-ong-madaniyat",
      "title": "MA'RUZA 7: Boshlang'ich sinf o'quvchilarida ekologik ong va madaniyat shakllantirishning o'ziga xos jihatlari",
      "duration": "90 daqiqa",
      "sections": [
        {
          "sectionTitle": "1. VIZUAL (10 daq)",
          "content": [
            {
              "type": "Slayd-prezentatsiya",
              "details": [
                "EKOLOGIK TARBIYA DOIRASI",
                "GLOBAL (Planetamiz) ↓ MILLIY (O'zbekiston) ↓ MAHALLIY (Maktab, uy) ↓ SHAXSIY (Men o'zim)",
                "Bronfenbrenner ekologik tizim: Mikro → Mezo → Ekzo → Makro → Xrono"
              ]
            },
            {
              "type": "Infografikalar",
              "details": [
                "O'zbekiston ekologik muammolari xaritasi: Aral dengizi fojiasi, Suv tanqisligi, Havo ifloslanishi, Chiqindilar muammosi, O'rmonlarning kamayishi.",
                "Ekologik piramida: HARAKAT (Men nima qilaman?) ↓ HIS-TUYG'U (Tabiatni sevaman) ↓ BILIM (Ekologiyani bilaman).",
                "3R konsepsiyasi: Reduce (Kamaytirish) → Reuse (Qayta foydalanish) → Recycle (Qayta ishlash).",
                "Ekologik kalendar: 12 oy - 12 ta ekologik tadbir."
              ]
            },
            {
              "type": "Video",
              "details": [
                "'Aral dengizi: Kecha va bugun' (4 daq)",
                "'Bolalar tabiatni qutqarmoqda' - xalqaro loyihalar (3 daq)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "2. AUDIO (10 daq)",
          "content": [
            {
              "type": "PODKAST: 'Yashil sayyora - bizning uyimiz'",
              "parts": [
                {
                  "QISM": "1: Ekologik muammolar - bolalarga tushunish (4 daq)",
                  "speaker": "[Ekolog - Dr. Rahimov Aziz]",
                  "text": "'Balalar, tasavvur qiling: Yerda 7 milliard inson. Har bir inson har kuni 1 kg axlat tashlaydi. Bir kunda - 7 milliard kg! Bir yilda? O'zbekistonda eng katta muammo - SUV. Bizda daryo, ko'l ko'p edi. Endi - kam. Nima uchun? Aral dengizi fojiasi: 1960-yil: Aral - dunyodagi 4-chi katta ko'l. Baliqlar, qushlar, hayot. 2020-yil: Aral 90% yo'qolgan. Tuz bo'roni, cho'l, kasalliklar. Sabab: Paxta ekish uchun suv - ko'p. Paxta yaxshi, lekin Aral yo'qoldi. Nima qilish kerak? Suvni tejash - har bir tomchi qimmat! Daraxt ekish - daraxtlar suv saqlaydi. Chiqindilarni to'g'ri tashlash. Energiyani tejash - elektr, benzin. Eslab qoling: Kichik harakatlar → Katta o'zgarishlar!'",
                  "summary": "Global va O'zbekiston miqyosidagi ekologik muammolar (Aral dengizi fojiasi) va ularni hal qilish bo'yicha kichik harakatlarning ahamiyati."
                },
                {
                  "QISM": "2: Tabiat hikoyasi - 'Bir tomchi suvning sayohati' (3 daq)",
                  "speaker": "[Dramatik audio-hikoya, bolalar ovozi]",
                  "text": "'Salom! Men Tomchiman. Bir tomchi suv. Men Tyan-Shan tog'larida tug'ildim. Qor bo'lib yog'dim. Keyin eriydim va daryo bo'ldim - Syrdaryo! Syrdaryo orqali Aral dengiziga oqib bordim. Yo'lda paxta dalalariga kirdim. Bolalar meni g'amxo'rlik bilan ishlatdi - raxmat! Keyin men chanqoq tuproqqa kirib, paxta o'simligiga yordam berdim. Paxta o'sdi - chiroyli! Lekin... men Aral dengiziga yetib bormaдim. Men paxta dalasida qoldim. Aral dengizi meni kutib qoldi, lekin men kelmadim. Endi Aral kichkina. U achınadi: 'Mening tomchilarim qayerda?' Bolalar, iltimos, suvni tejang! Har bir tomchi - jonli!'",
                  "summary": "Suvning tabiatdagi sayohati va Aral dengizining taqdiri haqida bolalar uchun dramatik audio-hikoya."
                },
                {
                  "QISM": "3: Yosh ekologlarning ovozi (3 daq)",
                  "speaker": "[Bolalar intervyusi - 3 ta bola]",
                  "text": "Malika (8 yosh): 'Men har kuni maktabdan uyga qaytganda 1 ta axlatni ko'rsam, olib chiqindilar qutisiga tashlayman. Kichkina ish, lekin ko'cha toza!' Javohir (9 yosh): 'Bizning sinf 10 ta daraxt ekdik. Ularni biz parvarishlayapmiz. Har haftada suv quyamiz. Daraxtlarim o'sib borayotganini ko'rish - baxt!' Dildora (10 yosh): 'Men qog'oz, plastik, shisha - alohida yig'aman. Ota-onam deydi: 'Bekorga'. Men deyman: 'Yo'q! Bu Yer uchun muhim!' Ular endi meni tinglashyapti.'",
                  "summary": "Bolalarning ekologik ongini va ularning kundalik hayotdagi kichik ekologik harakatlarini ko'rsatuvchi intervyular."
                }
              ]
            }
          ]
        },
        {
          "sectionTitle": "3. KINESTETIK (15 daq)",
          "content": [
            {
              "type": "Mashq 1: 'Ekologik zanjir' o'yini (6 daq)",
              "details": [
                "Tushuntirish: Tabiatda hamma narsa bir-biriga bog'liq - ekologik zanjir!",
                "O'yin: Bolalar doira bo'lib turishadi. Har biriga rol beriladi: Quyosh, O'simlik, Hashorat, Qush, Mushuk, Suv, Havo, Inson.",
                "Jarayon: 1. O'qituvchi: 'Quyosh!' - Quyosh qo'l cho'zadi. 2. 'O'simlik Quyoshga bog'liq!' - O'simlik Quyoshning qo'lidan ushlaydi. 3. 'Hashorat O'simlikni eydi!' - Hashorat O'simlikning qo'lidan ushlaydi. 4. Va hokazo... Hamma birlashdi - ekologik zanjir!.",
                "Dramatik moment: O'qituvchi: 'Inson suvni ifloslantirdi!' - Suv qo'lini qo'yib yuboradi. Natija: Zanjir uziladi, hamma yiqiladi!.",
                "Xulosa: Agar bitta halqa buzilsa - barchasi buziladi!"
              ]
            },
            {
              "type": "Mashq 2: 'Chiqindilarni saralash' harakatli o'yin (5 daq)",
              "details": [
                "Tayyorlov: 4 ta quti (yoki doira) turli ranglarda: Ko'k - Qog'oz, Sariq - Plastik, Yashil - Organik (meva, sabzavot), Qizil - Umumumiy (boshqalar).",
                "O'yin: 20-30 ta 'chiqindi' kartochkasi (yoki real narsalar). Bolalar 2 ta jamoaga bo'linadi. Estafeta: Yugurib borish → 1 ta chiqindini olish → To'g'ri qutiga tashlash → Qaytish. Qaysi jamoa tez va to'g'ri saralaydi?.",
                "Muhokama: Qaysi chiqindini saralash qiyin edi? Nima uchun saralash muhim? Uyda ham shunday qila olamizmi?"
              ]
            },
            {
              "type": "Mashq 3: 'Daraxt' meditatsiya va vizualizatsiya (4 daq)",
              "details": [
                "Jarayon: 1. Bolalar bekor joyda turishadi, ko'z yumishadi. 2. O'qituvchi ohista gapiradi: 'Tasavvur qiling, siz - daraxtsiz. Sizning ildizlaringiz chuqur, tuproqda. Siz yerdan ozuqa olasiz... his qiling... Sizning tanangiz - kuchli tanasi. Shamol esadi, siz qimirlaysiz, lekin qulaysiz. Sizning shoxlaringiz - osmonga. Quyosh sizga nur beradi... issiq... Siz nafas olasiz: karbonat angidridni olasiz, kislorod berasiz. Siz havo tozalaysiz! Sizning barglaringiz - yashil, go'zal. Qushlar sizda uyasi yasaydi. Bolalar sizning soyangizda o'ynaydi. Siz - daraxt. Siz - hayot. Siz - zarursiz... Endi ko'zingizni oching. Siz yana odamsiz. Lekin daraxtlarni tushunasiz!'",
                "Refleksiya: 'Nima his qildingiz?'"
              ]
            }
          ]
        },
        {
          "sectionTitle": "4. O'QISH/YOZISH (25 daq)",
          "content": [
            {
              "type": "O'qish materiallari",
              "sections": [
                {
                  "heading": "MATN 1: 'Ekologik tarbiya: nazariya va amaliyot' (12 daq)",
                  "subsections": [
                    {
                      "title": "BOSHLANG'ICH SINFDA EKOLOGIK TARBIYA",
                      "points": [
                        "I. NAZARIY ASOSLAR:",
                        "EKOLOGIK TARBIYA - bu tabiat va inson o'rtasidagi munosabatlarni tushunish, tabiatni qadrlash va asrash ko'nikmalarini shakllantirish jarayoni.",
                        "Asosiy tushunchalar: EKOLOGIYA - tirik organizmlar va muhit o'rtasidagi munosabatlar ilmi. EKOLOGIK ONG - tabiatni asrash zarurligini anglash. EKOLOGIK MADANIYAT - amalda tabiatni asrash xatti-harakatlari. BARQAROR RIVOJLANISH - kelajak avlod uchun resurslarni saqlash.",
                        "II. YOSH XUSUSIYATLARI VA EKOLOGIK TARBIYA:",
                        "6-7 YOSH (1-sinf): Konkret fikrlash - real narsalar, hayvonlar, o'simliklar. Emotsional: Tabiatga his-tuyg'u orqali yondashish. Taqlid: O'qituvchi va ota-ona namunasi. Mazmun: 'Tabiat - mening do'stim'. O'simliklar va hayvonlarni parvarish qilish, Axlatni to'g'ri tashlash, Suvni tejash (oddiy harakatlar).",
                        "8-9 YOSH (2-3-sinf): Sabab-oqibat aloqalarini tushuna boshlaydi. Kuzatuvchanlik rivojlanadi. Tajriba qilishga qiziqadi. Mazmun: 'Tabiat va men - birgamiz'. Ekologik zanjirlar, Mahalliy ekologik muammolar, Amaliy loyihalar (daraxt ekish, hashar), Energiya va suv tejash.",
                        "10-11 YOSH (4-sinf): Abstrakt tushunchalarni tushunadı. Global muammolarga qiziqish. Mas'uliyat hissi rivojlanadi. Mazmun: 'Men - planetaning fuqarosi'. Global ekologik muammolar (iqlim, okean), O'zbekiston ekologik holati (Aral), Ekologik yo'nalishli kasblаr, Uzоqmuddatli loyihalar.",
                        "III. EKOLOGIK TARBIYA METODLARI:",
                        "1. KUZATUV - Tabiatni bevosita o'rganish (Fasllar o'zgarishi, hayvonlar xatti-harakati, Kundalik yoki jurnal yuritish).",
                        "2. AMALIY ISH - Qo'l bilan faoliyat (Bog'da, maktab hududida, O'simlik parvarishi, axlat yig'ish).",
                        "3. TAJRIBA - Ilmiy metod (Suv filtrlash, tuproq tarkibi, Gipoteza → Test → Xulosa).",
                        "4. EKSKURSIYA - Tabiatga chiqish (O'rmon, park, daryo, muzey, Real muhit kuzatuvi).",
                        "5. LOYIHA - Uzoq muddatli ish ('Maktabimizni yashillashtirish', 'Suv tejash kampaniyasi').",
                        "6. O'YIN - Qiziqarli o'rganish (Rol o'yini: 'Men daraxtman', Viktorina: 'Ekologiya olis').",
                        "7. MEDIA - Zamonaviy vositalar (Video, foto, prezentatsiya, Ekologik bloglar).",
                        "IV. EKOLOGIK MADANIYAT KO'NIKMALARI:",
                        "BILISH: Tabiat qonunlari, Ekologik muammolar, Yechimlar va imkoniyatlar.",
                        "HIS QILISH: Tabiatga mehr, Mas'uliyat hissi, Tabiatni asrashga motivatsiya.",
                        "QILISH: Kundalik ekologik harakatlar, Axlatni saralash, Suv va energiya tejash, Ekologik loyihalarda ishtirok.",
                        "V. AMALIY TADBIRLAR (Yillik kalendar):",
                        "SENTYABR: 'Maktabimiz - yashil oazis' (Sinf xonasini o'simliklar bilan bezash).",
                        "OKTYABR: 'Kuzatish oyi' (Kuz tabiati kuzatuvi, Barglar albomi).",
                        "NOYABR: 'Qushlar - do'stlarimiz' (Qush uylarini yasash va osish).",
                        "DEKABR: 'Yangi yil - ekologik!' (Qayta ishlab, bezaklar yasash).",
                        "YANVAR: 'Qor va suv' (Qor tajribalari, Suv ahamiyati).",
                        "FEVRAL: 'Energiya tejash' ('Yorug'likni o'chir!' aksiyasi).",
                        "MART: 'Suv - hayot manbayi' (22-Mart - Suv kuni) (Suv tejash plakatlari, Kampaniya).",
                        "APREL: 'Yer kunı' (22-Aprel) (Maktab hashari, Axlat yig'ish).",
                        "MAY: 'Daraxt ekish oyi' (Har sinf - 1 daraxt).",
                        "IYUN: 'Yashil yoz' (Yozgi loyihalar rejasi).",
                        "VI. OTA-ONALAR VA MAHALLA BILAN HAMKORLIK:",
                        "OILA: 'Ekologik oila' challenge - 30 kun, Uyda energiya va suv tejash, Chiqindilarni saralash, Tabiatga sayohatlar.",
                        "MAHALLA: Mahalla hashari, Umumiy bog' yoki park yaratish, 'Yashil mahalla' musobaqasi.",
                        "VII. BAHOLASH: Baho yo'q! Kuzatuv, tavsif, rag'batlantirish.",
                        "Mezonlar: Bilim: Ekologik tushunchalar, muammolar. Munosabat: Tabiatga mehr, qayg'u. Xatti-harakat: Kundalik ekologik harakatlar. Faollik: Loyiha va tadbirlarda ishtirok.",
                        "Vositalar: Portfolio: Rasmlar, fotosuratlar, loyihalar. Ekologik kundalik: Kuzatishlar jurnali. O'z-o'zini baholash: 'Men nima qildim?'"
                      ]
                    }
                  ]
                },
                {
                  "heading": "MATN 2: 'Aral dengizi fojiasi - bolalar uchun' (8 daq)",
                  "subsections": [
                    {
                      "title": "ARAL DENGIZI: TABIATNING FARYODI",
                      "points": [
                        "OLDIN: 1960-yil - Aral dengizi - dunyodagi 4-chi katta ko'l. Maydoni: 68,000 km² (O'zbekistonning 1/7 qismi!). Baliqlar: 20+ turi, 40,000 tonna/yil. Aholisi: 60,000 baliqchi va oilalari. Tabiat: O'rmonlar, qushlar, ajoyib iqlim.",
                        "NIMA BO'LDI: 1960-1990-yillar - Paxta - 'oq oltin' kerak edi. Amudaryo va Syrdaryo suvini paxta dalalariga yo'naltirdilar. Har yili kamroq suv Aralga keldi. Dengiz hajmi kamaya boshladi.",
                        "HOZIR: 2020-yil - Aral 90% yo'qolgan! O'rnida - cho'l. Tuz bo'ronlari - 100 km uzoqqa. Aholisi kasal (nafas, oshqozon). Baliqchilik yo'q. Ekologik fojia.",
                        "SABAB VA OQIBATLAR: SABAB: Suv noto'g'ri boshqaruvi, Paxta uchun - juda ko'p suv, Tabiatga e'tiborsizlik. OQIBATLAR: Dengiz yo'qolishi, Iqlim o'zgarishi (yozda issiqroq, qishda sovuqroq), Kasalliklar, Iqtisodiy zarar (baliqchilik, transport), Ajdod yurtlarining yo'qolishi.",
                        "YECHIMLAR VA UMIDLAR: O'ZBEKISTON HARAKATLARI: Dengiz tubiga daraxt ekish (2019 - 1.1 milyon daraxt!). Suvni tejash texnologiyalari. Xalqaro hamkorlik (BMT, UNICEF). 'Orol' maxsus fondi. BOLALAR NIMA QILA OLADI: 1. Suvni tejash - har bir tomchi qimmat! 2. Daraxt ekish va parvarishlash. 3. Odamlarni xabardor qilish. 4. Ekologiyani o'rganish. 5. Kelajakda ekolog, injener bo'lish. UMID: Aral to'liq tiklanmaydi. Lekin biz yangi xatolar qilmasligimiz, suvni to'g'ri ishlatsak - kelajak avlodlar uchun tabiatni saqlaymiz!"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Yozish mashqlari (5 daq)",
              "tasks": [
                "1. 'Men ekolog bo'lsam...' esse (3 daq) 5-7 gap yozish: Qanday muammoni hal qilishni xohlayman? Qanday loyiha boshlayman? Odamlarga qanday maslahat beraman?",
                "2. 'Mening ekologik kundaligim' - 1 haftalik reja (2 daq): Kun, Ekologik harakat, Nimaga olib keldi? (Jadval to'ldirish)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "5. TEXNOLOGIYA (20 daq)",
          "content": [
            {
              "type": "VOSITA 1: Google Earth + Earth Engine - Aral o'zgarishini ko'rish (5 daq)",
              "details": [
                "Amaliy mashq: 1. Google Earth Pro'ni ochish. 2. 'Aral Sea' qidirish. 3. Timelapse funksiyasi: 1984-yil → 2024-yil, Har yilni ko'rsatish, Dengizning kamayib borishini vizual kuzatish. 4. Taqqoslash: Before: 1960 (tarixiy xarita), After: 2024 (hozirgi holat), O'zgarish foizi. 5. Screenshot olish va izoh: '1984: Aral katta edi', '2024: Aral kichkina, cho'l ko'p'.",
                "Muhokama: 'Nima his qildingiz? Nima o'yladingiz?'"
              ]
            },
            {
              "type": "VOSITA 2: iNaturalist - Tabiat kuzatuv mobil ilova (4 daq)",
              "details": [
                "Tanishtiruv: iNaturalist - global ilmiy loyiha. Bolalar tabiatdagi o'simlik va hayvonlarni suratga olishadi. AI (sun'iy intellekt) aniqlaydi - bu qanday tur? Ma'lumotlar olimlar uchun foydali!",
                "Qanday ishlаsh: 1. Mobil ilovani o'rnatish (Android/iOS). 2. Foto olish: O'simlik, hashorat, qush. 3. Ilova avtomatik aniqlaydi. 4. Joylashuvni belgilash (GPS). 5. Platformaga yuklash - global ma'lumotlar bazasi.",
                "Sinf loyihasi: 'Maktabimiz atrofidagi biologik xilma-xillik'. 1 oy - har bola 10 ta foto. Umumiy: Sinf 'biodiversity' xaritasi."
              ]
            },
            {
              "type": "VOSITA 3: Ecosia - Ekologik qidiruv tizimi (3 daq)",
              "details": [
                "Tanishtiruv: 'Qidiruv qilganingiz uchun daraxt ekilsin!'",
                "Ecosia nima? Google kabi qidiruv tizimi. Reklama daromadining 80% - daraxt ekish. Hozirgacha: 150 million+ daraxt! Transparentlik: Qayerga ekilganini ko'rsatadi.",
                "Qanday ishlatish: 1. ecosia.org ochish. 2. Browser'ga Extension o'rnatish. 3. Oddiy qidiruv - Google kabi. 4. Har 45 ta qidiruv = 1 ta daraxt.",
                "Sinf challenge: 'Bu oyda 1000 ta qidiruv = 22 ta daraxt!'"
              ]
            },
            {
              "type": "VOSITA 4: Actionbound - Ekologik 'Scavenger Hunt' yaratish (5 daq)",
              "details": [
                "Tushuntirish: Actionbound - mobil ilovada interaktiv o'yin/topshiriq yaratish platformasi.",
                "Loyiha: 'Maktabimiz - Ekologik kashfiyot'.",
                "Yaratish bosqichlari: 1. Actionbound.com'da account. 2. Yangi 'Bound' yaratish. 3. 10 ta 'station' (bekat) qo'shish: Bekat 1: Maktab hovlisi (Savol: 'Bu yerda nechta daraxt bor?', Vazifa: Daraxtni quchoqlab, foto olish). Bekat 2: Chiqindilar qutisi (Vazifa: Atrofda 5 ta axlat topib, to'g'ri qutiga tashlash, video olish). Bekat 3: Krani (Savol: 'Suvni tejash uchun 3 ta usul?', Audio javob yozish). Bekat 4: Sinf xonasi (Vazifa: O'simlik topish, unga nom qo'yish, foto). Bekat 5: Elektr kaliti (Viktorina: 'Energiya tejash haqida'). [... va hokazo]. 4. QR kod generatsiya qilish. 5. Boshlash: Bolalar mobil ilova orqali skanerlaydi va boshlaydi.",
                "Imkoniyatlar: GPS navigatsiya, Timer (musobaqa), Ball yig'ish, Jamoa ish."
              ]
            },
            {
              "type": "VOSITA 5: Canva - Ekologik poster va infografika (3 daq)",
              "details": [
                "Loyiha: 'Tabiatni qutqaramiz!' kampaniya posterlari.",
                "Namunalar: 1. 'Suvni tejang!' (Rasm: Tomchi, Matn: 'Har bir tomchi qimmat!', 5 ta oddiy maslahat). 2. 'Plastikka YO'Q!' (Rasm: Plastik dengizda, Statistika: Har yili 8 mln tonna plastik, Alternativa: Qog'oz, mato). 3. 'Daraxt - hayot!' (Rasm: Daraxt, Fakt: 1 daraxt yiliga 20 kg CO2 assimilyatsiya qiladi, Chaqiruv: 'Sen ham ek!').",
                "Shablon: Canva'da 'Environmental Poster' qidirish, tahrirlash.",
                "Natija: Posterlarni maktabda osish, IG/Facebook'da ulashish."
              ]
            }
          ]
        },
        {
          "sectionTitle": "MUSTAQIL ISH",
          "content": [
            {
              "type": "1. EKOLOGIK TARBIYA DASTURI (O'qish/Yozish - 3000 so'z)",
              "details": [
                "Konkret sinf: 3-sinf.",
                "To'liq yillik dastur: 36 hafta.",
                "Struktura: Nazariy asos (Ekologik tarbiya nazariyalari), Maqsadlar (Bilim, Munosabat, Xatti-harakat), Haftalik reja (Har hafta: Mavzu, Faoliyat, Metod, Resurs), Fanlararo integratsiya (O'qish, Matematika, San'at), Loyihalar (3 ta yirik: Kuz, Qish, Bahor), Oila hamkorligi, Mahalla va jamiyat aloqalari, Baholash mezonlari va vositalari.",
                "Ilova: 10 ta dars rejasi (batafsil), 20 ta mashq va o'yin, Resurslar ro'yxati."
              ]
            },
            {
              "type": "2. MULTIMEDIYA TAQDIMOT (Vizual + Texnologiya - 25 slayd)",
              "details": [
                "Mavzu: 'Aral dengizi: Fojia va Umid'.",
                "Qismlar: Tarixiy kontekst (1960-yillar), Fojia jarayoni (1960-2020), Hozirgi holat (fotosuratlar, statistika), Oqibatlar (ekologik, ijtimoiy, iqtisodiy), Yechimlar (O'zbekiston harakatlari), Bolalar roli (biz nima qila olamiz?).",
                "Video, audio, interaktiv elementlar.",
                "Google Earth Timelapse integratsiya.",
                "Emotsional ta'sir - his-tuyg'ularni qo'zg'atish."
              ]
            },
            {
              "type": "3. PODKAST SERIYASI (Audio - 4 qism × 10 daq)",
              "details": [
                "Qism 1: 'Ekologiya nima?'",
                "Qism 2: 'O'zbekiston ekologik muammolari'",
                "Qism 3: 'Yosh ekologlar - intervyular'",
                "Qism 4: 'Men nima qila olaman? - Amaliy maslahatlar'",
                "Professional format.",
                "Musiqa, sound effects.",
                "Transkripsiya.",
                "Anchor/SoundCloud'ga joylashtirish."
              ]
            },
            {
              "type": "4. VIDEO LOYIHA (Kinestetik - 10-12 daq)",
              "details": [
                "Mavzu: 'Bizning sinf - Yashil sinf!'.",
                "Qismlar: Intro: Muammo (iflos sinf, axlat), Rejalashtirish: Bolalar munozara, Harakatga o'tish: Tozalash, o'simlik qo'yish, chiqindilarni saralash, Natija: Chiroyli, yashil sinf, Outro: 'Siz ham qila olasiz!'.",
                "Aktyorlik: Haqiqiy bolalar.",
                "Montaj: Tez-tez, energetik.",
                "Subtitles.",
                "YouTube'ga joylashtirish + QR kod (posterda)."
              ]
            },
            {
              "type": "5. INTERAKTIV VEB-LOYIHA (Texnologiya)",
              "details": [
                "Google Sites: 'Ekologik Navigator'.",
                "Sahifalar: Bosh sahifa: 'Tabiatni qutqaramiz!', Muammolar: Aral, Suv, Axlat, Havo (har biri batafsil), Yechimlar: 50 ta oddiy harakat, Loyihalar: Maktab loyihalari galereyasi, Resurslar: Video, kitob, ilovalar ro'yxati, Blog: Haftalik yangilanish, Quiz: Embedded Quizizz - 'Ekologiya bilimini tekshir!', Karta: Google My Maps - O'zbekiston ekologik joylari, Harakat: 'Men 30 kun challenge' - tracker.",
                "iNaturalist, Ecosia, Actionbound integratsiya.",
                "Responsive dizayn.",
                "QR kod - osongina kirish.",
                "Topshirish: 3 hafta."
              ]
            }
          ]
        },
        {
          "sectionTitle": "XULOSA",
          "content": [
            "YASHIL PLANETA - BIZNING UYIMIZ!",
            "BILISH → HIS QILISH → HARAKAT QILISH",
            "Kichik harakatlar ↓ KATTA O'ZGARISHLAR",
            "Har bir bola - Tabiat qo'riqchisi!",
            "Ekologik tarbiya - hozir boshlash kerak, kech emas.",
            "Aral fojiasi - ogohlantirish, saboq.",
            "Bolalar - kuchli, ular o'zgartira oladi.",
            "Har kun - ekologik harakat (suv, energiya, axlat).",
            "Oila va jamiyat - hamkorlikda.",
            "Texnologiya - zamonaviy ekologiya vositasi."
          ]
        }
      ]
    },
    {
      "id": "maruza-8-huquqiy-bilim-madaniyat",
      "title": "MA'RUZA 8: O'quvchilarda huquqiy bilim va madaniyat shakllantirishning pedagogik-psixologik asoslari",
      "duration": "90 daqiqa",
      "sections": [
        {
          "sectionTitle": "1. VIZUAL (10 daq)",
          "content": [
            {
              "type": "Slayd-prezentatsiya",
              "details": [
                "HUQUQIY TARBIYA PIRAMIDASI",
                "FUQAROLIK FAOLIYATI (Men ishtirok etaman)",
                "HUQUQ MADANIYATI (Men qonunlarga amal qilaman)",
                "HUQUQIY BILIM (Men huquqlarimni bilaman)",
                "ASOSIY QADRIYATLAR (Adolat, Tenglik, Hurmat, Erkinlik)",
                "Kohlberg AXLOQIY RIVOJLANISH nazariyasi: 1. Jazo va itoat → 2. Shaxsiy manfaat → 3. Ijtimoiy kelishuv → 4. Qonun va tartib → 5. Ijtimoiy shartnoma → 6. Universal prinsiplar"
              ]
            },
            {
              "type": "Infografikalar",
              "details": [
                "Bolalar huquqlari (BMT Konventsiyasi): Oila huquqi, Ta'lim huquqi, Salomatlik huquqi, Himoya huquqi, O'yin va dam olish, O'z fikrini bildirish.",
                "Huquq va Majburiyat muvozanati: HUQUQLAR - MAJBURIYATLAR (Men gapirish huquqiga egaman - Men boshqalarni tinglash majburiyatiman).",
                "Demokratiya tamoyillari boshlang'ich sinfda: Ovoz berish (saylov), Ko'pchilik qarori, Kamchilikni hurmat qilish, Murosaga kelish."
              ]
            },
            {
              "type": "Video",
              "details": [
                "'Bolalar huquqlari - animatsiya' (4 daq)",
                "'Maktabda demokratiya' - bolalar parlamenti (3 daq)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "2. AUDIO (10 daq)",
          "content": [
            {
              "type": "PODKAST: 'Huquq - bu nima va nima uchun muhim?'",
              "parts": [
                {
                  "QISM": "1: Oddiy tilda - Huquq va Qonun (4 daq)",
                  "speaker": "[Huquqshunos - Advokat Karimova Dildora]",
                  "text": "'Salom bolalar! Men advokat - odamlarga huquq masalalarida yordam beraman. HUQUQ - bu qoidalar to'plami. Bu qoidalar bizga aytadi: Nima qilish mumkin? Nima qilish mumkin emas? Misol: Sinfda qoidalar bor, to'g'rimi? 'Darsda shovqin qilma', 'Do'stingni urma', 'O'qituvchini hurmat qil'. Bu - sinfning 'qonunlari'! Katta dunyoda ham qoidalar bor - bu QONUNLAR. Qonunlar hammaga tegishli - katta va kichik, boy va kambag'al. Nima uchun qonun kerak? 1. Tartib - qonunsiz tartibsizlik, xaos. 2. Adolat - qonun hammaga bir xil. 3. Xavfsizlik - qonun bizni himoya qiladi. 4. Erkinlik - qonun mening huquqlarimni kafolatlaydi. Muhim: Qonun - bu nafaqat 'qilma!', balki 'sen huquqqa egasan!' Siz - BOLALAR - ham huquqlarga egasiz! BMT (Birlashgan Millatlar Tashkiloti) 1989-yilda 'Bolalar huquqlari konventsiyasi'ni qabul qildi. Bu - bolalar uchun maxsus qonun! O'zbekiston bu konventsiyani imzolagan - bu degani, bizning mamlakatimiz bolalar huquqlarini himoya qiladi!'",
                  "summary": "Huquq va qonun tushunchalari, ularning ahamiyati va BMTning Bolalar huquqlari konventsiyasi haqida ma'lumot."
                },
                {
                  "QISM": "2: Hikoya - 'Adolatli sud' (3 daq)",
                  "speaker": "[Dramatik audio-hikoya]",
                  "text": "'Qadim Samarqandda donolik bilan mashhur qozi yashardi - Qozi Kalon. Bir kun, ikki bola uning oldiga keldi. Biri yig'layapti: Ali: 'Qozi aka, u mening to'pimni oldi!' Vali: 'Yo'q! Bu mening to'pim! U yolg'on gapiradi!' Qozi: 'Ikkingiz ham to'pni o'zingniki deysizlar. Dalil bormi?' Ali: 'Men uni bozordan sotib oldim! Onam bilan!' Vali: 'Men uni tug'ilgan kunimga sovg'a oldim! Bu yerda ismim yozilgan!' Qozi to'pni ko'rdi. Haqiqatan, bir tomonida 'Vali' yozuvi bor. Qozi: 'Vali, bu seniki. Lekin... Ali, sen yig'layapsan. Shunchaki to'pni xohlagansan. Vali, menga bir savol: Sen Ali bilan do'stmisan?' Vali: 'Ha...' Qozi: 'Do'st nima qiladi? U o'rtoqlashadi! Vali, sen Ali bilan birgalikda o'ynasang bo'ladi. To'p ikkovingizniki!' Ikkala bola: 'Raxmat, Qozi aka!' Saboq: Huquq - bu nafaqat 'Mening!' deyish. Bu - birga yashash, o'rtoqlashish, murosaga kelish!'",
                  "summary": "Qozi Kalonning donolik bilan ikkita bolaning to'p ustidagi nizosini hal qilishi va adolatli yechim topishi haqida hikoya."
                },
                {
                  "QISM": "3: Bolalar ovozi - 'Mening huquqlarim' (3 daq)",
                  "speaker": "[3 ta bola intervyusi]",
                  "text": "Zarina (7 yosh): 'Men ta'lim huquqiga egaman. Bu degani - men maktabga borishim kerak va ota-onam meni to'xtata olmaydi. Men o'qishni yaxshi ko'raman!' Bekzod (9 yosh): 'Men o'z fikrimni aytish huquqiga egaman. Uyda, maktabda - meni tinglashlari kerak. Lekin men ham boshqalarni tinglashim kerak - bu mening majburiyatim!' Madina (10 yosh): 'Men himoya huquqiga egaman. Agar kimdir meni xafa qilsa, ursa, yomon gaplarni aytsa - men kattalarга aytishim mumkin. Ular meni himoya qilishlari kerak. Lekin men ham boshqa bolalarga yomon qilmasligim kerak!'",
                  "summary": "Bolalarning o'z huquqlari (ta'lim, fikr bildirish, himoya) haqidagi tushunchalari va ularning majburiyatlari."
                }
              ]
            }
          ]
        },
        {
          "sectionTitle": "3. KINESTETIK (15 daq)",
          "content": [
            {
              "type": "Mashq 1: 'Huquq va Majburiyat tarozisi' (6 daq)",
              "details": [
                "Tayyorlov: 2 ta katta kartochka: 'HUQUQ' (yashil) va 'MAJBURIYAT' (qizil). 10 ta vaziyat kartochkalari.",
                "O'yin: Sinf ikki tomonга bo'linadi. Har tomonда 'HUQUQ' yoki 'MAJBURIYAT' plakat. O'qituvchi vaziyatni o'qiydi. Bolalar qaysi tomonга tegishli deb o'ylashsa, u tomonga yugurishadi.",
                "Vaziyatlar: 'Men o'ynashni xohlayman' → HUQUQ (Dam olish va o'yin). 'Men darsda jimgina o'tirishim kerak' → MAJBURIYAT. 'Men taom olishim kerak' → HUQUQ (Ovqatlanish). 'Men uy vazifasini qilishim kerak' → MAJBURIYAT. 'Men shifokor ko'rigiga borishim mumkin' → HUQUQ (Salomatlik). 'Men do'stimni urolmayman' → MAJBURIYAT (Boshqalarni hurmat qilish).",
                "Muhokama: Ba'zi vaziyatlar - IKKALA tomonga tegishli! Misol: 'Men gapirish' - HUQUQ, lekin 'Boshqalar gapirganida tinglash' - MAJBURIYAT."
              ]
            },
            {
              "type": "Mashq 2: 'Sinf Konstitutsiyasi' yaratish - Demokratik jarayon (7 daq)",
              "details": [
                "Jarayon: Bosqich 1: Munоzara (2 daq) 'Bizning sinfda qanday qoidalar bo'lishi kerak?' (Bolalar fikr bildiradi, O'qituvchi yozib boradi (10-15 ta taklif)).",
                "Bosqich 2: Guruhlash (2 daq) (O'xshash takliflarni birlashtirish. Natija: 5-7 ta asosiy qoida).",
                "Bosqich 3: Ovoz berish (2 daq) (Har qoida uchun ovoz berish (qo'l ko'tarish). Agar 70%+ 'Ha' - qoida qabul qilinadi).",
                "Bosqich 4: Imzolash (1 daq) (Qabul qilingan qoidalar - katta qog'ozda. Hammа imzolaydi - 'Men roziman!'. Sinf devoriga osish).",
                "Namuna qoidalar: 1. Biz bir-birimizni hurmat qilamiz. 2. Biz darsda faol ishtirok etamiz. 3. Biz bir-birimizga yordam beramiz. 4. Biz o'z narsalarimizga g'amxo'rlik qilamiz. 5. Biz muammolarni tinchlik bilan hal qilamiz."
              ]
            },
            {
              "type": "Mashq 3: 'Qozi o'yini' - Adolatli sud simulyatsiyasi (2 daq)",
              "details": [
                "Vaziyat: Ikki bola bir xil rangli qalamni xohlaydi. Qalamda ism yo'q. Ikkalasi ham 'Bu mening!' deydi.",
                "Rollar: 2 ta 'da'vogar' (Ali va Vali), 1 ta 'Qozi' (o'qituvchi yoki faol bola), Qolganlar - 'Hakamlar hay'ati' (ovoz beradi).",
                "Jarayon: 1. Ali o'z dalilini aytadi (2 daq so'zlash). 2. Vali o'z dalilini aytadi (2 daq). 3. Qozi savollar beradi. 4. Hakamlar hay'ati ovoz beradi: Kimning haqli? 5. Qozi qaror qiladi.",
                "Mumkin bo'lgan yechimlar: Agar aniq dalil bo'lsa - huquqi borga berish. Agar dalil yo'q bo'lsa - teng bo'lish yoki navbat bilan foydalanish. Kompromiss - birgalikda ishlatish.",
                "Sabоq: Qonun va sud - bu adolatni topish usuli. Lekin eng yaxshisi - murosaga kelish!"
              ]
            }
          ]
        },
        {
          "sectionTitle": "4. O'QISH/YOZISH (25 daq)",
          "content": [
            {
              "type": "O'qish materiallari",
              "sections": [
                {
                  "heading": "MATN 1: 'Bolalar huquqlari - BMT Konventsiyasi oddiy tilda' (12 daq)",
                  "subsections": [
                    {
                      "title": "BOLALAR HUQUQLARI KONVENTSIYASI (1989, Birlashgan Millatlar Tashkiloti)",
                      "points": [
                        "KIRISH: Bolalar - maxsus himoyaga muhtoj. Ular kattalar emas, shuning uchun alohida huquqlarga ega. 196 mamlakat (O'zbekiston ham!) bu konventsiyani imzolagan - bu degani, ular bolalar huquqlarini himoya qilishga va'da berishgan.",
                        "ASOSIY HUQUQLAR (54 ta modda, eng muhimlari):",
                        "1. HAYOT, OMON QOLISH VA RIVOJLANISH HUQUQI: Har bir bola tirik qolish va to'liq rivojlanish huquqiga ega. Davlat: Tibbiy yordam, oziq-ovqat, ta'lim berishi kerak.",
                        "2. ISM VA FUQAROLIK HUQUQI: Har bir bola tug'ilganda ism va familiya olishi, qaysi davlatga tegishli ekanligini bilishi kerak. Tug'ilganlik to'g'risida guvohnoma.",
                        "3. OILA BILAN BIRGA YASHASH HUQUQI: Bola ota-ona bilan yashashi kerak. Agar oila yo'q bo'lsa - bolalar uyida parvarish.",
                        "4. O'Z FIKRINI BILDIRISH HUQUQI: Bola o'z fikrini ayta oladi. Kattalar bolani tinglashlari kerak. Bola yoshi va etukligiga qarab, uning fikri hisobga olinadi.",
                        "5. TA'LIM HUQUQI: Har bir bola maktabga borishi kerak. Boshlang'ich ta'lim - BEPUL va MAJBURIY. Maktabda jazolashda zo'ravonlik qilish mumkin emas.",
                        "6. O'YIN VA DAM OLISH HUQUQI: Bola o'ynash, dam olish, madaniyat huquqiga ega. Faqat ishlash emas - bola bo'lish ham muhim!",
                        "7. SALOMATLIK HUQUQI: Bola shifokorga ko'rinishi, dori olishi mumkin. Davlat: Tibbiy xizmat bepul yoki arzon bo'lishi kerak.",
                        "8. HIMOYA HUQUQI: Bola zo'ravonlik, ekspluatatsiya, kamsitishdan himoyalangan. Agar biror kishi bolani xafa qilsa, ursa, yomon ishlatsa - bu jinoyat!",
                        "9. MAXSUSLIKKA EGA BOLALAR HUQUQLARI: Nogironlik, kasallik, maxsus ehtiyojlari bo'lgan bolalar - qo'shimcha yordam olish huquqiga ega.",
                        "10. BAXTLI BOLALIK HUQUQI: Bolaning eng yaxshi manfaatlari - eng muhim! Har bir qaror qabul qilinganda: 'Bu bola uchun yaxshimi?' deb so'rash kerak.",
                        "MAJBURIYATLAR: Bolalar ham majburiyatlarga ega: Ota-onani hurmat qilish, Qonunlarga rioya qilish, Boshqa bolalar huquqlarini hurmat qilish, Maktabda o'qish, o'rganish, Tabiatni asrash, Yaxshi xulqli bo'lish.",
                        "MUHIM TAMOYILLAR: KAMSITMASLIK - Barcha bolalar teng huquqlarga ega, Irqi, jinsi, dini, tilidan qat'i nazar. BOLA MANFAATI USTUVOR - Har doim bola foydasini o'ylash. HAYOT VA RIVOJLANISH - Bolaning to'liq o'sishiga yordam berish. BOLA FIKRINI HURMAT QILISH - Bolaning ovozini eshitish.",
                        "O'ZBEKISTONDA: O'zbekiston 1994-yilda Konventsiyani ratifikatsiya qildi. Konstitutsiya, 'Bola huquqlari kafolatlari to'g'risida'gi Qonun - bolalar huquqlarini himoya qiladi. Bolalar ombudsmeni - bolalar huquqlarini himoya qiluvchi maxsus vakil.",
                        "AGAR HUQUQLARINGIZ BUZILSA: 1. Ota-onaga aytish. 2. O'qituvchi, maktab psixologiga murojaat. 3. Mahalla, hokimiyat organlariga shikoyat. 4. Bolalar telefoniga qo'ng'iroq: 1058. 5. Ombudsmen ofisiga murojaat."
                      ]
                    }
                  ]
                },
                {
                  "heading": "MATN 2: 'Boshlang'ich sinfda huquqiy tarbiya metodikasi' (8 daq)",
                  "subsections": [
                    {
                      "title": "HUQUQIY BILIM VA MADANIYATNI SHAKLLANTIRISH",
                      "points": [
                        "I. YOSH BOSQICHLARI VA MAZMUN:",
                        "1-SINF (6-7 yosh): 'MENING OILAM VA MEN'. Bilim: Ism, familiya - mening huquqim, Oila - mening uyim, Maktab qoidalari, 'Yaxshi' va 'Yomon' xatti-harakatlar. Metod: Hikoyalar va ertaklar (yaxshi va yomon qahramon), O'yin va rol (do'stlik, ulashish), Oddiy qoidalar ('Biz urmaymiz', 'Biz ulashamiz').",
                        "2-SINF (7-8 yosh): 'MENING HUQUQ VA MAJBURIYATLARIM'. Bilim: Men nima qilishga huquqli?, Men nima qilishim kerak?, Bolalar huquqlari (sodda tushunchalar), Maktab va uy qoidalari. Metod: Vaziyatli o'yinlar ('Nima to'g'ri, nima noto'g'ri?'), Rasmlar chizish (mening huquqlarim), Qoidalar yaratish (sinf konstitutsiyasi).",
                        "3-SINF (8-9 yosh): 'MEN VA JAMIYAT'. Bilim: Qonun nima?, Adolat va tenglik, Boshqalar huquqlariga hurmat, Mas'uliyat tushunchasi. Metod: Keys-stadilar (vaziyat va yechim), Munozara va muhokama, Kichik tadqiqotlar ('Maktabda qoidalar nima uchun kerak?'), 'Qozi' o'yini.",
                        "4-SINF (9-10 yosh): 'MEN - FUQARO'. Bilim: Konstitutsiya - asosiy qonun, Davlat tuzilmasi (oddiy), Demokratiya - nima?, Saylov va ovoz berish, Fuqarolik mas'uliyati. Metod: Loyihalar ('Mening ideal jamiyatim'), Simulyatsiya (sinf saylov, parlament), Taqqoslash (O'zbekiston va boshqa mamlakatlar), Chuqur munozaralar.",
                        "II. ASOSIY METODLAR: 1. HIKOYA VA ADABIYOT (Xalq ertaklari - adolat g'alaba qiladi, Bolalar adabiyoti - axloqiy dilemmalar, Tarixiy shaxslar - adolat uchun kurash). 2. O'YIN VA ROL (Rol o'yinlari: Sud, Parlament, Oila, Simulyatsiyalar: Vaziyat va yechim, Drama: Muammoni ko'rsatish va hal qilish). 3. MUNOZARA VA MUHOKAMA (Ochiq savollar: 'Nima to'g'ri bo'lardi?', Ko'p nuqtai nazar - har fikr muhim, Konsensus - birgalikda yechim topish). 4. VAZIYATLI TAHLIL (Keys-stadi) (Real vaziyat, Tahlil: Nima bo'ldi? Kim noto'g'ri? Yechim: Nima qilish kerak edi? Umumlashtirish: Qanday qoida?). 5. AMALIY FAOLIYAT (Sinf qoidalari yaratish, Sinf boshlig'i va mas'ullar saylash, Muammolarni demokratik hal qilish, Jamoat ishlarida ishtirok (hashar, aksiya)).",
                        "III. O'QITUVCHI ROLI: O'qituvchi - NAMUNA: O'zi qonun va qoidalarga rioya qiladi, Bolalarni tenglik bilan munosabatda bo'ladi, Bolalar fikrini tinglaydi va hurmat qiladi, Adolatli qaror qabul qiladi, Demokratik muhit yaratadi. O'qituvchi - YO'LBOSHCHI: Murakkab tushunchalarni oddiy tushuntiradi, Muammoli vaziyatlarda yordam beradi, Tanqidiy fikrlashni rivojlantiradi, Mas'uliyat his-tuyg'usini shakllantiradi.",
                        "IV. OILA HAMKORLIGI: Ota-onalar: Uyda huquq va qoidalar muhokamasi, Demokratik qarorlar (oila maslahati), Bolani tinglanish, Namuna bo'lish (qonunga rioya qilish). Maktab: Ota-onalar seminarlari ('Bolalar huquqlari'), Umumiy tadbirlar (Huquq haftaligi), Resurslar (broshura, kitobcha).",
                        "V. BAHOLASH: Test va baho - YO'Q! Kuzatuv: Bola xatti-harakati (qoidalarga rioya), Boshqalarga munosabati (hurmat, adolat), Muammoli vaziyatlarda qaror qabul qilishi. Portfolio: Rasmlar, esselar, Loyihalar, O'z-o'zini baholash ('Men nima bildim? Nima o'zgarti?').",
                        "VI. EHTIYOT CHORALARI: Abstrakt emas - Konkret! (Kichik bolalar uchun abstrakt 'huquq' qiyin, Real misollar, tanish vaziyatlar). Qo'rqitmоq emas - Ilhomlantirish! ('Agar qoidani buzsang - jazo!' emas, 'Qoidalar bizga yordam beradi!' ha). Kattalar dunyosi emas - Bolalar darajasi! (Qonunchilik, sud - murakkab, Oddiy, tushunarli, qiziqarli qilish). Yagona javob yo'q! (Ko'p vaziyatlarda - turli yechimlar, Muhokama - muhim jarayon).",
                        "ESLAB QOLING: 'Huquqlaring bor - lekin boshqalar ham huquqlarga ega! Majburiyatlaring bor - buni bajar, huquqlaring himoyalangan!'"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Yozish mashqlari (5 daq)",
              "tasks": [
                "1. 'Mening huquqlarim va majburiyatlarim' jadval (3 daq): Mening huquqlarim (Men o'ynashga huquqliman, Men..., Men...), Mening majburiyatlarim (Men boshqalarni o'yinga qabul qilishim kerak, Men..., Men...).",
                "2. Vaziyat tahlili (2 daq): Vaziyat: 'Maktabda ikkita do'st bor - Ali va Vali. Ali Valining kitobini oldi va qaytarmayapti. Vali yig'layapti.' Savol: Kim noto'g'ri? Qanday hal qilish kerak? Qanday qoida yaratish mumkin?"
              ]
            }
          ]
        },
        {
          "sectionTitle": "5. TEXNOLOGIYA (20 daq)",
          "content": [
            {
              "type": "VOSITA 1: iCivics - Interaktiv huquqiy ta'lim platformasi (5 daq)",
              "details": [
                "Tanishtiruv: iCivics.org - Amerika'da yaratilgan, lekin universal huquqiy o'yinlar platformasi.",
                "Imkoniyatlar: O'yinlar: 20+ interaktiv o'yin ('Do I Have a Right?' - Huquqlarni o'rganish, 'Branches of Power' - Davlat hokimiyati, 'Counties Work' - Mahalliy hokimiyat). Darsliklar: PDF formatda. Video: Animatsiya tushuntirishlar.",
                "Moslash: Ingliz tilidan tarjima qilish, O'zbek kontekstiga moslashtirish, Sinf loyihasi: 'O'zbek iCivics' yaratish.",
                "Amaliy: 'Do I Have a Right?' o'yinini sinab ko'rish (3 daq)."
              ]
            },
            {
              "type": "VOSITA 2: Kahoot/Quizizz - 'Bolalar huquqlari' viktorinasi (4 daq)",
              "details": [
                "Viktorina yaratish: 10 ta savol:",
                "1. BMT Bolalar huquqlari konventsiyasi qachon qabul qilingan? a) 1989 ✓ b) 1991 c) 2000 d) 1945",
                "2. O'zbekiston boshlang'ich ta'limi qanday? a) Pullik b) Majburiy va bepul ✓ c) Ixtiyoriy d) Faqat shahar",
                "3. Bola nechada fuqarolik pasporti oladi? a) 14 ✓ b) 16 c) 18 d) 21",
                "4. 'Men o'z fikrimni ayta olaman' - bu qaysi huquq? a) So'z erkinligi ✓ b) Ta'lim c) Uy d) Ovqat",
                "5. Agar bola xafa qilinsa, qayerga murojaat qilish mumkin? a) 1058 ✓ b) 102 c) 103 d) 104",
                "6. Sinf qoidalarini kim yaratishi kerak? a) O'qituvchi b) Direktor c) Hamma birgalikda ✓ d) Ota-onalar",
                "7. Demokratiya nima? a) Xalq hokimiyati ✓ b) Bir kishi boshqaruvi c) Qonunsizlik d) Kuchlilar hukmronligi",
                "8. Rasm: Bola maktabda [ko'rsatiladi]. Bu qaysi huquq? a) Ta'lim ✓ b) O'yin c) Salomatlik d) Oila",
                "9. 'Men uy vazifasini qilishim kerak' - bu nima? a) Huquq b) Majburiyat ✓ c) Tanlov d) Jazo",
                "10. Konstitutsiya nima? a) Asosiy qonun ✓ b) Kitob c) Darslik d) Jurnal",
                "Gamifikatsiya: Tezkor javob - ko'proq ball, Ketma-ket to'g'ri javoblar - bonus, Avatar va nickname, Leaderboard - top 3."
              ]
            },
            {
              "type": "VOSITA 3: Nearpod - Interaktiv huquqiy dars (5 daq)",
              "details": [
                "Dars yaratish: 'Mening huquqlarim'.",
                "Slaydlar ketma-ketligi: 1. Kirish (Slide 1) (Video: 'Bolalar huquqlari' (2 daq)). 2. Interaktiv so'rov (Slide 2) ('Sizning eng muhim huquqingiz?', Word Cloud - natijalar real-time). 3. Ma'lumot (Slide 3-5) (Bolalar huquqlari 10 ta, Har birida rasm va qisqa matn). 4. Draw It! (Slide 6) ('O'z huquqingizni chizing!' - Bolalar ekranda chizishadi, Hamma ko'radi). 5. Poll (Slide 7) ('Qaysi huquq eng ko'p buziladi?', Grafikda natija). 6. Open-Ended (Slide 8) ('Agar prezident bo'lsangiz, qanday qonun yaratardingiz?', Bolalar yozadi, o'qituvchi ko'radi). 7. Collaborate Board (Slide 9) (Virtual doska, 'Sinf qoidalari takliflari', Hamma qo'shadi). 8. Quiz (Slide 10-15) (5 ta savol, Real-time javoblar va baho).",
                "Afzallik: Mobil qurilmada ham ishlaydi, Real-time interaktiv, Natijalarni ko'rish mumkin, Sinxron yoki asinxron."
              ]
            },
            {
              "type": "VOSITA 4: Google Forms - 'Huquqiy stsenariylar' so'rovi (3 daq)",
              "details": [
                "So'rovnoma tuzilmasi: HUQUQIY VAZIYATLAR - SIZ QANDAY HARAKAT QILARDINGIZ?",
                "VAZIYAT 1: Siz ko'chada pul topdingiz - 50,000 so'm. Nima qilasiz? (O'zimga olaman, Politsiyaga topshiraman, Atrofga qarayman - kim yo'qotgan?, Yarmi men, yarmi do'stim). To'g'ri javob: Politsiyaga topshirish yoki egasini qidirish.",
                "VAZIYAT 2: Do'stingiz imtihonda nusxa ko'chirmoqchi va sizdan yordam so'raydi. (Yordam beraman - do'st-ku!, Yo'q deyman - bu noto'g'ri, O'qituvchiga aytaman, O'ylab ko'raman). To'g'ri yondashuv: Rad etish, sabablari bilan.",
                "VAZIYAT 3: Katta bola sizdan pul talab qilmoqda, aks holda uradi. (Beraman - qo'rqaman, Yo'q deyman, Qochib ketaman, Kattalar/O'qituvchiga aytaman). To'g'ri: Kattalarга aytish, zo'ravonlikka qarshi turish.",
                "VAZIYAT 4: Maktabda yangi qoida: 'Faqat o'zbek tilida gapiring, boshqa til - taqiqlangan'. (Normal, to'g'ri qoida, Noto'g'ri, bu huquqni buzadi, Menga farqi yo'q, Bilmayman). To'g'ri: Noto'g'ri - ona tilida gapirish huquqi bor.",
                "VAZIYAT 5: Sinfda saylov - sinf boshlig'i tanlanmoqda. Sizning do'stingiz yutmadi. (Noto'g'ri! Qayta saylov!, Qabul qilaman - ko'pchilik qaror qildi, Endi u bilan gaplashmayman, Men boshqa sinfga o'taman). To'g'ri: Demokratik qarorni qabul qilish.",
                "Natijalar tahlili: Qaysi vaziyat eng qiyin? Bolalarning huquqiy ongi darajasi? Qaysi mavzuga ko'proq e'tibor?"
              ]
            },
            {
              "type": "VOSITA 5: Canva - 'Bolalar huquqlari' poster kampaniyasi (3 daq)",
              "details": [
                "Loyiha: 'Huquqlarimni bilaman!'.",
                "10 ta poster - 10 ta huquq: 1. Ta'lim huquqi (Rasm: Bolalar maktabda, Matn: 'Har bir bola o'qish huquqiga ega!', Statistika: 'O'zbekistonda 6 million maktab o'quvchisi'). 2. Oila huquqi (Rasm: Baxtli oila, Matn: 'Men oilam bilan yashashga huquqliman'). 3. Salomatlik huquqi (Rasm: Shifokor va bola, Matn: 'Men shifokor yordamiga ega bo'lishim mumkin'). 4. O'yin huquqi (Rasm: Bolalar o'ynayapti, Matn: 'O'yin - mening huquqim!'). 5. Himoya huquqi (Rasm: Qalqon, Matn: 'Hech kim meni xafa qila olmaydi').",
                "Dizayn: Yorqin ranglar, Oddiy matn, Qiziqarli rasm/illustratsiya, QR kod (qo'shimcha ma'lumot).",
                "Qo'llash: Maktab devorlari, Sinflar, Ijtimoiy tarmoqlar, Ota-onalar yig'ini."
              ]
            }
          ]
        },
        {
          "sectionTitle": "MUSTAQIL ISH",
          "content": [
            {
              "type": "1. HUQUQIY TARBIYA DASTURI (O'qish/Yozish - 3500 so'z)",
              "details": [
                "Struktura: I. Kirish (500 so'z) (Huquqiy tarbiya ahamiyati, Nazariy asoslar (Kohlberg, Piaget), O'zbekiston konteksti). II. Maqsad va vazifalar (300 so'z) (Umumiy maqsad, Sinf bo'yicha maqsadlar (1-4), Kutilayotgan natijalar). III. Mazmun (1500 so'z) (1-sinf: 'Qoidalar va tartib' (400 so'z), 2-sinf: 'Huquq va majburiyat' (400 so'z), 3-sinf: 'Men va jamiyat' (400 so'z), 4-sinf: 'Men - fuqaro' (400 so'z)). IV. Metodlar va shakllar (600 so'z) (Hikoya va rol o'yini, Munozara va muhokama, Keys-stadi, Loyihalar, Har biriga 2-3 ta misol). V. Baholash (300 so'z) (Mezonlar, Vositalar, Portfolio). VI. Resurslar (200 so'z) (Kitoblar, videolar, saytlar). VII. Ilova (200 so'z) (5 ta to'liq dars rejasi).",
                "Topshirish: 3 hafta."
              ]
            },
            {
              "type": "2. INTERAKTIV DARSLIK (Vizual + Texnologiya)",
              "details": [
                "Google Sites: 'Bolalar Huquqlari Dunyosi'.",
                "Sahifalar: 1. Bosh sahifa ('Xush kelibsiz!', Video: 'Huquq nima?' (2 daq), Navigatsiya). 2. Mening huquqlarim (10 sahifa) (Har bir huquq uchun alohida sahifa: Ta'rif, Rasm/Illustratsiya, Hikoya, Video, Mashq. Misol: 'Ta'lim huquqi' - Ta'rif: 'Men maktabga borishga huquqliman', Hikoya: Malala Yousafzai (qisqacha), Video: 3 daq, Mashq: 'Nima uchun ta'lim muhim?' (yozish)). 3. O'yin va Viktorina (Embedded Kahoot, Interaktiv puzzle, 'Huquq yoki majburiyat?' o'yin). 4. Vaziyatlar (20 ta real vaziyat, Har birida: Tavsif, 4 ta variant, To'g'ri javob tushuntirish, Muhokama savollari). 5. Mening hikoyam (Bolalar o'z hikoyalarini joylashtiradi, 'Men huquqimni himoya qildim', Yozma yoki video). 6. Ota-onalar uchun (Qo'llanma, Video-seminar, Savollar javoblari). 7. Resurslar (Yuklab olish: PDF, video, Havolalar, Kitoblar ro'yxati). 8. Aloqa (Savol berish, Feedback).",
                "Texnik: Responsive dizayn, 2 tilda: O'zbek, Rus, QR kod, Analytics."
              ]
            },
            {
              "type": "3. VIDEO SERIYALI (Kinestetik - 5 qism × 5 daq)",
              "details": [
                "Seriya: 'Huquq Qahramonlari'.",
                "Qismlar: Qism 1: 'Ismning kuchi', Qism 2: 'Maktabga yo'l', Qism 3: 'Tinchlik uchun kurash', Qism 4: 'Ovozim eshitilsin!', Qism 5: 'Birgalikda kuchliroqmiz'.",
                "Har qism: Hikoya, Huquq, Real tarixiy misol.",
                "Texnik: Aktyorlik: Haqiqiy bolalar, Subtitles: O'zbek, Rus, Ingliz, Animation elementlar."
              ]
            },
            {
              "type": "4. AUDIO KURSLAR (Audio - 10 dars × 15 daq)",
              "details": [
                "'Huquqiy bilim - Bolalar uchun' podkast kursi.",
                "Darslar: Dars 1: Huquq va qonun - bu nima? Dars 2: Mening huquqlarim - 10 ta asosiy. Dars 3: Mening majburiyatlarim. Dars 4: Oila huquqi. Dars 5: Ta'lim va maktab. Dars 6: Adolat va tenglik. Dars 7: Demokratiya va saylov. Dars 8: Konstitutsiya. Dars 9: Huquqlarimni himoya qilish. Dars 10: Men - mas'uliyatli fuqaro.",
                "Format: Kirish musiqa (30 sek), Asosiy qism: Tushuntirish, hikoya, misol (10 daq), Savol-javob (2 daq), Vazifa: 'Uyda sinab ko'ring!' (1 daq), Xulosa va keyingi dars anonsı (1 daq), Chiqish musiqa (30 sek).",
                "Ovozlar: Bosh ovoz: Professional speaker, Bolalar ovozlari: Real bolalar, Qahramonlar: Aktyorlar.",
                "Joylashtirish: Spotify, Apple Podcast, Anchor, SoundCloud, YouTube (audio + rasm), Telegram bot."
              ]
            },
            {
              "type": "5. HUQUQIY O'YIN YARATISH (Texnologiya)",
              "details": [
                "Scratch yoki AppInventor: 'Huquq Safari'.",
                "O'yin konsepsiyasi: Janr: Sarguzasht/Quest. Qahramon: Bola (o'yinchi o'zi tanlaydi). Maqsad: 10 ta 'Huquq medali'ni to'plash.",
                "Levellar: Level 1: Uy - Oila huquqi. Level 2: Maktab - Ta'lim huquqi. Level 3: Shifoxona - Salomatlik huquqi. Level 4: Park - O'yin huquqi. Level 5: Politsiya - Himoya huquqi. Level 6: Kutubxona - Ma'lumot huquqi. Level 7: Sudxona - Adolat. Level 8: Saylov joyi - Demokratiya. Level 9: Parlament - Qonunlar. Level 10: Dunyo - Global fuqarolik.",
                "Har level: Vazifa, Savol, Medal.",
                "Texnik: Scratch (8-10 yosh), Oddiy grafika, O'zbek tilida, Ballar va reytinglar, Sertifikat (10 ta medal to'plasa).",
                "Topshirish: 4 hafta."
              ]
            }
          ]
        },
        {
          "sectionTitle": "XULOSA",
          "content": [
            "HUQUQ = ERKINLIK + MAS'ULIYAT",
            "BILISH (Huquqlarim nima?) ↓ TUSHUNISH (Nima uchun muhim?) ↓ HURMAT QILISH (Boshqalarning ham huquqi bor) ↓ HIMOYA QILISH (Men kurashaman)",
            "Har bola - Huquq qahramoni!",
            "Bolalar huquqlari - universal, O'zbekiston ham himoya qiladi.",
            "Huquq va majburiyat - ikki tomonlama.",
            "Qonun - tartib, adolat, xavfsizlik.",
            "Demokratiya - hammaning ovozi muhim.",
            "Boshlang'ich sinf - huquqiy tarbiya asosi.",
            "Texnologiya - qiziqarli va samarali vosita."
          ]
        }
      ]
    },
    {
      "id": "maruza-9-ijobiy-fazilat-mexanizmi",
      "title": "MA'RUZA 9: O'quvchilarda ijobiy fazilat mexanizmi shakllantirishning psixologik jihatlari",
      "duration": "90 daqiqa",
      "sections": [
        {
          "sectionTitle": "1. VIZUAL (10 daq)",
          "content": [
            {
              "type": "Slayd-prezentatsiya",
              "details": [
                "IJOBIY FAZILATLAR DARAXTI",
                "BARKAMOL INSON (tepada)",
                "ICHKI FAZILATLAR (AQLIY, EMOTSIONAL, RUHIY) va TASQI FAZILATLAR (IJTIMOIY)",
                "AQLIY: Donolik, Ijodiy. EMOTSIONAL: Sabr, Toqat. IJTIMOIY: Mehr, Rahm, Shu'ja. RUHIY: Iymon, Halollik, Sadoqat, Poklik.",
                "Seligman IJOBIY PSIXOLOGIYA nazariyasi: PERMA modeli: P - Positive emotion (Ijobiy emotsiya), E - Engagement (Faol ishtirok), R - Relationships (Munosabatlar), M - Meaning (Ma'no), A - Accomplishment (Yutuq)."
              ]
            },
            {
              "type": "Infografikalar",
              "details": [
                "24 ta xarakter fazilatı (VIA Institute): Donolik: Ijodkorlik, Qiziquvchanlik, Fikrlash, O'rganish, Perspektiva. Jasorat: Mardlik, Qat'iyat, Halollik, Energiya. Insoniylik: Mehr, Yaxshilik, Ijtimoiy aql. Adolat: Jamoadorlik, Tenglik, Yetakchilik. Mo''tadillik: Kechirimlilik, Kamtarlik, Ehtiyotkorlik, O'z-o'zini boshqarish. Transsendentsiya: Go'zallik, Minnatdorlik, Umid, Hazil, Ma'naviyat.",
                "Fazilatlar rivojlanish bosqichlari: 1. Bilish → 2. Tushunish → 3. Qabul qilish → 4. Amaliyot → 5. Ichkilashtirish → 6. Odatga aylanish.",
                "Yosh va fazilatlar: 6-10 yosh - qaysi fazilatlar muhim?"
              ]
            },
            {
              "type": "Video",
              "details": [
                "'Ijobiy psixologiya - nima?' (3 daq)",
                "'Bolalarda fazilat - real misollar' (3 daq)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "2. AUDIO (10 daq)",
          "content": [
            {
              "type": "PODKAST: 'Fazilat - ruhning go'zalligi'",
              "parts": [
                {
                  "QISM": "1: Fazilat nima? (4 daq)",
                  "speaker": "[Psixolog - Prof. Rahmonova]",
                  "text": "'Fazilat - bu insonning ichki go'zalligi. Siz chiroyli kiyim kiysangiz - tashqi go'zallik. Lekin siz halol, mehribon, sabr-toqatli bo'lsangiz - bu FAZILAT, ichki go'zallik! Fazilat va ko'nikma farqi: Ko'nikma - qila olish. Masalan: Velosiped haydash, o'qish. Fazilat - bo'lish. Masalan: Halol bo'lish, mehribon bo'lish. Fazilat qanday shakllanadi? Aristotel aytgan: 'Biz nima qilsak, shuga aylanamiz.' Agar siz har kuni rostgo'y bo'lsangiz → Halollik fazilati shakllanadi. Agar siz har kuni do'stga yordam bersangiz → Saxovat fazilati. Boshlang'ich yoshda: 6-10 yosh - fazilat shakllantirish uchun OLTIN davr! Chunki: Plastik: Bolalar tez o'rganadilar, Ishonuvchan: O'qituvchi - katta avtoritet, Taklidchi: Namunadan nusxa oladilar, Emotsional: His-tuyg'u orqali yaxshi o'zlashtirishadi. Qanday o'rgatish? 'Sen mehribon bo'lishing kerak!' - diktatura. 'Keling, mehribon bo'lishni o'rganamiz!' - hamkorlik. Abstrakt: 'Fazilat - yaxshi'. Konkret: 'Ali, sen Valga yordam berding - bu SAXOVATdir!' Faqat so'z. So'z + Namuna + Amaliyot. Eslab qoling: Fazilat - bu yo'l, maqsad emas. Biz doimo o'samiz!'",
                  "summary": "Fazilatning ichki go'zallik ekanligi, ko'nikmadan farqi, shakllanishi va uni bolalarga o'rgatish usullari."
                },
                {
                  "QISM": "2: Hikoya - 'Halol bola' (3 daq)",
                  "speaker": "[Dramatik audio]",
                  "text": "'Qadim zamonda, Nasriddin Afandi o'g'liga halollikni o'rgatmoqchi bo'ldi. Bir kun, Afandi bozordan uyga qaytayotgan edi. Yo'lda 1 tanga topdi. O'g'liga ko'rsatdi: O'g'il: 'Otajon, biz boyidik! Biror narsa sotib olamiz!' Afandi: 'O'g'lim, bu bizning emas. Kimningdir. Nima qilish kerak?' O'g'il: 'Bilmadim... Sizniki bo'lsin?' Afandi: 'Yo'q. Egasini qidiramiz.' Ular bozorga qaytdilar. Afandi baland ovozda: 'Kim tanga yo'qotdi?!' Ko'p odamlar kelib: 'Men!' 'Men!' 'Mening!' Afandi: 'Qanday tanga edi?' Birovlar: 'Kumush!' Boshqalar: 'Katta!' Hech kim to'g'ri ayta olmadi. Nihoyat, kambag'al kampir keldi: Kampir: 'O'g'lim, men 1 ta mis tanga yo'qotdim. Yoqasida zang bor. Bu mening yagona pulim edi...' Afandi tangani ko'rdi - haqiqatan, mis, zangi bor. Afandi: 'Mana, onajon. Sizniki.' Kampir: 'Olloh rozi bo'lsin! Sen halol yigitsan!' Uyga qaytganlarida: O'g'il: 'Ota, biz hech narsa olmadik...' Afandi: 'Yo'q, o'g'lim. Biz eng qimmat narsani oldik - HALOLLIKni. Bu puldan qimmatroq. Chunki halol inson - hamma joyda hurmatli. Boylik ketadi, halollik qoladi.' O'g'il bu saboqni umrга eslab qoldi.'",
                  "summary": "Nasriddin Afandining o'g'liga halollikning qimmatini o'rgatishi haqidagi hikoya."
                },
                {
                  "QISM": "3: Zamonaviy yondashuv - Ijobiy Psixologiya (3 daq)",
                  "speaker": "[Ekspert - Dr. Xalilov]",
                  "text": "'2000-yilda Martin Seligman yangi yo'nalish kashf etdi: IJOBIY PSIXOLOGIYA. Ilgari psixologiya faqat muammolarga qarar edi: Depressiya, xavotir, stress. Endi: Qanday qilib baxtli, fazilatli, to'liq hayot yashash mumkin? Bolalar uchun: Eski yondashuv: 'Yomon xatti-harakatni to'xtatamiz.' Yangi: 'Yaxshi xatti-harakatni rivojlantiramiz!' Misol: Eski: 'Janjal qilma!' Yangi: 'Keling, tinchlik usullarini o'rganamiz!' PERMA modeli bolalar uchun: P - Positive emotion: Bolalar xursand bo'lishi kerak! (O'yin, hazil, qiziqarli darslar). E - Engagement: Faol ishtirok (Loyihalar, amaliy ishlar). R - Relationships: Yaxshi munosabatlar (Do'stlik, jamoa, oila). M - Meaning: Ma'noni topish ('Men nima uchun o'qiyapman?' - maqsad). A - Accomplishment: Yutuq (Muvaffaqiyat, maqtov, natija). Agar bu 5 ta element mavjud bo'lsa - bola baxtli va fazilatli o'sadi!'",
                  "summary": "Martin Seligman tomonidan kashf etilgan Ijobiy Psixologiya, uning PERMA modeli va bolalarda fazilatni rivojlantirishga qaratilgan yondashuvi."
                }
              ]
            }
          ]
        },
        {
          "sectionTitle": "3. KINESTETIK (15 daq)",
          "content": [
            {
              "type": "Mashq 1: 'Mening kuchli tomonlarim' - VIA fazilatlar (6 daq)",
              "details": [
                "Tayyorlov: 24 ta fazilat kartochkalari. Har kartochkada: Ism, Ta'rif, Rasm.",
                "Faoliyat: Qadam 1 (2 daq): Tanishuv (Kartochkalar yoyilgan, Bolalar aylanib, o'qib chiqishadi, O'qituvchi tushuntiradi). Qadam 2 (2 daq): Tanlash (Har bola 3 ta kartochka tanlaydi, 'Bu - mening kuchli tomonlarim!'). Qadam 3 (2 daq): Baham ko'rish (Juftlikda, 'Mening kuchli tomonim - IJODKORLIK. Men chizishni yaxshi ko'raman va yangi g'oyalarim bor!', O'rtog'i tinglaydi va maqtaydi).",
                "Xulosa: Har birimizda kuchli tomonlar bor. Biz ularni topamiz va rivoјlantiramiz!"
              ]
            },
            {
              "type": "Mashq 2: 'Fazilat harakati' - Jismoniy ifoda (5 daq)",
              "details": [
                "Kontsepsiya: Har fazilat - bir harakat!",
                "Fazilatlar va harakatlar: 1. JASORAT (Harakatlar: Tik turish, ko'krak oldinga, qo'llar belder. Baqirish: 'Men jasurman!'). 2. MEHR (Harakatlar: Qo'llarni yurakka, keyin oldinga (berish). Silaymiz, quchoqlaymiz (havoda)). 3. HALOLLIK (Harakatlar: O'ng qo'l yuragda, chap qo'l oldinga. 'Men halol so'zlayman!'). 4. UMID (Harakatlar: Qo'llar pastdan yuqoriga (o'sish). Osmonga qaraymiz). 5. MINNATDORLIK (Harakatlar: Qo'llar birlashtirilib, Boshni egish. 'Rahmat!').",
                "O'yin: O'qituvchi fazilat nomini aytadi. Bolalar mos harakatni qiladilar. Tezlik oshib boradi!"
              ]
            },
            {
              "type": "Mashq 3: 'Fazilat do'koni' - Rol o'yini (4 daq)",
              "details": [
                "Kontsepsiya: Fazilat - sotib olinmaydi, lekin 'almashtiriladi'!",
                "Rol o'yini: Vaziyat: Do'kon. 'Sotuvchi' - o'qituvchi yoki bola.",
                "Haridor 1 (Ali): 'Men ijodkorlik istaymanman!' Sotuvchi: 'Yaxshi! Lekin bu do'konda pul ishlamaydi. Siz nima berasiz?' Ali: 'Men... har kuni 1 ta rasm chizaman?' Sotuvchi: 'Ajoyib! Mana, sizga Ijodkorlik fazilati!'",
                "Haridor 2 (Zarina): 'Men sabr-toqat xohlayman!' Sotuvchi: 'Sabr-toqat qimmat! Nima berasiz?' Zarina: 'Men... kuchish paytida g'azablanmayman. 10 sanayman!' Sotuvchi: 'Zo'r! Sabr-toqat sizniki!'",
                "Xulosa: Fazilat - AMAL orqali keladi!"
              ]
            }
          ]
        },
        {
          "sectionTitle": "4. O'QISH/YOZISH (25 daq)",
          "content": [
            {
              "type": "O'qish materiallari",
              "sections": [
                {
                  "heading": "MATN 1: 'Ijobiy psixologiya va fazilat tarbiyasi' (15 daq)",
                  "subsections": [
                    {
                      "title": "IJOBIY FAZILATLAR: NAZARIYA VA AMALIYOT",
                      "points": [
                        "I. IJOBIY PSIXOLOGIYA ASOSLARI:",
                        "TARIX: 1998 - Martin Seligman (APA prezidenti) yangi yo'nalishni e'lon qildi: Psixologiya faqat kasallik emas, balki SALOMATLIK va FAZILATni ham o'rganishi kerak!",
                        "ASOSIY G'OYA: 'Eng yaxshi hayot - bu o'z kuchli tomonlaringizni topish va ularni har kuni ishlatish.'",
                        "FAZILAT TASNIFI (Peterson & Seligman, 2004): 6 ta ASOSIY FAZILAT:",
                        "1. DONOLIK va BILIM: Ijodkorlik, Qiziquvchanlik, Ochiq fikrlilik, O'rganishga muhabbat, Perspektiva.",
                        "2. JASORAT: Mardlik, Qat'iyat, Halollik, Jonkuyarlik.",
                        "3. INSONIYLIK: Mehr, Yaxshilik, Ijtimoiy aql.",
                        "4. ADOLAT: Jamoadorlik, Tenglik, Yetakchilik.",
                        "5. MO''TADILLIK: Kechirimlilik, Kamtarlik, Ehtiyotkorlik, O'z-o'zini boshqarish.",
                        "6. TRANSSENDENTSIYA: Go'zallik, Minnatdorlik, Umid, Hazil, Ma'naviyat.",
                        "BOSHLANG'ICH SINFDA ENG MUHIM FAZILATLAR:",
                        "6-7 YOSH (1-sinf): Qiziquvchanlik, Yaxshilik, Umid, Minnatdorlik, Hazil.",
                        "8-9 YOSH (2-3-sinf): Halollik, Qat'iyat, Jamoadorlik, Kechirimlilik, Ijodkorlik.",
                        "10-11 YOSH (4-sinf): Tenglik, Yetakchilik, Perspektiva, Ehtiyotkorlik, Go'zallik.",
                        "II. FAZILAT SHAKLLANISH JARAYONI:",
                        "Bandura IJTIMOIY O'RGANISH nazariyasi: 1. KUZATUV (Modeling) (Bola kattalar va tengdoshlarni kuzatadi, O'qituvchi, ota-ona - asosiy namuna). 2. TAQLID (Imitation) (Bola ko'rgan xatti-harakatni takrorlaydi, 'Majburiy taqlid' - avtomatik). 3. MUSTAHKAMLASH (Reinforcement) (Ijobiy natija → takrorlanadi, Maqtov, rag'bat - muhim). 4. ICHKILASHTIRISH (Internalization) (Tashqi nazoratdan ichki qabul qilishga, 'Men shuni qilaman, chunki bu to'g'ri!').",
                        "AMALIY JARAYON: BOSQICH 1: BILISH (Bola fazilat nomini va ma'nosini bilib oladi, 'Halollik - bu rost so'zlash'). BOSQICH 2: TUSHUNISH (Nega bu muhim? Qanday foyda? 'Agar halol bo'lsam, odamlar menga ishonishadi'). BOSQICH 3: HIS QILISH (Emotsional aloqa, 'Men halol bo'lganimda yaxshi his qilaman'). BOSQICH 4: SINASH (Birinchi amaliy tajriba, 'Bugun men yolg'on gapirmayman'). BOSQICH 5: MASHQ (Takroriy amaliyot, 'Har kuni halol bo'laman'). BOSQICH 6: ODATGA AYLANTIRISH (Avtomatik xatti-harakat, 'Men halol insonman - bu mening tabiatim').",
                        "III. METODLAR VA TEXNIKALAR: 1. HIKOYA VA ADABIYOT (Xalq ertaklari - fazilat g'alaba qiladi, Biografiyalar - tarixiy shaxslar namunasi, Zamonaviy adabiyot - hozirgi qahramonlar). 2. NAMUNA VA MODEL (O'qituvchi o'zi fazilat namunasi, 'Fazilat qahramoni' - har haftada, Tengdoshlar namunasi). 3. MUNOZARAPodcast seriyasi va refleksiya ('Bu vaziyatda nima to'g'ri?', Ko'p nuqtai nazar, Tanqidiy fikrlash). 4. AMALIY MASHQ (Kundalik 'Fazilat vazifasi', Loyihalar va xayriya, Real hayotda qo'llash). 5. FIKRLASH (Refleksiya) ('Bugun men qanday fazilat ko'rsatdim?', Jurnal yozish, Guruhda baham ko'rish). 6. RAG'BATLANTIRISH (Ijobiy feedback, Sertifikat va mukofot, Hammaning oldida maqtash).",
                        "IV. BAHOLASH: Test va baho - yo'q! Kuzatuv va tavsif. VOSITALAR: 1. FAZILAT PROFILI (Har bola uchun individual, Kuchli fazilatlari, Rivojlantirish keraklari). 2. PORTFOLIO (Fazilat nаmunalari (rasmlar, hikoyalar), O'z-o'zini baholash, Dinamikani ko'rsatish). 3. FIKR-MULOHAZALAR (Ota-onalar fikri, O'quvchilar bir-birlari haqida, O'z-o'zini baholash). 4. ANEKDOT YOZUVLAR (O'qituvchi kuzatuvlari, Konkret misollar, Sana va kontekst).",
                        "V. OTA-ONALAR BILAN HAMKORLIK: OILA - FAZILAT MAKTABI: Ota-ona - birinchi va asosiy o'qituvchi, Uyda har kuni fazilat mashq qilinadi, Oila qadriyatlari va fazilat uyg'unligi. AMALIY TAKLIFLAR: 1. 'Fazilat kechasi' - haftada 1 marta (Bitta fazilat muhokamasi, Hikoya o'qish, Reja: Keyingi haftada nima qilamiz?). 2. 'Fazilat modeli' (Ota-ona o'zi namuna, Bolalar kuzatadi va taqlid qiladi). 3. 'Minnatdorlik daftari' (Kechqurun: 'Bugun nimaga minnatdormiz?', Ijobiy fokus). 4. Muvaffaqiyatni nishonlash (Fazilat ko'rsatilganda - maqtash, Aniq va samimiy).",
                        "VI. EHTIYOT CHORALARI: 'Mukammallik bosimi' yo'q! (Hech kim mukammal emas, Xatolar - o'rganish jarayoni). Taqqoslash yo'q! (Har bola noyob, O'z o'sishini o'zi bilan taqqoslash). Majburlash yo'q! (Fazilat - ichdan kelishi kerak, Ilhom va rag'batlantirish). Bir fazilat ustiga ortiqcha urg'u yo'q! (Balansli rivojlanish, Har fazilat muhim)."
                      ]
                    }
                  ]
                },
                {
                  "heading": "MATN 2: '24 ta fazilat - bolalar uchun sodda ta'rif' (10 daq)",
                  "subsections": [
                    {
                      "title": "MENING FAZILAT LUG'ATIM",
                      "points": [
                        "DONOLIK VA BILIM:",
                        "1. IJODKORLIK ('Men yangi narsalarni o'ylab topaman!'). Misol: Rasm chizish, she'r yozish, o'yin o'ylab topish.",
                        "2. QIZIQUVCHANLIK ('Men savol beraman va kashf etaman!'). Misol: 'Nega osmon ko'k?' 'Qanday ishlaydi?'",
                        "3. OCHIQ FIKRLILIK ('Men turli fikrlarni tinglayman'). Misol: Do'stimning fikri boshqa - tinglayman va o'ylayman.",
                        "4. O'RGANISHGA MUHABBAT ('Men yangiliklarni o'rganishni yaxshi ko'raman!'). Misol: Kitob o'qish, dars tinglash, yangi ko'nikma.",
                        "5. PERSPEKTIVA (Donolik) ('Men katta rasmni ko'raman'). Misol: 'Bu hozir qiyin, lekin kelajakda foydali!'",
                        "JASORAT:",
                        "6. MARDLIK ('Men qo'rqaman, lekin baribir qilaman!'). Misol: Yangi do'st topish, sahnaga chiqish.",
                        "7. QAT'IYAT ('Men boshlanganimni tugataman!'). Misol: Qiyin topshiriq, uzoq loyiha - taslim bo'lmayman.",
                        "8. HALOLLIK ('Men haqiqatni aytaman'). Misol: Yolg'on gapirmaslik, xato qilsam tan olish.",
                        "9. JONKUYARLIK ('Men hayotga mehr bilan qarayman!'). Misol: Energiya, shov-shuv, hayajon.",
                        "INSONIYLIK:",
                        "10. MEHR ('Men odamlarni yaxshi ko'raman'). Misol: Oila, do'stlar, hatto noma'lum odamlar.",
                        "11. YAXSHILIK ('Men yordam beraman'). Misol: Tushgan narsani ko'tarish, darsda tushuntirish.",
                        "12. IJTIMOIY AQL ('Men odamlarni tushunaman'). Misol: 'U achinmoqda' - his-tuyg'ularni bilish.",
                        "ADOLAT:",
                        "13. JAMOADORLIK ('Men jamoa a'zosiman!'). Misol: Guruh ishida hissa qo'shish.",
                        "14. TENGLIK ('Men hammaga bir xil munosabatda bo'laman'). Misol: Hech kimni kamsitmaslik.",
                        "15. YETAKCHILIK ('Men boshqalarni ilhomlantiraman'). Misol: Guruhni tashkil qilish, reja tuzish.",
                        "MO'TADILLIK:",
                        "16. KECHIRIMLILIK ('Men g'azablanmayman, kechiraman'). Misol: Do'st xafa qildi - undan keyin ham do'stman.",
                        "17. KAMTARLIK ('Men o'zimni maqtamayman'). Misol: Yutuq qilsam - jamoaga rahmat.",
                        "18. EHTIYOTKORLIK ('Men o'ylab harakat qilaman'). Misol: Xavfli joyga yaqinlashmaslik.",
                        "19. O'Z-O'ZINI BOSHQARISH ('Men his-tuyg'ularimni nazorat qilaman'). Misol: G'azab kelyapti - 10 sanayman.",
                        "TRANSSENDENTSIYA:",
                        "20. GO'ZALLIK ('Men go'zallikni qadrlaman'). Misol: Tabiat, san'at, musiqa - lazzatlanish.",
                        "21. MINNATDORLIK ('Men nimam borsa - rahmat!'). Misol: Oila, do'st, sog'lik - haqpma deyish.",
                        "22. UMID ('Men kelajakka ishonaman!'). Misol: 'Men qila olaman!' 'Hammasi yaxshi bo'ladi!'",
                        "23. HAZIL ('Men kulaman va kuldiraman!'). Misol: Hazil aytish, kulmoq, hayotni yengil qabul qilish.",
                        "24. MA'NAVIYAT ('Men biror katta narsaning qismiman'). Misol: Din, tabiat, insoniyat - ulug' maqsad."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Yozish mashqlari (5 daq)",
              "tasks": [
                "1. 'Mening TOP-5 fazilatim' (3 daq): Jadval to'ldirish (#, Fazilat, Nima uchun?, Qanday ko'rsataman?).",
                "2. 'Fazilat hikoyam' (2 daq): 5-7 gap yozish: 'Bir kuni men ... (fazilat) ko'rsatdim. Bu shunday bo'ldi...'"
              ]
            }
          ]
        },
        {
          "sectionTitle": "5. TEXNOLOGIYA (20 daq)",
          "content": [
            {
              "type": "VOSITA 1: VIA Character Strengths Survey - Online test (5 daq)",
              "details": [
                "Tanishtiruv: VIA Institute - dunyo miqyosidagi fazilat tadqiqot markazi.",
                "Test: viacharacter.org, Bolalar versiyasi: 7-10 yosh (96 savol), 15-20 daqiqa, Bepul.",
                "Natija: 24 ta fazilat reytingi, TOP-5 'Signature Strengths' (Imzo fazilatlar), Tavsiyalar: Qanday rivojlantirish?.",
                "Sinf loyihasi: Har bola testni o'tkazadi, Natijalarni muhokama, 'Mening kuchli tomonlarim' poster, Bir-birini qo'llab-quvvatlash: 'Sen bu fazilatда kuchli!'",
                "Ehtiyot: Ingliz tili - tarjima kerak bo'lishi mumkin, Bolalarga yordam berish, Taqqoslash yo'q - har kim noyob!"
              ]
            },
            {
              "type": "VOSITA 2: Habitica - Gamification app (4 daq)",
              "details": [
                "Kontsepsiya: Hayot - o'yin! Fazilat - quest!",
                "Qanday ishlaydi: 1. Avatar yaratish (O'z qahramoningiz, Kiyim, qurol, pet (uy hayvon)). 2. Vazifalar (Habits/Dailies/To-Dos) (Habit: 'Halol so'zlash' (+10 ball), Daily: 'Har kuni 1 ta yaxshilik' (+20 ball), To-Do: 'Ota-onaga yordam' (+30 ball)). 3. Tajriba va level (Vazifani bajarish → XP (experience points), Level oshadi → Avatar kuchliroq). 4. Mukofotlar (Gold (oltin) yig'ish, Yangi kiyim, qurol sotib olish, Pet egallash). 5. Guilds (Gildiyalar) (Sinf - bitta guild, Birgalikda quest, Jamoa muvaffaqiyati).",
                "Sinf uchun: Umumiy quest: 'Fazilat drakoni'ni yengish, Har bola har kuni vazifalarni bajaradi, Birgalikda level oshiramiz, 1 oy - drakonni yengish → Bayram!",
                "Ehtiyot: Smartfon kerak (yoki kompyuter), Ota-onalar ruxsati, Monitoring - noto'g'ri ishlatmaslik."
              ]
            },
            {
              "type": "VOSITA 3: Padlet - 'Fazilat devori' (5 daq)",
              "details": [
                "Loyiha: 'Bizning sinf - Fazilat jamoasi!'.",
                "Struktura: 6 ta ustun = 6 ta asosiy fazilat, Har ustunda: bolalar postlari.",
                "Qanday qo'shish: POST formati: Rasm: Men yaxshilik qilyapman. Matn: 'Bugun men Valga matematikadan yordam berdim. U qiyin masalani tushunamayotgan edi. Men tushuntirganimda, u tushundi va xursand bo'ldi. Men ham baxtli edim! - Fazilat: YAXSHILIK '. Likes: 15. Comments: 'Zo'r, Ali!' 'Sen yaxshi do'stsan!'.",
                "Interaktiv: Har kuni kamida 1 ta post, Boshqalar , Izoh: Rag'batlantirish, Hafta oxiri: 'Eng ko'p fazilat ko'rsatgan' - maxsus mukofot.",
                "Ota-onalar: Ular ham ko'radi, Ular ham izoh qoldiradi, Uyda muhokama."
              ]
            },
            {
              "type": "VOSITA 4: Quizizz - 'Fazilat viktorinasi' (3 daq)",
              "details": [
                "Viktorina yaratish: 15 ta savol:",
                "1. Rasm: Bola yangi o'yin o'ylab topmoqda. Bu qaysi fazilat? a) Ijodkorlik ✓ b) Halollik c) Umid d) Kamtarlik",
                "2. 'Men yolg'on gapirmayman' - bu...? a) Qiziquvchanlik b) Halollik ✓ c) Hazil d) Mardlik",
                "3. Scenario: Ali exam'da qiyin. Javobni biladi, lekin nusxa ko'chirish - oson. Nima qiladi? a) Nusxa ko'chiradi b) O'zi ishlaydi ✓ c) Do'stdan so'raydi d) Beradi",
                "4. Video: Bola tog'ga chiqmoqda, qiyin. Bu qaysi fazilat? a) Qat'iyat ✓ b) Hazil c) Go'zallik d) Kamtarlik",
                "5. 'Men hammaga bir xil munosabatda bo'laman' - bu? a) Tenglik ✓ b) Mehr c) Mardlik d) Umid",
                "6. Fill in the blank: '_____ - bu rost so'zlash' a) Kamtarlik b) Hazil c) Halollik ✓ d) Umid",
                "7. Audio: Bola kulmoqda. Fazilat? a) Hazil ✓ b) Mardlik c) Ehtiyotkorlik d) Yetakchilik",
                "8. Poll: Sizda qaysi fazilat eng kuchli? [Open answers]",
                "9. True/False: Fazilat - bu faqat katta odamlar uchun. False ✓",
                "10. Open question: Sizning sevimli fazilatngiz va nima uchun?",
                "Gamifikatsiya: Avatar tanlash, Meme - qiziqarli reaktsiyalar, Leaderboard, Power-ups."
              ]
            },
            {
              "type": "VOSITA 5: Book Creator - 'Mening fazilat kitobim' (3 daq)",
              "details": [
                "Loyiha: Digital fazilat kitobi yaratish.",
                "Book Creator app: Mobil/Kompyuter, Oddiy ishlatish, Rasm, matn, audio, video qo'shish.",
                "Kitob tuzilmasi: Sahifa 1: Muqova (Ism: 'Mening Fazilat Kitobim', Muallif: [Bolaning ismi], Rasm: O'z rasmi yoki avatar). Sahifa 2-6: Mening TOP-5 fazilatim (Har sahifa: Fazilat nomi va emoji, 'Bu nima?' - ta'rif, 'Men qanday ko'rsataman?' - misol, Rasm yoki chizma, Audio: O'zim tushuntirish (30 sek)). Sahifa 7: Mening maqsadim ('Men qaysi fazilatni rivojlantirishni xohlayman?', Plan: Qanday?). Sahifa 8: Minnatdorchilik ('Kim menga fazilat o'rgatdi?', Rahmat - ota-ona, o'qituvchi, do'st). Sahifa 9: Orzu ('Men kelajakda qanday insonman?').",
                "Natija: PDF eksport, Ota-onalar bilan ulashish, Sinf kutubxonasida, Portfolio."
              ]
            }
          ]
        },
        {
          "sectionTitle": "MUSTAQIL ISH",
          "content": [
            {
              "type": "1. FAZILAT TARBIYASI DASTURI (O'qish/Yozish - 4000 so'z)",
              "details": [
                "To'liq struktura: I. Kirish (500 so'z) (Fazilat tarbiyasi zarurligi, Nazariy asoslar: Seligman, Peterson, Aristotel, O'zbekiston milliy qadriyatlari va ijobiy psixologiya sintezi). II. Maqsad va vazifalar (400 so'z) (Umumiy maqsad: Fazilatli shaxs tarbiyalash, Sinf bo'yicha maqsadlar, Kutilayotgan natijalar (bilim, munosabat, xatti-harakat)). III. Asosiy fazilаtlar tanlash (600 so'z) (24 tadan 10 ta muhimini tanlash, Nima uchun ana shular?, Yosh xususiyatlari va madaniy kontekst). IV. Yillik reja (1500 so'z) (1-sinf: 5 ta fazilat (har biri 7 hafta) (Yaxshilik, Qiziquvchanlik, Umid, Minnatdorlik, Hazil). 2-sinf: 5 ta fazilat (Halollik, Qat'iyat, Jamoadorlik, Kechirimlilik, Ijodkorlik). 3-sinf: 5 ta fazilat (Tenglik, Yetakchilik, Perspektiva, Ehtiyotkorlik, Go'zallik). 4-sinf: 5 ta fazilat (chuqurlashtirish) (Mardlik, Ochiq fikrlilik, Ijtimoiy aql, O'z-o'zini boshqarish, Ma'naviyat). Har fazilat uchun: Haftalik faoliyat rejasi, Hikoya va adabiyot, Amaliy mashq, Oila ishtiroki). V. Metodlar (500 so'z) (10 ta asosiy metod batafsil, Har biriga 2-3 ta misol). VI. Baholash (300 so'z) (Portfolio, Kuzatuv, O'z-o'zini baholash). VII. Ilova (200 so'z) (10 ta to'liq dars rejasi, Resurslar ro'yxati)."
              ]
            },
            {
              "type": "2. MULTIMEDIYA TAQDIMOT (Vizual + Texnologiya - 30 slayd)",
              "details": [
                "'24 ta Fazilat - Bolalar uchun'.",
                "Qismlar: Kirish (3 slayd): Fazilat nima? Nima uchun muhim? 6 ta asosiy kategoriya. Asosiy qism (24 slayd): Har fazilat uchun 1 slayd (Nomi va emoji, Oddiy ta'rif, Misol (rasm/video), 'Men qanday ko'rsataman?' (konkret), Mini-mashq). Xulosa (3 slayd): VIA test taklifı, Resurslar, 'Fazilat safari' ga taklif.",
                "Texnik: PowerPoint/Prezi/Canva, Interaktiv elementlar, Audio tushuntirish har slaydda, Animatsiya, QR kodlar (qo'shimcha ma'lumot)."
              ]
            },
            {
              "type": "3. PODKAST SERIYASI (Audio - 12 qism × 15 daq)",
              "details": [
                "'Fazilat Sarguzashtlari' - Bolalar podkasti.",
                "Har qism: Intro: Qiziqarli musiqa (30 sek), Hikoya: Fazilat haqida dramatik audio-hikoya (7 daq), Tahlil: 'Nima o'rgandik?' (3 daq), Mashq: 'Uy uchun vazifa' (2 daq), Qo'shiq: Fazilat qo'shiqi (2 daq), Outro: Keyingi qism anonsı (30 sek).",
                "12 qism - 12 ta fazilat: 1. Qiziquvchanlik safari. 2. Halollik qahramoni. 3. Mardlik chaqiruvi. 4. Mehr sarguzashti. 5. Jamoadorlik kuchi. 6. Qat'iyat yo'li. 7. Umid nuri. 8. Minnatdorchilik daftari. 9. Hazil kuni. 10. Go'zallik qidirish. 11. Kechirimlilik o'rganish. 12. Ma'naviyat tepasi.",
                "Texnik: Professional audio, Bolalar ovozlari, Sound effects, Musiqa, Anchor/Spotify."
              ]
            },
            {
              "type": "4. VIDEO SERIYALI (Kinestetik - 10 qism × 7 daq)",
              "details": [
                "'Super Fazilat Jamoasi' - Mini-seriya.",
                "Konsepsiya: 5 ta bola - har biri alohida fazilat superqahramoni!",
                "Qahramonlar: Ali - 'Captain Halol' (Halollik), Zarina - 'Mehr Girl' (Mehr va yaxshilik), Javohir - 'Qat'iy Warrior' (Qat'iyat), Madina - 'Umid Star' (Umid), Sardor - 'Laugh Master' (Hazil).",
                "Har qism: Muammo: Shahar/Maktabda muammo, Jamoalashtirish: 5 bola birlashadi, Fazilat kuchi: Har biri o'z fazilati bilan yordam beradi, Yechim: Birgalikda muammoni hal qiladi, Xulosa: 'Fazilat - haqiqiy super qudrat!'.",
                "Qismlar: 1. Yolg'onlar shahri. 2. G'azab chudosi. 3. Umidsizlik suvi. 4. Hasad o'ti. 5. Dangasalik uyqusi. 6. Adolatsizlik qasri. 7. Savolsizlik cho'li. 8. Noshukurlik tuneli. 9. Kulishsizlik qishloqi. 10. Final: Barcha yomonliklarni yengish.",
                "Texnik: Aktyorlik: Haqiqiy bolalar, Oddiy kostum va rekvizit, Green screen (maxsus effektlar), Montaj: Dinamik, YouTube, Instagram."
              ]
            },
            {
              "type": "5. INTERAKTIV VEBSAYT + MOBIL APP (Texnologiya)",
              "details": [
                "'Fazilat Sayohati' - Gamification platform.",
                "Vebsayt: Google Sites / WordPress.",
                "Asosiy funksiyalar: 1. Dashboard (Profil: Avatar, Level, XP, Mening fazilatlarim: TOP-5, Joriy quest, Jamoa reytingi). 2. 24 ta Fazilat Xonalari (Har xona: Ta'rif va video, Hikoyalar, Mashqlar va o'yinlar, Quiz, 'Men sinab ko'rdim' - bolalar postlari). 3. Kundalik Quest (Har kun yangi vazifa, Misol: 'Bugun 3 ta odamga yordam ber', Bajarilgandan keyin - XP va badge). 4. Fazilat Jurnali (Kundalik yozuv, 'Bugun men qanday fazilat ko'rsatdim?', Audio/Video/Text, Private yoki Public). 5. Jamoa Arena (Sinf reytingi, Jamoaviy questlar, 'Fazilat Olimpiadasi' - oylik musobaqa). 6. Ota-onalar Zonasi (Qo'llanmalar, Bolaning progress, Resurslar). 7. Fazilat Do'koni (XP yig'ilsa - sotib olish, Avatar kiyimi, Badge va sertifikat, Real mukofot (maktabda)).",
                "Mobil App: (Flutter/React Native) (Push notifications: 'Vazifangizni unutmang!', QR scanner: Fazilat kodlarini skanerlash (maktab ichida), Photo journal: Rasm olish va joylashtirish, Offline rejim).",
                "Texnik: Responsive design, API integratsiya, Gamification mechanics, Analytics.",
                "Topshirish: 4 hafta."
              ]
            }
          ]
        },
        {
          "sectionTitle": "XULOSA",
          "content": [
            "FAZILAT = ICHKI GO'ZALLIK",
            "24 TA FAZILAT → ∞ IMKONIYAT",
            "BILISH → TUSHUNISH → HIS QILISH → SINASH → MASHQ → ODATGA AYLANTIRISH",
            "Har bola - Noyob fazilat to'plami!",
            "Fazilat - o'rgatish mumkin va kerak.",
            "Ijobiy psixologiya - nazariy asos.",
            "6-10 yosh - oltin davr.",
            "Namuna, hikoya, amaliyot - metodlar.",
            "Portfolio, kuzatuv - baholash.",
            "Oila hamkorligi - muhim.",
            "Texnologiya - zamonaviy vosita."
          ]
        }
      ]
    },
    {
      "id": "maruza-10-oz-ustida-ishlash-konikmalari",
      "title": "MA'RUZA 10: O'quvchilarning o'z ustida ishlash ko'nikmalari va buning ahamiyati",
      "duration": "90 daqiqa",
      "sections": [
        {
          "sectionTitle": "1. VIZUAL (10 daq)",
          "content": [
            {
              "type": "Slayd-prezentatsiya",
              "details": [
                "O'Z USTIDA ISHLASH PIRAMIDASI",
                "O'Z-O'ZINI RIVOJLANTIRISH (tepada)",
                "O'Z-O'ZINI BOSHQARISH",
                "O'Z-O'ZINI BAHOLASH",
                "O'Z-O'ZINI ANGLASH",
                "O'Z-O'ZINI QABUL QILISH (pastda)",
                "Zimmerman O'Z-O'ZINI TARTIBGA SOLISH modeli: Forethought (Oldindan o'ylash) → Performance (Bajarish) → Self-Reflection (O'z-o'zini baholash) → [tsikl]"
              ]
            },
            {
              "type": "Infografikalar",
              "details": [
                "Growth Mindset vs Fixed Mindset (Dweck): FIXED: 'Men qobiliyatsizman', 'Men hali o'rganmaganman', 'Bu juda qiyin!', 'Bu meni o'stiradi!', 'Men yutqazdim', 'Men saboq oldim'. GROWTH: 'Men o'rganaman, mashq qilaman va YAXSHIROQ bo'laman!'",
                "O'z ustida ishlash ko'nikmalari doirasi: Maqsad qo'yish, Rejalashtirish, Vaqtni boshqarish, Konsentratsiya, Qat'iyat, O'z-o'zini baholash, Refleksiya, O'zgartirishga tayyor bo'lish.",
                "Yosh bo'yicha rivojlanish: 6-7 yosh: Oddiy maqsadlar. 8-9 yosh: Qisqa muddatli rejalar. 10-11 yosh: Uzoq muddatli maqsadlar."
              ]
            },
            {
              "type": "Video",
              "details": [
                "'Growth Mindset' - Carol Dweck (4 daq, bolalar versiyasi)",
                "'Men qila olaman!' - motivatsion video (3 daq)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "2. AUDIO (10 daq)",
          "content": [
            {
              "type": "PODKAST: 'O'z ustida ishlash - super qudrat!'",
              "parts": [
                {
                  "QISM": "1: O'z ustida ishlash nima? (4 daq)",
                  "speaker": "[Psixolog - Dr. Normatova]",
                  "text": "'Tasavvur qiling: Siz - mashina. Ota-ona va o'qituvchilar - haydovchilar. Ular sizni boshqaradi, to'g'rimi? Lekin bir kun siz KATTA bo'lasiz. Endi KIM boshqaradi? SIZ o'zingiz! O'z ustida ishlash - bu o'zingizni o'zingiz boshqarish. Bu 4 ta qismdan iborat: 1. O'Z-O'ZINI ANGLASH: 'Men kimman? Mening kuchli va zaif tomonlarim nima?' Misol: 'Men matematik yaxshi, lekin yozishda qiyinlanaman.' 2. O'Z-O'ZINI BAHOLASH: 'Men qanday ish qildim? Yaxshi? Yomonmi? Nima uchun?' Misol: 'Men bu topshiriqda 70% to'g'ri qildim. 30% - xato. Xatolarim qayerda?' 3. O'Z-O'ZINI BOSHQARISH: 'Men o'z xatti-harakatim, emotsiyalarim, vaqtimni boshqaramanmi?' Misol: 'Men g'azablanyapman, lekin to'xtayman va 10 sanayman.' 4. O'Z-O'ZINI RIVOJLANTIRISH: 'Men qanday yaxshiroq bo'laman? Maqsadlarim nima?' Misol: 'Men har kuni 10 sahifa kitob o'qiyman - bu meni yaxshilaydi.' Nima uchun muhim? Bola o'z ustida ishlamasa: Doim boshqalarga bog'liq. O'z xatolaridan o'rganmaydi. Maqsadga yetolmaydi. Tashqi motivatsiya - ichki emas. Bola o'z ustida ishlasa: Mustaqil, Mas'uliyatli, O'sib boruvchi, Ichki motivatsiya. Bu - HAYOT KO'NIKMASI! Maktabda, ishda, oilada - hamma joyda kerak!'",
                  "summary": "O'z ustida ishlashning ta'rifi, uning 4 asosiy qismi (o'z-o'zini anglash, baholash, boshqarish, rivojlantirish) va ahamiyati."
                },
                {
                  "QISM": "2: Hikoya - 'Ikki talaba' (3 daq)",
                  "speaker": "[Dramatik audio]",
                  "text": "'Bir maktabda ikkita talaba bor edi: Ali va Vali. Ikkalasi ham bir xil yoshda, bir xil sinfda. BIRINCHI IMTIHON: Ali: 60 ball. 'Men qobiliyatsizman! Men hech qachon yaxshi bo'lmayman!' Vali: 60 ball. 'Yaxshi emas, lekin men o'rganaman. Keyingi safar yaxshiroq qilaman!' IKKINCHI IMTIHON: Ali o'qimadi. 'Baribir foyda yo'q!' 50 ball. Vali rejalaштirdi: Har kuni 1 soat. Qiyin joylarni yana o'qidi. 75 ball! UCHINCHI IMTIHON: Ali: 'Men eng yomon o'quvchiman!' 45 ball. To'xtadi o'qishni. Vali: 'Men o'sib borayapman!' 85 ball. Davom etdi. YIL OXIRI: Ali: 'Maktab men uchun emas.' O'qishni tashlab yubordi. Vali: 'Men boshlang'ichda qiynaldim, lekin hozir eng yaxshi o'quvchilardanman!' FARQ NIMA EDI? Ali - Fixed Mindset: 'Men shundayman, o'zgara olmayman.' Vali - Growth Mindset: 'Men harakat qilsam, o'saman!' SABОQ: Sizning aqlingiz - mushak kabi. Mashq qilsangiz - kuchliroq bo'ladi! Muvaffaqiyat - qobiliyatdan emas, HARAKATdan kelib chiqadi!'",
                  "summary": "Fixed Mindset (Ali) va Growth Mindset (Vali) o'rtasidagi farqni ko'rsatuvchi hikoya va muvaffaqiyatning harakatga bog'liqligi."
                },
                {
                  "QISM": "3: Amaliy maslahatlar (3 daq)",
                  "speaker": "[O'qituvchi - Karimova Gulnora]",
                  "text": "'Men bolalarga o'z ustida ishlashni qanday o'rgataman? 5 ta oddiy usul: 1. MAQSAD DAFTARI Har bola kichkina daftар. Har hafta 1 ta maqsad yozish. Misol: 'Bu hafta men 5 ta yangi so'z o'rganaman.' Hafta oxiri: Erishdimmi? Ha/Yo'q. Nega? 2. 'MEN QILA OLAMAN!' DEVORI Sinf devoriga katta qog'oz. Har bola yozadi: 'Men qila olaman: velosipedda yurish!' 'Men qila olaman: 100 gacha sanash!' Ko'proq yozilishi - kuchroq ishonch! 3. XATOLAR BAYRAMI Har oyda 1 kun - 'Xatolar kuni!' Bolalar eng katta xatolarini aytishadi. 'Men nima o'rgandim?' Xato - yomon emas, o'rganish! 4. PROGRESS GRAFIGI Har bola o'z grafikasini chizadi. Masalan: O'qish tezligi (daqiqada so'z) Har hafta o'lchab, nuqta qo'yadi. Chiziq yuqoriga - o'sish ko'rinadi! 5. 'MENING KUCHIM' JURNALI Har kuni: Bugun men nima qildim? (yaxshi), Men nima o'rgandim?, Ertaga nima qilaman? Bu oddiy, lekin JUDA kuchli! Eslab qoling: O'z ustida ishlash - jarayon, natija emas. Har kun biroz-biroz!'",
                  "summary": "Bolalarda o'z ustida ishlash ko'nikmalarini rivojlantirish bo'yicha 5 ta amaliy maslahat: maqsad daftari, 'men qila olaman!' devori, xatolar bayrami, progress grafigi, 'mening kuchim' jurnali."
                }
              ]
            }
          ]
        },
        {
          "sectionTitle": "3. KINESTETIK (15 daq)",
          "content": [
            {
              "type": "Mashq 1: 'Fixed vs Growth Mindset' harakati (5 daq)",
              "details": [
                "O'yin: Sinfning bir tomoni: FIXED, Ikkinchi tomoni: GROWTH. O'qituvchi gap aytadi. Bolalar to'g'ri tomonga yuguradilar.",
                "Gaplar: 1. 'Men matematikani tushunmayman' → FIXED. 2. 'Men hali tushunmaganman, lekin o'rganaman' → GROWTH. 3. 'Bu juda qiyin!' → FIXED. 4. 'Bu qiyin, lekin qiziqarli!' → GROWTH. 5. 'Men yomon o'quvchiman' → FIXED. 6. 'Men harakat qilaman va yaxshiroq bo'laman' → GROWTH. 7. 'Muvaffaqiyat - omad' → FIXED. 8. 'Muvaffaqiyat - mehnat' → GROWTH. 9. 'Boshqalar meнdan yaxshi' → FIXED. 10. 'Men boshqalardan o'rganaman' → GROWTH.",
                "Muhokama: Qaysi tomonda ko'proq yugurgan? Qaysi fikrlash yaxshiroq? Nima uchun? Men o'zimda qanday fikrlashni xohlayman?"
              ]
            },
            {
              "type": "Mashq 2: 'Maqsad yo'li' - Jismoniy modellashtirish (6 daq)",
              "details": [
                "Tayyorlov: 5 ta kartochka, yerga qo'yilgan: 1. Maqsad. 2. Reja. 3. Harakat. 4. To'siq. 5. Muvaffaqiyat.",
                "Faoliyat: Qadаm 1: Maqsad (1 daq) (Bola 1-kartochkaga turadi, 'Mening maqsadim: Velosipedda yurish!', Barcha eshitadi va qo'lqoplaydı). Qadam 2: Reja (1 daq) (2-kartochkaga qadam, 'Mening rejam: Har kun 30 daqiqa mashq qilish!'). Qadam 3: Harakat (1 daq) (3-kartochkaga qadam, Harakat qilish (pantomima) - velosiped haydash harakatlari!). Qadam 4: To'siq (2 daq) (4-kartochka oldida to'хtash, 'To'siq: Men yiqildim! Og'ridi!', Nima qilaman? 2 ta variant: Fixed: Orqaga qaytish (1-kartochkaga), Growth: To'siqni sakrash (davom etish). Bola tanlaydi - Growth! Sakraydi 4-kartochka ustidan!). Qadam 5: Muvaffaqiyat (1 daq) (5-kartochkaga turadi, 'Men erishdim! Men velosipedda yuryapman!', Hamma qo'lqoplaydi, tebranadi!).",
                "3-4 ta bola navbat bilan.",
                "Xulosa: Maqsadga erishish - to'g'ri chiziq emas, to'siqlar bor. Lekin biz davom etamiz!"
              ]
            },
            {
              "type": "Mashq 3: 'Progress Raqsi' (4 daq)",
              "details": [
                "Kontsepsiya: O'sish - harakatda!",
                "Raqslar: 1. 'Kichkina men' (boshlang'ich) (Cho'kib, kichik bo'lish, Qo'llar pastda). 2. 'O'rganish' (jarayon) (Asta-asta turishga harakat, Qo'llar yuqoriga ko'tariladi, Ba'zan yiqilish (cho'kish) - lekin yana turish!). 3. 'Katta men' (natija) (To'liq tik turish, Qo'llar yuqorida, Sakrash - 'Men qila oldim!').",
                "Musiqa: Motivatsion (Eye of the Tiger, Survivor, va shunga o'xshash).",
                "Guruh: Hamma birgalikda!",
                "Xulosa: O'sish - jarayon. Ba'zan qiyin, lekin biz davom etamiz va KATTA bo'lamiz!"
              ]
            }
          ]
        },
        {
          "sectionTitle": "4. O'QISH/YOZISH (25 daq)",
          "content": [
            {
              "type": "O'qish materiallari",
              "sections": [
                {
                  "heading": "MATN 1: 'O'z ustida ishlash: nazariya va amaliyot' (15 daq)",
                  "subsections": [
                    {
                      "title": "O'Z USTIDA ISHLASH KO'NIKMALARI",
                      "points": [
                        "I. NAZARIY ASOSLAR:",
                        "O'Z-O'ZINI TARTIBGA SOLISH (Self-Regulation): Shaxsning o'z fikrlash, emotsiya va xatti-harakatlarini ongli ravishda boshqarish qobiliyati.",
                        "ASOSIY NAZARIYALAR: 1. Zimmerman (2000) - O'z-o'zini tartibga soluvchi o'rganish (Self-Regulated Learning). TSIKL: a) Forethought (Oldindan o'ylash) - Maqsad qo'yish, Strategik rejalashtirish, O'z-o'zini motivatsiya qilish. b) Performance (Bajarish) - O'z-o'zini kuzatish, Diqqatni boshqarish, Strategiyalarni qo'llash. c) Self-Reflection (O'z-o'zini baholash) - O'z-o'zini baholash, Sabablarga attribution, O'z-o'ziga reaktsiya.",
                        "2. Carol Dweck (2006) - Growth Mindset nazariyasi. FIXED MINDSET: 'Qobiliyat tug'ma, o'zgarmas', Xatolardan qo'rqish, Qiyinchilikdan qochish, Boshqalar muvaffaqiyatidan xafа bo'lish. GROWTH MINDSET: 'Qobiliyat - rivojlantirish mumkin', Xatolar - o'rganish imkoniyati, Qiyinchiliklar - o'sish, Boshqalardan ilhomlanish.",
                        "3. Deci & Ryan (2000) - O'z-determinatsiya nazariyasi. 3 ta ASOSIY EHTIYOJ: Avtonomiya: O'zim qaror qilish, Kompetensiya: Men qila olaman, Aloqadorlik: Men jamoaga tegishli.",
                        "II. O'Z USTIDA ISHLASH KOMPONENTLARI:",
                        "1. O'Z-O'ZINI ANGLASH (Self-Awareness). TA'RIF: O'z kuchli/zaif tomonlarini, qiziqishlarini, qadriyatlarini bilish. RIVOJLANTIRISH: 'Men kimman?' savollari, Kuchli tomonlarni topish (VIA test), Refleksiv yozish, Feedback qabul qilish. BOSHLANG'ICH SINFDA: 6-7 yosh: 'Men nimani yaxshi ko'raman?', 8-9 yosh: 'Men nimani yaxshi qilaman?', 10-11 yosh: 'Mening kuchli tomonlarim nima?'.",
                        "2. O'Z-O'ZINI BAHOLASH (Self-Assessment). TA'RIF: O'z ishini ob'ektiv baholash qobiliyati. RIVOJLANTIRISH: Rubrika va mezonlar bilan ishlash, 'Traffic Light' - yashil/sariq/qizil, Portfoliо va progress ko'rish, Hamkasblardan feedback. BOSHLANG'ICH SINFDA: Oddiy mezonlar (3-5 ta), Vizual skaela (1-5 yulduz, smayl), 'Men nima qildim yaxshi? Nima yaxshilash mumkin?'.",
                        "3. MAQSAD QO'YISH (Goal Setting). TA'RIF: Aniq, erishish mumkin bo'lgan maqsadlarni belgilash. SMART maqsad: Specific (Aniq), Measurable (O'lchanadigan), Achievable (Erishish mumkin), Relevant (Muhim), Time-bound (Muddatli). BOSHLANG'ICH SINFDA: 6-7 yosh: Qisqa muddatli (1 hafta) ('Men har kuni 5 sahifa kitob o'qiyman'). 8-9 yosh: O'rta muddat (1 oy) ('Men bu oy 100 ta yangi so'z o'rganaman'). 10-11 yosh: Uzoq muddat (1 yil) ('Men 4-sinfni eng yaxshi baholar bilan tugataman').",
                        "4. REJALASHTIRISH (Planning). TA'RIF: Maqsadga erishish uchun qadamlarni belgilash. JARAYON: 1. Maqsadni aniqlash. 2. Qadamlarni sanash. 3. Resurslarni topish. 4. Vaqt belgilash. 5. To'siqlarni oldindan ko'rish. BOSHLANG'ICH SINFDA: Vizual: Rasmda ketma-ketlik, Checklist: ☐ → ✓, Timeline: Vaqt chizig'i.",
                        "5. VAQTNI BOSHQARISH (Time Management). TA'RIF: Vaqtni samarali taqsimlash va ishlatish. TEXNIKALAR: Prioritet: Muhim-Shoshilinch matritsasi, Pomodoro: 25 daq ish + 5 daq tanaffus, Kundalik jadval, To-Do list. BOSHLANG'ICH SINFDA: Oddiy jadval (soat bilan), Vizual timer, 'Birinchi ish, keyin o'yin' qoidasi.",
                        "6. KONSENTRATSIYA (Concentration). TA'RIF: Diqqatni biror vazifaga yo'naltirish va ushlab turish qobiliyati. RIVOJLANTIRISH: Chalg'ituvchilarni olib tashlash, Qiziqish orqali, Qisqa mashqlar, vaqt oshirish, Mindfulness (onglilik). BOSHLANG'ICH SINFDA: 6-7 yosh: 10-15 daq, 8-9 yosh: 20-25 daq, 10-11 yosh: 30-35 daq.",
                        "7. QAT'IYAT (Perseverance/Grit). TA'RIF: Qiyinchiliklarga qaramay maqsadga erishish uchun harakat qilish. Angela Duckworth (2016): GRIT = Passion + Persistence. RIVOJLANTIRISH: 'Hali' so'zidan foydalanish, Qiyin vazifalar berish (mos darajada), Muvaffaqiyat hikoyalari, 'Fail forward' - xatolar orqali o'rganish.",
                        "8. O'Z-O'ZINI BOSHQARISH (Self-Control). TA'RIF: Impulslarni, emotsiyalarni nazorat qilish. TEXNIKALAR: 'Stop and Think' - to'xta va o'yla, Deep breathing - chuqur nafas, Counting - 10 gacha sanash, Self-talk - o'zi bilan gapirish. MARSHMALLOW TEST (Mischel, 1972): Bolalar 1 ta zefir hozir yoki 2 ta 15 daqiqadan keyin? O'z-o'zini boshqarish - kelajak muvaffaqiyati bashorati!",
                        "9. REFLEKSIYA (Reflection). TA'RIF: O'z tajribasini tahlil qilish, saboq olish. SAVOLLAR: Nima bo'ldi? Nima yaxshi chiqdi? Nima qiyin edi? Nima o'rgandim? Keyingi safar nima qilaman? BOSHLANG'ICH SINFDA: Kundalik yozish, Guruhda baham ko'rish, 'Exit ticket' - dars oxirida.",
                        "10. O'ZGARISHGA TAYYOR BO'LISH (Adaptability). TA'RIF: Yangi vaziyatlarga moslashish qobiliyati. RIVOJLANTIRISH: Turli vaziyatlar bilan tanishish, 'Reja B' o'ylash, Xatolar - imkoniyat, Yangilikka ochiq bo'lish.",
                        "III. YOSH XUSUSIYATLARI: 6-7 YOSH (1-sinf): Konkret fikrlash, Qisqa muddatli maqsadlar (1 kun - 1 hafta), Tashqi motivatsiya (rag'bat, maqtov), Namunaga taqlid, O'yinlar orqali o'rganish. Fokus: O'z-o'zini anglash, oddiy maqsadlar, qat'iyat. 8-9 YOSH (2-3-sinf): Sabab-oqibat tushunish, O'rta muddatli maqsadlar (1 oy), Ichki motivatsiya paydo bo'ladi, O'z-o'zini baholash boshlanadi, Hamkasblar ta'siri o'sadi. Fokus: Maqsad va reja, vaqt boshqarish, o'z-o'zini baholash. 10-11 YOSH (4-sinf): Abstrakt fikrlash elementlari, Uzoq muddatli maqsadlar (1 yil), Ichki motivatsiya kuchliroq, O'z-o'zini tanqidiy baholash, Mustaqillikka intilish. Fokus: Barcha ko'nikmalar kompleks, chuqurlashtirish.",
                        "IV. AMALIY STRATEGIYALAR: 10 TA ODDIY USUL: 1. MAQSAD DAFTARI (Har hafta 1 ta maqsad, SMART format, Erishdimmi? Tahlil). 2. PROGRESS GRAFIGI (Vizual: O'sishni ko'rish, Motivatsiya oshadi). 3. TO-DO LIST (Har kuni 3-5 ta vazifa, ✓ - baxtli his). 4. 'HALI' SO'ZI ('Men bilmayman' → 'Men HALI bilmayman', Growth Mindset). 5. REFLEKSIV JURNAL (Har kuni yoki hafta, 'Nima o'rgandim?'). 6. TIMER TEXNIKASI (Pomodoro: 25+5, Konsentratsiya). 7. 'XATOLAR ALBOMI' (Xatolar - o'rganish, Stigma olib tashlash). 8. FEEDBACK MADANIYATI ('2 stars and a wish', Konstruktiv). 9. ROL MODEL (Muvaffaqiyatli insonlar, Ular ham qiynalgan!). 10. NISHONLASH (Har yutuq - nishonlash, Jarayon muhim, natija ham)."
                      ]
                    }
                  ]
                },
                {
                  "heading": "MATN 2: 'Growth Mindset - bolalar uchun' (10 daq o'qish)",
                  "subsections": [
                    {
                      "title": "GROWTH MINDSET: O'SUVCHI FIKRLASH",
                      "points": [
                        "HIKOYA: Ikki Miya. Tasavvur qiling, sizning miyangiz - mushak. Ha, mushak! Agar mushakni mashq qilsangiz - u KUCHLIROQ bo'ladi. Agar mashq qilmasangiz - u ZAIF qoladi. Miya ham xuddi shunday!",
                        "FIXED MINDSET MIYA: 'Men tug'ma aqlliman yoki qobiliyatsizman. O'zgarmayman.' Bu Miya o'ylaydi: 'Men matematikani tushunmayman - hech qachon!', 'Boshqalar menga nisbatan aqlli', 'Xato qilish - yomon, sharmanda bo'laman', 'Qiyin vazifa? Yo'q, men qila olmayman'. Bu Miya nima qiladi? Xatolardan qo'rqadi, Qiyinchilikdan qochadi, Harakat qilmaydi, 'Men qobiliyatsizman' deydi. NATIJA: Bu Miya O'SMAYDI.",
                        "GROWTH MINDSET MIYA: 'Men o'rganaman, mashq qilaman va YAXSHIROQ bo'laman!' Bu Miya o'ylaydi: 'Men HALI tushunmayman, lekin o'rganaman!', 'Boshqalar menga ilhom beradi', 'Xato - o'rganish imkoniyati!', 'Qiyin? Qiziqarli! Sinab ko'raman!'. Bu Miya nima qiladi? Xatolardan o'rganadi, Qiyinchiliklarni qabul qiladi, Harakat qiladi, 'Men harakat qilaman!' deydi. NATIJA: Bu Miya O'SADI!",
                        "ILMIY DALIL: Carol Dweck - professor. U 30 yil tadqiqot qildi. Kashfiyoti: 'Bolalar fikrlash tarziga qarab ikki guruhga bo'linadi: Fixed va Growth. Growth Mindset bolalar: Ko'proq harakat qiladi, Xatolardan qo'rqmaydi, Natijada - KO'PROQ O'RGANADI!'",
                        "QANDAY O'ZGARTIRISH? FIXED so'z → GROWTH so'z: 'Men qila olmayman' → 'Men HALI qila olmayman'. 'Bu juda qiyin!' → 'Bu qiyin, lekin sinab ko'raman!'. 'Men yomon o'quvchiman' → 'Men o'sib borayapman!'. 'Men xato qildim - yomon!' → 'Men xato qildim - o'rgandim!'. 'U menga nisbatan yaxshi' → 'Men undan o'rganaman!'. 'Men tez taslim bo'laman' → 'Men qat'iyatli bo'laman!'. 'Muvaffaqiyat - omad' → 'Muvaffaqiyat - mehnat!'",
                        "AMALIY MASHQ: Har safar Fixed fikr kelganda: 1. TO'XTA! 2. 'Bu Fixed fikr' - tan ol. 3. Growth fikrga o'zgartir. 4. Harakat qil! Misol: Fixed: 'Men bu masalani yecha olmayman'. TO'XTA! → 'Men HALI yecha olmayman. Yordam so'rayman va o'rganaman!'",
                        "ESLAB QOLING: 'Sizning miyangiz - ajoyib! U o'sishi mumkin! Siz harakat qilsangiz - siz o'sasiz! Siz GROWTH MINDSET egasisiz!'"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Yozish mashqlari (5 daq)",
              "tasks": [
                "1. Fixed → Growth o'zgartirish (3 daq): Jadval to'ldirish (Fixed Mindset, Growth Mindset ustunlari bilan).",
                "2. Mening o'sish rejam (2 daq): 5 ta gap: Men qaysi sohada o'sishni xohlayman? Mening maqsadim nima? (SMART) Qanday harakat qilaman? Qanday to'siqlar bo'lishi mumkin? Men qanday motivatsiya qilaman o'zimni?"
              ]
            }
          ]
        },
        {
          "sectionTitle": "5. TEXNOLOGIYA (20 daq)",
          "content": [
            {
              "type": "VOSITA 1: Todoist - Vazifalar boshqarish (5 daq)",
              "details": [
                "Tanishtiruv: Todoist - eng mashhur To-Do list ilovasi.",
                "Imkoniyatlar: 1. Vazifalar yaratish (Oddiy: 'Matematika uy vazifasi', Muddatli: 'Ertaga soat 16:00 ga', Prioritet: Muhim, O'rtacha, Oddiy). 2. Loyihalar ('Maktab', 'Uy ishlari', 'Shaxsiy rivojlanish', Har biriga vazifalar). 3. Qayta takrorlanuvchi vazifalar ('Har kuni 10 sahifa kitob o'qish', 'Dushanba va Chorshanba - ingliz tili', Avtomatik yaratiladi!). 4. Karma ballar (Vazifa bajarildi → ball, Streak (ketma-ketlik) → bonus, Gamifikatsiya!). 5. Integratsiya (Google Calendar, Siri/Google Assistant: 'Todoist'ga vazifa qo'sh').",
                "Sinf uchun: Har bola o'z Todoist'i, Haftalik 'Productivity Hero' - eng ko'p vazifa bajargan, O'qituvchi: Vazifalarni ko'rishi mumkin (premium).",
                "Alternativalar: Microsoft To Do, Google Tasks, Any.do."
              ]
            },
            {
              "type": "VOSITA 2: Forest - Fokus va konsentratsiya (4 daq)",
              "details": [
                "Kontsepsiya: Fokus = Daraxt o'sishi!",
                "Qanday ishlaydi: 1. Daraxt ekish (Vazifa boshlanadi, Timer: 25 daq (Pomodoro), Telefonni qo'ymang!). 2. Daraxt o'sishi (25 daqiqa - telefon qo'yilgan, Ekranda daraxt o'sib boradi, Go'zal animatsiya). 3. Agar telefon olsangiz... (Daraxt O'LADI! 💀, Qora daraxt qoladi, Afsus!). 4. Muvaffaqiyat (25 daq o'tdi - daraxt KATTA!, Sizning o'rmoningizga qo'shiladi, Ko'p daraxt = Ko'p fokus!). 5. Haqiqiy daraxtlar (Virtual coin yig'iladi, Coin bilan HAQIQIY daraxt ektiriladi!, Forest + Trees for the Future hamkorligi, Siznig fokus → Yerda daraxt!).",
                "Sinf challenge: 'Bir oyda 100 ta daraxt o'stiramiz!'",
                "Alternativalar: Flora, SelfControl, Freedom."
              ]
            },
            {
              "type": "VOSITA 3: Habitica - O'z hayotni o'yinga aylantir (5 daq)",
              "details": [
                "[Ma'ruza 9 da batafsil, lekin qisqa eslatma].",
                "O'z ustida ishlash uchun: 1. Dailies (Kundalik vazifalar) ('Maqsad daftarimni ko'rib chiqish' (+20 XP), 'Refleksiya yozish' (+30 XP), 'To-Do list tayyorlash' (+10 XP)). 2. Habits (Odatlar) ('Growth Mindset gapirish' (+10 XP, -10 XP), 'Vaqtida uyg'onish' (+15 XP), 'Prokrastinatsiya qilmaslik' (+20 XP)). 3. Quests (Jamoaviy maqsadlar) (Sinf birgalikda 'O'z ustida ishlash drakoni'ni yengadi, Har bola o'z vazifalarini bajarsa - drakon zaifroq, 1 oy - drakonni yengish!)."
              ]
            },
            {
              "type": "VOSITA 4: Google Forms + Sheets - Progress tracker (3 daq)",
              "details": [
                "Yaratish: FORM: 'Mening kundalik progressim'. KUNDALIK O'Z-O'ZINI BAHOLASH. Sana: [Avtomatik]. 1. Bugun maqsadlarimga yaqinlashdimmi? (1-5). 2. Men qanday qildim? (har biri 1-5) - Maqsad qo'yish:, Rejalashtirish:, Konsentratsiya:, Qat'iyat:, Refleksiya:. 3. Bugun eng katta yutuqim: [Short answer]. 4. Bugun qiyinchilik: [Short answer]. 5. Ertaga nima qilaman? [Short answer].",
                "Google Sheets: Form javoblari avtomatik Sheets'ga tushadi, Chart yaratish: Progress grafikilari, Vaqt bo'yicha o'zgarish ko'rinadi!",
                "Imkoniyatlar: Har kun to'ldirish - 2 daqiqa, Hafta/oy oxirida - tahlil, O'sish ko'rinadi - motivatsiya!"
              ]
            },
            {
              "type": "VOSITA 5: MindMeister - Maqsad xaritasi (3 daq)",
              "details": [
                "Mind Map - Maqsad rejalashtirish: [MENING YILLIK MAQSADIM]. [MAKTAB] [UY] [SHAXSIY] (har bir branch (tarmoq): Aniq maqsad, Qadamlar, Resurs, Deadline, Progress indicator).",
                "Imkoniyatlar: Vizual - ko'rish oson, Rangli - qiziqarli, Ulashish - ota-ona ko'radi, Mobil/Desktop.",
                "Alternativalar: Coggle, XMind, SimpleMind."
              ]
            }
          ]
        },
        {
          "sectionTitle": "MUSTAQIL ISH",
          "content": [
            {
              "type": "1. O'Z USTIDA ISHLASH DASTURI (O'qish/Yozish - 4000 so'z)",
              "details": [
                "Struktura: I. Kirish (500 so'z) (O'z ustida ishlash nima uchun muhim?, Nazariy asoslar: Zimmerman, Dweck, Deci & Ryan, 21-asr ko'nikmasi). II. Diagnostika (600 so'z) (O'quvchilarning hozirgi holati, Qaysi ko'nikmalar kuchli, qaysilari zaif?, Diagnostik vositalar (so'rovnoma, kuzatuv), Natijalar va xulosa). III. Maqsad va vazifalar (400 so'z) (Umumiy maqsad, Sinf bo'yicha maqsadlar (1-4), Har ko'nikma uchun aniq natijalar). IV. Yillik reja (1500 so'z) (Strukturaviy yondashuv: 1-CHORAK: O'z-o'zini anglash va maqsad qo'yish. 2-CHORAK: Vaqt va diqqat boshqarish. 3-CHORAK: Qat'iyat va o'z-o'zini boshqarish. 4-CHORAK: Refleksiya va o'zgarish. Har hafta: Dars mavzusi, Faoliyat (Vizual, Audio, Kinestetik, O'qish), Uy vazifasi, Oila ishtiroki). V. Metodlar va texnikalar (500 so'z) (15 ta amaliy usul, Har biri: Ta'rif, Qanday qo'llash, Misol). VI. Texnologiya integratsiyasi (300 so'z) (Todoist, Forest, Habitica, Google Forms, Qanday ishlatish?, Xavfsizlik va monitoring). VII. Baholash (300 so'z) (Portfolio, Progress grafiklari, O'z-o'zini baholash, Rubrika). VIII. Ilova (400 so'z) (8 ta to'liq dars rejasi, So'rovnomalar, Shablon va qo'llanmalar).",
                "Topshirish: 4 hafta."
              ]
            },
            {
              "type": "2. VIDEO SERIYALI (Kinestetik - 8 qism × 10 daq)",
              "details": [
                "'O'z ustida ishlash Adventures' - Ta'limiy serial.",
                "Qahramonlar: Maqsad - Lider (yashil), Reja - Strategist (ko'k), Fokus - Ninja (qora), Qat'iy - Jangchi (qizil), Reflekt - Donishmand (sariq).",
                "Har qism: Muammo, Challenge, Yechim, Amaliyot, Xulosa.",
                "Qismlar: Qism 1: 'Yo'qolgan maqsad'. Qism 2: 'Vaqt qudrati'. Qism 3: 'Fokus kayfiyati'. Qism 4: 'To'siq tog'i'. Qism 5: 'Emotsiya suvi'. Qism 6: 'Ko'zgu daryo'. Qism 7: 'Fixed va Growth shaharlari'. Qism 8: 'Jamoaning kuchi'.",
                "Texnik: Animatsiya + Real video kombinatsiya, Bolalar aktyorlari, Interaktiv: 'Sizning fikringiz?', YouTube, TV."
              ]
            },
            {
              "type": "3. MOBIL ILOVA PROTOTIPI (Texnologiya - Figma)",
              "details": [
                "'MyGrowth' - Bolalar uchun o'z ustida ishlash app.",
                "Asosiy ekranlar: 1. Dashboard (Bugungi maqsadlaringiz, Progress, Level). 2. Maqsad ekrani (Haftalik, Oylik, Yillik maqsadlar). 3. Timer ekrani (Pomodoro). 4. Jurnal ekrani (Bugun men, Qiyinchilik, Ertaga, His-tuyg'u). 5. Progress/Stats ekrani (Bu hafta, Eng yaxshi kun, Streak, Achievements).",
                "Funksiyalar: Push notifications, Gamifikatsiya (XP, Level, Badge), Ota-ota-onalar uchun dashboard, Offline rejim, Eksport PDF report.",
                "Texnik: Figma (dizayn), Flutter (development), Firebase (backend), Cloud storage.",
                "Pitch deck: Problem, Solution, Market, Competition, Business model, Team, Roadmap.",
                "Topshirish: 4 hafta."
              ]
            },
            {
              "type": "4. PODKAST SERIYASI (Audio - 10 qism × 20 daq)",
              "details": [
                "'O'sish Mindset' - Bolalar va ota-onalar uchun.",
                "Format: Host: Psixolog + Bolalar, Mehmon: Muvaffaqiyatli insonlar (sportchi, olim, artist), Hikoya + Maslahat + Q&A.",
                "Qismlar: Qism 1: 'Growth Mindset nima?'. Qism 2: 'Xatolardan o'rganish'. Qism 3: 'Maqsad qo'yish san'ati'. Qism 4: 'Vaqt - eng qimmat boylik'. Qism 5: 'Fokus super qudrati'. Qism 6: 'Qat'iyat - muvaffaqiyat kaliti'. Qism 7: 'Emotsiya ustasi'. Qism 8: 'Refleksiya - o'rganish vositasi'. Qism 9: 'Adaptatsiya - bardoshlik'. Qism 10: 'Sizning o'sish sayohatingiz'.",
                "Texnik: Professional audio, Musiqa va jingles, Transcript, Spotify, Apple Podcast, YouTube."
              ]
            },
            {
              "type": "5. O'YIN YARATISH (Texnologiya - Scratch/Unity)",
              "details": [
                "'Growth Quest' - Ta'limiy adventure o'yin.",
                "Konsepsiya: RPG (Role-Playing Game) uslubida o'z ustida ishlash o'yini.",
                "Hikoya: Siz - yosh qahramon. Sehrli dunyoda siz o'z qobiliyatingizni rivojlantirishingiz kerak. Har ko'nikma - sehrli qudrat!",
                "Gameplay: Level 1: O'z-anglash shahri. Level 2: Maqsad tog'i. Level 3: Vaqt daryosi. Level 4: Fokus o'rmoni. Level 5: Qat'iyat cho'li. Level 6: Emotsiya vulqoni. Level 7: Refleksiya ko'li. Level 8: Fixed/Growth qal'asi. Final Level: Barkamol shahri.",
                "Har level: Quest, Challenge, Mechonika, Reward.",
                "Texnik: 2D platformer, Scratch (sodda versiya) yoki Unity (ilg'or), Mobil va desktop, Save/Load progress, Leaderboard.",
                "Topshirish: 4 hafta."
              ]
            }
          ]
        },
        {
          "sectionTitle": "XULOSA",
          "content": [
            "O'Z USTIDA ISHLASH = SUPER QUDRAT!",
            "O'Z-ANGLASH ↓ O'Z-BAHOLASH ↓ O'Z-BOSHQARISH ↓ O'Z-RIVOJLANTIRISH ↓ BARKAMOL INSON",
            "Growth Mindset: Men o'saman! →",
            "O'z ustida ishlash - 21-asr ko'nikmasi.",
            "Growth Mindset - asos.",
            "6-10 yosh - shakllantirish davri.",
            "Maqsad, Reja, Harakat, Refleksiya - tsikl.",
            "Xatolar - o'rganish imkoniyati.",
            "Qat'iyat - muvaffaqiyat kaliti.",
            "Texnologiya - yordam beruvchi vosita."
          ]
        }
      ]
    },
    {
      "id": "maruza-11-uzbek-xalq-urf-odatlari",
      "title": "MA'RUZA 11: O'zbek xalq urf-odatlari va milliy bayramlarning tarbiyaviy ahamiyati",
      "duration": "90 daqiqa",
      "sections": [
        {
          "sectionTitle": "1. VIZUAL (10 daq)",
          "content": [
            {
              "type": "Slayd-prezentatsiya",
              "details": [
                "MILLIY URF-ODATLAR DARAXTI",
                "O'ZBEK XALQI (tepada)",
                "URF-ODATLAR (OILAVIY, IJTIMOIY) va BAYRAMLAR (MILLIY, DINIY)",
                "OILAVIY: Nikoh, Beshik Gap. IJTIMOIY: Hashar. MILLIY: Navruz, Mustaqillik. DINIY: Ramazon, Qurbon."
              ]
            },
            {
              "type": "Infografikalar",
              "details": [
                "Yil davomidagi milliy bayramlar kalendari: MART: Navruz (21-mart), MAY: Xotira (9-may), SENTYABR: Mustaqillik (1-sentyabr), DEKABR: Konstitutsiya (8-dekabr), + Diniy: Ramazon Hayit, Qurbon Hayit.",
                "Navruz rituallari infografika: Sumalak pishirish, Kok somon, Hashar, Cho'pon to'yi, Boychechak, Halol toy."
              ]
            },
            {
              "type": "Video",
              "details": [
                "'Navruz - bahorda tug'ilish bayrami' (4 daq)",
                "'O'zbek to'yi - milliy an'analar' (3 daq)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "2. AUDIO (10 daq)",
          "content": [
            {
              "type": "PODKAST: 'Milliy an'analar - bizning ildizimiz'",
              "parts": [
                {
                  "QISM": "1: Urf-odat va an'ana nima? (4 daq)",
                  "speaker": "[Etnograf - Prof. Rahimov]",
                  "text": "'Tasavvur qiling: Siz - daraxt. Sizning ildizlaringiz nima? MILLIY AN'ANALAR! URF-ODAT - bu avloddan-avlodga o'tadigan, yozilmagan qoidalar. Misol: 'Kattani hurmat qil', 'Mehmon - Xudoning nеki', 'Qo'shni achsa - sen to'q yotma'. AN'ANA - bu urf-odatlarning takrorlanuvchi shakli. Har yili, har safar bir xil. Misol: Navruz bayramida sumalak pishirish, To'yda sovg'a berish. NIMA UCHUN MUHIM? 1. IDENTITET: 'Men kimman?' - 'Men o'zbekman!' (Milliy an'analar meni boshqalardan farqlaydi). 2. BIRLIK: An'analar bizni birlashtiradi (Navruzda hamma birgalikda bayram qiladi). 3. QADRIYATLAR: An'analar orqali qadriyatlar uzatiladi (Hashar - hamkorlik, Kattaga hurmat - iyerarxiya, Mehmon - saxovat). 4. TARIH: An'analar - kino kabi. O'tmishni ko'rsatadi (Ajdodlarimiz qanday yashagan?). BOSHLANG'ICH YOSHDA: Bolalar an'analarni 3 yo'l bilan o'rganadilar: 1. KUZATUV: Ota-ona, oila - nima qiladi? 2. ISHTIROK: Bayramda, marosimda qatnashish. 3. TUSHUNTIRISH: 'Nima uchun shunday qilamiz?' Muhim: An'ana - qiziqarli va ma'noli bo'lishi kerak! Agar bola 'Nega?' deb so'rasa → YAXSHI! Tushuntiring!'",
                  "summary": "Urf-odat va an'ana tushunchalari, ularning ahamiyati (identitet, birlik, qadriyatlar, tarix) va bolalarga ularni o'rgatish usullari."
                },
                {
                  "QISM": "2: Hikoya - 'Navruz va Sumalak' (3 daq)",
                  "speaker": "[Dramatik audio - Bobo ovozi]",
                  "text": "'Qadim zamonda, bir qishloqda oч-ochlik bor edi. Odamlar ovqat topa olmayotgan edilar. Bir kambag'al ona, o'g'li bilan yashar edi. Ular ham och. Ona: 'O'g'lim, ovqat yo'q. Faqat bir hovuch bug'doy qoldi.' O'g'il: 'Onajon, bug'doyni ekamizmi?' Ona: 'Yo'q, vaqt yo'q. Bahor kelayotgan. Biz ochdan o'lamiz.' O'sha kechа, onа tushida ajoyib narsa ko'rdi: Farishtа keldi va dedi: 'Bug'doyni sunga solib, uni'qdir. Keyin uzoq vaqt pishir. Sehr bo'ladi - ovqat paydo bo'ladi!' Ona uyg'ondi. 'Bu - yordam!' dedi u. U bug'doyni sunga soldi. Ko'kardi. Bug'doy un bo'ldi. Keyin katta qozonda pishira boshladi. Butun kecha-u-kunduz, qozonni aralashtirib turdi. Qo'shnilari keldilar: 'Nima qilyapsiz?' Ona: 'Sherzning ovqatini pishiryapman!' Qo'shnilar ham qo'shdilar: un, yong'oq, shakar. Hammasi birgalikda qozonni aralashtirishdi. Va... 3 kun va 3 kechadan keyin - SUMALAK tayyor! Go'zal, shiгin, ta'mli! Hamma joyda yetarli edi. Hech kim och qolmadi! O'shandan beri, har yili NAVRUZ kuni, o'zbeklar SUMALAK pishirishadi. Bu - faqat ovqat emas. Bu: SABR ramzi (uzoq pishirish), BIRLIK ramzi (hamma birgalikda), UMID ramzi (qish o'tdi, bahor keldi!) Va siz ham, bolalar, Navruzda sumalak yesangiz - ajdodlarimizning hikoyasini eslang!'",
                  "summary": "Navruz bayramining kelib chiqishi va sumalak tayyorlash an'anasi haqidagi hikoya, uning ramziy ma'nolari."
                },
                {
                  "QISM": "3: Tarbiyaviy ahamiyat (3 daq)",
                  "speaker": "[O'qituvchi - Normatova]",
                  "text": "'Men bolalarga milliy an'analarni qanday o'rgataman? NAVRUZ DARSLARI: 1-sinf: 'Navruz - nima?' (Biz nima qilamiz? (tozalik, sumalak, bayram), Nima uchun? (bahor, yangilanish), Amaliyot: Boychechak o'stirish). 2-sinf: 'Navruz rituallari' (Sumalak nima? Qanday tayyorlanadi?, Kok somon - nima?, Amaliyot: Sumalak pishirish (maktabda)). 3-sinf: 'Navruz va tabiat' (Bahor - yangi hayot, O'simliklar, hayvonlar, Ekologiya va an'ana aloqasi, Amaliyot: Hashar, daraxt ekish). 4-sinf: 'Navruz - jahon bayrami' (Qaysi mamlakatlar nishonlaydi?, UNESCO meros ro'yxati, O'zbek Navruzi o'ziga xosligi, Amaliyot: Xalqaro loyiha). BOSHQA AN'ANALAR: Hashar: Hamkorlik tarbiyasi (amaliy hashar). Mehmon-mehmondo'stlik: Saxovat (sinf mehmonlari). Kattaga hurmat: Veteranlar bilan uchrashuvlar. Qo'shnichilik: Mahalla loyihalari. Eslab qoling: An'ana - nafaqat bayram, balki har kuni. Biz nimani qilsak, o'sha - an'ana!'",
                  "summary": "Milliy an'analarni bolalarga o'rgatish metodikasi, Navruz darslari va boshqa an'analarning tarbiyaviy ahamiyati."
                }
              ]
            }
          ]
        },
        {
          "sectionTitle": "3. KINESTETIK (15 daq)",
          "content": [
            {
              "type": "Mashq 1: 'Navruz rituallari' - Interaktiv stansiyalar (10 daq)",
              "details": [
                "5 ta stantsiya - 5 ta ritual:",
                "Stantsiya 1: Sumalak pishirish (2 daq) (Katta qozon (tasviriy yoki real kichik), Bolalar navbatma-navbat 'aralashtirishadi', Sumalak qo'shiği kuylash: Sumalak, sumalak, Qaynasin qumalak! Katta ham, kichik ham, Hammamiz baxtli bo'laylik!).",
                "Stantsiya 2: Haftsin (7 narsa) joylashtirish (2 daq) (Ustolda 7 ta narsa: 1. Sabzi (yashil) - yangi hayot. 2. Samanu (bug'doy poyasi) - barakat. 3. Seb (olma) - go'zallik. 4. Sumac (zira) - quyosh. 5. Serkeh (sirka) - sabr. 6. Sonbol (sumbul) - bahor. 7. Sekka (tanga) - boylik. Bolalar to'g'ri joylashtiradi. Har birining ma'nosi tushuntiriladi).",
                "Stantsiya 3: Boychechak o'stirish (2 daq) (Likopdagi bug'doy, Suv quyish, O'simlikni parvarishlash harakatlari, 'O'sa-o'sa!' qo'shiqi).",
                "Stantsiya 4: Milliy kiyim kiyish (2 daq) (Do'ppi, atlas ko'ylak, chapan (tasviriy), Bolalar kiyib ko'rishadi, 'Men o'zbek bolasiman!' pozasida rasm).",
                "Stantsiya 5: Navruz o'yinlari (2 daq) (Tuxum urish, Halqa otish, Arqon tortish (mini-versiya)).",
                "Har stantsiyadan keyin - keyingisiga o'tish!"
              ]
            },
            {
              "type": "Mashq 2: 'Hashar' - Jamoa hamkorlik amaliyoti (5 daq)",
              "details": [
                "Vaziyat: Sinf iflos, tartibsiz (simulyatsiya - maxsus chalkashtirilgan).",
                "Jarayon: 1. Muammo (30 sek): O'qituvchi: 'Qarang, sinfimiz iflos! Nima qilish kerak?' Bolalar: 'Tozalash!'. 2. An'ana eslatma (30 sek): 'Ajdodlarimiz HASHAR qilgan. Bu nima?' 'Hamma birgalikda, bepul, bir-biriga yordam!'. 3. Tashkilashtirish (1 daq): Guruh taqsimoti: Guruh 1: Chiqindilar yig'ish, Guruh 2: Kitob va daftarlar tartibga solish, Guruh 3: Devorlardi artish, Guruh 4: O'simliklar sug'orish. Har guruh - 1 ta mas'ul. 4. Hashar (2 daq): Milliy musiqa (Do'mbira, karnay), Hamma birgalikda ishlaydi, Kuylay, gaplashadi, Tez va qiziqarli! 5. Natija (30 sek): Sinf - toza va tartibli! Hamma qo'l qoqish, 'Birgalikda - kuchliroq!'. 6. Refleksiya (30 sek): 'Nima his qildingiz?' 'Hashar - yaxshi an'anami?' 'Uyda, mahallada ham qilish mumkinmi?'"
              ]
            }
          ]
        },
        {
          "sectionTitle": "4. O'QISH/YOZISH (25 daq)",
          "content": [
            {
              "type": "O'qish materiallari",
              "sections": [
                {
                  "heading": "MATN 1: 'O'zbek xalq urf-odatlari va tarbiya' (15 daq)",
                  "subsections": [
                    {
                      "title": "MILLIY URF-ODATLAR: TARBIYAVIY JIHATLAR",
                      "points": [
                        "I. URF-ODAT VA AN'ANA TUSHUNCHASI:",
                        "URF-ODAT (арабча 'urf' - bilish, 'odat' - odatlangan): Avlodlardan avlodlarga og'zaki ravishda o'tgan, yozilmagan ijtimoiy qoidalar va me'yorlar.",
                        "AN'ANA (арабча 'sunna' - yo'l): Muntazam takrorlanadigan ritual, marosim yoki bayram.",
                        "FARQ: Urf-odat: Umuman (kattaga hurmat - har doim). An'ana: Aniq (Navruz - yiliga 1 marta).",
                        "II. O'ZBEK XALQI URF-ODATLARI TASNIFI:",
                        "1. OILAVIY URF-ODATLAR:",
                        "A) TUG'ILISH: **Beshik to'yi** (40 kun) - Bolani birinchi marta beshikka qo'yish, Qo'shni-qarindoshlar taklif. Tarbiya: Oila birligi, qo'shnichilik. **Cillagon (40 kun)** - Onani himoya qilish. Tarbiya: Onani hurmat.",
                        "B) BOLALIK: **Sunnatga olib chiqish** - O'g'il bola uchun (3-7 yosh), Marosim, bayram. Tarbiya: Diniy va milliy identitet. **Tug'ilganlik kunlari** - Tug'ilgan yilda ovqat uyiga (sadaqa). Tarbiya: Xayriya, insonparvarlik.",
                        "C) NIKOH: **Sovchilik** - Ota-ona roziligi muhim. Tarbiya: Oila va kattalar hurmati. **Fatixa to'yi** - Rasmiy nikoh. Tarbiya: Mas'uliyat, halollik. **To'y** - Katta bayram (100-1000 mehmon!). Tarbiya: Mehmon-mehmondo'stlik, saxovat.",
                        "2. IJTIMOIY URF-ODATLARI:",
                        "A) HASHAR: Ta'rif: Jamoaviy bepul mehnat. Qayerda: Ko'cha, maktab, mahalla. Qachon: Bahor, yoz. Tarbiya: Hamkorlik, jamoa ruhi, mehnat.",
                        "B) GAP: Ta'rif: Oqsoqollar yig'ini. Vazifa: Maslahat, qaror. Tarbiya: Hurmat (kattaga), adolat, donolik.",
                        "C) QO'SHNICHILIK: Qoida: 'Qo'shni ochsa - sen to'q yotma', 'Qo'shning uyi yonsa - sening uyingga uchqun'. Tarbiya: Yordam, rahm-shafqat, hamjihatlik.",
                        "D) MEHMON-MEHMONDO'STLIK: Qoida: 'Mehmon - Xudoning neki'. Marosim: Dustarixon, hurmat, sovg'a. Tarbiya: Saxovat, ochiqlik, mehr.",
                        "3. MAVSUMIY AN'ANALAR:",
                        "A) NAVRUZ (21-Mart): Tarix: 3000+ yil (зороастризм davri). Ma'no: Yangi yil, bahor, yangilanish. Rituallar: Tozalik hashari, Sumalak pishirish, Haftsin (7 ta 'S'), Boychechak o'stirish, Kok somon, Choliq o'yinlari. Tarbiya: Yangilanish, tozalik, umid, hamkorlik.",
                        "B) KO'KTATKA: Vaqt: Bahor (aprel-may). Mazmun: Tabiatga chiqish, kok somon yeyish. Tarbiya: Tabiat muhabbati, oila birligi.",
                        "C) HOSIL BAYRAMI: Vaqt: Kuz (sentyabr-oktyabr). Mazmun: Mahsulotga minnatdorlik. Tarbiya: Mehr, mehnat qadrlash.",
                        "III. MILLIY BAYRAMLAR:",
                        "1. NAVRUZ (21-Mart): Davlat bayrami (1991-yildan), UNESCO noma'lum madaniy meros (2009). Tarbiya: Milliy g'urur, an'analarni hurmat.",
                        "2. MUSTAQILLIK KUNI (1-Sentyabr): 1991 - O'zbekiston mustaqilligi, Davlat bayrami - eng katta. Tarbiya: Vatanparvarlik, mustaqillik qadrlash.",
                        "3. XOTIRA VA QADRLASH KUNI (9-May): Ikkinchi jahon urushi qurbonlari xotirasi, Veteranlar hurmati.",
                        "4. KONSTITUTSIYA KUNI (8-Dekabr): 1992 - Konstitutsiya qabul qilindi. Tarbiya: Huquqiy bilim, fuqarolik.",
                        "5. O'QITUVCHI VA MURABBIYLAR KUNI (1-Oktyabr): O'qituvchilarni hurmat. Tarbiya: Ilm qadrlash, ustoz hurmati.",
                        "6. DINIY BAYRAMLAR:",
                        "A) RAMAZON HAYIT (Ro'za hayit): Ramazon oyi ro'zasidan keyin, 3 kun bayram. Mazmun: Ruhiy tozalik, sabr, hayriya. Tarbiya: O'z-o'zini boshqarish, rahm-shafqat.",
                        "B) QURBON HAYIT: Haj mavsumida, 3-4 kun bayram. Mazmun: Qurbonlik, Xudoga yaqinlashish. Ritual: Qo'y so'yish, go'shtni ulashish. Tarbiya: Xayriya, boyu kambag'al tenglik.",
                        "IV. TARBIYAVIY AHAMIYAT:",
                        "URF-ODATLAR QANDAY TARBIYALAYDI? 1. QADRIYATLAR UZATILADI: Hashar → Hamkorlik, Mehmon → Saxovat, Kattaga hurmat → Iyerarxiya, Xayriya → Rahm-shafqat. 2. IDENTITET SHAKLLANADI: 'Men kimman?' → 'Men o'zbekman!', Milliy g'urur, O'ziga ishonch. 3. IJTIMOIY KO'NIKMALAR: Muloqot (to'yda, bayramda), Hamkorlik (hashar), Mas'uliyat (nikoh). 4. EMOTSIONAL RIVOJLANISH: Bayram - quvonch!, Birgalikda - birlik his, An'ana - barqarorlik, xavfsizlik. 5. KOGNITIV RIVOJLANISH: Tarix (nima uchun shunday?), Simvolika (haftsinning ma'nosi), Tanqidiy fikrlash (qaysi an'ana yaxshi?).",
                        "V. BOSHLANG'ICH SINFDA QO'LLASH:",
                        "1-SINF: 'Tanishuv' - Eng yaqin: Tug'ilgan kun, Navruz. Sodda: Ko'rish, ishtirok, quvonish. Amaliyot: Boychechak o'stirish.",
                        "2-SINF: 'Tushunish' - Keng: Hashar, Mehmon, To'y. Nega?: Sabab va oqibat. Amaliyot: Sinf hashari, mehmonlar.",
                        "3-SINF: 'Taqqoslash' - Turli urf-odatlar. O'zbek va boshqa xalqlar. Amaliyot: Mini-tadqiqot.",
                        "4-SINF: 'Baholash' - Qaysi an'ana yaxshi? Qaysi bir o'zgarishi kerak? Amaliyot: Yangi an'ana yaratish (sinf).",
                        "VI. METODLAR: 1. HIKOYALAR: Bobo-buvi hikoyalari, Tarixiy voqealar, Milliy ertaklar. 2. NAMOYISH: Video, rasm, Real buyumlar (duppi, atlas), Taom (sumalak, somsa). 3. ISHTIROK: Bayramlarda qatnashish, Hashar, To'yda yordam. 4. AMALIY ISH: O'zimiz sumalak pishirish, O'zimiz dastrixon to'shash, O'zimiz kiyim tikish (oddiy). 5. TADQIQOT: Oilada intervyu, Mahallada kuzatuv, Kitoblardan o'qish.",
                        "VII. EHTIYOT CHORALARI: Majburlamaslik: An'ana - majburiyat emas, taklif. Bola qiziqmasa - qiziqtirish. Zamonaviylashtirish: An'ana - qotib qolмagan. O'zgarishi mumkin (yaxshi yo'nalishda). Tanqidiy yondashuv: Hamma an'ana - yaxshi emas. Ba'zilari - zararli (masalan: qalin-sovg'a haddan tashqari). Bolalarga tushuntirish. Inklyuzivlik: Turli dinlarga hurmat, Turli millatlarning an'analari, Hech kim chetlatilmasin. Balanslı yondashuv: Milliy + Universal, An'anaviy + Zamonaviy, O'zbek + Dunyo."
                      ]
                    }
                  ]
                },
                {
                  "heading": "MATN 2: 'Navruz - bolalar uchun' (10 daq o'qish)",
                  "subsections": [
                    {
                      "title": "NAVRUZ: BAHORNING BAYRAMI",
                      "points": [
                        "NAVRUZ SO'ZI NIMANI ANGLATADI? Forscha: 'Nav' = yangi, 'Ruz' = kun. YANGI KUN! Yangi yil boshlandi!",
                        "QACHON? 21-Mart - Kuz va bahor tenglik kuni. Kun va kecha - bir xil! Qish tugadi, BAHOR keldi! 🌸",
                        "TARIX: 3000+ yil oldin, zороастр dini davrida boshlangan. O'shanda odamlar tabiatga sig'inganlar. 'Bahor keldi - tabiat tug'ildi! Bayram qilaylik!' O'zbekiston, Eron, Ozarbayjon, Tojikiston, Qozog'iston va boshqa 12 ta mamlakat nishonlaydi! 2009-yil: UNESCO Navruzni 'Insoniyat nomoviy madaniy merosi' deb e'lon qildi!",
                        "NAVRUZ RITUALLARI: 1. TOZALIK HASHARI (1 hafta oldin) - Uy, ko'cha, maktab - hamma joyni tozalash. 'Eski narsalarni tashlaymiz - yangisini olamiz!'",
                        "2. BOYCHECHAK O'STIRISH (10-15 kun oldin) - Bug'doyni likopga ekish. Suv bilan sug'orish. Yashil ko'k chiqadi - yangi hayot!",
                        "3. SUMALAK PISHIRISH (Navruz oqshomidan 1 kun oldin) - Bug'doy unidan. Katta qozonda. 24 soat aralashtirib! Qo'shiq kuylab, suhbatlashib. Shirinlik chiqadi - go'zal!",
                        "4. HAFTSIN (7 ta 'S' bilan boshlanadigan narsa) O'zbek versiyasi: 1. Sabzi (ko'k) - yangilanish. 2. Samanu (bug'doy poyasi) - berakat. 3. Seb (olma) - salomatlik. 4. Somsa - milliy taom. 5. Sirka - sabr. 6. Shakar - shirin hayot. 7. Shumcha - boylik.",
                        "5. YANGI KIYIM - Hamma yangi kiyim kiyadi. 'Yangi kiyim - yangi hayot!'",
                        "6. DASTARIXON - Katta dasturxon to'shaladi. Ko'p taom: osh, somsa, non, meva. Oila birgalikda ovqatlanadi.",
                        "7. KO'K SOMON - Tabiatga chiqish. Yashil o'tlar, gul. Piknik, o'yin.",
                        "8. O'YINLAR: Tuxum urish, Halqa otish, Kurash, Ko'pakcha (belanchak), Arqon tortish.",
                        "9. KATTALARDAN DUO OLISH - Keksalarga borib, qo'l o'pish. Ular duo beradi, sovg'a beradi.",
                        "10. XAYRIYA - Kambag'allarga yordam. Ovqat tarqatish.",
                        "NAVRUZ QADRIYATLARI: YANGILANISH: Eski tugadi, yangi boshlandi! TOZALIK: Tana va ruh tozaligi. HAMKORLIK: Hashar, sumalak - birgalikda. UMID: Qish qiyin edi, bahor - umid! MINNATDORCHILIK: Tabiatga rahmat! OILA: Birgalikda bayram.",
                        "BOLALAR NAVRUZDA NIMA QILADI? Erta turish (quyosh chiqishi), Yangi kiyim kiyish, Ota-onaga yordam (dasturxon), Qo'shiq kuylash, O'yin o'ynash, Tabiatga chiqish, Do'stlar bilan bayram qilish.",
                        "NAVRUZ QO'SHIG'I: Keldi, keldi Navruz keldi, Gullardi bog'u guliston! Xushxabar keldi, bahor keldi, Quvonchli bo'lsin har inson! Sumalak, sumalak, Qaynasin, qumalak! Katta ham, kichik ham, Baxtli bo'lsin Vatanim!.",
                        "NAVRUZ - NIMA UCHUN MUHIM? 1. MILLIY IDENTITET: 'Men o'zbekman - men Navruz nishonlayman!'. 2. OILA BIRLIGI: Hamma birgalikda bayram qiladi. 3. TABIAT MUHABBATI: Biz tabiatni qadrlashni o'rganamiz. 4. UMID VA OPTIMIZM: Qish qiyin bo'ldi, lekin bahor keldi! Har doim UMID bor! 5. MILLAT BIRLIGI: Butun O'zbekiston bir vaqtda bayram!",
                        "NAVRUZ AMALIYOTI MAKTABDA: Navruz 'Hashari' - sinf va maktabni tozalash, Boychechak o'stirish musobaqasi, Navruz konserti - qo'shiq, she'r, raqs, Haftsin ko'rgazmasi - har sinf o'z dasturxoni, Milliy kiyimlar kuni, Sumalak pishirish (kattalar bilan), Navruz o'yinlari - sport musobaqa.",
                        "NAVRUZ TAKLIFLAR: Siz ham Navruzni qiziqarli qilishingiz mumkin: 1. BOYCHECHAK o'stiring - har kun kuzating, rasm chizing. 2. NAVRUZ JURNALI - har kun yozib boring: nima qildik? 3. XAYRIYA - biror kishiga yordam bering. 4. FOTO va VIDEO - Navruz xotiralari. 5. YANGI MAQSAD - 'Bu yilda men nima qilaman?' yozing.",
                        "NAVRUZ TILAK: Navruzingiz qutlug' bo'lsin! Yangi yilingiz barakali bo'lsin! Oilangiz baxtli bo'lsin! Orzularingiz ro'yobga chiqsin! Navruz - faqat 1 kun emas. Navruz - YANGILANISH RUHI! Har kuni yangidek, tozadek, umidli yashang!"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "Yozish mashqlari (5 daq)",
              "tasks": [
                "1. 'Mening Navruzim' hikoya (3 daq): 6-8 gap yozish: Navruzda biz nima qildik? Eng yoqqan narsa? Nimani his qildim? Keyingi Navruz nima qilmoqchiman?",
                "2. 'Oilamning an'anasi' tavsif (2 daq): Jadval (An'ana nomi, Qachon?, Nima qilamiz?, Nima uchun muhim?)"
              ]
            }
          ]
        },
        {
          "sectionTitle": "5. TEXNOLOGIYA (20 daq)",
          "content": [
            {
              "type": "VOSITA 1: Google Arts & Culture - Virtual Navruz muzeyi (5 daq)",
              "details": [
                "Kashfiyot: 1. Navruz eksponatları: Qadimgi Sumalak qozoni, Milliy kiyimlar (atlas, do'ppi), Haftsin buyumlari, Navruz rasmlari (miniatura). 2. 360° Virtual tur: Registon maydonida Navruz bayrami, Buxoro shahrida an'anaviy to'y, Xiva Navruz marosimi. 3. Zoom in: Har eksponatni yaqindan ko'rish, Tarix va ma'lumot o'qish, Audio tushuntirish eshitish. 4. Taqqoslash: O'zbek Navruzi, Eron Navruzi, Tojikiston Navruzi, O'xshashlik va farqlar.",
                "Loyiha: 'Mening virtual muzeym' - bolalar o'z oilalarining an'analarini Google Arts formatida yaratadi."
              ]
            },
            {
              "type": "VOSITA 2: StoryMapJS - Navruz an'analari xaritasi (4 daq)",
              "details": [
                "Interaktiv xarita yaratish: O'ZBEKISTON NAVRUZ XARITASI.",
                "1. TOSHKENT: Rasm: Milliy bog'da Navruz, Matn: '100,000+ odamlar bayram qiladi', Video: Konsert.",
                "2. SAMARQAND: Rasm: Registon maydonida Sumalak, Matn: 'Eng katta sumalak qozoni', Audio: Xalq qo'shiqlari.",
                "3. BUXORO: Rasm: Eski shaharda hashar, Matn: 'An'anaviy tozalash marosimi'.",
                "4. XIVA: Rasm: Ichon-qalada Navruz o'yinlari, Matn: 'Kurash, ko'pakcha'.",
                "5. FARG'ONA: Rasm: Boychechak musobaqasi, Matn: 'Har oilada boychechak'.",
                "... (14 ta viloyat).",
                "Imkoniyatlar: Gigapixel rasm, Audio narration, Video embed, Timeline - tarixiy rivojlanish."
              ]
            },
            {
              "type": "VOSITA 3: Minecraft Education - Virtual Navruz shahri (5 daq)",
              "details": [
                "Loyiha: 'Navruz Worldini' qurish.",
                "Elementlar: 1. Navruz Maydoni (Markazda katta Haftsin, Atrofda 4 ta burchak: To'y, Hashar, Sumalak, O'yin). 2. Sumalak uyi (Katta qozon (dispenser + water + wheat), Furnace (pishirish), Villagerlar (sumalak tarqatadi)). 3. Hashar ko'chasi (Iflos ko'cha (dirt, grass), Asboblar (shovel, hoe), Hamkorlik - birga tozalash!). 4. O'yin maydoni (Tuxum urish (snowball fight), Kurash (PvP arena), Arqon tortish (tug of war mechanics)). 5. Milliy kiyimlar do'koni (Armor stand'larga milliy kiyim, Custom texture (atlas, duppi)). 6. Boychechak bog'i (Wheat farm, Green carpet (ko'k), Growth animation).",
                "Multiplayer: Sinf birgalikda quradi, Roleplay: Navruz bayramini o'ynash, Challenge: Eng yaxshi Navruz dekоratsiyasi.",
                "Skills: Kreativlik, Hamkorlik, Problem solving, Navruz tushunchalar."
              ]
            },
            {
              "type": "VOSITA 4: Canva - Navruz raqamli albom (3 daq)",
              "details": [
                "Yaratish: Albom strukturasi: Sahifa 1: Muqova (Ism: 'Bizning Navruzimiz 2025', Oila rasm, Milliy bezak). Sahifa 2-10: Har bir ritual uchun (Har sahifa: Rasm (oiladan yoki internet), Sarlavha, Qisqa tavsif (50-100 so'z), Emoji va bezak. Misol: Sahifa 3: SUMALAK PISHIRISH - Bu yil biz birinchi marta sumalak pishdik! Onam, opaм va men - 24 soat navbatma-navbat aralashtirgandik. Juda charchagan edik, lekin qiziqarli edi! Qo'shni-qo'shnilar ham keldi. Sumalak juda mazali chiqdi! Bug'doy + Suv + 24 soat + Mehr = Sumalak). Sahifa 11: Xulosa ('Navruz - bizning eng sevimli bayram!', Oila rasmi, Keyingi yil rejasi).",
                "Share: PDF yuklab olish, Link ulashish (buvi-bobolar), Instagram/Facebook post."
              ]
            },
            {
              "type": "VOSITA 5: Padlet - 'Navruz an'analari' global devor (3 daq)",
              "details": [
                "Tuzilma: 14 ta ustun = O'zbekiston 14 ta viloyati. Har ustunda: Viloyat nomi va bayrog'i. Bolalar o'sha viloyatdan post qo'shadi: Rasm, Video, Matn: 'Bizda Navruz qanday nishonlanadi?', O'ziga xos an'ana.",
                "Interaktiv: Boshqa viloyatlar postlarini o'qish, Izoh va, 'Men bu yerga borishni xohlayman!', 'Biz ham shunday qilamiz!'.",
                "Global versiya: Xalqaro Padlet, O'zbekiston, Eron, Tojikiston, Qozog'iston, Turkmaniston..., Navruz turlicha qanday?"
              ]
            }
          ]
        },
        {
          "sectionTitle": "MUSTAQIL ISH",
          "content": [
            {
              "type": "1. MILLIY AN'ANALAR DASTURI (O'qish/Yozish - 3500 so'z)",
              "details": [
                "To'liq struktura: I. Kirish (400 so'z) (An'analar nima uchun muhim?, Nazariy asoslar: Madaniy meros, Identitet nazariyasi, Zamonaviylash va saqlash balansi). II. O'zbek xalqi an'analari tahlili (1000 so'z) (Oilaviy (5 ta), Ijtimoiy (5 ta), Bayram (5 ta), Har biri: Ta'rif, Tarix, Tarbiyaviy ahamiyat, Misol). III. Boshlang'ich sinf uchun yillik reja (1200 so'z) (Oylar bo'yicha: SENTYABR: Mustaqillik va maktab, OKTYABR: Kattalar va hurmat, NOYABR: Oila an'analari, DEKABR: Qish bayramlari, YANVAR: Xayriya va mehr, FEVRAL: Milliy hunarmandchilik, MART: NAVRUZ!, APREL: Tabiat va an'analar, MAY: Xotira va qadriyat, IYUN: Yilni yakunlash). IV. Metodlar va shakllar (500 so'z) (Hikoyalar va dramalashtirish, Amaliy faoliyat, Tadqiqot loyihalari, Oila ishtiroki, Mahalla aloqalari). V. Baholash (300 so'z) (Portfolio, Loyiha taqdimoti, Oila intervyusi, Refleksiv esse). VI. Resurslar (100 so'z) (Kitoblar, videolar, saytlar, Muzeylar, madaniy markazlar, Oqsoqollar, hunarmandlar).",
                "Topshirish: 4 hafta."
              ]
            },
            {
              "type": "2. MULTIMEDIYA TAQDIMOT (Vizual + Texnologiya - 40 slayd)",
              "details": [
                "'O'zbekiston Milliy An'analari' - Interaktiv taqdimot.",
                "Qismlar: I. Kirish (5 slayd) (An'ana nima? Nima uchun muhim? O'zbek an'analari xususiyati). II. Oilaviy an'analar (10 slayd) (Har bir an'ana uchun: Tarix, Jarayon (video), Tarbiyaviy ahamiyat, Zamonaviy shakl). III. Ijtimoiy an'analar (10 slayd). IV. Milliy bayramlar (10 slayd). V. Amaliy qo'llanma (5 slayd) (Maktabda qanday qo'llash? Loyihalar, Amaliy topshiriqlar).",
                "Texnik: PowerPoint / Prezi, Video embed (20+ video), Audio narration har slayd, Interaktiv quiz (Mentimeter), 3D obyektlar (Sketchfab), QR kodlar."
              ]
            },
            {
              "type": "3. HUJJATLI FILM (Kinestetik - 20 daq)",
              "details": [
                "'Navruz: Avloddan Avlodga'.",
                "Struktura: ACT 1: Tarix (5 daq) (3000 yil oldin, Zaroastriylik, Tarqalishi, Hozirgi kun). ACT 2: Ritualar (10 daq) (Har ritual uchun 1 daqiqa: Hashar, Boychechak, Sumalak, Haftsin, Yangi kiyim, Dasturxon, Ko'k samon, O'yinlar, Duo, Xayriya). Har biri: Real oilada suratga olish, Intervyu: 'Nima uchun qilamiz?', Tarixiy matn, Bolalar ishtiroki. ACT 3: Tarbiya (5 daq) (5 ta oila hikoyasi, Bolalar: 'Navruz menga nima berdi?', Ota-onalar: 'Biz nima o'rgatamiz?', Oqsoqollar: 'Avlod mas'uliyati').",
                "Texnik: Professional kamera, Drone shots (panorama), Slow motion (o'yin, sumalak), Time-lapse (boychechak o'sishi), Milliy musiqa soundtrack, Subtitles: O'zbek, Rus, Ingliz."
              ]
            },
            {
              "type": "4. AUDIO KITOB (Audio - 60 daq)",
              "details": [
                "'O'zbek An'analari Ensiklopediyasi' - Bolalar uchun.",
                "30 ta bob × 2 daq = 60 daqiqa.",
                "Struktura har bob: Kirish: Nima haqida? (10 sek), Tarix: Qayerdan kelib chiqqan? (30 sek), Jarayon: Qanday amalga oshiriladi? (40 sek), Hikoya: Real hayotdan misol (30 sek), Tarbiya: Nima o'rgatadi? (20 sek), Xulosa va keyingi bob (10 sek).",
                "30 ta mavzu: Oilaviy (10): Beshik to'yi, Sunnatga otish, Sovchilik, Nikoh, To'y, Tug'ilgan kun, Oila maslahati, Oilaviy daraxt, Katta-kichik tartib, Mehmon kutish. Ijtimoiy (10): Hashar, Gap, Qo'shnichilik, Mehmon-mehmondo'stlik, Xayriya, Mahalla, Ustoz-shogird, Qarindoshlik, Do'stlik an'analari, Fuqaro burchi. Bayram (10): Navruz, Ko'ktatka, Hosil bayrami, Ramazon, Qurbon, Mustaqillik, Xotira kuni, Konstitutsiya, O'qituvchilar, Madaniyat, Yoshlar kuni."
              ]
            }
          ]
        }
      ]
    }
];

/**
 * Helper function to get lecture by ID
 * @param {string} lectureId - The ID of the lecture
 * @returns {Object|null} - The lecture object or null if not found
 */
export const getLectureById = (lectureId: string) => {
  return lecturesData.find(lecture => lecture.id === lectureId) || null;
};

/**
 * Helper function to get all lecture titles and IDs
 * @returns {Array} - Array of objects with id and title
 */
export const getLectureTitles = () => {
  return lecturesData.map(lecture => ({
    id: lecture.id,
    title: lecture.title,
    duration: lecture.duration,
    subject: lecture.subject
  }));
};

/**
 * Helper function to filter lectures by component type
 * @param {string} componentType - The component type (visual, audio, kinesthetic, reading, digital)
 * @returns {Array} - Array of lectures containing the specified component
 */
export const getLecturesByComponent = (componentType: string) => {
  return lecturesData.filter(lecture =>
    lecture.recommendedComponents?.includes(componentType) ?? false
  );
};

/**
 * Get sections from a specific lecture by component type
 * @param {string} lectureId - The ID of the lecture
 * @param {string} componentType - The component type
 * @returns {Array} - Array of sections matching the component type
 */
export const getLectureSectionsByType = (lectureId: string, componentType: string) => {
  const lecture = getLectureById(lectureId);
  if (!lecture) return [];

  return lecture.sections.filter((section: any) => section.componentType === componentType);
};

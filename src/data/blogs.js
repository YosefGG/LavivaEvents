import { getBlogMetaKeywords, longTailKeywords, serviceKeywords } from './blogKeywords';

const paragraph = (he, en) => ({ type: 'p', text: { he, en } });
const heading = (he, en) => ({ type: 'h2', text: { he, en } });
const catalogLink = (category) => ({
  type: 'link',
  href: `/catalog/${category}`,
  label: {
    he: `גלו את ${category === 'booths' ? 'עמדות הצילום' : category === 'walls' ? 'קירות הצילום' : 'המגנטים'} שלנו בקטלוג`,
    en: `Browse our ${category} in the catalog`,
  },
});

export const blogs = [
  {
    slug: 'ma-e-amadat-tsilum-le-irua-im',
    category: 'booths',
    publishedAt: '2026-08-01',
    title: {
      he: 'מהי עמדת צילום לאירועים?',
      en: 'What Is a Photo Booth for Events?',
    },
    excerpt: {
      he: 'עמדת צילום לאירועים היא אטרקציה שמאפשרת לאורחים להצטלם, לקבל הדפסות מיידיות וליצור זיכרונות — המדריך המלא.',
      en: 'A photo booth lets guests take fun photos, get instant prints, and take memories home — the complete guide.',
    },
    metaDescription: {
      he: 'מהי עמדת צילום לאירועים? סוגי עמדות, יתרונות לחתונות ובר/בת מצווה, ומה כולל שירות מקצועי — Laviva Events.',
      en: 'What is an event photo booth? Types, benefits for weddings and celebrations, and what pro service includes — Laviva Events.',
    },
    keywords: getBlogMetaKeywords([
      ...serviceKeywords.booths,
      'מהי עמדת צילום לאירועים',
      'חתונה',
      'בר מצווה',
    ]),
    body: [
      paragraph(
        'עמדת צילום לאירועים היא אטרקציה מאוד נבחרת בחתונות, בר/בת מצווה, בריתות וכל חגיגה. היא מאפשרת לאורחים להצטלם עם אביזרים מצחיקים, לקבל הדפסות מיידיות או מגנטים, וליצור זיכרונות שהם לוקחים הביתה. ב-Laviva Events אנחנו מציעים עמדות צילום מקצועיות עם צוות מלווה, תאורה מתקדמת ועיצוב מותאם אישית לאירוע שלכם.',
        'An event photo booth is one of the most popular attractions at weddings, bar/bat mitzvah, britot, and every celebration. Guests pose with fun props, receive instant prints or magnets, and take memories home. At Laviva Events we offer professional booths with an attendant, advanced lighting, and custom design for your event.',
      ),
      heading('איך עמדת צילום עובדת בפועל?', 'How does a photo booth work?'),
      paragraph(
        'בדרך כלל, עמדת צילום כוללת מצלמה מקצועית, תאורת LED, רקע מעוצב ומסך תצוגה. האורחים נכנסים לאזור הצילום, בוחרים אביזרים (props), מצטלמים — ותוך שניות מקבלים הדפסה או מגנט. אפשר גם לשלוח תמונות לוואטסאפ, ליצור GIF או Boomerang, ולשתף ברשתות. זו חוויה אינטראקטיבית שמוסיפה אווירה כיפית לכל הערב.',
        'Typically, a booth includes a pro camera, LED lighting, a styled backdrop, and a preview screen. Guests enter the area, pick props, pose — and within seconds receive a print or magnet. Photos can also be sent via WhatsApp, turned into GIFs or Boomerangs, and shared online. It is an interactive experience that adds fun energy to the whole evening.',
      ),
      heading('סוגי עמדות צילום — מה מתאים לכם?', 'Photo booth types — which fits you?'),
      paragraph(
        'עמדת צילום קלאסית מתאימה לרוב האירועים — פשוטה, אמינה ומלאה בחיוכים. עמדת צילום 360 מעלות יוצרת סרטון מרהיב מכל הזוויות. עמדת סלפי פופולרית במיוחד בחתונות צעירות, ו-Green Screen מאפשר רקעים דיגיטליים מדהימים. עמדת פולארoid מוסיפה נגיעה נוסטלגית. ב-Laviva Events נעזור לכם לבחור את הפתרון הנכון לפי סוג האירוע, מספר האורחים והסגנון שלכם.',
        'A classic booth suits most events — simple, reliable, and full of smiles. A 360 booth creates stunning video from every angle. Selfie booths are especially popular at younger weddings, and Green Screen enables amazing digital backgrounds. A Polaroid booth adds nostalgic charm. At Laviva Events we help you choose the right option based on event type, guest count, and your style.',
      ),
      heading('למה עמדת צילום היא חובה בחתונה ובבר/בת מצווה?', 'Why a photo booth is a must at weddings and bar/bat mitzvah'),
      paragraph(
        'באירועים גדולים, לא תמיד יש זמן לצלם עם כל אורח. עמדת צילום נותנת לכל מי שרוצה רגע מיוחד — עם חברים, משפחה או בעלי האירוע. התמונות הופכות למזכרת אמיתית: מסגרות מעוצבות, מגנטים על המקרר, או אלבום אורחים. זו גם אחת האטרקציות הכי מדוברות אחרי האירוע — "זוכרים את עמדת הצילום?"',
        'At large events, there is not always time to photograph every guest. A photo booth gives everyone who wants it a special moment — with friends, family, or the hosts. Photos become real keepsakes: styled frames, fridge magnets, or a guest album. It is also one of the most talked-about attractions after the event — "remember the photo booth?"',
      ),
      catalogLink('booths'),
    ],
  },
  {
    slug: 'lama-lehazmin-amadat-tsilum',
    category: 'booths',
    publishedAt: '2026-08-05',
    title: {
      he: 'למה להזמין עמדת צילום?',
      en: 'Why Book a Photo Booth?',
    },
    excerpt: {
      he: 'עמדת צילום היא לא רק שירות — היא חוויה שמחברת אורחים, יוצרת צחוקים ומשאירה זיכרונות לנצח.',
      en: 'A photo booth is not just a service — it is an experience that connects guests, creates laughter, and leaves lasting memories.',
    },
    metaDescription: {
      he: 'למה להזמין עמדת צילום לחתונה או אירוע? 5 סיבות שעמדת צילום הופכת כל חגיגה לבלתי נשכחת — Laviva Events.',
      en: 'Why book a photo booth for your wedding or event? Five reasons a booth makes every celebration unforgettable — Laviva Events.',
    },
    keywords: getBlogMetaKeywords([
      'למה להזמין עמדת צילום',
      'למה כדאי עמדת צילום לחתונה',
      'אטרקציות לאירועים',
    ]),
    body: [
      paragraph(
        'המון אנשים אוהבים עמדות צילום — והסיבה פשוטה: זו חוויה, לא רק שירות. האורחים נהנים, צוחקים, מצטלמים עם חברים ומשפחה, ויוצאים עם תמונות או מגנטים ששומרים על הרגע לנצח. עמדת צילום טובה הופכת לרכיב הכי מדובר באירוע, וגם מוסיפה אווירה כיפית ואינטראקטיבית לכל הערב.',
        'People love photo booths — and the reason is simple: it is an experience, not just a service. Guests have fun, laugh, pose with friends and family, and leave with photos or magnets that preserve the moment forever. A great booth becomes the most talked-about part of the event and adds a fun, interactive atmosphere all evening.',
      ),
      heading('1. אינטראקציה בין האורחים', '1. Guest interaction'),
      paragraph(
        'עמדת צילום מזמינה אנשים לעצור, להתקבץ, להצטלם יחד — גם מי שלא רוקד כל הערב. זו הזדמנות לחבר בין דורות, לפתוח שיחות וליצור רגעים משותפים. בחתונות ובר/בת מצווה, זה במיוחד חשוב: האורחים מגיעים מע circles שונים, ועמדת הצילום היא "נקודת מפגש" טבעית.',
        'A photo booth invites people to pause, gather, and pose together — even guests who do not dance all night. It is a chance to connect generations, start conversations, and create shared moments. At weddings and bar/bat mitzvah this matters especially: guests come from different circles, and the booth is a natural meeting point.',
      ),
      heading('2. מזכרות שהאורחים באמת שומרים', '2. Keepsakes guests actually keep'),
      paragraph(
        'בניגוד לתמונות בגלריה דיגיטלית שאף אחד לא פותח — הדפסות מיידיות ומגנטים יושבים על שולחן הסalon או המקרר. כל פעם שמישהו רואה את המגנט, הוא נזכר באירוע שלכם. עם מסגרות מעוצבות, מיתוג אישי ועיצוב מותאם, המזכרת הופכת חלק מהסיפור שלכם.',
        'Unlike digital gallery links nobody opens — instant prints and magnets sit on the living room table or fridge. Every time someone sees the magnet, they remember your event. With styled frames, personal branding, and custom design, the keepsake becomes part of your story.',
      ),
      heading('3. אטרקציה שעובדת לכל גיל', '3. An attraction for every age'),
      paragraph(
        'ילדים, teenagers, הורים וסבים — כולם אוהבים עמדת צילום. אביזרי צילום מצחיקים, תאורה מקצועית וצוות מלווה שמדריך ועוזר — הכל יחד יוצר חוויה בלתי נשכחת. זו אחת האטרקציות המומלצות לחתונה, לצד DJ ואוכל טוב.',
        'Kids, teens, parents, and grandparents — everyone loves a photo booth. Funny props, pro lighting, and an attendant who guides and helps — together they create an unforgettable experience. It is one of the top recommended wedding attractions, alongside a DJ and great food.',
      ),
      heading('4. תוכן לשיתוף ברשתות', '4. Content for social sharing'),
      paragraph(
        'תמונות HD, GIF, Boomerang וסרטוני slow motion — האורחים משתפים ברשתות ומייצרים חשיפה אורגנית לאירוע שלכם. עם שליחה לוואטסאפ וגלריה דיגיטלית, גם מי שלא הגיע יכול ליהנות מהרגעים.',
        'HD photos, GIFs, Boomerangs, and slow-motion clips — guests share online and generate organic exposure for your event. With WhatsApp delivery and a digital gallery, even those who could not attend can enjoy the moments.',
      ),
      heading('5. שירות מקצועי שמשחרר אתכם', '5. Pro service that frees you up'),
      paragraph(
        'כשמזמינים מ-Laviva Events, אתם מקבלים לא רק ציוד — אלא צוות מנוסה, הגעה בזמן, התקנה מסודרת וליווי לאורך כל האירוע. אתם נהנים מהערב; אנחנו דואגים שהכל יעבוד חלק.',
        'When you book Laviva Events, you get more than equipment — an experienced team, on-time arrival, neat setup, and support throughout the event. You enjoy the evening; we make sure everything runs smoothly.',
      ),
      catalogLink('booths'),
    ],
  },
  {
    slug: 'ma-hu-kir-tsilum',
    category: 'walls',
    publishedAt: '2026-08-08',
    title: {
      he: 'מהו קיר צילום ולמה הוא חשוב?',
      en: 'What Is a Photo Wall and Why Does It Matter?',
    },
    excerpt: {
      he: 'קיר צילום הוא רקע מעוצב שהופך כל תמונה ליצירת אמנות — ונקודת ציון ויזואלית שכולם רוצים להצטלם מולה.',
      en: 'A photo wall is a styled backdrop that turns every photo into art — a visual landmark everyone wants to pose in front of.',
    },
    metaDescription: {
      he: 'מהו קיר צילום לאירועים? רעיונות לעיצוב — פרחים, בלונים, ניאון ו-Welcome Baby — ולמה הוא חובה בחתונה וברית.',
      en: 'What is an event photo wall? Design ideas — flowers, balloons, neon, Welcome Baby — and why it is essential at weddings and britot.',
    },
    keywords: getBlogMetaKeywords([
      ...serviceKeywords.walls,
      'מהו קיר צילום',
      'קיר צילום לחתונה',
    ]),
    body: [
      paragraph(
        'קיר צילום הוא רקע מעוצב — פרחים, בלונים, ניאון, קשתות מוארות ועיצוב אישי — שהופך כל תמונה ליצירת אמנות. בניגוד לעמדת צילום, קיר הצילום יוצר "נקודת ציון" ויזואלית באירוע: מקום שכולם רוצים להצטלם מולו. מושלם לחתונות, בריתות ובר/בת מצווה.',
        'A photo wall is a styled backdrop — flowers, balloons, neon, lit arches, and personal design — that turns every photo into art. Unlike a photo booth, the wall creates a visual landmark at the event: a spot everyone wants to pose in front of. Perfect for weddings, britot, and bar/bat mitzvah.',
      ),
      heading('קיר צילום מול עמדת צילום — מה ההבדל?', 'Photo wall vs. photo booth — what is the difference?'),
      paragraph(
        'עמדת צילום מתמקדת בחוויה המודרכת: אביזרים, הדפסות, צוות. קיר צילום הוא אלמנט עיצוב שמשרת גם את הצלם הרשמי, גם את האורחים עם הטלפון, וגם את עמדת הצילום אם יש אחת. השילוב של קיר צילום + עמדת צילום הוא אחד הפתרונות המנצחים — רקע מושלם לתמונות מודפסות ודיגיטליות כאחד.',
        'A photo booth focuses on a guided experience: props, prints, staff. A photo wall is a design element that serves the official photographer, phone-toting guests, and the booth if you have one. Combining a photo wall + booth is a winning setup — the perfect backdrop for printed and digital photos alike.',
      ),
      heading('רעיונות לקיר צילום לפי סוג אירוע', 'Photo wall ideas by event type'),
      paragraph(
        'לחתונה: קיר פרחים, קיר ניאון עם שמות הזוג, או קשת בלונים אלגנטית. לברית: קיר Welcome Baby עם עיצוב רך, דובים או עגלת ירח. לבר/בת מצווה: קיר בלונים מואר, LED או מראות. לכל אירוע — אפשר לשלב מיתוג אישי, צבעי האירוע ואלמנטים VIP שמעלים את הרמה.',
        'For weddings: a flower wall, neon wall with the couple\'s names, or an elegant balloon arch. For britot: a Welcome Baby wall with soft design, teddy bears, or a moon cart. For bar/bat mitzvah: a lit balloon wall, LED, or mirrors. For any event — personal branding, event colors, and VIP elements elevate the look.',
      ),
      heading('איך קיר צילום מעלה את רמת האירוע?', 'How a photo wall elevates your event'),
      paragraph(
        'קיר מעוצב היטב נראה מרשים בכניסה, ליד רחבת הריקודים או באזור הצילום. הוא משדרג את התמונות — של הצלם, של האורחים ושל עמדת הצילום. ב-Laviva Events אנחנו מתכננים קירות צילום מותאמים: פרחים מלאכותיים, בלונים אורגניים, פאנלים מוארים ועיצוב מותאם אישית.',
        'A well-designed wall looks impressive at the entrance, near the dance floor, or in the photo area. It upgrades photos — from the photographer, guests, and the booth. At Laviva Events we plan custom photo walls: artificial flowers, organic balloons, lit panels, and personalized design.',
      ),
      catalogLink('walls'),
    ],
  },
  {
    slug: 'magnetim-le-irua-im',
    category: 'magnets',
    publishedAt: '2026-08-10',
    title: {
      he: 'למה מגנטים לאירועים כל כך פופולריים?',
      en: 'Why Are Event Magnets So Popular?',
    },
    excerpt: {
      he: 'מגנטים עם הדפסה מיידית — המזכרת שהאורחים שומרים על המקרר ומזכירים את האירוע כל יום.',
      en: 'Magnets with instant printing — the keepsake guests keep on the fridge and remember your event every day.',
    },
    metaDescription: {
      he: 'למה מגנטים לאירועים כל כך אהובים? הדפסת מגנטים מיידית, כמה להזמין לחתונה, ועמדת מגנטים לברית — Laviva Events.',
      en: 'Why are event magnets so loved? Instant magnet printing, how many to order for a wedding, and magnet booths for britot — Laviva Events.',
    },
    keywords: getBlogMetaKeywords([
      ...serviceKeywords.magnets,
      'למה מגנטים לאירועים',
      'מגנטים לחתונה',
    ]),
    body: [
      paragraph(
        'מגנטים לאירועים הם המזכרת האולטימטיבית — תמונה שיושבת על המקרר ומזכירה את הרגע כל יום מחדש. עם הדפסת מגנטים מיידית, כל אורח מקבל מגנט מעוצב עם שם האירוע, תאריך ועיצוב מותאם — תוך שניות. זו מתנה שהאורחים באמת שומרים.',
        'Event magnets are the ultimate keepsake — a photo on the fridge that recalls the moment every day. With instant magnet printing, each guest receives a styled magnet with the event name, date, and custom design — within seconds. It is a gift guests actually keep.',
      ),
      heading('איך עובדת הדפסת מגנטים מיידית?', 'How does instant magnet printing work?'),
      paragraph(
        'בעמדת מגנטים, האורחים מצטלמים (בעמדה ייעודית או ליד קיר הצילום), ובתוך שניות מקבלים מגנט מודפס — עם מסגרת מעוצבת, לוגו האירוע ותאריך. אפשר להזמין חבילת מגנטים לפי מספר אורחים, לשדרג למגנטים XL, או להוסיף תוספת מגנטים במהלך האירוע. הדפסה תרמית מקצועית מבטיחה איכות גבוהה ועמידות.',
        'At a magnet station, guests pose (at a dedicated booth or by the photo wall), and within seconds receive a printed magnet — with a styled frame, event logo, and date. You can order a magnet package by guest count, upgrade to XL magnets, or add extras during the event. Professional thermal printing ensures high quality and durability.',
      ),
      heading('כמה מגנטים להזמין לחתונה?', 'How many magnets to order for a wedding?'),
      paragraph(
        'כלל אצבע: מגנט אחד לכל אורח שמגיע, ועוד 10–15% רזerva. בחתונה של 200 אורחים — בערך 220–230 מגנטים. אפשר גם לשלב עמדת מגנטים עם הדפסות ללא הגבלה — כך שכל מי שרוצה, מקבל. בברית או יום הולדת, חבילה קטנה יותר לרוב מספיקה.',
        'Rule of thumb: one magnet per expected guest, plus 10–15% extra. For a 200-guest wedding — about 220–230 magnets. You can also combine a magnet booth with unlimited prints — so everyone who wants one gets one. For a brit or birthday, a smaller package is usually enough.',
      ),
      heading('עמדת מגנטים לברית — למה הורים אוהבים את זה?', 'Magnet booth for a brit — why parents love it'),
      paragraph(
        'בברית, האורחים רוצים לקחת הביתה משהו מהתינוק והמשפחה. מגנט עם תמונה מהאירוע — מושלם. עיצוב Welcome Baby, צבעים רכים ומסגרות מעוצבות הופכים את המגנט למזכרת מרגשת. עמדת מגנטים + קיר Welcome Baby = שילוב מנצח.',
        'At a brit, guests want to take something home from the baby and family. A magnet with a photo from the event is perfect. Welcome Baby design, soft colors, and styled frames make the magnet a touching keepsake. Magnet booth + Welcome Baby wall = a winning combo.',
      ),
      heading('מגנטים XL — מתי שווה לשדרג?', 'XL magnets — when to upgrade?'),
      paragraph(
        'מגנטים XL בולטים יותר על המקרר, נראים פרימיום ומתאימים לחתונות גדולות או אירועי חברה. אם אתם רוצים שהמזכרת תרגיש מיוחדת במיוחד — שדרוג ל-XL שווה את זה. ב-Laviva Events נבנה לכם חבילה מותאמת: מגנטים, עמדת צילום, או שילוב מלא.',
        'XL magnets stand out more on the fridge, look premium, and suit large weddings or corporate events. If you want the keepsake to feel extra special — upgrading to XL is worth it. At Laviva Events we build a custom package: magnets, photo booth, or a full combo.',
      ),
      catalogLink('magnets'),
    ],
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((post) => post.slug === slug);
}

export function getRelatedBlogs(currentSlug, limit = 2) {
  const current = getBlogBySlug(currentSlug);
  if (!current) return blogs.slice(0, limit);

  return blogs
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 0 : 1;
      const bMatch = b.category === current.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, limit);
}

export function getBlogListingMeta() {
  return {
    title: {
      he: 'בלוג | טיפים לעמדות צילום, קירות צילום ומגנטים',
      en: 'Blog | Photo Booth, Photo Wall & Magnet Tips',
    },
    description: {
      he: 'מדריכים, טיפים ורעיונות לעמדות צילום, קירות צילום ומגנטים לחתונות, בר/בת מצווה, בריתות וכל אירוע — Laviva Events.',
      en: 'Guides, tips, and ideas for photo booths, photo walls, and magnets for weddings, bar/bat mitzvah, britot, and every event — Laviva Events.',
    },
    keywords: getBlogMetaKeywords(longTailKeywords.slice(0, 10)),
  };
}

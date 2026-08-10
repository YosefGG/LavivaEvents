export const products = [
  {
    id: 'classic-booth',
    categoryId: 'booths',
    name: { he: 'עמדת צילום קלאסית', en: 'Classic Photo Booth' },
    description: {
      he: 'עמדת צילום מסורתית עם וילון, תאורה מקצועית, אביזרים מצחיקים והדפסות מיידיות.',
      en: 'Traditional enclosed booth with curtain, pro lighting, fun props, and instant prints.',
    },
    image: '/catalog/booths/classic-booth.png',
    eventTypes: ['wedding', 'bar-mitzvah', 'brit', 'corporate', 'all'],
    features: [
      { he: 'צוות מלווה לאורך האירוע', en: 'Attendant throughout the event' },
      { he: 'אביזרים ואקססוריז', en: 'Props and accessories' },
      { he: 'הדפסות ללא הגבלה', en: 'Unlimited prints' },
    ],
    priceFrom: 2500,
  },
  {
    id: 'booth-360',
    categoryId: 'booths',
    name: { he: 'עמדת צילום 360', en: '360 Photo Booth' },
    description: {
      he: 'חוויית צילום 360 מרהיבה — סרטון ותמונות slow-motion שיוצרים רגעים ויראליים באירוע.',
      en: 'Stunning 360 capture — slow-motion video and photos that create viral event moments.',
    },
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    eventTypes: ['wedding', 'bar-mitzvah', 'corporate', 'all'],
    features: [
      { he: 'סרטון 360 + GIF', en: '360 video + GIF' },
      { he: 'שיתוף מיידי לרשתות', en: 'Instant social sharing' },
      { he: 'תאורת LED מקצועית', en: 'Professional LED lighting' },
    ],
    priceFrom: 4500,
  },
  {
    id: 'selfie-station',
    categoryId: 'booths',
    name: { he: 'עמדת סלפי', en: 'Selfie Station' },
    description: {
      he: 'עמדת סלפי פתוחה עם מסך מגע, פילטרים מותאמים ומיתוג אישי לאירוע שלכם.',
      en: 'Open selfie station with touch screen, custom filters, and personalized event branding.',
    },
    image: '/catalog/booths/selfie-station.png',
    eventTypes: ['wedding', 'bar-mitzvah', 'brit', 'corporate', 'all'],
    features: [
      { he: 'מסך מגע גדול', en: 'Large touch screen' },
      { he: 'מיתוג אישי', en: 'Custom branding' },
      { he: 'שליחה ישירה לוואטסאפ', en: 'Direct WhatsApp delivery' },
    ],
    priceFrom: 2800,
  },
  {
    id: 'green-screen',
    categoryId: 'booths',
    name: { he: 'עמדת Green Screen', en: 'Green Screen Booth' },
    description: {
      he: 'רקעים דיגיטליים מדהימים — מהחוף ועד לפריז, עם תמונות שיוצאות כמו מגזין.',
      en: 'Amazing digital backdrops — from the beach to Paris, with magazine-quality photos.',
    },
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    eventTypes: ['corporate', 'bar-mitzvah', 'wedding', 'all'],
    features: [
      { he: 'מגוון רקעים דיגיטליים', en: 'Multiple digital backgrounds' },
      { he: 'מיתוג חברה / אירוע', en: 'Company or event branding' },
      { he: 'תמונות באיכות HD', en: 'HD quality photos' },
    ],
    priceFrom: 3200,
  },
  {
    id: 'polaroid-booth',
    categoryId: 'booths',
    name: { he: 'עמדת פולארoid', en: 'Polaroid Booth' },
    description: {
      he: 'עמדת פולארoid נוסטלגית עם הדפסות מיידיות בפורמט קלאסי — מושלמת לחתונות.',
      en: 'Nostalgic Polaroid booth with instant classic-format prints — perfect for weddings.',
    },
    image:
      'https://images.unsplash.com/photo-1522673604730-d871a1720209?w=800&q=80',
    eventTypes: ['wedding', 'brit', 'all'],
    features: [
      { he: 'פולארoid אמיתי', en: 'Authentic Polaroid prints' },
      { he: 'אלבום אורחים', en: 'Guest book album' },
      { he: 'עטים ומדבקות', en: 'Pens and stickers' },
    ],
    priceFrom: 2200,
  },
  {
    id: 'welcome-baby-mila',
    categoryId: 'walls',
    name: { he: 'קיר Welcome Baby — ורוד', en: 'Welcome Baby Wall — Pink' },
    description: {
      he: 'קיר צילום מעוצב לברית/התקבלות תינוקת — קשת מוארת, בלונים, פרחים ועניבת בד אלגנטית בגווני ורוד.',
      en: 'Styled photo wall for a baby girl celebration — backlit arch, balloons, florals, and an elegant pink fabric bow.',
    },
    image: '/catalog/walls/welcome-baby-mila.png',
    eventTypes: ['brit', 'all'],
    features: [
      { he: 'קשת מוארת עם שם מותאם', en: 'Backlit arch with custom name' },
      { he: 'בלונים ופרחים מעוצבים', en: 'Styled balloons and florals' },
      { he: 'עיצוב מותאם אישית', en: 'Fully personalized design' },
    ],
    priceFrom: 1800,
  },
  {
    id: 'welcome-baby-boy-navy',
    categoryId: 'walls',
    name: { he: 'קיר Welcome Baby Boy — כחול וזהב', en: 'Welcome Baby Boy Wall — Navy & Gold' },
    description: {
      he: 'קיר צילום יוקרתי לברית — רקע מואר, עמוד בלונים, עגלת ירח ודובי ענק בגווני כחול וזהב.',
      en: 'Luxury brit photo wall — backlit backdrop, balloon column, moon cradle, and giant teddy bear in navy and gold.',
    },
    image: '/catalog/walls/welcome-baby-boy-navy.png',
    eventTypes: ['brit', 'all'],
    features: [
      { he: 'רקע מואר עם טקסט מותאם', en: 'Backlit backdrop with custom text' },
      { he: 'עמוד בלונים אורגני', en: 'Organic balloon column' },
      { he: 'אביזרים — עגלת ירח ודובי', en: 'Props — moon cradle and teddy bear' },
    ],
    priceFrom: 2200,
  },
  {
    id: 'welcome-baby-arches',
    categoryId: 'walls',
    name: { he: 'קיר Welcome Baby — קשתות', en: 'Welcome Baby Wall — Arches' },
    description: {
      he: 'קיר צילום עם שלוש קשתות מדורגות, גרלנד בלונים, פדסטלים ואביזרים בגווני תכלת, זהב ובז\'.',
      en: 'Photo wall with three tiered arches, balloon garland, plinths, and props in light blue, gold, and beige.',
    },
    image: '/catalog/walls/welcome-baby-arches.png',
    eventTypes: ['brit', 'all'],
    features: [
      { he: 'קשתות מדורגות מוארות', en: 'Tiered backlit arches' },
      { he: 'גרלנד בלונים עם דקורציה', en: 'Balloon garland with décor' },
      { he: 'פדסטלים ואביזרים', en: 'Plinths and styled props' },
    ],
    priceFrom: 2000,
  },
  {
    id: 'welcome-baby-boy-celestial',
    categoryId: 'walls',
    name: { he: 'קיר Welcome Baby Boy — שמיים', en: 'Welcome Baby Boy Wall — Celestial' },
    description: {
      he: 'קיר צילום בנושא שמיים — רקע כחול כהה עם ירח וכוכבים, עמודי בלונים, עגלת ירח ודובי ענק.',
      en: 'Celestial-themed photo wall — dark blue sky backdrop with moon and stars, balloon columns, moon cradle, and giant bear.',
    },
    image: '/catalog/walls/welcome-baby-boy-celestial.png',
    eventTypes: ['brit', 'all'],
    features: [
      { he: 'עיצוב שמיים עם תאורה', en: 'Sky-themed design with lighting' },
      { he: 'עמודי בלונים דו-צדדיים', en: 'Dual balloon columns' },
      { he: 'אביזרים מעוצבים', en: 'Themed props included' },
    ],
    priceFrom: 2400,
  },
  {
    id: 'welcome-baby-boy-sage',
    categoryId: 'walls',
    name: { he: 'קיר Welcome Baby Boy — ירוק מרווה', en: 'Welcome Baby Boy Wall — Sage Green' },
    description: {
      he: 'קיר צילום אלגנטי בגווני בז\' וירוק מרווה — קשת מוארת, גרלנד בלונים, דובי וסוס נדנדה.',
      en: 'Elegant photo wall in beige and sage green — backlit arch, balloon garland, teddy bear, and rocking horse.',
    },
    image: '/catalog/walls/welcome-baby-boy-sage.png',
    eventTypes: ['brit', 'all'],
    features: [
      { he: 'קשת מוארת עם טקסט זהב', en: 'Backlit arch with gold text' },
      { he: 'גרלנד בלונים ופרחים יבשים', en: 'Balloon garland with dried florals' },
      { he: 'דובי וסוס נדנדה', en: 'Teddy bear and rocking horse' },
    ],
    priceFrom: 2000,
  },
  {
    id: 'mizmor-le-toda-baby-boy',
    categoryId: 'walls',
    name: { he: 'קיר מזמור לתודה — Baby Boy', en: 'Mizmor LeToda Wall — Baby Boy' },
    description: {
      he: 'קיר צילום מעוצב עם טקסט "מזמור לתודה", קשת בלונים, פדסטלים, דובי וסוס נדנדה — מושלם לברית.',
      en: 'Styled photo wall featuring "Mizmor LeToda" text, balloon arch, plinths, teddy bear, and rocking horse — perfect for brit.',
    },
    image: '/catalog/walls/mizmor-le-toda-baby-boy.png',
    eventTypes: ['brit', 'all'],
    features: [
      { he: 'טקסט מותאם אישית', en: 'Custom personalized text' },
      { he: 'קשת בלונים ופרחים', en: 'Balloon arch and florals' },
      { he: 'אביזרים מעוצבים', en: 'Styled props included' },
    ],
    priceFrom: 2100,
  },
  {
    id: 'bar-mitzvah-daniel',
    categoryId: 'walls',
    name: { he: 'קיר בר מצווה — לבן וזהב', en: 'Bar Mitzvah Wall — White & Gold' },
    description: {
      he: 'קיר צילום יוקרתי לבר מצווה — פאנל מואר, פרחים לבנים, נרות, כדורים מוזהבים ופסי LED.',
      en: 'Luxury bar mitzvah photo wall — backlit panel, white florals, candles, gold orbs, and LED accents.',
    },
    image: '/catalog/walls/bar-mitzvah-daniel.png',
    eventTypes: ['bar-mitzvah', 'all'],
    features: [
      { he: 'פאנל מואר עם שם מותאם', en: 'Backlit panel with custom name' },
      { he: 'פרחים, נרות וכדורים מוזהבים', en: 'Florals, candles, and gold orbs' },
      { he: 'במה מוארת דו-שכבתית', en: 'Two-tier lit platform' },
    ],
    priceFrom: 3500,
  },
  {
    id: 'bat-mitzvah-shilo',
    categoryId: 'walls',
    name: { he: 'קיר בת מצווה — אפור ולבן', en: 'Bat Mitzvah Wall — Grey & White' },
    description: {
      he: 'קיר צילום אלגנטי לבת מצווה — קשת מוארת, בלונים, פרחים גדולים ועניבת בד בגווני אפור ולבן.',
      en: 'Elegant bat mitzvah photo wall — backlit arch, balloons, oversized florals, and fabric bow in grey and white.',
    },
    image: '/catalog/walls/bat-mitzvah-shilo.png',
    eventTypes: ['bar-mitzvah', 'all'],
    features: [
      { he: 'קשת מוארת עם שם מותאם', en: 'Backlit arch with custom name' },
      { he: 'בלונים ופרחים גדולים', en: 'Balloons and oversized florals' },
      { he: 'עניבת בד אלגנטית', en: 'Elegant fabric bow' },
    ],
    priceFrom: 3200,
  },
  {
    id: 'bar-mitzvah-ori',
    categoryId: 'walls',
    name: { he: 'קיר בר מצווה — עיגול מוזהב', en: 'Bar Mitzvah Wall — Gold Circle' },
    description: {
      he: 'קיר צילום מרשים לבר מצווה — פאנל עגול מואר, קירות מחורצים, פרחים לבנים, נרות וכדורים מוזהבים.',
      en: 'Stunning bar mitzvah photo wall — backlit circular panel, slatted walls, white florals, candles, and gold orbs.',
    },
    image: '/catalog/walls/bar-mitzvah-ori.png',
    eventTypes: ['bar-mitzvah', 'all'],
    features: [
      { he: 'פאנל עגול מואר', en: 'Backlit circular panel' },
      { he: 'פרחים, נרות ואביזרי זהב', en: 'Florals, candles, and gold accents' },
      { he: 'במה מוארת דו-שכבתית', en: 'Two-tier lit platform' },
    ],
    priceFrom: 3500,
  },
  {
    id: 'magnet-booth',
    categoryId: 'magnets',
    name: { he: 'עמדת מגנטים קלאסית', en: 'Classic Magnet Booth' },
    description: {
      he: 'עמדת מגנטים מלאה — צילום, עריכה והדפסה מיידית של מגנטים שהאורחים לוקחים הביתה.',
      en: 'Full magnet booth — shoot, edit, and instantly print magnets guests take home.',
    },
    image:
      'https://images.unsplash.com/photo-1520854221256-174851aa3ced?w=800&q=80',
    eventTypes: ['wedding', 'brit', 'bar-mitzvah', 'all'],
    features: [
      { he: 'הדפסת מגנטים מיידית', en: 'Instant magnet printing' },
      { he: 'מסגרות מעוצבות', en: 'Designed frames' },
      { he: 'כמות מגנטים גמישה', en: 'Flexible magnet quantity' },
    ],
    priceFrom: 2500,
  },
  {
    id: 'magnet-premium',
    categoryId: 'magnets',
    name: { he: 'חבילת מגנטים פרימיום', en: 'Premium Magnet Package' },
    description: {
      he: 'חבילה מלאה עם עיצוב מותאם, מגנטים בגודל XL, אלבום מתנה וגלריה דיגיטלית.',
      en: 'Full package with custom design, XL magnets, gift album, and digital gallery.',
    },
    image:
      'https://images.unsplash.com/photo-1465497424741-b3246200d2f0?w=800&q=80',
    eventTypes: ['wedding', 'bar-mitzvah', 'all'],
    features: [
      { he: 'מגנטים XL', en: 'XL magnets' },
      { he: 'עיצוב מותאם אישית', en: 'Personalized design' },
      { he: 'גלריה דיגיטלית', en: 'Digital gallery' },
    ],
    priceFrom: 3500,
  },
  {
    id: 'magnet-addon',
    categoryId: 'magnets',
    name: { he: 'תוספת מגנטים לעמדה', en: 'Magnet Add-On' },
    description: {
      he: 'הוסיפו הדפסת מגנטים לכל עמדת צילום — שדרוג מושלם שמגדיל את חוויית האורחים.',
      en: 'Add magnet printing to any photo booth — the perfect upgrade for guest experience.',
    },
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    eventTypes: ['wedding', 'brit', 'bar-mitzvah', 'corporate', 'all'],
    features: [
      { he: 'שילוב עם עמדה קיימת', en: 'Pairs with existing booth' },
      { he: 'מחיר משתלם', en: 'Cost-effective upgrade' },
      { he: 'התקנה מהירה', en: 'Quick setup' },
    ],
    priceFrom: 800,
  },
];

export function getProductsByCategory(categoryId) {
  return products.filter((product) => product.categoryId === categoryId);
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

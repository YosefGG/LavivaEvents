import { assetUrl } from '../utils/assetUrl';

export const categories = [
  {
    id: 'booths',
    name: { he: 'עמדות צילום', en: 'Photo Booths' },
    description: {
      he: 'עמדות צילום מקצועיות לכל סוג אירוע — מגנטים, 360, סלפי ועוד. צוות מלווה, אביזרים ותמונות באיכות פרימיום.',
      en: 'Professional photo booths for every event — magnets, 360, selfie stations and more. Attendant, props, and premium-quality photos.',
    },
    shortDescription: {
      he: 'עמדות צילום מקצועיות עם צוות, אביזרים והדפסות מיידיות.',
      en: 'Professional photo booths with attendant, props, and instant prints.',
    },
    image: assetUrl('/catalog/booths/classic-booth.png'),
    heroImage: assetUrl('/catalog/booths/selfie-station.png'),
  },
  {
    id: 'walls',
    name: { he: 'קיר צילום', en: 'Photo Walls' },
    description: {
      he: 'קירות צילום מעוצבים שיהפכו כל אירוע לחוויה ויזואלית בלתי נשכחת — פרחים, ניאון, מראות ועיצובים מותאמים אישית.',
      en: 'Designed photo walls that turn every event into an unforgettable visual experience — florals, neon, mirrors, and custom designs.',
    },
    shortDescription: {
      he: 'קירות צילום מעוצבים — פרחים, ניאון, מראות ועיצוב אישי.',
      en: 'Styled photo walls — florals, neon, mirrors, and custom branding.',
    },
    image: assetUrl('/catalog/walls/welcome-baby-mila.png'),
    heroImage: assetUrl('/catalog/walls/bar-mitzvah-daniel.png'),
  },
  {
    id: 'magnets',
    name: { he: 'מגנטים', en: 'Magnets' },
    description: {
      he: 'עמדות מגנטים לאירועים — הדפסה מיידית, עיצוב מותאם וזיכרון שאורחים לוקחים הביתה. מושלם לחתונות, בריתות ובר/בת מצווה.',
      en: 'Magnet booths for events — instant printing, custom design, and keepsakes guests take home. Perfect for weddings, britot, and bar/bat mitzvah.',
    },
    shortDescription: {
      he: 'הדפסת מגנטים מיידית עם עיצוב מותאם לאירוע שלכם.',
      en: 'Instant magnet printing with custom event branding.',
    },
    image: assetUrl('/catalog/booths/premium-booth-station.png'),
    heroImage: assetUrl('/catalog/booths/premium-booth-station.png'),
  },
  {
    id: 'marriage-proposal',
    name: { he: 'הצעת נישואין', en: 'Marriage Proposal' },
    description: {
      he: 'קירות צילום והפקות רומנטיות להצעת נישואין — עיצוב מרהיב על החוף או בכל מיקום, עם פרחים, תאורה ולוח מותאם אישית לרגע שאף אחד לא ישכח.',
      en: 'Romantic photo walls and setups for marriage proposals — stunning beach or venue designs with florals, lighting, and a custom sign for an unforgettable moment.',
    },
    shortDescription: {
      he: 'הפקות רומנטיות וקירות צילום מעוצבים להצעת נישואין.',
      en: 'Romantic setups and styled photo walls for marriage proposals.',
    },
    image: assetUrl('/catalog/walls/marriage-proposal-marry.png'),
    heroImage: assetUrl('/catalog/walls/marriage-proposal-marry.png'),
  },
  {
    id: 'gender-reveal',
    name: { he: 'גילוי מין העובר', en: 'Gender Reveal' },
    description: {
      he: 'קירות צילום והפקות מעוצבות לגילוי מין העובר — בלונים, פרחים, עמדת צילום ועיצוב מותאם אישית לחגיגה בלתי נשכחת עם המשפחה והחברים.',
      en: 'Styled photo walls and setups for gender reveals — balloons, florals, photo booth, and fully personalized design for an unforgettable celebration with family and friends.',
    },
    shortDescription: {
      he: 'קירות צילום והפקות מעוצבות לגילוי מין העובר.',
      en: 'Styled photo walls and setups for gender reveal celebrations.',
    },
    image: assetUrl('/catalog/walls/gender-reveal-baby.png'),
    heroImage: assetUrl('/catalog/walls/gender-reveal-baby.png'),
  },
];

export function getCategoryById(id) {
  return categories.find((category) => category.id === id);
}

export function getProductCountByCategory(categoryId, products) {
  return products.filter((product) => product.categoryId === categoryId).length;
}

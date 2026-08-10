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
    image:
      'https://images.unsplash.com/photo-1520854221256-174851aa3ced?w=1200&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1465497424741-b3246200d2f0?w=1600&q=80',
  },
];

export function getCategoryById(id) {
  return categories.find((category) => category.id === id);
}

export function getProductCountByCategory(categoryId, products) {
  return products.filter((product) => product.categoryId === categoryId).length;
}

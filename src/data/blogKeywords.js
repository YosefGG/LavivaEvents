/** SEO keyword sets derived from src/data/blog-keywords.txt */

export const primaryKeywords = [
  'עמדת צילום',
  'עמדות צילום',
  'עמדת צילום לאירועים',
  'עמדות צילום לאירועים',
  'קיר צילום',
  'קירות צילום',
  'קיר צילום לאירועים',
  'קירות צילום לאירועים',
  'מגנטים',
  'מגנטים לאירועים',
  'הדפסת מגנטים',
  'עמדת מגנטים',
  'צילום מגנטים',
  'אטרקציות לאירועים',
  'חוויות ויזואליות לאירועים',
];

export const serviceKeywords = {
  booths: [
    'עמדת צילום קלאסית',
    'עמדת צילום 360',
    'עמדת סלפי',
    'עמדת Green Screen',
    'עמדת פולארoid',
    'photo booth',
  ],
  walls: [
    'קיר עיצוב',
    'קיר Welcome Baby',
    'קיר בר מצווה',
    'קיר פרחים',
    'קיר בלונים',
    'קיר ניאון',
    'רקע צילום',
  ],
  magnets: [
    'חבילת מגנטים',
    'מגנטים לחתונה',
    'הדפסת מגנטים מיידית',
    'מגנטים XL',
    'מסגרות מעוצבות',
  ],
};

export const eventTypeKeywords = [
  'חתונה',
  'בר מצווה',
  'בת מצווה',
  'ברית',
  'יום הולדת',
  'אירוע חברה',
  'אירוע פרטי',
];

export const longTailKeywords = [
  'מהי עמדת צילום לאירועים',
  'למה להזמין עמדת צילום',
  'למה כדאי עמדת צילום לחתונה',
  'כמה עולה עמדת צילום לאירועים',
  'איך לבחור עמדת צילום',
  'קיר צילום או עמדת צילום',
  'מגנטים לחתונה — כמה כדאי להזמין',
  'אטרקציות מומלצות לחתונה',
  'מתי להזמין עמדת צילום',
];

export const internalLinks = {
  booths: { href: '/catalog/booths', label: { he: 'עמדות צילום', en: 'Photo Booths' } },
  walls: { href: '/catalog/walls', label: { he: 'קירות צילום', en: 'Photo Walls' } },
  magnets: { href: '/catalog/magnets', label: { he: 'מגנטים', en: 'Magnets' } },
  contact: { href: '/#contact', label: { he: 'יצירת קשר', en: 'Contact Us' } },
  catalog: { href: '/catalog', label: { he: 'הקטלוג שלנו', en: 'Our Catalog' } },
};

export const blogCtaPhrases = [
  { he: 'רוצים הצעת מחיר?', en: 'Want a quote?' },
  { he: 'גלו את הקטלוג שלנו', en: 'Explore our catalog' },
  { he: 'דברו איתנו בוואטסאפ', en: 'Chat with us on WhatsApp' },
  { he: 'בואו נתכנן את האירוע שלכם', en: "Let's plan your event" },
];

export const blogCategories = {
  booths: { he: 'עמדות צילום', en: 'Photo Booths' },
  walls: { he: 'קירות צילום', en: 'Photo Walls' },
  magnets: { he: 'מגנטים', en: 'Magnets' },
  events: { he: 'תכנון אירועים', en: 'Event Planning' },
};

/** Combine keywords for meta tags on a blog post */
export function getBlogMetaKeywords(extra = []) {
  return [...new Set([...primaryKeywords.slice(0, 8), ...extra])].join(', ');
}

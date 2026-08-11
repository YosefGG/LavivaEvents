import { assetUrl } from '../utils/assetUrl';

export const businessInfo = {
  name: { he: 'Laviva Events', en: 'Laviva Events' },
  logo: assetUrl('/laviva-logo.png'),
  slogan: { he: 'כל פרט חשוב', en: 'Every Detail Matters' },
  tagline: {
    he: 'עמדות צילום וחוויות ויזואליות לאירועים',
    en: 'Photo Booths & Visual Experiences for Events',
  },
  shortDescription: {
    he: 'עמדות צילום, קירות צילום ומגנטים לאירועים שאסור לפספס. חוויה פרימיום עם צוות מקצועי, עיצוב מותאם וזיכרונות שנשארים לנצח.',
    en: 'Photo booths, photo walls, and magnets for unforgettable events. A premium experience with a pro team, custom design, and memories that last.',
  },
  aboutStory: {
    he: 'Laviva Events נולד מתוך אהבה לרגעים ששווה לתפוס. אנחנו מתמחים בעמדות צילום, קירות צילום והדפסת מגנטים לחתונות, בר/בת מצווה, בריתות וכל אירוע מיוחד — עם שירות אישי, ציוד מתקדם ותשומת לב לכל פרט.',
    en: 'Laviva Events was born from a love of moments worth capturing. We specialize in photo booths, photo walls, and magnet printing for weddings, bar/bat mitzvah, britot, and every special event — with personal service, advanced equipment, and attention to every detail.',
  },
  aboutHighlight: {
    he: 'אנחנו לא רק מצלמים — אנחנו יוצרים חוויה שהאורחים שלכם יזכרו.',
    en: 'We do not just take photos — we create an experience your guests will remember.',
  },
  footerDescription: {
    he: 'עמדות צילום, קירות צילום ומגנטים לאירועים — חתונות, בר/בת מצווה, בריתות וכל חגיגה.',
    en: 'Photo booths, photo walls, and magnets for events — weddings, bar/bat mitzvah, britot, and every celebration.',
  },
  phone: '052-403-0392',
  whatsapp: '972524030392',
  instagram: 'https://www.instagram.com/laviva_events_?igsh=MXF5NWtodWtpMDcwNw%3D%3D&utm_source=qr',
  email: 'hello@lavivaevents.co.il',
  serviceArea: {
    he: 'שירות בפריסה ארצית',
    en: 'Nationwide service',
  },
  address: {
    he: 'מרכז הארץ',
    en: 'Central Israel',
  },
  mapUrl: 'https://maps.google.com/?q=Israel',
  bookingUrl: '/#contact',
  rating: 5.0,
  reviewCount: 180,
  yearsExperience: 8,
  eventsCount: 500,
  heroVideo: assetUrl('/hero-video.mp4'),
  aboutImage: assetUrl('/catalog/booths/premium-booth-station.png'),
  aboutFeatures: [
    { he: 'צוות מקצועי ומנוסה', en: 'Professional experienced team' },
    { he: 'עיצוב ומיתוג מותאם אישית', en: 'Custom design and branding' },
    { he: 'ציוד מתקדם ואיכות פרימיום', en: 'Advanced equipment, premium quality' },
  ],
};

export const quoteWhatsAppMessage = 'היי! אשמח לקבל פרטים על Laviva Events';

export function getWhatsAppUrl(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${businessInfo.whatsapp}?text=${text}`;
}

export function getQuoteWhatsAppUrl() {
  return getWhatsAppUrl(quoteWhatsAppMessage);
}

export function getProductWhatsAppUrl(productName) {
  const message = `שלום, אשמח לקבל פרטים והצעת מחיר על: ${productName}`;
  return getWhatsAppUrl(message);
}

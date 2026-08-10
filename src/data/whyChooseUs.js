import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PaletteIcon from '@mui/icons-material/Palette';
import GroupsIcon from '@mui/icons-material/Groups';
import PrintIcon from '@mui/icons-material/Print';
import VerifiedIcon from '@mui/icons-material/Verified';

export const whyChooseUsFeatures = [
  {
    id: 'equipment',
    title: { he: 'ציוד פרימיום', en: 'Premium Equipment' },
    description: {
      he: 'מצלמות, תאורה והדפסות ברמה הגבוהה ביותר — תמונות שיוצאות מושלמות.',
      en: 'Cameras, lighting, and prints at the highest level — flawless photos every time.',
    },
    icon: CameraAltIcon,
  },
  {
    id: 'custom',
    title: { he: 'עיצוב מותאם', en: 'Custom Design' },
    description: {
      he: 'מיתוג, מסגרות וקירות צילום שמותאמים בדיוק לאירוע שלכם.',
      en: 'Branding, frames, and photo walls tailored exactly to your event.',
    },
    icon: PaletteIcon,
  },
  {
    id: 'team',
    title: { he: 'צוות מלווה', en: 'Dedicated Attendant' },
    description: {
      he: 'מפעיל מקצועי שדואג שהכל יעבוד חלק ושהאורחים יהנו.',
      en: 'A professional operator ensuring everything runs smoothly and guests have fun.',
    },
    icon: GroupsIcon,
  },
  {
    id: 'prints',
    title: { he: 'הדפסות מיידיות', en: 'Instant Prints' },
    description: {
      he: 'מגנטים, תמונות ו-GIF — האורחים מקבלים זיכרון מיד.',
      en: 'Magnets, photos, and GIFs — guests receive keepsakes instantly.',
    },
    icon: PrintIcon,
  },
  {
    id: 'experience',
    title: { he: 'חוויה בלתי נשכחת', en: 'Unforgettable Experience' },
    description: {
      he: 'אביזרים, אינטראקציה ואווירה שיהפכו את העמדה לרכיב הכי מבוקש בכל אירוע.',
      en: 'Props, interaction, and atmosphere that make the booth the hit of every event.',
    },
    icon: AutoAwesomeIcon,
  },
  {
    id: 'professional',
    title: { he: 'מקצועיות מלאה', en: 'Full Professionalism' },
    description: {
      he: 'הגעה בזמן, התקנה מסודרת ושירות ברמה הגבוהה ביותר.',
      en: 'On-time arrival, clean setup, and service at the highest standard.',
    },
    icon: VerifiedIcon,
  },
];

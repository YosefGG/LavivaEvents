import FavoriteIcon from '@mui/icons-material/Favorite';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export const eventTypes = [
  {
    id: 'wedding',
    label: { he: 'חתונות', en: 'Weddings' },
    icon: FavoriteIcon,
    featured: true,
  },
  {
    id: 'bar-mitzvah',
    label: { he: 'בר/בת מצווה', en: 'Bar/Bat Mitzvah' },
    icon: CelebrationIcon,
    featured: true,
  },
  {
    id: 'brit',
    label: { he: 'בריתות', en: 'Brit Milah' },
    icon: ChildCareIcon,
    featured: true,
  },
  {
    id: 'corporate',
    label: { he: 'אירועי חברה', en: 'Corporate Events' },
    icon: BusinessCenterIcon,
    featured: false,
  },
  {
    id: 'all',
    label: { he: 'כל אירוע', en: 'Any Event' },
    icon: AutoAwesomeIcon,
    featured: true,
  },
];

export function getEventTypeById(id) {
  return eventTypes.find((event) => event.id === id);
}

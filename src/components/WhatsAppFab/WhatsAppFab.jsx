import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getText } from '../../config/language';
import { getWhatsAppUrl } from '../../data/businessInfo';
import styles from './WhatsAppFab.module.css';

export default function WhatsAppFab() {
  return (
    <Fab
      component="a"
      href={getWhatsAppUrl('שלום, אשמח לקבל פרטים על Laviva Events')}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label={getText({ he: 'שלחו הודעה בוואטסאפ', en: 'Message on WhatsApp' })}
    >
      <WhatsAppIcon className={styles.icon} />
    </Fab>
  );
}

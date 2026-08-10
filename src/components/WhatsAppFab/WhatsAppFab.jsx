import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getText } from '../../config/language';
import { getQuoteWhatsAppUrl } from '../../data/businessInfo';
import styles from './WhatsAppFab.module.css';

export default function WhatsAppFab() {
  return (
    <Fab
      component="a"
      href={getQuoteWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.fab} fabPulse`}
      aria-label={getText({ he: 'שלחו הודעה בוואטסאפ', en: 'Message on WhatsApp' })}
    >
      <WhatsAppIcon className={styles.icon} />
    </Fab>
  );
}

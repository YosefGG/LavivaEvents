import { getText } from '../../config/language';
import { getQuoteWhatsAppUrl } from '../../data/businessInfo';
import Reveal from '../Reveal/Reveal';
import BookButton from '../BookButton/BookButton';
import styles from './BookingCTA.module.css';

export default function BookingCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal variant="scale" threshold={0.2}>
          <div className={styles.inner}>
            <h2 className={styles.title}>
              {getText({ he: 'מחפשים עמדת צילום לאירוע?', en: 'Looking for a Photo Booth?' })}
            </h2>
            <p className={styles.description}>
              {getText({
                he: 'חתונה, בר/בת מצווה, ברית או כל חגיגה — נשמח לבנות לכם חבילה מושלמת.',
                en: 'Wedding, bar/bat mitzvah, brit, or any celebration — we would love to build the perfect package for you.',
              })}
            </p>
            <div className={styles.actions}>
              <BookButton to="/catalog" size="large">
                {{ he: 'צפייה בקטלוג שלנו', en: 'View Our Catalog' }}
              </BookButton>
              <BookButton href={getQuoteWhatsAppUrl()} variant="secondary" size="large">
                {{ he: 'קבלו הצעת מחיר', en: 'Get a Quote' }}
              </BookButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

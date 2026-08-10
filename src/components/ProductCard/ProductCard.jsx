import { getText } from '../../config/language';
import { getEventTypeById } from '../../data/eventTypes';
import { getProductWhatsAppUrl } from '../../data/businessInfo';
import BookButton from '../BookButton/BookButton';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const productName = getText(product.name);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={product.image} alt={productName} className={styles.image} />
        {product.priceFrom && (
          <span className={styles.priceBadge}>
            {getText({ he: 'החל מ-', en: 'From ' })}₪{product.priceFrom.toLocaleString()}
          </span>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{productName}</h3>
        <p className={styles.description}>{getText(product.description)}</p>

        {product.features?.length > 0 && (
          <ul className={styles.features}>
            {product.features.slice(0, 3).map((feature) => (
              <li key={getText(feature)}>{getText(feature)}</li>
            ))}
          </ul>
        )}

        {product.eventTypes?.length > 0 && (
          <div className={styles.tags}>
            {product.eventTypes.slice(0, 4).map((eventId) => {
              const event = getEventTypeById(eventId);
              if (!event) return null;
              return (
                <span key={eventId} className={styles.tag}>
                  {getText(event.label)}
                </span>
              );
            })}
          </div>
        )}

        <BookButton
          href={getProductWhatsAppUrl(productName)}
          size="medium"
          fullWidth
        >
          {{ he: 'לפרטים והזמנה', en: 'Details & Booking' }}
        </BookButton>
      </div>
    </article>
  );
}

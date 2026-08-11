import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { getText } from '../../config/language';
import { getEventTypeById } from '../../data/eventTypes';
import { getProductWhatsAppUrl } from '../../data/businessInfo';
import BookButton from '../BookButton/BookButton';
import styles from './ImageZoomDialog.module.css';

export default function ImageZoomDialog({ open, onClose, product }) {
  const productName = getText(product.name);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className={styles.backdrop} onClick={onClose} role="presentation">
      <div
        className={styles.dialog}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-dialog-title"
      >
        <IconButton
          className={styles.closeBtn}
          onClick={onClose}
          aria-label={getText({ he: 'סגור', en: 'Close' })}
        >
          <CloseIcon />
        </IconButton>

        <div className={styles.panel}>
          <div className={styles.imageCol}>
            <img
              src={product.image}
              alt={productName}
              className={styles.image}
            />
            {product.priceFrom && (
              <span className={styles.priceBadge}>
                {getText({ he: 'החל מ-', en: 'From ' })}₪
                {product.priceFrom.toLocaleString()}
              </span>
            )}
          </div>

          <div className={styles.content}>
            <h2 id="product-dialog-title" className={styles.name}>
              {productName}
            </h2>

            <p className={styles.description}>{getText(product.description)}</p>

            {product.features?.length > 0 && (
              <ul className={styles.features}>
                {product.features.map((feature) => (
                  <li key={getText(feature)}>{getText(feature)}</li>
                ))}
              </ul>
            )}

            {product.eventTypes?.length > 0 && (
              <div className={styles.tags}>
                {product.eventTypes.map((eventId) => {
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
              size="large"
              fullWidth
            >
              {{ he: 'לפרטים והזמנה', en: 'Details & Booking' }}
            </BookButton>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

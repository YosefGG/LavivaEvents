import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getText } from '../../config/language';
import BookButton from '../BookButton/BookButton';
import styles from './CategoryCard.module.css';

export default function CategoryCard({
  category,
  productCount,
  variant = 'compact',
  layout = 'default',
}) {
  const isFull = variant === 'full';
  const isStacked = layout === 'stacked';

  return (
    <article
      className={`${styles.card} ${isFull ? styles.full : styles.compact} ${
        isStacked ? styles.stacked : ''
      }`}
    >
      <Link to={`/catalog/${category.id}`} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          <img
            src={category.image}
            alt={getText(category.name)}
            className={styles.image}
          />
          <div className={styles.imageOverlay} />
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{getText(category.name)}</h3>
          {productCount != null && (
            <span className={styles.count}>
              {productCount} {getText({ he: 'פריטים', en: 'items' })}
            </span>
          )}
        </div>

        <p className={styles.description}>
          {getText(isFull ? category.description : category.shortDescription)}
        </p>

        <div className={styles.actions}>
          <BookButton
            to={`/catalog/${category.id}`}
            size={isFull ? 'large' : 'medium'}
          >
            {{ he: 'לצפייה בקטלוג', en: 'View Catalog' }}
          </BookButton>
          {isFull && (
            <Link to={`/catalog/${category.id}`} className={styles.textLink}>
              {getText({ he: 'כל הפריטים', en: 'All items' })}
              <ArrowBackIcon className={styles.arrow} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

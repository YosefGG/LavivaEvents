import StarIcon from '@mui/icons-material/Star';
import { getText } from '../../config/language';
import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ testimonial, isActive = false }) {
  return (
    <article className={`${styles.card} ${isActive ? styles.active : ''}`}>
      <div className={styles.rating}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} className={styles.star} />
        ))}
      </div>
      {testimonial.event && (
        <span className={styles.event}>{getText(testimonial.event)}</span>
      )}
      <blockquote className={styles.text}>{getText(testimonial.text)}</blockquote>
      <div className={styles.author}>
        {testimonial.avatar && (
          <img
            src={testimonial.avatar}
            alt=""
            className={styles.avatar}
            loading="lazy"
          />
        )}
        <span className={styles.name}>{getText(testimonial.name)}</span>
      </div>
    </article>
  );
}

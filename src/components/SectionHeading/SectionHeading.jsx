import { getText } from '../../config/language';
import styles from './SectionHeading.module.css';

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  light = false,
}) {
  return (
    <div
      className={`${styles.heading} ${styles[align]} ${light ? styles.light : ''}`}
    >
      {label && <span className={styles.label}>{getText(label)}</span>}
      <h2 className={styles.title}>{getText(title)}</h2>
      {description && <p className={styles.description}>{getText(description)}</p>}
    </div>
  );
}

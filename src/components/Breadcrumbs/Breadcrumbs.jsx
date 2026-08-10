import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { getText } from '../../config/language';
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs({ items, light = false }) {
  return (
    <nav
      className={`${styles.breadcrumbs} ${light ? styles.light : ''}`}
      aria-label="Breadcrumb"
    >
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const label = getText(item.label);

          return (
            <li key={label} className={styles.item}>
              {index > 0 && (
                <ChevronLeftIcon className={styles.separator} aria-hidden="true" />
              )}
              {item.href && !isLast ? (
                <Link to={item.href} className={styles.link}>
                  {label}
                </Link>
              ) : (
                <span className={isLast ? styles.current : styles.text}>{label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

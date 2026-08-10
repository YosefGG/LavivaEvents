import { Link } from 'react-router-dom';
import { getText } from '../../config/language';
import { businessInfo } from '../../data/businessInfo';
import styles from './Logo.module.css';

export default function Logo({ variant = 'header', asLink = true, className = '' }) {
  const image = (
    <img
      src={businessInfo.logo}
      alt={getText(businessInfo.name)}
      className={`${styles.logo} ${styles[variant]} ${className}`}
    />
  );

  if (!asLink) {
    return image;
  }

  return (
    <Link to="/" className={styles.link} aria-label={getText(businessInfo.name)}>
      {image}
    </Link>
  );
}

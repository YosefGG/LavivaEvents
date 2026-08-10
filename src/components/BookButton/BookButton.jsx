import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { getText } from '../../config/language';
import styles from './BookButton.module.css';

export default function BookButton({
  href,
  to,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  children,
}) {
  const label = children ?? { he: 'קבלו הצעת מחיר', en: 'Get a Quote' };
  const className = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''}`;

  if (to) {
    return (
      <Button
        component={Link}
        to={to}
        onClick={onClick}
        variant={variant === 'primary' ? 'contained' : 'outlined'}
        className={className}
      >
        {getText(label)}
      </Button>
    );
  }

  if (variant === 'primary') {
    return (
      <Button
        component={href ? 'a' : 'button'}
        href={href}
        onClick={onClick}
        variant="contained"
        className={className}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {getText(label)}
      </Button>
    );
  }

  return (
    <Button
      component={href ? 'a' : 'button'}
      href={href}
      onClick={onClick}
      variant="outlined"
      className={className}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {getText(label)}
    </Button>
  );
}

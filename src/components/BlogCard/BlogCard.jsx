import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getText } from '../../config/language';
import { blogCategories } from '../../data/blogKeywords';
import styles from './BlogCard.module.css';

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(getText({ he: 'he-IL', en: 'en-US' }), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({ post, variant = 'grid' }) {
  const categoryLabel = blogCategories[post.category];

  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.meta}>
        <span className={styles.category}>{getText(categoryLabel)}</span>
        <time className={styles.date} dateTime={post.publishedAt}>
          {formatDate(post.publishedAt)}
        </time>
      </div>

      <h2 className={styles.title}>
        <Link to={`/blog/${post.slug}`}>{getText(post.title)}</Link>
      </h2>

      <p className={styles.excerpt}>{getText(post.excerpt)}</p>

      <Link to={`/blog/${post.slug}`} className={styles.readMore}>
        {getText({ he: 'קראו עוד', en: 'Read more' })}
        <ArrowBackIcon className={styles.arrow} aria-hidden="true" />
      </Link>
    </article>
  );
}

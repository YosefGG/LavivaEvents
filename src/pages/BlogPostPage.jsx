import { useMemo } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { getText } from '../config/language';
import { blogCategories } from '../data/blogKeywords';
import { getBlogBySlug, getRelatedBlogs } from '../data/blogs';
import { getQuoteWhatsAppUrl } from '../data/businessInfo';
import usePageMeta, { useJsonLd } from '../hooks/usePageMeta';
import Reveal from '../components/Reveal/Reveal';
import BlogCard from '../components/BlogCard/BlogCard';
import BookButton from '../components/BookButton/BookButton';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import styles from './BlogPostPage.module.css';

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(getText({ he: 'he-IL', en: 'en-US' }), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function BlogBody({ blocks }) {
  return blocks.map((block, index) => {
    const key = `${block.type}-${index}`;

    if (block.type === 'h2') {
      return (
        <h2 key={key} className={styles.h2}>
          {getText(block.text)}
        </h2>
      );
    }

    if (block.type === 'link') {
      return (
        <p key={key} className={styles.inlineLinkWrap}>
          <Link to={block.href} className={styles.inlineLink}>
            {getText(block.label)}
          </Link>
        </p>
      );
    }

    return (
      <p key={key} className={styles.paragraph}>
        {getText(block.text)}
      </p>
    );
  });
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const location = useLocation();
  const post = getBlogBySlug(slug);

  const jsonLd = useMemo(() => {
    if (!post) return null;

    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    const url = `${origin}${base}/blog/${post.slug}`;

    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: getText(post.title),
      description: getText(post.metaDescription),
      datePublished: post.publishedAt,
      author: {
        '@type': 'Organization',
        name: 'Laviva Events',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Laviva Events',
      },
      mainEntityOfPage: url,
      keywords: post.keywords,
      inLanguage: getText({ he: 'he', en: 'en' }),
    };
  }, [post]);

  usePageMeta({
    title: post?.title,
    description: post?.metaDescription ?? post?.excerpt,
    keywords: post?.keywords,
    pathname: location.pathname,
    type: 'article',
  });

  useJsonLd(post?.slug ?? 'empty', jsonLd);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedBlogs(post.slug);
  const categoryLabel = blogCategories[post.category];

  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className="container">
            <Breadcrumbs
              items={[
                { label: { he: 'בית', en: 'Home' }, href: '/' },
                { label: { he: 'בלוג', en: 'Blog' }, href: '/blog' },
                { label: post.title },
              ]}
            />

            <Reveal variant="up">
              <div className={styles.heroMeta}>
                <span className={styles.category}>{getText(categoryLabel)}</span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
              <h1 className={styles.title}>{getText(post.title)}</h1>
              <p className={styles.lead}>{getText(post.excerpt)}</p>
            </Reveal>
          </div>
        </header>

        <div className={`section ${styles.content}`}>
          <div className="container">
            <Reveal variant="up" className={styles.body}>
              <BlogBody blocks={post.body} />
            </Reveal>

            <Reveal variant="up" delay={0.15} className={styles.cta}>
              <p className={styles.ctaTitle}>
                {getText({ he: 'רוצים הצעת מחיר?', en: 'Want a quote?' })}
              </p>
              <p className={styles.ctaText}>
                {getText({
                  he: 'בואו נתכנן את האירוע שלכם — עמדות צילום, קירות צילום ומגנטים בפריסה ארצית.',
                  en: 'Let us plan your event — photo booths, photo walls, and magnets nationwide.',
                })}
              </p>
              <div className={styles.ctaActions}>
                <BookButton href={getQuoteWhatsAppUrl()} size="large">
                  {{ he: 'דברו איתנו בוואטסאפ', en: 'Chat on WhatsApp' }}
                </BookButton>
                <Link to="/catalog" className={styles.catalogLink}>
                  {getText({ he: 'גלו את הקטלוג שלנו', en: 'Explore our catalog' })}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className={`section ${styles.related}`}>
          <div className="container">
            <h2 className={styles.relatedTitle}>
              {getText({ he: 'עוד מאמרים', en: 'More articles' })}
            </h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((related, index) => (
                <Reveal key={related.slug} variant="up" delay={index * 0.08}>
                  <BlogCard post={related} variant="compact" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

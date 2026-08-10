import { blogs, getBlogListingMeta } from '../data/blogs';
import usePageMeta from '../hooks/usePageMeta';
import Reveal from '../components/Reveal/Reveal';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import BlogCard from '../components/BlogCard/BlogCard';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import styles from './BlogPage.module.css';

export default function BlogPage() {
  const listingMeta = getBlogListingMeta();

  usePageMeta({
    title: listingMeta.title,
    description: listingMeta.description,
    keywords: listingMeta.keywords,
    pathname: '/blog',
  });

  const sortedPosts = [...blogs].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  );

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: { he: 'בית', en: 'Home' }, href: '/' },
              { label: { he: 'בלוג', en: 'Blog' } },
            ]}
          />
          <Reveal variant="up">
            <SectionHeading
              align="start"
              label={{ he: 'קידום אורגני', en: 'Organic SEO' }}
              title={{ he: 'הבלוג של Laviva Events', en: 'The Laviva Events Blog' }}
              description={{
                he: 'מדריכים, טיפים ורעיונות לעמדות צילום, קירות צילום ומגנטים — לחתונות, בר/בת מצווה, בריתות וכל אירוע.',
                en: 'Guides, tips, and ideas for photo booths, photo walls, and magnets — for weddings, bar/bat mitzvah, britot, and every event.',
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.posts}`}>
        <div className="container">
          <div className={styles.grid}>
            {sortedPosts.map((post, index) => (
              <Reveal key={post.slug} variant="up" delay={index * 0.08} className={styles.gridItem}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

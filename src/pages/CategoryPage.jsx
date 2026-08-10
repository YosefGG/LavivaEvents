import { Navigate, useParams } from 'react-router-dom';
import { getText } from '../config/language';
import { getCategoryById } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import Reveal from '../components/Reveal/Reveal';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import BookButton from '../components/BookButton/BookButton';
import { getQuoteWhatsAppUrl } from '../data/businessInfo';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import styles from './CategoryPage.module.css';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);

  if (!category) {
    return <Navigate to="/catalog" replace />;
  }

  const categoryProducts = getProductsByCategory(categoryId);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <img
            src={category.heroImage}
            alt={getText(category.name)}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <Breadcrumbs
            items={[
              { label: { he: 'בית', en: 'Home' }, href: '/' },
              { label: { he: 'קטלוג', en: 'Catalog' }, href: '/catalog' },
              { label: category.name },
            ]}
            light
          />
          <Reveal variant="up">
            <SectionHeading
              align="start"
              light
              label={{ he: 'קטלוג', en: 'Catalog' }}
              title={category.name}
              description={category.description}
            />
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.products}`}>
        <div className="container">
          <ProductGrid products={categoryProducts} />

          <Reveal variant="up" delay={0.2} className={styles.cta}>
            <p className={styles.ctaText}>
              {getText({
                he: 'מעוניינים בחבילה משולבת או התאמה אישית? דברו איתנו.',
                en: 'Interested in a combined package or custom setup? Talk to us.',
              })}
            </p>
            <BookButton href={getQuoteWhatsAppUrl()} size="large">
              {{ he: 'קבלו הצעת מחיר', en: 'Get a Quote' }}
            </BookButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

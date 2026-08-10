import { getText } from '../config/language';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { getProductCountByCategory } from '../data/categories';
import Reveal from '../components/Reveal/Reveal';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import BookButton from '../components/BookButton/BookButton';
import { getQuoteWhatsAppUrl } from '../data/businessInfo';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import styles from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: { he: 'בית', en: 'Home' }, href: '/' },
              { label: { he: 'קטלוג', en: 'Catalog' } },
            ]}
          />
          <Reveal variant="up">
            <SectionHeading
              align="start"
              label={{ he: 'הקטלוג שלנו', en: 'Our Catalog' }}
              title={{ he: 'גלריית השירותים', en: 'Service Gallery' }}
              description={{
                he: 'בחרו קטגוריה וגלו את מגוון עמדות הצילום, קירות הצילום והמגנטים שלנו — מושלם לחתונות, בר/בת מצווה, בריתות וכל אירוע.',
                en: 'Choose a category and explore our photo booths, photo walls, and magnets — perfect for weddings, bar/bat mitzvah, britot, and any event.',
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.categories}`}>
        <div className="container">
          <div className={styles.grid}>
            {categories.map((category, index) => (
              <div key={category.id} className={styles.gridItem}>
                <Reveal variant="up" delay={index * 0.1} className={styles.reveal}>
                  <CategoryCard
                    category={category}
                    productCount={getProductCountByCategory(category.id, products)}
                    variant="full"
                    layout="stacked"
                  />
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal variant="up" delay={0.3} className={styles.cta}>
            <p className={styles.ctaText}>
              {getText({
                he: 'לא מצאתם בדיוק מה שחיפשתם? נשמח לבנות חבילה מותאמת אישית.',
                en: 'Did not find exactly what you need? We would love to build a custom package.',
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

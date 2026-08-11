import { categories } from '../../data/categories';
import { products } from '../../data/products';
import { getProductCountByCategory } from '../../data/categories';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import Reveal from '../Reveal/Reveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import CategoryCard from '../CategoryCard/CategoryCard';
import BookButton from '../BookButton/BookButton';
import styles from './CatalogPreviewSection.module.css';

export default function CatalogPreviewSection() {
  const { ref, getItemProps } = useStaggerReveal({ staggerDelay: 0.1, variant: 'up' });

  return (
    <section id="catalog-preview" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal variant="up">
          <SectionHeading
            label={{ he: 'הקטלוג', en: 'Catalog' }}
            title={{ he: 'בחרו את החוויה שלכם', en: 'Choose Your Experience' }}
            description={{
              he: 'עמדות צילום, קירות צילום, מגנטים, הצעות נישואין וגילוי מין — קטגוריות מגוונות לכל סוג אירוע.',
              en: 'Photo booths, photo walls, magnets, proposals, and gender reveals — diverse categories for every celebration.',
            }}
          />
        </Reveal>

        <div ref={ref} className={styles.grid}>
          {categories.map((category, index) => (
            <div key={category.id} {...getItemProps(index)}>
              <CategoryCard
                category={category}
                productCount={getProductCountByCategory(category.id, products)}
                variant="compact"
              />
            </div>
          ))}
        </div>

        <Reveal variant="up" delay={0.25} className={styles.cta}>
          <BookButton to="/catalog" size="large">
            {{ he: 'צפייה בקטלוג שלנו', en: 'View Our Catalog' }}
          </BookButton>
        </Reveal>
      </div>
    </section>
  );
}

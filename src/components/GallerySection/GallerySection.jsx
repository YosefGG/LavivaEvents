import { Link } from 'react-router-dom';
import { getText } from '../../config/language';
import { galleryImages } from '../../data/gallery';
import { getProductById } from '../../data/products';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import Reveal from '../Reveal/Reveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './GallerySection.module.css';

const LAYOUT_CYCLE = ['full', 'half', 'half', 'third', 'third', 'third'];

export default function GallerySection() {
  const { ref, getItemProps } = useStaggerReveal({ staggerDelay: 0.06, variant: 'scale' });

  return (
    <section id="gallery" className="section">
      <div className="container">
        <Reveal variant="up">
          <SectionHeading
            label={{ he: 'גלריה', en: 'Gallery' }}
            title={{ he: 'העבודות שלנו', en: 'Our Work' }}
            description={{
              he: 'רגעים מהשטח — חתונות, בר/בת מצווה, בריתות ואירועים שהפכו לבלתי נשכחים.',
              en: 'Moments from the field — weddings, bar/bat mitzvah, britot, and events that became unforgettable.',
            }}
          />
        </Reveal>

        <div ref={ref} className={styles.grid}>
          {galleryImages.map((image, index) => {
            const product = getProductById(image.productId);
            const itemClassName = `${styles.item} ${styles[image.span]} ${styles[LAYOUT_CYCLE[index % LAYOUT_CYCLE.length]]}`;
            const itemProps = getItemProps(index, itemClassName);

            if (!product) {
              return (
                <div key={image.id} {...itemProps}>
                  <img
                    src={image.src}
                    alt={getText(image.alt)}
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.overlay}>
                    <span className={styles.caption}>{getText(image.alt)}</span>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={image.id}
                to={`/catalog/${product.categoryId}#${product.id}`}
                {...itemProps}
                className={`${itemProps.className} ${styles.link}`}
              >
                <img
                  src={image.src}
                  alt={getText(image.alt)}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <span className={styles.caption}>{getText(image.alt)}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

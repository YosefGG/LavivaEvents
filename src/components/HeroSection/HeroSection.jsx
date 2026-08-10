import StarIcon from '@mui/icons-material/Star';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PublicIcon from '@mui/icons-material/Public';
import { getText } from '../../config/language';
import { businessInfo } from '../../data/businessInfo';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import BookButton from '../BookButton/BookButton';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { ref, getItemProps } = useStaggerReveal({
    staggerDelay: 0.1,
    variant: 'up',
    threshold: 0.15,
  });

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.imageWrapper}>
        <video
          src={businessInfo.heroVideo}
          className={styles.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className="container">
          <div ref={ref} className={styles.inner}>
            <span {...getItemProps(0, styles.eyebrow)}>{getText(businessInfo.tagline)}</span>
            <h1 {...getItemProps(1, styles.title)}>{getText(businessInfo.name)}</h1>
            <p {...getItemProps(2, styles.description)}>
              {getText(businessInfo.shortDescription)}
            </p>

            <div {...getItemProps(3, styles.ctas)}>
              <BookButton to="/catalog" size="large">
                {{ he: 'צפייה בקטלוג שלנו', en: 'View Our Catalog' }}
              </BookButton>
              <BookButton
                variant="secondary"
                size="large"
                href="/#contact"
              >
                {{ he: 'קבלו הצעת מחיר', en: 'Get a Quote' }}
              </BookButton>
            </div>

            <div {...getItemProps(4, styles.meta)}>
              <div className={styles.metaItem}>
                <CelebrationIcon className={styles.metaIcon} />
                <span>
                  {businessInfo.eventsCount}+ {getText({ he: 'אירועים', en: 'Events' })}
                </span>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <PublicIcon className={styles.metaIcon} />
                <span>{getText(businessInfo.serviceArea)}</span>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <StarIcon className={styles.metaIconStar} />
                <span>
                  {businessInfo.rating}/5 ({businessInfo.reviewCount}+)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

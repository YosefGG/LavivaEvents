import StarIcon from '@mui/icons-material/Star';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PublicIcon from '@mui/icons-material/Public';
import { getText } from '../../config/language';
import { businessInfo } from '../../data/businessInfo';
import { REVEAL_DEFAULTS, useMountReveal } from '../../hooks/useScrollReveal';
import BookButton from '../BookButton/BookButton';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { getItemProps } = useMountReveal(REVEAL_DEFAULTS.mountDelay);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.imageWrapper}>
        <video
          src={businessInfo.heroVideo}
          className={`${styles.heroVideo} heroKenBurns`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className="container">
          <div className={styles.inner}>
            <span {...getItemProps(0, 'up', styles.eyebrow)}>{getText(businessInfo.tagline)}</span>
            <h1 {...getItemProps(1, 'up', styles.title)}>{getText(businessInfo.name)}</h1>
            <p {...getItemProps(2, 'up', styles.description)}>
              {getText(businessInfo.shortDescription)}
            </p>

            <div {...getItemProps(3, 'up', styles.ctas)}>
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

            <div {...getItemProps(4, 'up', styles.meta)}>
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

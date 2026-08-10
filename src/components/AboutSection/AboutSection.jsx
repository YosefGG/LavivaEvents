import { getText } from '../../config/language';
import { businessInfo } from '../../data/businessInfo';
import { getRevealClassName, useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import Stats from '../Stats/Stats';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div ref={ref} className={styles.grid}>
          <div className={getRevealClassName('start', isVisible, styles.imageCol)}>
            <div className={styles.imageFrame}>
              <img
                src={businessInfo.aboutImage}
                alt={getText(businessInfo.name)}
                className={styles.image}
              />
              <div className={styles.experienceBadge}>
                <span className={styles.experienceValue}>{businessInfo.yearsExperience}+</span>
                <span className={styles.experienceLabel}>
                  {getText({ he: 'שנות ניסיון', en: 'Years Experience' })}
                </span>
              </div>
            </div>
          </div>

          <div
            className={getRevealClassName('end', isVisible, styles.contentCol)}
            style={{ transitionDelay: isVisible ? '0.15s' : '0s' }}
          >
            <SectionHeading
              align="start"
              label={{ he: 'אודות', en: 'About' }}
              title={{
                he: 'חוויות צילום שמשאירות חותם',
                en: 'Photo Experiences That Leave a Mark',
              }}
            />
            <p className={styles.story}>{getText(businessInfo.aboutStory)}</p>
            <p className={styles.highlight}>{getText(businessInfo.aboutHighlight)}</p>
            <ul className={styles.features}>
              {businessInfo.aboutFeatures.map((item, index) => (
                <li
                  key={getText(item)}
                  className={getRevealClassName('up', isVisible)}
                  style={{ transitionDelay: isVisible ? `${0.25 + index * 0.08}s` : '0s' }}
                >
                  {getText(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}

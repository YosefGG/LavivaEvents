import { getText } from '../../config/language';
import { whyChooseUsFeatures } from '../../data/whyChooseUs';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import Reveal from '../Reveal/Reveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const { ref, getItemProps } = useStaggerReveal({ staggerDelay: 0.08, variant: 'up' });

  return (
    <section id="why-us" className="section sectionAlt">
      <div className="container">
        <Reveal variant="up">
          <SectionHeading
            label={{ he: 'למה אנחנו', en: 'Why Us' }}
            title={{ he: 'למה לבחור בנו', en: 'Why Choose Us' }}
            description={{
              he: 'אנחנו מאמינים שעמדת צילום טובה היא חוויה — לא רק שירות.',
              en: 'We believe a great photo booth is an experience — not just a service.',
            }}
          />
        </Reveal>

        <div ref={ref} className={styles.grid}>
          {whyChooseUsFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} {...getItemProps(index, styles.feature)}>
                <Icon className={styles.icon} />
                <h3 className={styles.title}>{getText(feature.title)}</h3>
                <p className={styles.description}>{getText(feature.description)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

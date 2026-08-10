import { getText } from '../../config/language';
import { eventTypes } from '../../data/eventTypes';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import styles from './EventTypesStrip.module.css';

export default function EventTypesStrip() {
  const featuredEvents = eventTypes.filter((event) => event.featured);
  const { ref, getItemProps } = useStaggerReveal({
    staggerDelay: 0.06,
    variant: 'up',
    threshold: 0.2,
  });

  return (
    <section className={styles.section} aria-label={getText({ he: 'סוגי אירועים', en: 'Event Types' })}>
      <div className="container">
        <div ref={ref} className={styles.strip}>
          <span className={styles.label}>
            {getText({ he: 'מתאים ל', en: 'Perfect for' })}
          </span>
          <div className={styles.chips}>
            {featuredEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={event.id} {...getItemProps(index, styles.chip)}>
                  <Icon className={styles.icon} />
                  <span>{getText(event.label)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

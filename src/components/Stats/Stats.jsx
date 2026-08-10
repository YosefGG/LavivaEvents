import { getText } from '../../config/language';
import { stats } from '../../data/stats';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import styles from './Stats.module.css';

export default function Stats() {
  const { ref, getItemProps } = useStaggerReveal({ staggerDelay: 0.1, variant: 'up' });

  return (
    <div ref={ref} className={styles.stats}>
      {stats.map((stat, index) => (
        <div key={stat.label.en} {...getItemProps(index, styles.stat)}>
          <span className={styles.value}>{stat.value}</span>
          <span className={styles.label}>{getText(stat.label)}</span>
        </div>
      ))}
    </div>
  );
}

import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { testimonials } from '../../data/testimonials';
import { useCarousel } from '../../hooks/useCarousel';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import Reveal from '../Reveal/Reveal';
import SectionHeading from '../SectionHeading/SectionHeading';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const [isCarouselMode, setIsCarouselMode] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 1024
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsCarouselMode(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const { ref, getItemProps } = useStaggerReveal({ staggerDelay: 0.05, variant: 'up' });
  const {
    trackRef,
    activeIndex,
    next,
    prev,
    goTo,
    hoverHandlers,
  } = useCarousel({
    itemCount: testimonials.length,
    autoplayInterval: isCarouselMode ? 5000 : 0,
    pauseOnHover: true,
  });

  return (
    <section id="reviews" className="section">
      <div className="container">
        <Reveal variant="up" className={styles.headerRow}>
          <SectionHeading
            align="start"
            label={{ he: 'ביקורות', en: 'Reviews' }}
            title={{ he: 'מה הלקוחות אומרים', en: 'What Our Clients Say' }}
          />
          <div className={styles.controls}>
            <IconButton
              onClick={prev}
              className={styles.controlBtn}
              aria-label="Previous reviews"
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={next}
              className={styles.controlBtn}
              aria-label="Next reviews"
            >
              <ChevronRightIcon />
            </IconButton>
          </div>
        </Reveal>

        <div ref={ref} className={styles.carouselWrap} {...hoverHandlers}>
          <div ref={trackRef} className={styles.carousel}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                {...getItemProps(index, styles.slide)}
                data-active={activeIndex === index}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={activeIndex === index}
                />
              </div>
            ))}
          </div>

          <div className={styles.dots}>
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                className={`${styles.dot} ${activeIndex === index ? styles.dotActive : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

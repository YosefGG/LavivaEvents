import { useEffect, useRef, useState, useCallback } from 'react';

const VARIANT_CLASS = {
  up: 'revealUp',
  down: 'revealDown',
  start: 'revealStart',
  end: 'revealEnd',
  scale: 'revealScale',
  fade: 'revealFade',
};

export function getRevealClassName(variant = 'up', isVisible, extra = '') {
  const variantClass = VARIANT_CLASS[variant] ?? VARIANT_CLASS.up;
  return ['reveal', variantClass, isVisible ? 'revealVisible' : '', extra]
    .filter(Boolean)
    .join(' ');
}

export function useScrollReveal(options = {}) {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -48px 0px',
    once = false,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

/** Staggered reveal for child items inside a container */
export function useStaggerReveal(options = {}) {
  const { staggerDelay = 0.08, variant = 'up', ...scrollOptions } = options;
  const { ref, isVisible } = useScrollReveal(scrollOptions);

  const getItemProps = useCallback(
    (index, className = '') => ({
      className: getRevealClassName(variant, isVisible, className),
      style: {
        transitionDelay: isVisible ? `${index * staggerDelay}s` : '0s',
      },
    }),
    [isVisible, staggerDelay, variant]
  );

  return { ref, isVisible, getItemProps };
}

/** Play entrance animation on mount (hero, above-the-fold) */
export function useMountReveal(delay = 0) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), delay);
    return () => window.clearTimeout(timer);
  }, [delay]);

  const getItemProps = useCallback(
    (index, variant = 'up', className = '', staggerDelay = 0.1) => ({
      className: getRevealClassName(variant, isVisible, className),
      style: {
        transitionDelay: isVisible ? `${delay + index * staggerDelay}s` : '0s',
      },
    }),
    [isVisible, delay]
  );

  return { isVisible, getItemProps };
}

export function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}

export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

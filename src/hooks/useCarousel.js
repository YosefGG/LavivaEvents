import { useCallback, useEffect, useRef, useState } from 'react';

export function useCarousel({
  itemCount,
  autoplayInterval = 5000,
  pauseOnHover = true,
} = {}) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track || itemCount === 0) return;

      const normalized = ((index % itemCount) + itemCount) % itemCount;
      const slide = track.children[normalized];
      if (!slide) return;

      const trackRect = track.getBoundingClientRect();
      const slideRect = slide.getBoundingClientRect();
      const targetLeft = slideRect.left - trackRect.left + track.scrollLeft;

      track.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      });
      setActiveIndex(normalized);
    },
    [itemCount]
  );

  const next = useCallback(() => {
    scrollToIndex(activeIndex + 1);
  }, [activeIndex, scrollToIndex]);

  const prev = useCallback(() => {
    scrollToIndex(activeIndex - 1);
  }, [activeIndex, scrollToIndex]);

  const goTo = useCallback(
    (index) => {
      scrollToIndex(index);
    },
    [scrollToIndex]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track || itemCount === 0) return undefined;

    const slides = Array.from(track.children);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            const index = slides.indexOf(entry.target);
            if (index >= 0) setActiveIndex(index);
          }
        });
      },
      { root: track, threshold: 0.55 }
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [itemCount]);

  useEffect(() => {
    if (!autoplayInterval || isPaused || itemCount <= 1) return undefined;

    const timer = window.setInterval(() => {
      scrollToIndex(activeIndex + 1);
    }, autoplayInterval);

    return () => window.clearInterval(timer);
  }, [activeIndex, autoplayInterval, isPaused, itemCount, scrollToIndex]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  const hoverHandlers = pauseOnHover
    ? { onMouseEnter: pause, onMouseLeave: resume, onTouchStart: pause, onTouchEnd: resume }
    : {};

  return {
    trackRef,
    activeIndex,
    next,
    prev,
    goTo,
    pause,
    resume,
    hoverHandlers,
    isPaused,
  };
}

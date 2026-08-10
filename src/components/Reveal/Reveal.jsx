import { getRevealClassName, useScrollReveal } from '../../hooks/useScrollReveal';

export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
  threshold,
  once = true,
  style = {},
}) {
  const { ref, isVisible } = useScrollReveal({ threshold, once });

  return (
    <Tag
      ref={ref}
      className={getRevealClassName(variant, isVisible, className)}
      style={{
        ...style,
        transitionDelay: isVisible ? `${delay}s` : '0s',
      }}
    >
      {children}
    </Tag>
  );
}

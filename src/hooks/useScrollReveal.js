import { useEffect, useRef, useState } from 'react';

// Ties a section to `.reveal-section` / `.revealed` in App.css.
// Fires once when the element crosses into the viewport, then disconnects.
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect prefers-reduced-motion: skip the observer, show immediately.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

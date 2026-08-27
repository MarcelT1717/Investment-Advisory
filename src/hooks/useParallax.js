import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

// Subtle scroll-scrubbed vertical drift, used on hero photos so they feel
// alive against the static content beside them. Distance is the total
// travel in px (half above, half below neutral) over the trigger's scroll
// range. Skipped under prefers-reduced-motion.
export function useParallax(distance = 50) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        node,
        { y: -distance / 2 },
        {
          y: distance / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: node.parentElement || node,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [distance]);

  return ref;
}

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

// Fades + lifts the container's direct matches of `selector` into place,
// staggered, once as the container crosses into view. Pairs with the
// site's IntersectionObserver-based .reveal-section for pages that want
// GSAP's easing/stagger instead of the plain CSS transition.
export function useGsapStagger(selector, { start = 'top 85%', stagger = 0.09, y = 28 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const targets = node.querySelectorAll(selector);
    if (!targets.length) return;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: node,
          start,
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [selector, start, stagger, y]);

  return ref;
}

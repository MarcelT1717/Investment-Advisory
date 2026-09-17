import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

// Pops the container's direct matches of `selector` into place — scaled up
// from smaller, lifted from below, and overshooting slightly on the way in
// — staggered, once as the container crosses into view. Pairs with the
// site's IntersectionObserver-based .reveal-section for pages that want a
// more noticeable GSAP-driven entrance instead of the plain CSS fade.
export function useGsapStagger(selector, { start = 'top 88%', stagger = 0.12, y = 50, scaleFrom = 0.82 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const targets = node.querySelectorAll(selector);
    if (!targets.length) return;

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(targets, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y, scale: scaleFrom });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'back.out(1.7)',
        stagger,
        scrollTrigger: {
          trigger: node,
          start,
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [selector, start, stagger, y, scaleFrom]);

  return ref;
}

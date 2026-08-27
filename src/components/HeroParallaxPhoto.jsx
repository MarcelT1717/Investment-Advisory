import React from 'react';
import { useParallax } from '../hooks/useParallax';

// Shared `.library-hero-photo` treatment (Services, ServiceDetail, About,
// Contact, Insights) with a subtle GSAP scroll-scrubbed drift added on top —
// the wrap already overflows its block on purpose (see .library-hero-photo
// in App.css), so the drift has room to breathe without clipping.
const HeroParallaxPhoto = ({ image, distance = 50 }) => {
  const photoRef = useParallax(distance);

  return (
    <div className="library-hero-photo-wrap">
      <div
        ref={photoRef}
        className="library-hero-photo"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
    </div>
  );
};

export default HeroParallaxPhoto;

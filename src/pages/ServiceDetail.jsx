import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapStagger } from '../hooks/useGsapStagger';
import { services } from '../lib/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [heroRef, heroVisible] = useScrollReveal();
  const [storyRef, storyVisible] = useScrollReveal();
  const featuresRef = useGsapStagger('.sd-feature-col');

  const service = services.find((s) => s.id === serviceId);
  if (!service) return <Navigate to="/services" replace />;

  return (
    <div className="min-h-screen">
      {/* Hero — angular navy block, headline/subtitle anchored to the
          left side (the taller half of the diagonal shape), with a
          floating white "what we do" card overlapping its bottom edge. */}
      <section className="sd-hero-angular" ref={heroRef}>
        <div className="sd-hero-angular-edge"></div>
        <div className="sd-hero-angular-bg"></div>
        <div className={`sd-hero-angular-content reveal-section ${heroVisible ? 'revealed' : ''}`}>
          <div className="sd-hero-angular-eyebrow">Our Approach / {service.title}</div>
          <h1 className="sd-hero-angular-title">{service.title}</h1>
          <p className="sd-hero-angular-subtitle">{service.desc}</p>
        </div>
        <div className="sd-hero-angular-card">
          <div className="sd-hero-angular-card-eyebrow">What We Do</div>
          <h3 className="sd-hero-angular-card-title">We build a plan around your goals.</h3>
          <p className="sd-hero-angular-card-desc">
            Every engagement starts with a conversation — no obligation, just clarity on
            whether we're the right fit.
          </p>
        </div>
      </section>

      {/* Story — firm-voice intro paragraph beside the service photo. */}
      <section className="container sd-story-section" ref={storyRef}>
        <div className={`sd-story-grid reveal-section ${storyVisible ? 'revealed' : ''}`}>
          <div className="sd-story-content">
            <h2 className="sd-story-title">{service.storyTitle}</h2>
            <p className="sd-story-text">{service.story}</p>
          </div>
          <div className="sd-story-photo" style={{ backgroundImage: `url(${service.image})` }}></div>
        </div>
      </section>

      {/* Three-column features, reusing the same highlights data. */}
      <section className="container sd-features-section">
        <div className="sd-features-grid" ref={featuresRef}>
          {service.highlights.map((h) => {
            const HIcon = h.icon;
            return (
              <div key={h.title} className="sd-feature-col">
                <div className="sd-feature-col-icon">
                  <HIcon className="w-5 h-5" />
                </div>
                <h3 className="sd-feature-col-title">{h.title}</h3>
                <p className="sd-feature-col-desc">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

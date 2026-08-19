import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, ArrowRight } from 'lucide-react';
import { useConsultation } from '../context/ConsultationContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { services } from '../lib/servicesData';

const advantages = [
  {
    title: 'Extraordinary People',
    desc: 'We\'re a small, research-first team — no layers between the person doing the work and the person making the call. Everyone covers sectors deeply rather than markets broadly, and brings that depth directly into every position we take.',
  },
  {
    title: 'Research & Analytics',
    desc: 'Bottom-up analysis of business models and competitive positioning drives every idea, layered with macro and thematic context to help us stay ahead of inflection points before they\'re consensus.',
  },
  {
    title: 'Disciplined Risk Management',
    desc: 'Conviction is earned through process. We size positions deliberately, manage downside actively, and stay disciplined about exiting a thesis once it\'s played out.',
  },
];

const strategyDetails = [
  {
    label: '[Research]',
    desc: '[Placeholder — describe how the research process works, what sources and signals feed into it, and what a typical idea looks like before it becomes a position.]',
  },
  {
    label: '[Portfolio Construction]',
    desc: '[Placeholder — describe how positions are sized, how many are typically held at once, and how the portfolio is built and rebalanced over time.]',
  },
  {
    label: '[Risk Oversight]',
    desc: '[Placeholder — describe how downside is managed, what triggers a position gets trimmed or exited, and how conviction is reassessed.]',
  },
];

const Services = () => {
  const { openConsultationModal } = useConsultation();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="min-h-screen">
      <section className="library-hero">
        <div className="library-hero-block">
          <div className="container">
            <div className="library-hero-grid">
              <div className="library-hero-content">
                <div className="library-hero-breadcrumb">What We Offer / Services</div>
                <h1 className="library-hero-title">Services</h1>
                <p className="library-hero-subtitle">
                  Financial planning and portfolio management built around your goals
                </p>
              </div>
              <div className="library-hero-photo-wrap">
                <div
                  className="library-hero-photo"
                  style={{ backgroundImage: "url('/images/service-investment-management.jpg')" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategy — placeholder editorial write-up, two equal columns:
          intro copy on the left, a few labeled sub-sections on the right.
          Content here is intentionally bracketed; real copy pending. */}
      <section className="container strategy-preview-section" id="strategy">
        <div className="strategy-preview-grid">
          <div className="strategy-preview-intro">
            <h2 className="section-title strategy-preview-title">Our Strategy</h2>
            <div className="strategy-preview-copy">
              <p>
                [Placeholder — an introductory paragraph on our overall investment strategy and
                philosophy will go here.]
              </p>
              <p>
                [Placeholder — a second paragraph expanding on how we approach sector selection,
                timing, and portfolio construction.]
              </p>
              <p>
                [Placeholder — a third paragraph on how this strategy evolves over time and what
                discipline means to us in practice.]
              </p>
            </div>
          </div>

          <div className="strategy-preview-details">
            {strategyDetails.map((d) => (
              <div key={d.label} className="strategy-preview-detail">
                <h4>{d.label}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Competitive Advantage — same dark-band treatment used across
          the site (already black, not the navy-blue reference), photo +
          title breaking out the top, three divided columns below. */}
      <section className="dark-band advantage-section">
        <div className="container">
          <div className="advantage-header">
            <div
              className="advantage-photo"
              style={{ backgroundImage: "url('/images/service-market-research.jpg')" }}
            ></div>
            <h2 className="section-title advantage-title">
              Our Competitive
              <br />
              <span className="text-accent-primary">Advantage</span>
            </h2>
          </div>

          <div className="advantage-columns">
            {advantages.map((a) => (
              <div key={a.title} className="advantage-col">
                <h3 className="advantage-col-title">{a.title}</h3>
                <p className="advantage-col-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Investment Process — narrow label/intro column on the left,
          wide column on the right, shared by the intro copy and every
          service row below it so everything lines up in one grid. */}
      <section className="container process-section" id="process">
        <div className="process-intro">
          <h2 className="section-title process-intro-title">Our Investment Process</h2>
          <div className="process-intro-copy">
            <p>
              Every position starts with the same question: where is the market underestimating
              growth? We pair bottom-up fundamental research with sector and macro context to find
              emerging industries early and size into them with conviction.
            </p>
            <p>
              From there, the process is what keeps the edge intact — deep specialization across a
              handful of sectors, disciplined rotation through market cycles, and active risk
              management for as long as we hold the position.
            </p>
          </div>
        </div>

        <div className="process-list">
          {services.map((service) => (
            <div key={service.id} className="process-row" id={service.id}>
              <div
                className="process-row-image"
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>
              <div className="process-row-content">
                <h3 className="process-row-title">{service.title}</h3>
                <p className="process-row-desc">{service.desc}</p>
                <Link to={`/services/${service.id}`} className="process-row-link">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`container pb-24 reveal-section ${ctaVisible ? 'revealed' : ''}`} ref={ctaRef}>
        <div className="services-cta-card">
          <div className="services-cta-icon">
            <CalendarCheck className="w-6 h-6" />
          </div>
          <h2 className="services-cta-title">Not Sure Which Service Fits?</h2>
          <p className="services-cta-desc">
            That's exactly what the first conversation is for — no obligation, just a chance to talk it through.
          </p>
          <button className="btn-primary btn-large" onClick={openConsultationModal} data-testid="services-cta-button">
            <CalendarCheck className="w-4 h-4 mr-2" />
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;

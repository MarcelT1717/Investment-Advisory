import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, ArrowRight } from 'lucide-react';
import { useConsultation } from '../context/ConsultationContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { services } from '../lib/servicesData';
import HeroParallaxPhoto from '../components/HeroParallaxPhoto';

const advantages = [
  {
    title: 'Focused Research',
    desc: 'We concentrate our research where we believe deeper understanding matters most. By following a focused group of sectors and themes, we can study businesses, industries, and opportunities in greater depth.',
  },
  {
    title: 'Independent Thinking',
    desc: 'Our investment views are developed through our own research and analysis — not simply market consensus. We evaluate each opportunity on its fundamentals, valuation, competitive position, and long-term potential.',
  },
  {
    title: 'Disciplined Risk Management',
    desc: 'Conviction does not eliminate the need for discipline. Position sizing, diversification, changing fundamentals, and portfolio-level exposures are considered throughout the life of every investment.',
  },
];

const strategyDetails = [
  {
    label: 'Research',
    desc: 'Investment decisions begin with fundamental research. We evaluate companies, industries, valuations, competitive positioning, and broader market conditions before capital is committed.',
  },
  {
    label: 'Portfolio Construction',
    desc: 'Portfolios are built around each client\'s objectives, time horizon, liquidity needs, and tolerance for risk, with investments selected to serve a defined role within the broader strategy.',
  },
  {
    label: 'Risk Oversight',
    desc: 'Risk is considered throughout the investment process — not only after a position is established. Holdings and portfolio exposures are continually reviewed as fundamentals, valuations, and market conditions change.',
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
              <HeroParallaxPhoto image="/images/service-investment-management.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategy — two equal columns: intro copy on the left, a few
          labeled sub-sections on the right. */}
      <section className="container strategy-preview-section" id="strategy">
        <div className="strategy-preview-grid">
          <div className="strategy-preview-intro">
            <h2 className="section-title strategy-preview-title">How We Manage Wealth</h2>
            <div className="strategy-preview-copy">
              <p>
                Every client begins with a different set of goals, circumstances, and priorities.
                We build portfolios around those individual needs rather than placing clients
                into a standardized investment model.
              </p>
              <p>
                Our approach combines long-term portfolio construction with the independent
                research that defines Standard III. We consider asset allocation, individual
                investments, market conditions, and opportunities across the areas we follow
                most closely.
              </p>
              <p>
                As circumstances and markets evolve, portfolios evolve with them. We continuously
                reassess positioning, risk, and the role each investment plays while maintaining
                a disciplined, long-term perspective.
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
              The Standard III
              <br />
              <span className="text-accent-primary">Difference</span>
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

import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { CalendarCheck, ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import { useConsultation } from '../context/ConsultationContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapStagger } from '../hooks/useGsapStagger';
import { services } from '../lib/servicesData';
import HeroParallaxPhoto from '../components/HeroParallaxPhoto';

// Shared across every service — the engagement process itself doesn't
// change service to service, only the plan built during it does.
const engagementSteps = [
  { title: 'Discovery Call', desc: 'A short, no-obligation conversation about your goals, current situation, and whether we\'re a fit.' },
  { title: 'Personalized Plan', desc: 'We build a plan and account structure specific to this service and your situation.' },
  { title: 'Implementation', desc: 'Accounts are opened and funded, and the strategy goes into effect.' },
  { title: 'Ongoing Management', desc: 'Continuous monitoring, rebalancing, and communication as your situation and the markets evolve.' },
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { openConsultationModal } = useConsultation();
  const [heroRef, heroVisible] = useScrollReveal();
  const [otherRef, otherVisible] = useScrollReveal();
  const highlightsRef = useGsapStagger('.about-info-card');
  const processRef = useGsapStagger('.sd-process-step');
  const [openFaq, setOpenFaq] = React.useState(0);

  const service = services.find((s) => s.id === serviceId);
  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="library-hero" ref={heroRef}>
        <div className={`library-hero-block reveal-section ${heroVisible ? 'revealed' : ''}`}>
          <div className="container">
            <div className="library-hero-grid">
              <div className="library-hero-content">
                <div className="library-hero-breadcrumb">Our Approach / {service.title}</div>
                <h1 className="library-hero-title">{service.title}</h1>
                <p className="library-hero-subtitle">{service.desc}</p>
              </div>
              <HeroParallaxPhoto image={service.image} />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="container py-24">
        <div className="sd-section-label">What's Included</div>
        <h2 className="section-title sd-section-intro" style={{ marginBottom: 44, maxWidth: 640 }}>
          A closer look at how this service works
        </h2>
        <div className="sd-highlights-grid" ref={highlightsRef}>
          {service.highlights.map((h) => {
            const HIcon = h.icon;
            return (
              <div key={h.title} className="about-info-card">
                <div className="about-card-icon">
                  <HIcon className="w-5 h-5" />
                </div>
                <h3 className="about-card-title">{h.title}</h3>
                <p className="about-card-text">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA card + FAQ, side by side */}
      <section className="container py-24">
        <div className="sd-columns">
          <div className="sd-cta-sticky">
            <div className="about-info-card about-stay-card" style={{ textAlign: 'center' }}>
              <div className="about-card-icon" style={{ margin: '0 auto 14px' }}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="about-card-title">Is This Right for You?</h3>
              <p className="about-card-text">
                The best way to know is a short conversation — no obligation, just a chance to talk it through.
              </p>
              <button className="btn-primary mt-2" onClick={openConsultationModal} data-testid="service-detail-cta">
                <CalendarCheck className="w-4 h-4 mr-2" />
                Schedule a Consultation
              </button>
              <Link to="/contact" className="about-intro-link mt-4" style={{ display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
                <Phone className="w-4 h-4" />
                Or reach out directly
              </Link>
            </div>
          </div>

          <div className="about-faq-card">
            <div className="about-faq-header">Frequently Asked Questions</div>
            {service.faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={faq.q} className={`about-faq-item ${open ? 'open-item' : ''}`}>
                  <button
                    type="button"
                    className="about-faq-question"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="about-faq-question-text">{faq.q}</span>
                    <span className="about-faq-toggle">{open ? '−' : '+'}</span>
                  </button>
                  <div className={`about-faq-answer ${open ? 'open' : ''}`}>
                    <div className="about-faq-answer-inner">
                      <div className="about-faq-answer-content">{faq.a}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* How We Work Together */}
      <section className="container py-24">
        <div className="sd-section-label">The Process</div>
        <h2 className="section-title sd-section-intro" style={{ marginBottom: 44, maxWidth: 640 }}>
          How We Work Together
        </h2>
        <div className="sd-process" ref={processRef}>
          {engagementSteps.map((step, i) => (
            <div key={step.title} className="sd-process-step">
              <div className="sd-process-num">{String(i + 1).padStart(2, '0')}</div>
              <h4 className="sd-process-title">{step.title}</h4>
              <p className="sd-process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Other Services */}
      <section className="container py-24" ref={otherRef}>
        <div className="flex items-center justify-between mb-8" style={{ flexWrap: 'wrap', gap: 16 }}>
          <h2 className="about-section-label" style={{ marginBottom: 0 }}>Other Services</h2>
          <Link to="/services" className="about-intro-link">
            All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="services-grid">
          {otherServices.map((other, i) => {
            const OtherIcon = other.icon;
            return (
              <Link
                key={other.id}
                to={`/services/${other.id}`}
                className={`service-card reveal-section reveal-stagger ${otherVisible ? 'revealed' : ''}`}
                style={{ '--reveal-i': i }}
              >
                <div className="service-card-icon">
                  <OtherIcon className="w-6 h-6" />
                </div>
                <h3 className="service-card-title">{other.title}</h3>
                <p className="service-card-desc">{other.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="container pb-8">
        <Link to="/services" className="about-intro-link" style={{ display: 'inline-flex' }}>
          <ArrowLeft className="w-4 h-4" />
          All Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

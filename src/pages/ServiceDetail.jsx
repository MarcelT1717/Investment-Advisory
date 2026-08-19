import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { CalendarCheck, ArrowLeft } from 'lucide-react';
import { useConsultation } from '../context/ConsultationContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { services } from '../lib/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { openConsultationModal } = useConsultation();
  const [heroRef, heroVisible] = useScrollReveal();

  const service = services.find((s) => s.id === serviceId);
  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <div className="min-h-screen">
      <section className="library-hero" ref={heroRef}>
        <div className={`library-hero-block reveal-section ${heroVisible ? 'revealed' : ''}`}>
          <div className="container">
            <div className="library-hero-grid">
              <div className="library-hero-content">
                <div className="library-hero-breadcrumb">Our Approach / {service.title}</div>
                <h1 className="library-hero-title">{service.title}</h1>
                <p className="library-hero-subtitle">{service.desc}</p>
              </div>
              <div className="library-hero-photo-wrap">
                <div
                  className="library-hero-photo"
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <Link to="/services" className="about-intro-link mb-10" style={{ display: 'inline-flex' }}>
          <ArrowLeft className="w-4 h-4" />
          All Services
        </Link>

        <div className="about-info-card about-stay-card" style={{ maxWidth: 640, margin: '40px auto 0', textAlign: 'center' }}>
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
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="container py-24">
        <h2 className="about-section-label mb-8">Other Services</h2>
        <div className="services-grid">
          {otherServices.map((other) => {
            const OtherIcon = other.icon;
            return (
              <Link key={other.id} to={`/services/${other.id}`} className="service-card">
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
    </div>
  );
};

export default ServiceDetail;

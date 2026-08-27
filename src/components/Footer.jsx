import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Facebook } from 'lucide-react';
import { services } from '../lib/servicesData';

const Footer = () => {
  const isHome = useLocation().pathname === '/';

  return (
    <footer className={`footer-redesign dark-band ${!isHome ? 'footer-redesign--plain' : ''}`}>
      {isHome && (
        <>
          <div
            className="footer-bg-image"
            style={{ backgroundImage: "url('/images/service-building.jpg')" }}
          ></div>
          <div className="footer-bg-scrim"></div>
        </>
      )}
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand & Contact */}
          <div className="footer-brand-section">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/images/Logo2.png" alt="Standard III" className="brand-logo-img" />
              <span className="h4 brand-wordmark">Standard III Wealth Management</span>
            </div>
            <p className="body-md text-text-muted mb-6 max-w-sm">
              Independent, fiduciary-minded investment advisory guidance — financial planning,
              portfolio management, and ongoing market perspective.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:marceltegos@gmail.com"
                className="footer-icon-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="footer-icon-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="footer-icon-link"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">Who We Are</Link></li>
              <li><Link to="/services" className="footer-link">Our Approach</Link></li>
              <li><Link to="/insights" className="footer-link">Learn</Link></li>
              <li><Link to="/insights/library" className="footer-link">Library</Link></li>
              <li><Link to="/insights/market-intelligence" className="footer-link">Market Intelligence</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-services-section">
            <h4 className="footer-heading">Services</h4>
            <div className="footer-sectors-grid">
              {services.map((service) => (
                <Link key={service.id} to={`/services/${service.id}`} className="footer-link">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="footer-sectors-section">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-links-list">
              <li><Link to="/contact" className="footer-link">Schedule a Consultation</Link></li>
              <li className="footer-link" style={{ cursor: 'default' }}>marceltegos@gmail.com</li>
              <li className="footer-link" style={{ cursor: 'default' }}>[Your phone number]</li>
              <li className="footer-link" style={{ cursor: 'default' }}>[Your office address]</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-sm text-text-muted">
              © 2026 Standard III Wealth Management. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="body-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="body-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                Terms of Service
              </Link>

              <Link
                to="/disclosures"
                className="body-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                Disclosures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

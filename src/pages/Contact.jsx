import React, { useState } from 'react';
import { Mail, Phone, MapPin, CalendarCheck, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ADVISOR_EMAIL = 'marceltegos@gmail.com';

const Contact = () => {
  const [contentRef, contentVisible] = useScrollReveal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle, error, success
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Please enter your name');
      setStatus('error');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    const subject = encodeURIComponent(`Consultation Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '(not provided)'}\n\nMessage:\n${message || '(none provided)'}`
    );
    window.location.href = `mailto:${ADVISOR_EMAIL}?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <div className="min-h-screen">
      <section className="library-hero">
        <div className="library-hero-block">
          <div className="container">
            <div className="library-hero-grid">
              <div className="library-hero-content">
                <div className="library-hero-breadcrumb">Get in Touch / Contact</div>
                <h1 className="library-hero-title">Contact</h1>
                <p className="library-hero-subtitle">
                  Schedule a no-obligation consultation or reach out directly
                </p>
              </div>
              <div className="library-hero-photo-wrap">
                <div
                  className="library-hero-photo"
                  style={{ backgroundImage: "url('/images/service-building.jpg')" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className={`about-two-col reveal-section ${contentVisible ? 'revealed' : ''}`} ref={contentRef}>
          {/* Left — contact details */}
          <div className="about-left-col">
            <div className="about-info-card">
              <div className="about-card-icon">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="about-card-title">Email</h3>
              <p className="about-card-text">
                <a href={`mailto:${ADVISOR_EMAIL}`} className="text-accent-primary hover:underline">
                  {ADVISOR_EMAIL}
                </a>
              </p>
            </div>

            <div className="about-info-card">
              <div className="about-card-icon">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="about-card-title">Phone</h3>
              <p className="about-card-text">[Your phone number]</p>
            </div>

            <div className="about-info-card">
              <div className="about-card-icon">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="about-card-title">Office</h3>
              <p className="about-card-text">[Your office address]</p>
            </div>

            <div className="about-info-card">
              <div className="about-card-icon">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <h3 className="about-card-title">Book Directly</h3>
              {/* TODO: replace with an embedded Calendly/Acuity scheduling widget once a booking link is set up */}
              <p className="about-card-text">[Booking link coming soon]</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="about-right-col">
            <div className="about-faq-card" style={{ padding: 32 }}>
              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Almost There</h3>
                  <p className="text-gray-600">
                    Your email client should be opening with your request pre-filled. If it didn't,
                    email me directly at{' '}
                    <a href={`mailto:${ADVISOR_EMAIL}`} className="text-accent-primary hover:underline">
                      {ADVISOR_EMAIL}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="subscribe-modal-form">
                  <div className="subscribe-input-group">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      className={`subscribe-input ${status === 'error' && !name.trim() ? 'error' : ''}`}
                      data-testid="contact-name-input"
                    />
                  </div>

                  <div className="subscribe-input-group">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      className={`subscribe-input ${status === 'error' && !validateEmail(email) ? 'error' : ''}`}
                      data-testid="contact-email-input"
                    />
                  </div>

                  <div className="subscribe-input-group">
                    <input
                      type="tel"
                      placeholder="Phone (optional)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="subscribe-input"
                      data-testid="contact-phone-input"
                    />
                  </div>

                  <div className="subscribe-input-group">
                    <textarea
                      placeholder="What would you like to talk about?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="subscribe-input"
                      rows={4}
                      data-testid="contact-message-input"
                    />
                    {status === 'error' && (
                      <p className="subscribe-error-text" data-testid="contact-error">
                        {errorMessage}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="subscribe-modal-button" data-testid="contact-submit-button">
                    <CalendarCheck className="w-5 h-5" />
                    Request a Consultation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

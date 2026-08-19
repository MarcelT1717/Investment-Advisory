import React, { useState, useEffect } from 'react';
import { X, CalendarCheck, CheckCircle } from 'lucide-react';

const ADVISOR_EMAIL = 'marceltegos@gmail.com';

const ConsultationModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle, error, success
  const [errorMessage, setErrorMessage] = useState('');

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

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

  const handleClose = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setStatus('idle');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="subscribe-modal-overlay" onClick={handleClose} data-testid="consultation-modal-overlay">
      <div
        className="subscribe-modal-container"
        onClick={(e) => e.stopPropagation()}
        data-testid="consultation-modal"
      >
        <button
          className="subscribe-modal-close"
          onClick={handleClose}
          data-testid="consultation-modal-close"
        >
          <X size={24} />
        </button>

        {status === 'success' ? (
          <div className="subscribe-modal-success" data-testid="consultation-success">
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
          <>
            <div className="subscribe-modal-header">
              <div className="subscribe-modal-icon">
                <CalendarCheck className="w-8 h-8" />
              </div>
              <h2 className="subscribe-modal-title">Schedule a Consultation</h2>
              <p className="subscribe-modal-subtitle">
                Tell me a bit about what you're looking for and I'll follow up to find a time to talk.
              </p>
            </div>

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
                  data-testid="consultation-name-input"
                  autoFocus
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
                  data-testid="consultation-email-input"
                />
              </div>

              <div className="subscribe-input-group">
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="subscribe-input"
                  data-testid="consultation-phone-input"
                />
              </div>

              <div className="subscribe-input-group">
                <textarea
                  placeholder="What would you like to talk about? (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="subscribe-input"
                  rows={3}
                  data-testid="consultation-message-input"
                />
                {status === 'error' && (
                  <p className="subscribe-error-text" data-testid="consultation-error">
                    {errorMessage}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="subscribe-modal-button"
                data-testid="consultation-submit-button"
              >
                <CalendarCheck className="w-5 h-5" />
                Request a Consultation
              </button>
            </form>

            {/* TODO: replace this note with an embedded Calendly/Acuity scheduling widget once a booking link is set up */}
            <p className="subscribe-modal-footer">
              Prefer to schedule directly? [Booking link coming soon] — or email {ADVISOR_EMAIL}.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;

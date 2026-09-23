import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/consultation-standardthreewealth/30min';

const ConsultationModal = ({ isOpen, onClose }) => {
  const widgetRef = useRef(null);

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

  // Load the Calendly inline widget into place each time the modal opens.
  useEffect(() => {
    if (!isOpen) return undefined;

    let cancelled = false;
    const initWidget = () => {
      if (cancelled || !window.Calendly || !widgetRef.current) return;
      widgetRef.current.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: widgetRef.current,
      });
    };

    if (window.Calendly) {
      initWidget();
      return () => {
        cancelled = true;
      };
    }

    const script = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    script?.addEventListener('load', initWidget);
    return () => {
      cancelled = true;
      script?.removeEventListener('load', initWidget);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="subscribe-modal-overlay" onClick={onClose} data-testid="consultation-modal-overlay">
      <div
        className="subscribe-modal-container consultation-modal-calendly"
        onClick={(e) => e.stopPropagation()}
        data-testid="consultation-modal"
      >
        <button
          className="subscribe-modal-close"
          onClick={onClose}
          data-testid="consultation-modal-close"
        >
          <X size={24} />
        </button>

        <div className="subscribe-modal-header">
          <h2 className="subscribe-modal-title">Schedule a Consultation</h2>
          <p className="subscribe-modal-subtitle">
            Pick a time that works for you — you'll get an email confirming your reservation.
          </p>
        </div>

        <div ref={widgetRef} className="calendly-embed-wrap" data-testid="calendly-widget" />
      </div>
    </div>
  );
};

export default ConsultationModal;

import React from 'react';
import { AlertTriangle } from 'lucide-react';

const LegalPageLayout = ({ title, children }) => (
  <div className="min-h-screen">
    <section className="library-hero">
      <div className="container">
        <div className="library-hero-content">
          <h1 className="library-hero-title">{title}</h1>
        </div>
      </div>
    </section>

    <section className="container py-16" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="legal-draft-banner">
        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
        <span>
          <strong>DRAFT — placeholder text.</strong> This page must be reviewed and finalized by a
          securities/compliance attorney before this site goes live, per applicable investment adviser
          regulations. Do not treat the text below as final.
        </span>
      </div>
      <div className="body-md text-text-secondary" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {children}
      </div>
    </section>
  </div>
);

export default LegalPageLayout;

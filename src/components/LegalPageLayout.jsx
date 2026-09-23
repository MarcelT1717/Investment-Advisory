import React from 'react';

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
      <div className="body-md text-text-secondary" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {children}
      </div>
    </section>
  </div>
);

export default LegalPageLayout;

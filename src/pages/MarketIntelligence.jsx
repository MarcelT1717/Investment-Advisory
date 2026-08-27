import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AcademyExplorer from '../components/AcademyExplorer';

const MarketIntelligence = () => (
  <div className="min-h-screen">
    <section className="library-hero library-hero--compact">
      <div className="library-hero-block">
        <div className="container">
          <div className="library-hero-content" style={{ maxWidth: 'none' }}>
            <div className="library-hero-breadcrumb">Learn / Market Intelligence</div>
            <h1 className="library-hero-title">Market Intelligence</h1>
            <p className="library-hero-subtitle">
              Browse the library on the left, and select a topic to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="container academy-layout-section">
      <AcademyExplorer />
    </section>

    <div className="container pb-8">
      <Link to="/insights" className="about-intro-link" style={{ display: 'inline-flex' }}>
        <ArrowLeft className="w-4 h-4" />
        Back to Learn
      </Link>
    </div>
  </div>
);

export default MarketIntelligence;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AcademyExplorer from '../components/AcademyExplorer';
import HeroParallaxPhoto from '../components/HeroParallaxPhoto';

const MarketIntelligence = () => (
  <div className="min-h-screen">
    <section className="library-hero">
      <div className="library-hero-block">
        <div className="library-hero-edge"></div>
        <div className="library-hero-bg"></div>
        <div className="container">
          <div className="library-hero-grid">
            <div className="library-hero-content">
              <div className="library-hero-breadcrumb">Learn / Market Intelligence</div>
              <h1 className="library-hero-title">Market Intelligence</h1>
              <p className="library-hero-subtitle">
                A growing reference library on chart patterns and technical indicators — browse
                the topics on the left, and select one to see how it works.
              </p>
            </div>
            <HeroParallaxPhoto image="/images/market-intelligence-hero.jpeg" />
          </div>
        </div>
      </div>
    </section>

    <section className="container academy-layout-section">
      <p className="academy-intro">
        Explore the building blocks of technical analysis, one topic at a time. Pick a subject
        below — chart patterns, technical indicators, and more to come — and browse the
        concepts inside it at your own pace.
      </p>
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

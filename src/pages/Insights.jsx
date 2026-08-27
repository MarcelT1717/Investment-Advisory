import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { insights } from '../lib/insightsData';
import HeroParallaxPhoto from '../components/HeroParallaxPhoto';
import BlogCarousel from '../components/BlogCarousel';
import PatternIllustration from '../components/PatternIllustration';

const Insights = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="library-hero">
        <div className="library-hero-block">
          <div className="container">
            <div className="library-hero-grid">
              <div className="library-hero-content">
                <div className="library-hero-breadcrumb">Resources / Insights</div>
                <h1 className="library-hero-title">Insights</h1>
                <p className="library-hero-subtitle">
                  Commentary on markets, financial planning, and the economy
                </p>
              </div>
              <HeroParallaxPhoto image="/images/service-market-research.jpg" />
            </div>
          </div>
        </div>
      </section>

      <BlogCarousel insights={insights} />

      <div className="container" style={{ textAlign: 'center', marginTop: -32, marginBottom: 24 }}>
        <Link to="/insights/library" className="btn-secondary">
          View Full Library
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      <div className="section-divider"></div>

      {/* Market Lab — three core skills for reading charts and technical
          analysis, each teasing into Market Intelligence. Rows alternate
          white/gray bands and mirror the photo side each time. */}
      <section className="firm-section">
        <div className="container">
          <div className="firm-grid">
            <div className="firm-copy">
              <div className="about-intro-eyebrow">
                <Sparkles className="w-4 h-4" />
                Technical Indicators
              </div>
              <h2 className="about-intro-title">
                Understand What the Data Is Telling You
              </h2>
              <p className="about-intro-desc">
                Learn how indicators such as RSI, MACD, moving averages, Bollinger Bands, and
                volume can be used to evaluate momentum, trends, volatility, and changing market
                conditions.
              </p>
              <Link to="/insights/market-intelligence" className="about-intro-link">
                Explore Technical Indicators
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="about-intro-photo firm-photo market-lab-photo">
              <PatternIllustration patternId="macd" />
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="firm-grid team-grid">
            <div className="about-intro-photo firm-photo market-lab-photo">
              <PatternIllustration patternId="engulfing" />
            </div>

            <div className="firm-copy">
              <div className="about-intro-eyebrow">
                <Sparkles className="w-4 h-4" />
                Candlestick Patterns
              </div>
              <h2 className="about-intro-title">
                Learn to Read Price Action
              </h2>
              <p className="about-intro-desc">
                Understand common candlestick formations and what they can reveal about buying
                pressure, selling pressure, momentum, and potential shifts in market sentiment.
              </p>
              <Link to="/insights/market-intelligence" className="about-intro-link">
                Explore Candlestick Patterns
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="firm-section">
        <div className="container">
          <div className="firm-grid">
            <div className="firm-copy">
              <div className="about-intro-eyebrow">
                <Sparkles className="w-4 h-4" />
                ICT Concepts
              </div>
              <h2 className="about-intro-title">
                Understand the Structure Behind Price Moves
              </h2>
              <p className="about-intro-desc">
                Explore concepts such as fair value gaps, order blocks, liquidity, and market
                structure shifts to better understand how price moves between key levels and
                where imbalances may get filled.
              </p>
              <Link to="/insights/market-intelligence" className="about-intro-link">
                Explore ICT Concepts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="about-intro-photo firm-photo">
              <span>[Placeholder — photo]</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { insights } from '../lib/insightsData';
import HeroParallaxPhoto from '../components/HeroParallaxPhoto';
import BlogCarousel from '../components/BlogCarousel';

const Insights = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="library-hero">
        <div className="library-hero-block">
          <div className="library-hero-edge"></div>
          <div className="library-hero-bg"></div>
          <div className="container">
            <div className="library-hero-grid">
              <div className="library-hero-content">
                <div className="library-hero-breadcrumb">Resources / Insights</div>
                <h1 className="library-hero-title">Insights</h1>
                <p className="library-hero-subtitle">
                  Commentary on markets, financial planning, and the economy
                </p>
              </div>
              <HeroParallaxPhoto image="/images/collage-chicago-detail.jpg" />
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
                Learn how indicators such as the ADX, RSI, MACD, moving averages, and volume can
                be used to measure trend strength, momentum, and changing market conditions — like
                the ADX crossover shown here signaling a shift from ranging to trending.
              </p>
              <Link to="/insights/market-intelligence" className="about-intro-link">
                Explore Technical Indicators
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="about-intro-photo firm-photo">
              <img
                src="/images/adx_indicator_example (1).png"
                alt="Price chart with the ADX trend-strength indicator"
                className="firm-photo-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="firm-grid team-grid">
            <div className="about-intro-photo firm-photo">
              <img
                src="/images/bullish_engulfing_candle.png"
                alt="Bullish engulfing candlestick pattern example"
                className="firm-photo-img"
              />
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
                Understand common candlestick formations — like the bullish engulfing pattern
                shown here — and what they can reveal about buying pressure, selling pressure,
                momentum, and potential shifts in market sentiment.
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
                Chart Patterns
              </div>
              <h2 className="about-intro-title">
                Recognize Setups Before They Break
              </h2>
              <p className="about-intro-desc">
                Learn to recognize recurring chart patterns — like the ascending triangle shown
                here — where a flat resistance line and a rising support of higher lows often
                signal a bullish breakout once price clears resistance and holds.
              </p>
              <Link to="/insights/market-intelligence" className="about-intro-link">
                Explore Chart Patterns
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="about-intro-photo firm-photo">
              <img
                src="/images/ascending_triangle.png"
                alt="Ascending triangle chart pattern example"
                className="firm-photo-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;

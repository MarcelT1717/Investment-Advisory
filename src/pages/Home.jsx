import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, BarChart3,
  CalendarCheck,
  Mail, Send, CheckCircle, ArrowUpRight,
} from 'lucide-react';
import { useConsultation } from '../context/ConsultationContext';
import { insights } from '../lib/insightsData';
import { services } from '../lib/servicesData';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Sample holdings for illustration only — not live prices or advice
const portfolio = [
  { name: 'Ondas Holdings', ticker: 'ONDS', sector: 'Defense Tech', price: '9.09', change: '+3.70%', direction: 'up', site: 'ondas.com' },
  { name: 'Firefly Aerospace', ticker: 'FLY', sector: 'Space Technology', price: '26.54', change: '+1.42%', direction: 'up', site: 'fireflyspace.com' },
  { name: 'Unusual Machines', ticker: 'UMAC', sector: 'Defense Tech', price: '27.46', change: '+5.74%', direction: 'up', site: 'unusualmachines.com' },
  { name: 'Rigetti Computing', ticker: 'RGTI', sector: 'Quantum Computing', price: '34.20', change: '+2.15%', direction: 'up', site: 'rigetti.com' },
  { name: 'IonQ', ticker: 'IONQ', sector: 'Quantum Computing', price: '58.40', change: '+3.28%', direction: 'up', site: 'ionq.com' },
  { name: 'Hims & Hers Health', ticker: 'HIMS', sector: 'Digital Health', price: '31.77', change: '-2.10%', direction: 'down', site: 'hims.com' },
  { name: 'UiPath', ticker: 'PATH', sector: 'Robotics & AI', price: '15.05', change: '+0.87%', direction: 'up', site: 'uipath.com' },
  { name: 'Redwire', ticker: 'RDW', sector: 'Space Technology', price: '13.85', change: '+2.88%', direction: 'up', site: 'redwirespace.com' },
  { name: 'Serve Robotics', ticker: 'SERV', sector: 'Robotics & AI', price: '13.24', change: '+5.61%', direction: 'up', site: 'serverobotics.com' },
  { name: 'Intuitive Machines', ticker: 'LUNR', sector: 'Space Technology', price: '11.53', change: '+3.47%', direction: 'up', site: 'intuitivemachines.com' },
  { name: 'Infleqtion', ticker: 'INFQ', sector: 'Quantum Computing', price: '13.00', change: '+1.60%', direction: 'up', site: 'infleqtion.com' },
  { name: 'Archer Aviation', ticker: 'ACHR', sector: 'Advanced Mobility', price: '6.81', change: '+6.20%', direction: 'up', site: 'archer.com' },
];

const Home = () => {
  const { openConsultationModal } = useConsultation();

  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = React.useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };


  // "What We Offer" tabbed showcase — reuses `services`, one active at a time
  const [activeOffer, setActiveOffer] = React.useState(0);

  const heroRef = useRef(null);

  // Parallax: shift hero content upward slightly as user scrolls down
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      const content = hero.querySelector('.hero-content-financial');
      if (content) content.style.transform = `translateY(${y * 0.18}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [offerRef, offerVisible] = useScrollReveal();
  const [firmRef, firmVisible] = useScrollReveal();
  const [teamRef, teamVisible] = useScrollReveal();
  const [newsletterRef, newsletterVisible] = useScrollReveal();
  const [insightsRef, insightsVisible] = useScrollReveal();
  const [portfolioRef, portfolioVisible] = useScrollReveal();
  const [finalCtaRef, finalCtaVisible] = useScrollReveal();

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const featuredInsights = insights.slice(0, 6);
  const masonryAspect = ['4 / 3', '1 / 1', '3 / 4', '1 / 1', '4 / 3', '3 / 4'];

  return (
    <div className="min-h-screen">
      {/* Hero Section — full-bleed Chicago skyline photograph */}
      <section className="hero-section-financial hero-section-photo" ref={heroRef}>
        <div
          className="hero-bg-image"
          style={{ backgroundImage: "url('/images/hero-chicago-skyline.jpg')" }}
        ></div>
        <div className="hero-photo-scrim"></div>
        <div className="hero-overlay"></div>

        <div className="container">
          <div className="hero-content-financial hero-content-split">
            <h1 className="hero-title-financial hero-fade-in" style={{ animationDelay: '0.1s' }}>
              Wealth, Planned
              <span className="hero-title-highlight">Around Your Life.</span>
            </h1>

            <p className="hero-description-financial hero-fade-in" style={{ animationDelay: '0.2s' }}>
              Independent, fiduciary-minded guidance on financial planning, portfolio management,
              and the markets — built around your goals.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer — tabbed services showcase, moved here to sit right
          under the hero instead of the old story-card slider. Dark-band so
          it's flush against the hero with no gap (both dark). */}
      <section className="dark-band offer-section" ref={offerRef}>
        <div className="hero-glow-blob hero-glow-blob-1" style={{ opacity: 0.35 }}></div>
        <div className="container">
          <div className={`offer-eyebrow reveal-section ${offerVisible ? 'revealed' : ''}`}>
            <Sparkles className="w-4 h-4" />
            What We Offer?
          </div>

          <div className={`offer-grid reveal-section ${offerVisible ? 'revealed' : ''}`}>
            <div className="offer-tabs">
              {services.map((service, i) => (
                <button
                  key={service.title}
                  className={`offer-tab reveal-section reveal-stagger ${i === activeOffer ? 'active' : ''} ${offerVisible ? 'revealed' : ''}`}
                  style={{ '--reveal-i': i }}
                  onClick={() => setActiveOffer(i)}
                  onMouseEnter={() => setActiveOffer(i)}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <div className="offer-photo">
              <img
                key={services[activeOffer].image}
                src={services[activeOffer].image}
                alt={services[activeOffer].title}
                className="offer-photo-img"
              />
            </div>

            {(() => {
              const OfferIcon = services[activeOffer].icon;
              return (
                <div className="offer-detail">
                  <div className="offer-detail-icon">
                    <OfferIcon className="w-5 h-5" />
                  </div>
                  <h3 className="offer-detail-title">{services[activeOffer].title}</h3>
                  <p className="offer-detail-desc">{services[activeOffer].desc}</p>
                  <Link to={`/services/${services[activeOffer].id}`} className="about-intro-link">
                    Learn More
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Our Firm — image/text intro. Organic torn-edge transition up top
          instead of a plain gradient (see .torn-divider). */}
      <section className="firm-section" ref={firmRef}>
        <svg className="torn-divider" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="tornEdgeFilter" x="-20%" y="-50%" width="140%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.09" numOctaves="2" seed="12" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="55" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect x="0" y="0" width="1440" height="55" fill="rgb(8,10,14)" filter="url(#tornEdgeFilter)" />
        </svg>
        <div className="container">
          <div className={`firm-grid reveal-section ${firmVisible ? 'revealed' : ''}`}>
            <div className="firm-copy">
              <div className="about-intro-eyebrow">
                <Sparkles className="w-4 h-4" />
                Our Firm
              </div>
              <h2 className="about-intro-title">
                Direct Access to Our Research and Thinking
              </h2>
              <p className="about-intro-desc">
                We share in-depth sector research, small-cap insights, cycle analysis, and our
                evolving market outlook — giving you direct access to our thinking and strategy
                without any obligation. It's the simplest way to stay informed, aligned, and
                ahead of emerging opportunities.
              </p>
            </div>
            <div className="about-intro-photo firm-photo">
              <img src="/images/service-building.jpg" alt="Looking up at glass office towers" className="firm-photo-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategy — adapted from the old "team" section layout */}
      <section className="team-section" ref={teamRef}>
        <div className="container">
          <div className={`firm-grid team-grid reveal-section ${teamVisible ? 'revealed' : ''}`}>
            <div className="about-intro-photo firm-photo">
              <img src="/images/service-stock-ticker.jpg" alt="Live stock market data board" className="firm-photo-img" />
            </div>
            <div className="firm-copy">
              <div className="about-intro-eyebrow">
                <Sparkles className="w-4 h-4" />
                Our Strategy
              </div>
              <h2 className="about-intro-title">
                A Disciplined Approach to Market Cycles
              </h2>
              <p className="about-intro-desc">
                Our approach centers on deep sector analysis, identifying emerging industries and
                capitalizing on market cycles through disciplined rotation and strategic
                positioning. By combining rigorous fundamental research with macro and thematic
                awareness, we aim to position ahead of inflection points and capture asymmetric
                upside while managing risk with conviction and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className={`container insights-section reveal-section ${insightsVisible ? 'revealed' : ''}`} ref={insightsRef}>
        <div className="section-header-with-cta">
          <div>
            <div className="about-intro-eyebrow">
              <Sparkles className="w-4 h-4" />
              Insights
            </div>
            <h2 className="section-title-serif mb-2">Key Insights for Your Financial Plan</h2>
            <p className="body-lg text-text-secondary">
              Commentary on markets, planning, and the economy
            </p>
          </div>
          <Link to="/insights" className="btn-secondary">
            View All Insights
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="insights-masonry">
          {featuredInsights.map((item, i) => (
            <Link
              key={item.id}
              to="/insights"
              className={`insight-masonry-card reveal-section reveal-stagger ${insightsVisible ? 'revealed' : ''}`}
              style={{ '--reveal-i': i }}
            >
              <div
                className="insight-masonry-image-wrap"
                style={{ aspectRatio: masonryAspect[i % masonryAspect.length] }}
              >
                <img src={item.image} alt={item.title} className="insight-masonry-image" />
              </div>
              <span className="insight-masonry-category">{item.category}</span>
              <h3 className="insight-masonry-title">{item.title}</h3>
              <p className="insight-masonry-desc">{item.description}</p>
              <div className="insight-masonry-meta">
                <span>{formatDate(item.date)}</span>
                <span className="insight-masonry-meta-dot">•</span>
                <span>{item.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter signup — merged directly into the blog section as an
            inline bar (not a separate dark hero) so it reads as one
            continuous block with the Insights grid above it. */}
        <div className={`newsletter-inline-bar reveal-section ${newsletterVisible ? 'revealed' : ''}`} ref={newsletterRef}>
          <div className="newsletter-inline-copy">
            <div className="newsletter-inline-badge">
              <Mail className="w-4 h-4" />
              Weekly Market Commentary
            </div>
            <h3 className="newsletter-inline-title">Market commentary, delivered to your inbox.</h3>
            <p className="newsletter-inline-desc">
              Occasional, no-fluff perspective on markets, planning, and the economy —
              written for people who want to stay informed, not overwhelmed.
            </p>
          </div>

          <div className="newsletter-inline-action">
            {newsletterSubscribed ? (
              <p className="newsletter-hero-success">
                <CheckCircle className="w-5 h-5" /> You're subscribed — thanks for joining.
              </p>
            ) : (
              <form className="newsletter-hero-form" onSubmit={handleNewsletterSubmit}>
                <Mail className="w-5 h-5 newsletter-hero-form-icon" />
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="newsletter-hero-input"
                  aria-label="Email address"
                />
                <button type="submit" className="newsletter-hero-btn" aria-label="Subscribe">
                  <span className="hidden sm:inline">Subscribe</span>
                  <Send className="w-4 h-4 sm:hidden" />
                </button>
              </form>
            )}
            <p className="newsletter-inline-fineprint">No spam, ever · Unsubscribe anytime</p>
          </div>
        </div>
      </section>

      {/* Sneak Peek at Our Portfolio — bordered logo-wall grid of holdings */}
      <section className="portfolio-peek-section" ref={portfolioRef}>
        <div className="container">
          <div className={`section-header reveal-section ${portfolioVisible ? 'revealed' : ''}`}>
            <div className="about-intro-eyebrow" style={{ justifyContent: 'center' }}>
              <Sparkles className="w-4 h-4" />
              Holdings
            </div>
            <h2 className="section-title-serif mb-2">Sneak Peek at Our Portfolio</h2>
            <p className="body-lg text-text-secondary max-w-2xl mx-auto">
              A sample of the small-cap names across the sectors we follow most closely
            </p>
          </div>
        </div>

        <div className={`portfolio-grid reveal-section ${portfolioVisible ? 'revealed' : ''}`}>
          {portfolio.map((holding, i) => (
            <a
              key={holding.ticker}
              className="portfolio-cell reveal-stagger"
              style={{ '--reveal-i': i % 4 }}
              href={`https://${holding.site}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolio-flip">
                <div className="portfolio-face portfolio-face--front">
                  <span className="portfolio-name">{holding.name}</span>
                  <span className="portfolio-ticker">{holding.ticker}</span>
                  <div className="portfolio-quote">
                    <span className="portfolio-price">${holding.price}</span>
                    <span className={`portfolio-change portfolio-change--${holding.direction}`}>
                      {holding.change}
                    </span>
                  </div>
                </div>
                <div className="portfolio-face portfolio-face--back">
                  <span className="portfolio-back-sector">{holding.sector}</span>
                  <span className="portfolio-back-site">
                    {holding.site}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="portfolio-back-hint">Visit website</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="container">
          <p className="portfolio-disclaimer">
            Sample holdings shown for illustration only — not live prices, and not investment advice.
          </p>
        </div>
      </section>

      {/* Get Started — final full-bleed CTA, merges straight into the
          footer below (see Footer.jsx) using the same building photo so
          there's no seam between them. Organic torn-edge transition up top
          (same feTurbulence technique as .torn-divider) instead of a
          plain gradient bleed, since the light Insights section sits
          directly above it now. */}
      <section
        className="dark-band local-cta-section final-cta-section"
        ref={finalCtaRef}
        style={{ backgroundImage: "url('/images/service-building.jpg')", backgroundAttachment: 'fixed' }}
      >
        <svg className="torn-divider" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="tornEdgeFilterInsights" x="-20%" y="-50%" width="140%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.09" numOctaves="2" seed="27" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="55" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect x="0" y="0" width="1440" height="55" fill="rgb(255,255,255)" filter="url(#tornEdgeFilterInsights)" />
        </svg>
        <div className="local-cta-scrim"></div>
        <div className={`container local-cta-inner reveal-section ${finalCtaVisible ? 'revealed' : ''}`}>
          <div className="about-intro-eyebrow">
            <Sparkles className="w-4 h-4" />
            Get Started
          </div>
          <h2 className="local-cta-title">Ready to Build Your Plan?</h2>
          <p className="local-cta-desc">
            Schedule a no-obligation consultation to see whether working together makes sense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary btn-large" onClick={openConsultationModal} data-testid="cta-consultation-button">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </button>
            <Link to="/services" className="btn-secondary-outlined btn-large">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

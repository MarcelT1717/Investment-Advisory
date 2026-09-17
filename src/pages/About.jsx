import React from 'react';
import {
  Quote, User, ChevronDown,
  Plane, Atom, Bot, Rocket, BatteryCharging, BrainCircuit, HeartPulse, Coins,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapStagger } from '../hooks/useGsapStagger';
import HeroParallaxPhoto from '../components/HeroParallaxPhoto';

const leadership = [
  {
    name: 'Justin Tambunan',
    title: '[Title / Role]',
    bio: '[A short professional biography — background, focus area, and experience will go here.]',
    photo: '/images/leader-justin-tambunan.png',
  },
  {
    name: 'Charles Frantz',
    title: '[Title / Role]',
    bio: '[A short professional biography — background, focus area, and experience will go here.]',
    photo: '/images/leader-charles-frantz.png',
  },
  {
    name: 'Marcel Tegos',
    title: '[Title / Role]',
    bio: '[A short professional biography — background, focus area, and experience will go here.]',
    photo: '/images/leader-marcel-tegos.png',
  },
];

const sectionNav = [
  { label: 'Overview', href: '#overview' },
  { label: 'Our Values', href: '#values' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Leadership', href: '#leadership' },
];

const values = [
  {
    name: 'Independent Thinking',
    desc: 'We form our own views through research rather than relying solely on market consensus.',
  },
  {
    name: 'Discipline',
    desc: 'We remain patient and selective, investing when the research supports the opportunity.',
  },
  {
    name: 'Depth',
    desc: 'We believe knowing fewer areas exceptionally well is more valuable than following everything superficially.',
  },
  {
    name: 'Transparency',
    desc: 'Clients should understand how their capital is invested and the thinking behind important decisions.',
  },
  {
    name: 'Partnership',
    desc: 'We build long-term relationships around communication, alignment, and an understanding of each client\'s objectives.',
  },
  {
    name: 'Curiosity',
    desc: 'Markets evolve constantly. We continue questioning assumptions, studying new developments, and looking for what others may be overlooking.',
  },
];

const approachBullets = [
  { bold: 'Research-driven investment process', rest: ' combining fundamental analysis with sector, thematic, and macroeconomic research.' },
  { bold: 'Focused on emerging industries', rest: ' where technological change, capital investment, and structural growth are creating new opportunities.' },
  { bold: 'Small-cap emphasis', rest: ' seeking underfollowed companies positioned within long-term growth markets.' },
  { bold: 'Disciplined selection', rest: ' balancing conviction and growth potential with valuation and active risk management.' },
];

const approachSegments = [
  { name: 'Aviation & Drones', icon: Plane, desc: 'Advanced aviation, autonomous aircraft, drones, and next-generation mobility.' },
  { name: 'Quantum Computing', icon: Atom, desc: 'Quantum hardware, enabling technologies, and the emerging computing ecosystem.' },
  { name: 'Robotics & Automation', icon: Bot, desc: 'Industrial automation, autonomous systems, robotics, and intelligent machines.' },
  { name: 'Space & Defense', icon: Rocket, desc: 'Launch, satellites, space infrastructure, defense technology, and national-security applications.' },
  { name: 'Energy, Batteries & Minerals', icon: BatteryCharging, desc: 'Energy infrastructure, battery technology, storage, critical minerals, and the resources powering electrification.' },
  { name: 'AI & Data Centers', icon: BrainCircuit, desc: 'Artificial intelligence, semiconductors, computing infrastructure, data centers, and supporting power demand.' },
  { name: 'Healthcare & Biotech', icon: HeartPulse, desc: 'Innovative healthcare companies, medical technologies, biotechnology, and emerging treatments.' },
  { name: 'Digital Assets & Finance', icon: Coins, desc: 'Financial technology, digital assets, blockchain infrastructure, exchanges, and the evolution of financial markets.' },
];

const audiences = [
  {
    segment: '01 — Research-Driven Investing',
    statement: 'Conviction Built on Fundamentals.',
    desc: 'Our core process is grounded in fundamental research — studying emerging market economies, balance sheets, and growth drivers to build conviction before capital is committed.',
    approach: [
      { title: 'Structural Growth Scoring', desc: 'A proprietary framework that ranks emerging market companies on balance-sheet quality, revenue durability, and long-term structural growth drivers.' },
      { title: 'Cross-Border Liquidity Mapping', desc: 'We assess capital flows and currency dynamics across markets to understand how liquidity conditions may affect valuations and timing.' },
    ],
    whoWeServeLabel: 'What We Analyze',
    whoWeServe: [
      { title: 'Emerging & Frontier Markets', desc: 'Economies and industries earlier in their growth cycle, where fundamentals research can uncover mispriced opportunity.' },
      { title: 'Company Fundamentals', desc: 'Balance sheets, cash flow durability, and competitive positioning behind every name we research.' },
    ],
  },
  {
    segment: '02 — Classic Strategies',
    statement: 'Time-Tested Strategies, Actively Managed.',
    desc: 'Alongside our fundamental research, we apply established institutional strategies — long/short equity, convertible bond arbitrage, and global macro — to manage risk and pursue return across market environments.',
    approach: [
      { title: 'Long/Short Equity', desc: 'Pairing long positions in higher-conviction names against short positions elsewhere to manage net market exposure.' },
      { title: 'Convertible Bond Arbitrage', desc: 'Seeking to capture pricing inefficiencies between a convertible bond and the equity it converts into.' },
    ],
    whoWeServeLabel: 'Strategies We Employ',
    whoWeServe: [
      { title: 'Global Macro', desc: 'Positioning across equities, rates, currencies, and commodities based on macroeconomic and policy themes.' },
      { title: 'Relative Value', desc: 'Identifying and trading pricing dislocations between related securities.' },
    ],
  },
  {
    segment: '03 — Algorithmic Trading',
    statement: 'Systematic Signals, Rigorously Tested.',
    desc: 'We develop proprietary trading algorithms in-house and backtest each one against historical market data before it\'s ever used with client capital.',
    approach: [
      { title: 'Proprietary Algorithm Development', desc: 'Building rules-based models designed to identify and act on repeatable patterns in price and volume.' },
      { title: 'Historical Backtesting & Validation', desc: 'Stress-testing every strategy against years of historical data across varied market conditions before deployment.' },
    ],
    whoWeServeLabel: 'How We Validate',
    whoWeServe: [
      { title: 'Simulated & Paper Trading', desc: 'Forward-testing algorithms under live market conditions without live capital before they go further.' },
      { title: 'Ongoing Monitoring', desc: 'Continuously tracking live algorithm performance and retiring or refining models that underperform.' },
    ],
  },
];

const overviewStats = [
  { value: '2025', label: 'Founded' },
  { value: '$200,000+', label: 'Assets Under Management' },
  { value: '8', label: 'Emerging Industries We Research' },
  { value: '100%', label: 'Independent & Fiduciary-Minded' },
];

const About = () => {
  const [activeValue, setActiveValue] = React.useState(4);
  const [heroRef, heroVisible] = useScrollReveal();
  const [leadershipRef, leadershipVisible] = useScrollReveal();
  const [quoteRef, quoteVisible] = useScrollReveal();
  const overviewStatsRef = useGsapStagger('.about-overview-stat');
  const sectorGridRef = useGsapStagger('.about-sector-card');
  const audiencesRef = useGsapStagger('.about-audience-card, .about-audience-detail');

  const [openBio, setOpenBio] = React.useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero — shared with Services/Insights/Contact: a plain
          black rectangle below the normal header, breadcrumb + headline +
          copy on the left, a photo breaking out below the block on the
          right. */}
      <section className="library-hero" ref={heroRef}>
        <div className={`library-hero-block reveal-section ${heroVisible ? 'revealed' : ''}`}>
          <div className="library-hero-edge"></div>
          <div className="library-hero-bg"></div>
          <div className="container">
            <div className="library-hero-grid">
              <div className="library-hero-content">
                <div className="library-hero-breadcrumb">Who We Are / About Us</div>
                <h1 className="library-hero-title">About Us</h1>
                <p className="library-hero-subtitle">
                  Our approach combines personalized wealth management with independent
                  investment research.
                </p>
              </div>
              <HeroParallaxPhoto image="/images/collage-chicago-sunset.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section jump-nav — lives below the hero (not inside the dark block)
          so the hero itself matches the height of Services/Insights/Contact. */}
      <div className="container about-section-nav-wrap">
        <nav className="about-section-nav" aria-label="About page sections">
          {sectionNav.map((item) => (
            <a key={item.href} href={item.href} className="about-section-nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Overview — copy on the left, stat grid on the right */}
      <section className="container about-overview-section" id="overview">
        <h2 className="section-title about-overview-title">Our Standard.</h2>
        <div className="about-overview-grid">
          <div className="about-overview-copy">
            <p>
              Our investment philosophy is rooted in independent research and the belief that
              compelling opportunities are often found beyond the market's largest and most
              widely followed companies. We focus on understanding businesses, industries, and
              the forces shaping their long-term growth.
            </p>
            <p>
              Small-cap companies and emerging markets are central to that approach. These areas
              can provide exposure to businesses and economies earlier in their development,
              where less analyst coverage and greater market inefficiencies may create attractive
              opportunities. We combine this focus with disciplined fundamental research, sector
              analysis, and thoughtful portfolio construction.
            </p>
            <p>
              Rather than following short-term market narratives, we seek to understand where
              capital, innovation, and economic growth may be heading next.
            </p>
          </div>

          <div className="about-overview-stats" ref={overviewStatsRef}>
            {overviewStats.map((stat) => (
              <div key={stat.label} className="about-overview-stat">
                <span className="about-overview-stat-value">{stat.value}</span>
                <span className="about-overview-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values — intro copy + interactive value list, photo on the right */}
      <section className="about-values-section" id="values">
        <div className="container about-values-grid">
          <div className="about-values-copy">
            <p className="about-values-lead">
              We believe better investment decisions begin with deeper understanding — not
              broader coverage.
            </p>
            <p className="about-values-sub">
              Standard III is built around focused research, independent thinking, and long-term
              relationships. Rather than trying to follow every corner of the market, we
              concentrate our attention where we believe our research can matter most —
              particularly across small-cap companies, emerging markets, and select industries
              undergoing meaningful change.
            </p>

            <h2 className="section-title about-values-title">Our Values</h2>
            <div className="about-values-panel">
              <ul className="about-values-list">
                {values.map((v, i) => (
                  <li key={v.name}>
                    <button
                      type="button"
                      className={`about-value-btn ${activeValue === i ? 'is-active' : ''}`}
                      onClick={() => setActiveValue(i)}
                      onMouseEnter={() => setActiveValue(i)}
                    >
                      {v.name}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="about-value-desc">{values[activeValue].desc}</p>
            </div>
          </div>

          <div
            className="about-values-photo"
            style={{ backgroundImage: "url('/images/service-market-research.jpg')" }}
          ></div>
        </div>
      </section>

      {/* Who We Serve — black profile card paired with a matching
          "Our Approach" / "Who We Serve" detail column, one row per
          audience segment. */}
      <section className="container about-audiences-section" id="who-we-serve">
        <div className="about-audiences-grid" ref={audiencesRef}>
          {audiences.map((a) => (
            <React.Fragment key={a.segment}>
              <div className="about-audience-card">
                <span className="about-audience-label">
                  <span className="about-audience-label-number">{a.segment.split(' — ')[0]}</span>
                  {' — '}
                  {a.segment.split(' — ')[1]}
                </span>
                <h3 className="about-audience-statement">{a.statement}</h3>
                <p className="about-audience-desc">{a.desc}</p>
              </div>

              <div className="about-audience-detail">
                <h2 className="about-audience-detail-title">Our Approach</h2>
                {a.approach.map((item) => (
                  <div className="about-audience-detail-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}

                <hr className="about-audience-detail-divider" />

                <h2 className="about-audience-detail-title">{a.whoWeServeLabel}</h2>
                {a.whoWeServe.map((item) => (
                  <div className="about-audience-detail-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Our Approach — bullets + a grid of the sectors we focus on */}
      <section className="container about-approach-section" id="approach">
        <h2 className="section-title about-approach-title">Our Approach</h2>
        <ul className="about-approach-bullets">
          {approachBullets.map((b) => (
            <li key={b.bold}>
              <strong>{b.bold}</strong>
              {b.rest}
            </li>
          ))}
        </ul>

        <div className="about-sector-grid" ref={sectorGridRef}>
          {approachSegments.map((seg) => {
            const SegIcon = seg.icon;
            return (
              <div key={seg.name} className="about-sector-card">
                <div className="about-sector-card-icon">
                  <SegIcon className="w-5 h-5" />
                </div>
                <h3 className="about-sector-card-name">{seg.name}</h3>
                <p className="about-sector-card-desc">{seg.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership — equal-box headshot placeholders with expandable bios */}
      <section className="container about-leadership-section" id="leadership" ref={leadershipRef}>
        <h2 className="section-title about-leadership-title">Leadership</h2>
        <div className={`about-leadership-grid reveal-section ${leadershipVisible ? 'revealed' : ''}`}>
          {leadership.map((member, i) => {
            const open = openBio === i;
            return (
              <div key={i} className="about-leader-card reveal-stagger" style={{ '--reveal-i': i }}>
                <div className="about-leader-photo">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="about-leader-photo-img" />
                  ) : (
                    <User className="w-8 h-8" />
                  )}
                </div>
                <h3 className="about-leader-name">{member.name}</h3>
                <p className="about-leader-title">{member.title}</p>
                <button
                  type="button"
                  className="about-leader-toggle"
                  onClick={() => setOpenBio(open ? null : i)}
                  aria-expanded={open}
                >
                  {open ? 'Read Close' : 'Read Bio'}
                  <ChevronDown className={`w-3.5 h-3.5 about-leader-chevron ${open ? 'is-open' : ''}`} />
                </button>
                <p className={`about-leader-bio ${open ? 'is-open' : ''}`}>{member.bio}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Client testimonial */}
      <section className="container pt-24 pb-40" ref={quoteRef}>
        <div className={`about-quote-block reveal-section ${quoteVisible ? 'revealed' : ''}`}>
          <Quote className="about-quote-icon" />
          <p className="about-quote-text">
            "What stood out wasn't just the returns — it was how much thought went into every
            recommendation. Standard III explained their reasoning clearly at every step, and we
            always understood exactly what we owned and why."
          </p>
          <div className="about-quote-author">
            David Lindqvist
            <span>Private Client</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

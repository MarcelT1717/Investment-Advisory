import React from 'react';
import { Quote, User, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
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
  { name: 'Aviation & Drones', desc: 'Advanced aviation, autonomous aircraft, drones, and next-generation mobility.' },
  { name: 'Quantum Computing', desc: 'Quantum hardware, enabling technologies, and the emerging computing ecosystem.' },
  { name: 'Robotics & Automation', desc: 'Industrial automation, autonomous systems, robotics, and intelligent machines.' },
  { name: 'Space & Defense', desc: 'Launch, satellites, space infrastructure, defense technology, and national-security applications.' },
  { name: 'Energy, Batteries & Minerals', desc: 'Energy infrastructure, battery technology, storage, critical minerals, and the resources powering electrification.' },
  { name: 'AI & Data Centers', desc: 'Artificial intelligence, semiconductors, computing infrastructure, data centers, and supporting power demand.' },
  { name: 'Healthcare & Biotech', desc: 'Innovative healthcare companies, medical technologies, biotechnology, and emerging treatments.' },
  { name: 'Digital Assets & Finance', desc: 'Financial technology, digital assets, blockchain infrastructure, exchanges, and the evolution of financial markets.' },
];

const audiences = [
  {
    segment: '01 — Investment Management',
    statement: 'Portfolios Built With Purpose.',
    desc: 'We build and manage portfolios around each client\'s objectives, time horizon, and risk profile — combining personalized wealth management with our independent investment research.',
    approach: [
      { title: 'Personalized Portfolio Construction', desc: 'Asset allocation and investment selection are tailored to the individual rather than built around a one-size-fits-all model.' },
      { title: 'Active Research & Oversight', desc: 'We continually evaluate holdings, market conditions, and new opportunities as the investment landscape evolves.' },
    ],
    whoWeServeLabel: 'What We Manage',
    whoWeServe: [
      { title: 'Individuals & Families', desc: 'Individual, joint, retirement, trust, and custodial investment accounts.' },
      { title: 'Businesses & Entities', desc: 'Investment management for businesses, partnerships, trusts, and other entities.' },
    ],
  },
  {
    segment: '02 — Our Investment Focus',
    statement: 'Looking Where the Market Looks Less.',
    desc: 'We dedicate much of our research to areas where less coverage, earlier-stage growth, and structural change may create compelling long-term investment opportunities.',
    approach: [
      { title: 'Small-Cap Companies', desc: 'We research businesses earlier in their growth cycle, where greater market inefficiencies may create opportunities for differentiated investment ideas.' },
      { title: 'Emerging Markets', desc: 'We study developing economies, industries, and companies positioned to benefit from long-term shifts in global growth.' },
    ],
    whoWeServeLabel: 'Where We Look',
    whoWeServe: [
      { title: 'Five Core Sectors', desc: 'Focused research allows us to develop deeper knowledge of the industries and businesses we follow.' },
      { title: 'Emerging Industries & Themes', desc: 'We monitor technological, economic, and demographic changes that may reshape industries over time.' },
    ],
  },
  {
    segment: '03 — Research & Intelligence',
    statement: 'Know What You Own — and Why.',
    desc: 'Research is at the center of our investment process. Clients gain insight into the analysis, market views, and thinking that inform our portfolio decisions.',
    approach: [
      { title: 'Fundamental Research', desc: 'We evaluate businesses, industries, financials, competitive positioning, and long-term growth drivers before forming an investment view.' },
      { title: 'Market & Cycle Analysis', desc: 'We consider valuations, market cycles, sector dynamics, and the broader economic environment alongside company-level research.' },
    ],
    whoWeServeLabel: 'What Clients Receive',
    whoWeServe: [
      { title: 'Investment Research', desc: 'Access to selected company, sector, and thematic research produced by Standard III.' },
      { title: 'Market Updates', desc: 'Regular commentary on markets, portfolio themes, and developments we believe are worth watching.' },
    ],
  },
];

const overviewStats = [
  { value: '2025', label: 'Founded' },
  { value: '5', label: 'Sectors We Follow Closely' },
  { value: '2', label: 'Core Investment Focuses — Small Caps & Emerging Markets' },
  { value: '1', label: 'Standard — Research Before Investment' },
];

// Annular-sector path helper for the approach wheel
const polar = (cx, cy, r, deg) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
};

const donutSegment = (cx, cy, rOuter, rInner, start, end) => {
  const p1 = polar(cx, cy, rOuter, start);
  const p2 = polar(cx, cy, rOuter, end);
  const p3 = polar(cx, cy, rInner, end);
  const p4 = polar(cx, cy, rInner, start);
  const large = end - start > 180 ? 1 : 0;
  return [
    `M ${p1.x} ${p1.y}`,
    `A ${rOuter} ${rOuter} 0 ${large} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${rInner} ${rInner} 0 ${large} 0 ${p4.x} ${p4.y}`,
    'Z',
  ].join(' ');
};

const About = () => {
  const [activeValue, setActiveValue] = React.useState(4);
  const [activeSegment, setActiveSegment] = React.useState(null);
  const [heroRef, heroVisible] = useScrollReveal();
  const [leadershipRef, leadershipVisible] = useScrollReveal();
  const [quoteRef, quoteVisible] = useScrollReveal();

  const [openBio, setOpenBio] = React.useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero — shared with Services/Insights/Contact: a plain
          black rectangle below the normal header, breadcrumb + headline +
          copy on the left, a photo breaking out below the block on the
          right. */}
      <section className="library-hero" ref={heroRef}>
        <div className={`library-hero-block reveal-section ${heroVisible ? 'revealed' : ''}`}>
          <div className="container">
            <div className="library-hero-grid">
              <div className="library-hero-content">
                <div className="library-hero-breadcrumb">Who We Are / About Us</div>
                <h1 className="library-hero-title">About Us</h1>
                <p className="library-hero-subtitle">
                  Our approach combines personalized wealth management with independent
                  investment research. We take the time to understand each client's objectives
                  while looking beyond conventional portfolios to identify opportunities across
                  small-cap companies, emerging markets, and evolving industries.
                </p>
              </div>
              <HeroParallaxPhoto image="/images/collage-chicago-sunset.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section nav — jumps to each part of this page */}
      <div className="container">
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

          <div className="about-overview-stats">
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

      {/* Who We Serve — cream profile card paired with a matching
          "Our Approach" / "Who We Serve" detail column, one row per
          audience segment. Placeholder copy — content pending. */}
      <section className="container about-audiences-section" id="who-we-serve">
        <div className="about-audiences-grid">
          {audiences.map((a) => (
            <React.Fragment key={a.segment}>
              <div className="about-audience-card">
                <span className="about-audience-label">{a.segment}</span>
                <h3 className="about-audience-statement">{a.statement}</h3>
                <p className="about-audience-desc">{a.desc}</p>
                <a href="#" className="about-audience-link">Learn more here</a>
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

      {/* Our Approach — bullets + interactive sector wheel */}
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

        <div className="about-wheel-wrap">
          {/* x-excluded opts out of the dev visual-edits babel plugin, which
              otherwise wraps mapped children in an HTML <span> — invalid
              inside SVG, so the segments render with no geometry. */}
          <svg
            className="about-wheel"
            viewBox="0 0 460 460"
            role="img"
            aria-label="Sectors we invest across"
            x-excluded="true"
          >
            {approachSegments.map((seg, i) => {
              const start = i * 45;
              const end = start + 45;
              const mid = start + 22.5;
              const labelPos = polar(230, 230, 152, mid);
              // Radial text reads upside down between 90° and 270°
              const flip = mid > 90 && mid < 270;
              return (
                <g
                  key={seg.name}
                  className={`about-wheel-seg ${activeSegment === i ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveSegment(i)}
                  onFocus={() => setActiveSegment(i)}
                  onClick={() => setActiveSegment(i)}
                  tabIndex={0}
                  role="button"
                  aria-label={seg.name}
                >
                  <path d={donutSegment(230, 230, 190, 115, start + 0.6, end - 0.6)} />
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    transform={`rotate(${flip ? mid + 180 : mid} ${labelPos.x} ${labelPos.y})`}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    x-excluded="true"
                  >
                    {seg.name}
                  </text>
                </g>
              );
            })}

            <circle className="about-wheel-ring" cx="230" cy="230" r="205" />

            <foreignObject x="105" y="170" width="250" height="130">
              <div className="about-wheel-center">
                {activeSegment === null ? (
                  <span className="about-wheel-hint">Select a sector for more information</span>
                ) : (
                  <>
                    <span className="about-wheel-center-name">{approachSegments[activeSegment].name}</span>
                    <span className="about-wheel-center-desc">{approachSegments[activeSegment].desc}</span>
                  </>
                )}
              </div>
            </foreignObject>
          </svg>
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

      {/* Testimonial placeholder */}
      <section className="container py-24" ref={quoteRef}>
        <div className={`about-quote-block reveal-section ${quoteVisible ? 'revealed' : ''}`}>
          <Quote className="about-quote-icon" />
          <p className="about-quote-text">"[Client testimonial to be added.]"</p>
          <div className="about-quote-author">
            [Client Name]
            <span>[Client Title / Relationship]</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import { Quote, User, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const leadership = [
  {
    name: '[Team Member Name]',
    title: '[Title / Role]',
    bio: '[A short professional biography — background, focus area, and experience will go here.]',
  },
  {
    name: '[Team Member Name]',
    title: '[Title / Role]',
    bio: '[A short professional biography — background, focus area, and experience will go here.]',
  },
  {
    name: '[Team Member Name]',
    title: '[Title / Role]',
    bio: '[A short professional biography — background, focus area, and experience will go here.]',
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
    name: 'Intellectual Honesty',
    desc: 'We follow the research where it leads, state our assumptions plainly, and change our minds when the evidence changes.',
  },
  {
    name: 'Discipline',
    desc: 'Conviction is earned through process. We size deliberately, manage downside actively, and avoid drifting from our thesis.',
  },
  {
    name: 'Sector Depth',
    desc: 'We would rather know a handful of sectors deeply than track everything shallowly. Depth is where the edge lives.',
  },
  {
    name: 'Transparency',
    desc: 'We share our thinking as it develops — the reasoning behind a position, not just the position itself.',
  },
  {
    name: 'Partnership',
    desc: 'We build long-term relationships through open communication and alignment of incentives, with no obligation to get started.',
  },
  {
    name: 'Curiosity',
    desc: 'Emerging industries reward those who stay early and keep asking questions. We track inflection points before they are consensus.',
  },
];

const approachBullets = [
  { bold: 'Research-driven investment process', rest: ' that pairs fundamental analysis with sector and macro context' },
  { bold: 'Flexible positioning', rest: ' designed to capture opportunities across market cycles and rotations' },
  { bold: 'Deep expertise across five sectors', rest: ' where inefficiency and growth potential are highest' },
  { bold: 'Conviction paired with active risk control', rest: ' throughout the life of every position' },
];

const approachSegments = [
  { name: 'Quantum Computing', group: 'Emerging Compute', desc: 'Revolutionary computing power enabling breakthroughs in cryptography, drug discovery, and complex optimization.' },
  { name: 'Space Technology', group: 'Emerging Compute', desc: 'Commercial space exploration, satellite internet, and lunar infrastructure reshaping global connectivity.' },
  { name: 'Robotics & AI', group: 'Automation', desc: 'Advanced robotics and AI transforming manufacturing, healthcare, and everyday automation at scale.' },
  { name: 'Defense Tech', group: 'Automation', desc: 'Next-generation defense systems, autonomous platforms, and AI-powered surveillance reshaping national security.' },
  { name: 'Clean Energy', group: 'Energy Transition', desc: 'Solar, wind, and battery storage innovations driving the global transition away from fossil fuels.' },
  { name: 'Grid & Storage', group: 'Energy Transition', desc: 'Transmission, storage, and grid-scale infrastructure required to make the energy transition work.' },
];

const audiences = [
  {
    segment: '[Audience Segment One]',
    statement: '[A bold one- or two-line statement about who this group is.]',
    desc: '[A short paragraph describing this audience, what they need, and why our approach fits them. Replace with real copy once finalized.]',
    approach: [
      { title: '[Approach point one]', desc: '[How we work with this audience — process, focus, or philosophy.]' },
      { title: '[Approach point two]', desc: '[A second dimension of how we serve this audience.]' },
    ],
    whoWeServe: [
      { title: '[Who we serve — detail one]', desc: '[A more specific slice of this audience and their situation.]' },
      { title: '[Who we serve — detail two]', desc: '[Another specific slice of this audience and their situation.]' },
    ],
  },
  {
    segment: '[Audience Segment Two]',
    statement: '[A bold one- or two-line statement about who this second group is.]',
    desc: '[A short paragraph describing this audience, what they need, and why our approach fits them. Replace with real copy once finalized.]',
    approach: [
      { title: '[Approach point one]', desc: '[How we work with this audience — process, focus, or philosophy.]' },
      { title: '[Approach point two]', desc: '[A second dimension of how we serve this audience.]' },
    ],
    whoWeServe: [
      { title: '[Who we serve — detail one]', desc: '[A more specific slice of this audience and their situation.]' },
      { title: '[Who we serve — detail two]', desc: '[Another specific slice of this audience and their situation.]' },
    ],
  },
  {
    segment: '[Audience Segment Three]',
    statement: '[A bold one- or two-line statement about who this third group is.]',
    desc: '[A short paragraph describing this audience, what they need, and why our approach fits them. Replace with real copy once finalized.]',
    approach: [
      { title: '[Approach point one]', desc: '[How we work with this audience — process, focus, or philosophy.]' },
      { title: '[Approach point two]', desc: '[A second dimension of how we serve this audience.]' },
    ],
    whoWeServe: [
      { title: '[Who we serve — detail one]', desc: '[A more specific slice of this audience and their situation.]' },
      { title: '[Who we serve — detail two]', desc: '[Another specific slice of this audience and their situation.]' },
    ],
  },
];

const overviewStats = [
  { value: '5', label: 'Sectors we track closely' },
  { value: '[Est. 20XX]', label: '[Year the firm was founded]' },
  { value: '[XX]', label: '[Positions currently held]' },
  { value: '0', label: 'Obligation to get started' },
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
                  A research-driven finance group focused on uncovering high-growth opportunities
                  in small-cap stocks, combining deep sector analysis with disciplined risk management.
                </p>
              </div>
              <div className="library-hero-photo-wrap">
                <div
                  className="library-hero-photo"
                  style={{ backgroundImage: "url('/images/collage-chicago-sunset.jpg')" }}
                ></div>
              </div>
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
        <h2 className="section-title about-overview-title">Research-driven. Sector focused.</h2>
        <div className="about-overview-grid">
          <div className="about-overview-copy">
            <p>
              Our approach centers on deep sector analysis, identifying emerging industries and
              capitalizing on market cycles through disciplined rotation and strategic positioning.
              By combining rigorous fundamental research with macro and thematic awareness, we aim
              to position ahead of inflection points and capture asymmetric upside while managing
              risk with conviction and precision.
            </p>
            <p>
              Established giants like NVIDIA and Meta Platforms are exceptional businesses — but
              much of their early hyper-growth is already behind them. Small caps offer exposure
              to companies earlier in their growth cycle, where inefficiencies create the
              potential for outsized returns. That's why our focus stays on deep research, sector
              understanding, and disciplined selection.
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
        <p className="about-overview-note">[Note: figures to be updated as of the latest quarter.]</p>
      </section>

      {/* Our Values — intro copy + interactive value list, photo on the right */}
      <section className="about-values-section" id="values">
        <div className="container about-values-grid">
          <div className="about-values-copy">
            <p className="about-values-lead">
              We are a research-driven finance group built around a simple idea: depth in a few
              sectors beats breadth across all of them.
            </p>
            <p className="about-values-sub">
              Our work centers on small-cap companies earlier in their growth cycle, where
              inefficiencies create the potential for outsized returns. We combine rigorous
              fundamental research with macro and thematic awareness to position ahead of
              inflection points, while managing downside with conviction and precision.
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

                <h2 className="about-audience-detail-title">Who We Serve</h2>
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
              const start = i * 60;
              const end = start + 60;
              const mid = start + 30;
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

          <span className="about-wheel-label about-wheel-label--tr">Emerging Compute</span>
          <span className="about-wheel-label about-wheel-label--br">Automation</span>
          <span className="about-wheel-label about-wheel-label--bl">Energy Transition</span>
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
                  <User className="w-8 h-8" />
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

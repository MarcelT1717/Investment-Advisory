import React, { useState } from 'react';
import {
  Plane, Cpu, Rocket, Bot, Zap, Atom, Mountain, Heart, Brain, Bitcoin,
  TrendingUp, BarChart2, Newspaper, ArrowRight, CalendarCheck, Radar, Server, Shield,
  DollarSign, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useConsultation } from '../context/ConsultationContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Unique color per theme
const SECTOR_COLORS = {
  Aviation:   '#38bdf8',
  Quantum:    '#a78bfa',
  Space:      '#818cf8',
  Robotics:   '#22d3ee',
  Bettery:    '#4ade80',
  Nuclear:    '#fbbf24',
  Minerals:   '#fb923c',
  Healthcare: '#f43f5e',
  AI:         '#c084fc',
  Drone:      '#2dd4bf',
  Datacenter: '#60a5fa',
  Defense:    '#f87171',
  Finance:    '#34d399',
  Crypto:     '#fde047',
};

const CATEGORIES = [
  { key: 'all',     label: 'All Themes' },
  { key: 'tech',    label: 'Technology',       sectors: ['Quantum', 'AI', 'Datacenter', 'Drone', 'Robotics'] },
  { key: 'energy',  label: 'Energy',           sectors: ['Nuclear', 'Bettery', 'Minerals'] },
  { key: 'defense', label: 'Defense & Space',  sectors: ['Space', 'Aviation', 'Defense'] },
  { key: 'finance', label: 'Finance & Crypto', sectors: ['Finance', 'Crypto'] },
  { key: 'health',  label: 'Healthcare',       sectors: ['Healthcare'] },
];

const allThemes = [
  { name: 'Aviation',   icon: Plane,      description: 'eVTOL and advanced air mobility vehicles' },
  { name: 'Quantum',    icon: Cpu,        description: 'Next-gen quantum processors and computing as a service' },
  { name: 'Space',      icon: Rocket,     description: 'Lunar infrastructure, satellites, and exploration' },
  { name: 'Robotics',   icon: Bot,        description: 'Advanced robotics for service and logistics' },
  { name: 'Bettery',    icon: Zap,        description: 'Next-gen battery tech and energy storage solutions' },
  { name: 'Nuclear',    icon: Atom,       description: 'Small modular reactors and next-gen nuclear power' },
  { name: 'Minerals',   icon: Mountain,   description: 'Rare earth elements and critical minerals for tech' },
  { name: 'Healthcare', icon: Heart,      description: 'Telemedicine, gene editing, and precision medicine' },
  { name: 'AI',         icon: Brain,      description: 'Artificial intelligence platforms and data analytics' },
  { name: 'Drone',      icon: Radar,      description: 'Next-gen drone technology and defense applications' },
  { name: 'Datacenter', icon: Server,     description: 'Data centers and computing infrastructure' },
  { name: 'Defense',    icon: Shield,     description: 'Military technology and defense infrastructure' },
  { name: 'Finance',    icon: DollarSign, description: 'Financial services and fintech platforms' },
  { name: 'Crypto',     icon: Bitcoin,    description: 'Bitcoin mining, crypto infrastructure, and blockchain' },
];

const analysisFactors = [
  {
    step: '01',
    icon: TrendingUp,
    title: 'Macro Tailwinds',
    description: 'Understanding the broader economic and policy trends behind a theme is the starting point for any allocation decision.',
    tags: ['Economic trends', 'Policy tailwinds', 'Adoption curves', 'Capital flows'],
  },
  {
    step: '02',
    icon: BarChart2,
    title: 'Valuation & Risk',
    description: 'Every theme carries its own risk profile. I weigh valuation, volatility, and concentration risk before it factors into a client portfolio.',
    tags: ['Valuation multiples', 'Volatility', 'Concentration risk', 'Diversification'],
  },
  {
    step: '03',
    icon: Newspaper,
    title: 'Ongoing Monitoring',
    description: 'Themes evolve. I continue tracking developments and market shifts so allocations stay aligned with your goals over time.',
    tags: ['Earnings trends', 'Regulatory shifts', 'Competitive landscape', 'Portfolio fit'],
  },
];

const Perspectives = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { openConsultationModal } = useConsultation();

  const [gridRef, gridVisible] = useScrollReveal(0.08);
  const [frameworkRef, frameworkVisible] = useScrollReveal(0.08);
  const [ctaRef, ctaVisible] = useScrollReveal();

  const activeCat = CATEGORIES.find(c => c.key === activeCategory);
  const filteredThemes = activeCategory === 'all'
    ? allThemes
    : allThemes.filter(s => activeCat?.sectors?.includes(s.name));

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="sectors-hero-v2">
        <div className="sectors-hero-v2-overlay" />
        <div className="container">
          <div className="sectors-hero-v2-content">
            <div className="sectors-live-badge">
              <span className="pulse-dot-small" />
              Market Perspectives
            </div>
            <h1 className="sectors-hero-v2-title">
              Themes
              <span className="sectors-hero-v2-accent">I'm Following</span>
            </h1>
            <p className="sectors-hero-v2-desc">
              A look at the sectors and market themes that inform how I think about
              client portfolios — not stock picks, but the backdrop behind them.
            </p>
            <div className="sectors-hero-stats">
              <div className="sectors-hero-stat">
                <span className="sectors-hero-stat-num">14</span>
                <span className="sectors-hero-stat-label">Themes</span>
              </div>
              <div className="sectors-hero-stat-sep" />
              <div className="sectors-hero-stat">
                <span className="sectors-hero-stat-num">Ongoing</span>
                <span className="sectors-hero-stat-label">Commentary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter Bar ── */}
      <div className="sector-filter-strip">
        <div className="sector-filter-inner">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={`sector-filter-tab ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
              {cat.key !== 'all' && (
                <span className="sector-filter-count">{cat.sectors?.length}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Themes Grid ── */}
      <section className="container py-16" ref={gridRef}>
        {filteredThemes.length === 0 ? (
          <p className="text-center text-text-muted py-12">No themes in this category.</p>
        ) : (
          <div className="sectors-grid-v2">
            {filteredThemes.map((theme, si) => {
              const Icon = theme.icon;
              const color = SECTOR_COLORS[theme.name] || 'var(--accent-primary)';

              return (
                <div
                  key={theme.name}
                  className={`sector-card-v2 ${gridVisible ? 'revealed' : ''}`}
                  style={{ '--sc': color, animationDelay: `${si * 0.06}s` }}
                >
                  <div className="sc-accent-bar" />

                  <div className="sc-header">
                    <div className="sc-icon">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="sc-header-text">
                      <div className="sc-name-row">
                        <h3 className="sc-name">{theme.name}</h3>
                      </div>
                      <p className="sc-desc">{theme.description}</p>
                    </div>
                  </div>

                  <div className="sc-card-footer">
                    <Link to="/insights" className="sc-view-research">
                      Read my commentary <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="sc-hover-arrow">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Analysis Framework ── */}
      <section className="framework-section" ref={frameworkRef}>
        <div className="container">
          <div className={`reveal-section ${frameworkVisible ? 'revealed' : ''}`}>
            <div className="section-header">
              <h2 className="display-md mb-4">How I Think About Themes</h2>
              <p className="body-lg text-text-secondary max-w-2xl mx-auto">
                Three things I weigh before a theme factors into how I manage client portfolios
              </p>
            </div>

            <div className="fw-timeline">
              {analysisFactors.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="fw-item">
                    <div className="fw-node">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="fw-card">
                      <div className="fw-step-label">STEP {f.step}</div>
                      <h3 className="fw-title">{f.title}</h3>
                      <p className="fw-desc">{f.description}</p>
                      <div className="fw-tags">
                        {f.tags.map(tag => (
                          <span key={tag} className="fw-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`container py-20 reveal-section ${ctaVisible ? 'revealed' : ''}`} ref={ctaRef}>
        <div className="sectors-cta-v2">
          <div className="sectors-cta-v2-glow" />
          <div className="sectors-cta-v2-inner">
            <h2 className="sectors-cta-v2-title">Curious How This Fits Your Portfolio?</h2>
            <p className="sectors-cta-v2-desc">
              Let's talk through how these themes and your goals come together in a plan built for you.
            </p>
            <button className="btn-primary btn-large" onClick={openConsultationModal}>
              <CalendarCheck className="w-5 h-5 mr-2" />
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Perspectives;

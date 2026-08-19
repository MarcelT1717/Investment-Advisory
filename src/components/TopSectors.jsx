import React, { useState } from 'react';
import { Cpu, Rocket, Bot, Shield, Zap } from 'lucide-react';

const themes = [
  {
    name: 'Quantum Computing', icon: Cpu, category: 'tech', rank: 1,
    description: 'Revolutionary computing power enabling breakthroughs in cryptography, drug discovery, and complex optimization.',
  },
  {
    name: 'Space Technology', icon: Rocket, category: 'space', rank: 2,
    description: 'Commercial space exploration, satellite internet, and lunar infrastructure reshaping global connectivity.',
  },
  {
    name: 'Robotics & AI', icon: Bot, category: 'tech', rank: 3,
    description: 'Advanced robotics and AI transforming manufacturing, healthcare, and everyday automation at scale.',
  },
  {
    name: 'Defense Tech', icon: Shield, category: 'space', rank: 4,
    description: 'Next-generation defense systems, autonomous platforms, and AI-powered surveillance reshaping national security.',
  },
  {
    name: 'Clean Energy', icon: Zap, category: 'energy', rank: 5,
    description: 'Solar, wind, and battery storage innovations driving the global transition away from fossil fuels.',
  },
];

const FILTERS = ['All', 'Tech', 'Energy', 'Space'];

const TopSectors = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? themes
    : themes.filter(t => t.category === activeFilter.toLowerCase());

  const featured = filtered.slice(0, 2);
  const compact  = filtered.slice(2);

  return (
    <div>
      {/* Filter bar */}
      <div className="sv3-filter-bar">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`sv3-filter-btn ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Asymmetric grid */}
      <div
        className="sv3-grid"
        style={{ gridTemplateColumns: compact.length > 0 ? '3fr 2fr' : '1fr' }}
      >
        {/* Left — large featured cards */}
        {featured.length > 0 && (
          <div className="sv3-left">
            {featured.map(theme => {
              const Icon = theme.icon;
              return (
                <div key={theme.rank} className="sv3-featured-card">
                  <span className="sv3-rank-bg">{theme.rank}</span>

                  <div className="sv3-featured-header">
                    <div className="sv3-icon-wrap">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="sv3-header-text">
                      <h3 className="sv3-sector-name">{theme.name}</h3>
                      <p className="sv3-sector-desc">{theme.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Right — compact cards */}
        {compact.length > 0 && (
          <div className="sv3-right">
            {compact.map(theme => {
              const Icon = theme.icon;
              return (
                <div key={theme.rank} className="sv3-compact-card">
                  <span className="sv3-compact-rank-bg">{theme.rank}</span>

                  <div className="sv3-compact-header">
                    <div className="sv3-compact-icon">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="sv3-compact-name">{theme.name}</span>
                  </div>

                  <p className="sv3-compact-desc">{theme.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopSectors;

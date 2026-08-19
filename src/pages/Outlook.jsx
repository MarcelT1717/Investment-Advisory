import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Info } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// ── Constants ─────────────────────────────────────────────────────────────────

const TRAIL = 36;

const REGIME_COLORS = {
  Goldilocks:   '#2e7d32',
  Reflation:    '#b8860b',
  Stagflation:  '#c62828',
  Disinflation: '#1565c0',
};
const REGIME_BG = {
  Goldilocks:   'rgba(46,125,50,0.13)',
  Reflation:    'rgba(184,134,11,0.13)',
  Stagflation:  'rgba(198,40,40,0.13)',
  Disinflation: 'rgba(21,101,192,0.13)',
};
const REGIME_BORDER = {
  Goldilocks:   'rgba(46,125,50,0.45)',
  Reflation:    'rgba(184,134,11,0.45)',
  Stagflation:  'rgba(198,40,40,0.45)',
  Disinflation: 'rgba(21,101,192,0.45)',
};
const REGIME_SENTENCE = {
  Goldilocks:   'Growth above trend, inflation in check — historically the sweet spot for equities and risk assets.',
  Reflation:    'Growth and inflation both accelerating — historically favorable for cyclicals, commodities, and real assets.',
  Stagflation:  'Growth slowing while inflation rises — historically the most challenging environment for multi-asset portfolios.',
  Disinflation: 'Growth and inflation both retreating — historically favorable for long-duration bonds and defensive assets.',
};
const REGIME_DESC = {
  Goldilocks:   'Growth ↑ · Inflation ↓',
  Reflation:    'Growth ↑ · Inflation ↑',
  Stagflation:  'Growth ↓ · Inflation ↑',
  Disinflation: 'Growth ↓ · Inflation ↓',
};

function classify(g, i) {
  if (g >= 0 && i < 0) return 'Goldilocks';
  if (g >= 0 && i >= 0) return 'Reflation';
  if (g < 0 && i >= 0) return 'Stagflation';
  return 'Disinflation';
}

function currentStreak(panel) {
  if (!panel.length) return 0;
  const r = panel[panel.length - 1].regime;
  let n = 0;
  for (let i = panel.length - 1; i >= 0; i--) {
    if (panel[i].regime === r) n++; else break;
  }
  return n;
}

// ── Sample snapshot (illustrative data, not a live feed) ──────────────────────

function genStaticPath() {
  const waypoints = [
    [0,  0.82, -0.28],
    [4,  0.75, -0.90],
    [8,  0.65, -1.10],
    [13, 0.72, -0.55],
    [17, 0.51, -0.18],
    [21, 0.25,  0.22],
    [25, 0.08,  0.51],
    [29, -0.12, 0.68],
    [32, -0.30, 0.80],
    [35, -0.42, 0.89],
  ];
  const start = new Date(2023, 4, 1);
  return Array.from({ length: 36 }, (_, mo) => {
    const d = new Date(start);
    d.setMonth(d.getMonth() + mo);
    const ym = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    let w0 = waypoints[0], w1 = waypoints[waypoints.length - 1];
    for (let i = 0; i < waypoints.length - 1; i++) {
      if (mo >= waypoints[i][0] && mo <= waypoints[i + 1][0]) {
        w0 = waypoints[i]; w1 = waypoints[i + 1]; break;
      }
    }
    const t = w0[0] === w1[0] ? 1 : (mo - w0[0]) / (w1[0] - w0[0]);
    const g = w0[1] + (w1[1] - w0[1]) * t;
    const inf = w0[2] + (w1[2] - w0[2]) * t;
    return { date: ym, growth: +g.toFixed(3), inflation: +inf.toFixed(3), regime: classify(g, inf) };
  });
}

const STATIC_DATA = {
  panel: genStaticPath(),
  growthIndicators: [
    { label: 'Nonfarm Payrolls',     z: -0.65 },
    { label: 'Chicago Fed NAI',      z: -0.58 },
    { label: 'Industrial Production',z: -0.52 },
    { label: 'Retail Sales',         z: -0.34 },
    { label: 'Unemployment Rate',    z: -0.31 },
    { label: 'Initial Claims',       z: -0.28 },
    { label: 'Real Personal Income', z: -0.18 },
  ],
  inflIndicators: [
    { label: 'PPI All Commodities',  z: 1.82 },
    { label: 'Headline CPI',         z: 1.35 },
    { label: 'Headline PCE',         z: 1.21 },
    { label: 'Core PCE',             z: 1.14 },
    { label: 'Core CPI',             z: 1.08 },
    { label: 'Sticky CPI',           z: 0.93 },
    { label: 'Avg Hourly Earnings',  z: 0.78 },
    { label: '10y Breakeven',        z: 0.62 },
  ],
};

// ── Sub-components ────────────────────────────────────────────────────────────

function QuadrantChart({ panel, trail = TRAIL }) {
  const W = 560, H = 440;
  const pad = { l: 52, r: 28, t: 28, b: 36 };
  const iw = W - pad.l - pad.r;
  const ih = H - pad.t - pad.b;
  const RANGE = 3;

  const recent = panel.slice(-trail);
  if (!recent.length) return null;

  const toX = g => pad.l + ((g + RANGE) / (RANGE * 2)) * iw;
  const toY = i => pad.t + ((RANGE - i) / (RANGE * 2)) * ih;

  const pathD = recent
    .map((p, idx) => `${idx === 0 ? 'M' : 'L'}${toX(p.growth).toFixed(1)},${toY(p.inflation).toFixed(1)}`)
    .join(' ');

  const gridVals = [-2, -1, 0, 1, 2];
  const [chartRef, chartVisible] = useScrollReveal();

  return (
    <div className={`mrm-quadrant-wrap reveal-section ${chartVisible ? 'revealed' : ''}`} ref={chartRef}>
      <p className="mrm-quadrant-caption">
        Growth × Inflation quadrant — {trail}-month path · larger dot = most recent
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} className="mrm-quadrant-svg" role="img" aria-label="Economic regime quadrant chart">
        {/* Quadrant fills */}
        <rect x={pad.l}        y={pad.t}        width={iw/2} height={ih/2} fill="rgba(198,40,40,0.07)" />
        <rect x={pad.l+iw/2}   y={pad.t}        width={iw/2} height={ih/2} fill="rgba(184,134,11,0.08)" />
        <rect x={pad.l+iw/2}   y={pad.t+ih/2}  width={iw/2} height={ih/2} fill="rgba(46,125,50,0.07)" />
        <rect x={pad.l}        y={pad.t+ih/2}  width={iw/2} height={ih/2} fill="rgba(21,101,192,0.07)" />

        {/* Grid */}
        {gridVals.map(v => (
          <React.Fragment key={v}>
            <line x1={toX(v)} y1={pad.t} x2={toX(v)} y2={pad.t+ih}
              stroke={v===0 ? 'rgba(15,23,42,0.35)' : 'rgba(15,23,42,0.08)'}
              strokeWidth={v===0 ? 1.2 : 0.6} />
            <line x1={pad.l} y1={toY(v)} x2={pad.l+iw} y2={toY(v)}
              stroke={v===0 ? 'rgba(15,23,42,0.35)' : 'rgba(15,23,42,0.08)'}
              strokeWidth={v===0 ? 1.2 : 0.6} />
          </React.Fragment>
        ))}

        {/* Quadrant labels */}
        <text x={pad.l+10} y={pad.t+18} fill={REGIME_COLORS.Stagflation} fontSize={12} opacity={0.8} fontWeight="600">stagflation</text>
        <text x={pad.l+iw-10} y={pad.t+18} fill={REGIME_COLORS.Reflation} fontSize={12} opacity={0.8} textAnchor="end" fontWeight="600">reflation</text>
        <text x={pad.l+iw-10} y={pad.t+ih-10} fill={REGIME_COLORS.Goldilocks} fontSize={12} opacity={0.8} textAnchor="end" fontWeight="600">goldilocks</text>
        <text x={pad.l+10} y={pad.t+ih-10} fill={REGIME_COLORS.Disinflation} fontSize={12} opacity={0.8} fontWeight="600">disinflation</text>

        {/* Path */}
        <path d={pathD} fill="none" stroke="rgba(15,23,42,0.3)" strokeWidth={1.8} strokeDasharray="3,3" />

        {/* Dots */}
        {recent.map((p, idx) => {
          const isLatest = idx === recent.length - 1;
          const opacity = 0.3 + (idx / Math.max(recent.length - 1, 1)) * 0.7;
          return (
            <circle key={idx}
              cx={toX(p.growth)} cy={toY(p.inflation)}
              r={isLatest ? 10 : 4.5}
              fill={REGIME_COLORS[p.regime] || '#888'}
              opacity={isLatest ? 1 : opacity}
              stroke={isLatest ? 'rgb(30,41,59)' : 'none'}
              strokeWidth={isLatest ? 2.5 : 0}
            >
              <title>{p.date} · {p.regime} (growth: {p.growth > 0 ? '+' : ''}{p.growth.toFixed(2)}σ, inflation: {p.inflation > 0 ? '+' : ''}{p.inflation.toFixed(2)}σ)</title>
            </circle>
          );
        })}

        {/* Axis direction labels */}
        <text x={pad.l + iw/2} y={H - 6} fill="rgba(15,23,42,0.4)" fontSize={11} textAnchor="middle">growth →</text>
        <text x={14} y={pad.t + ih/2} fill="rgba(15,23,42,0.4)" fontSize={11} textAnchor="middle"
          transform={`rotate(-90,14,${pad.t + ih/2})`}>inflation ↑</text>
      </svg>
    </div>
  );
}

function IndicatorBars({ indicators, color, label }) {
  const sorted = [...indicators].sort((a, b) => b.z - a.z);
  const maxZ = 3;
  return (
    <div className="mrm-ind-section">
      <div className="mrm-ind-section-label" style={{ color }}>{label}</div>
      <div className="mrm-ind-list">
        {sorted.map(({ label: lbl, z }) => (
          <div key={lbl} className="mrm-ind-row">
            <span className="mrm-ind-label">{lbl.toLowerCase()}</span>
            <div className="mrm-ind-track">
              <div
                className="mrm-ind-fill"
                style={{
                  width: `${Math.min(Math.abs(z) / maxZ * 100, 100)}%`,
                  background: z > 0 ? color : 'rgba(15,23,42,0.10)',
                  float: z < 0 ? 'right' : 'left',
                }}
              />
            </div>
            <span className="mrm-ind-val" style={{ color: z > 0 ? color : 'rgba(15,23,42,0.45)' }}>
              {z > 0 ? '+' : ''}{z.toFixed(2)}σ
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SampleDataNote() {
  return (
    <div className="mrm-api-card">
      <div className="mrm-api-icon"><Info className="w-5 h-5" /></div>
      <div>
        <div className="mrm-api-title">Sample snapshot — not live data</div>
        <p className="mrm-api-desc">
          This page illustrates how I think about the growth/inflation backdrop using a static,
          pre-computed snapshot rather than a continuously updated feed.
        </p>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

const TABS = [
  { key: 'overview',   label: 'Overview' },
  { key: 'growth',     label: 'Growth' },
  { key: 'inflation',  label: 'Inflation' },
];

const Outlook = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [trailMonths, setTrailMonths] = useState(TRAIL);

  const { panel, growthIndicators, inflIndicators } = STATIC_DATA;
  const latest = panel[panel.length - 1];
  const prev   = panel.length > 1 ? panel[panel.length - 2] : null;
  const regime = latest?.regime || 'Stagflation';
  const streak = currentStreak(panel);

  const latestGrowth    = latest?.growth    ?? 0;
  const latestInflation = latest?.inflation ?? 0;
  const latestDate      = latest?.date      ?? '—';
  const gDelta  = prev != null ? latestGrowth    - (prev.growth    ?? 0) : null;
  const iDelta  = prev != null ? latestInflation - (prev.inflation ?? 0) : null;

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="mrm-hero">
        <div className="mrm-hero-glow" style={{ background: REGIME_COLORS[regime] }} />
        <div className="container">
          <div className="mrm-hero-inner">
            <div className="mrm-data-badge">
              <span className="pulse-dot-small" />
              Sample Snapshot
            </div>
            <h1 className="mrm-hero-title">Economic Outlook</h1>
            <p className="mrm-hero-sub">
              A framework for understanding where the economy sits on the growth and inflation
              spectrum, and what that's historically meant for portfolios.
            </p>
          </div>
        </div>
      </section>

      {/* ── Regime banner ── */}
      <div className="container">
        <div
          className="mrm-banner"
          style={{ background: REGIME_BG[regime], borderColor: REGIME_BORDER[regime] }}
        >
          <div className="mrm-banner-inner">
            <div>
              <div className="mrm-regime-eyebrow" style={{ color: REGIME_COLORS[regime] }}>
                Current Regime
              </div>
              <div className="mrm-regime-name" style={{ color: REGIME_COLORS[regime] }}>
                {regime}
              </div>
              <div className="mrm-regime-desc">{REGIME_DESC[regime]}</div>
            </div>
            <div className="mrm-banner-right">
              <p className="mrm-regime-sentence">{REGIME_SENTENCE[regime]}</p>
            </div>
          </div>
        </div>

        {/* ── Metric cards ── */}
        <div className="mrm-metrics-row">
          <div className="mrm-metric-card">
            <div className="mrm-metric-label">Growth Composite</div>
            <div className="mrm-metric-value" style={{ color: latestGrowth >= 0 ? '#3b82f6' : '#94a3b8' }}>
              {latestGrowth >= 0 ? '+' : ''}{latestGrowth.toFixed(2)}σ
            </div>
            {gDelta != null && (
              <div className="mrm-metric-delta" style={{ color: gDelta >= 0 ? '#22c55e' : '#ef4444' }}>
                {gDelta >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {gDelta >= 0 ? '+' : ''}{gDelta.toFixed(2)} MoM
              </div>
            )}
          </div>
          <div className="mrm-metric-card">
            <div className="mrm-metric-label">Inflation Composite</div>
            <div className="mrm-metric-value" style={{ color: latestInflation >= 0 ? '#ef4444' : '#22c55e' }}>
              {latestInflation >= 0 ? '+' : ''}{latestInflation.toFixed(2)}σ
            </div>
            {iDelta != null && (
              <div className="mrm-metric-delta" style={{ color: iDelta >= 0 ? '#ef4444' : '#22c55e' }}>
                {iDelta >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {iDelta >= 0 ? '+' : ''}{iDelta.toFixed(2)} MoM
              </div>
            )}
          </div>
          <div className="mrm-metric-card">
            <div className="mrm-metric-label">Streak in {regime}</div>
            <div className="mrm-metric-value" style={{ color: REGIME_COLORS[regime] }}>
              {streak} mo
            </div>
            <div className="mrm-metric-delta" style={{ color: 'rgba(15,23,42,0.45)' }}>
              estimated
            </div>
          </div>
          <div className="mrm-metric-card">
            <div className="mrm-metric-label">Data as of</div>
            <div className="mrm-metric-value" style={{ fontSize: 20 }}>
              {latestDate}
            </div>
            <div className="mrm-metric-delta" style={{ color: 'rgba(15,23,42,0.45)' }}>
              snapshot
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="mrm-tabs-bar">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`mrm-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Overview tab ── */}
        {activeTab === 'overview' && (
          <div className="mrm-tab-panel">
            <div className="mrm-trail-row">
              <span className="mrm-trail-label">Quadrant trail:</span>
              {[12, 24, 36, 48].map(n => (
                <button
                  key={n}
                  className={`mrm-trail-btn ${trailMonths === n ? 'active' : ''}`}
                  onClick={() => setTrailMonths(n)}
                >{n}mo</button>
              ))}
            </div>
            <QuadrantChart panel={panel} trail={trailMonths} />
            <SampleDataNote />
          </div>
        )}

        {/* ── Growth tab ── */}
        {activeTab === 'growth' && (
          <div className="mrm-tab-panel">
            <p className="mrm-tab-desc">
              How far each growth indicator sits from its long-run average, measured in standard deviations.
              Negative = below trend (bearish). Positive = above trend (bullish).
            </p>
            <IndicatorBars indicators={growthIndicators} color="#3b82f6" label="Growth Indicators" />
            <SampleDataNote />
          </div>
        )}

        {/* ── Inflation tab ── */}
        {activeTab === 'inflation' && (
          <div className="mrm-tab-panel">
            <p className="mrm-tab-desc">
              How far each inflation measure sits from its long-run average.
              Positive = above trend (hawkish). Negative = below trend (dovish).
            </p>
            <IndicatorBars indicators={inflIndicators} color="#ef4444" label="Inflation Indicators" />
            <SampleDataNote />
          </div>
        )}
      </div>

      {/* bottom spacing */}
      <div style={{ height: 80 }} />
    </div>
  );
};

export default Outlook;

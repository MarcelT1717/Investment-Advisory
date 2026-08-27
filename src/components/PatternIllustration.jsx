import React from 'react';
import { patternIllustrations } from '../lib/patternIllustrations';

const CANDLE_WIDTH = 46;
const BAR_WIDTH = 28;
const BAR_GAP = 10;
const BASELINE = 140;

const toneColor = {
  neutral: 'var(--text-muted)',
  negative: 'var(--sentiment-negative)',
  positive: 'var(--sentiment-positive)',
};

const seriesColor = {
  navy: 'var(--brand-navy-ink)',
  gold: 'var(--accent-primary)',
  muted: 'var(--text-muted)',
};

const PatternIllustration = ({ patternId }) => {
  const config = patternIllustrations[patternId];
  if (!config) return null;

  const totalBarsWidth = config.kind === 'bars'
    ? config.bars.length * (BAR_WIDTH + BAR_GAP) - BAR_GAP
    : 0;
  const barsStartX = (320 - totalBarsWidth) / 2;

  return (
    // x-excluded opts every mapped child out of the dev visual-edits babel
    // plugin, which otherwise wraps .map() output in an HTML <span> —
    // invalid inside SVG, so the geometry silently fails to render (see
    // the same workaround on About.jsx's sector wheel).
    <svg viewBox="0 0 320 160" className="pattern-illustration-svg" role="img" aria-hidden="true" x-excluded="true">
      {config.kind === 'line' && config.series.map((s, i) => (
        <polyline
          key={i}
          points={s.points}
          fill="none"
          stroke={seriesColor[s.color] || seriesColor.navy}
          strokeWidth={s.width || (s.dashed ? 1.5 : 3)}
          strokeDasharray={s.dashed ? '5 5' : undefined}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={s.dashed ? 0.55 : 1}
        />
      ))}

      {config.kind === 'candle' && config.candles.map((c, i) => (
        <g key={i} x-excluded="true">
          <line x1={c.x} y1={c.wickTop} x2={c.x} y2={c.wickBottom} stroke={toneColor[c.tone]} strokeWidth="2.5" />
          <rect
            x={c.x - CANDLE_WIDTH / 2}
            y={c.bodyTop}
            width={CANDLE_WIDTH}
            height={Math.max(c.bodyBottom - c.bodyTop, 4)}
            fill={toneColor[c.tone]}
            rx="2"
          />
        </g>
      ))}

      {config.kind === 'bars' && config.bars.map((h, i) => (
        <rect
          key={i}
          x={barsStartX + i * (BAR_WIDTH + BAR_GAP)}
          y={BASELINE - h}
          width={BAR_WIDTH}
          height={h}
          fill={i % 2 === 0 ? 'var(--brand-navy-ink)' : 'var(--accent-primary)'}
          rx="2"
        />
      ))}
    </svg>
  );
};

export default PatternIllustration;

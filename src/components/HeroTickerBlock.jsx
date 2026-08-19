import React from 'react';

// Illustrative prices only — they drift on a timer purely as motion.
const seed = [
  { ticker: 'IONQ', price: 42.18 },
  { ticker: 'RKLB', price: 26.72 },
  { ticker: 'QBTS', price: 18.44 },
  { ticker: 'SERV', price: 13.24 },
];

export const HeroTickerBlock = () => {
  const [rows, setRows] = React.useState(() => seed.map((r) => ({ ...r, dir: 'up' })));

  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => {
      setRows((prev) =>
        prev.map((r) => {
          const delta = (Math.random() - 0.47) * 0.55;
          return { ...r, price: Math.max(1, r.price + delta), dir: delta >= 0 ? 'up' : 'down' };
        })
      );
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-ticker-block">
      {rows.map((r) => (
        <div key={r.ticker} className="hero-ticker-row">
          <span className="hero-ticker-symbol">{r.ticker}</span>
          <span className={`hero-ticker-price hero-ticker-price--${r.dir}`}>
            {r.price.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
};

export const HeroSparkBlock = () => (
  <div className="hero-spark-block">
    <svg viewBox="0 0 120 60" preserveAspectRatio="none" aria-hidden="true">
      <polyline
        className="hero-spark-line"
        points="0,48 15,40 30,44 45,30 60,34 75,20 90,24 105,10 120,14"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

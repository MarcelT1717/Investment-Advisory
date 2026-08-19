import React from 'react';

// Illustrative tickers only — the grid is ambient texture, not real data.
const TICKER_POOL = [
  'IONQ', 'RKLB', 'QBTS', 'SERV', 'LUNR', 'ASTS', 'SYM', 'KTOS', 'AVAV', 'FLNC',
  'ENPH', 'RGTI', 'NVTS', 'ACHR', 'JOBY', 'RDW', 'ASTR', 'VRT', 'SMR', 'OKLO',
  'LEU', 'CCJ', 'BBAI', 'SOUN', 'UPST', 'IREN', 'CIFR', 'MARA', 'WULF', 'APLD',
  'LAZR', 'OUST', 'PATH', 'AEVA', 'INDI', 'RCAT', 'AISP', 'MVIS', 'QS', 'CHPT',
];

const ROWS = 9;
const COLS = 16;
const CELL_COUNT = ROWS * COLS;
const SIGNAL_COUNT = 7;

const randPrice = () => (Math.random() * 180 + 8).toFixed(2);

const buildGrid = () =>
  Array.from({ length: CELL_COUNT }, (_, i) => ({
    id: i,
    ticker: TICKER_POOL[Math.floor(Math.random() * TICKER_POOL.length)],
    price: randPrice(),
    dir: Math.random() > 0.5 ? 'up' : 'down',
  }));

const randomIndices = (count, max) => {
  const set = new Set();
  while (set.size < count) set.add(Math.floor(Math.random() * max));
  return set;
};

// A field of faint ticker/price pairs standing in for market "noise," with a
// handful randomly lit up gold as "signal" — the visual thesis of the page:
// research finds the signal in an overlooked, noisy small-cap market.
const SignalHero = ({ children }) => {
  const [grid] = React.useState(buildGrid);
  const [signalSet, setSignalSet] = React.useState(() => randomIndices(SIGNAL_COUNT, CELL_COUNT));

  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => {
      setSignalSet(randomIndices(SIGNAL_COUNT, CELL_COUNT));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="signal-hero">
      <div className="signal-hero-grid" aria-hidden="true">
        {grid.map((cell) => (
          <div
            key={cell.id}
            className={`signal-hero-cell ${signalSet.has(cell.id) ? `is-signal signal-hero-cell--${cell.dir}` : ''}`}
          >
            <span className="signal-hero-ticker">{cell.ticker}</span>
            <span className="signal-hero-price">{cell.price}</span>
          </div>
        ))}
      </div>
      <div className="signal-hero-vignette" aria-hidden="true"></div>
      <div className="signal-hero-scanline" aria-hidden="true"></div>
      <div className="container signal-hero-content">{children}</div>
    </div>
  );
};

export default SignalHero;

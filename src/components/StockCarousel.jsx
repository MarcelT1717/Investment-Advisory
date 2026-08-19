import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

// Sample figures for illustration only — not live data
const stocks = [
  { symbol: 'S&P Futures', price: '3145.0', change: '+18.7', changePct: '(0.57%)', direction: 'up', spark: [40, 44, 38, 50, 46, 60, 68, 72] },
  { symbol: 'Nasdaq', price: '11758.8', change: '+24.7', changePct: '(0.28%)', direction: 'up', spark: [50, 46, 54, 48, 58, 62, 66, 70] },
  { symbol: 'EUR/USD', price: '1.156956', change: '-0.00045', changePct: '(0.02%)', direction: 'down', spark: [60, 68, 55, 62, 48, 54, 40, 44] },
  { symbol: 'Bitcoin', price: '68,536.05', change: '+1,240.24', changePct: '(1.84%)', direction: 'up', spark: [30, 38, 34, 46, 42, 56, 62, 74] },
  { symbol: 'AUD/USD', price: '0.6563', change: '-0.0075', changePct: '(1.13%)', direction: 'down', spark: [58, 64, 50, 60, 44, 52, 38, 46] },
  { symbol: 'Gold', price: '2412.30', change: '+9.40', changePct: '(0.39%)', direction: 'up', spark: [44, 48, 42, 54, 50, 62, 58, 68] },
  { symbol: 'Dow Jones', price: '39312.5', change: '+112.4', changePct: '(0.29%)', direction: 'up', spark: [36, 42, 38, 48, 44, 56, 60, 66] },
  { symbol: 'WTI Crude', price: '78.62', change: '-0.84', changePct: '(1.06%)', direction: 'down', spark: [62, 58, 66, 54, 60, 48, 52, 40] },
];

const Sparkline = ({ points, direction }) => {
  const color = direction === 'up' ? '#22c55e' : '#ef4444';
  const coords = points
    .map((v, i) => `${(i / (points.length - 1)) * 60},${24 - (v / 100) * 24}`)
    .join(' ');
  const lastY = 24 - (points[points.length - 1] / 100) * 24;

  return (
    <svg className="stock-spark" viewBox="0 0 60 24" preserveAspectRatio="none" aria-hidden="true">
      <polyline points={coords} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="60" cy={lastY} r="2.5" fill={color} />
    </svg>
  );
};

const StockCarousel = () => {
  const trackRef = useRef(null);

  const scroll = () => {
    trackRef.current?.scrollBy({ left: 240, behavior: 'smooth' });
  };

  return (
    <div className="stock-ticker-panel">
      <div className="stock-ticker-header">
        <div className="stock-ticker-title">
          <span aria-hidden="true">🔥</span> Top Stocks in the Market
          <span className="stock-ticker-sub">(Closes in 1h 15m)</span>
        </div>
        <Link to="/insights" className="stock-ticker-link">
          View Market Activity
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="stock-ticker-scroll">
        <div className="stock-ticker-track" ref={trackRef}>
          {stocks.map((s) => (
            <div key={s.symbol} className="stock-card">
              <div className="stock-card-top">
                <span className="stock-symbol">{s.symbol}</span>
                <Sparkline points={s.spark} direction={s.direction} />
              </div>
              <div className="stock-price">{s.price}</div>
              <div className={`stock-change stock-change--${s.direction}`}>
                {s.change} {s.changePct}
              </div>
            </div>
          ))}
        </div>
        <button type="button" className="stock-ticker-next" onClick={scroll} aria-label="Scroll for more">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default StockCarousel;

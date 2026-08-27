import {
  CandlestickChart, TrendingUp, BookMarked, ShieldQuestion,
} from 'lucide-react';

// Categories shown in AcademyExplorer's sidebar (embedded on /insights and
// standalone at /insights/market-intelligence). status: 'coming-soon'
// renders as a locked, non-expandable row until that category is built out.
export const academyCategories = [
  {
    id: 'chart-patterns',
    icon: CandlestickChart,
    title: 'Chart Patterns',
    desc: 'Recognize the recurring price formations traders watch for — from head & shoulders to flags and triangles.',
    count: `${12} patterns`,
    status: 'available',
  },
  {
    id: 'technical-indicators',
    icon: TrendingUp,
    title: 'Technical Indicators',
    desc: 'The moving averages, oscillators, and volume tools used to read momentum and trend strength.',
    count: `${6} indicators`,
    status: 'available',
  },
  {
    id: 'market-terminology',
    icon: BookMarked,
    title: 'Market Terminology',
    desc: 'A plain-English glossary of the terms that come up most often in market commentary and portfolio conversations.',
    count: 'Coming soon',
    status: 'coming-soon',
  },
  {
    id: 'risk-management',
    icon: ShieldQuestion,
    title: 'Risk Management',
    desc: 'Position sizing, diversification, and the discipline behind managing downside — not just chasing upside.',
    count: 'Coming soon',
    status: 'coming-soon',
  },
];

// Browsed via the sidebar on ChartPatterns.jsx, grouped by `type`. Each
// entry pairs a real, standard definition with a hand-drawn SVG silhouette
// (see patternIllustrations.js) rather than real chart photography.
export const chartPatterns = [
  {
    id: 'head-shoulders',
    name: 'Head & Shoulders',
    type: 'Reversal',
    difficulty: 'Intermediate',
    description: 'A bearish reversal pattern that forms after an uptrend. Price rallies to a peak (the left shoulder), pulls back, rallies higher to a second peak (the head), pulls back again, then rallies to a third peak roughly level with the first (the right shoulder) before breaking down through the neckline connecting the two pullback lows.',
  },
  {
    id: 'inverse-head-shoulders',
    name: 'Inverse Head & Shoulders',
    type: 'Reversal',
    difficulty: 'Intermediate',
    description: 'The bullish mirror of the head & shoulders, forming after a downtrend. Price makes a low, a lower low (the head), and a third low roughly level with the first (the right shoulder), before breaking up through the neckline connecting the two pullback highs.',
  },
  {
    id: 'double-top',
    name: 'Double Top',
    type: 'Reversal',
    difficulty: 'Beginner',
    description: 'A bearish reversal pattern where price rallies to a peak, pulls back, rallies again to a similar peak, and then fails to break higher — signaling that buying pressure is running out after an uptrend.',
  },
  {
    id: 'double-bottom',
    name: 'Double Bottom',
    type: 'Reversal',
    difficulty: 'Beginner',
    description: 'A bullish reversal pattern where price falls to a low, bounces, falls again to a similar low, and then fails to break lower — signaling that selling pressure is running out after a downtrend.',
  },
  {
    id: 'cup-handle',
    name: 'Cup & Handle',
    type: 'Continuation',
    difficulty: 'Intermediate',
    description: 'A bullish continuation pattern resembling a rounded bowl (the cup) followed by a shorter, shallower pullback (the handle), typically followed by a breakout in the direction of the prior uptrend.',
  },
  {
    id: 'ascending-triangle',
    name: 'Ascending Triangle',
    type: 'Continuation',
    difficulty: 'Beginner',
    description: 'A bullish continuation pattern formed by a flat resistance line and a rising support line of higher lows, as buyers keep stepping in at progressively higher prices until price breaks through resistance.',
  },
  {
    id: 'descending-triangle',
    name: 'Descending Triangle',
    type: 'Continuation',
    difficulty: 'Beginner',
    description: 'A bearish continuation pattern formed by a flat support line and a falling resistance line of lower highs, as sellers keep stepping in at progressively lower prices until price breaks through support.',
  },
  {
    id: 'symmetrical-triangle',
    name: 'Symmetrical Triangle',
    type: 'Bilateral',
    difficulty: 'Intermediate',
    description: 'A bilateral pattern formed by converging trendlines — lower highs and higher lows — that can resolve in either direction. The eventual breakout, not the pattern itself, signals which way the move continues.',
  },
  {
    id: 'bull-flag',
    name: 'Bull Flag',
    type: 'Continuation',
    difficulty: 'Beginner',
    description: 'A bullish continuation pattern that follows a sharp rally (the flagpole) with a brief, tight downward-drifting consolidation (the flag), usually resolving in a continuation of the prior uptrend.',
  },
  {
    id: 'bear-flag',
    name: 'Bear Flag',
    type: 'Continuation',
    difficulty: 'Beginner',
    description: 'A bearish continuation pattern that follows a sharp decline (the flagpole) with a brief, tight upward-drifting consolidation (the flag), usually resolving in a continuation of the prior downtrend.',
  },
  {
    id: 'doji',
    name: 'Doji',
    type: 'Candlestick',
    difficulty: 'Beginner',
    description: 'A single candle where the open and close are nearly identical, leaving a very small body with wicks on either side. It signals indecision between buyers and sellers and often appears near potential turning points.',
  },
  {
    id: 'engulfing',
    name: 'Bullish / Bearish Engulfing',
    type: 'Candlestick',
    difficulty: 'Intermediate',
    description: 'A two-candle reversal pattern where the second candle\'s body fully "engulfs" the body of the first. A bullish engulfing follows a downtrend and signals a possible reversal higher; a bearish engulfing follows an uptrend and signals a possible reversal lower.',
  },
];

export const chartPatternTypes = ['Reversal', 'Continuation', 'Bilateral', 'Candlestick'];

export const technicalIndicators = [
  { id: 'sma-ema', name: 'Moving Averages (SMA & EMA)', category: 'Trend', desc: 'Smooths price over a set period to show the underlying trend direction, with EMA weighting recent prices more heavily than SMA.' },
  { id: 'rsi', name: 'Relative Strength Index (RSI)', category: 'Momentum', desc: 'Measures the speed and magnitude of recent price moves on a 0–100 scale to flag potentially overbought or oversold conditions.' },
  { id: 'macd', name: 'MACD', category: 'Momentum', desc: 'Tracks the relationship between two moving averages to highlight shifts in momentum and potential trend changes.' },
  { id: 'bollinger-bands', name: 'Bollinger Bands', category: 'Volatility', desc: 'Plots bands around a moving average based on recent volatility, widening and narrowing as price swings expand or contract.' },
  { id: 'volume', name: 'Volume', category: 'Volume', desc: 'The number of shares traded over a period — used to confirm whether a price move has real participation behind it.' },
  { id: 'stochastic', name: 'Stochastic Oscillator', category: 'Momentum', desc: 'Compares a closing price to its recent trading range to gauge momentum and potential turning points.' },
];

export const indicatorCategories = ['Trend', 'Momentum', 'Volatility', 'Volume'];

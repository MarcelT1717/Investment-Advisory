// Hand-drawn coordinates approximating each pattern's or indicator's
// classic silhouette — a stand-in for real chart photography, precise
// enough to be instructive on its own. All coordinates live in a 320x160
// viewBox.
//
// kind: 'line'   — one or more polylines (`series`), each solid or dashed
// kind: 'candle' — one or two candlestick glyphs (defines the pattern itself)
// kind: 'bars'   — a simple bar chart (volume)
// kind: 'zones'  — a full candle sequence (`candles`) plus shaded price
//                  zones (`zones`) and labeled horizontal levels (`levels`),
//                  for price-action/"smart money" concepts like fair value
//                  gaps and balanced price ranges
export const patternIllustrations = {
  'head-shoulders': {
    kind: 'line',
    series: [
      { points: '70,90 280,90', color: 'gold', dashed: true },
      { points: '10,110 60,55 110,90 160,25 210,90 260,58 300,120', color: 'navy' },
    ],
  },
  'inverse-head-shoulders': {
    kind: 'line',
    series: [
      { points: '75,70 275,70', color: 'gold', dashed: true },
      { points: '10,50 60,105 110,70 160,135 210,70 260,102 300,40', color: 'navy' },
    ],
  },
  'double-top': {
    kind: 'line',
    series: [
      { points: '60,35 240,35', color: 'gold', dashed: true },
      { points: '10,130 80,35 150,85 220,35 300,140', color: 'navy' },
    ],
  },
  'double-bottom': {
    kind: 'line',
    series: [
      { points: '60,120 240,120', color: 'gold', dashed: true },
      { points: '10,20 80,120 150,65 220,120 300,10', color: 'navy' },
    ],
  },
  'cup-handle': {
    kind: 'line',
    series: [
      { points: '10,32 295,32', color: 'gold', dashed: true },
      { points: '10,30 40,55 70,80 100,95 130,100 160,95 190,80 220,55 250,32 265,45 280,38 300,10', color: 'navy' },
    ],
  },
  'ascending-triangle': {
    kind: 'line',
    series: [
      { points: '40,32 290,32', color: 'gold', dashed: true },
      { points: '90,78 270,32', color: 'gold', dashed: true },
      { points: '10,115 60,35 110,70 160,32 210,55 260,30 300,8', color: 'navy' },
    ],
  },
  'descending-triangle': {
    kind: 'line',
    series: [
      { points: '40,98 290,98', color: 'gold', dashed: true },
      { points: '90,48 270,98', color: 'gold', dashed: true },
      { points: '10,15 60,95 110,55 160,98 210,68 260,100 300,130', color: 'navy' },
    ],
  },
  'symmetrical-triangle': {
    kind: 'line',
    series: [
      { points: '50,22 270,60', color: 'gold', dashed: true },
      { points: '85,100 270,60', color: 'gold', dashed: true },
      { points: '10,60 60,25 100,95 140,45 180,70 220,58 260,64 300,35', color: 'navy' },
    ],
  },
  'bull-flag': {
    kind: 'line',
    series: [
      { points: '10,140 40,20 70,45 100,32 130,52 160,38 190,58 230,15 300,5', color: 'navy' },
    ],
  },
  'bear-flag': {
    kind: 'line',
    series: [
      { points: '10,10 40,130 70,105 100,118 130,98 160,112 190,92 230,135 300,150', color: 'navy' },
    ],
  },
  doji: {
    kind: 'candle',
    candles: [{ x: 160, wickTop: 20, wickBottom: 140, bodyTop: 76, bodyBottom: 84, tone: 'neutral' }],
  },
  engulfing: {
    kind: 'candle',
    candles: [
      { x: 115, wickTop: 60, wickBottom: 105, bodyTop: 72, bodyBottom: 92, tone: 'negative' },
      { x: 195, wickTop: 45, wickBottom: 118, bodyTop: 55, bodyBottom: 108, tone: 'positive' },
    ],
  },

  // Technical indicators
  'sma-ema': {
    kind: 'line',
    series: [
      { points: '10,90 40,55 70,100 100,45 130,85 160,35 190,75 220,40 250,80 280,50 300,65', color: 'muted', width: 2 },
      { points: '10,95 50,88 90,75 130,65 170,60 210,58 250,60 300,58', color: 'gold', width: 3 },
    ],
  },
  rsi: {
    kind: 'line',
    series: [
      { points: '10,30 300,30', color: 'gold', dashed: true },
      { points: '10,125 300,125', color: 'gold', dashed: true },
      { points: '10,80 40,45 70,65 100,25 130,55 160,95 190,120 220,90 250,55 280,95 300,70', color: 'navy' },
    ],
  },
  macd: {
    kind: 'line',
    series: [
      { points: '10,68 60,62 110,58 160,68 210,78 260,68 300,60', color: 'gold', width: 2.5 },
      { points: '10,58 60,38 110,72 160,48 210,92 260,50 300,78', color: 'navy' },
    ],
  },
  'bollinger-bands': {
    kind: 'line',
    series: [
      { points: '10,52 60,42 110,48 160,36 210,32 260,48 300,42', color: 'gold', dashed: true },
      { points: '10,108 60,102 110,96 160,124 210,102 260,108 300,96', color: 'gold', dashed: true },
      { points: '10,80 60,72 110,72 160,80 210,67 260,78 300,69', color: 'navy' },
    ],
  },
  volume: {
    kind: 'bars',
    bars: [40, 65, 30, 90, 55, 78, 45, 100, 60],
  },
  stochastic: {
    kind: 'line',
    series: [
      { points: '10,30 300,30', color: 'gold', dashed: true },
      { points: '10,125 300,125', color: 'gold', dashed: true },
      { points: '10,60 30,110 55,40 80,120 105,50 130,105 155,45 180,115 205,55 230,100 255,60 280,95 300,75', color: 'navy' },
    ],
  },

  // Price action / smart money concepts
  'fair-value-gap': {
    kind: 'zones',
    levels: [],
    zones: [
      // The FVG itself — the gap between the candle before the impulse
      // move's high and the candle after it's low, drawn as a band
      // spanning the chart the way price is watched for a return visit.
      { x1: 8, x2: 296, y1: 50, y2: 95, tone: 'range', label: 'FVG' },
      // The retest — price dipping back into the gap to "fill" it before
      // continuing higher.
      { x1: 155, x2: 185, y1: 55, y2: 90, tone: 'retest' },
    ],
    candles: [
      { x: 20, wickTop: 120, wickBottom: 150, bodyTop: 125, bodyBottom: 145, tone: 'positive' },
      { x: 45, wickTop: 95, wickBottom: 130, bodyTop: 100, bodyBottom: 125, tone: 'positive' },
      { x: 70, wickTop: 35, wickBottom: 100, bodyTop: 40, bodyBottom: 95, tone: 'positive' },
      { x: 95, wickTop: 20, wickBottom: 50, bodyTop: 25, bodyBottom: 45, tone: 'positive' },
      { x: 120, wickTop: 15, wickBottom: 45, bodyTop: 20, bodyBottom: 40, tone: 'negative' },
      { x: 145, wickTop: 30, wickBottom: 70, bodyTop: 35, bodyBottom: 65, tone: 'negative' },
      { x: 170, wickTop: 55, wickBottom: 95, bodyTop: 60, bodyBottom: 90, tone: 'negative' },
      { x: 195, wickTop: 50, wickBottom: 85, bodyTop: 55, bodyBottom: 80, tone: 'positive' },
      { x: 220, wickTop: 30, wickBottom: 65, bodyTop: 35, bodyBottom: 60, tone: 'positive' },
      { x: 245, wickTop: 15, wickBottom: 45, bodyTop: 20, bodyBottom: 40, tone: 'positive' },
      { x: 270, wickTop: 5, wickBottom: 30, bodyTop: 8, bodyBottom: 25, tone: 'positive' },
    ],
  },
  'inverse-fair-value-gap': {
    kind: 'zones',
    levels: [],
    zones: [
      // A bearish FVG that later gets broken through and flips into a
      // bullish IFVG — drawn in the same "invert" (bullish) tone
      // throughout, since it's the post-invalidation reading of the zone
      // that matters going forward.
      { x1: 8, x2: 296, y1: 65, y2: 100, tone: 'invert', label: 'IFVG' },
      // The retest — price coming back down to tag the flipped zone from
      // above before continuing higher.
      { x1: 218, x2: 248, y1: 68, y2: 96, tone: 'retest' },
    ],
    candles: [
      { x: 20, wickTop: 15, wickBottom: 50, bodyTop: 20, bodyBottom: 45, tone: 'negative' },
      { x: 45, wickTop: 35, wickBottom: 70, bodyTop: 40, bodyBottom: 65, tone: 'negative' },
      { x: 70, wickTop: 55, wickBottom: 100, bodyTop: 60, bodyBottom: 95, tone: 'negative' },
      { x: 95, wickTop: 90, wickBottom: 120, bodyTop: 95, bodyBottom: 115, tone: 'negative' },
      { x: 120, wickTop: 70, wickBottom: 115, bodyTop: 75, bodyBottom: 110, tone: 'positive' },
      // The invalidation candle — closes back up through the zone,
      // flipping it from a bearish FVG into a bullish IFVG.
      { x: 145, wickTop: 40, wickBottom: 90, bodyTop: 45, bodyBottom: 85, tone: 'positive' },
      { x: 170, wickTop: 20, wickBottom: 55, bodyTop: 25, bodyBottom: 50, tone: 'positive' },
      { x: 195, wickTop: 10, wickBottom: 40, bodyTop: 15, bodyBottom: 35, tone: 'positive' },
      { x: 220, wickTop: 35, wickBottom: 70, bodyTop: 40, bodyBottom: 65, tone: 'negative' },
      { x: 245, wickTop: 55, wickBottom: 96, bodyTop: 60, bodyBottom: 91, tone: 'negative' },
      { x: 270, wickTop: 20, wickBottom: 55, bodyTop: 25, bodyBottom: 50, tone: 'positive' },
    ],
  },
  'balanced-price-range': {
    kind: 'zones',
    levels: [
      { y: 30, label: '1' },
      { y: 85, label: '0.5' },
      { y: 140, label: '0' },
    ],
    zones: [
      // The Balanced Price Range itself — the overlap between a bullish
      // and bearish Fair Value Gap, drawn as a band spanning the chart.
      { x1: 8, x2: 296, y1: 78, y2: 100, tone: 'range', label: 'BPR' },
      // The retest — where price comes back to tag the BPR before continuing.
      { x1: 178, x2: 212, y1: 76, y2: 96, tone: 'retest' },
    ],
    candles: [
      { x: 20, wickTop: 15, wickBottom: 50, bodyTop: 20, bodyBottom: 45, tone: 'negative' },
      { x: 45, wickTop: 30, wickBottom: 65, bodyTop: 35, bodyBottom: 60, tone: 'negative' },
      { x: 70, wickTop: 50, wickBottom: 85, bodyTop: 55, bodyBottom: 80, tone: 'negative' },
      { x: 95, wickTop: 70, wickBottom: 110, bodyTop: 75, bodyBottom: 105, tone: 'negative' },
      { x: 120, wickTop: 95, wickBottom: 135, bodyTop: 100, bodyBottom: 130, tone: 'negative' },
      { x: 145, wickTop: 90, wickBottom: 135, bodyTop: 95, bodyBottom: 125, tone: 'positive' },
      { x: 170, wickTop: 65, wickBottom: 105, bodyTop: 70, bodyBottom: 100, tone: 'positive' },
      { x: 195, wickTop: 75, wickBottom: 100, bodyTop: 78, bodyBottom: 92, tone: 'negative' },
      { x: 220, wickTop: 55, wickBottom: 90, bodyTop: 60, bodyBottom: 85, tone: 'positive' },
      { x: 245, wickTop: 30, wickBottom: 65, bodyTop: 35, bodyBottom: 60, tone: 'positive' },
      { x: 270, wickTop: 10, wickBottom: 45, bodyTop: 15, bodyBottom: 40, tone: 'positive' },
    ],
  },
};

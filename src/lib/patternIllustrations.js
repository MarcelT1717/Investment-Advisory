// Hand-drawn coordinates approximating each pattern's or indicator's
// classic silhouette — a stand-in for real chart photography, precise
// enough to be instructive on its own. All coordinates live in a 320x160
// viewBox.
//
// kind: 'line'   — one or more polylines (`series`), each solid or dashed
// kind: 'candle' — one or two candlestick glyphs (defines the pattern itself)
// kind: 'bars'   — a simple bar chart (volume)
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
};

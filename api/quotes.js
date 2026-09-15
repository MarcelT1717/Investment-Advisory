// Vercel serverless function — returns quotes for one or more stock tickers
// via Finnhub's free API (server-side, so the API key stays secret).
// Response is cached at Vercel's edge for 30s so traffic from many visitors
// doesn't multiply calls to Finnhub's free-tier rate limit.
//
// Requires env var FINNHUB_API_KEY (free key from https://finnhub.io) set in
// Vercel Project Settings > Environment Variables (and .env.local for
// `vercel dev`).

const SYMBOL_RE = /^[A-Z0-9.\-^]{1,10}$/;

export default async function handler(req, res) {
  const { symbols } = req.query;
  const list = (symbols || '')
    .split(',')
    .map((s) => s.trim().toUpperCase())
    .filter((s) => SYMBOL_RE.test(s))
    .slice(0, 30);

  if (list.length === 0) {
    return res.status(400).json({ error: 'Provide at least one symbol, e.g. ?symbols=AAPL,MSFT' });
  }

  const { FINNHUB_API_KEY } = process.env;
  if (!FINNHUB_API_KEY) {
    console.error('FINNHUB_API_KEY is not configured');
    return res.status(500).json({ error: 'Stock quotes are not configured yet.' });
  }

  try {
    const results = await Promise.all(
      list.map(async (symbol) => {
        const r = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(symbol)}&token=${FINNHUB_API_KEY}`
        );
        const data = await r.json();
        return [symbol, data];
      })
    );

    const quotes = {};
    for (const [symbol, data] of results) {
      // Finnhub returns all-zero fields for a symbol it doesn't recognize.
      if (!data || data.c === undefined || data.c === 0) continue;
      quotes[symbol] = {
        price: data.c,
        change: data.d,
        changePercent: data.dp,
      };
    }

    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
    return res.status(200).json({ quotes, asOf: Date.now() });
  } catch (err) {
    console.error('Finnhub request failed:', err);
    return res.status(500).json({ error: 'Could not fetch quotes right now.' });
  }
}

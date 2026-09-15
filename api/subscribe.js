// Vercel serverless function — adds an email to a Mailchimp audience.
// Requires env vars (set in Vercel Project Settings > Environment Variables,
// and in .env.local for `vercel dev`):
//   MAILCHIMP_API_KEY       e.g. abc123...-us21 (the part after the last "-" is the server prefix)
//   MAILCHIMP_SERVER_PREFIX e.g. us21
//   MAILCHIMP_AUDIENCE_ID   the Audience/List ID from Mailchimp > Audience > Settings

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_AUDIENCE_ID } = process.env;
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_AUDIENCE_ID) {
    console.error('Mailchimp env vars are not configured');
    return res.status(500).json({ error: 'Newsletter signup is not configured yet.' });
  }

  try {
    const mcRes = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      }
    );

    const data = await mcRes.json();

    if (mcRes.ok) {
      return res.status(200).json({ success: true });
    }

    // Mailchimp reports an already-subscribed email as a 400 "Member Exists" —
    // treat that as a success from the visitor's point of view.
    if (data.title === 'Member Exists') {
      return res.status(200).json({ success: true });
    }

    console.error('Mailchimp error:', data);
    return res.status(400).json({ error: data.detail || 'Could not subscribe that email right now.' });
  } catch (err) {
    console.error('Mailchimp request failed:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
}

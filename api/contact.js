// Vercel serverless function — sends consultation/contact form submissions
// to your inbox via Resend, instead of relying on the visitor's own email
// client (the old mailto: behavior).
//
// Requires env vars (Vercel Project Settings > Environment Variables, and
// .env.local for `vercel dev`):
//   RESEND_API_KEY    from resend.com > API Keys
//   CONTACT_TO_EMAIL   where submissions should land, e.g. consultation@standardthreewealth.com
//   CONTACT_FROM_EMAIL the "from" address — must be on a domain verified in
//                       Resend (Resend > Domains). Until you verify your own
//                       domain, Resend only delivers to the email address
//                       you signed up with, so use that for testing.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body || {};

  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Please enter your name.' });
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error('Resend env vars are not configured');
    return res.status(500).json({ error: 'This form is not configured yet.' });
  }

  const safe = (s) => String(s || '').replace(/[<>]/g, '');

  try {
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        reply_to: email,
        subject: `Consultation request from ${safe(name)}`,
        text: [
          `Name: ${safe(name)}`,
          `Email: ${safe(email)}`,
          `Phone: ${safe(phone) || '(not provided)'}`,
          '',
          'Message:',
          safe(message) || '(none provided)',
        ].join('\n'),
      }),
    });

    if (!emailRes.ok) {
      const data = await emailRes.json().catch(() => ({}));
      console.error('Resend error:', data);
      return res.status(500).json({ error: 'Could not send that right now. Please try again later.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend request failed:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
}

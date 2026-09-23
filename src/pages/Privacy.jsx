import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const ADVISOR_EMAIL = 'consultation@standardthreewealth.com';

const Privacy = () => (
  <LegalPageLayout title="Privacy Policy">
    <p><em>Last updated: September 23, 2026</em></p>

    <p>
      Standard III Wealth Management ("Standard III," "we," "us," or "our") respects your privacy.
      This Privacy Policy explains what information we collect through standardthreewealth.com (the
      "Site"), how we use it, and the choices you have. It applies to visitors of this Site only — it
      does not cover the separate privacy notice provided to advisory clients (see "If You Become a
      Client" below).
    </p>

    <h2 className="h3">Information We Collect</h2>
    <p>
      <strong>Information you provide directly.</strong> When you request a consultation, send us a
      message, subscribe to our newsletter, or book time on our calendar, we collect what you submit —
      typically your name, email address, phone number, and any message you include.
    </p>
    <p>
      <strong>Information collected automatically.</strong> Like most websites, our hosting provider
      logs standard technical data (IP address, browser type, device type, pages viewed, and
      timestamps) for security and reliability purposes. We do not currently run any advertising
      tracking pixels or analytics scripts on this Site.
    </p>
    <p>
      <strong>Information from third-party tools embedded on this Site.</strong> When you use our
      scheduling widget, you are interacting directly with Calendly, which sets its own cookies and
      collects booking details (name, email, selected time, time zone) under its own privacy policy.
      We receive the booking details necessary to conduct the consultation you scheduled.
    </p>

    <h2 className="h3">How We Use Your Information</h2>
    <ul style={{ paddingLeft: 20, listStyle: 'disc' }}>
      <li>To respond to your inquiry and schedule or conduct a consultation</li>
      <li>To send the newsletter or market commentary you signed up to receive</li>
      <li>To maintain, secure, and improve this Site</li>
      <li>To comply with legal, regulatory, or recordkeeping obligations</li>
    </ul>
    <p>We do not sell your personal information.</p>

    <h2 className="h3">Who We Share Information With</h2>
    <p>
      We share information only with service providers who help us operate the Site and respond to
      you, each acting on our behalf and only for that purpose:
    </p>
    <ul style={{ paddingLeft: 20, listStyle: 'disc' }}>
      <li><strong>Resend</strong> — delivers messages submitted through our contact and consultation forms to our inbox</li>
      <li><strong>Mailchimp</strong> — manages newsletter subscriptions and delivery</li>
      <li><strong>Calendly</strong> — powers the "Schedule a Consultation" booking calendar</li>
      <li><strong>Vercel</strong> — hosts this website</li>
    </ul>
    <p>
      We may also disclose information if required by law, subpoena, or regulatory request, or to
      protect the rights, property, or safety of Standard III, our clients, or others.
    </p>

    <h2 className="h3">Cookies</h2>
    <p>
      This Site itself does not set advertising or marketing cookies. The Calendly widget embedded on
      our Schedule a Consultation page sets its own cookies to operate the booking calendar; you can
      review Calendly's cookie and privacy practices at{' '}
      <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">
        calendly.com/privacy
      </a>.
    </p>

    <h2 className="h3">Data Retention</h2>
    <p>
      We retain inquiry and newsletter information for as long as needed to respond to you, maintain
      our relationship, or satisfy our own recordkeeping needs, and then delete or anonymize it. If
      you become an advisory client, your account records are retained for the period required under
      applicable investment adviser recordkeeping rules.
    </p>

    <h2 className="h3">Your Choices</h2>
    <p>
      Every newsletter email includes an unsubscribe link. You may also ask us to access, correct, or
      delete the personal information we hold about you at any time by emailing{' '}
      <a href={`mailto:${ADVISOR_EMAIL}`} className="text-accent-primary hover:underline">{ADVISOR_EMAIL}</a>.
      Depending on your state of residence, you may have additional rights under state privacy law; we
      will honor applicable requests consistent with those laws.
    </p>

    <h2 className="h3">If You Become a Client</h2>
    <p>
      This policy covers our public website only. Once you engage us as an advisory client, we provide
      a separate privacy notice — required under Regulation S-P — describing how we collect, use, and
      safeguard the nonpublic personal information in your account, and your right to opt out of
      certain sharing. That notice is delivered at the start of the relationship and at least annually
      thereafter.
    </p>

    <h2 className="h3">Children's Privacy</h2>
    <p>This Site is not directed to individuals under 18, and we do not knowingly collect information from them.</p>

    <h2 className="h3">Security</h2>
    <p>
      We use reasonable technical and organizational measures designed to protect the information we
      collect. No method of transmission or storage is completely secure, and we cannot guarantee
      absolute security.
    </p>

    <h2 className="h3">Changes to This Policy</h2>
    <p>
      We may update this Privacy Policy from time to time. The "Last updated" date above reflects the
      most recent revision. Material changes will be posted on this page.
    </p>

    <h2 className="h3">Contact Us</h2>
    <p>
      Questions about this Privacy Policy can be sent to{' '}
      <a href={`mailto:${ADVISOR_EMAIL}`} className="text-accent-primary hover:underline">{ADVISOR_EMAIL}</a>.
    </p>
  </LegalPageLayout>
);

export default Privacy;

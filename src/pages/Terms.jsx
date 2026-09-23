import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const ADVISOR_EMAIL = 'consultation@standardthreewealth.com';

const Terms = () => (
  <LegalPageLayout title="Terms of Service">
    <p><em>Last updated: September 23, 2026</em></p>

    <p>
      These Terms of Service ("Terms") govern your use of standardthreewealth.com (the "Site"),
      operated by Standard III Wealth Management ("Standard III," "we," "us," or "our"). By using this
      Site, you agree to these Terms. If you do not agree, please do not use the Site.
    </p>

    <h2 className="h3">Informational Purposes Only</h2>
    <p>
      This Site is provided for general informational purposes only. Market perspectives, economic
      outlook content, sector commentary, and any other content on this Site reflect general views as
      of the date presented and are subject to change without notice. Nothing on this Site constitutes
      personalized investment, legal, or tax advice, or a recommendation to buy, sell, or hold any
      security. Content should not be relied upon in making investment decisions.
    </p>

    <h2 className="h3">No Advisory Relationship</h2>
    <p>
      Browsing this Site, submitting a contact form, subscribing to our newsletter, or booking a
      consultation does not, by itself, create an investment advisory or fiduciary relationship. A
      formal advisory relationship — including any fiduciary duty owed to you — begins only after you
      have received and reviewed our Form ADV disclosure brochure(s) and signed an advisory agreement
      with us.
    </p>

    <h2 className="h3">No Warranty on Content or Accuracy</h2>
    <p>
      We aim for accuracy, but we make no representation or warranty, express or implied, regarding
      the completeness, timeliness, or accuracy of any content on this Site. Market data (including
      any quotes or figures) may be delayed, sourced from third parties, and provided for illustrative
      purposes only. Statements about future events, market conditions, or performance are
      forward-looking, involve known and unknown risks, and actual results may differ materially.
    </p>

    <h2 className="h3">Intellectual Property</h2>
    <p>
      All text, graphics, logos, and other content on this Site are owned by Standard III or its
      licensors and are protected by copyright and trademark law. You may view and share pages of this
      Site for personal, non-commercial use, but you may not reproduce, republish, scrape, or
      distribute this content without our prior written permission.
    </p>

    <h2 className="h3">Third-Party Links and Services</h2>
    <p>
      This Site links to or embeds third-party services, including Calendly (scheduling), LinkedIn,
      and Facebook. We do not control and are not responsible for the content, availability, or
      privacy practices of those third parties. Use of any third-party service is subject to that
      provider's own terms and privacy policy.
    </p>

    <h2 className="h3">Not Legal or Tax Advice</h2>
    <p>
      Nothing on this Site should be construed as legal or tax advice. You should consult your own
      legal and tax advisors regarding your particular situation before making any financial decision.
    </p>

    <h2 className="h3">Limitation of Liability</h2>
    <p>
      To the fullest extent permitted by law, Standard III and its principals, employees, and agents
      will not be liable for any direct, indirect, incidental, consequential, or special damages
      arising out of or related to your use of, or inability to use, this Site or its content, even if
      we have been advised of the possibility of such damages.
    </p>

    <h2 className="h3">Indemnification</h2>
    <p>
      You agree to indemnify and hold Standard III harmless from any claim or demand, including
      reasonable attorneys' fees, arising out of your misuse of this Site or violation of these Terms.
    </p>

    <h2 className="h3">Governing Law</h2>
    <p>
      These Terms are governed by the laws of the State of Illinois, without regard to its conflict of
      laws principles, unless otherwise required by applicable securities regulation.
    </p>

    <h2 className="h3">Changes to These Terms</h2>
    <p>
      We may update these Terms from time to time. The "Last updated" date above reflects the most
      recent revision. Continued use of the Site after changes are posted constitutes acceptance of
      the revised Terms.
    </p>

    <h2 className="h3">Contact Us</h2>
    <p>
      Questions about these Terms can be sent to{' '}
      <a href={`mailto:${ADVISOR_EMAIL}`} className="text-accent-primary hover:underline">{ADVISOR_EMAIL}</a>.
    </p>
  </LegalPageLayout>
);

export default Terms;

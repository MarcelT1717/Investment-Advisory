import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const ADVISOR_EMAIL = 'consultation@standardthreewealth.com';

const Disclosures = () => (
  <LegalPageLayout title="Disclosures">
    <p><em>Last updated: September 23, 2026</em></p>

    <h2 className="h3">Investment Risk</h2>
    <p>
      Investing involves risk, including the possible loss of principal. No investment strategy —
      including diversification and asset allocation — guarantees a profit or protects against loss in
      declining markets. Past performance is not indicative of future results. Nothing on this Site
      should be construed as a guarantee or prediction of future investment outcomes.
    </p>

    <h2 className="h3">Registration</h2>
    <p>
      Standard III Wealth Management provides investment advisory services and is registered, notice
      filed, or operates in reliance on an applicable exemption from registration as an investment
      adviser under state and/or federal law in the jurisdictions in which it conducts business.
      Registration as an investment adviser does not imply any level of skill or training. Standard III
      only transacts business, or offers to transact business, in states or jurisdictions where it is
      properly registered, notice filed, or excluded or exempted from registration requirements.
    </p>
    <p>
      A copy of our Form ADV Part 2A (Disclosure Brochure), Form ADV Part 2B (Brochure Supplement), and
      Form CRS (Client Relationship Summary) is available free of charge upon request by emailing{' '}
      <a href={`mailto:${ADVISOR_EMAIL}`} className="text-accent-primary hover:underline">{ADVISOR_EMAIL}</a>.
      Our current registration status and CRD number can also be looked up through the SEC's Investment
      Adviser Public Disclosure (IAPD) database at{' '}
      <a href="https://adviserinfo.sec.gov" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">
        adviserinfo.sec.gov
      </a>.
    </p>

    <h2 className="h3">Fiduciary Duty and Fees</h2>
    <p>
      As a registered investment adviser, Standard III owes its advisory clients a fiduciary duty under
      the Investment Advisers Act of 1940 (or applicable state law). Our fees, compensation structure,
      and any material conflicts of interest are fully described in our Form ADV Part 2A, provided to
      every prospective client before or at the time an advisory agreement is signed.
    </p>

    <h2 className="h3">Testimonials</h2>
    <p>
      Any client testimonial appearing on this Site — including on our About page — reflects one
      individual's personal, voluntary account of their own experience and may not be representative
      of the experience of other clients. It is not indicative of future performance or success. No
      cash or non-cash compensation was provided to the client in exchange for the statement, and no
      material conflicts of interest exist between Standard III and the client related to the
      testimonial, consistent with the disclosure requirements of SEC Marketing Rule 206(4)-1.
    </p>

    <h2 className="h3">Hypothetical and Backtested Performance</h2>
    <p>
      References on this Site to algorithm development, backtesting, or strategy validation describe a
      research and development process. Any related performance figures are hypothetical or simulated,
      not the result of actual trading, and are shown for illustrative purposes only. Hypothetical
      performance has inherent limitations: it is prepared with the benefit of hindsight, does not
      reflect actual trading or the impact material economic and market factors might have had on
      decision-making, and results achieved may differ materially from hypothetical performance shown.
    </p>

    <h2 className="h3">Market Commentary and Data</h2>
    <p>
      Market perspectives, sector analysis, and economic outlook content on this Site reflect general,
      illustrative commentary as of the date presented and are subject to change without notice. They
      are not personalized investment recommendations and do not take into account any individual's
      specific financial situation or objectives. Stock quote data, where shown, is sourced from
      third-party providers, may be delayed, and is provided for informational purposes only.
    </p>

    <h2 className="h3">No Offer</h2>
    <p>
      Nothing on this Site is an offer to sell, or a solicitation of an offer to buy, any security in
      any jurisdiction where Standard III is not registered or exempt from registration.
    </p>

    <h2 className="h3">Social Media</h2>
    <p>
      Standard III's presence on LinkedIn, Facebook, or other social platforms is provided for general
      informational purposes. Posts, links, or third-party comments on those platforms are not
      endorsements and do not constitute investment advice.
    </p>

    <h2 className="h3">Questions</h2>
    <p>
      For questions about these disclosures or to request a copy of our Form ADV, contact us at{' '}
      <a href={`mailto:${ADVISOR_EMAIL}`} className="text-accent-primary hover:underline">{ADVISOR_EMAIL}</a>.
    </p>
  </LegalPageLayout>
);

export default Disclosures;

import {
  BarChart3, PiggyBank, Shield, Baby, Briefcase, Users, Newspaper,
  LineChart, ShieldCheck, Percent, GraduationCap, ScrollText, Landmark,
  Building2, FileSpreadsheet, Heart, HandCoins, Network,
  TrendingUp, BellRing, BookOpen, School, PiggyBank as PiggyBankIcon,
} from 'lucide-react';

// Single source of truth for the firm's offerings — used by the Home page's
// "What We Offer" tabs, the Services page grid, each service's own detail
// page, and the header's "Our Approach" dropdown, so all four stay in sync.
// Ordered alphabetically by title.
//
// `highlights` and `faqs` feed the "What's Included" grid and FAQ accordion
// on each service's detail page (ServiceDetail.jsx). Copy describing our
// process is written out in full; anything that depends on firm-specific
// figures (fees, minimums, founding date) is left bracketed as a
// placeholder, matching the convention used elsewhere on the site.
export const services = [
  {
    id: 'business-entity-accounts',
    icon: Briefcase,
    title: 'Business & Entity Accounts',
    desc: 'Investment solutions for businesses, partnerships, trusts, and other entities.',
    image: '/images/service-business-owner.jpg',
    highlights: [
      { icon: Building2, title: 'Corporate Investment Accounts', desc: 'Investment management for cash and reserves held at the entity level.' },
      { icon: FileSpreadsheet, title: 'SEP, SIMPLE & Solo 401(k)', desc: 'Retirement plan setup and management sized to your business structure and headcount.' },
      { icon: Briefcase, title: 'Founder Perspective', desc: 'Guidance from someone who also runs a small business and understands the tradeoffs you\'re weighing.' },
    ],
    faqs: [
      { q: 'Which retirement plan fits my business?', a: '[Placeholder — describe how we help choose between SEP, SIMPLE, and Solo 401(k) based on entity type and employees.]' },
      { q: 'Can you set up a new plan from scratch?', a: '[Placeholder — describe the plan setup process and timeline.]' },
      { q: 'Do you work with my accountant?', a: 'Yes — we coordinate with your CPA or bookkeeper so entity-level investment decisions stay consistent with your broader business and tax picture.' },
    ],
  },
  {
    id: 'custodial-accounts',
    icon: Baby,
    title: 'Custodial Accounts',
    desc: 'Investment management for UGMA and UTMA accounts established for minors.',
    image: '/images/service-custodial.jpg',
    highlights: [
      { icon: Baby, title: 'UGMA / UTMA Accounts', desc: 'Custodial accounts set up and managed on behalf of a minor, structured around when they\'ll need the funds.' },
      { icon: GraduationCap, title: 'Growth-Oriented Planning', desc: 'A strategy that can flex toward education costs or simply toward giving them a head start.' },
      { icon: Heart, title: 'Built to Grow With Them', desc: 'A long time horizon lets us invest with a longer runway than most accounts allow.' },
    ],
    faqs: [
      { q: 'What\'s the difference between UGMA and UTMA?', a: '[Placeholder — describe how the two custodial account types differ and which we typically recommend.]' },
      { q: 'What happens to the account when the child turns 18 (or 21)?', a: '[Placeholder — describe the transfer-of-control process at the age of majority.]' },
      { q: 'Can grandparents or other relatives contribute?', a: '[Placeholder — describe how additional contributions from family members work.]' },
    ],
  },
  {
    id: 'education-planning',
    icon: School,
    title: 'Education Planning',
    desc: 'Investment strategies designed to help families prepare for future education expenses.',
    image: '/images/collage-chicago-detail.jpg',
    highlights: [
      { icon: GraduationCap, title: 'Goal-Based Investing', desc: 'A strategy built around when the funds will actually be needed, from early childhood through college.' },
      { icon: PiggyBankIcon, title: 'Tax-Aware Account Options', desc: 'Guidance on the account types available for education savings and how they fit alongside your other goals.' },
      { icon: TrendingUp, title: 'Adjusts as the Timeline Shortens', desc: 'A glide path that grows more conservative as tuition bills get closer, to help protect what\'s been built.' },
    ],
    faqs: [
      { q: 'What account types do you use for education savings?', a: '[Placeholder — describe the account types considered (e.g. 529 plans, custodial accounts) and how we choose between them.]' },
      { q: 'How early should I start?', a: '[Placeholder — describe how time horizon shapes the investment approach for education goals.]' },
      { q: 'Can this be combined with a custodial account?', a: 'Yes — education planning often works alongside a custodial account; we coordinate the two so they work toward the same goal rather than overlapping.' },
    ],
  },
  {
    id: 'family-office',
    icon: Users,
    title: 'Family Office',
    desc: 'Coordinated investment oversight for families with more complex financial needs.',
    image: '/images/service-family-office.jpg',
    highlights: [
      { icon: Network, title: 'One Coordinated View', desc: 'Every account across the family managed against one strategy instead of in isolation.' },
      { icon: Users, title: 'Multi-Generational Coordination', desc: 'Planning that accounts for how wealth moves between generations, not just how it grows today.' },
      { icon: Landmark, title: 'Aligned With Your Advisors', desc: 'Coordinated alongside your attorneys, accountants, and other advisors so nothing works at cross purposes.' },
    ],
    faqs: [
      { q: 'How many accounts can you manage together?', a: '[Placeholder — describe the scope of accounts and family members typically coordinated under this service.]' },
      { q: 'How is family office service priced?', a: '[Placeholder — describe the fee structure for coordinated family accounts.]' },
      { q: 'Can you coordinate with our other advisors?', a: 'Yes — this service is built around coordination. We work alongside your attorneys, accountants, and any other advisors already in place.' },
    ],
  },
  {
    id: 'investment-management',
    icon: BarChart3,
    title: 'Investment Management',
    desc: 'Personalized portfolios designed around your goals, risk tolerance, and long-term objectives.',
    image: '/images/service-investment-management.jpg',
    highlights: [
      { icon: LineChart, title: 'Personalized Portfolio Design', desc: 'A portfolio built around your goals, time horizon, and risk tolerance — not a model that fits everyone.' },
      { icon: Percent, title: 'Tax-Aware Management', desc: 'Ongoing attention to asset location, harvesting, and account placement to help improve after-tax returns.' },
      { icon: Users, title: 'Individual & Joint Accounts', desc: 'Coordinated management across accounts held solely or jointly, so the full picture stays aligned.' },
    ],
    faqs: [
      { q: 'How is my portfolio actually built?', a: 'We start with your goals, time horizon, and comfort with risk, then construct a portfolio designed around them — combining sector research with disciplined position sizing rather than a one-size-fits-all model.' },
      { q: 'How often will my portfolio be reviewed?', a: '[Placeholder — describe the standing review cadence and what triggers an off-cycle check-in.]' },
      { q: 'What does this service cost?', a: '[Placeholder — describe the fee structure for this service.]' },
    ],
  },
  {
    id: 'market-research',
    icon: Newspaper,
    title: 'Market Research',
    desc: 'Ongoing market commentary, investment research, and insights from our team.',
    image: '/images/service-market-research.jpg',
    highlights: [
      { icon: Newspaper, title: 'Weekly Market Commentary', desc: 'Regular, no-fluff updates on the market conditions and sector moves shaping your portfolio.' },
      { icon: BookOpen, title: 'Sector & Macro Research', desc: 'Bottom-up company research paired with macro and thematic context, shared directly with you.' },
      { icon: BellRing, title: 'Ahead of Inflection Points', desc: 'Commentary aimed at flagging emerging themes and cycle shifts before they\'re consensus.' },
    ],
    faqs: [
      { q: 'How often will I hear from you?', a: 'Weekly, with occasional additional notes when something material shifts in a sector or position we hold.' },
      { q: 'Is this included with portfolio management, or standalone?', a: '[Placeholder — describe how research access is bundled with other services versus offered on its own.]' },
      { q: 'Can I see a sample before signing up?', a: 'Yes — see the Insights page for recent commentary, or ask during your consultation and we\'ll share examples directly.' },
    ],
  },
  {
    id: 'retirement-planning',
    icon: PiggyBank,
    title: 'Retirement Planning',
    desc: 'Investment strategies for building, managing, and transitioning wealth throughout retirement.',
    image: '/images/service-retirement.jpg',
    highlights: [
      { icon: PiggyBank, title: 'Every Account Type', desc: 'Traditional, Roth, SEP, and rollover IRAs — structured around how you plan to use the money later.' },
      { icon: TrendingUp, title: 'Accumulation Strategy', desc: 'A growth-oriented plan while you\'re still building your nest egg, sized to your time horizon.' },
      { icon: HandCoins, title: 'Withdrawal Planning', desc: 'A drawdown strategy for retirement income that aims to make the money last and manage tax impact.' },
    ],
    faqs: [
      { q: 'Which account type is right for me?', a: 'It depends on your current tax bracket, expected bracket in retirement, and how soon you\'ll need the money — we walk through the tradeoffs together before recommending a structure.' },
      { q: 'Can you help me roll over an old 401(k)?', a: '[Placeholder — describe the rollover process and timeline.]' },
      { q: 'When should I start drawing down my retirement accounts?', a: '[Placeholder — describe how withdrawal timing and required distributions are approached.]' },
    ],
  },
  {
    id: 'trust-estate-planning',
    icon: Shield,
    title: 'Trust & Estate Planning',
    desc: 'Portfolio coordination designed to complement your broader estate and legacy plans.',
    image: '/images/service-trust-estate.jpg',
    highlights: [
      { icon: ShieldCheck, title: 'Trust Asset Management', desc: 'Ongoing, disciplined management of assets held in trust, consistent with the trust\'s terms and objectives.' },
      { icon: ScrollText, title: 'Attorney Coordination', desc: 'We work directly alongside your estate attorney so investment decisions and estate documents stay aligned.' },
      { icon: Landmark, title: 'Multi-Generational Focus', desc: 'A management approach built for preserving and transferring wealth across generations, not just growing it.' },
    ],
    faqs: [
      { q: 'Do you work with my existing estate attorney?', a: 'Yes — we coordinate directly with your attorney (and CPA, where relevant) so the investment side of the trust stays consistent with the estate plan itself.' },
      { q: 'Can you manage a trust that already exists?', a: '[Placeholder — describe how an existing trust is transitioned in.]' },
      { q: 'What does this service cost?', a: '[Placeholder — describe the fee structure for trust and estate accounts.]' },
    ],
  },
];

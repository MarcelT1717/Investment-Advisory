import {
  PiggyBank, Shield, Baby, Briefcase, Newspaper,
  ShieldCheck, GraduationCap, ScrollText, Landmark,
  Building2, FileSpreadsheet, Heart, HandCoins,
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
    image: '/images/service-business-entity-accounts.jpg',
    storyTitle: 'Built for the way your business actually works.',
    story: 'Standard III was founded on the idea that businesses deserve the same research-driven attention as individual investors — not an afterthought bolted onto a personal account. We manage cash, reserves, and retirement plans at the entity level with the same independent research and discipline that defines every portfolio we build, drawing on firsthand experience running a small business ourselves.',
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
    storyTitle: 'A head start, built to last.',
    story: 'Every custodial account we manage starts with a simple question: what will this money need to do, and when? That long runway lets us invest with a patience most accounts don\'t have — pairing our independent research with a strategy built to grow alongside the child it\'s meant for, from the first deposit to the day they take the reins.',
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
    image: '/images/service-education-planning.webp',
    storyTitle: 'Planning that keeps pace with the timeline.',
    story: 'Education costs move on their own schedule, and we build around it. Standard III combines goal-based investing with a glide path that grows more conservative as tuition bills approach — so families can plan with confidence years before the first check is due, backed by the same research process behind every account we manage.',
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
    id: 'market-research',
    icon: Newspaper,
    title: 'Market Research',
    desc: 'Ongoing market commentary, investment research, and insights from our team.',
    image: '/images/service-market-research.jpg',
    storyTitle: 'Research you can actually use.',
    story: 'Markets move fast, and most commentary arrives too late to matter. Standard III\'s research combines bottom-up company work with macro and thematic context, delivered directly and without the noise — aimed at flagging emerging themes and cycle shifts before they become consensus, not repeating what everyone already knows.',
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
    storyTitle: 'A plan for every stage of retirement.',
    story: 'Retirement isn\'t one decision — it\'s a sequence of them, from the first dollar saved to the last one spent. Standard III builds an accumulation strategy sized to your time horizon, then transitions it into a disciplined withdrawal plan designed to make the money last and manage the tax impact along the way, across every account type you hold.',
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
    storyTitle: 'Investment management built to outlast you.',
    story: 'A trust is only as strong as the strategy managing it. Standard III provides disciplined, ongoing management of trust assets consistent with the trust\'s own terms, working directly alongside your estate attorney so the investment side of the plan stays aligned with the legal one — built for preserving and transferring wealth across generations, not just growing it.',
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

import { BarChart3, PiggyBank, Shield, Baby, Briefcase, Users, Newspaper } from 'lucide-react';

// Single source of truth for the firm's offerings — used by the Home page's
// "What We Offer" tabs, the Services page grid, each service's own detail
// page, and the header's "Our Approach" dropdown, so all four stay in sync.
export const services = [
  {
    id: 'individual-joint-investment-management',
    icon: BarChart3,
    title: 'Individual & Joint Investment Management',
    desc: 'Personalized, tax-aware portfolios built and managed to your goals and risk tolerance.',
    image: '/images/service-investment-management.jpg',
  },
  {
    id: 'retirement-planning-iras',
    icon: PiggyBank,
    title: 'Retirement Planning (IRAs)',
    desc: 'From building your nest egg to drawing it down — Traditional, Roth, SEP, and rollover strategies designed around your retirement.',
    image: '/images/service-retirement.jpg',
  },
  {
    id: 'trust-estate-coordination',
    icon: Shield,
    title: 'Trust & Estate Coordination',
    desc: 'Managing assets held in trust and working alongside your estate attorney to preserve what you\'ve built.',
    image: '/images/service-trust-estate.jpg',
  },
  {
    id: 'custodial-accounts-minors',
    icon: Baby,
    title: 'Custodial Accounts for Minors (UGMA/UTMA)',
    desc: 'Investing early for your children\'s education and future, with a plan that grows alongside them.',
    image: '/images/service-custodial.jpg',
  },
  {
    id: 'business-owner-entity-services',
    icon: Briefcase,
    title: 'Business Owner & Entity Services',
    desc: 'Corporate investment accounts and retirement plans (SEP, SIMPLE, Solo 401(k)) for founders and small businesses — from someone who runs one too.',
    image: '/images/service-business-owner.jpg',
  },
  {
    id: 'family-office-services',
    icon: Users,
    title: 'Family Office Services',
    desc: 'Coordinated, multi-account management for families building wealth across generations.',
    image: '/images/service-family-office.jpg',
  },
  {
    id: 'market-research-weekly-updates',
    icon: Newspaper,
    title: 'Market Research & Weekly Updates',
    desc: 'Regular market commentary and macro insights to keep you informed on the conditions shaping your portfolio.',
    image: '/images/service-market-research.jpg',
  },
];

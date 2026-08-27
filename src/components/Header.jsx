import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase, BookOpen, User, CalendarCheck, ChevronDown } from 'lucide-react';
import { useConsultation } from '../context/ConsultationContext';
import { services } from '../lib/servicesData';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isOverHero, setIsOverHero] = React.useState(false);
  const location = useLocation();
  const { openConsultationModal } = useConsultation();

  // Only the home page opens on a tall dark hero — go transparent with
  // light text while it's still behind the header, then morph back to the
  // default frosted-dark bar once scrolled past it. Every other page
  // (including the library-hero pages) keeps the plain, always-solid bar.
  React.useEffect(() => {
    if (location.pathname !== '/') {
      setIsOverHero(false);
      return;
    }
    // Kept low on purpose: the hero title has a parallax lift, so it moves
    // up through the header's screen position well before a large scroll
    // distance. The header needs its solid background in place before that
    // happens, or scrolled title text ghosts behind the transparent bar.
    const HERO_SCROLL_THRESHOLD = 180;
    const onScroll = () => setIsOverHero(window.scrollY < HERO_SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const navLinks = [
    { path: '/about',    label: 'Who We Are',   icon: User },
    {
      path: '/services',
      label: 'Our Approach',
      icon: Briefcase,
      children: services.map((s) => ({ path: `/services/${s.id}`, label: s.title })),
    },
    {
      path: '/insights',
      label: 'Learn',
      icon: BookOpen,
      children: [
        { path: '/insights/library', label: 'Library' },
        { path: '/insights/market-intelligence', label: 'Market Intelligence' },
      ],
    },
  ];

  const isActive = (path) => location.pathname === path;
  const isHome = location.pathname === '/';

  return (
    <header
      className={`header-sticky ${isOverHero ? 'header-sticky--transparent' : ''} ${
        !isHome ? 'header-sticky--light' : ''
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Clickable to Home */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <img src="/images/Logo2.png" alt="Standard III" className="brand-logo-img" />
            <span className="h3 brand-wordmark">
              Standard <span className="text-accent-primary">III</span>
            </span>
          </Link>

          {/* Desktop Navigation - Boxy Pills on Right */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const Icon = link.icon;
              if (link.children) {
                return (
                  <div key={link.path} className="nav-dropdown-wrap">
                    <Link
                      to={link.path}
                      className={`nav-pill ${isActive(link.path) ? 'active' : ''}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 nav-dropdown-caret" />
                    </Link>
                    <div className="nav-dropdown-menu">
                      {link.children.map((child) => (
                        <Link key={child.path} to={child.path} className="nav-dropdown-link">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-pill ${isActive(link.path) ? 'active' : ''}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            <button
              className="nav-pill subscribe-pill ml-4"
              onClick={openConsultationModal}
              data-testid="header-consultation-button"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Schedule a Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden btn-ghost p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="menu-icon-wrap">
              <Menu size={24} className={`menu-icon ${mobileMenuOpen ? 'is-hidden' : ''}`} />
              <X size={24} className={`menu-icon ${mobileMenuOpen ? '' : 'is-hidden'}`} />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-panel md:hidden ${mobileMenuOpen ? 'mobile-menu-panel-open' : ''}`}>
          <div className="py-4 border-t border-border-subtle">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <React.Fragment key={link.path}>
                    <Link
                      to={link.path}
                      className={`nav-pill ${isActive(link.path) ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </Link>
                    {link.children && (
                      <div className="nav-dropdown-mobile-list">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="nav-dropdown-mobile-link"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
              <button
                className="nav-pill subscribe-pill w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultationModal();
                }}
                data-testid="header-consultation-button-mobile"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Schedule a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

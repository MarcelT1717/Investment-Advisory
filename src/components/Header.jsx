import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CalendarCheck, ChevronDown } from 'lucide-react';
import { useConsultation } from '../context/ConsultationContext';
import { services } from '../lib/servicesData';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isOverHero, setIsOverHero] = React.useState(false);
  const location = useLocation();
  const { openConsultationModal } = useConsultation();

  // Home opens on a tall dark hero, and every other page (service detail,
  // and the shared angular navy .library-hero used by About/Services/
  // Insights/Market Intelligence/Library/Contact) opens on its own angular
  // navy hero — all go transparent with light text while still over the
  // hero, then morph back to the solid bar once scrolled past.
  React.useEffect(() => {
    if (location.pathname === '/') {
      // Kept low on purpose: the hero title has a parallax lift, so it
      // moves up through the header's screen position well before a large
      // scroll distance. The header needs its solid background in place
      // before that happens, or scrolled title text ghosts behind the
      // transparent bar.
      const HERO_SCROLL_THRESHOLD = 180;
      const onScroll = () => setIsOverHero(window.scrollY < HERO_SCROLL_THRESHOLD);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
    // No parallax on these heroes, so measure the actual rendered height
    // instead of guessing a fixed pixel threshold. Whichever angular hero
    // the current page rendered (service detail's .sd-hero-angular, or the
    // shared .library-hero-block elsewhere) drives the same behavior.
    const heroEl = document.querySelector('.sd-hero-angular, .library-hero-block');
    if (heroEl) {
      const threshold = heroEl.offsetHeight - 80;
      const onScroll = () => setIsOverHero(window.scrollY < threshold);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
    setIsOverHero(false);
    return undefined;
  }, [location.pathname]);

  // Flip to true to bring back the "Our Approach" dropdown listing every
  // individual service page — off for now since each service doesn't need
  // its own page in the nav yet, but the per-service routes/content stay
  // in place underneath.
  const SHOW_SERVICE_DROPDOWN = false;

  const navLinks = [
    { path: '/about',    label: 'Who We Are' },
    {
      path: '/services',
      label: 'Our Approach',
      ...(SHOW_SERVICE_DROPDOWN
        ? { children: services.map((s) => ({ path: `/services/${s.id}`, label: s.title })) }
        : {}),
    },
    {
      path: '/insights',
      label: 'Learn',
      children: [
        { path: '/insights/library', label: 'Library' },
        { path: '/insights/market-intelligence', label: 'Market Intelligence' },
      ],
    },
  ];

  const isActive = (path) => location.pathname === path;
  const isHome = location.pathname === '/';
  // Once scrolled past the hero (home/service-detail) or on any other page
  // (isOverHero never true there), the bar goes solid white with plain-text
  // nav links — same treatment everywhere, so home doesn't keep the boxed
  // pill style meant for sitting over a dark hero. The white-ink WG logo
  // disappears on that light background, so swap to the black-ink mark
  // whenever the header itself is light.
  const isLightHeader = !isOverHero;

  return (
    <header
      className={`header-sticky ${isOverHero ? 'header-sticky--transparent' : ''} ${
        isLightHeader ? 'header-sticky--light' : ''
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Clickable to Home */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <img
              src={isLightHeader ? '/images/logo-siii-monogram.png' : '/images/logo-siii-wg.png'}
              alt="Standard III"
              className="brand-logo-img"
            />
            <span className="h3 brand-wordmark">
              Standard <span className="text-accent-primary">III</span>
            </span>
          </Link>

          {/* Desktop Navigation - Boxy Pills on Right */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.path} className="nav-dropdown-wrap">
                    <Link
                      to={link.path}
                      className={`nav-pill ${isActive(link.path) ? 'active' : ''}`}
                    >
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
                return (
                  <React.Fragment key={link.path}>
                    <Link
                      to={link.path}
                      className={`nav-pill ${isActive(link.path) ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
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

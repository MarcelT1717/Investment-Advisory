import React, { useState, useRef, useEffect } from 'react';
import { PiggyBank, Target, TrendingUp, GraduationCap, Shield, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const GOALS = [
  { icon: PiggyBank, title: 'Retirement', desc: 'Income planning and withdrawal strategy for the retirement you want.' },
  { icon: Target, title: 'Short-Term Goals', desc: 'A home, a wedding, a big purchase — built into your plan without derailing the rest.' },
  { icon: TrendingUp, title: 'Wealth Growth', desc: 'Portfolio management focused on long-term, risk-aware growth.' },
  { icon: GraduationCap, title: 'Education Funding', desc: 'Planning ahead for tuition and education costs.' },
  { icon: Shield, title: 'Legacy & Estate', desc: 'Coordinated planning to help protect and pass on what you\'ve built.' },
  { icon: DollarSign, title: 'Tax-Efficient Investing', desc: 'Account placement and strategy aimed at improving after-tax returns.' },
];

const AUTOPLAY_MS = 4000;
const DRAG_THRESHOLD = 60;

// Shortest signed circular distance from `active` to `i`, over `len` items
function circularDiff(i, active, len) {
  let diff = i - active;
  if (diff > len / 2) diff -= len;
  if (diff < -len / 2) diff += len;
  return diff;
}

// variant="standalone" (default) — full interactive carousel with arrows/dots/drag, used on its own.
// variant="hero" — compact, non-interactive, autoplay-only decoration for the hero background.
// items — optional array of { icon, title, desc } to show instead of the default GOALS.
const GoalsCarousel = ({ variant = 'standalone', items }) => {
  const isHero = variant === 'hero';
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragRef = useRef({ startX: 0, active: false });
  const slides = items && items.length ? items : GOALS;
  const len = slides.length;

  const goTo = (i) => setActiveIndex(((i % len) + len) % len);
  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  // Autoplay — resets naturally whenever activeIndex changes (auto or manual).
  // Skipped entirely under prefers-reduced-motion; the carousel still works via clicks/drag.
  useEffect(() => {
    if (isDragging) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const t = setTimeout(() => setActiveIndex((i) => (i + 1) % len), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [activeIndex, isDragging, len]);

  const handlePointerDown = (e) => {
    dragRef.current = { startX: e.clientX, active: true };
    setIsDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.active) return;
    setDragOffset(e.clientX - dragRef.current.startX);
  };

  const endDrag = (e) => {
    if (!dragRef.current.active) return;
    const delta = e.clientX - dragRef.current.startX;
    dragRef.current.active = false;
    setDragOffset(0);
    setIsDragging(false);
    if (delta > DRAG_THRESHOLD) prev();
    else if (delta < -DRAG_THRESHOLD) next();
  };

  const spacing = isHero ? 148 : 230;
  const depth = isHero ? 0 : 150;

  const track = (
    <div
      className="goals-carousel-viewport"
      {...(!isHero && {
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: endDrag,
        onPointerLeave: endDrag,
      })}
      style={{ touchAction: 'pan-y', cursor: isHero ? 'default' : isDragging ? 'grabbing' : 'grab' }}
    >
      <div className="goals-carousel-track">
        {slides.map((goal, i) => {
          const diff = circularDiff(i, activeIndex, len);
          const abs = Math.abs(diff);
          // Hero variant: flat filmstrip, 3 cards visible (prev/active/next), no 3D fan.
          // Standalone variant: full coverflow, 5 cards visible.
          const visible = isHero ? abs <= 1 : abs <= 2;
          const Icon = goal.icon;

          const translateX = diff * spacing + (dragRef.current.active ? dragOffset * 0.6 : 0);
          const translateZ = isHero ? 0 : -abs * depth;
          const rotateY = isHero ? 0 : diff * -32;
          const scale = isHero ? (diff === 0 ? 1 : 0.94) : Math.max(1 - abs * 0.16, 0.55);
          const opacity = !visible ? 0 : isHero ? (diff === 0 ? 1 : 0.7) : Math.max(1 - abs * 0.4, 0);
          const zIndex = 10 - abs;

          return (
            <div
              key={goal.title}
              className={`goals-card ${isHero ? 'goals-card-compact' : ''} ${diff === 0 ? 'goals-card-active' : ''}`}
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                pointerEvents: !isHero && visible ? 'auto' : 'none',
                transition: dragRef.current.active ? 'opacity 0.3s ease' : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease',
              }}
              onClick={isHero ? undefined : (e) => {
                if (diff !== 0) { e.stopPropagation(); goTo(i); }
              }}
            >
              <div className="goals-card-icon">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="goals-card-title">{goal.title}</h3>
              {!isHero && <p className="goals-card-desc">{goal.desc}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );

  if (isHero) {
    return <div className="goals-carousel goals-carousel-hero">{track}</div>;
  }

  return (
    <div className="goals-carousel">
      <div className="goals-carousel-row">
        <button className="goals-arrow goals-arrow-left" onClick={prev} aria-label="Previous goal">
          <ChevronLeft className="w-5 h-5" />
        </button>

        {track}

        <button className="goals-arrow goals-arrow-right" onClick={next} aria-label="Next goal">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="goals-dots">
        {slides.map((goal, i) => (
          <button
            key={goal.title}
            className={`goals-dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${goal.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GoalsCarousel;

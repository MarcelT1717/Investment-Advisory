import React from 'react';
import { Calendar } from 'lucide-react';

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

// One auto-scrolling row. The item list is duplicated so the track can
// loop seamlessly at translateX(-50%) — the second half is a visually
// identical continuation of the first.
const CarouselRow = ({ items, direction }) => {
  const track = [...items, ...items];
  return (
    <div className="blog-carousel-row">
      <div className={`blog-carousel-track blog-carousel-track--${direction}`}>
        {track.map((item, i) => (
          <div key={`${item.id}-${i}`} className="blog-carousel-card">
            <div className="blog-carousel-card-image" style={{ backgroundImage: `url('${item.image}')` }}></div>
            <div className="blog-carousel-card-body">
              <span className="blog-carousel-card-category">{item.category}</span>
              <h3 className="blog-carousel-card-title">{item.title}</h3>
              <div className="blog-carousel-card-meta">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formatDate(item.date)}</span>
                <span className="blog-carousel-card-meta-dot">•</span>
                <span>{item.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Two independently auto-scrolling rows, drifting in opposite directions —
// a "two layer" marquee rather than a single click-through slider.
const BlogCarousel = ({ insights }) => {
  if (!insights?.length) return null;

  return (
    <section className="blog-carousel-section">
      <div className="container">
        <div className="sd-section-label">From The Blog</div>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Market Commentary &amp; Insights</h2>
      </div>
      <div className="blog-carousel">
        <CarouselRow items={insights} direction="left" />
        <CarouselRow items={[...insights].reverse()} direction="right" />
      </div>
    </section>
  );
};

export default BlogCarousel;

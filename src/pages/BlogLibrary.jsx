import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, Tag, Search, Filter, ArrowLeft } from 'lucide-react';
import { insights } from '../lib/insightsData';
import HeroParallaxPhoto from '../components/HeroParallaxPhoto';

const BlogLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(
    () => [...new Set(insights.map((item) => item.category))],
    []
  );

  const filteredInsights = insights.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      <section className="library-hero">
        <div className="library-hero-block">
          <div className="container">
            <div className="library-hero-grid">
              <div className="library-hero-content">
                <div className="library-hero-breadcrumb">Learn / Library</div>
                <h1 className="library-hero-title">Library</h1>
                <p className="library-hero-subtitle">
                  The full archive of commentary on markets, financial planning, and the economy
                </p>
                <p className="body-sm text-text-muted mt-2">
                  Sample commentary shown below — check back as new posts are published.
                </p>
              </div>
              <HeroParallaxPhoto image="/images/service-market-research.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="library-filters-section">
        <div className="container">
          <div className="library-filters">
            {/* Search */}
            <div className="library-search">
              <Search className="library-search-icon" size={20} />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="library-search-input"
                data-testid="library-search"
              />
            </div>

            {/* Category Filter */}
            <div className="library-category-filter">
              <Filter className="mr-2" size={18} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="library-category-select"
                data-testid="library-category-filter"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="library-content">
        <div className="container">
          {filteredInsights.length === 0 ? (
            <div className="library-empty">
              <FileText size={64} className="text-text-muted mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Insights Found</h3>
              <p className="text-text-muted">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="library-grid">
              {filteredInsights.map((item, i) => (
                <div
                  key={item.id}
                  className="library-card"
                  style={{ animationDelay: `${Math.min(i, 8) * 0.06}s` }}
                  data-testid={`insight-card-${item.id}`}
                >
                  <div className="library-card-preview">
                    <div
                      className="library-card-cover"
                      style={{ backgroundImage: `url('${item.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}
                    ></div>
                  </div>

                  <div className="library-card-content">
                    <div className="library-card-category">
                      <Tag size={14} />
                      <span>{item.category}</span>
                    </div>

                    <h3 className="library-card-title">{item.title}</h3>

                    <p className="library-card-description">{item.description}</p>

                    <div className="library-card-footer">
                      <div className="library-card-date">
                        <Calendar size={14} />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <span className="body-sm text-text-muted">{item.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="container pb-16">
        <Link to="/insights" className="about-intro-link" style={{ display: 'inline-flex' }}>
          <ArrowLeft className="w-4 h-4" />
          Back to Learn
        </Link>
      </div>
    </div>
  );
};

export default BlogLibrary;

import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, Lock, CheckCircle2 } from 'lucide-react';
import {
  academyCategories, chartPatterns, chartPatternTypes,
  technicalIndicators, indicatorCategories,
  priceActionTools, priceActionCategories,
} from '../lib/academyData';
import PatternIllustration from './PatternIllustration';

const difficultyTagClass = {
  Beginner: 'academy-tag academy-tag--beginner',
  Intermediate: 'academy-tag academy-tag--intermediate',
  Advanced: 'academy-tag academy-tag--advanced',
};

const buildSections = () => academyCategories.map((cat) => {
  if (cat.id === 'chart-patterns') {
    return {
      ...cat,
      groups: chartPatternTypes.map((type) => ({
        label: type,
        items: chartPatterns.filter((p) => p.type === type).map((p) => ({ ...p, kind: 'pattern' })),
      })),
    };
  }
  if (cat.id === 'technical-indicators') {
    return {
      ...cat,
      groups: indicatorCategories.map((c) => ({
        label: c,
        items: technicalIndicators.filter((i) => i.category === c).map((i) => ({ ...i, kind: 'indicator' })),
      })),
    };
  }
  if (cat.id === 'price-action-tools') {
    return {
      ...cat,
      groups: priceActionCategories.map((c) => ({
        label: c,
        items: priceActionTools.filter((i) => i.category === c).map((i) => ({ ...i, kind: 'tool' })),
      })),
    };
  }
  return { ...cat, groups: [] };
});

const firstItemOf = (category) => {
  const group = category.groups[0];
  const item = group?.items[0];
  return item ? { ...item, categoryTitle: category.title, groupLabel: group.label } : null;
};

const openAllGroups = (category) => {
  const open = {};
  category.groups.forEach((g) => { open[g.label] = true; });
  return open;
};

// Topic tabs across the top pick one Academy category at a time; the
// sidebar below only ever lists that category's groups/items, so
// switching topics swaps the whole scrollable list instead of adding to
// one giant list of every category stacked together.
const AcademyExplorer = ({ defaultCategoryId = 'chart-patterns' }) => {
  const sections = useMemo(buildSections, []);
  const defaultCategory = sections.find((s) => s.id === defaultCategoryId) || sections[0];

  const [activeCategoryId, setActiveCategoryId] = useState(defaultCategory.id);
  const [selected, setSelected] = useState(() => firstItemOf(defaultCategory));
  const [openGroups, setOpenGroups] = useState(() => openAllGroups(defaultCategory));

  const activeCategory = sections.find((s) => s.id === activeCategoryId) || defaultCategory;
  const locked = activeCategory.status === 'coming-soon';

  const handleTabClick = (section) => {
    if (section.status === 'coming-soon' || section.id === activeCategoryId) return;
    setActiveCategoryId(section.id);
    setOpenGroups(openAllGroups(section));
    setSelected(firstItemOf(section));
  };

  const toggleGroup = (label) => setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <div className="academy-explorer">
      <div className="academy-topic-tabs" role="tablist">
        {sections.map((section) => {
          const SectionIcon = section.icon;
          const isActive = section.id === activeCategoryId;
          const sectionLocked = section.status === 'coming-soon';
          return (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              disabled={sectionLocked}
              className={`academy-topic-tab ${isActive ? 'is-active' : ''} ${sectionLocked ? 'is-locked' : ''}`}
              onClick={() => handleTabClick(section)}
            >
              <span className="academy-topic-tab-icon">
                <SectionIcon className="w-4 h-4" />
              </span>
              <span className="academy-topic-tab-label">{section.title}</span>
              {sectionLocked && (
                <span className="academy-topic-tab-locked-tag">
                  <Lock className="w-3 h-3" />
                  Soon
                </span>
              )}
            </button>
          );
        })}
      </div>

      {locked ? (
        <div className="academy-topic-empty">
          <span className="academy-topic-empty-icon">
            <Lock className="w-5 h-5" />
          </span>
          <h3 className="academy-topic-empty-title">{activeCategory.title}</h3>
          <p className="academy-topic-empty-desc">{activeCategory.desc}</p>
        </div>
      ) : (
        <div className="academy-layout">
          <aside className="academy-sidebar">
            <div className="academy-sidebar-category-body">
              {activeCategory.groups.map((group) => (
                <div key={group.label} className="academy-sidebar-group">
                  <button
                    type="button"
                    className="academy-sidebar-group-header"
                    onClick={() => toggleGroup(group.label)}
                    aria-expanded={!!openGroups[group.label]}
                  >
                    <span className="academy-sidebar-group-label">{group.label}</span>
                    <span className="academy-sidebar-group-count">{group.items.length}</span>
                    <ChevronDown
                      className={`w-4 h-4 academy-sidebar-chevron ${openGroups[group.label] ? 'is-open' : ''}`}
                    />
                  </button>
                  <div className={`academy-sidebar-group-list ${openGroups[group.label] ? 'is-open' : ''}`}>
                    <div className="academy-sidebar-group-list-inner">
                      {group.items.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className={`academy-sidebar-item ${selected?.id === item.id ? 'is-active' : ''}`}
                          onClick={() => setSelected({ ...item, categoryTitle: activeCategory.title, groupLabel: group.label })}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {selected && (() => {
            const owningGroup = activeCategory.groups.find((g) => g.label === selected.groupLabel);
            const relatedItems = (owningGroup?.items || []).filter((item) => item.id !== selected.id);

            return (
              <div className="academy-detail-panel" key={selected.id}>
                <div className="academy-detail-grid">
                  <div className="pattern-illustration-frame">
                    <PatternIllustration patternId={selected.id} />
                  </div>
                  <div className="academy-detail-body">
                    <div className="academy-detail-breadcrumb">
                      {selected.categoryTitle}
                      <ChevronRight className="w-3.5 h-3.5" />
                      {selected.groupLabel}
                    </div>
                    <div className="pattern-card-tags" style={{ marginBottom: 16 }}>
                      {selected.kind === 'pattern' ? (
                        <>
                          <span className="academy-tag academy-tag--neutral">{selected.type}</span>
                          <span className={difficultyTagClass[selected.difficulty]}>{selected.difficulty}</span>
                        </>
                      ) : (
                        <span className="academy-tag academy-tag--neutral">{selected.category}</span>
                      )}
                    </div>
                    <h2 className="academy-detail-title">{selected.name}</h2>
                    <p className="academy-detail-desc">{selected.description || selected.desc}</p>
                    {selected.keyPoints && selected.keyPoints.length > 0 && (
                      <ul className="academy-keypoints">
                        {selected.keyPoints.map((point) => (
                          <li key={point} className="academy-keypoint">
                            <CheckCircle2 className="w-4 h-4 academy-keypoint-icon" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {relatedItems.length > 0 && (
                  <div className="academy-detail-related">
                    <span className="academy-detail-related-label">More in {selected.groupLabel}</span>
                    <div className="academy-detail-related-list">
                      {relatedItems.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className="academy-related-pill"
                          onClick={() => setSelected({
                            ...item,
                            categoryTitle: selected.categoryTitle,
                            groupLabel: selected.groupLabel,
                          })}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default AcademyExplorer;

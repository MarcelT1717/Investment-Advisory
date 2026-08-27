import React, { useMemo, useState } from 'react';
import { ChevronDown, Lock } from 'lucide-react';
import {
  academyCategories, chartPatterns, chartPatternTypes,
  technicalIndicators, indicatorCategories,
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
  return { ...cat, groups: [] };
});

// Sidebar + detail-panel "scroll" through every Academy category — used
// embedded directly on the Learn page. Selecting a leaf swaps the
// right-hand panel in place; nothing here ever navigates to a new page.
const AcademyExplorer = ({ defaultCategoryId = 'chart-patterns' }) => {
  const sections = useMemo(buildSections, []);
  const defaultCategory = sections.find((s) => s.id === defaultCategoryId) || sections[0];
  const defaultItem = defaultCategory.groups.flatMap((g) => g.items)[0];

  const [selected, setSelected] = useState(defaultItem);
  const [openCategories, setOpenCategories] = useState(() => ({ [defaultCategory.id]: true }));
  const [openGroups, setOpenGroups] = useState(() => {
    const all = {};
    sections.forEach((s) => s.groups.forEach((g) => { all[`${s.id}::${g.label}`] = true; }));
    return all;
  });

  const toggleCategory = (id) => setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleGroup = (key) => setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="academy-layout">
      <aside className="academy-sidebar">
        {sections.map((section) => {
          const SectionIcon = section.icon;
          const locked = section.status === 'coming-soon';
          return (
            <div
              key={section.id}
              className={`academy-sidebar-category ${locked ? 'academy-sidebar-category--locked' : ''}`}
            >
              <button
                type="button"
                className="academy-sidebar-category-header"
                onClick={() => !locked && toggleCategory(section.id)}
                aria-expanded={!locked && !!openCategories[section.id]}
                disabled={locked}
              >
                <span className="academy-sidebar-category-icon">
                  <SectionIcon className="w-4 h-4" />
                </span>
                <span className="academy-sidebar-category-label">{section.title}</span>
                <span className="academy-sidebar-category-count">{section.count}</span>
                {locked ? (
                  <Lock className="w-3.5 h-3.5 text-text-muted" />
                ) : (
                  <ChevronDown
                    className={`w-4 h-4 academy-sidebar-chevron ${openCategories[section.id] ? 'is-open' : ''}`}
                  />
                )}
              </button>

              {!locked && (
                <div className={`academy-sidebar-group-list ${openCategories[section.id] ? 'is-open' : ''}`}>
                  <div className="academy-sidebar-group-list-inner academy-sidebar-category-body">
                    {section.groups.map((group) => {
                      const groupKey = `${section.id}::${group.label}`;
                      return (
                        <div key={groupKey} className="academy-sidebar-group">
                          <button
                            type="button"
                            className="academy-sidebar-group-header"
                            onClick={() => toggleGroup(groupKey)}
                            aria-expanded={!!openGroups[groupKey]}
                          >
                            <span>{group.label}</span>
                            <ChevronDown
                              className={`w-4 h-4 academy-sidebar-chevron ${openGroups[groupKey] ? 'is-open' : ''}`}
                            />
                          </button>
                          <div className={`academy-sidebar-group-list ${openGroups[groupKey] ? 'is-open' : ''}`}>
                            <div className="academy-sidebar-group-list-inner">
                              {group.items.map((item) => (
                                <button
                                  key={item.id}
                                  type="button"
                                  className={`academy-sidebar-item ${selected?.id === item.id ? 'is-active' : ''}`}
                                  onClick={() => setSelected(item)}
                                >
                                  {item.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </aside>

      {selected && (
        <div className="academy-detail-panel" key={selected.id}>
          <div className="pattern-illustration-frame">
            <PatternIllustration patternId={selected.id} />
          </div>
          <div className="academy-detail-body">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademyExplorer;

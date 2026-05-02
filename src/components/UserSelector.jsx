import { USER_TYPES } from '../data/flows.js';

/**
 * UserSelector — The first screen users see.
 * Presents a question and 4 user-type cards to choose from.
 */

/* SVG icons for each card type */
const icons = {
  'first-time': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
  ),
  'not-registered': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
  ),
  'already-registered': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  ),
  exploring: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
};

export default function UserSelector({ onSelect }) {
  return (
    <section className="user-selector" id="user-selector">
      <div className="selector-hero">
        <h2 className="selector-title">What best describes you?</h2>
        <p className="selector-subtitle">
          Choose the option that fits, and we'll guide you through everything
          you need to know about the voting process.
        </p>
      </div>

      <div className="selector-grid">
        {USER_TYPES.map((type) => (
          <button
            key={type.id}
            className="selector-card"
            onClick={() => onSelect(type.id)}
            id={`select-${type.id}`}
          >
            <div className="card-icon-wrapper">
              {icons[type.id]}
            </div>
            <h3 className="card-label">{type.label}</h3>
            <p className="card-desc">{type.description}</p>
            <span className="card-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

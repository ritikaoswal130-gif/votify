import { useState } from 'react';
import { READINESS_ITEMS } from '../data/flows.js';

/**
 * ReadinessTracker — Checklist to determine if the user is "Ready to Vote".
 */
export default function ReadinessTracker({ onBack }) {
  const [checked, setChecked] = useState({});

  const handleToggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const totalItems = READINESS_ITEMS.length;
  const percentage = Math.round((totalChecked / totalItems) * 100);
  const isReady = totalChecked === totalItems;

  return (
    <section className="readiness-section" id="readiness-section">
      <div className="flow-header">
        <button className="btn btn-ghost" onClick={onBack} id="readiness-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back
        </button>
      </div>

      <div className="readiness-hero">
        <h2>Readiness Tracker</h2>
        <p>Check off each item to see if you're ready to vote.</p>
      </div>

      {/* Circular progress */}
      <div className="readiness-gauge">
        <svg viewBox="0 0 120 120" className="gauge-svg">
          <circle cx="60" cy="60" r="52" fill="none" stroke="var(--surface-2)" strokeWidth="10" />
          <circle
            cx="60" cy="60" r="52" fill="none"
            stroke={isReady ? 'var(--success)' : 'var(--primary)'}
            strokeWidth="10"
            strokeDasharray={`${2 * Math.PI * 52}`}
            strokeDashoffset={`${2 * Math.PI * 52 * (1 - percentage / 100)}`}
            strokeLinecap="round"
            className="gauge-progress"
          />
        </svg>
        <div className="gauge-label">
          <span className="gauge-percent">{percentage}%</span>
          <span className="gauge-sub">Complete</span>
        </div>
      </div>

      {/* Status badge */}
      <div className={`readiness-status ${isReady ? 'ready' : 'not-ready'}`} id="readiness-status">
        {isReady ? 'Ready to Vote' : 'Not Ready Yet'}
      </div>

      {/* Checklist */}
      <div className="checklist">
        {READINESS_ITEMS.map((item) => (
          <label
            key={item.id}
            className={`checklist-item ${checked[item.id] ? 'checked' : ''}`}
            id={`check-${item.id}`}
          >
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={!!checked[item.id]}
                onChange={() => handleToggle(item.id)}
              />
              <div className="custom-checkbox">
                {checked[item.id] && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                )}
              </div>
            </div>
            <div className="checklist-text">
              <span className="checklist-label">{item.label}</span>
              <span className="checklist-desc">{item.description}</span>
            </div>
          </label>
        ))}
      </div>

      {isReady && (
        <div className="confetti-message">
          <h3>Congratulations!</h3>
          <p>You're fully prepared to exercise your democratic right. Go make your vote count!</p>
        </div>
      )}
    </section>
  );
}

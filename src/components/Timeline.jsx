import { TIMELINE_EVENTS } from '../data/flows.js';

/**
 * Timeline — Visual election timeline showing key phases.
 */
export default function Timeline({ onBack }) {
  return (
    <section className="timeline-section" id="timeline-section">
      <div className="flow-header">
        <button className="btn btn-ghost" onClick={onBack} id="timeline-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back
        </button>
      </div>

      <div className="timeline-hero">
        <h2>Election Timeline</h2>
        <p>Key phases of the election process from start to finish.</p>
      </div>

      <div className="timeline">
        {TIMELINE_EVENTS.map((event, index) => (
          <div
            key={event.id}
            className="timeline-item"
            id={`timeline-${event.id}`}
          >
            <div className="timeline-connector">
              <div className="timeline-dot">
                <span className="timeline-dot-num">{index + 1}</span>
              </div>
              {index < TIMELINE_EVENTS.length - 1 && (
                <div className="timeline-line" />
              )}
            </div>
            <div className="timeline-card">
              <span className="timeline-phase-badge">{event.phase}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

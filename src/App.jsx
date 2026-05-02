import { useState, useCallback } from 'react';
import UserSelector from './components/UserSelector.jsx';
import StepFlow from './components/StepFlow.jsx';
import Timeline from './components/Timeline.jsx';
import ReadinessTracker from './components/ReadinessTracker.jsx';
import { FLOWS, USER_TYPES } from './data/flows.js';

/**
 * App.jsx — Root component for Votify.
 * Manages the current screen, selected user type, and Gemini API key.
 */

/* Inline SVG icons for the navbar */
const IconHome = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const IconGuide = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const IconTimeline = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);
const IconReadiness = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const IconKey = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
);

export default function App() {
  const [screen, setScreen] = useState('selector');
  const [userType, setUserType] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);

  const handleUserSelect = useCallback((typeId) => {
    setUserType(typeId);
    setScreen('flow');
  }, []);

  const handleBack = useCallback(() => {
    if (screen === 'flow') {
      setScreen('selector');
      setUserType(null);
    } else {
      setScreen('flow');
    }
  }, [screen]);

  const handleGoHome = useCallback(() => {
    setScreen('selector');
    setUserType(null);
  }, []);
  const handleGoToTimeline = useCallback(() => setScreen('timeline'), []);
  const handleGoToReadiness = useCallback(() => setScreen('readiness'), []);
  const handleGoToFlow = useCallback(() => setScreen('flow'), []);

  const selectedType = USER_TYPES.find((t) => t.id === userType);
  const currentFlow = userType ? FLOWS[userType] : [];

  return (
    <div className="app">
      {/* Decorative background blobs */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />

      {/* Header / Navigation */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo" onClick={handleGoHome} role="button" tabIndex={0} id="logo-home">
            <div className="logo-mark">V</div>
            <h1>Votify</h1>
          </div>

          <nav className="main-nav" id="main-nav">
            <button
              className={`nav-link ${screen === 'selector' && !userType ? 'active' : ''}`}
              onClick={handleGoHome}
              id="nav-home"
            >
              <IconHome />
              <span>Home</span>
            </button>

            {userType && (
              <>
                <button
                  className={`nav-link ${screen === 'flow' ? 'active' : ''}`}
                  onClick={handleGoToFlow}
                  id="nav-guide"
                >
                  <IconGuide />
                  <span>Guide</span>
                </button>
                <button
                  className={`nav-link ${screen === 'timeline' ? 'active' : ''}`}
                  onClick={handleGoToTimeline}
                  id="nav-timeline"
                >
                  <IconTimeline />
                  <span>Timeline</span>
                </button>
                <button
                  className={`nav-link ${screen === 'readiness' ? 'active' : ''}`}
                  onClick={handleGoToReadiness}
                  id="nav-readiness"
                >
                  <IconReadiness />
                  <span>Readiness</span>
                </button>
              </>
            )}
          </nav>

          <button
            className={`nav-link api-key-btn ${apiKey ? 'has-key' : ''}`}
            onClick={() => setShowApiKeyModal(true)}
            title="Set Gemini API Key"
            id="nav-api-key"
          >
            <IconKey />
            <span className="api-key-label">{apiKey ? 'Key Set' : 'API Key'}</span>
          </button>
        </div>
      </header>

      {/* API Key Modal */}
      {showApiKeyModal && (
        <div className="modal-overlay" onClick={() => setShowApiKeyModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Gemini API Key</h2>
            <p className="modal-desc">
              Enter your Google Gemini API key to enable AI-powered explanations
              on each step. Your key is stored only in this browser session.
            </p>
            <input
              type="password"
              className="api-key-input"
              placeholder="Paste your API key here..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              id="api-key-input"
            />
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={() => setShowApiKeyModal(false)} id="api-key-cancel">
                Cancel
              </button>
              <button className="btn btn-primary" onClick={() => setShowApiKeyModal(false)} id="api-key-save">
                Save Key
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="app-main">
        {screen === 'selector' && <UserSelector onSelect={handleUserSelect} />}
        {screen === 'flow' && (
          <StepFlow
            steps={currentFlow}
            userType={selectedType}
            apiKey={apiKey}
            onBack={handleBack}
            onGoTimeline={handleGoToTimeline}
            onGoReadiness={handleGoToReadiness}
          />
        )}
        {screen === 'timeline' && <Timeline onBack={handleBack} />}
        {screen === 'readiness' && <ReadinessTracker onBack={handleBack} />}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Votify — Empowering every citizen to vote with confidence.</p>
      </footer>
    </div>
  );
}

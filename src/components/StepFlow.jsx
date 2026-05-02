import { useState } from 'react';
import { explainStep } from '../services/geminiService.js';

/**
 * StepFlow — Displays the step-by-step guide for the selected user type.
 * Each step can be expanded and has an "Explain this simply" AI button.
 */
export default function StepFlow({
  steps,
  userType,
  apiKey,
  onBack,
  onGoTimeline,
  onGoReadiness,
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [aiExplanations, setAiExplanations] = useState({});
  const [loadingAI, setLoadingAI] = useState(null);
  const [aiError, setAiError] = useState(null);

  const progress = ((completedSteps.size) / steps.length) * 100;

  const handleComplete = (stepIndex) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepIndex)) {
        next.delete(stepIndex);
      } else {
        next.add(stepIndex);
      }
      return next;
    });
  };

  const handleExplain = async (stepIndex) => {
    if (aiExplanations[stepIndex]) return;
    setLoadingAI(stepIndex);
    setAiError(null);

    try {
      const step = steps[stepIndex];
      const result = await explainStep(step.title, step.explanation, apiKey);
      setAiExplanations((prev) => ({ ...prev, [stepIndex]: result }));
    } catch (err) {
      setAiError(err.message);
    } finally {
      setLoadingAI(null);
    }
  };

  return (
    <section className="step-flow" id="step-flow">
      {/* Header bar */}
      <div className="flow-header">
        <button className="btn btn-ghost" onClick={onBack} id="flow-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back
        </button>
        <div className="flow-type-badge">
          <span>{userType?.label}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="progress-text">
          {completedSteps.size} of {steps.length} steps completed
        </span>
      </div>

      {/* Steps */}
      <div className="steps-container">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = completedSteps.has(index);

          return (
            <div
              key={index}
              className={`step-card ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
              id={`step-card-${index}`}
            >
              <button
                className="step-header"
                onClick={() => setActiveStep(index)}
                id={`step-toggle-${index}`}
              >
                <div className="step-number-ring">
                  {isCompleted ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <span>{step.step}</span>
                  )}
                </div>
                <div className="step-header-text">
                  <h3>{step.title}</h3>
                </div>
                <span className={`step-chevron ${isActive ? 'open' : ''}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </button>

              {isActive && (
                <div className="step-body">
                  <div className="step-section">
                    <h4>What is this?</h4>
                    <p>{step.explanation}</p>
                  </div>
                  <div className="step-section">
                    <h4>What should I do?</h4>
                    <p className="step-instruction">{step.instruction}</p>
                  </div>

                  <div className="ai-section">
                    <button
                      className="btn btn-ai"
                      onClick={() => handleExplain(index)}
                      disabled={loadingAI === index || !!aiExplanations[index]}
                      id={`ai-explain-${index}`}
                    >
                      {loadingAI === index ? (
                        <><span className="spinner" /> Thinking...</>
                      ) : aiExplanations[index] ? (
                        'Explained below'
                      ) : (
                        'Explain this simply'
                      )}
                    </button>

                    {aiExplanations[index] && (
                      <div className="ai-result">
                        <div className="ai-result-header">AI Explanation</div>
                        <p>{aiExplanations[index]}</p>
                      </div>
                    )}

                    {aiError && loadingAI === null && !aiExplanations[index] && (
                      <div className="ai-error">
                        <p>{aiError}</p>
                      </div>
                    )}
                  </div>

                  <button
                    className={`btn ${isCompleted ? 'btn-completed' : 'btn-primary'}`}
                    onClick={() => handleComplete(index)}
                    id={`mark-complete-${index}`}
                  >
                    {isCompleted ? 'Completed — Undo' : 'Mark as Complete'}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation to other sections */}
      <div className="flow-footer">
        <button className="btn btn-outline" onClick={onGoTimeline} id="go-timeline">
          View Election Timeline
        </button>
        <button className="btn btn-primary" onClick={onGoReadiness} id="go-readiness">
          Check My Readiness
        </button>
      </div>
    </section>
  );
}

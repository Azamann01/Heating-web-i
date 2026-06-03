import { useState } from "react";
import { HOW_IT_WORKS_STEPS } from "../constants/data";
 
/**
 * HowItWorks
 * 4-step process with:
 * - Sidebar step list (clickable)
 * - Animated detail panel on step change
 * - Prev / Next navigation inside the panel
 */
export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const step = HOW_IT_WORKS_STEPS[activeStep];
 
  return (
    <section id="how-it-works" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
 
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 12 }}>
            THE PROCESS
          </p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px,5vw,54px)", letterSpacing: "-0.03em" }}>
            How HeatIQ works
          </h2>
        </div>
 
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32, alignItems: "start" }}>
 
          {/* ── Step list sidebar ─────────────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {HOW_IT_WORKS_STEPS.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                style={{
                  background:   activeStep === i ? "var(--card)" : "transparent",
                  border:       activeStep === i ? "0.5px solid var(--accent)" : "0.5px solid transparent",
                  borderRadius: 8,
                  padding:      "16px",
                  cursor:       "pointer",
                  textAlign:    "left",
                  transition:   "all 0.2s",
                  display:      "flex",
                  alignItems:   "center",
                  gap:          14,
                }}
              >
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: activeStep === i ? "var(--accent)" : "var(--muted)" }}>
                  {s.num}
                </span>
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <span style={{ fontSize: 14, fontWeight: activeStep === i ? 500 : 400, color: activeStep === i ? "var(--text)" : "var(--muted)", transition: "color 0.2s" }}>
                  {s.title}
                </span>
                {activeStep === i && (
                  <span style={{ marginLeft: "auto", color: "var(--accent)", fontSize: 14 }}>→</span>
                )}
              </button>
            ))}
          </div>
 
          {/* ── Step detail panel ─────────────────────────────────────── */}
          <div
            key={activeStep}
            style={{
              background:   "var(--card)",
              border:       "0.5px solid var(--border)",
              borderRadius: 12,
              padding:      "2.5rem",
              animation:    "slideIn 0.3s ease",
            }}
          >
            {/* Step header */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "1.5rem" }}>
              <span style={{ fontSize: 48 }}>{step.icon}</span>
              <div>
                <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em" }}>
                  STEP {step.num}
                </p>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, letterSpacing: "-0.02em", marginTop: 2 }}>
                  {step.title}
                </h3>
              </div>
            </div>
 
            {/* Detail copy */}
            <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: 15, marginBottom: "2rem" }}>
              {step.detail}
            </p>
 
            {/* Key metric */}
            <div style={{ background: "var(--surface)", borderRadius: 8, padding: "1.25rem", display: "flex", gap: 8, alignItems: "baseline", marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 36, color: "var(--accent)" }}>{step.metric}</span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>{step.metricLabel}</span>
            </div>
 
            {/* Navigation */}
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => setActiveStep(i => Math.max(0, i - 1))}
                disabled={activeStep === 0}
                style={{
                  background:   "var(--surface)",
                  border:       "0.5px solid var(--border)",
                  color:        "var(--text)",
                  padding:      "10px 20px",
                  borderRadius: 6,
                  cursor:       activeStep === 0 ? "not-allowed" : "pointer",
                  opacity:      activeStep === 0 ? 0.3 : 1,
                  fontSize:     14,
                  fontFamily:   "var(--sans)",
                  transition:   "opacity 0.2s",
                }}
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveStep(i => Math.min(HOW_IT_WORKS_STEPS.length - 1, i + 1))}
                disabled={activeStep === HOW_IT_WORKS_STEPS.length - 1}
                style={{
                  background:   activeStep === HOW_IT_WORKS_STEPS.length - 1 ? "var(--surface)" : "var(--accent)",
                  border:       "none",
                  color:        activeStep === HOW_IT_WORKS_STEPS.length - 1 ? "var(--text)" : "#000",
                  padding:      "10px 20px",
                  borderRadius: 6,
                  cursor:       activeStep === HOW_IT_WORKS_STEPS.length - 1 ? "not-allowed" : "pointer",
                  opacity:      activeStep === HOW_IT_WORKS_STEPS.length - 1 ? 0.3 : 1,
                  fontSize:     14,
                  fontFamily:   "var(--sans)",
                  fontWeight:   500,
                  transition:   "all 0.2s",
                }}
              >
                Next →
              </button>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
};
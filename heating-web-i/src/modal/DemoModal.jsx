import { useState } from "react";
 
/**
 * DemoModal
 * Slide-up overlay triggered by "Get early access" / "Check my heat pump" CTAs.
 * Collects email, brand, and postcode — simulates form submission.
 * Close by clicking the backdrop or the ✕ button.
 */
export default function DemoModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
 
  const fields = [
    { label: "Email address",              placeholder: "you@example.com",      type: "email" },
    { label: "Heat pump brand",            placeholder: "e.g. Vaillant, Daikin…", type: "text" },
    { label: "Postcode (for regional data)", placeholder: "e.g. SW1A 1AA",       type: "text" },
  ];
 
  return (
    <div
      onClick={onClose}
      style={{
        position:       "fixed",
        inset:          0,
        background:     "rgba(0,0,0,0.85)",
        zIndex:         300,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background:   "var(--card)",
          border:       "0.5px solid var(--accent)",
          borderRadius: 16,
          padding:      "2.5rem",
          maxWidth:     480,
          width:        "90%",
          position:     "relative",
          animation:    "countUp 0.3s ease",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position:   "absolute",
            top:        16,
            right:      16,
            background: "none",
            border:     "none",
            color:      "var(--muted)",
            cursor:     "pointer",
            fontSize:   22,
            lineHeight: 1,
          }}
          aria-label="Close modal"
        >✕</button>
 
        {!submitted ? (
          <>
            <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 12 }}>
              EARLY ACCESS
            </p>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 30, letterSpacing: "-0.02em", marginBottom: 8 }}>
              Check your heat pump
            </h3>
            <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: "1.5rem", lineHeight: 1.7 }}>
              We'll connect to your manufacturer's cloud platform, diagnose your system's performance, and show you exactly how much efficiency you're losing — and what it's costing you.
            </p>
 
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: "1.5rem" }}>
              {fields.map(({ label, placeholder, type }) => (
                <div key={label}>
                  <label style={{ display: "block", fontSize: 12, color: "var(--muted)", marginBottom: 6, fontFamily: "var(--mono)" }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    style={{
                      width:        "100%",
                      padding:      "11px 14px",
                      borderRadius: 6,
                      border:       "0.5px solid var(--border)",
                      background:   "var(--surface)",
                      color:        "var(--text)",
                      fontFamily:   "var(--sans)",
                      fontSize:     14,
                      outline:      "none",
                      transition:   "border-color 0.2s",
                    }}
                    onFocus={e  => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e   => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
              ))}
            </div>
 
            <button
              onClick={() => setSubmitted(true)}
              style={{
                width:        "100%",
                background:   "var(--accent)",
                color:        "#000",
                border:       "none",
                padding:      "14px",
                borderRadius: 6,
                fontSize:     15,
                fontWeight:   600,
                cursor:       "pointer",
                fontFamily:   "var(--sans)",
                transition:   "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--accent-dim)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--accent)"}
            >
              Request my free diagnosis →
            </button>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "1rem 0", animation: "countUp 0.4s ease" }}>
            <p style={{ fontSize: 48, marginBottom: 16 }}>✅</p>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 26, marginBottom: 8 }}>Request received!</h3>
            <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              We'll be in touch within 48 hours with your free SPF diagnosis and onboarding link. Check your spam folder if you don't hear from us.
            </p>
            <button
              onClick={onClose}
              style={{
                background:   "var(--surface)",
                border:       "0.5px solid var(--border)",
                color:        "var(--text)",
                padding:      "10px 24px",
                borderRadius: 6,
                cursor:       "pointer",
                fontSize:     14,
                fontFamily:   "var(--sans)",
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
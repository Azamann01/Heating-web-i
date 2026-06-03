import { useState } from "react";
import { PRICING_PLANS } from "../constants/data";
 
/**
 * PricingSection
 * Three-tier pricing with:
 * - Monthly / annual toggle (20% discount)
 * - Clickable plan card selection
 * - CTA triggers waitlist modal per plan
 */
export default function PricingSection() {
  const [annual,      setAnnual]      = useState(false);
  const [selected,    setSelected]    = useState("core");
  const [showConfirm, setShowConfirm] = useState(null); // plan id | null
 
  return (
    <section id="pricing" style={{ padding: "6rem 2rem", background: "var(--surface)", borderTop: "0.5px solid var(--border)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
 
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 12 }}>
            PRICING
          </p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px,5vw,54px)", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
            Simple, transparent pricing
          </h2>
 
          {/* Annual toggle */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "var(--card)", border: "0.5px solid var(--border)", borderRadius: 20, padding: "6px 16px" }}>
            <span style={{ fontSize: 13, color: annual ? "var(--muted)" : "var(--text)" }}>Monthly</span>
            <div
              onClick={() => setAnnual(v => !v)}
              style={{ width: 44, height: 24, borderRadius: 12, background: annual ? "var(--accent)" : "var(--border)", position: "relative", cursor: "pointer", transition: "background 0.2s" }}
            >
              <div style={{ position: "absolute", top: 2, left: annual ? 22 : 2, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left 0.2s" }} />
            </div>
            <span style={{ fontSize: 13, color: annual ? "var(--text)" : "var(--muted)" }}>Annual</span>
            {annual && (
              <span style={{ fontSize: 11, background: "var(--accent-glow)", color: "var(--accent)", padding: "2px 8px", borderRadius: 10, border: "0.5px solid var(--accent)", fontFamily: "var(--mono)" }}>
                Save 20%
              </span>
            )}
          </div>
        </div>
 
        {/* Plan cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {PRICING_PLANS.map(plan => {
            const price = plan.monthlyPrice === 0 ? 0
              : annual ? +(plan.monthlyPrice * 0.8).toFixed(2)
              : plan.monthlyPrice;
 
            return (
              <div
                key={plan.id}
                onClick={() => setSelected(plan.id)}
                style={{
                  background:   "var(--card)",
                  borderRadius: 12,
                  border:       plan.highlight
                    ? "1.5px solid var(--accent)"
                    : selected === plan.id
                      ? "0.5px solid var(--accent)"
                      : "0.5px solid var(--border)",
                  padding:      "2rem",
                  cursor:       "pointer",
                  transition:   "all 0.2s",
                  position:     "relative",
                  boxShadow:    plan.highlight ? "0 0 40px var(--accent-glow)" : "none",
                }}
              >
                {plan.highlight && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "#000", fontSize: 11, fontWeight: 600, padding: "3px 12px", borderRadius: 10, whiteSpace: "nowrap", fontFamily: "var(--mono)" }}>
                    MOST POPULAR
                  </div>
                )}
 
                <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.08em", marginBottom: 8 }}>
                  {plan.name.toUpperCase()}
                </p>
 
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 4 }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 40, fontWeight: 500 }}>
                    {price === 0 ? "Free" : `£${price}`}
                  </span>
                  {price > 0 && <span style={{ color: "var(--muted)", fontSize: 13, marginBottom: 8 }}>/month</span>}
                </div>
 
                <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: "1.5rem" }}>{plan.desc}</p>
 
                <div style={{ borderTop: "0.5px solid var(--border)", paddingTop: "1.25rem", marginBottom: "1.5rem" }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                      <span style={{ color: "var(--accent)", fontSize: 14, marginTop: 1, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
 
                <button
                  onClick={e => { e.stopPropagation(); setShowConfirm(plan.id); }}
                  style={{
                    width:        "100%",
                    padding:      "12px",
                    borderRadius: 6,
                    fontSize:     14,
                    fontWeight:   500,
                    background:   plan.highlight ? "var(--accent)" : "transparent",
                    color:        plan.highlight ? "#000" : "var(--text)",
                    border:       plan.highlight ? "none" : "0.5px solid var(--border)",
                    cursor:       "pointer",
                    transition:   "all 0.2s",
                    fontFamily:   "var(--sans)",
                  }}
                  onMouseEnter={e => {
                    if (plan.highlight) { e.currentTarget.style.background = "var(--accent-dim)"; }
                    else { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }
                  }}
                  onMouseLeave={e => {
                    if (plan.highlight) { e.currentTarget.style.background = "var(--accent)"; }
                    else { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; }
                  }}
                >
                  {plan.cta} →
                </button>
              </div>
            );
          })}
        </div>
 
        {/* Per-plan waitlist modal */}
        {showConfirm && (
          <div
            onClick={() => setShowConfirm(null)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{ background: "var(--card)", border: "0.5px solid var(--border)", borderRadius: 12, padding: "2rem", maxWidth: 420, width: "90%", animation: "countUp 0.3s ease" }}
            >
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 24, marginBottom: 8 }}>Almost there!</h3>
              <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: "1.5rem" }}>
                Enter your email to get early access to the{" "}
                <strong style={{ color: "var(--text)" }}>{PRICING_PLANS.find(p => p.id === showConfirm)?.name}</strong>{" "}
                plan. We're onboarding in batches — you'll be first in the queue.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                style={{ width: "100%", padding: "12px 14px", borderRadius: 6, border: "0.5px solid var(--border)", background: "var(--surface)", color: "var(--text)", fontFamily: "var(--sans)", fontSize: 14, marginBottom: 10, outline: "none" }}
                onFocus={e  => e.target.style.borderColor = "var(--accent)"}
                onBlur={e   => e.target.style.borderColor = "var(--border)"}
              />
              <button
                onClick={() => setShowConfirm(null)}
                style={{ width: "100%", background: "var(--accent)", color: "#000", border: "none", padding: "12px", borderRadius: 6, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "var(--sans)", marginBottom: 8 }}
              >
                Join the waitlist ✓
              </button>
              <button
                onClick={() => setShowConfirm(null)}
                style={{ width: "100%", background: "transparent", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: 13, fontFamily: "var(--sans)" }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
 
      </div>
    </section>
  );
};
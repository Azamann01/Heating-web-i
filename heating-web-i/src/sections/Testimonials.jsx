import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../constants/data";
 
/**
 * Testimonials
 * Auto-rotating carousel (5s interval).
 * Dot indicators let users jump to any review manually.
 */
export default function Testimonials() {
  const [active, setActive] = useState(0);
 
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
 
  const t = TESTIMONIALS[active];
 
  return (
    <section id="testimonials" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
 
        <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 12 }}>
          EARLY USERS
        </p>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px,5vw,54px)", letterSpacing: "-0.03em", marginBottom: "3rem" }}>
          Real results, real savings
        </h2>
 
        {/* Card */}
        <div
          key={active}
          style={{
            background:   "var(--card)",
            border:       "0.5px solid var(--border)",
            borderRadius: 12,
            padding:      "2.5rem",
            marginBottom: "2rem",
            animation:    "fadeUp 0.4s ease",
          }}
        >
          {/* Stars */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            {"★".repeat(t.rating).split("").map((_, i) => (
              <span key={i} style={{ color: "var(--accent)", fontSize: 20 }}>★</span>
            ))}
          </div>
 
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--text)", lineHeight: 1.7, marginBottom: "2rem", fontStyle: "italic" }}>
            "{t.text}"
          </p>
 
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontWeight: 500 }}>{t.name}</p>
              <p style={{ fontSize: 13, color: "var(--muted)" }}>{t.role}</p>
            </div>
            <div style={{ background: "var(--accent-glow)", border: "0.5px solid rgba(0,232,122,0.3)", borderRadius: 8, padding: "8px 16px" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 14, color: "var(--accent)" }}>{t.stat}</span>
            </div>
          </div>
        </div>
 
        {/* Dot navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width:        i === active ? 24 : 8,
                height:       8,
                borderRadius: 4,
                border:       "none",
                background:   i === active ? "var(--accent)" : "var(--border)",
                cursor:       "pointer",
                transition:   "all 0.3s",
                padding:      0,
              }}
            />
          ))}
        </div>
 
      </div>
    </section>
  );
};
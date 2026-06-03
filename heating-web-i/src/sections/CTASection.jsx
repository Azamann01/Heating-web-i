import { useState } from "react";
import { FAQS } from "../constants/data";
 
/**
 * FAQ
 * Accordion — one item open at a time.
 * Clicking the active item closes it; clicking another opens it.
 */
export default function FAQ() {
  const [open, setOpen] = useState(null);
 
  return (
    <section id="faq" style={{ padding: "6rem 2rem", background: "var(--surface)", borderTop: "0.5px solid var(--border)" }}>
      <div style={{ maxWidth: 740, margin: "0 auto" }}>
 
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 12 }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px,5vw,54px)", letterSpacing: "-0.03em" }}>
            Common questions
          </h2>
        </div>
 
        {FAQS.map((faq, i) => (
          <div
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              border:       "0.5px solid",
              borderColor:  open === i ? "var(--accent)" : "var(--border)",
              borderRadius: 8,
              marginBottom: 8,
              overflow:     "hidden",
              cursor:       "pointer",
              background:   open === i ? "var(--card)" : "transparent",
              transition:   "all 0.2s",
            }}
          >
            {/* Question row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.25rem" }}>
              <span style={{
                fontSize:   15,
                fontWeight: open === i ? 500 : 400,
                color:      open === i ? "var(--text)" : "var(--muted)",
                transition: "color 0.2s",
                paddingRight: 16,
              }}>
                {faq.q}
              </span>
              <span style={{
                color:      "var(--accent)",
                fontSize:   20,
                flexShrink: 0,
                transition: "transform 0.2s",
                transform:  open === i ? "rotate(45deg)" : "rotate(0)",
                display:    "inline-block",
              }}>
                +
              </span>
            </div>
 
            {/* Answer */}
            {open === i && (
              <div style={{ padding: "0 1.25rem 1.25rem", animation: "fadeUp 0.3s ease" }}>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8 }}>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
 
      </div>
    </section>
  );
};
import { useEffect, useState } from "react";
import { HERO_STATS } from "../constants/data";
 
/**
 * HeroSection
 * Full-viewport hero with:
 * - Grid + radial-glow background
 * - Animated headline reveal
 * - Live SPF counter animation on mount
 * - Dual CTAs: "Check my heat pump" (modal) and "See how it works" (scroll)
 * - Three key stat cards
 * - Scroll indicator
 */
export default function HeroSection({ onDemoClick }) {
  const [animated, setAnimated] = useState(false);
 
  // Trigger staggered CSS animation classes after mount
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);
 
  return (
    <section style={{
      minHeight:      "100vh",
      display:        "flex",
      flexDirection:  "column",
      justifyContent: "center",
      alignItems:     "center",
      padding:        "100px 2rem 4rem",
      position:       "relative",
      overflow:       "hidden",
      textAlign:      "center",
    }}>
 
      {/* Grid background */}
      <div style={{
        position:            "absolute",
        inset:               0,
        backgroundImage:     "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize:      "60px 60px",
        opacity:             0.4,
        pointerEvents:       "none",
      }} />
 
      {/* Radial accent glow */}
      <div style={{
        position:      "absolute",
        top:           "30%",
        left:          "50%",
        transform:     "translate(-50%, -50%)",
        width:         600,
        height:        600,
        background:    "radial-gradient(circle, rgba(0,232,122,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
 
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 860 }}>
 
        {/* Live badge */}
        <div style={{
          display:      "inline-flex",
          alignItems:   "center",
          gap:          8,
          background:   "var(--surface)",
          border:       "0.5px solid var(--border)",
          borderRadius: 20,
          padding:      "6px 16px",
          marginBottom: "2rem",
          animation:    "fadeUp 0.6s ease both",
        }}>
          <span style={{
            width:        7,
            height:       7,
            borderRadius: "50%",
            background:   "var(--accent)",
            display:      "inline-block",
            animation:    "pulse 2s infinite",
          }} />
          <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--mono)" }}>
            Peer-reviewed gap confirmed — CIBSE Journal 2026
          </span>
        </div>
 
        {/* Headline */}
        <h1 style={{
          fontFamily:    "var(--serif)",
          fontSize:      "clamp(42px, 7vw, 84px)",
          lineHeight:    1.05,
          letterSpacing: "-0.03em",
          marginBottom:  "1.5rem",
          animation:     "fadeUp 0.7s 0.1s ease both",
          opacity:       0,
          animationFillMode: "forwards",
        }}>
          Your heat pump is<br />
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>silently underperforming</span>
        </h1>
 
        {/* Sub-headline */}
        <p style={{
          fontSize:          "clamp(16px, 2vw, 20px)",
          color:             "var(--muted)",
          maxWidth:          600,
          margin:            "0 auto 2.5rem",
          lineHeight:        1.7,
          animation:         "fadeUp 0.7s 0.2s ease both",
          opacity:           0,
          animationFillMode: "forwards",
        }}>
          UK heat pumps average an SPF of 2.81. Well-configured systems reach 3.86. HeatIQ identifies and fixes the gap — remotely, automatically, and affordably.
        </p>
 
        {/* CTAs */}
        <div style={{
          display:           "flex",
          gap:               12,
          justifyContent:    "center",
          flexWrap:          "wrap",
          marginBottom:      "4rem",
          animation:         "fadeUp 0.7s 0.3s ease both",
          opacity:           0,
          animationFillMode: "forwards",
        }}>
          <button
            onClick={onDemoClick}
            style={{
              background:   "var(--accent)",
              color:        "#000",
              border:       "none",
              padding:      "14px 36px",
              borderRadius: 6,
              fontSize:     16,
              fontWeight:   600,
              cursor:       "pointer",
              transition:   "all 0.2s",
              fontFamily:   "var(--sans)",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,232,122,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = "none"; }}
          >
            Check my heat pump →
          </button>
 
          <a
            href="#how-it-works"
            style={{
              background:   "transparent",
              color:        "var(--text)",
              border:       "0.5px solid var(--border)",
              padding:      "14px 36px",
              borderRadius: 6,
              fontSize:     16,
              fontWeight:   400,
              cursor:       "pointer",
              transition:   "all 0.2s",
              fontFamily:   "var(--sans)",
              textDecoration: "none",
              display:      "inline-block",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; }}
          >
            See how it works
          </a>
        </div>
 
        {/* Stats row */}
        <div style={{
          display:           "flex",
          gap:               40,
          justifyContent:    "center",
          flexWrap:          "wrap",
          animation:         "fadeUp 0.7s 0.4s ease both",
          opacity:           0,
          animationFillMode: "forwards",
        }}>
          {HERO_STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 40, fontWeight: 500, color: s.color, lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: "var(--border)", marginTop: 2, fontFamily: "var(--mono)" }}>{s.note}</div>
            </div>
          ))}
        </div>
 
      </div>
 
      {/* Scroll indicator */}
      <div style={{
        position:      "absolute",
        bottom:        32,
        left:          "50%",
        transform:     "translateX(-50%)",
        display:       "flex",
        flexDirection: "column",
        alignItems:    "center",
        gap:           6,
        opacity:       0.4,
      }}>
        <span style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--muted)" }}>scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--muted), transparent)" }} />
      </div>
 
    </section>
  );
};
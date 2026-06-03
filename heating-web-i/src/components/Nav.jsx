
import { useScrolled } from "./hooks/useScrolled";
import { NAV_LINKS } from "./constants/data";
import LogoMark from "./Footer";
 
/**
 * Nav
 * Sticky top navigation bar.
 * - Transparent on page load; gains backdrop-blur + border on scroll.
 * - Links smooth-scroll to each section.
 * - "Get early access" CTA calls onDemoClick.
 */
export default function Nav({ onDemoClick }) {
  const scrolled = useScrolled();
 
  return (
    <nav style={{
      position:       "fixed",
      top:            0,
      left:           0,
      right:          0,
      zIndex:         100,
      padding:        "0 2rem",
      height:         "64px",
      display:        "flex",
      alignItems:     "center",
      background:     scrolled ? "rgba(10,15,13,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom:   scrolled ? "0.5px solid var(--border)" : "none",
      transition:     "all 0.3s ease",
    }}>
      <div style={{
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        width:          "100%",
        maxWidth:       1200,
        margin:         "0 auto",
      }}>
 
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoMark size={32} />
          <span style={{ fontFamily: "var(--serif)", fontSize: 22, letterSpacing: "-0.02em" }}>
            HeatIQ
          </span>
        </div>
 
        {/* Links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{ color: "var(--muted)", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              {label}
            </a>
          ))}
        </div>
 
        {/* CTA */}
        <button
          onClick={onDemoClick}
          style={{
            background:   "var(--accent)",
            color:        "#000",
            border:       "none",
            padding:      "10px 24px",
            borderRadius: 6,
            fontFamily:   "var(--sans)",
            fontWeight:   600,
            fontSize:     14,
            cursor:       "pointer",
            transition:   "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-dim)"; e.currentTarget.style.transform = "scale(1.03)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)";     e.currentTarget.style.transform = "scale(1)"; }}
        >
          Get early access
        </button>
 
      </div>
    </nav>
  );
}
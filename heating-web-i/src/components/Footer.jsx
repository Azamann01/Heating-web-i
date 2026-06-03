import LogoMark from "./LogoMark";
 
const FOOTER_LINKS = ["Privacy", "Terms", "GDPR", "Contact"];
 
/**
 * Footer
 * Simple bottom bar with logo, legal links, and build note.
 */
export default function Footer() {
  return (
    <footer style={{ borderTop: "0.5px solid var(--border)", padding: "2rem" }}>
      <div style={{
        display:        "flex",
        justifyContent: "space-between",
        alignItems:     "center",
        maxWidth:       1100,
        margin:         "0 auto",
        flexWrap:       "wrap",
        gap:            16,
      }}>
 
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <LogoMark size={24} />
          <span style={{ fontFamily: "var(--serif)", fontSize: 18 }}>HeatIQ</span>
          <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--mono)" }}>© 2026</span>
        </div>
 
        {/* Legal links */}
        <div style={{ display: "flex", gap: 24 }}>
          {FOOTER_LINKS.map(l => (
            <a
              key={l}
              href="#"
              style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "var(--text)"}
              onMouseLeave={e => e.target.style.color = "var(--muted)"}
            >
              {l}
            </a>
          ))}
        </div>
 
        {/* Build note */}
        <p style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--mono)" }}>
          Built for the UK Innovator Founder Visa
        </p>
 
      </div>
    </footer>
  );
}
/**
 * LogoMark
 * The HeatIQ flame/heat-pump SVG icon, used in Nav and Footer.
 * Props: size (number, default 32)
 */
export default function LogoMark({ size = 32 }) {
    return (
      <div style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--accent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <svg
          width={size * 0.5}
          height={size * 0.5}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 2 L8 8 M5 5 L8 2 L11 5"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 9 C4 12 12 12 12 9 C12 7 10 6 8 6 C6 6 4 7 4 9Z"
            fill="#000"
            opacity="0.8"
          />
        </svg>
      </div>
    );
  }
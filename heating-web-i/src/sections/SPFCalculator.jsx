import { useState } from "react";
import { BRANDS, CONTROL_MODES } from "../constants/data";
 
/**
 * SPFCalculator
 * Free diagnostic tool — 4 inputs, live result panel.
 * Inputs:  brand selector, flow temp slider, control mode radio, weather comp toggle
 * Output:  estimated SPF, efficiency loss %, annual cost gap, HeatIQ recovery estimate
 */
export default function SPFCalculator() {
  const [brand,      setBrand]      = useState("Vaillant");
  const [flowTemp,   setFlowTemp]   = useState(55);
  const [cycling,    setCycling]    = useState("room-thermostat");
  const [weatherComp,setWeatherComp]= useState(false);
  const [result,     setResult]     = useState(null);
  const [loading,    setLoading]    = useState(false);
 
  // Simple SPF model — directional, not certified
  const calculate = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      let spf = 3.86;
      if (flowTemp > 50) spf -= (flowTemp - 50) * 0.04;
      if (cycling === "room-thermostat") spf -= 0.45;
      if (cycling === "weather-comp-partial") spf -= 0.15;
      if (!weatherComp) spf -= 0.3;
      spf = Math.max(1.8, Math.min(4.2, +spf.toFixed(2)));
 
      const loss       = ((3.86 - spf) / 3.86 * 100).toFixed(0);
      const extraCost  = Math.round((3.86 / spf - 1) * 800);
      const recovered  = Math.round(extraCost * 0.7);
      setResult({ spf, loss, extraCost, recovered, optimal: spf >= 3.5 });
      setLoading(false);
    }, 1200);
  };
 
  return (
    <section
      id="features"
      style={{
        padding:      "6rem 2rem",
        background:   "var(--surface)",
        borderTop:    "0.5px solid var(--border)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
 
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 12 }}>
            FREE DIAGNOSTIC
          </p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px,5vw,54px)", letterSpacing: "-0.03em" }}>
            Estimate your performance gap
          </h2>
          <p style={{ color: "var(--muted)", marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>
            Answer 4 questions. Get an instant SPF estimate and annual savings projection.
          </p>
        </div>
 
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
 
          {/* ── Form ─────────────────────────────────────────────────── */}
          <div style={{ background: "var(--card)", border: "0.5px solid var(--border)", borderRadius: 12, padding: "2rem" }}>
 
            {/* Brand */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: 13, color: "var(--muted)", marginBottom: 8, fontFamily: "var(--mono)" }}>
                Heat pump brand
              </label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {BRANDS.map(m => (
                  <button
                    key={m}
                    onClick={() => setBrand(m)}
                    style={{
                      padding:      "8px 14px",
                      borderRadius: 6,
                      fontSize:     13,
                      border:       brand === m ? "1px solid var(--accent)" : "0.5px solid var(--border)",
                      background:   brand === m ? "var(--accent-glow)" : "var(--surface)",
                      color:        brand === m ? "var(--accent)" : "var(--muted)",
                      cursor:       "pointer",
                      transition:   "all 0.15s",
                      fontFamily:   "var(--sans)",
                    }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
 
            {/* Flow temperature */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: 13, color: "var(--muted)", marginBottom: 8, fontFamily: "var(--mono)" }}>
                Typical flow temperature:{" "}
                <span style={{ color: flowTemp > 50 ? "var(--danger)" : "var(--accent)" }}>
                  {flowTemp}°C
                </span>
              </label>
              <input
                type="range"
                min={35}
                max={70}
                value={flowTemp}
                onChange={e => setFlowTemp(+e.target.value)}
                style={{ width: "100%", accentColor: "var(--accent)", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--muted)", fontFamily: "var(--mono)", marginTop: 4 }}>
                <span>35°C ideal</span><span>55°C typical</span><span>70°C boiler-mode</span>
              </div>
            </div>
 
            {/* Control mode */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: 13, color: "var(--muted)", marginBottom: 8, fontFamily: "var(--mono)" }}>
                Control mode
              </label>
              {CONTROL_MODES.map(opt => (
                <label
                  key={opt.val}
                  onClick={() => setCycling(opt.val)}
                  style={{
                    display:      "flex",
                    alignItems:   "flex-start",
                    gap:          10,
                    padding:      "10px 12px",
                    borderRadius: 6,
                    border:       cycling === opt.val ? "1px solid var(--accent)" : "0.5px solid var(--border)",
                    background:   cycling === opt.val ? "var(--accent-glow)" : "transparent",
                    cursor:       "pointer",
                    marginBottom: 6,
                    transition:   "all 0.15s",
                  }}
                >
                  <div style={{
                    width:        16,
                    height:       16,
                    borderRadius: "50%",
                    border:       cycling === opt.val ? "5px solid var(--accent)" : "1.5px solid var(--muted)",
                    flexShrink:   0,
                    marginTop:    1,
                    transition:   "all 0.15s",
                  }} />
                  <div>
                    <div style={{ fontSize: 13, color: "var(--text)", fontWeight: 500 }}>{opt.label}</div>
                    <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{opt.note}</div>
                  </div>
                </label>
              ))}
            </div>
 
            {/* Weather comp toggle */}
            <label
              onClick={() => setWeatherComp(v => !v)}
              style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginBottom: "1.5rem" }}
            >
              <div style={{
                width:        44,
                height:       24,
                borderRadius: 12,
                background:   weatherComp ? "var(--accent)" : "var(--border)",
                position:     "relative",
                transition:   "background 0.2s",
                flexShrink:   0,
              }}>
                <div style={{
                  position:     "absolute",
                  top:          2,
                  left:         weatherComp ? 22 : 2,
                  width:        20,
                  height:       20,
                  borderRadius: "50%",
                  background:   "#fff",
                  transition:   "left 0.2s",
                }} />
              </div>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>
                Has a weather compensation curve been programmed
              </span>
            </label>
 
            <button
              onClick={calculate}
              disabled={loading}
              style={{
                width:        "100%",
                background:   "var(--accent)",
                color:        "#000",
                border:       "none",
                padding:      "14px",
                borderRadius: 6,
                fontSize:     15,
                fontWeight:   600,
                cursor:       loading ? "wait" : "pointer",
                transition:   "all 0.2s",
                fontFamily:   "var(--sans)",
                opacity:      loading ? 0.7 : 1,
              }}
              onMouseEnter={e => !loading && (e.currentTarget.style.background = "var(--accent-dim)")}
              onMouseLeave={e => !loading && (e.currentTarget.style.background = "var(--accent)")}
            >
              {loading ? "Analysing system…" : "Calculate my SPF estimate →"}
            </button>
          </div>
 
          {/* ── Result panel ──────────────────────────────────────────── */}
          <div style={{ background: "var(--card)", border: "0.5px solid var(--border)", borderRadius: 12, padding: "2rem", minHeight: 320 }}>
 
            {/* Idle state */}
            {!result && !loading && (
              <div style={{ height: "100%", minHeight: 280, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", opacity: 0.4, gap: 12 }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" />
                  <path d="M24 14v10l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <p style={{ color: "var(--muted)", fontSize: 14, textAlign: "center" }}>
                  Complete the form to see your personalised SPF estimate and saving potential
                </p>
              </div>
            )}
 
            {/* Loading state */}
            {loading && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 280, gap: 16 }}>
                <div style={{ width: 40, height: 40, border: "2px solid var(--border)", borderTop: "2px solid var(--accent)", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                <p style={{ color: "var(--muted)", fontFamily: "var(--mono)", fontSize: 13 }}>
                  Modelling system behaviour…
                </p>
              </div>
            )}
 
            {/* Result state */}
            {result && !loading && (
              <div style={{ animation: "countUp 0.5s ease" }}>
                <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 16 }}>
                  ESTIMATED RESULT
                </p>
 
                <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 8 }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 72, fontWeight: 500, lineHeight: 1, color: result.optimal ? "var(--accent)" : "var(--danger)" }}>
                    {result.spf}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>Seasonal Performance Factor</div>
                    <div style={{ fontSize: 12, fontFamily: "var(--mono)", color: result.optimal ? "var(--accent)" : "var(--danger)", marginTop: 2 }}>
                      {result.optimal ? "✓ Within optimal range" : `▼ ${result.loss}% below optimal`}
                    </div>
                  </div>
                </div>
 
                {/* SPF bar */}
                <div style={{ height: 8, background: "var(--surface)", borderRadius: 4, marginBottom: 24, overflow: "hidden" }}>
                  <div style={{
                    height:     "100%",
                    width:      `${(result.spf / 4.2) * 100}%`,
                    background: result.optimal ? "var(--accent)" : "linear-gradient(90deg, var(--danger), var(--warn))",
                    borderRadius: 4,
                    transition: "width 1s ease",
                  }} />
                </div>
 
                {!result.optimal && (
                  <>
                    <div style={{ background: "rgba(255,92,92,0.08)", border: "0.5px solid rgba(255,92,92,0.2)", borderRadius: 8, padding: "1rem", marginBottom: "1rem" }}>
                      <p style={{ fontSize: 13, color: "var(--danger)", fontWeight: 500 }}>Estimated excess running cost</p>
                      <p style={{ fontFamily: "var(--mono)", fontSize: 32, color: "var(--text)", marginTop: 4 }}>
                        +£{result.extraCost}<span style={{ fontSize: 14, color: "var(--muted)" }}>/year</span>
                      </p>
                    </div>
                    <div style={{ background: "var(--accent-glow)", border: "0.5px solid rgba(0,232,122,0.2)", borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
                      <p style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500 }}>HeatIQ could recover</p>
                      <p style={{ fontFamily: "var(--mono)", fontSize: 32, color: "var(--text)", marginTop: 4 }}>
                        ~£{result.recovered}<span style={{ fontSize: 14, color: "var(--muted)" }}>/year</span>
                      </p>
                      <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
                        via remote setting optimisation — no engineer visit needed in most cases
                      </p>
                    </div>
                  </>
                )}
 
                <button
                  onClick={() => document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })}
                  style={{
                    width:        "100%",
                    background:   "var(--accent)",
                    color:        "#000",
                    border:       "none",
                    padding:      "12px",
                    borderRadius: 6,
                    fontSize:     14,
                    fontWeight:   600,
                    cursor:       "pointer",
                    fontFamily:   "var(--sans)",
                  }}
                >
                  Start recovering this efficiency →
                </button>
              </div>
            )}
 
          </div>
        </div>
      </div>
    </section>
  );
}
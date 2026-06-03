
// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
    { label: "Features",     href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing",      href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ",          href: "#faq" },
  ];
   
  // ── Hero stats ────────────────────────────────────────────────────────────────
  export const HERO_STATS = [
    {
      value: "2.81",
      label: "Average UK heat pump SPF",
      note:  "Electrification of Heat trial",
      color: "var(--danger)",
    },
    {
      value: "3.86",
      label: "Optimised system SPF",
      note:  "HeatPumpMonitor.org data",
      color: "var(--accent)",
    },
    {
      value: "27%",
      label: "Efficiency loss",
      note:  "= £180–£400/yr extra bills",
      color: "var(--warn)",
    },
  ];
   
  // ── Calculator options ────────────────────────────────────────────────────────
  export const BRANDS = ["Vaillant", "Daikin", "Mitsubishi", "Samsung", "Nibe", "Other"];
   
  export const CONTROL_MODES = [
    {
      val:   "room-thermostat",
      label: "Room thermostat",
      note:  "Causes stop-start cycling — most common issue",
    },
    {
      val:   "weather-comp-partial",
      label: "Weather compensation (partial)",
      note:  "Better but often miscalibrated",
    },
    {
      val:   "weather-comp-full",
      label: "Weather compensation (fully tuned)",
      note:  "Optimal — rare in UK installations",
    },
  ];
   
  // ── How it works steps ────────────────────────────────────────────────────────
  export const HOW_IT_WORKS_STEPS = [
    {
      num:         "01",
      icon:        "🔌",
      title:       "Connect your system",
      detail:      "HeatIQ integrates directly with your heat pump's cloud API — Vaillant eRELAX, Daikin Online Controller, Mitsubishi MELCloud, Samsung SmartThings, and more. No hardware. No engineer visit. Setup takes 4 minutes.",
      metric:      "4 min",
      metricLabel: "avg. setup time",
    },
    {
      num:         "02",
      icon:        "🧠",
      title:       "AI performance audit",
      detail:      "Our ML engine — trained on 594 real UK heat pump datasets from HeatPumpMonitor.org — analyses your flow temperatures, compressor modulation, cycling frequency, and weather-compensation curves to pinpoint every efficiency leak.",
      metric:      "594",
      metricLabel: "real UK datasets trained on",
    },
    {
      num:         "03",
      icon:        "⚡",
      title:       "Remote optimisation",
      detail:      "In 83% of cases, our certified heating engineers push corrected settings directly to your system via the cloud API — no home visit required. Weather compensation curves, flow temperature set-points, and thermostat control logic are all addressable remotely.",
      metric:      "83%",
      metricLabel: "of fixes require no visit",
    },
    {
      num:         "04",
      icon:        "📡",
      title:       "Continuous monitoring",
      detail:      "HeatIQ watches your system 24/7 and alerts you to performance drift, seasonal re-calibration needs, and early fault indicators before they become expensive breakdowns. Monthly SPF reports show your efficiency trajectory.",
      metric:      "24/7",
      metricLabel: "live monitoring",
    },
  ];
   
  // ── Pricing plans ─────────────────────────────────────────────────────────────
  export const PRICING_PLANS = [
    {
      id:           "starter",
      name:         "Starter",
      monthlyPrice: 0,
      desc:         "One-time SPF health check",
      highlight:    false,
      cta:          "Start free",
      features: [
        "1 property EPC + performance check",
        "Estimated SPF & efficiency score",
        "Top 3 improvement recommendations",
        "No credit card required",
      ],
    },
    {
      id:           "core",
      name:         "Core",
      monthlyPrice: 9.99,
      desc:         "Continuous monitoring & recovery",
      highlight:    true,
      cta:          "Start Core",
      features: [
        "Live API monitoring — all major brands",
        "AI SPF optimisation (remote)",
        "Monthly performance report",
        "24/7 fault detection alerts",
        "Access to certified engineer network",
        "Priority support",
      ],
    },
    {
      id:           "portfolio",
      name:         "Portfolio",
      monthlyPrice: 24.99,
      desc:         "Multi-property landlords & agents",
      highlight:    false,
      cta:          "Start Portfolio",
      features: [
        "Everything in Core",
        "Unlimited properties",
        "White-label reports for tenants",
        "MEES compliance tracking",
        "Installer quote management",
        "API access for property managers",
      ],
    },
  ];
   
  // ── Testimonials ──────────────────────────────────────────────────────────────
  export const TESTIMONIALS = [
    {
      name:   "Sarah M.",
      role:   "Homeowner, Leeds",
      rating: 5,
      stat:   "SPF: 2.4 → 3.7",
      text:   "My heat pump was costing me £180/month more than my neighbour's identical system. HeatIQ diagnosed a miscalibrated weather compensation curve in 6 hours and pushed the fix remotely. My next bill dropped by £160.",
    },
    {
      name:   "James K.",
      role:   "Private landlord, 4 properties",
      rating: 5,
      stat:   "£640/yr recovered",
      text:   "Three of my four rental properties had heat pumps running at 60°C flow temperature — essentially in boiler mode. HeatIQ found this instantly. Two were fixed remotely, one needed a 30-min site visit. Total cost: £9.99/month.",
    },
    {
      name:   "Tom & Fiona R.",
      role:   "New build homeowners, Bristol",
      rating: 5,
      stat:   "SPF: 2.1 → 3.9",
      text:   "Our installer set the room thermostat as the primary control and never came back to tune it. We'd complained three times to no avail. HeatIQ escalated to a certified engineer and had us fully optimised within a week.",
    },
  ];
   
  // ── FAQ ───────────────────────────────────────────────────────────────────────
  export const FAQS = [
    {
      q: "Which heat pump brands does HeatIQ support?",
      a: "We currently integrate with Vaillant (eRELAX), Daikin (Online Controller), Mitsubishi Electric (MELCloud), Samsung (SmartThings), Nibe (Uplink), and Bosch (EasyControl). We're adding Stiebel Eltron and Panasonic in Q3 2026.",
    },
    {
      q: "Do I need an engineer to visit my home?",
      a: "In 83% of cases, no. Most optimisations — weather compensation recalibration, flow temperature correction, control mode switching — are achievable via cloud API. When a physical visit is needed, we dispatch from our vetted MCS-certified engineer network, typically within 3–5 days.",
    },
    {
      q: "Is the SPF calculator accurate?",
      a: "The calculator is a diagnostic estimate based on the known performance impact of each configuration factor, modelled against 594 real UK heat pump datasets. It gives you an accurate directional reading, not a certified measurement. A full HeatIQ monitoring subscription provides real SPF data from your actual system.",
    },
    {
      q: "What does 'remote optimisation' actually mean?",
      a: "Most modern heat pumps expose settings via their manufacturer's cloud API. Our team of certified heating engineers reviews the AI diagnosis and pushes corrected settings directly through that API — exactly the same way a field engineer would via the physical controller, but without the call-out charge or waiting.",
    },
    {
      q: "How does this help with my EPC and MEES compliance?",
      a: "A properly optimised heat pump achieves a higher Seasonal Performance Factor, which directly improves your property's SAP score and therefore its EPC rating. For landlords with properties below Band C, HeatIQ's optimisation and tracking features integrate with your MEES compliance journey.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Monthly plans cancel with 30 days notice, no questions asked. Annual plans are refunded pro-rata if cancelled within the first 90 days.",
    },
  ];
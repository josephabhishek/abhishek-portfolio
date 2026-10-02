export default function HeroVisual() {
  // x positions (of 400) for the four stage dots, used to align the labels underneath
  const stages = [
    { key: "Build", x: 28 },
    { key: "Launch", x: 168 },
    { key: "Rank", x: 268 },
    { key: "Grow", x: 372 },
  ];
  return (
    <div className="hv rv d2">
      <div className="hv-glow" aria-hidden="true" />

      <div className="hv-top">
        <span className="htag">Build &times; Grow</span>
        <span className="hv-live"><i /> Compounding</span>
      </div>

      <svg viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#B4482A" stopOpacity="0.22" />
            <stop offset="1" stopColor="#B4482A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gl" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#B4482A" stopOpacity="0.65" />
            <stop offset="1" stopColor="#B4482A" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* "do nothing" baseline — the flat line you beat */}
        <path
          className="hv-base"
          d="M28 452 C 130 449 250 447 372 444"
          fill="none"
          stroke="var(--muted)"
          strokeWidth="1.4"
          strokeDasharray="3 6"
          strokeLinecap="round"
        />

        {/* area under the growth curve */}
        <path
          className="hv-area"
          d="M28 452 C 110 452 120 360 168 322 C 210 288 232 300 268 236 C 300 180 320 150 372 84 L372 470 L28 470 Z"
          fill="url(#ga)"
        />

        {/* the growth curve */}
        <path
          className="perf-line"
          d="M28 452 C 110 452 120 360 168 322 C 210 288 232 300 268 236 C 300 180 320 150 372 84"
          fill="none"
          stroke="url(#gl)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />

        {/* stage points, popped in sequentially */}
        <circle className="perf-dot" style={{ animationDelay: "1.05s" }} cx="28" cy="452" r="3" />
        <circle className="perf-dot" style={{ animationDelay: "1.35s" }} cx="168" cy="322" r="3.4" />
        <circle className="perf-dot" style={{ animationDelay: "1.7s" }} cx="268" cy="236" r="3.4" />
        <circle className="perf-dot peak" style={{ animationDelay: "2.05s" }} cx="372" cy="84" r="5" />
      </svg>

      {/* peak marker + label */}
      <span className="hdot" style={{ right: "18px", top: "60px" }} />
      <span className="peak-chip">growth ↗</span>

      {/* stage labels aligned under their dots */}
      <div className="hv-stages" aria-hidden="true">
        {stages.map((s, i) => (
          <span
            className="hv-stage"
            key={s.key}
            style={{ left: `${(s.x / 400) * 100}%`, animationDelay: `${1.1 + i * 0.32}s` }}
          >
            {s.key}
          </span>
        ))}
      </div>
    </div>
  );
}
